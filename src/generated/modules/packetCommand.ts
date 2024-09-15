import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_ALIVE_REQ } from "../pb/_PacketCommand_pb";
import { type SS2C_ALIVE_RES } from "../pb/_PacketCommand_pb";
import { type SC2S_RECONNECT_REQ } from "../pb/_PacketCommand_pb";
import { type SS2C_RECONNECT_RES } from "../pb/_PacketCommand_pb";
import { type SS2C_ALIVE_REVERSE_NOT } from "../pb/_PacketCommand_pb";
import { type SC2S_ALIVE_REVERSE_REQ } from "../pb/_PacketCommand_pb";
import { type SS2C_ALIVE_REVERSE_RES } from "../pb/_PacketCommand_pb";

export class PacketCommandModule extends Module {
    override name = "PacketCommandModule";

    /** Call ALIVE on server */
    async alive(payload: AliveReq): Promise<AliveRes> {
        return new Promise(res => {
            this.onceAliveRes(res);
            this.sendAliveReq(payload);
        });
    }

    /** Send C2S_ALIVE_REQ(1) to server */
    async sendAliveReq(payload: AliveReq): Promise<void> {
        return this.send("C2S_ALIVE_REQ", payload);
    }

    /** Receive S2C_ALIVE_RES(2) from server */
    onAliveRes(handler: (payload: AliveRes) => any): void {
        this.on("S2C_ALIVE_RES", handler);
    }

    /** Receive S2C_ALIVE_RES(2) from server */
    onceAliveRes(handler: (payload: AliveRes) => any): void {
        this.once("S2C_ALIVE_RES", handler);
    }

    /** Call RECONNECT on server */
    async reconnect(payload: ReconnectReq): Promise<ReconnectRes> {
        return new Promise(res => {
            this.onceReconnectRes(res);
            this.sendReconnectReq(payload);
        });
    }

    /** Send C2S_RECONNECT_REQ(3) to server */
    async sendReconnectReq(payload: ReconnectReq): Promise<void> {
        return this.send("C2S_RECONNECT_REQ", payload);
    }

    /** Receive S2C_RECONNECT_RES(4) from server */
    onReconnectRes(handler: (payload: ReconnectRes) => any): void {
        this.on("S2C_RECONNECT_RES", handler);
    }

    /** Receive S2C_RECONNECT_RES(4) from server */
    onceReconnectRes(handler: (payload: ReconnectRes) => any): void {
        this.once("S2C_RECONNECT_RES", handler);
    }

    /** Receive S2C_ALIVE_REVERSE_NOT(5) from server */
    onAliveReverseNot(handler: (payload: AliveReverseNot) => any): void {
        this.on("S2C_ALIVE_REVERSE_NOT", handler);
    }

    /** Receive S2C_ALIVE_REVERSE_NOT(5) from server */
    onceAliveReverseNot(handler: (payload: AliveReverseNot) => any): void {
        this.once("S2C_ALIVE_REVERSE_NOT", handler);
    }

    /** Call ALIVE_REVERSE on server */
    async aliveReverse(payload: AliveReverseReq): Promise<AliveReverseRes> {
        return new Promise(res => {
            this.onceAliveReverseRes(res);
            this.sendAliveReverseReq(payload);
        });
    }

    /** Send C2S_ALIVE_REVERSE_REQ(6) to server */
    async sendAliveReverseReq(payload: AliveReverseReq): Promise<void> {
        return this.send("C2S_ALIVE_REVERSE_REQ", payload);
    }

    /** Receive S2C_ALIVE_REVERSE_RES(7) from server */
    onAliveReverseRes(handler: (payload: AliveReverseRes) => any): void {
        this.on("S2C_ALIVE_REVERSE_RES", handler);
    }

    /** Receive S2C_ALIVE_REVERSE_RES(7) from server */
    onceAliveReverseRes(handler: (payload: AliveReverseRes) => any): void {
        this.once("S2C_ALIVE_REVERSE_RES", handler);
    }
}

export type AliveReq = Unmessage<SC2S_ALIVE_REQ>;
export type AliveRes = Unmessage<SS2C_ALIVE_RES>;
export type ReconnectReq = Unmessage<SC2S_RECONNECT_REQ>;
export type ReconnectRes = Unmessage<SS2C_RECONNECT_RES>;
export type AliveReverseNot = Unmessage<SS2C_ALIVE_REVERSE_NOT>;
export type AliveReverseReq = Unmessage<SC2S_ALIVE_REVERSE_REQ>;
export type AliveReverseRes = Unmessage<SS2C_ALIVE_REVERSE_RES>;
