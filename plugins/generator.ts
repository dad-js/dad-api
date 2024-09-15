import type { DescFile, DescMessage } from "@bufbuild/protobuf";
import type { Schema } from "@bufbuild/protoplugin";
import { camelCase, pascalCase } from "change-case-all";
import { join } from "path";
import {
	Project,
	SyntaxKind,
	VariableDeclarationKind,
	type SourceFile,
	ClassDeclaration,
	type ObjectLiteralExpression,
	type InterfaceDeclaration,
	Writers,
} from "ts-morph";

const path = (...path: string[]) => join("src", "generated", ...path) + ".ts";

export class Generator {
	schema: Schema;
	project: Project;
	index: SourceFile;
	modulesIndex: SourceFile;
	packetFile: SourceFile;
	packetNameToSchemaMap: ObjectLiteralExpression;
	packetPayloads: InterfaceDeclaration;
	packetIds: Record<string, number> = {};
	packetNames: Record<number, string> = {};

	constructor(schema: Schema) {
		this.schema = schema;
		this.project = new Project({
			tsConfigFilePath: "tsconfig.json",
		});

		this.index = this.project.createSourceFile(path("index"));
		this.modulesIndex = this.project.createSourceFile(path("modules/index"));

		const packetFile = schema.files.find((f) => f.name === "_PacketCommand")!;
		const packetCommandEnum = packetFile.enums[0];
		for (const v of packetCommandEnum.values) {
			this.packetIds[v.name] = v.number;
			this.packetNames[v.number] = v.name;
		}
	}

	generate() {
		this.generatePacketIds();

		for (const file of this.schema.files) {
			this.generateModule(file);
		}

		this.generateAPI();

		this.index.addExportDeclaration({
			moduleSpecifier: "./api",
		});
		this.index.addExportDeclaration({
			moduleSpecifier: "./modules",
		});

		const pbIndex = this.project.createSourceFile(path("pb/index"));
		for (const { name } of this.schema.files) {
			pbIndex.addExportDeclaration({
				moduleSpecifier: "./" + name + "_pb",
			});
		}

		this.project.saveSync();
	}

	generatePacketIds() {
		this.packetFile = this.project.createSourceFile(path("packets"));

		const nameToIdMap = this.packetFile
			.addVariableStatement({
				declarationKind: VariableDeclarationKind.Const,
				isExported: true,
				declarations: [
					{
						name: "packetNameToIdMap",
						initializer: Writers.assertion(Writers.object({}), "const"),
					},
				],
			})
			.getDeclarations()[0]
			.getInitializer()!
			.getChildrenOfKind(SyntaxKind.ObjectLiteralExpression)[0];

		const idToNameMap = this.packetFile
			.addVariableStatement({
				declarationKind: VariableDeclarationKind.Const,
				isExported: true,
				declarations: [
					{
						name: "packetIdToNameMap",
						initializer: Writers.assertion(Writers.object({}), "const"),
					},
				],
			})
			.getDeclarations()[0]
			.getInitializer()!
			.getChildrenOfKind(SyntaxKind.ObjectLiteralExpression)[0];

		for (const [name, id] of Object.entries(this.packetIds)) {
			nameToIdMap?.addPropertyAssignment({ name, initializer: "" + id });
			idToNameMap?.addPropertyAssignment({ name: "" + id, initializer: `"${name}"` });
		}

		this.packetNameToSchemaMap = this.packetFile
			.addVariableStatement({
				declarationKind: VariableDeclarationKind.Const,
				isExported: true,
				declarations: [
					{
						name: "packetNameToSchemaMap",
						initializer: Writers.assertion(Writers.object({}), "const"),
					},
				],
			})
			.getDeclarations()[0]
			.getInitializer()!
			.getChildrenOfKind(SyntaxKind.ObjectLiteralExpression)[0];

		this.packetPayloads = this.packetFile.addInterface({
			name: "PacketPayloads",
			isExported: true,
		});
	}

	generateAPI() {
		const apiFile = this.project.createSourceFile(path("api"));

		apiFile.addImportDeclaration({
			moduleSpecifier: "../libs/socket",
			isTypeOnly: true,
			namedImports: ["ISocket"],
		});

		apiFile.addImportDeclaration({
			moduleSpecifier: "../libs/baseapi",
			namedImports: ["BaseAPI"],
		});

		apiFile.addImportDeclaration({
			namedImports: this.schema.files.map(({ name }) => pascalCase(name + "Module")),
			moduleSpecifier: "./modules",
		});

		const api = apiFile.addClass({
			isExported: true,
			name: "API",
			extends: "BaseAPI",
		});

		for (const { name } of this.schema.files) {
			this.modulesIndex.addExportDeclaration({
				moduleSpecifier: "./" + camelCase(name),
			});

			api.addProperty({
				isReadonly: true,
				name: camelCase(name),
				type: pascalCase(name + "Module"),
			});
		}

		const apiConstructor = api.addConstructor({});
		apiConstructor.addParameter({
			name: "socket",
			type: "ISocket",
		});
		apiConstructor.setBodyText((writer) => {
			writer.writeLine("super(socket);");
			for (const { name } of this.schema.files) {
				writer.writeLine(
					`this.${camelCase(name)} = new ${pascalCase(name)}Module(socket);`,
				);
			}
		});
	}

	generateModule(file: DescFile) {
		const name = file.name;
		const output = this.project.createSourceFile(path("modules", camelCase(name)));

		output.addImportDeclaration({
			namedImports: ["Module"],
			moduleSpecifier: "../../libs/module",
		});

		output.addImportDeclaration({
			namedImports: ["Unmessage"],
			isTypeOnly: true,
			moduleSpecifier: "../../libs/deepomit",
		});

		const c = output.addClass({
			name: pascalCase(name + "Module"),
			isExported: true,
			extends: "Module",
		});

		c.addProperty({
			hasOverrideKeyword: true,
			name: "name",
			initializer: `"${pascalCase(name + "Module")}"`,
		});

		for (const msg of file.messages) {
			const packetName = msg.name.slice(1);
			const packetId = this.packetIds[packetName];
			if (packetId === undefined) continue;
			const name = packetName.slice(4);
			const typeName = pascalCase(packetName.slice(4));

			if (packetName.startsWith("C2S_") || packetName.startsWith("S2C_")) {
				this.packetFile.addImportDeclaration({
					namedImports: [
						{
							name: msg.name + "Schema",
						},
					],
					moduleSpecifier: "./pb/" + file.name + "_pb",
				});
				this.packetFile.addImportDeclaration({
					namedImports: [
						{
							name: typeName,
						},
					],
					isTypeOnly: true,
					moduleSpecifier: "./modules/" + camelCase(file.name),
				});
				output.addImportDeclaration({
					namedImports: [
						{
							name: msg.name,
							isTypeOnly: true,
						},
					],
					moduleSpecifier: "../pb/" + file.name + "_pb",
				});
				output.addTypeAlias({
					name: typeName,
					isExported: true,
					type: `Unmessage<${msg.name}>`,
				});

				this.packetNameToSchemaMap.addPropertyAssignment({
					name: packetName,
					initializer: msg.name + "Schema",
				});

				this.packetPayloads.addProperty({
					name: packetName,
					type: typeName,
				});
			}
			if (
				packetName.startsWith("C2S_") &&
				packetName.endsWith("_REQ") &&
				file.messages.find((m) => m.name === `SS2C_${name.slice(0, -4)}_RES`)
			) {
				this.generateCallMethod({ class: c, name: name.slice(0, -4) });
			}
			if (packetName.startsWith("C2S_")) {
				this.generateSendMethod({
					class: c,
					msg,
					name,
					packetName,
					packetId,
					type: typeName,
				});
			}
			if (packetName.startsWith("S2C_")) {
				this.generateReceiveMethod(false, {
					class: c,
					msg,
					name,
					packetName,
					packetId,
					type: typeName,
				});
				this.generateReceiveMethod(true, {
					class: c,
					msg,
					name,
					packetName,
					packetId,
					type: typeName,
				});
			}
		}
	}

	generateSendMethod(opts: ModuleOnewayMethodOptions) {
		const method = opts.class.addMethod({
			isAsync: true,
			name: camelCase("SEND_" + opts.name),
			returnType: "Promise<void>",
			parameters: [{ name: "payload", type: opts.type }],
		});
		method.addJsDoc({
			description: `Send ${opts.packetName}(${opts.packetId}) to server`,
		});
		method.setBodyText((w) => {
			w.writeLine(`return this.send("${opts.packetName}", payload);`);
		});
	}

	generateReceiveMethod(once: boolean, opts: ModuleOnewayMethodOptions) {
		const method = opts.class.addMethod({
			name: camelCase((once ? "ONCE_" : "ON_") + opts.name),
			returnType: "void",
			parameters: [{ name: "handler", type: `(payload: ${opts.type}) => any` }],
		});
		method.addJsDoc({
			description: `Receive ${opts.packetName}(${opts.packetId}) from server`,
		});
		method.setBodyText((w) => {
			w.writeLine(`this.${once ? "once" : "on"}("${opts.packetName}", handler);`);
		});
	}

	generateCallMethod(opts: ModuleTwowayMethodOptions) {
		const method = opts.class.addMethod({
			isAsync: true,
			name: camelCase(opts.name),
			returnType: `Promise<${pascalCase(opts.name + "_RES")}>`,
			parameters: [{ name: "payload", type: pascalCase(opts.name + "_REQ") }],
		});
		method.addJsDoc({
			description: `Call ${opts.name} on server`,
		});
		method.setBodyText((w) => {
			w.writeLine(`return new Promise(res => {`);
			w.indent(() => {
				w.writeLine(`this.once${pascalCase(opts.name)}Res(res);`);
				w.writeLine(`this.send${pascalCase(opts.name)}Req(payload);`);
			});
			w.writeLine("});");
		});
	}
}

interface ModuleTwowayMethodOptions {
	class: ClassDeclaration;
	name: string;
}

interface ModuleOnewayMethodOptions {
	class: ClassDeclaration;
	name: string;
	msg: DescMessage;
	packetName: string;
	packetId: number;
	type: string;
}
