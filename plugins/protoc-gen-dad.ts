import { createEcmaScriptPlugin, runNodeJs, type Schema } from "@bufbuild/protoplugin";
import { Generator } from "./generator";

const plugin = createEcmaScriptPlugin({
	name: "protoc-gen-dad",
	version: "v1",
	generateTs(schema: Schema) {
		const packetCommandFile = schema.files.find((f) => f.name === "_PacketCommand");
		if (!packetCommandFile) return;

		const generator = new Generator(schema);
		generator.generate();
	},
});

runNodeJs(plugin);
