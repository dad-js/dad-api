import {
	If,
	React,
	meta,
	z,
	Series,
	Task,
	Clean,
	TSC,
	Node,
	PNPM,
	NPX,
	Watch,
	Download,
} from "zman";
import { Protodump } from "./bindings/protodump";
import { resolve } from "path";

const { cmd } = z("dad-api", meta.app.version);

const getUrl = async () => {
	const buildVersion = await (
		await fetch("http://cdn.darkanddarker.com/Dark%20and%20Darker/Build/BuildVersion.txt")
	).text();
	return `http://cdn.darkanddarker.com/Dark%20and%20Darker/Build/Patch/${buildVersion.trim()}/DungeonCrawler/Binaries/Win64/DungeonCrawler.exe`;
};

const Proto = {
	dump: async () => (
		<Task name="proto dump">
			<Clean>src/proto</Clean>
			<Download>{await getUrl()} ./.cache/DungeonCrawler.exe</Download>
			<Protodump>{'"' + resolve(".cache/DungeonCrawler.exe") + '"'} ./proto/</Protodump>
			<Clean>.cache</Clean>
		</Task>
	),
	generate: () => (
		<Task name="proto generate">
			<Clean>src/generated</Clean>
			<NPX>buf generate --template z/buf.gen.es.yaml</NPX>
			<NPX>buf generate --template z/buf.gen.dad.yaml</NPX>
		</Task>
	),
	watch: () => (
		<Task name="proto watch">
			<Watch on="plugins">
				<Proto.generate></Proto.generate>
			</Watch>
		</Task>
	),
};
cmd("proto")
	.arg("string", "cmd", { choices: Object.keys(Proto) })
	.action((opts, cmd) => Proto[cmd]());

const Build = async (opts: { full?: boolean }) => (
	<Series>
		<Clean path="dist" />
		<If condition={opts.full}>
			<Proto.dump></Proto.dump>
			<Proto.generate></Proto.generate>
		</If>
		<Task name="build typescript">
			<TSC />
		</Task>
	</Series>
);
cmd("build").opt("boolean", "full").action(Build);

const Dev = async () => (
	<Series>
		<Clean path="dist" />
		<TSC watch={true}>
			<Node>./dist/test.js</Node>
		</TSC>
	</Series>
);
cmd("dev").action(Dev);

cmd("update").action(<PNPM>update</PNPM>);

cmd("publish")
	.opt("boolean", "build")
	.action((opts) => (
		<Series>
			<If condition={opts.build}>
				<Build full={true}></Build>
			</If>
			<PNPM>publish --no-git-checks</PNPM>
		</Series>
	));
