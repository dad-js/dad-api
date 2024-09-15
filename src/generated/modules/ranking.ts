import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_RANKING_INFO_REQ } from "../pb/Ranking_pb";
import { type SS2C_RANKING_INFO_RES } from "../pb/Ranking_pb";
import { type SC2S_RANKING_RANGE_REQ } from "../pb/Ranking_pb";
import { type SS2C_RANKING_RANGE_RES } from "../pb/Ranking_pb";
import { type SC2S_RANKING_CHARACTER_REQ } from "../pb/Ranking_pb";
import { type SC2S_RANKING_REWARD_GET_REQ } from "../pb/Ranking_pb";
import { type SS2C_RANKING_REWARD_GET_RES } from "../pb/Ranking_pb";
import { type SS2C_RANKING_CHARACTER_RES } from "../pb/Ranking_pb";
import { type SC2S_RANKING_AP_CONFIG_REQ } from "../pb/Ranking_pb";
import { type SS2C_RANKING_AP_CONFIG_RES } from "../pb/Ranking_pb";
import { type SS2C_RANKING_HAS_REWARD_NOT } from "../pb/Ranking_pb";

export class RankingModule extends Module {
    override name = "RankingModule";

    /** Call RANKING_INFO on server */
    async rankingInfo(payload: RankingInfoReq): Promise<RankingInfoRes> {
        return new Promise(res => {
            this.onceRankingInfoRes(res);
            this.sendRankingInfoReq(payload);
        });
    }

    /** Send C2S_RANKING_INFO_REQ(807) to server */
    async sendRankingInfoReq(payload: RankingInfoReq): Promise<void> {
        return this.send("C2S_RANKING_INFO_REQ", payload);
    }

    /** Receive S2C_RANKING_INFO_RES(808) from server */
    onRankingInfoRes(handler: (payload: RankingInfoRes) => any): void {
        this.on("S2C_RANKING_INFO_RES", handler);
    }

    /** Receive S2C_RANKING_INFO_RES(808) from server */
    onceRankingInfoRes(handler: (payload: RankingInfoRes) => any): void {
        this.once("S2C_RANKING_INFO_RES", handler);
    }

    /** Call RANKING_RANGE on server */
    async rankingRange(payload: RankingRangeReq): Promise<RankingRangeRes> {
        return new Promise(res => {
            this.onceRankingRangeRes(res);
            this.sendRankingRangeReq(payload);
        });
    }

    /** Send C2S_RANKING_RANGE_REQ(801) to server */
    async sendRankingRangeReq(payload: RankingRangeReq): Promise<void> {
        return this.send("C2S_RANKING_RANGE_REQ", payload);
    }

    /** Receive S2C_RANKING_RANGE_RES(802) from server */
    onRankingRangeRes(handler: (payload: RankingRangeRes) => any): void {
        this.on("S2C_RANKING_RANGE_RES", handler);
    }

    /** Receive S2C_RANKING_RANGE_RES(802) from server */
    onceRankingRangeRes(handler: (payload: RankingRangeRes) => any): void {
        this.once("S2C_RANKING_RANGE_RES", handler);
    }

    /** Call RANKING_CHARACTER on server */
    async rankingCharacter(payload: RankingCharacterReq): Promise<RankingCharacterRes> {
        return new Promise(res => {
            this.onceRankingCharacterRes(res);
            this.sendRankingCharacterReq(payload);
        });
    }

    /** Send C2S_RANKING_CHARACTER_REQ(805) to server */
    async sendRankingCharacterReq(payload: RankingCharacterReq): Promise<void> {
        return this.send("C2S_RANKING_CHARACTER_REQ", payload);
    }

    /** Call RANKING_REWARD_GET on server */
    async rankingRewardGet(payload: RankingRewardGetReq): Promise<RankingRewardGetRes> {
        return new Promise(res => {
            this.onceRankingRewardGetRes(res);
            this.sendRankingRewardGetReq(payload);
        });
    }

    /** Send C2S_RANKING_REWARD_GET_REQ(812) to server */
    async sendRankingRewardGetReq(payload: RankingRewardGetReq): Promise<void> {
        return this.send("C2S_RANKING_REWARD_GET_REQ", payload);
    }

    /** Receive S2C_RANKING_REWARD_GET_RES(813) from server */
    onRankingRewardGetRes(handler: (payload: RankingRewardGetRes) => any): void {
        this.on("S2C_RANKING_REWARD_GET_RES", handler);
    }

    /** Receive S2C_RANKING_REWARD_GET_RES(813) from server */
    onceRankingRewardGetRes(handler: (payload: RankingRewardGetRes) => any): void {
        this.once("S2C_RANKING_REWARD_GET_RES", handler);
    }

    /** Receive S2C_RANKING_CHARACTER_RES(806) from server */
    onRankingCharacterRes(handler: (payload: RankingCharacterRes) => any): void {
        this.on("S2C_RANKING_CHARACTER_RES", handler);
    }

    /** Receive S2C_RANKING_CHARACTER_RES(806) from server */
    onceRankingCharacterRes(handler: (payload: RankingCharacterRes) => any): void {
        this.once("S2C_RANKING_CHARACTER_RES", handler);
    }

    /** Call RANKING_AP_CONFIG on server */
    async rankingApConfig(payload: RankingApConfigReq): Promise<RankingApConfigRes> {
        return new Promise(res => {
            this.onceRankingApConfigRes(res);
            this.sendRankingApConfigReq(payload);
        });
    }

    /** Send C2S_RANKING_AP_CONFIG_REQ(809) to server */
    async sendRankingApConfigReq(payload: RankingApConfigReq): Promise<void> {
        return this.send("C2S_RANKING_AP_CONFIG_REQ", payload);
    }

    /** Receive S2C_RANKING_AP_CONFIG_RES(810) from server */
    onRankingApConfigRes(handler: (payload: RankingApConfigRes) => any): void {
        this.on("S2C_RANKING_AP_CONFIG_RES", handler);
    }

    /** Receive S2C_RANKING_AP_CONFIG_RES(810) from server */
    onceRankingApConfigRes(handler: (payload: RankingApConfigRes) => any): void {
        this.once("S2C_RANKING_AP_CONFIG_RES", handler);
    }

    /** Receive S2C_RANKING_HAS_REWARD_NOT(811) from server */
    onRankingHasRewardNot(handler: (payload: RankingHasRewardNot) => any): void {
        this.on("S2C_RANKING_HAS_REWARD_NOT", handler);
    }

    /** Receive S2C_RANKING_HAS_REWARD_NOT(811) from server */
    onceRankingHasRewardNot(handler: (payload: RankingHasRewardNot) => any): void {
        this.once("S2C_RANKING_HAS_REWARD_NOT", handler);
    }
}

export type RankingInfoReq = Unmessage<SC2S_RANKING_INFO_REQ>;
export type RankingInfoRes = Unmessage<SS2C_RANKING_INFO_RES>;
export type RankingRangeReq = Unmessage<SC2S_RANKING_RANGE_REQ>;
export type RankingRangeRes = Unmessage<SS2C_RANKING_RANGE_RES>;
export type RankingCharacterReq = Unmessage<SC2S_RANKING_CHARACTER_REQ>;
export type RankingRewardGetReq = Unmessage<SC2S_RANKING_REWARD_GET_REQ>;
export type RankingRewardGetRes = Unmessage<SS2C_RANKING_REWARD_GET_RES>;
export type RankingCharacterRes = Unmessage<SS2C_RANKING_CHARACTER_RES>;
export type RankingApConfigReq = Unmessage<SC2S_RANKING_AP_CONFIG_REQ>;
export type RankingApConfigRes = Unmessage<SS2C_RANKING_AP_CONFIG_RES>;
export type RankingHasRewardNot = Unmessage<SS2C_RANKING_HAS_REWARD_NOT>;
