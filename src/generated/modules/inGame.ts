import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SS2C_ENTER_GAME_SERVER_NOT } from "../pb/InGame_pb";
import { type SC2S_AUTO_MATCH_REG_REQ } from "../pb/InGame_pb";
import { type SS2C_AUTO_MATCH_REG_RES } from "../pb/InGame_pb";
import { type SC2S_GAME_ENTER_COMPLETE_NOT } from "../pb/InGame_pb";
import { type SS2C_AUTO_MATCH_REG_TEAM_NOT } from "../pb/InGame_pb";
import { type SC2S_RECONNECT_INGAME_REQ } from "../pb/InGame_pb";
import { type SS2C_RECONNECT_INGAME_RES } from "../pb/InGame_pb";
import { type SS2C_GEAR_BASE_SCORE_LIST_NOT } from "../pb/InGame_pb";
import { type SS2C_MATCH_POOL_REGISTERED_NOT } from "../pb/InGame_pb";
import { type SS2C_MATCHMAKING_FAIL_NOT } from "../pb/InGame_pb";

export class InGameModule extends Module {
    override name = "InGameModule";

    /** Receive S2C_ENTER_GAME_SERVER_NOT(753) from server */
    onEnterGameServerNot(handler: (payload: EnterGameServerNot) => any): void {
        this.on("S2C_ENTER_GAME_SERVER_NOT", handler);
    }

    /** Receive S2C_ENTER_GAME_SERVER_NOT(753) from server */
    onceEnterGameServerNot(handler: (payload: EnterGameServerNot) => any): void {
        this.once("S2C_ENTER_GAME_SERVER_NOT", handler);
    }

    /** Call AUTO_MATCH_REG on server */
    async autoMatchReg(payload: AutoMatchRegReq): Promise<AutoMatchRegRes> {
        return new Promise(res => {
            this.onceAutoMatchRegRes(res);
            this.sendAutoMatchRegReq(payload);
        });
    }

    /** Send C2S_AUTO_MATCH_REG_REQ(751) to server */
    async sendAutoMatchRegReq(payload: AutoMatchRegReq): Promise<void> {
        return this.send("C2S_AUTO_MATCH_REG_REQ", payload);
    }

    /** Receive S2C_AUTO_MATCH_REG_RES(752) from server */
    onAutoMatchRegRes(handler: (payload: AutoMatchRegRes) => any): void {
        this.on("S2C_AUTO_MATCH_REG_RES", handler);
    }

    /** Receive S2C_AUTO_MATCH_REG_RES(752) from server */
    onceAutoMatchRegRes(handler: (payload: AutoMatchRegRes) => any): void {
        this.once("S2C_AUTO_MATCH_REG_RES", handler);
    }

    /** Send C2S_GAME_ENTER_COMPLETE_NOT(754) to server */
    async sendGameEnterCompleteNot(payload: GameEnterCompleteNot): Promise<void> {
        return this.send("C2S_GAME_ENTER_COMPLETE_NOT", payload);
    }

    /** Receive S2C_AUTO_MATCH_REG_TEAM_NOT(755) from server */
    onAutoMatchRegTeamNot(handler: (payload: AutoMatchRegTeamNot) => any): void {
        this.on("S2C_AUTO_MATCH_REG_TEAM_NOT", handler);
    }

    /** Receive S2C_AUTO_MATCH_REG_TEAM_NOT(755) from server */
    onceAutoMatchRegTeamNot(handler: (payload: AutoMatchRegTeamNot) => any): void {
        this.once("S2C_AUTO_MATCH_REG_TEAM_NOT", handler);
    }

    /** Call RECONNECT_INGAME on server */
    async reconnectIngame(payload: ReconnectIngameReq): Promise<ReconnectIngameRes> {
        return new Promise(res => {
            this.onceReconnectIngameRes(res);
            this.sendReconnectIngameReq(payload);
        });
    }

    /** Send C2S_RECONNECT_INGAME_REQ(756) to server */
    async sendReconnectIngameReq(payload: ReconnectIngameReq): Promise<void> {
        return this.send("C2S_RECONNECT_INGAME_REQ", payload);
    }

    /** Receive S2C_RECONNECT_INGAME_RES(757) from server */
    onReconnectIngameRes(handler: (payload: ReconnectIngameRes) => any): void {
        this.on("S2C_RECONNECT_INGAME_RES", handler);
    }

    /** Receive S2C_RECONNECT_INGAME_RES(757) from server */
    onceReconnectIngameRes(handler: (payload: ReconnectIngameRes) => any): void {
        this.once("S2C_RECONNECT_INGAME_RES", handler);
    }

    /** Receive S2C_GEAR_BASE_SCORE_LIST_NOT(758) from server */
    onGearBaseScoreListNot(handler: (payload: GearBaseScoreListNot) => any): void {
        this.on("S2C_GEAR_BASE_SCORE_LIST_NOT", handler);
    }

    /** Receive S2C_GEAR_BASE_SCORE_LIST_NOT(758) from server */
    onceGearBaseScoreListNot(handler: (payload: GearBaseScoreListNot) => any): void {
        this.once("S2C_GEAR_BASE_SCORE_LIST_NOT", handler);
    }

    /** Receive S2C_MATCH_POOL_REGISTERED_NOT(759) from server */
    onMatchPoolRegisteredNot(handler: (payload: MatchPoolRegisteredNot) => any): void {
        this.on("S2C_MATCH_POOL_REGISTERED_NOT", handler);
    }

    /** Receive S2C_MATCH_POOL_REGISTERED_NOT(759) from server */
    onceMatchPoolRegisteredNot(handler: (payload: MatchPoolRegisteredNot) => any): void {
        this.once("S2C_MATCH_POOL_REGISTERED_NOT", handler);
    }

    /** Receive S2C_MATCHMAKING_FAIL_NOT(760) from server */
    onMatchmakingFailNot(handler: (payload: MatchmakingFailNot) => any): void {
        this.on("S2C_MATCHMAKING_FAIL_NOT", handler);
    }

    /** Receive S2C_MATCHMAKING_FAIL_NOT(760) from server */
    onceMatchmakingFailNot(handler: (payload: MatchmakingFailNot) => any): void {
        this.once("S2C_MATCHMAKING_FAIL_NOT", handler);
    }
}

export type EnterGameServerNot = Unmessage<SS2C_ENTER_GAME_SERVER_NOT>;
export type AutoMatchRegReq = Unmessage<SC2S_AUTO_MATCH_REG_REQ>;
export type AutoMatchRegRes = Unmessage<SS2C_AUTO_MATCH_REG_RES>;
export type GameEnterCompleteNot = Unmessage<SC2S_GAME_ENTER_COMPLETE_NOT>;
export type AutoMatchRegTeamNot = Unmessage<SS2C_AUTO_MATCH_REG_TEAM_NOT>;
export type ReconnectIngameReq = Unmessage<SC2S_RECONNECT_INGAME_REQ>;
export type ReconnectIngameRes = Unmessage<SS2C_RECONNECT_INGAME_RES>;
export type GearBaseScoreListNot = Unmessage<SS2C_GEAR_BASE_SCORE_LIST_NOT>;
export type MatchPoolRegisteredNot = Unmessage<SS2C_MATCH_POOL_REGISTERED_NOT>;
export type MatchmakingFailNot = Unmessage<SS2C_MATCHMAKING_FAIL_NOT>;
