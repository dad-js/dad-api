import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_RELIGION_LIST_REQ } from "../pb/Religion_pb";
import { type SS2C_RELIGION_LIST_RES } from "../pb/Religion_pb";
import { type SC2S_RELIGION_RANKING_LIST_REQ } from "../pb/Religion_pb";
import { type SS2C_RELIGION_RANKING_LIST_RES } from "../pb/Religion_pb";
import { type SC2S_RELIGION_PERSONAL_RANKING_REQ } from "../pb/Religion_pb";
import { type SS2C_RELIGION_PERSONAL_RANKING_RES } from "../pb/Religion_pb";
import { type SC2S_RELIGION_UPDATE_OFFERING_REQ } from "../pb/Religion_pb";
import { type SS2C_RELIGION_UPDATE_OFFERING_RES } from "../pb/Religion_pb";
import { type SC2S_RELIGION_KILL_COUNT_LIST_REQ } from "../pb/Religion_pb";
import { type SS2C_RELIGION_KILL_COUNT_LIST_RES } from "../pb/Religion_pb";
import { type SC2S_RELIGION_REGISTER_REQ } from "../pb/Religion_pb";
import { type SS2C_RELIGION_REGISTER_RES } from "../pb/Religion_pb";
import { type SC2S_RELIGION_GET_SEASON_INFO_REQ } from "../pb/Religion_pb";
import { type SS2C_RELIGION_GET_SEASON_INFO_RES } from "../pb/Religion_pb";

export class ReligionModule extends Module {
    override name = "ReligionModule";

    /** Call RELIGION_LIST on server */
    async religionList(payload: ReligionListReq): Promise<ReligionListRes> {
        return new Promise(res => {
            this.onceReligionListRes(res);
            this.sendReligionListReq(payload);
        });
    }

    /** Send C2S_RELIGION_LIST_REQ(3801) to server */
    async sendReligionListReq(payload: ReligionListReq): Promise<void> {
        return this.send("C2S_RELIGION_LIST_REQ", payload);
    }

    /** Receive S2C_RELIGION_LIST_RES(3802) from server */
    onReligionListRes(handler: (payload: ReligionListRes) => any): void {
        this.on("S2C_RELIGION_LIST_RES", handler);
    }

    /** Receive S2C_RELIGION_LIST_RES(3802) from server */
    onceReligionListRes(handler: (payload: ReligionListRes) => any): void {
        this.once("S2C_RELIGION_LIST_RES", handler);
    }

    /** Call RELIGION_RANKING_LIST on server */
    async religionRankingList(payload: ReligionRankingListReq): Promise<ReligionRankingListRes> {
        return new Promise(res => {
            this.onceReligionRankingListRes(res);
            this.sendReligionRankingListReq(payload);
        });
    }

    /** Send C2S_RELIGION_RANKING_LIST_REQ(3803) to server */
    async sendReligionRankingListReq(payload: ReligionRankingListReq): Promise<void> {
        return this.send("C2S_RELIGION_RANKING_LIST_REQ", payload);
    }

    /** Receive S2C_RELIGION_RANKING_LIST_RES(3804) from server */
    onReligionRankingListRes(handler: (payload: ReligionRankingListRes) => any): void {
        this.on("S2C_RELIGION_RANKING_LIST_RES", handler);
    }

    /** Receive S2C_RELIGION_RANKING_LIST_RES(3804) from server */
    onceReligionRankingListRes(handler: (payload: ReligionRankingListRes) => any): void {
        this.once("S2C_RELIGION_RANKING_LIST_RES", handler);
    }

    /** Call RELIGION_PERSONAL_RANKING on server */
    async religionPersonalRanking(payload: ReligionPersonalRankingReq): Promise<ReligionPersonalRankingRes> {
        return new Promise(res => {
            this.onceReligionPersonalRankingRes(res);
            this.sendReligionPersonalRankingReq(payload);
        });
    }

    /** Send C2S_RELIGION_PERSONAL_RANKING_REQ(3811) to server */
    async sendReligionPersonalRankingReq(payload: ReligionPersonalRankingReq): Promise<void> {
        return this.send("C2S_RELIGION_PERSONAL_RANKING_REQ", payload);
    }

    /** Receive S2C_RELIGION_PERSONAL_RANKING_RES(3812) from server */
    onReligionPersonalRankingRes(handler: (payload: ReligionPersonalRankingRes) => any): void {
        this.on("S2C_RELIGION_PERSONAL_RANKING_RES", handler);
    }

    /** Receive S2C_RELIGION_PERSONAL_RANKING_RES(3812) from server */
    onceReligionPersonalRankingRes(handler: (payload: ReligionPersonalRankingRes) => any): void {
        this.once("S2C_RELIGION_PERSONAL_RANKING_RES", handler);
    }

    /** Call RELIGION_UPDATE_OFFERING on server */
    async religionUpdateOffering(payload: ReligionUpdateOfferingReq): Promise<ReligionUpdateOfferingRes> {
        return new Promise(res => {
            this.onceReligionUpdateOfferingRes(res);
            this.sendReligionUpdateOfferingReq(payload);
        });
    }

    /** Send C2S_RELIGION_UPDATE_OFFERING_REQ(3805) to server */
    async sendReligionUpdateOfferingReq(payload: ReligionUpdateOfferingReq): Promise<void> {
        return this.send("C2S_RELIGION_UPDATE_OFFERING_REQ", payload);
    }

    /** Receive S2C_RELIGION_UPDATE_OFFERING_RES(3806) from server */
    onReligionUpdateOfferingRes(handler: (payload: ReligionUpdateOfferingRes) => any): void {
        this.on("S2C_RELIGION_UPDATE_OFFERING_RES", handler);
    }

    /** Receive S2C_RELIGION_UPDATE_OFFERING_RES(3806) from server */
    onceReligionUpdateOfferingRes(handler: (payload: ReligionUpdateOfferingRes) => any): void {
        this.once("S2C_RELIGION_UPDATE_OFFERING_RES", handler);
    }

    /** Call RELIGION_KILL_COUNT_LIST on server */
    async religionKillCountList(payload: ReligionKillCountListReq): Promise<ReligionKillCountListRes> {
        return new Promise(res => {
            this.onceReligionKillCountListRes(res);
            this.sendReligionKillCountListReq(payload);
        });
    }

    /** Send C2S_RELIGION_KILL_COUNT_LIST_REQ(3807) to server */
    async sendReligionKillCountListReq(payload: ReligionKillCountListReq): Promise<void> {
        return this.send("C2S_RELIGION_KILL_COUNT_LIST_REQ", payload);
    }

    /** Receive S2C_RELIGION_KILL_COUNT_LIST_RES(3808) from server */
    onReligionKillCountListRes(handler: (payload: ReligionKillCountListRes) => any): void {
        this.on("S2C_RELIGION_KILL_COUNT_LIST_RES", handler);
    }

    /** Receive S2C_RELIGION_KILL_COUNT_LIST_RES(3808) from server */
    onceReligionKillCountListRes(handler: (payload: ReligionKillCountListRes) => any): void {
        this.once("S2C_RELIGION_KILL_COUNT_LIST_RES", handler);
    }

    /** Call RELIGION_REGISTER on server */
    async religionRegister(payload: ReligionRegisterReq): Promise<ReligionRegisterRes> {
        return new Promise(res => {
            this.onceReligionRegisterRes(res);
            this.sendReligionRegisterReq(payload);
        });
    }

    /** Send C2S_RELIGION_REGISTER_REQ(3809) to server */
    async sendReligionRegisterReq(payload: ReligionRegisterReq): Promise<void> {
        return this.send("C2S_RELIGION_REGISTER_REQ", payload);
    }

    /** Receive S2C_RELIGION_REGISTER_RES(3810) from server */
    onReligionRegisterRes(handler: (payload: ReligionRegisterRes) => any): void {
        this.on("S2C_RELIGION_REGISTER_RES", handler);
    }

    /** Receive S2C_RELIGION_REGISTER_RES(3810) from server */
    onceReligionRegisterRes(handler: (payload: ReligionRegisterRes) => any): void {
        this.once("S2C_RELIGION_REGISTER_RES", handler);
    }

    /** Call RELIGION_GET_SEASON_INFO on server */
    async religionGetSeasonInfo(payload: ReligionGetSeasonInfoReq): Promise<ReligionGetSeasonInfoRes> {
        return new Promise(res => {
            this.onceReligionGetSeasonInfoRes(res);
            this.sendReligionGetSeasonInfoReq(payload);
        });
    }

    /** Send C2S_RELIGION_GET_SEASON_INFO_REQ(3813) to server */
    async sendReligionGetSeasonInfoReq(payload: ReligionGetSeasonInfoReq): Promise<void> {
        return this.send("C2S_RELIGION_GET_SEASON_INFO_REQ", payload);
    }

    /** Receive S2C_RELIGION_GET_SEASON_INFO_RES(3814) from server */
    onReligionGetSeasonInfoRes(handler: (payload: ReligionGetSeasonInfoRes) => any): void {
        this.on("S2C_RELIGION_GET_SEASON_INFO_RES", handler);
    }

    /** Receive S2C_RELIGION_GET_SEASON_INFO_RES(3814) from server */
    onceReligionGetSeasonInfoRes(handler: (payload: ReligionGetSeasonInfoRes) => any): void {
        this.once("S2C_RELIGION_GET_SEASON_INFO_RES", handler);
    }
}

export type ReligionListReq = Unmessage<SC2S_RELIGION_LIST_REQ>;
export type ReligionListRes = Unmessage<SS2C_RELIGION_LIST_RES>;
export type ReligionRankingListReq = Unmessage<SC2S_RELIGION_RANKING_LIST_REQ>;
export type ReligionRankingListRes = Unmessage<SS2C_RELIGION_RANKING_LIST_RES>;
export type ReligionPersonalRankingReq = Unmessage<SC2S_RELIGION_PERSONAL_RANKING_REQ>;
export type ReligionPersonalRankingRes = Unmessage<SS2C_RELIGION_PERSONAL_RANKING_RES>;
export type ReligionUpdateOfferingReq = Unmessage<SC2S_RELIGION_UPDATE_OFFERING_REQ>;
export type ReligionUpdateOfferingRes = Unmessage<SS2C_RELIGION_UPDATE_OFFERING_RES>;
export type ReligionKillCountListReq = Unmessage<SC2S_RELIGION_KILL_COUNT_LIST_REQ>;
export type ReligionKillCountListRes = Unmessage<SS2C_RELIGION_KILL_COUNT_LIST_RES>;
export type ReligionRegisterReq = Unmessage<SC2S_RELIGION_REGISTER_REQ>;
export type ReligionRegisterRes = Unmessage<SS2C_RELIGION_REGISTER_RES>;
export type ReligionGetSeasonInfoReq = Unmessage<SC2S_RELIGION_GET_SEASON_INFO_REQ>;
export type ReligionGetSeasonInfoRes = Unmessage<SS2C_RELIGION_GET_SEASON_INFO_RES>;
