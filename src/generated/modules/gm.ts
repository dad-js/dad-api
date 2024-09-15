import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_GM_PARTY_ALL_RANDOM_REQ } from "../pb/Gm_pb";
import { type SS2C_GM_PARTY_ALL_RANDOM_RES } from "../pb/Gm_pb";

export class GmModule extends Module {
    override name = "GmModule";

    /** Call GM_PARTY_ALL_RANDOM on server */
    async gmPartyAllRandom(payload: GmPartyAllRandomReq): Promise<GmPartyAllRandomRes> {
        return new Promise(res => {
            this.onceGmPartyAllRandomRes(res);
            this.sendGmPartyAllRandomReq(payload);
        });
    }

    /** Send C2S_GM_PARTY_ALL_RANDOM_REQ(1201) to server */
    async sendGmPartyAllRandomReq(payload: GmPartyAllRandomReq): Promise<void> {
        return this.send("C2S_GM_PARTY_ALL_RANDOM_REQ", payload);
    }

    /** Receive S2C_GM_PARTY_ALL_RANDOM_RES(1202) from server */
    onGmPartyAllRandomRes(handler: (payload: GmPartyAllRandomRes) => any): void {
        this.on("S2C_GM_PARTY_ALL_RANDOM_RES", handler);
    }

    /** Receive S2C_GM_PARTY_ALL_RANDOM_RES(1202) from server */
    onceGmPartyAllRandomRes(handler: (payload: GmPartyAllRandomRes) => any): void {
        this.once("S2C_GM_PARTY_ALL_RANDOM_RES", handler);
    }
}

export type GmPartyAllRandomReq = Unmessage<SC2S_GM_PARTY_ALL_RANDOM_REQ>;
export type GmPartyAllRandomRes = Unmessage<SS2C_GM_PARTY_ALL_RANDOM_RES>;
