import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_PARTY_INVITE_REQ } from "../pb/Party_pb";
import { type SS2C_PARTY_INVITE_RES } from "../pb/Party_pb";
import { type SS2C_PARTY_INVITE_NOT } from "../pb/Party_pb";
import { type SC2S_PARTY_INVITE_ANSWER_REQ } from "../pb/Party_pb";
import { type SS2C_PARTY_INVITE_ANSWER_RES } from "../pb/Party_pb";
import { type SS2C_PARTY_INVITE_ANSWER_RESULT_NOT } from "../pb/Party_pb";
import { type SC2S_PARTY_EXIT_REQ } from "../pb/Party_pb";
import { type SS2C_PARTY_EXIT_RES } from "../pb/Party_pb";
import { type SS2C_PARTY_MEMBER_INFO_NOT } from "../pb/Party_pb";
import { type SC2S_PARTY_READY_REQ } from "../pb/Party_pb";
import { type SS2C_PARTY_READY_RES } from "../pb/Party_pb";
import { type SS2C_PARTY_EQUIP_ITEM_CHANGE_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_REGION_CHANGE_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_LOCATION_UPDATE_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_CHARACTER_SKIN_LIST_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_CHARACTER_SKIN_CHANGE_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_ITEM_SKIN_LIST_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_ITEM_SKIN_CHANGE_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_ARMOR_SKIN_LIST_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_ARMOR_SKIN_CHANGE_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_GAME_TYPE_CHANGE_NOT } from "../pb/Party_pb";
import { type SC2S_PARTY_MEMBER_KICK_REQ } from "../pb/Party_pb";
import { type SS2C_PARTY_MEMBER_KICK_RES } from "../pb/Party_pb";
import { type SC2S_PARTY_CHAT_REQ } from "../pb/Party_pb";
import { type SS2C_PARTY_CHAT_RES } from "../pb/Party_pb";
import { type SS2C_PARTY_CHAT_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_READY_CHANGE_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_KICKED_OUT_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_MEMBER_LOBBY_EMOTE_NOT } from "../pb/Party_pb";
import { type SC2S_PARTY_START_LOBBY_EMOTE_REQ } from "../pb/Party_pb";
import { type SS2C_PARTY_START_LOBBY_EMOTE_RES } from "../pb/Party_pb";
import { type SS2C_PARTY_START_LOBBY_EMOTE_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_GEAR_SCORE_CHANGE_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_RANDOM_MATCHMAKING_NOT } from "../pb/Party_pb";
import { type SS2C_PARTY_LAST_GAME_MEMBER_INFO_NOT } from "../pb/Party_pb";

export class PartyModule extends Module {
    override name = "PartyModule";

    /** Call PARTY_INVITE on server */
    async partyInvite(payload: PartyInviteReq): Promise<PartyInviteRes> {
        return new Promise(res => {
            this.oncePartyInviteRes(res);
            this.sendPartyInviteReq(payload);
        });
    }

    /** Send C2S_PARTY_INVITE_REQ(1001) to server */
    async sendPartyInviteReq(payload: PartyInviteReq): Promise<void> {
        return this.send("C2S_PARTY_INVITE_REQ", payload);
    }

    /** Receive S2C_PARTY_INVITE_RES(1002) from server */
    onPartyInviteRes(handler: (payload: PartyInviteRes) => any): void {
        this.on("S2C_PARTY_INVITE_RES", handler);
    }

    /** Receive S2C_PARTY_INVITE_RES(1002) from server */
    oncePartyInviteRes(handler: (payload: PartyInviteRes) => any): void {
        this.once("S2C_PARTY_INVITE_RES", handler);
    }

    /** Receive S2C_PARTY_INVITE_NOT(1003) from server */
    onPartyInviteNot(handler: (payload: PartyInviteNot) => any): void {
        this.on("S2C_PARTY_INVITE_NOT", handler);
    }

    /** Receive S2C_PARTY_INVITE_NOT(1003) from server */
    oncePartyInviteNot(handler: (payload: PartyInviteNot) => any): void {
        this.once("S2C_PARTY_INVITE_NOT", handler);
    }

    /** Call PARTY_INVITE_ANSWER on server */
    async partyInviteAnswer(payload: PartyInviteAnswerReq): Promise<PartyInviteAnswerRes> {
        return new Promise(res => {
            this.oncePartyInviteAnswerRes(res);
            this.sendPartyInviteAnswerReq(payload);
        });
    }

    /** Send C2S_PARTY_INVITE_ANSWER_REQ(1004) to server */
    async sendPartyInviteAnswerReq(payload: PartyInviteAnswerReq): Promise<void> {
        return this.send("C2S_PARTY_INVITE_ANSWER_REQ", payload);
    }

    /** Receive S2C_PARTY_INVITE_ANSWER_RES(1005) from server */
    onPartyInviteAnswerRes(handler: (payload: PartyInviteAnswerRes) => any): void {
        this.on("S2C_PARTY_INVITE_ANSWER_RES", handler);
    }

    /** Receive S2C_PARTY_INVITE_ANSWER_RES(1005) from server */
    oncePartyInviteAnswerRes(handler: (payload: PartyInviteAnswerRes) => any): void {
        this.once("S2C_PARTY_INVITE_ANSWER_RES", handler);
    }

    /** Receive S2C_PARTY_INVITE_ANSWER_RESULT_NOT(1006) from server */
    onPartyInviteAnswerResultNot(handler: (payload: PartyInviteAnswerResultNot) => any): void {
        this.on("S2C_PARTY_INVITE_ANSWER_RESULT_NOT", handler);
    }

    /** Receive S2C_PARTY_INVITE_ANSWER_RESULT_NOT(1006) from server */
    oncePartyInviteAnswerResultNot(handler: (payload: PartyInviteAnswerResultNot) => any): void {
        this.once("S2C_PARTY_INVITE_ANSWER_RESULT_NOT", handler);
    }

    /** Call PARTY_EXIT on server */
    async partyExit(payload: PartyExitReq): Promise<PartyExitRes> {
        return new Promise(res => {
            this.oncePartyExitRes(res);
            this.sendPartyExitReq(payload);
        });
    }

    /** Send C2S_PARTY_EXIT_REQ(1007) to server */
    async sendPartyExitReq(payload: PartyExitReq): Promise<void> {
        return this.send("C2S_PARTY_EXIT_REQ", payload);
    }

    /** Receive S2C_PARTY_EXIT_RES(1008) from server */
    onPartyExitRes(handler: (payload: PartyExitRes) => any): void {
        this.on("S2C_PARTY_EXIT_RES", handler);
    }

    /** Receive S2C_PARTY_EXIT_RES(1008) from server */
    oncePartyExitRes(handler: (payload: PartyExitRes) => any): void {
        this.once("S2C_PARTY_EXIT_RES", handler);
    }

    /** Receive S2C_PARTY_MEMBER_INFO_NOT(1009) from server */
    onPartyMemberInfoNot(handler: (payload: PartyMemberInfoNot) => any): void {
        this.on("S2C_PARTY_MEMBER_INFO_NOT", handler);
    }

    /** Receive S2C_PARTY_MEMBER_INFO_NOT(1009) from server */
    oncePartyMemberInfoNot(handler: (payload: PartyMemberInfoNot) => any): void {
        this.once("S2C_PARTY_MEMBER_INFO_NOT", handler);
    }

    /** Call PARTY_READY on server */
    async partyReady(payload: PartyReadyReq): Promise<PartyReadyRes> {
        return new Promise(res => {
            this.oncePartyReadyRes(res);
            this.sendPartyReadyReq(payload);
        });
    }

    /** Send C2S_PARTY_READY_REQ(1010) to server */
    async sendPartyReadyReq(payload: PartyReadyReq): Promise<void> {
        return this.send("C2S_PARTY_READY_REQ", payload);
    }

    /** Receive S2C_PARTY_READY_RES(1011) from server */
    onPartyReadyRes(handler: (payload: PartyReadyRes) => any): void {
        this.on("S2C_PARTY_READY_RES", handler);
    }

    /** Receive S2C_PARTY_READY_RES(1011) from server */
    oncePartyReadyRes(handler: (payload: PartyReadyRes) => any): void {
        this.once("S2C_PARTY_READY_RES", handler);
    }

    /** Receive S2C_PARTY_EQUIP_ITEM_CHANGE_NOT(1012) from server */
    onPartyEquipItemChangeNot(handler: (payload: PartyEquipItemChangeNot) => any): void {
        this.on("S2C_PARTY_EQUIP_ITEM_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_EQUIP_ITEM_CHANGE_NOT(1012) from server */
    oncePartyEquipItemChangeNot(handler: (payload: PartyEquipItemChangeNot) => any): void {
        this.once("S2C_PARTY_EQUIP_ITEM_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_REGION_CHANGE_NOT(1013) from server */
    onPartyRegionChangeNot(handler: (payload: PartyRegionChangeNot) => any): void {
        this.on("S2C_PARTY_REGION_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_REGION_CHANGE_NOT(1013) from server */
    oncePartyRegionChangeNot(handler: (payload: PartyRegionChangeNot) => any): void {
        this.once("S2C_PARTY_REGION_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_LOCATION_UPDATE_NOT(1014) from server */
    onPartyLocationUpdateNot(handler: (payload: PartyLocationUpdateNot) => any): void {
        this.on("S2C_PARTY_LOCATION_UPDATE_NOT", handler);
    }

    /** Receive S2C_PARTY_LOCATION_UPDATE_NOT(1014) from server */
    oncePartyLocationUpdateNot(handler: (payload: PartyLocationUpdateNot) => any): void {
        this.once("S2C_PARTY_LOCATION_UPDATE_NOT", handler);
    }

    /** Receive S2C_PARTY_CHARACTER_SKIN_LIST_NOT(1015) from server */
    onPartyCharacterSkinListNot(handler: (payload: PartyCharacterSkinListNot) => any): void {
        this.on("S2C_PARTY_CHARACTER_SKIN_LIST_NOT", handler);
    }

    /** Receive S2C_PARTY_CHARACTER_SKIN_LIST_NOT(1015) from server */
    oncePartyCharacterSkinListNot(handler: (payload: PartyCharacterSkinListNot) => any): void {
        this.once("S2C_PARTY_CHARACTER_SKIN_LIST_NOT", handler);
    }

    /** Receive S2C_PARTY_CHARACTER_SKIN_CHANGE_NOT(1016) from server */
    onPartyCharacterSkinChangeNot(handler: (payload: PartyCharacterSkinChangeNot) => any): void {
        this.on("S2C_PARTY_CHARACTER_SKIN_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_CHARACTER_SKIN_CHANGE_NOT(1016) from server */
    oncePartyCharacterSkinChangeNot(handler: (payload: PartyCharacterSkinChangeNot) => any): void {
        this.once("S2C_PARTY_CHARACTER_SKIN_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_ITEM_SKIN_LIST_NOT(1017) from server */
    onPartyItemSkinListNot(handler: (payload: PartyItemSkinListNot) => any): void {
        this.on("S2C_PARTY_ITEM_SKIN_LIST_NOT", handler);
    }

    /** Receive S2C_PARTY_ITEM_SKIN_LIST_NOT(1017) from server */
    oncePartyItemSkinListNot(handler: (payload: PartyItemSkinListNot) => any): void {
        this.once("S2C_PARTY_ITEM_SKIN_LIST_NOT", handler);
    }

    /** Receive S2C_PARTY_ITEM_SKIN_CHANGE_NOT(1018) from server */
    onPartyItemSkinChangeNot(handler: (payload: PartyItemSkinChangeNot) => any): void {
        this.on("S2C_PARTY_ITEM_SKIN_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_ITEM_SKIN_CHANGE_NOT(1018) from server */
    oncePartyItemSkinChangeNot(handler: (payload: PartyItemSkinChangeNot) => any): void {
        this.once("S2C_PARTY_ITEM_SKIN_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_ARMOR_SKIN_LIST_NOT(1031) from server */
    onPartyArmorSkinListNot(handler: (payload: PartyArmorSkinListNot) => any): void {
        this.on("S2C_PARTY_ARMOR_SKIN_LIST_NOT", handler);
    }

    /** Receive S2C_PARTY_ARMOR_SKIN_LIST_NOT(1031) from server */
    oncePartyArmorSkinListNot(handler: (payload: PartyArmorSkinListNot) => any): void {
        this.once("S2C_PARTY_ARMOR_SKIN_LIST_NOT", handler);
    }

    /** Receive S2C_PARTY_ARMOR_SKIN_CHANGE_NOT(1032) from server */
    onPartyArmorSkinChangeNot(handler: (payload: PartyArmorSkinChangeNot) => any): void {
        this.on("S2C_PARTY_ARMOR_SKIN_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_ARMOR_SKIN_CHANGE_NOT(1032) from server */
    oncePartyArmorSkinChangeNot(handler: (payload: PartyArmorSkinChangeNot) => any): void {
        this.once("S2C_PARTY_ARMOR_SKIN_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_GAME_TYPE_CHANGE_NOT(1019) from server */
    onPartyGameTypeChangeNot(handler: (payload: PartyGameTypeChangeNot) => any): void {
        this.on("S2C_PARTY_GAME_TYPE_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_GAME_TYPE_CHANGE_NOT(1019) from server */
    oncePartyGameTypeChangeNot(handler: (payload: PartyGameTypeChangeNot) => any): void {
        this.once("S2C_PARTY_GAME_TYPE_CHANGE_NOT", handler);
    }

    /** Call PARTY_MEMBER_KICK on server */
    async partyMemberKick(payload: PartyMemberKickReq): Promise<PartyMemberKickRes> {
        return new Promise(res => {
            this.oncePartyMemberKickRes(res);
            this.sendPartyMemberKickReq(payload);
        });
    }

    /** Send C2S_PARTY_MEMBER_KICK_REQ(1020) to server */
    async sendPartyMemberKickReq(payload: PartyMemberKickReq): Promise<void> {
        return this.send("C2S_PARTY_MEMBER_KICK_REQ", payload);
    }

    /** Receive S2C_PARTY_MEMBER_KICK_RES(1021) from server */
    onPartyMemberKickRes(handler: (payload: PartyMemberKickRes) => any): void {
        this.on("S2C_PARTY_MEMBER_KICK_RES", handler);
    }

    /** Receive S2C_PARTY_MEMBER_KICK_RES(1021) from server */
    oncePartyMemberKickRes(handler: (payload: PartyMemberKickRes) => any): void {
        this.once("S2C_PARTY_MEMBER_KICK_RES", handler);
    }

    /** Call PARTY_CHAT on server */
    async partyChat(payload: PartyChatReq): Promise<PartyChatRes> {
        return new Promise(res => {
            this.oncePartyChatRes(res);
            this.sendPartyChatReq(payload);
        });
    }

    /** Send C2S_PARTY_CHAT_REQ(1022) to server */
    async sendPartyChatReq(payload: PartyChatReq): Promise<void> {
        return this.send("C2S_PARTY_CHAT_REQ", payload);
    }

    /** Receive S2C_PARTY_CHAT_RES(1023) from server */
    onPartyChatRes(handler: (payload: PartyChatRes) => any): void {
        this.on("S2C_PARTY_CHAT_RES", handler);
    }

    /** Receive S2C_PARTY_CHAT_RES(1023) from server */
    oncePartyChatRes(handler: (payload: PartyChatRes) => any): void {
        this.once("S2C_PARTY_CHAT_RES", handler);
    }

    /** Receive S2C_PARTY_CHAT_NOT(1024) from server */
    onPartyChatNot(handler: (payload: PartyChatNot) => any): void {
        this.on("S2C_PARTY_CHAT_NOT", handler);
    }

    /** Receive S2C_PARTY_CHAT_NOT(1024) from server */
    oncePartyChatNot(handler: (payload: PartyChatNot) => any): void {
        this.once("S2C_PARTY_CHAT_NOT", handler);
    }

    /** Receive S2C_PARTY_READY_CHANGE_NOT(1025) from server */
    onPartyReadyChangeNot(handler: (payload: PartyReadyChangeNot) => any): void {
        this.on("S2C_PARTY_READY_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_READY_CHANGE_NOT(1025) from server */
    oncePartyReadyChangeNot(handler: (payload: PartyReadyChangeNot) => any): void {
        this.once("S2C_PARTY_READY_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_KICKED_OUT_NOT(1026) from server */
    onPartyKickedOutNot(handler: (payload: PartyKickedOutNot) => any): void {
        this.on("S2C_PARTY_KICKED_OUT_NOT", handler);
    }

    /** Receive S2C_PARTY_KICKED_OUT_NOT(1026) from server */
    oncePartyKickedOutNot(handler: (payload: PartyKickedOutNot) => any): void {
        this.once("S2C_PARTY_KICKED_OUT_NOT", handler);
    }

    /** Receive S2C_PARTY_MEMBER_LOBBY_EMOTE_NOT(1027) from server */
    onPartyMemberLobbyEmoteNot(handler: (payload: PartyMemberLobbyEmoteNot) => any): void {
        this.on("S2C_PARTY_MEMBER_LOBBY_EMOTE_NOT", handler);
    }

    /** Receive S2C_PARTY_MEMBER_LOBBY_EMOTE_NOT(1027) from server */
    oncePartyMemberLobbyEmoteNot(handler: (payload: PartyMemberLobbyEmoteNot) => any): void {
        this.once("S2C_PARTY_MEMBER_LOBBY_EMOTE_NOT", handler);
    }

    /** Call PARTY_START_LOBBY_EMOTE on server */
    async partyStartLobbyEmote(payload: PartyStartLobbyEmoteReq): Promise<PartyStartLobbyEmoteRes> {
        return new Promise(res => {
            this.oncePartyStartLobbyEmoteRes(res);
            this.sendPartyStartLobbyEmoteReq(payload);
        });
    }

    /** Send C2S_PARTY_START_LOBBY_EMOTE_REQ(1028) to server */
    async sendPartyStartLobbyEmoteReq(payload: PartyStartLobbyEmoteReq): Promise<void> {
        return this.send("C2S_PARTY_START_LOBBY_EMOTE_REQ", payload);
    }

    /** Receive S2C_PARTY_START_LOBBY_EMOTE_RES(1029) from server */
    onPartyStartLobbyEmoteRes(handler: (payload: PartyStartLobbyEmoteRes) => any): void {
        this.on("S2C_PARTY_START_LOBBY_EMOTE_RES", handler);
    }

    /** Receive S2C_PARTY_START_LOBBY_EMOTE_RES(1029) from server */
    oncePartyStartLobbyEmoteRes(handler: (payload: PartyStartLobbyEmoteRes) => any): void {
        this.once("S2C_PARTY_START_LOBBY_EMOTE_RES", handler);
    }

    /** Receive S2C_PARTY_START_LOBBY_EMOTE_NOT(1030) from server */
    onPartyStartLobbyEmoteNot(handler: (payload: PartyStartLobbyEmoteNot) => any): void {
        this.on("S2C_PARTY_START_LOBBY_EMOTE_NOT", handler);
    }

    /** Receive S2C_PARTY_START_LOBBY_EMOTE_NOT(1030) from server */
    oncePartyStartLobbyEmoteNot(handler: (payload: PartyStartLobbyEmoteNot) => any): void {
        this.once("S2C_PARTY_START_LOBBY_EMOTE_NOT", handler);
    }

    /** Receive S2C_PARTY_GEAR_SCORE_CHANGE_NOT(1033) from server */
    onPartyGearScoreChangeNot(handler: (payload: PartyGearScoreChangeNot) => any): void {
        this.on("S2C_PARTY_GEAR_SCORE_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_GEAR_SCORE_CHANGE_NOT(1033) from server */
    oncePartyGearScoreChangeNot(handler: (payload: PartyGearScoreChangeNot) => any): void {
        this.once("S2C_PARTY_GEAR_SCORE_CHANGE_NOT", handler);
    }

    /** Receive S2C_PARTY_RANDOM_MATCHMAKING_NOT(1034) from server */
    onPartyRandomMatchmakingNot(handler: (payload: PartyRandomMatchmakingNot) => any): void {
        this.on("S2C_PARTY_RANDOM_MATCHMAKING_NOT", handler);
    }

    /** Receive S2C_PARTY_RANDOM_MATCHMAKING_NOT(1034) from server */
    oncePartyRandomMatchmakingNot(handler: (payload: PartyRandomMatchmakingNot) => any): void {
        this.once("S2C_PARTY_RANDOM_MATCHMAKING_NOT", handler);
    }

    /** Receive S2C_PARTY_LAST_GAME_MEMBER_INFO_NOT(1035) from server */
    onPartyLastGameMemberInfoNot(handler: (payload: PartyLastGameMemberInfoNot) => any): void {
        this.on("S2C_PARTY_LAST_GAME_MEMBER_INFO_NOT", handler);
    }

    /** Receive S2C_PARTY_LAST_GAME_MEMBER_INFO_NOT(1035) from server */
    oncePartyLastGameMemberInfoNot(handler: (payload: PartyLastGameMemberInfoNot) => any): void {
        this.once("S2C_PARTY_LAST_GAME_MEMBER_INFO_NOT", handler);
    }
}

export type PartyInviteReq = Unmessage<SC2S_PARTY_INVITE_REQ>;
export type PartyInviteRes = Unmessage<SS2C_PARTY_INVITE_RES>;
export type PartyInviteNot = Unmessage<SS2C_PARTY_INVITE_NOT>;
export type PartyInviteAnswerReq = Unmessage<SC2S_PARTY_INVITE_ANSWER_REQ>;
export type PartyInviteAnswerRes = Unmessage<SS2C_PARTY_INVITE_ANSWER_RES>;
export type PartyInviteAnswerResultNot = Unmessage<SS2C_PARTY_INVITE_ANSWER_RESULT_NOT>;
export type PartyExitReq = Unmessage<SC2S_PARTY_EXIT_REQ>;
export type PartyExitRes = Unmessage<SS2C_PARTY_EXIT_RES>;
export type PartyMemberInfoNot = Unmessage<SS2C_PARTY_MEMBER_INFO_NOT>;
export type PartyReadyReq = Unmessage<SC2S_PARTY_READY_REQ>;
export type PartyReadyRes = Unmessage<SS2C_PARTY_READY_RES>;
export type PartyEquipItemChangeNot = Unmessage<SS2C_PARTY_EQUIP_ITEM_CHANGE_NOT>;
export type PartyRegionChangeNot = Unmessage<SS2C_PARTY_REGION_CHANGE_NOT>;
export type PartyLocationUpdateNot = Unmessage<SS2C_PARTY_LOCATION_UPDATE_NOT>;
export type PartyCharacterSkinListNot = Unmessage<SS2C_PARTY_CHARACTER_SKIN_LIST_NOT>;
export type PartyCharacterSkinChangeNot = Unmessage<SS2C_PARTY_CHARACTER_SKIN_CHANGE_NOT>;
export type PartyItemSkinListNot = Unmessage<SS2C_PARTY_ITEM_SKIN_LIST_NOT>;
export type PartyItemSkinChangeNot = Unmessage<SS2C_PARTY_ITEM_SKIN_CHANGE_NOT>;
export type PartyArmorSkinListNot = Unmessage<SS2C_PARTY_ARMOR_SKIN_LIST_NOT>;
export type PartyArmorSkinChangeNot = Unmessage<SS2C_PARTY_ARMOR_SKIN_CHANGE_NOT>;
export type PartyGameTypeChangeNot = Unmessage<SS2C_PARTY_GAME_TYPE_CHANGE_NOT>;
export type PartyMemberKickReq = Unmessage<SC2S_PARTY_MEMBER_KICK_REQ>;
export type PartyMemberKickRes = Unmessage<SS2C_PARTY_MEMBER_KICK_RES>;
export type PartyChatReq = Unmessage<SC2S_PARTY_CHAT_REQ>;
export type PartyChatRes = Unmessage<SS2C_PARTY_CHAT_RES>;
export type PartyChatNot = Unmessage<SS2C_PARTY_CHAT_NOT>;
export type PartyReadyChangeNot = Unmessage<SS2C_PARTY_READY_CHANGE_NOT>;
export type PartyKickedOutNot = Unmessage<SS2C_PARTY_KICKED_OUT_NOT>;
export type PartyMemberLobbyEmoteNot = Unmessage<SS2C_PARTY_MEMBER_LOBBY_EMOTE_NOT>;
export type PartyStartLobbyEmoteReq = Unmessage<SC2S_PARTY_START_LOBBY_EMOTE_REQ>;
export type PartyStartLobbyEmoteRes = Unmessage<SS2C_PARTY_START_LOBBY_EMOTE_RES>;
export type PartyStartLobbyEmoteNot = Unmessage<SS2C_PARTY_START_LOBBY_EMOTE_NOT>;
export type PartyGearScoreChangeNot = Unmessage<SS2C_PARTY_GEAR_SCORE_CHANGE_NOT>;
export type PartyRandomMatchmakingNot = Unmessage<SS2C_PARTY_RANDOM_MATCHMAKING_NOT>;
export type PartyLastGameMemberInfoNot = Unmessage<SS2C_PARTY_LAST_GAME_MEMBER_INFO_NOT>;
