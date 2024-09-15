import type { PacketName } from "./packets";

export interface ISocket {
	send(cmd: PacketName, payload: Uint8Array): any;
	once(cmd: PacketName, cb: (bytes: Uint8Array) => void): any;
	on(cmd: PacketName, cb: (bytes: Uint8Array) => void): any;
}
