import { decode, encode, type PacketName, type Payload } from "./packets";
import type { ISocket } from "./socket";

export class BaseAPI {
	constructor(public readonly socket: ISocket) {}

	send<Name extends PacketName>(packet: Name, payload: Payload<Name>) {
		const encoded = encode(packet, payload);
		return this.socket.send(packet, encoded);
	}

	on<Name extends PacketName>(packet: Name, handler: (payload: Payload<Name>) => any) {
		this.socket.on(packet, (bytes) => {
			const decoded = decode(packet, bytes);
			handler(decoded);
		});
	}

	once<Name extends PacketName>(packet: Name, handler: (payload: Payload<Name>) => any) {
		this.socket.once(packet, (bytes) => {
			const decoded = decode(packet, bytes);
			handler(decoded);
		});
	}
}
