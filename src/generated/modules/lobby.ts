import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_CHARACTER_SELECT_ENTER_REQ } from "../pb/Lobby_pb";
import { type SS2C_CHARACTER_SELECT_ENTER_RES } from "../pb/Lobby_pb";
import { type SC2S_LOBBY_CHARACTER_INFO_REQ } from "../pb/Lobby_pb";
import { type SS2C_LOBBY_CHARACTER_INFO_RES } from "../pb/Lobby_pb";
import { type SC2S_OPEN_LOBBY_MAP_REQ } from "../pb/Lobby_pb";
import { type SS2C_OPEN_LOBBY_MAP_RES } from "../pb/Lobby_pb";
import { type SC2S_LOBBY_REGION_SELECT_REQ } from "../pb/Lobby_pb";
import { type SS2C_LOBBY_REGION_SELECT_RES } from "../pb/Lobby_pb";
import { type SC2S_LOBBY_ENTER_FROM_GAME_REQ } from "../pb/Lobby_pb";
import { type SS2C_LOBBY_ENTER_FROM_GAME_RES } from "../pb/Lobby_pb";
import { type SC2S_LOBBY_GAME_TYPE_SELECT_REQ } from "../pb/Lobby_pb";
import { type SS2C_LOBBY_GAME_TYPE_SELECT_RES } from "../pb/Lobby_pb";
import { type SS2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT } from "../pb/Lobby_pb";
import { type SS2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOT } from "../pb/Lobby_pb";
import { type SS2C_LOBBY_REPORT_PUNISH_LIST_NOT } from "../pb/Lobby_pb";
import { type SC2S_USER_CHARACTER_GAME_STAT_INFO_REQ } from "../pb/Lobby_pb";
import { type SS2C_USER_CHARACTER_GAME_STAT_INFO_RES } from "../pb/Lobby_pb";
import { type SC2S_KNIGHT_PROGRAM_LINK_SELECT_REQ } from "../pb/Lobby_pb";
import { type SS2C_KNIGHT_PROGRAM_LINK_SELECT_RES } from "../pb/Lobby_pb";
import { type SC2S_GM_TRADE_CHAT_BAN_REQ } from "../pb/Lobby_pb";
import { type SS2C_GM_TRADE_CHAT_BAN_RES } from "../pb/Lobby_pb";
import { type SS2C_FRIEND_ITEM_RECOVERED_NOT } from "../pb/Lobby_pb";
import { type SS2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT } from "../pb/Lobby_pb";
import { type SC2S_FRIEND_ITEM_RECOVERED_NOT_CHECK_REQ } from "../pb/Lobby_pb";
import { type SS2C_FRIEND_ITEM_RECOVERED_NOT_CHECK_RES } from "../pb/Lobby_pb";
import { type SC2S_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_REQ } from "../pb/Lobby_pb";
import { type SS2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_RES } from "../pb/Lobby_pb";
import { type SC2S_LOBBY_RANDOM_MATCHMAKING_REQ } from "../pb/Lobby_pb";
import { type SS2C_LOBBY_RANDOM_MATCHMAKING_RES } from "../pb/Lobby_pb";
import { type SS2C_DLC_LEGENDARY_STATUS_DUPLICATE_WARNING_NOT } from "../pb/Lobby_pb";
import { type SS2C_ARENA_STAT_NOT } from "../pb/Lobby_pb";

export class LobbyModule extends Module {
    override name = "LobbyModule";

    /** Call CHARACTER_SELECT_ENTER on server */
    async characterSelectEnter(payload: CharacterSelectEnterReq): Promise<CharacterSelectEnterRes> {
        return new Promise(res => {
            this.onceCharacterSelectEnterRes(res);
            this.sendCharacterSelectEnterReq(payload);
        });
    }

    /** Send C2S_CHARACTER_SELECT_ENTER_REQ(41) to server */
    async sendCharacterSelectEnterReq(payload: CharacterSelectEnterReq): Promise<void> {
        return this.send("C2S_CHARACTER_SELECT_ENTER_REQ", payload);
    }

    /** Receive S2C_CHARACTER_SELECT_ENTER_RES(42) from server */
    onCharacterSelectEnterRes(handler: (payload: CharacterSelectEnterRes) => any): void {
        this.on("S2C_CHARACTER_SELECT_ENTER_RES", handler);
    }

    /** Receive S2C_CHARACTER_SELECT_ENTER_RES(42) from server */
    onceCharacterSelectEnterRes(handler: (payload: CharacterSelectEnterRes) => any): void {
        this.once("S2C_CHARACTER_SELECT_ENTER_RES", handler);
    }

    /** Call LOBBY_CHARACTER_INFO on server */
    async lobbyCharacterInfo(payload: LobbyCharacterInfoReq): Promise<LobbyCharacterInfoRes> {
        return new Promise(res => {
            this.onceLobbyCharacterInfoRes(res);
            this.sendLobbyCharacterInfoReq(payload);
        });
    }

    /** Send C2S_LOBBY_CHARACTER_INFO_REQ(43) to server */
    async sendLobbyCharacterInfoReq(payload: LobbyCharacterInfoReq): Promise<void> {
        return this.send("C2S_LOBBY_CHARACTER_INFO_REQ", payload);
    }

    /** Receive S2C_LOBBY_CHARACTER_INFO_RES(44) from server */
    onLobbyCharacterInfoRes(handler: (payload: LobbyCharacterInfoRes) => any): void {
        this.on("S2C_LOBBY_CHARACTER_INFO_RES", handler);
    }

    /** Receive S2C_LOBBY_CHARACTER_INFO_RES(44) from server */
    onceLobbyCharacterInfoRes(handler: (payload: LobbyCharacterInfoRes) => any): void {
        this.once("S2C_LOBBY_CHARACTER_INFO_RES", handler);
    }

    /** Call OPEN_LOBBY_MAP on server */
    async openLobbyMap(payload: OpenLobbyMapReq): Promise<OpenLobbyMapRes> {
        return new Promise(res => {
            this.onceOpenLobbyMapRes(res);
            this.sendOpenLobbyMapReq(payload);
        });
    }

    /** Send C2S_OPEN_LOBBY_MAP_REQ(45) to server */
    async sendOpenLobbyMapReq(payload: OpenLobbyMapReq): Promise<void> {
        return this.send("C2S_OPEN_LOBBY_MAP_REQ", payload);
    }

    /** Receive S2C_OPEN_LOBBY_MAP_RES(46) from server */
    onOpenLobbyMapRes(handler: (payload: OpenLobbyMapRes) => any): void {
        this.on("S2C_OPEN_LOBBY_MAP_RES", handler);
    }

    /** Receive S2C_OPEN_LOBBY_MAP_RES(46) from server */
    onceOpenLobbyMapRes(handler: (payload: OpenLobbyMapRes) => any): void {
        this.once("S2C_OPEN_LOBBY_MAP_RES", handler);
    }

    /** Call LOBBY_REGION_SELECT on server */
    async lobbyRegionSelect(payload: LobbyRegionSelectReq): Promise<LobbyRegionSelectRes> {
        return new Promise(res => {
            this.onceLobbyRegionSelectRes(res);
            this.sendLobbyRegionSelectReq(payload);
        });
    }

    /** Send C2S_LOBBY_REGION_SELECT_REQ(47) to server */
    async sendLobbyRegionSelectReq(payload: LobbyRegionSelectReq): Promise<void> {
        return this.send("C2S_LOBBY_REGION_SELECT_REQ", payload);
    }

    /** Receive S2C_LOBBY_REGION_SELECT_RES(48) from server */
    onLobbyRegionSelectRes(handler: (payload: LobbyRegionSelectRes) => any): void {
        this.on("S2C_LOBBY_REGION_SELECT_RES", handler);
    }

    /** Receive S2C_LOBBY_REGION_SELECT_RES(48) from server */
    onceLobbyRegionSelectRes(handler: (payload: LobbyRegionSelectRes) => any): void {
        this.once("S2C_LOBBY_REGION_SELECT_RES", handler);
    }

    /** Call LOBBY_ENTER_FROM_GAME on server */
    async lobbyEnterFromGame(payload: LobbyEnterFromGameReq): Promise<LobbyEnterFromGameRes> {
        return new Promise(res => {
            this.onceLobbyEnterFromGameRes(res);
            this.sendLobbyEnterFromGameReq(payload);
        });
    }

    /** Send C2S_LOBBY_ENTER_FROM_GAME_REQ(49) to server */
    async sendLobbyEnterFromGameReq(payload: LobbyEnterFromGameReq): Promise<void> {
        return this.send("C2S_LOBBY_ENTER_FROM_GAME_REQ", payload);
    }

    /** Receive S2C_LOBBY_ENTER_FROM_GAME_RES(50) from server */
    onLobbyEnterFromGameRes(handler: (payload: LobbyEnterFromGameRes) => any): void {
        this.on("S2C_LOBBY_ENTER_FROM_GAME_RES", handler);
    }

    /** Receive S2C_LOBBY_ENTER_FROM_GAME_RES(50) from server */
    onceLobbyEnterFromGameRes(handler: (payload: LobbyEnterFromGameRes) => any): void {
        this.once("S2C_LOBBY_ENTER_FROM_GAME_RES", handler);
    }

    /** Call LOBBY_GAME_TYPE_SELECT on server */
    async lobbyGameTypeSelect(payload: LobbyGameTypeSelectReq): Promise<LobbyGameTypeSelectRes> {
        return new Promise(res => {
            this.onceLobbyGameTypeSelectRes(res);
            this.sendLobbyGameTypeSelectReq(payload);
        });
    }

    /** Send C2S_LOBBY_GAME_TYPE_SELECT_REQ(51) to server */
    async sendLobbyGameTypeSelectReq(payload: LobbyGameTypeSelectReq): Promise<void> {
        return this.send("C2S_LOBBY_GAME_TYPE_SELECT_REQ", payload);
    }

    /** Receive S2C_LOBBY_GAME_TYPE_SELECT_RES(52) from server */
    onLobbyGameTypeSelectRes(handler: (payload: LobbyGameTypeSelectRes) => any): void {
        this.on("S2C_LOBBY_GAME_TYPE_SELECT_RES", handler);
    }

    /** Receive S2C_LOBBY_GAME_TYPE_SELECT_RES(52) from server */
    onceLobbyGameTypeSelectRes(handler: (payload: LobbyGameTypeSelectRes) => any): void {
        this.once("S2C_LOBBY_GAME_TYPE_SELECT_RES", handler);
    }

    /** Receive S2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT(53) from server */
    onLobbyAccountCurrencyListNot(handler: (payload: LobbyAccountCurrencyListNot) => any): void {
        this.on("S2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT", handler);
    }

    /** Receive S2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT(53) from server */
    onceLobbyAccountCurrencyListNot(handler: (payload: LobbyAccountCurrencyListNot) => any): void {
        this.once("S2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT", handler);
    }

    /** Receive S2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOT(54) from server */
    onLobbyCharacterLobbyEmoteNot(handler: (payload: LobbyCharacterLobbyEmoteNot) => any): void {
        this.on("S2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOT", handler);
    }

    /** Receive S2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOT(54) from server */
    onceLobbyCharacterLobbyEmoteNot(handler: (payload: LobbyCharacterLobbyEmoteNot) => any): void {
        this.once("S2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOT", handler);
    }

    /** Receive S2C_LOBBY_REPORT_PUNISH_LIST_NOT(55) from server */
    onLobbyReportPunishListNot(handler: (payload: LobbyReportPunishListNot) => any): void {
        this.on("S2C_LOBBY_REPORT_PUNISH_LIST_NOT", handler);
    }

    /** Receive S2C_LOBBY_REPORT_PUNISH_LIST_NOT(55) from server */
    onceLobbyReportPunishListNot(handler: (payload: LobbyReportPunishListNot) => any): void {
        this.once("S2C_LOBBY_REPORT_PUNISH_LIST_NOT", handler);
    }

    /** Call USER_CHARACTER_GAME_STAT_INFO on server */
    async userCharacterGameStatInfo(payload: UserCharacterGameStatInfoReq): Promise<UserCharacterGameStatInfoRes> {
        return new Promise(res => {
            this.onceUserCharacterGameStatInfoRes(res);
            this.sendUserCharacterGameStatInfoReq(payload);
        });
    }

    /** Send C2S_USER_CHARACTER_GAME_STAT_INFO_REQ(56) to server */
    async sendUserCharacterGameStatInfoReq(payload: UserCharacterGameStatInfoReq): Promise<void> {
        return this.send("C2S_USER_CHARACTER_GAME_STAT_INFO_REQ", payload);
    }

    /** Receive S2C_USER_CHARACTER_GAME_STAT_INFO_RES(57) from server */
    onUserCharacterGameStatInfoRes(handler: (payload: UserCharacterGameStatInfoRes) => any): void {
        this.on("S2C_USER_CHARACTER_GAME_STAT_INFO_RES", handler);
    }

    /** Receive S2C_USER_CHARACTER_GAME_STAT_INFO_RES(57) from server */
    onceUserCharacterGameStatInfoRes(handler: (payload: UserCharacterGameStatInfoRes) => any): void {
        this.once("S2C_USER_CHARACTER_GAME_STAT_INFO_RES", handler);
    }

    /** Call KNIGHT_PROGRAM_LINK_SELECT on server */
    async knightProgramLinkSelect(payload: KnightProgramLinkSelectReq): Promise<KnightProgramLinkSelectRes> {
        return new Promise(res => {
            this.onceKnightProgramLinkSelectRes(res);
            this.sendKnightProgramLinkSelectReq(payload);
        });
    }

    /** Send C2S_KNIGHT_PROGRAM_LINK_SELECT_REQ(58) to server */
    async sendKnightProgramLinkSelectReq(payload: KnightProgramLinkSelectReq): Promise<void> {
        return this.send("C2S_KNIGHT_PROGRAM_LINK_SELECT_REQ", payload);
    }

    /** Receive S2C_KNIGHT_PROGRAM_LINK_SELECT_RES(59) from server */
    onKnightProgramLinkSelectRes(handler: (payload: KnightProgramLinkSelectRes) => any): void {
        this.on("S2C_KNIGHT_PROGRAM_LINK_SELECT_RES", handler);
    }

    /** Receive S2C_KNIGHT_PROGRAM_LINK_SELECT_RES(59) from server */
    onceKnightProgramLinkSelectRes(handler: (payload: KnightProgramLinkSelectRes) => any): void {
        this.once("S2C_KNIGHT_PROGRAM_LINK_SELECT_RES", handler);
    }

    /** Call GM_TRADE_CHAT_BAN on server */
    async gmTradeChatBan(payload: GmTradeChatBanReq): Promise<GmTradeChatBanRes> {
        return new Promise(res => {
            this.onceGmTradeChatBanRes(res);
            this.sendGmTradeChatBanReq(payload);
        });
    }

    /** Send C2S_GM_TRADE_CHAT_BAN_REQ(1205) to server */
    async sendGmTradeChatBanReq(payload: GmTradeChatBanReq): Promise<void> {
        return this.send("C2S_GM_TRADE_CHAT_BAN_REQ", payload);
    }

    /** Receive S2C_GM_TRADE_CHAT_BAN_RES(1206) from server */
    onGmTradeChatBanRes(handler: (payload: GmTradeChatBanRes) => any): void {
        this.on("S2C_GM_TRADE_CHAT_BAN_RES", handler);
    }

    /** Receive S2C_GM_TRADE_CHAT_BAN_RES(1206) from server */
    onceGmTradeChatBanRes(handler: (payload: GmTradeChatBanRes) => any): void {
        this.once("S2C_GM_TRADE_CHAT_BAN_RES", handler);
    }

    /** Receive S2C_FRIEND_ITEM_RECOVERED_NOT(60) from server */
    onFriendItemRecoveredNot(handler: (payload: FriendItemRecoveredNot) => any): void {
        this.on("S2C_FRIEND_ITEM_RECOVERED_NOT", handler);
    }

    /** Receive S2C_FRIEND_ITEM_RECOVERED_NOT(60) from server */
    onceFriendItemRecoveredNot(handler: (payload: FriendItemRecoveredNot) => any): void {
        this.once("S2C_FRIEND_ITEM_RECOVERED_NOT", handler);
    }

    /** Receive S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT(65) from server */
    onFriendItemRecoveryReceiveNot(handler: (payload: FriendItemRecoveryReceiveNot) => any): void {
        this.on("S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT", handler);
    }

    /** Receive S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT(65) from server */
    onceFriendItemRecoveryReceiveNot(handler: (payload: FriendItemRecoveryReceiveNot) => any): void {
        this.once("S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT", handler);
    }

    /** Call FRIEND_ITEM_RECOVERED_NOT_CHECK on server */
    async friendItemRecoveredNotCheck(payload: FriendItemRecoveredNotCheckReq): Promise<FriendItemRecoveredNotCheckRes> {
        return new Promise(res => {
            this.onceFriendItemRecoveredNotCheckRes(res);
            this.sendFriendItemRecoveredNotCheckReq(payload);
        });
    }

    /** Send C2S_FRIEND_ITEM_RECOVERED_NOT_CHECK_REQ(61) to server */
    async sendFriendItemRecoveredNotCheckReq(payload: FriendItemRecoveredNotCheckReq): Promise<void> {
        return this.send("C2S_FRIEND_ITEM_RECOVERED_NOT_CHECK_REQ", payload);
    }

    /** Receive S2C_FRIEND_ITEM_RECOVERED_NOT_CHECK_RES(62) from server */
    onFriendItemRecoveredNotCheckRes(handler: (payload: FriendItemRecoveredNotCheckRes) => any): void {
        this.on("S2C_FRIEND_ITEM_RECOVERED_NOT_CHECK_RES", handler);
    }

    /** Receive S2C_FRIEND_ITEM_RECOVERED_NOT_CHECK_RES(62) from server */
    onceFriendItemRecoveredNotCheckRes(handler: (payload: FriendItemRecoveredNotCheckRes) => any): void {
        this.once("S2C_FRIEND_ITEM_RECOVERED_NOT_CHECK_RES", handler);
    }

    /** Call FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK on server */
    async friendItemRecoveryReceiveNotCheck(payload: FriendItemRecoveryReceiveNotCheckReq): Promise<FriendItemRecoveryReceiveNotCheckRes> {
        return new Promise(res => {
            this.onceFriendItemRecoveryReceiveNotCheckRes(res);
            this.sendFriendItemRecoveryReceiveNotCheckReq(payload);
        });
    }

    /** Send C2S_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_REQ(66) to server */
    async sendFriendItemRecoveryReceiveNotCheckReq(payload: FriendItemRecoveryReceiveNotCheckReq): Promise<void> {
        return this.send("C2S_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_REQ", payload);
    }

    /** Receive S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_RES(67) from server */
    onFriendItemRecoveryReceiveNotCheckRes(handler: (payload: FriendItemRecoveryReceiveNotCheckRes) => any): void {
        this.on("S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_RES", handler);
    }

    /** Receive S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_RES(67) from server */
    onceFriendItemRecoveryReceiveNotCheckRes(handler: (payload: FriendItemRecoveryReceiveNotCheckRes) => any): void {
        this.once("S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_RES", handler);
    }

    /** Call LOBBY_RANDOM_MATCHMAKING on server */
    async lobbyRandomMatchmaking(payload: LobbyRandomMatchmakingReq): Promise<LobbyRandomMatchmakingRes> {
        return new Promise(res => {
            this.onceLobbyRandomMatchmakingRes(res);
            this.sendLobbyRandomMatchmakingReq(payload);
        });
    }

    /** Send C2S_LOBBY_RANDOM_MATCHMAKING_REQ(63) to server */
    async sendLobbyRandomMatchmakingReq(payload: LobbyRandomMatchmakingReq): Promise<void> {
        return this.send("C2S_LOBBY_RANDOM_MATCHMAKING_REQ", payload);
    }

    /** Receive S2C_LOBBY_RANDOM_MATCHMAKING_RES(64) from server */
    onLobbyRandomMatchmakingRes(handler: (payload: LobbyRandomMatchmakingRes) => any): void {
        this.on("S2C_LOBBY_RANDOM_MATCHMAKING_RES", handler);
    }

    /** Receive S2C_LOBBY_RANDOM_MATCHMAKING_RES(64) from server */
    onceLobbyRandomMatchmakingRes(handler: (payload: LobbyRandomMatchmakingRes) => any): void {
        this.once("S2C_LOBBY_RANDOM_MATCHMAKING_RES", handler);
    }

    /** Receive S2C_DLC_LEGENDARY_STATUS_DUPLICATE_WARNING_NOT(68) from server */
    onDlcLegendaryStatusDuplicateWarningNot(handler: (payload: DlcLegendaryStatusDuplicateWarningNot) => any): void {
        this.on("S2C_DLC_LEGENDARY_STATUS_DUPLICATE_WARNING_NOT", handler);
    }

    /** Receive S2C_DLC_LEGENDARY_STATUS_DUPLICATE_WARNING_NOT(68) from server */
    onceDlcLegendaryStatusDuplicateWarningNot(handler: (payload: DlcLegendaryStatusDuplicateWarningNot) => any): void {
        this.once("S2C_DLC_LEGENDARY_STATUS_DUPLICATE_WARNING_NOT", handler);
    }

    /** Receive S2C_ARENA_STAT_NOT(69) from server */
    onArenaStatNot(handler: (payload: ArenaStatNot) => any): void {
        this.on("S2C_ARENA_STAT_NOT", handler);
    }

    /** Receive S2C_ARENA_STAT_NOT(69) from server */
    onceArenaStatNot(handler: (payload: ArenaStatNot) => any): void {
        this.once("S2C_ARENA_STAT_NOT", handler);
    }
}

export type CharacterSelectEnterReq = Unmessage<SC2S_CHARACTER_SELECT_ENTER_REQ>;
export type CharacterSelectEnterRes = Unmessage<SS2C_CHARACTER_SELECT_ENTER_RES>;
export type LobbyCharacterInfoReq = Unmessage<SC2S_LOBBY_CHARACTER_INFO_REQ>;
export type LobbyCharacterInfoRes = Unmessage<SS2C_LOBBY_CHARACTER_INFO_RES>;
export type OpenLobbyMapReq = Unmessage<SC2S_OPEN_LOBBY_MAP_REQ>;
export type OpenLobbyMapRes = Unmessage<SS2C_OPEN_LOBBY_MAP_RES>;
export type LobbyRegionSelectReq = Unmessage<SC2S_LOBBY_REGION_SELECT_REQ>;
export type LobbyRegionSelectRes = Unmessage<SS2C_LOBBY_REGION_SELECT_RES>;
export type LobbyEnterFromGameReq = Unmessage<SC2S_LOBBY_ENTER_FROM_GAME_REQ>;
export type LobbyEnterFromGameRes = Unmessage<SS2C_LOBBY_ENTER_FROM_GAME_RES>;
export type LobbyGameTypeSelectReq = Unmessage<SC2S_LOBBY_GAME_TYPE_SELECT_REQ>;
export type LobbyGameTypeSelectRes = Unmessage<SS2C_LOBBY_GAME_TYPE_SELECT_RES>;
export type LobbyAccountCurrencyListNot = Unmessage<SS2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT>;
export type LobbyCharacterLobbyEmoteNot = Unmessage<SS2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOT>;
export type LobbyReportPunishListNot = Unmessage<SS2C_LOBBY_REPORT_PUNISH_LIST_NOT>;
export type UserCharacterGameStatInfoReq = Unmessage<SC2S_USER_CHARACTER_GAME_STAT_INFO_REQ>;
export type UserCharacterGameStatInfoRes = Unmessage<SS2C_USER_CHARACTER_GAME_STAT_INFO_RES>;
export type KnightProgramLinkSelectReq = Unmessage<SC2S_KNIGHT_PROGRAM_LINK_SELECT_REQ>;
export type KnightProgramLinkSelectRes = Unmessage<SS2C_KNIGHT_PROGRAM_LINK_SELECT_RES>;
export type GmTradeChatBanReq = Unmessage<SC2S_GM_TRADE_CHAT_BAN_REQ>;
export type GmTradeChatBanRes = Unmessage<SS2C_GM_TRADE_CHAT_BAN_RES>;
export type FriendItemRecoveredNot = Unmessage<SS2C_FRIEND_ITEM_RECOVERED_NOT>;
export type FriendItemRecoveryReceiveNot = Unmessage<SS2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT>;
export type FriendItemRecoveredNotCheckReq = Unmessage<SC2S_FRIEND_ITEM_RECOVERED_NOT_CHECK_REQ>;
export type FriendItemRecoveredNotCheckRes = Unmessage<SS2C_FRIEND_ITEM_RECOVERED_NOT_CHECK_RES>;
export type FriendItemRecoveryReceiveNotCheckReq = Unmessage<SC2S_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_REQ>;
export type FriendItemRecoveryReceiveNotCheckRes = Unmessage<SS2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_RES>;
export type LobbyRandomMatchmakingReq = Unmessage<SC2S_LOBBY_RANDOM_MATCHMAKING_REQ>;
export type LobbyRandomMatchmakingRes = Unmessage<SS2C_LOBBY_RANDOM_MATCHMAKING_RES>;
export type DlcLegendaryStatusDuplicateWarningNot = Unmessage<SS2C_DLC_LEGENDARY_STATUS_DUPLICATE_WARNING_NOT>;
export type ArenaStatNot = Unmessage<SS2C_ARENA_STAT_NOT>;
