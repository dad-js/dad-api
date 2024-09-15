import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_ACCOUNT_LOGIN_REQ } from "../pb/Account_pb";
import { type SS2C_ACCOUNT_LOGIN_RES } from "../pb/Account_pb";
import { type SC2S_ACCOUNT_CHARACTER_CREATE_REQ } from "../pb/Account_pb";
import { type SS2C_ACCOUNT_CHARACTER_CREATE_RES } from "../pb/Account_pb";
import { type SC2S_ACCOUNT_CHARACTER_LIST_REQ } from "../pb/Account_pb";
import { type SS2C_ACCOUNT_CHARACTER_LIST_RES } from "../pb/Account_pb";
import { type SC2S_ACCOUNT_CHARACTER_DELETE_REQ } from "../pb/Account_pb";
import { type SS2C_ACCOUNT_CHARACTER_DELETE_RES } from "../pb/Account_pb";
import { type SC2S_LOBBY_ENTER_REQ } from "../pb/Account_pb";
import { type SS2C_LOBBY_ENTER_RES } from "../pb/Account_pb";
import { type SC2S_ACCOUNT_AGREE_ANSWER_REQ } from "../pb/Account_pb";
import { type SS2C_ACCOUNT_AGREE_ANSWER_RES } from "../pb/Account_pb";
import { type SS2C_ACCOUNT_CHARACTER_CLASS_LIST_NOT } from "../pb/Account_pb";
import { type SC2S_USER_HW_INFO_REQ } from "../pb/Account_pb";
import { type SS2C_USER_HW_INFO_RES } from "../pb/Account_pb";

export class AccountModule extends Module {
    override name = "AccountModule";

    /** Call ACCOUNT_LOGIN on server */
    async accountLogin(payload: AccountLoginReq): Promise<AccountLoginRes> {
        return new Promise(res => {
            this.onceAccountLoginRes(res);
            this.sendAccountLoginReq(payload);
        });
    }

    /** Send C2S_ACCOUNT_LOGIN_REQ(11) to server */
    async sendAccountLoginReq(payload: AccountLoginReq): Promise<void> {
        return this.send("C2S_ACCOUNT_LOGIN_REQ", payload);
    }

    /** Receive S2C_ACCOUNT_LOGIN_RES(12) from server */
    onAccountLoginRes(handler: (payload: AccountLoginRes) => any): void {
        this.on("S2C_ACCOUNT_LOGIN_RES", handler);
    }

    /** Receive S2C_ACCOUNT_LOGIN_RES(12) from server */
    onceAccountLoginRes(handler: (payload: AccountLoginRes) => any): void {
        this.once("S2C_ACCOUNT_LOGIN_RES", handler);
    }

    /** Call ACCOUNT_CHARACTER_CREATE on server */
    async accountCharacterCreate(payload: AccountCharacterCreateReq): Promise<AccountCharacterCreateRes> {
        return new Promise(res => {
            this.onceAccountCharacterCreateRes(res);
            this.sendAccountCharacterCreateReq(payload);
        });
    }

    /** Send C2S_ACCOUNT_CHARACTER_CREATE_REQ(15) to server */
    async sendAccountCharacterCreateReq(payload: AccountCharacterCreateReq): Promise<void> {
        return this.send("C2S_ACCOUNT_CHARACTER_CREATE_REQ", payload);
    }

    /** Receive S2C_ACCOUNT_CHARACTER_CREATE_RES(16) from server */
    onAccountCharacterCreateRes(handler: (payload: AccountCharacterCreateRes) => any): void {
        this.on("S2C_ACCOUNT_CHARACTER_CREATE_RES", handler);
    }

    /** Receive S2C_ACCOUNT_CHARACTER_CREATE_RES(16) from server */
    onceAccountCharacterCreateRes(handler: (payload: AccountCharacterCreateRes) => any): void {
        this.once("S2C_ACCOUNT_CHARACTER_CREATE_RES", handler);
    }

    /** Call ACCOUNT_CHARACTER_LIST on server */
    async accountCharacterList(payload: AccountCharacterListReq): Promise<AccountCharacterListRes> {
        return new Promise(res => {
            this.onceAccountCharacterListRes(res);
            this.sendAccountCharacterListReq(payload);
        });
    }

    /** Send C2S_ACCOUNT_CHARACTER_LIST_REQ(17) to server */
    async sendAccountCharacterListReq(payload: AccountCharacterListReq): Promise<void> {
        return this.send("C2S_ACCOUNT_CHARACTER_LIST_REQ", payload);
    }

    /** Receive S2C_ACCOUNT_CHARACTER_LIST_RES(18) from server */
    onAccountCharacterListRes(handler: (payload: AccountCharacterListRes) => any): void {
        this.on("S2C_ACCOUNT_CHARACTER_LIST_RES", handler);
    }

    /** Receive S2C_ACCOUNT_CHARACTER_LIST_RES(18) from server */
    onceAccountCharacterListRes(handler: (payload: AccountCharacterListRes) => any): void {
        this.once("S2C_ACCOUNT_CHARACTER_LIST_RES", handler);
    }

    /** Call ACCOUNT_CHARACTER_DELETE on server */
    async accountCharacterDelete(payload: AccountCharacterDeleteReq): Promise<AccountCharacterDeleteRes> {
        return new Promise(res => {
            this.onceAccountCharacterDeleteRes(res);
            this.sendAccountCharacterDeleteReq(payload);
        });
    }

    /** Send C2S_ACCOUNT_CHARACTER_DELETE_REQ(19) to server */
    async sendAccountCharacterDeleteReq(payload: AccountCharacterDeleteReq): Promise<void> {
        return this.send("C2S_ACCOUNT_CHARACTER_DELETE_REQ", payload);
    }

    /** Receive S2C_ACCOUNT_CHARACTER_DELETE_RES(20) from server */
    onAccountCharacterDeleteRes(handler: (payload: AccountCharacterDeleteRes) => any): void {
        this.on("S2C_ACCOUNT_CHARACTER_DELETE_RES", handler);
    }

    /** Receive S2C_ACCOUNT_CHARACTER_DELETE_RES(20) from server */
    onceAccountCharacterDeleteRes(handler: (payload: AccountCharacterDeleteRes) => any): void {
        this.once("S2C_ACCOUNT_CHARACTER_DELETE_RES", handler);
    }

    /** Call LOBBY_ENTER on server */
    async lobbyEnter(payload: LobbyEnterReq): Promise<LobbyEnterRes> {
        return new Promise(res => {
            this.onceLobbyEnterRes(res);
            this.sendLobbyEnterReq(payload);
        });
    }

    /** Send C2S_LOBBY_ENTER_REQ(21) to server */
    async sendLobbyEnterReq(payload: LobbyEnterReq): Promise<void> {
        return this.send("C2S_LOBBY_ENTER_REQ", payload);
    }

    /** Receive S2C_LOBBY_ENTER_RES(22) from server */
    onLobbyEnterRes(handler: (payload: LobbyEnterRes) => any): void {
        this.on("S2C_LOBBY_ENTER_RES", handler);
    }

    /** Receive S2C_LOBBY_ENTER_RES(22) from server */
    onceLobbyEnterRes(handler: (payload: LobbyEnterRes) => any): void {
        this.once("S2C_LOBBY_ENTER_RES", handler);
    }

    /** Call ACCOUNT_AGREE_ANSWER on server */
    async accountAgreeAnswer(payload: AccountAgreeAnswerReq): Promise<AccountAgreeAnswerRes> {
        return new Promise(res => {
            this.onceAccountAgreeAnswerRes(res);
            this.sendAccountAgreeAnswerReq(payload);
        });
    }

    /** Send C2S_ACCOUNT_AGREE_ANSWER_REQ(23) to server */
    async sendAccountAgreeAnswerReq(payload: AccountAgreeAnswerReq): Promise<void> {
        return this.send("C2S_ACCOUNT_AGREE_ANSWER_REQ", payload);
    }

    /** Receive S2C_ACCOUNT_AGREE_ANSWER_RES(24) from server */
    onAccountAgreeAnswerRes(handler: (payload: AccountAgreeAnswerRes) => any): void {
        this.on("S2C_ACCOUNT_AGREE_ANSWER_RES", handler);
    }

    /** Receive S2C_ACCOUNT_AGREE_ANSWER_RES(24) from server */
    onceAccountAgreeAnswerRes(handler: (payload: AccountAgreeAnswerRes) => any): void {
        this.once("S2C_ACCOUNT_AGREE_ANSWER_RES", handler);
    }

    /** Receive S2C_ACCOUNT_CHARACTER_CLASS_LIST_NOT(25) from server */
    onAccountCharacterClassListNot(handler: (payload: AccountCharacterClassListNot) => any): void {
        this.on("S2C_ACCOUNT_CHARACTER_CLASS_LIST_NOT", handler);
    }

    /** Receive S2C_ACCOUNT_CHARACTER_CLASS_LIST_NOT(25) from server */
    onceAccountCharacterClassListNot(handler: (payload: AccountCharacterClassListNot) => any): void {
        this.once("S2C_ACCOUNT_CHARACTER_CLASS_LIST_NOT", handler);
    }

    /** Call USER_HW_INFO on server */
    async userHwInfo(payload: UserHwInfoReq): Promise<UserHwInfoRes> {
        return new Promise(res => {
            this.onceUserHwInfoRes(res);
            this.sendUserHwInfoReq(payload);
        });
    }

    /** Send C2S_USER_HW_INFO_REQ(26) to server */
    async sendUserHwInfoReq(payload: UserHwInfoReq): Promise<void> {
        return this.send("C2S_USER_HW_INFO_REQ", payload);
    }

    /** Receive S2C_USER_HW_INFO_RES(27) from server */
    onUserHwInfoRes(handler: (payload: UserHwInfoRes) => any): void {
        this.on("S2C_USER_HW_INFO_RES", handler);
    }

    /** Receive S2C_USER_HW_INFO_RES(27) from server */
    onceUserHwInfoRes(handler: (payload: UserHwInfoRes) => any): void {
        this.once("S2C_USER_HW_INFO_RES", handler);
    }
}

export type AccountLoginReq = Unmessage<SC2S_ACCOUNT_LOGIN_REQ>;
export type AccountLoginRes = Unmessage<SS2C_ACCOUNT_LOGIN_RES>;
export type AccountCharacterCreateReq = Unmessage<SC2S_ACCOUNT_CHARACTER_CREATE_REQ>;
export type AccountCharacterCreateRes = Unmessage<SS2C_ACCOUNT_CHARACTER_CREATE_RES>;
export type AccountCharacterListReq = Unmessage<SC2S_ACCOUNT_CHARACTER_LIST_REQ>;
export type AccountCharacterListRes = Unmessage<SS2C_ACCOUNT_CHARACTER_LIST_RES>;
export type AccountCharacterDeleteReq = Unmessage<SC2S_ACCOUNT_CHARACTER_DELETE_REQ>;
export type AccountCharacterDeleteRes = Unmessage<SS2C_ACCOUNT_CHARACTER_DELETE_RES>;
export type LobbyEnterReq = Unmessage<SC2S_LOBBY_ENTER_REQ>;
export type LobbyEnterRes = Unmessage<SS2C_LOBBY_ENTER_RES>;
export type AccountAgreeAnswerReq = Unmessage<SC2S_ACCOUNT_AGREE_ANSWER_REQ>;
export type AccountAgreeAnswerRes = Unmessage<SS2C_ACCOUNT_AGREE_ANSWER_RES>;
export type AccountCharacterClassListNot = Unmessage<SS2C_ACCOUNT_CHARACTER_CLASS_LIST_NOT>;
export type UserHwInfoReq = Unmessage<SC2S_USER_HW_INFO_REQ>;
export type UserHwInfoRes = Unmessage<SS2C_USER_HW_INFO_RES>;
