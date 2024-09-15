import { parse, resolve } from "path";
import { React, Clean, Copy, Series, Spawn, Task, spawn, fmt } from "zman";

export const Protodump = (
	props: { binary?: string; output?: string },
	binary?: string,
	output?: string,
) => {
	binary! = props.binary ?? binary ?? "";
	output! = props.output ?? output ?? "";

	return (
		<Task name={`dump  ${fmt.path(parse(binary).base)} to ${fmt.path(output)}`}>
			<Spawn>
				z/bindings/protodump.exe -file {`"${binary}"`} -output {`"${output}"`}
			</Spawn>
		</Task>
	);
};
