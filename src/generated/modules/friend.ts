import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_FRIEND_CHECK_ACCOUNTNICKNAME_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_CHECK_ACCOUNTNICKNAME_RES } from "../pb/Friend_pb";
import { type SC2S_FRIEND_CREATE_ACCOUNTNICKNAME_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_CREATE_ACCOUNTNICKNAME_RES } from "../pb/Friend_pb";
import { type SC2S_FRIEND_SET_STATUS_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_SET_STATUS_RES } from "../pb/Friend_pb";
import { type SC2S_FRIEND_SET_PRIVACY_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_SET_PRIVACY_RES } from "../pb/Friend_pb";
import { type SC2S_FRIEND_INVITE_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_INVITE_RES } from "../pb/Friend_pb";
import { type SC2S_FRIEND_INVITE_BY_ACCOUNTNICKNAME_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_INVITE_BY_ACCOUNTNICKNAME_RES } from "../pb/Friend_pb";
import { type SC2S_FRIEND_INVITE_ACCEPT_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_INVITE_ACCEPT_RES } from "../pb/Friend_pb";
import { type SC2S_FRIEND_INVITE_DECLINE_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_INVITE_DECLINE_RES } from "../pb/Friend_pb";
import { type SC2S_FRIEND_INVITE_CANCEL_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_INVITE_CANCEL_RES } from "../pb/Friend_pb";
import { type SC2S_FRIEND_DEL_FRIEND_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_DEL_FRIEND_RES } from "../pb/Friend_pb";
import { type SS2C_FRIEND_INFO_NOT } from "../pb/Friend_pb";
import { type SS2C_FRIEND_SET_FRIEND_INFOS_NOT } from "../pb/Friend_pb";
import { type SS2C_FRIEND_DEL_FRIEND_INFOS_NOT } from "../pb/Friend_pb";
import { type SS2C_FRIEND_SET_ACCEPT_INFOS_NOT } from "../pb/Friend_pb";
import { type SS2C_FRIEND_DEL_ACCEPT_INFOS_NOT } from "../pb/Friend_pb";
import { type SS2C_FRIEND_SET_INVITE_INFOS_NOT } from "../pb/Friend_pb";
import { type SS2C_FRIEND_DEL_INVITE_INFOS_NOT } from "../pb/Friend_pb";
import { type SS2C_FRIEND_SET_STATUS_NOT } from "../pb/Friend_pb";
import { type SC2S_FRIEND_LIST_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_LIST_RES } from "../pb/Friend_pb";
import { type SC2S_FRIEND_LIST_ALL_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_LIST_ALL_RES } from "../pb/Friend_pb";
import { type SC2S_FRIEND_FIND_REQ } from "../pb/Friend_pb";
import { type SS2C_FRIEND_FIND_RES } from "../pb/Friend_pb";

export class FriendModule extends Module {
    override name = "FriendModule";

    /** Call FRIEND_CHECK_ACCOUNTNICKNAME on server */
    async friendCheckAccountnickname(payload: FriendCheckAccountnicknameReq): Promise<FriendCheckAccountnicknameRes> {
        return new Promise(res => {
            this.onceFriendCheckAccountnicknameRes(res);
            this.sendFriendCheckAccountnicknameReq(payload);
        });
    }

    /** Send C2S_FRIEND_CHECK_ACCOUNTNICKNAME_REQ(901) to server */
    async sendFriendCheckAccountnicknameReq(payload: FriendCheckAccountnicknameReq): Promise<void> {
        return this.send("C2S_FRIEND_CHECK_ACCOUNTNICKNAME_REQ", payload);
    }

    /** Receive S2C_FRIEND_CHECK_ACCOUNTNICKNAME_RES(902) from server */
    onFriendCheckAccountnicknameRes(handler: (payload: FriendCheckAccountnicknameRes) => any): void {
        this.on("S2C_FRIEND_CHECK_ACCOUNTNICKNAME_RES", handler);
    }

    /** Receive S2C_FRIEND_CHECK_ACCOUNTNICKNAME_RES(902) from server */
    onceFriendCheckAccountnicknameRes(handler: (payload: FriendCheckAccountnicknameRes) => any): void {
        this.once("S2C_FRIEND_CHECK_ACCOUNTNICKNAME_RES", handler);
    }

    /** Call FRIEND_CREATE_ACCOUNTNICKNAME on server */
    async friendCreateAccountnickname(payload: FriendCreateAccountnicknameReq): Promise<FriendCreateAccountnicknameRes> {
        return new Promise(res => {
            this.onceFriendCreateAccountnicknameRes(res);
            this.sendFriendCreateAccountnicknameReq(payload);
        });
    }

    /** Send C2S_FRIEND_CREATE_ACCOUNTNICKNAME_REQ(903) to server */
    async sendFriendCreateAccountnicknameReq(payload: FriendCreateAccountnicknameReq): Promise<void> {
        return this.send("C2S_FRIEND_CREATE_ACCOUNTNICKNAME_REQ", payload);
    }

    /** Receive S2C_FRIEND_CREATE_ACCOUNTNICKNAME_RES(904) from server */
    onFriendCreateAccountnicknameRes(handler: (payload: FriendCreateAccountnicknameRes) => any): void {
        this.on("S2C_FRIEND_CREATE_ACCOUNTNICKNAME_RES", handler);
    }

    /** Receive S2C_FRIEND_CREATE_ACCOUNTNICKNAME_RES(904) from server */
    onceFriendCreateAccountnicknameRes(handler: (payload: FriendCreateAccountnicknameRes) => any): void {
        this.once("S2C_FRIEND_CREATE_ACCOUNTNICKNAME_RES", handler);
    }

    /** Call FRIEND_SET_STATUS on server */
    async friendSetStatus(payload: FriendSetStatusReq): Promise<FriendSetStatusRes> {
        return new Promise(res => {
            this.onceFriendSetStatusRes(res);
            this.sendFriendSetStatusReq(payload);
        });
    }

    /** Send C2S_FRIEND_SET_STATUS_REQ(905) to server */
    async sendFriendSetStatusReq(payload: FriendSetStatusReq): Promise<void> {
        return this.send("C2S_FRIEND_SET_STATUS_REQ", payload);
    }

    /** Receive S2C_FRIEND_SET_STATUS_RES(906) from server */
    onFriendSetStatusRes(handler: (payload: FriendSetStatusRes) => any): void {
        this.on("S2C_FRIEND_SET_STATUS_RES", handler);
    }

    /** Receive S2C_FRIEND_SET_STATUS_RES(906) from server */
    onceFriendSetStatusRes(handler: (payload: FriendSetStatusRes) => any): void {
        this.once("S2C_FRIEND_SET_STATUS_RES", handler);
    }

    /** Call FRIEND_SET_PRIVACY on server */
    async friendSetPrivacy(payload: FriendSetPrivacyReq): Promise<FriendSetPrivacyRes> {
        return new Promise(res => {
            this.onceFriendSetPrivacyRes(res);
            this.sendFriendSetPrivacyReq(payload);
        });
    }

    /** Send C2S_FRIEND_SET_PRIVACY_REQ(907) to server */
    async sendFriendSetPrivacyReq(payload: FriendSetPrivacyReq): Promise<void> {
        return this.send("C2S_FRIEND_SET_PRIVACY_REQ", payload);
    }

    /** Receive S2C_FRIEND_SET_PRIVACY_RES(908) from server */
    onFriendSetPrivacyRes(handler: (payload: FriendSetPrivacyRes) => any): void {
        this.on("S2C_FRIEND_SET_PRIVACY_RES", handler);
    }

    /** Receive S2C_FRIEND_SET_PRIVACY_RES(908) from server */
    onceFriendSetPrivacyRes(handler: (payload: FriendSetPrivacyRes) => any): void {
        this.once("S2C_FRIEND_SET_PRIVACY_RES", handler);
    }

    /** Call FRIEND_INVITE on server */
    async friendInvite(payload: FriendInviteReq): Promise<FriendInviteRes> {
        return new Promise(res => {
            this.onceFriendInviteRes(res);
            this.sendFriendInviteReq(payload);
        });
    }

    /** Send C2S_FRIEND_INVITE_REQ(909) to server */
    async sendFriendInviteReq(payload: FriendInviteReq): Promise<void> {
        return this.send("C2S_FRIEND_INVITE_REQ", payload);
    }

    /** Receive S2C_FRIEND_INVITE_RES(910) from server */
    onFriendInviteRes(handler: (payload: FriendInviteRes) => any): void {
        this.on("S2C_FRIEND_INVITE_RES", handler);
    }

    /** Receive S2C_FRIEND_INVITE_RES(910) from server */
    onceFriendInviteRes(handler: (payload: FriendInviteRes) => any): void {
        this.once("S2C_FRIEND_INVITE_RES", handler);
    }

    /** Call FRIEND_INVITE_BY_ACCOUNTNICKNAME on server */
    async friendInviteByAccountnickname(payload: FriendInviteByAccountnicknameReq): Promise<FriendInviteByAccountnicknameRes> {
        return new Promise(res => {
            this.onceFriendInviteByAccountnicknameRes(res);
            this.sendFriendInviteByAccountnicknameReq(payload);
        });
    }

    /** Send C2S_FRIEND_INVITE_BY_ACCOUNTNICKNAME_REQ(911) to server */
    async sendFriendInviteByAccountnicknameReq(payload: FriendInviteByAccountnicknameReq): Promise<void> {
        return this.send("C2S_FRIEND_INVITE_BY_ACCOUNTNICKNAME_REQ", payload);
    }

    /** Receive S2C_FRIEND_INVITE_BY_ACCOUNTNICKNAME_RES(912) from server */
    onFriendInviteByAccountnicknameRes(handler: (payload: FriendInviteByAccountnicknameRes) => any): void {
        this.on("S2C_FRIEND_INVITE_BY_ACCOUNTNICKNAME_RES", handler);
    }

    /** Receive S2C_FRIEND_INVITE_BY_ACCOUNTNICKNAME_RES(912) from server */
    onceFriendInviteByAccountnicknameRes(handler: (payload: FriendInviteByAccountnicknameRes) => any): void {
        this.once("S2C_FRIEND_INVITE_BY_ACCOUNTNICKNAME_RES", handler);
    }

    /** Call FRIEND_INVITE_ACCEPT on server */
    async friendInviteAccept(payload: FriendInviteAcceptReq): Promise<FriendInviteAcceptRes> {
        return new Promise(res => {
            this.onceFriendInviteAcceptRes(res);
            this.sendFriendInviteAcceptReq(payload);
        });
    }

    /** Send C2S_FRIEND_INVITE_ACCEPT_REQ(913) to server */
    async sendFriendInviteAcceptReq(payload: FriendInviteAcceptReq): Promise<void> {
        return this.send("C2S_FRIEND_INVITE_ACCEPT_REQ", payload);
    }

    /** Receive S2C_FRIEND_INVITE_ACCEPT_RES(914) from server */
    onFriendInviteAcceptRes(handler: (payload: FriendInviteAcceptRes) => any): void {
        this.on("S2C_FRIEND_INVITE_ACCEPT_RES", handler);
    }

    /** Receive S2C_FRIEND_INVITE_ACCEPT_RES(914) from server */
    onceFriendInviteAcceptRes(handler: (payload: FriendInviteAcceptRes) => any): void {
        this.once("S2C_FRIEND_INVITE_ACCEPT_RES", handler);
    }

    /** Call FRIEND_INVITE_DECLINE on server */
    async friendInviteDecline(payload: FriendInviteDeclineReq): Promise<FriendInviteDeclineRes> {
        return new Promise(res => {
            this.onceFriendInviteDeclineRes(res);
            this.sendFriendInviteDeclineReq(payload);
        });
    }

    /** Send C2S_FRIEND_INVITE_DECLINE_REQ(915) to server */
    async sendFriendInviteDeclineReq(payload: FriendInviteDeclineReq): Promise<void> {
        return this.send("C2S_FRIEND_INVITE_DECLINE_REQ", payload);
    }

    /** Receive S2C_FRIEND_INVITE_DECLINE_RES(916) from server */
    onFriendInviteDeclineRes(handler: (payload: FriendInviteDeclineRes) => any): void {
        this.on("S2C_FRIEND_INVITE_DECLINE_RES", handler);
    }

    /** Receive S2C_FRIEND_INVITE_DECLINE_RES(916) from server */
    onceFriendInviteDeclineRes(handler: (payload: FriendInviteDeclineRes) => any): void {
        this.once("S2C_FRIEND_INVITE_DECLINE_RES", handler);
    }

    /** Call FRIEND_INVITE_CANCEL on server */
    async friendInviteCancel(payload: FriendInviteCancelReq): Promise<FriendInviteCancelRes> {
        return new Promise(res => {
            this.onceFriendInviteCancelRes(res);
            this.sendFriendInviteCancelReq(payload);
        });
    }

    /** Send C2S_FRIEND_INVITE_CANCEL_REQ(917) to server */
    async sendFriendInviteCancelReq(payload: FriendInviteCancelReq): Promise<void> {
        return this.send("C2S_FRIEND_INVITE_CANCEL_REQ", payload);
    }

    /** Receive S2C_FRIEND_INVITE_CANCEL_RES(918) from server */
    onFriendInviteCancelRes(handler: (payload: FriendInviteCancelRes) => any): void {
        this.on("S2C_FRIEND_INVITE_CANCEL_RES", handler);
    }

    /** Receive S2C_FRIEND_INVITE_CANCEL_RES(918) from server */
    onceFriendInviteCancelRes(handler: (payload: FriendInviteCancelRes) => any): void {
        this.once("S2C_FRIEND_INVITE_CANCEL_RES", handler);
    }

    /** Call FRIEND_DEL_FRIEND on server */
    async friendDelFriend(payload: FriendDelFriendReq): Promise<FriendDelFriendRes> {
        return new Promise(res => {
            this.onceFriendDelFriendRes(res);
            this.sendFriendDelFriendReq(payload);
        });
    }

    /** Send C2S_FRIEND_DEL_FRIEND_REQ(919) to server */
    async sendFriendDelFriendReq(payload: FriendDelFriendReq): Promise<void> {
        return this.send("C2S_FRIEND_DEL_FRIEND_REQ", payload);
    }

    /** Receive S2C_FRIEND_DEL_FRIEND_RES(920) from server */
    onFriendDelFriendRes(handler: (payload: FriendDelFriendRes) => any): void {
        this.on("S2C_FRIEND_DEL_FRIEND_RES", handler);
    }

    /** Receive S2C_FRIEND_DEL_FRIEND_RES(920) from server */
    onceFriendDelFriendRes(handler: (payload: FriendDelFriendRes) => any): void {
        this.once("S2C_FRIEND_DEL_FRIEND_RES", handler);
    }

    /** Receive S2C_FRIEND_INFO_NOT(921) from server */
    onFriendInfoNot(handler: (payload: FriendInfoNot) => any): void {
        this.on("S2C_FRIEND_INFO_NOT", handler);
    }

    /** Receive S2C_FRIEND_INFO_NOT(921) from server */
    onceFriendInfoNot(handler: (payload: FriendInfoNot) => any): void {
        this.once("S2C_FRIEND_INFO_NOT", handler);
    }

    /** Receive S2C_FRIEND_SET_FRIEND_INFOS_NOT(922) from server */
    onFriendSetFriendInfosNot(handler: (payload: FriendSetFriendInfosNot) => any): void {
        this.on("S2C_FRIEND_SET_FRIEND_INFOS_NOT", handler);
    }

    /** Receive S2C_FRIEND_SET_FRIEND_INFOS_NOT(922) from server */
    onceFriendSetFriendInfosNot(handler: (payload: FriendSetFriendInfosNot) => any): void {
        this.once("S2C_FRIEND_SET_FRIEND_INFOS_NOT", handler);
    }

    /** Receive S2C_FRIEND_DEL_FRIEND_INFOS_NOT(923) from server */
    onFriendDelFriendInfosNot(handler: (payload: FriendDelFriendInfosNot) => any): void {
        this.on("S2C_FRIEND_DEL_FRIEND_INFOS_NOT", handler);
    }

    /** Receive S2C_FRIEND_DEL_FRIEND_INFOS_NOT(923) from server */
    onceFriendDelFriendInfosNot(handler: (payload: FriendDelFriendInfosNot) => any): void {
        this.once("S2C_FRIEND_DEL_FRIEND_INFOS_NOT", handler);
    }

    /** Receive S2C_FRIEND_SET_ACCEPT_INFOS_NOT(924) from server */
    onFriendSetAcceptInfosNot(handler: (payload: FriendSetAcceptInfosNot) => any): void {
        this.on("S2C_FRIEND_SET_ACCEPT_INFOS_NOT", handler);
    }

    /** Receive S2C_FRIEND_SET_ACCEPT_INFOS_NOT(924) from server */
    onceFriendSetAcceptInfosNot(handler: (payload: FriendSetAcceptInfosNot) => any): void {
        this.once("S2C_FRIEND_SET_ACCEPT_INFOS_NOT", handler);
    }

    /** Receive S2C_FRIEND_DEL_ACCEPT_INFOS_NOT(925) from server */
    onFriendDelAcceptInfosNot(handler: (payload: FriendDelAcceptInfosNot) => any): void {
        this.on("S2C_FRIEND_DEL_ACCEPT_INFOS_NOT", handler);
    }

    /** Receive S2C_FRIEND_DEL_ACCEPT_INFOS_NOT(925) from server */
    onceFriendDelAcceptInfosNot(handler: (payload: FriendDelAcceptInfosNot) => any): void {
        this.once("S2C_FRIEND_DEL_ACCEPT_INFOS_NOT", handler);
    }

    /** Receive S2C_FRIEND_SET_INVITE_INFOS_NOT(926) from server */
    onFriendSetInviteInfosNot(handler: (payload: FriendSetInviteInfosNot) => any): void {
        this.on("S2C_FRIEND_SET_INVITE_INFOS_NOT", handler);
    }

    /** Receive S2C_FRIEND_SET_INVITE_INFOS_NOT(926) from server */
    onceFriendSetInviteInfosNot(handler: (payload: FriendSetInviteInfosNot) => any): void {
        this.once("S2C_FRIEND_SET_INVITE_INFOS_NOT", handler);
    }

    /** Receive S2C_FRIEND_DEL_INVITE_INFOS_NOT(927) from server */
    onFriendDelInviteInfosNot(handler: (payload: FriendDelInviteInfosNot) => any): void {
        this.on("S2C_FRIEND_DEL_INVITE_INFOS_NOT", handler);
    }

    /** Receive S2C_FRIEND_DEL_INVITE_INFOS_NOT(927) from server */
    onceFriendDelInviteInfosNot(handler: (payload: FriendDelInviteInfosNot) => any): void {
        this.once("S2C_FRIEND_DEL_INVITE_INFOS_NOT", handler);
    }

    /** Receive S2C_FRIEND_SET_STATUS_NOT(928) from server */
    onFriendSetStatusNot(handler: (payload: FriendSetStatusNot) => any): void {
        this.on("S2C_FRIEND_SET_STATUS_NOT", handler);
    }

    /** Receive S2C_FRIEND_SET_STATUS_NOT(928) from server */
    onceFriendSetStatusNot(handler: (payload: FriendSetStatusNot) => any): void {
        this.once("S2C_FRIEND_SET_STATUS_NOT", handler);
    }

    /** Call FRIEND_LIST on server */
    async friendList(payload: FriendListReq): Promise<FriendListRes> {
        return new Promise(res => {
            this.onceFriendListRes(res);
            this.sendFriendListReq(payload);
        });
    }

    /** Send C2S_FRIEND_LIST_REQ(940) to server */
    async sendFriendListReq(payload: FriendListReq): Promise<void> {
        return this.send("C2S_FRIEND_LIST_REQ", payload);
    }

    /** Receive S2C_FRIEND_LIST_RES(941) from server */
    onFriendListRes(handler: (payload: FriendListRes) => any): void {
        this.on("S2C_FRIEND_LIST_RES", handler);
    }

    /** Receive S2C_FRIEND_LIST_RES(941) from server */
    onceFriendListRes(handler: (payload: FriendListRes) => any): void {
        this.once("S2C_FRIEND_LIST_RES", handler);
    }

    /** Call FRIEND_LIST_ALL on server */
    async friendListAll(payload: FriendListAllReq): Promise<FriendListAllRes> {
        return new Promise(res => {
            this.onceFriendListAllRes(res);
            this.sendFriendListAllReq(payload);
        });
    }

    /** Send C2S_FRIEND_LIST_ALL_REQ(942) to server */
    async sendFriendListAllReq(payload: FriendListAllReq): Promise<void> {
        return this.send("C2S_FRIEND_LIST_ALL_REQ", payload);
    }

    /** Receive S2C_FRIEND_LIST_ALL_RES(943) from server */
    onFriendListAllRes(handler: (payload: FriendListAllRes) => any): void {
        this.on("S2C_FRIEND_LIST_ALL_RES", handler);
    }

    /** Receive S2C_FRIEND_LIST_ALL_RES(943) from server */
    onceFriendListAllRes(handler: (payload: FriendListAllRes) => any): void {
        this.once("S2C_FRIEND_LIST_ALL_RES", handler);
    }

    /** Call FRIEND_FIND on server */
    async friendFind(payload: FriendFindReq): Promise<FriendFindRes> {
        return new Promise(res => {
            this.onceFriendFindRes(res);
            this.sendFriendFindReq(payload);
        });
    }

    /** Send C2S_FRIEND_FIND_REQ(944) to server */
    async sendFriendFindReq(payload: FriendFindReq): Promise<void> {
        return this.send("C2S_FRIEND_FIND_REQ", payload);
    }

    /** Receive S2C_FRIEND_FIND_RES(945) from server */
    onFriendFindRes(handler: (payload: FriendFindRes) => any): void {
        this.on("S2C_FRIEND_FIND_RES", handler);
    }

    /** Receive S2C_FRIEND_FIND_RES(945) from server */
    onceFriendFindRes(handler: (payload: FriendFindRes) => any): void {
        this.once("S2C_FRIEND_FIND_RES", handler);
    }
}

export type FriendCheckAccountnicknameReq = Unmessage<SC2S_FRIEND_CHECK_ACCOUNTNICKNAME_REQ>;
export type FriendCheckAccountnicknameRes = Unmessage<SS2C_FRIEND_CHECK_ACCOUNTNICKNAME_RES>;
export type FriendCreateAccountnicknameReq = Unmessage<SC2S_FRIEND_CREATE_ACCOUNTNICKNAME_REQ>;
export type FriendCreateAccountnicknameRes = Unmessage<SS2C_FRIEND_CREATE_ACCOUNTNICKNAME_RES>;
export type FriendSetStatusReq = Unmessage<SC2S_FRIEND_SET_STATUS_REQ>;
export type FriendSetStatusRes = Unmessage<SS2C_FRIEND_SET_STATUS_RES>;
export type FriendSetPrivacyReq = Unmessage<SC2S_FRIEND_SET_PRIVACY_REQ>;
export type FriendSetPrivacyRes = Unmessage<SS2C_FRIEND_SET_PRIVACY_RES>;
export type FriendInviteReq = Unmessage<SC2S_FRIEND_INVITE_REQ>;
export type FriendInviteRes = Unmessage<SS2C_FRIEND_INVITE_RES>;
export type FriendInviteByAccountnicknameReq = Unmessage<SC2S_FRIEND_INVITE_BY_ACCOUNTNICKNAME_REQ>;
export type FriendInviteByAccountnicknameRes = Unmessage<SS2C_FRIEND_INVITE_BY_ACCOUNTNICKNAME_RES>;
export type FriendInviteAcceptReq = Unmessage<SC2S_FRIEND_INVITE_ACCEPT_REQ>;
export type FriendInviteAcceptRes = Unmessage<SS2C_FRIEND_INVITE_ACCEPT_RES>;
export type FriendInviteDeclineReq = Unmessage<SC2S_FRIEND_INVITE_DECLINE_REQ>;
export type FriendInviteDeclineRes = Unmessage<SS2C_FRIEND_INVITE_DECLINE_RES>;
export type FriendInviteCancelReq = Unmessage<SC2S_FRIEND_INVITE_CANCEL_REQ>;
export type FriendInviteCancelRes = Unmessage<SS2C_FRIEND_INVITE_CANCEL_RES>;
export type FriendDelFriendReq = Unmessage<SC2S_FRIEND_DEL_FRIEND_REQ>;
export type FriendDelFriendRes = Unmessage<SS2C_FRIEND_DEL_FRIEND_RES>;
export type FriendInfoNot = Unmessage<SS2C_FRIEND_INFO_NOT>;
export type FriendSetFriendInfosNot = Unmessage<SS2C_FRIEND_SET_FRIEND_INFOS_NOT>;
export type FriendDelFriendInfosNot = Unmessage<SS2C_FRIEND_DEL_FRIEND_INFOS_NOT>;
export type FriendSetAcceptInfosNot = Unmessage<SS2C_FRIEND_SET_ACCEPT_INFOS_NOT>;
export type FriendDelAcceptInfosNot = Unmessage<SS2C_FRIEND_DEL_ACCEPT_INFOS_NOT>;
export type FriendSetInviteInfosNot = Unmessage<SS2C_FRIEND_SET_INVITE_INFOS_NOT>;
export type FriendDelInviteInfosNot = Unmessage<SS2C_FRIEND_DEL_INVITE_INFOS_NOT>;
export type FriendSetStatusNot = Unmessage<SS2C_FRIEND_SET_STATUS_NOT>;
export type FriendListReq = Unmessage<SC2S_FRIEND_LIST_REQ>;
export type FriendListRes = Unmessage<SS2C_FRIEND_LIST_RES>;
export type FriendListAllReq = Unmessage<SC2S_FRIEND_LIST_ALL_REQ>;
export type FriendListAllRes = Unmessage<SS2C_FRIEND_LIST_ALL_RES>;
export type FriendFindReq = Unmessage<SC2S_FRIEND_FIND_REQ>;
export type FriendFindRes = Unmessage<SS2C_FRIEND_FIND_RES>;
