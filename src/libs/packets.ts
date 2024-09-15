import { create, fromBinary, toBinary } from "@bufbuild/protobuf";
import {
	packetIdToNameMap,
	packetNameToIdMap,
	packetNameToSchemaMap,
	PacketPayloads,
} from "../generated/packets";

export type PacketName = keyof typeof packetNameToIdMap;
export type PacketId = keyof typeof packetIdToNameMap;
export type PacketNameFromId<Id extends PacketId> = (typeof packetIdToNameMap)[Id];
export type PacketIdFromName<Name extends PacketName> = (typeof packetNameToIdMap)[Name];
export type Payload<Name extends PacketName> = Name extends keyof PacketPayloads
	? PacketPayloads[Name]
	: never;
export type Schema<Name extends PacketName> = Name extends keyof typeof packetNameToSchemaMap
	? (typeof packetNameToSchemaMap)[Name]
	: never;

export function getPacketId<Name extends PacketName>(packetName: Name): PacketIdFromName<Name> {
	return packetNameToIdMap[packetName] as PacketIdFromName<Name>;
}

export function getPacketName<Id extends PacketId>(packetId: Id): PacketNameFromId<Id> {
	return packetIdToNameMap[packetId] as PacketNameFromId<Id>;
}

export function getPacketSchema<Name extends PacketName>(packetName: Name): Schema<Name> {
	return packetNameToSchemaMap[packetName as keyof typeof packetNameToSchemaMap] as Schema<Name>;
}

export function decode<Name extends PacketName>(packet: Name, bytes: Uint8Array) {
	return fromBinary(getPacketSchema(packet), bytes) as any as Payload<Name>;
}

export function encode<Name extends PacketName>(packet: Name, payload: Payload<Name>): Uint8Array {
	const schema = getPacketSchema(packet);
	const msg = create(schema, payload as any);
	return toBinary(schema, msg);
}
