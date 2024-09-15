import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_KARMA_REPORT_LIST_REQ } from "../pb/Karma_pb";
import { type SS2C_KARMA_REPORT_LIST_RES } from "../pb/Karma_pb";
import { type SC2S_KARMA_REPORT_ACTION_REQ } from "../pb/Karma_pb";
import { type SS2C_KARMA_REPORT_ACTION_RES } from "../pb/Karma_pb";
import { type SS2C_KARMA_RATING_UPDATE_NOT } from "../pb/Karma_pb";

export class KarmaModule extends Module {
    override name = "KarmaModule";

    /** Call KARMA_REPORT_LIST on server */
    async karmaReportList(payload: KarmaReportListReq): Promise<KarmaReportListRes> {
        return new Promise(res => {
            this.onceKarmaReportListRes(res);
            this.sendKarmaReportListReq(payload);
        });
    }

    /** Send C2S_KARMA_REPORT_LIST_REQ(1651) to server */
    async sendKarmaReportListReq(payload: KarmaReportListReq): Promise<void> {
        return this.send("C2S_KARMA_REPORT_LIST_REQ", payload);
    }

    /** Receive S2C_KARMA_REPORT_LIST_RES(1652) from server */
    onKarmaReportListRes(handler: (payload: KarmaReportListRes) => any): void {
        this.on("S2C_KARMA_REPORT_LIST_RES", handler);
    }

    /** Receive S2C_KARMA_REPORT_LIST_RES(1652) from server */
    onceKarmaReportListRes(handler: (payload: KarmaReportListRes) => any): void {
        this.once("S2C_KARMA_REPORT_LIST_RES", handler);
    }

    /** Call KARMA_REPORT_ACTION on server */
    async karmaReportAction(payload: KarmaReportActionReq): Promise<KarmaReportActionRes> {
        return new Promise(res => {
            this.onceKarmaReportActionRes(res);
            this.sendKarmaReportActionReq(payload);
        });
    }

    /** Send C2S_KARMA_REPORT_ACTION_REQ(1653) to server */
    async sendKarmaReportActionReq(payload: KarmaReportActionReq): Promise<void> {
        return this.send("C2S_KARMA_REPORT_ACTION_REQ", payload);
    }

    /** Receive S2C_KARMA_REPORT_ACTION_RES(1654) from server */
    onKarmaReportActionRes(handler: (payload: KarmaReportActionRes) => any): void {
        this.on("S2C_KARMA_REPORT_ACTION_RES", handler);
    }

    /** Receive S2C_KARMA_REPORT_ACTION_RES(1654) from server */
    onceKarmaReportActionRes(handler: (payload: KarmaReportActionRes) => any): void {
        this.once("S2C_KARMA_REPORT_ACTION_RES", handler);
    }

    /** Receive S2C_KARMA_RATING_UPDATE_NOT(1655) from server */
    onKarmaRatingUpdateNot(handler: (payload: KarmaRatingUpdateNot) => any): void {
        this.on("S2C_KARMA_RATING_UPDATE_NOT", handler);
    }

    /** Receive S2C_KARMA_RATING_UPDATE_NOT(1655) from server */
    onceKarmaRatingUpdateNot(handler: (payload: KarmaRatingUpdateNot) => any): void {
        this.once("S2C_KARMA_RATING_UPDATE_NOT", handler);
    }
}

export type KarmaReportListReq = Unmessage<SC2S_KARMA_REPORT_LIST_REQ>;
export type KarmaReportListRes = Unmessage<SS2C_KARMA_REPORT_LIST_RES>;
export type KarmaReportActionReq = Unmessage<SC2S_KARMA_REPORT_ACTION_REQ>;
export type KarmaReportActionRes = Unmessage<SS2C_KARMA_REPORT_ACTION_RES>;
export type KarmaRatingUpdateNot = Unmessage<SS2C_KARMA_RATING_UPDATE_NOT>;
