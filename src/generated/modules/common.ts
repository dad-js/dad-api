import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_META_LOCATION_REQ } from "../pb/Common_pb";
import { type SS2C_META_LOCATION_RES } from "../pb/Common_pb";
import { type SC2S_BLOCK_CHARACTER_REQ } from "../pb/Common_pb";
import { type SS2C_BLOCK_CHARACTER_RES } from "../pb/Common_pb";
import { type SC2S_UNBLOCK_CHARACTER_REQ } from "../pb/Common_pb";
import { type SS2C_UNBLOCK_CHARACTER_RES } from "../pb/Common_pb";
import { type SC2S_BLOCK_CHARACTER_LIST_REQ } from "../pb/Common_pb";
import { type SS2C_BLOCK_CHARACTER_LIST_RES } from "../pb/Common_pb";
import { type SC2S_HACK_LOG_REQ } from "../pb/Common_pb";
import { type SS2C_HACK_LOG_RES } from "../pb/Common_pb";
import { type SS2C_OPERATE_ANNOUNCE_NOT } from "../pb/Common_pb";
import { type SS2C_SERVICE_POLICY_NOT } from "../pb/Common_pb";
import { type SC2S_RE_LOGIN_REQ } from "../pb/Common_pb";
import { type SS2C_RE_LOGIN_RES } from "../pb/Common_pb";
import { type SS2C_CLOSED_GAME_NOT } from "../pb/Common_pb";
import { type SC2S_USER_CHARACTER_INFO_REQ } from "../pb/Common_pb";
import { type SS2C_USER_CHARACTER_INFO_RES } from "../pb/Common_pb";
import { type SC2S_GM_ENTER_GAME_SPECTATOR_REQ } from "../pb/Common_pb";
import { type SS2C_GM_ENTER_GAME_SPECTATOR_RES } from "../pb/Common_pb";
import { type SS2C_ALL_MAP_MATCHMAKING_NOT } from "../pb/Common_pb";
import { type SS2C_LATENCY_CHECK_NOT } from "../pb/Common_pb";
import { type SS2C_LOBBY_COMPLETE_NOT } from "../pb/Common_pb";
import { type SC2S_CHAT_HACK_REPORT_REQ } from "../pb/Common_pb";
import { type SS2C_CHAT_HACK_REPORT_RES } from "../pb/Common_pb";
import { type SC2S_JOIN_LAST_GAME_REQ } from "../pb/Common_pb";
import { type SS2C_JOIN_LAST_GAME_RES } from "../pb/Common_pb";
import { type SC2S_WHISPER_CHAT_REQ } from "../pb/Common_pb";
import { type SS2C_WHISPER_CHAT_RES } from "../pb/Common_pb";
import { type SS2C_WHISPER_CHAT_NOT } from "../pb/Common_pb";
import { type SS2C_ACCOUNT_STATUS_NOT } from "../pb/Common_pb";
import { type SC2S_PLATFORM_LINK_CODE_GEN_REQ } from "../pb/Common_pb";
import { type SS2C_PLATFORM_LINK_CODE_GEN_RES } from "../pb/Common_pb";
import { type SC2S_PLATFORM_LINK_CODE_ACTIVE_REQ } from "../pb/Common_pb";
import { type SS2C_PLATFORM_LINK_CODE_ACTIVE_RES } from "../pb/Common_pb";
import { type SC2S_PLATFORM_LINK_INFO_LIST_REQ } from "../pb/Common_pb";
import { type SS2C_PLATFORM_LINK_INFO_LIST_RES } from "../pb/Common_pb";
import { type SC2S_PLATFORM_LINK_FAQ_URL_REQ } from "../pb/Common_pb";
import { type SS2C_PLATFORM_LINK_FAQ_URL_RES } from "../pb/Common_pb";
import { type SS2C_CLIENT_POPUP_MESSAGE_NOT } from "../pb/Common_pb";
import { type SC2S_TWITCH_DROPS_CONNECT_REQ } from "../pb/Common_pb";
import { type SS2C_TWITCH_DROPS_CONNECT_RES } from "../pb/Common_pb";
import { type SS2C_TWITCH_DROPS_CONNECT_NOT } from "../pb/Common_pb";
import { type SS2C_TWITCH_DROPS_LINKED_NOT } from "../pb/Common_pb";
import { type SS2C_TERMINATE_NOT } from "../pb/Common_pb";
import { type SS2C_ARENA_SCHEDULE_NOT } from "../pb/Common_pb";
import { type SC2S_DLC_INSTALLED_CHECK_REQ } from "../pb/Common_pb";
import { type SS2C_DLC_INSTALLED_CHECK_RES } from "../pb/Common_pb";

export class CommonModule extends Module {
    override name = "CommonModule";

    /** Call META_LOCATION on server */
    async metaLocation(payload: MetaLocationReq): Promise<MetaLocationRes> {
        return new Promise(res => {
            this.onceMetaLocationRes(res);
            this.sendMetaLocationReq(payload);
        });
    }

    /** Send C2S_META_LOCATION_REQ(10001) to server */
    async sendMetaLocationReq(payload: MetaLocationReq): Promise<void> {
        return this.send("C2S_META_LOCATION_REQ", payload);
    }

    /** Receive S2C_META_LOCATION_RES(10002) from server */
    onMetaLocationRes(handler: (payload: MetaLocationRes) => any): void {
        this.on("S2C_META_LOCATION_RES", handler);
    }

    /** Receive S2C_META_LOCATION_RES(10002) from server */
    onceMetaLocationRes(handler: (payload: MetaLocationRes) => any): void {
        this.once("S2C_META_LOCATION_RES", handler);
    }

    /** Call BLOCK_CHARACTER on server */
    async blockCharacter(payload: BlockCharacterReq): Promise<BlockCharacterRes> {
        return new Promise(res => {
            this.onceBlockCharacterRes(res);
            this.sendBlockCharacterReq(payload);
        });
    }

    /** Send C2S_BLOCK_CHARACTER_REQ(10010) to server */
    async sendBlockCharacterReq(payload: BlockCharacterReq): Promise<void> {
        return this.send("C2S_BLOCK_CHARACTER_REQ", payload);
    }

    /** Receive S2C_BLOCK_CHARACTER_RES(10011) from server */
    onBlockCharacterRes(handler: (payload: BlockCharacterRes) => any): void {
        this.on("S2C_BLOCK_CHARACTER_RES", handler);
    }

    /** Receive S2C_BLOCK_CHARACTER_RES(10011) from server */
    onceBlockCharacterRes(handler: (payload: BlockCharacterRes) => any): void {
        this.once("S2C_BLOCK_CHARACTER_RES", handler);
    }

    /** Call UNBLOCK_CHARACTER on server */
    async unblockCharacter(payload: UnblockCharacterReq): Promise<UnblockCharacterRes> {
        return new Promise(res => {
            this.onceUnblockCharacterRes(res);
            this.sendUnblockCharacterReq(payload);
        });
    }

    /** Send C2S_UNBLOCK_CHARACTER_REQ(10012) to server */
    async sendUnblockCharacterReq(payload: UnblockCharacterReq): Promise<void> {
        return this.send("C2S_UNBLOCK_CHARACTER_REQ", payload);
    }

    /** Receive S2C_UNBLOCK_CHARACTER_RES(10013) from server */
    onUnblockCharacterRes(handler: (payload: UnblockCharacterRes) => any): void {
        this.on("S2C_UNBLOCK_CHARACTER_RES", handler);
    }

    /** Receive S2C_UNBLOCK_CHARACTER_RES(10013) from server */
    onceUnblockCharacterRes(handler: (payload: UnblockCharacterRes) => any): void {
        this.once("S2C_UNBLOCK_CHARACTER_RES", handler);
    }

    /** Call BLOCK_CHARACTER_LIST on server */
    async blockCharacterList(payload: BlockCharacterListReq): Promise<BlockCharacterListRes> {
        return new Promise(res => {
            this.onceBlockCharacterListRes(res);
            this.sendBlockCharacterListReq(payload);
        });
    }

    /** Send C2S_BLOCK_CHARACTER_LIST_REQ(10014) to server */
    async sendBlockCharacterListReq(payload: BlockCharacterListReq): Promise<void> {
        return this.send("C2S_BLOCK_CHARACTER_LIST_REQ", payload);
    }

    /** Receive S2C_BLOCK_CHARACTER_LIST_RES(10015) from server */
    onBlockCharacterListRes(handler: (payload: BlockCharacterListRes) => any): void {
        this.on("S2C_BLOCK_CHARACTER_LIST_RES", handler);
    }

    /** Receive S2C_BLOCK_CHARACTER_LIST_RES(10015) from server */
    onceBlockCharacterListRes(handler: (payload: BlockCharacterListRes) => any): void {
        this.once("S2C_BLOCK_CHARACTER_LIST_RES", handler);
    }

    /** Call HACK_LOG on server */
    async hackLog(payload: HackLogReq): Promise<HackLogRes> {
        return new Promise(res => {
            this.onceHackLogRes(res);
            this.sendHackLogReq(payload);
        });
    }

    /** Send C2S_HACK_LOG_REQ(10030) to server */
    async sendHackLogReq(payload: HackLogReq): Promise<void> {
        return this.send("C2S_HACK_LOG_REQ", payload);
    }

    /** Receive S2C_HACK_LOG_RES(10031) from server */
    onHackLogRes(handler: (payload: HackLogRes) => any): void {
        this.on("S2C_HACK_LOG_RES", handler);
    }

    /** Receive S2C_HACK_LOG_RES(10031) from server */
    onceHackLogRes(handler: (payload: HackLogRes) => any): void {
        this.once("S2C_HACK_LOG_RES", handler);
    }

    /** Receive S2C_OPERATE_ANNOUNCE_NOT(10500) from server */
    onOperateAnnounceNot(handler: (payload: OperateAnnounceNot) => any): void {
        this.on("S2C_OPERATE_ANNOUNCE_NOT", handler);
    }

    /** Receive S2C_OPERATE_ANNOUNCE_NOT(10500) from server */
    onceOperateAnnounceNot(handler: (payload: OperateAnnounceNot) => any): void {
        this.once("S2C_OPERATE_ANNOUNCE_NOT", handler);
    }

    /** Receive S2C_SERVICE_POLICY_NOT(10050) from server */
    onServicePolicyNot(handler: (payload: ServicePolicyNot) => any): void {
        this.on("S2C_SERVICE_POLICY_NOT", handler);
    }

    /** Receive S2C_SERVICE_POLICY_NOT(10050) from server */
    onceServicePolicyNot(handler: (payload: ServicePolicyNot) => any): void {
        this.once("S2C_SERVICE_POLICY_NOT", handler);
    }

    /** Call RE_LOGIN on server */
    async reLogin(payload: ReLoginReq): Promise<ReLoginRes> {
        return new Promise(res => {
            this.onceReLoginRes(res);
            this.sendReLoginReq(payload);
        });
    }

    /** Send C2S_RE_LOGIN_REQ(10060) to server */
    async sendReLoginReq(payload: ReLoginReq): Promise<void> {
        return this.send("C2S_RE_LOGIN_REQ", payload);
    }

    /** Receive S2C_RE_LOGIN_RES(10061) from server */
    onReLoginRes(handler: (payload: ReLoginRes) => any): void {
        this.on("S2C_RE_LOGIN_RES", handler);
    }

    /** Receive S2C_RE_LOGIN_RES(10061) from server */
    onceReLoginRes(handler: (payload: ReLoginRes) => any): void {
        this.once("S2C_RE_LOGIN_RES", handler);
    }

    /** Receive S2C_CLOSED_GAME_NOT(10062) from server */
    onClosedGameNot(handler: (payload: ClosedGameNot) => any): void {
        this.on("S2C_CLOSED_GAME_NOT", handler);
    }

    /** Receive S2C_CLOSED_GAME_NOT(10062) from server */
    onceClosedGameNot(handler: (payload: ClosedGameNot) => any): void {
        this.once("S2C_CLOSED_GAME_NOT", handler);
    }

    /** Call USER_CHARACTER_INFO on server */
    async userCharacterInfo(payload: UserCharacterInfoReq): Promise<UserCharacterInfoRes> {
        return new Promise(res => {
            this.onceUserCharacterInfoRes(res);
            this.sendUserCharacterInfoReq(payload);
        });
    }

    /** Send C2S_USER_CHARACTER_INFO_REQ(10080) to server */
    async sendUserCharacterInfoReq(payload: UserCharacterInfoReq): Promise<void> {
        return this.send("C2S_USER_CHARACTER_INFO_REQ", payload);
    }

    /** Receive S2C_USER_CHARACTER_INFO_RES(10081) from server */
    onUserCharacterInfoRes(handler: (payload: UserCharacterInfoRes) => any): void {
        this.on("S2C_USER_CHARACTER_INFO_RES", handler);
    }

    /** Receive S2C_USER_CHARACTER_INFO_RES(10081) from server */
    onceUserCharacterInfoRes(handler: (payload: UserCharacterInfoRes) => any): void {
        this.once("S2C_USER_CHARACTER_INFO_RES", handler);
    }

    /** Call GM_ENTER_GAME_SPECTATOR on server */
    async gmEnterGameSpectator(payload: GmEnterGameSpectatorReq): Promise<GmEnterGameSpectatorRes> {
        return new Promise(res => {
            this.onceGmEnterGameSpectatorRes(res);
            this.sendGmEnterGameSpectatorReq(payload);
        });
    }

    /** Send C2S_GM_ENTER_GAME_SPECTATOR_REQ(1203) to server */
    async sendGmEnterGameSpectatorReq(payload: GmEnterGameSpectatorReq): Promise<void> {
        return this.send("C2S_GM_ENTER_GAME_SPECTATOR_REQ", payload);
    }

    /** Receive S2C_GM_ENTER_GAME_SPECTATOR_RES(1204) from server */
    onGmEnterGameSpectatorRes(handler: (payload: GmEnterGameSpectatorRes) => any): void {
        this.on("S2C_GM_ENTER_GAME_SPECTATOR_RES", handler);
    }

    /** Receive S2C_GM_ENTER_GAME_SPECTATOR_RES(1204) from server */
    onceGmEnterGameSpectatorRes(handler: (payload: GmEnterGameSpectatorRes) => any): void {
        this.once("S2C_GM_ENTER_GAME_SPECTATOR_RES", handler);
    }

    /** Receive S2C_ALL_MAP_MATCHMAKING_NOT(10100) from server */
    onAllMapMatchmakingNot(handler: (payload: AllMapMatchmakingNot) => any): void {
        this.on("S2C_ALL_MAP_MATCHMAKING_NOT", handler);
    }

    /** Receive S2C_ALL_MAP_MATCHMAKING_NOT(10100) from server */
    onceAllMapMatchmakingNot(handler: (payload: AllMapMatchmakingNot) => any): void {
        this.once("S2C_ALL_MAP_MATCHMAKING_NOT", handler);
    }

    /** Receive S2C_LATENCY_CHECK_NOT(10070) from server */
    onLatencyCheckNot(handler: (payload: LatencyCheckNot) => any): void {
        this.on("S2C_LATENCY_CHECK_NOT", handler);
    }

    /** Receive S2C_LATENCY_CHECK_NOT(10070) from server */
    onceLatencyCheckNot(handler: (payload: LatencyCheckNot) => any): void {
        this.once("S2C_LATENCY_CHECK_NOT", handler);
    }

    /** Receive S2C_LOBBY_COMPLETE_NOT(10020) from server */
    onLobbyCompleteNot(handler: (payload: LobbyCompleteNot) => any): void {
        this.on("S2C_LOBBY_COMPLETE_NOT", handler);
    }

    /** Receive S2C_LOBBY_COMPLETE_NOT(10020) from server */
    onceLobbyCompleteNot(handler: (payload: LobbyCompleteNot) => any): void {
        this.once("S2C_LOBBY_COMPLETE_NOT", handler);
    }

    /** Call CHAT_HACK_REPORT on server */
    async chatHackReport(payload: ChatHackReportReq): Promise<ChatHackReportRes> {
        return new Promise(res => {
            this.onceChatHackReportRes(res);
            this.sendChatHackReportReq(payload);
        });
    }

    /** Send C2S_CHAT_HACK_REPORT_REQ(10040) to server */
    async sendChatHackReportReq(payload: ChatHackReportReq): Promise<void> {
        return this.send("C2S_CHAT_HACK_REPORT_REQ", payload);
    }

    /** Receive S2C_CHAT_HACK_REPORT_RES(10041) from server */
    onChatHackReportRes(handler: (payload: ChatHackReportRes) => any): void {
        this.on("S2C_CHAT_HACK_REPORT_RES", handler);
    }

    /** Receive S2C_CHAT_HACK_REPORT_RES(10041) from server */
    onceChatHackReportRes(handler: (payload: ChatHackReportRes) => any): void {
        this.once("S2C_CHAT_HACK_REPORT_RES", handler);
    }

    /** Call JOIN_LAST_GAME on server */
    async joinLastGame(payload: JoinLastGameReq): Promise<JoinLastGameRes> {
        return new Promise(res => {
            this.onceJoinLastGameRes(res);
            this.sendJoinLastGameReq(payload);
        });
    }

    /** Send C2S_JOIN_LAST_GAME_REQ(10063) to server */
    async sendJoinLastGameReq(payload: JoinLastGameReq): Promise<void> {
        return this.send("C2S_JOIN_LAST_GAME_REQ", payload);
    }

    /** Receive S2C_JOIN_LAST_GAME_RES(10064) from server */
    onJoinLastGameRes(handler: (payload: JoinLastGameRes) => any): void {
        this.on("S2C_JOIN_LAST_GAME_RES", handler);
    }

    /** Receive S2C_JOIN_LAST_GAME_RES(10064) from server */
    onceJoinLastGameRes(handler: (payload: JoinLastGameRes) => any): void {
        this.once("S2C_JOIN_LAST_GAME_RES", handler);
    }

    /** Call WHISPER_CHAT on server */
    async whisperChat(payload: WhisperChatReq): Promise<WhisperChatRes> {
        return new Promise(res => {
            this.onceWhisperChatRes(res);
            this.sendWhisperChatReq(payload);
        });
    }

    /** Send C2S_WHISPER_CHAT_REQ(10120) to server */
    async sendWhisperChatReq(payload: WhisperChatReq): Promise<void> {
        return this.send("C2S_WHISPER_CHAT_REQ", payload);
    }

    /** Receive S2C_WHISPER_CHAT_RES(10121) from server */
    onWhisperChatRes(handler: (payload: WhisperChatRes) => any): void {
        this.on("S2C_WHISPER_CHAT_RES", handler);
    }

    /** Receive S2C_WHISPER_CHAT_RES(10121) from server */
    onceWhisperChatRes(handler: (payload: WhisperChatRes) => any): void {
        this.once("S2C_WHISPER_CHAT_RES", handler);
    }

    /** Receive S2C_WHISPER_CHAT_NOT(10122) from server */
    onWhisperChatNot(handler: (payload: WhisperChatNot) => any): void {
        this.on("S2C_WHISPER_CHAT_NOT", handler);
    }

    /** Receive S2C_WHISPER_CHAT_NOT(10122) from server */
    onceWhisperChatNot(handler: (payload: WhisperChatNot) => any): void {
        this.once("S2C_WHISPER_CHAT_NOT", handler);
    }

    /** Receive S2C_ACCOUNT_STATUS_NOT(10550) from server */
    onAccountStatusNot(handler: (payload: AccountStatusNot) => any): void {
        this.on("S2C_ACCOUNT_STATUS_NOT", handler);
    }

    /** Receive S2C_ACCOUNT_STATUS_NOT(10550) from server */
    onceAccountStatusNot(handler: (payload: AccountStatusNot) => any): void {
        this.once("S2C_ACCOUNT_STATUS_NOT", handler);
    }

    /** Call PLATFORM_LINK_CODE_GEN on server */
    async platformLinkCodeGen(payload: PlatformLinkCodeGenReq): Promise<PlatformLinkCodeGenRes> {
        return new Promise(res => {
            this.oncePlatformLinkCodeGenRes(res);
            this.sendPlatformLinkCodeGenReq(payload);
        });
    }

    /** Send C2S_PLATFORM_LINK_CODE_GEN_REQ(10601) to server */
    async sendPlatformLinkCodeGenReq(payload: PlatformLinkCodeGenReq): Promise<void> {
        return this.send("C2S_PLATFORM_LINK_CODE_GEN_REQ", payload);
    }

    /** Receive S2C_PLATFORM_LINK_CODE_GEN_RES(10602) from server */
    onPlatformLinkCodeGenRes(handler: (payload: PlatformLinkCodeGenRes) => any): void {
        this.on("S2C_PLATFORM_LINK_CODE_GEN_RES", handler);
    }

    /** Receive S2C_PLATFORM_LINK_CODE_GEN_RES(10602) from server */
    oncePlatformLinkCodeGenRes(handler: (payload: PlatformLinkCodeGenRes) => any): void {
        this.once("S2C_PLATFORM_LINK_CODE_GEN_RES", handler);
    }

    /** Call PLATFORM_LINK_CODE_ACTIVE on server */
    async platformLinkCodeActive(payload: PlatformLinkCodeActiveReq): Promise<PlatformLinkCodeActiveRes> {
        return new Promise(res => {
            this.oncePlatformLinkCodeActiveRes(res);
            this.sendPlatformLinkCodeActiveReq(payload);
        });
    }

    /** Send C2S_PLATFORM_LINK_CODE_ACTIVE_REQ(10603) to server */
    async sendPlatformLinkCodeActiveReq(payload: PlatformLinkCodeActiveReq): Promise<void> {
        return this.send("C2S_PLATFORM_LINK_CODE_ACTIVE_REQ", payload);
    }

    /** Receive S2C_PLATFORM_LINK_CODE_ACTIVE_RES(10604) from server */
    onPlatformLinkCodeActiveRes(handler: (payload: PlatformLinkCodeActiveRes) => any): void {
        this.on("S2C_PLATFORM_LINK_CODE_ACTIVE_RES", handler);
    }

    /** Receive S2C_PLATFORM_LINK_CODE_ACTIVE_RES(10604) from server */
    oncePlatformLinkCodeActiveRes(handler: (payload: PlatformLinkCodeActiveRes) => any): void {
        this.once("S2C_PLATFORM_LINK_CODE_ACTIVE_RES", handler);
    }

    /** Call PLATFORM_LINK_INFO_LIST on server */
    async platformLinkInfoList(payload: PlatformLinkInfoListReq): Promise<PlatformLinkInfoListRes> {
        return new Promise(res => {
            this.oncePlatformLinkInfoListRes(res);
            this.sendPlatformLinkInfoListReq(payload);
        });
    }

    /** Send C2S_PLATFORM_LINK_INFO_LIST_REQ(10605) to server */
    async sendPlatformLinkInfoListReq(payload: PlatformLinkInfoListReq): Promise<void> {
        return this.send("C2S_PLATFORM_LINK_INFO_LIST_REQ", payload);
    }

    /** Receive S2C_PLATFORM_LINK_INFO_LIST_RES(10606) from server */
    onPlatformLinkInfoListRes(handler: (payload: PlatformLinkInfoListRes) => any): void {
        this.on("S2C_PLATFORM_LINK_INFO_LIST_RES", handler);
    }

    /** Receive S2C_PLATFORM_LINK_INFO_LIST_RES(10606) from server */
    oncePlatformLinkInfoListRes(handler: (payload: PlatformLinkInfoListRes) => any): void {
        this.once("S2C_PLATFORM_LINK_INFO_LIST_RES", handler);
    }

    /** Call PLATFORM_LINK_FAQ_URL on server */
    async platformLinkFaqUrl(payload: PlatformLinkFaqUrlReq): Promise<PlatformLinkFaqUrlRes> {
        return new Promise(res => {
            this.oncePlatformLinkFaqUrlRes(res);
            this.sendPlatformLinkFaqUrlReq(payload);
        });
    }

    /** Send C2S_PLATFORM_LINK_FAQ_URL_REQ(10607) to server */
    async sendPlatformLinkFaqUrlReq(payload: PlatformLinkFaqUrlReq): Promise<void> {
        return this.send("C2S_PLATFORM_LINK_FAQ_URL_REQ", payload);
    }

    /** Receive S2C_PLATFORM_LINK_FAQ_URL_RES(10608) from server */
    onPlatformLinkFaqUrlRes(handler: (payload: PlatformLinkFaqUrlRes) => any): void {
        this.on("S2C_PLATFORM_LINK_FAQ_URL_RES", handler);
    }

    /** Receive S2C_PLATFORM_LINK_FAQ_URL_RES(10608) from server */
    oncePlatformLinkFaqUrlRes(handler: (payload: PlatformLinkFaqUrlRes) => any): void {
        this.once("S2C_PLATFORM_LINK_FAQ_URL_RES", handler);
    }

    /** Receive S2C_CLIENT_POPUP_MESSAGE_NOT(10630) from server */
    onClientPopupMessageNot(handler: (payload: ClientPopupMessageNot) => any): void {
        this.on("S2C_CLIENT_POPUP_MESSAGE_NOT", handler);
    }

    /** Receive S2C_CLIENT_POPUP_MESSAGE_NOT(10630) from server */
    onceClientPopupMessageNot(handler: (payload: ClientPopupMessageNot) => any): void {
        this.once("S2C_CLIENT_POPUP_MESSAGE_NOT", handler);
    }

    /** Call TWITCH_DROPS_CONNECT on server */
    async twitchDropsConnect(payload: TwitchDropsConnectReq): Promise<TwitchDropsConnectRes> {
        return new Promise(res => {
            this.onceTwitchDropsConnectRes(res);
            this.sendTwitchDropsConnectReq(payload);
        });
    }

    /** Send C2S_TWITCH_DROPS_CONNECT_REQ(10621) to server */
    async sendTwitchDropsConnectReq(payload: TwitchDropsConnectReq): Promise<void> {
        return this.send("C2S_TWITCH_DROPS_CONNECT_REQ", payload);
    }

    /** Receive S2C_TWITCH_DROPS_CONNECT_RES(10622) from server */
    onTwitchDropsConnectRes(handler: (payload: TwitchDropsConnectRes) => any): void {
        this.on("S2C_TWITCH_DROPS_CONNECT_RES", handler);
    }

    /** Receive S2C_TWITCH_DROPS_CONNECT_RES(10622) from server */
    onceTwitchDropsConnectRes(handler: (payload: TwitchDropsConnectRes) => any): void {
        this.once("S2C_TWITCH_DROPS_CONNECT_RES", handler);
    }

    /** Receive S2C_TWITCH_DROPS_CONNECT_NOT(10623) from server */
    onTwitchDropsConnectNot(handler: (payload: TwitchDropsConnectNot) => any): void {
        this.on("S2C_TWITCH_DROPS_CONNECT_NOT", handler);
    }

    /** Receive S2C_TWITCH_DROPS_CONNECT_NOT(10623) from server */
    onceTwitchDropsConnectNot(handler: (payload: TwitchDropsConnectNot) => any): void {
        this.once("S2C_TWITCH_DROPS_CONNECT_NOT", handler);
    }

    /** Receive S2C_TWITCH_DROPS_LINKED_NOT(10624) from server */
    onTwitchDropsLinkedNot(handler: (payload: TwitchDropsLinkedNot) => any): void {
        this.on("S2C_TWITCH_DROPS_LINKED_NOT", handler);
    }

    /** Receive S2C_TWITCH_DROPS_LINKED_NOT(10624) from server */
    onceTwitchDropsLinkedNot(handler: (payload: TwitchDropsLinkedNot) => any): void {
        this.once("S2C_TWITCH_DROPS_LINKED_NOT", handler);
    }

    /** Receive S2C_TERMINATE_NOT(10660) from server */
    onTerminateNot(handler: (payload: TerminateNot) => any): void {
        this.on("S2C_TERMINATE_NOT", handler);
    }

    /** Receive S2C_TERMINATE_NOT(10660) from server */
    onceTerminateNot(handler: (payload: TerminateNot) => any): void {
        this.once("S2C_TERMINATE_NOT", handler);
    }

    /** Receive S2C_ARENA_SCHEDULE_NOT(10670) from server */
    onArenaScheduleNot(handler: (payload: ArenaScheduleNot) => any): void {
        this.on("S2C_ARENA_SCHEDULE_NOT", handler);
    }

    /** Receive S2C_ARENA_SCHEDULE_NOT(10670) from server */
    onceArenaScheduleNot(handler: (payload: ArenaScheduleNot) => any): void {
        this.once("S2C_ARENA_SCHEDULE_NOT", handler);
    }

    /** Call DLC_INSTALLED_CHECK on server */
    async dlcInstalledCheck(payload: DlcInstalledCheckReq): Promise<DlcInstalledCheckRes> {
        return new Promise(res => {
            this.onceDlcInstalledCheckRes(res);
            this.sendDlcInstalledCheckReq(payload);
        });
    }

    /** Send C2S_DLC_INSTALLED_CHECK_REQ(10680) to server */
    async sendDlcInstalledCheckReq(payload: DlcInstalledCheckReq): Promise<void> {
        return this.send("C2S_DLC_INSTALLED_CHECK_REQ", payload);
    }

    /** Receive S2C_DLC_INSTALLED_CHECK_RES(10681) from server */
    onDlcInstalledCheckRes(handler: (payload: DlcInstalledCheckRes) => any): void {
        this.on("S2C_DLC_INSTALLED_CHECK_RES", handler);
    }

    /** Receive S2C_DLC_INSTALLED_CHECK_RES(10681) from server */
    onceDlcInstalledCheckRes(handler: (payload: DlcInstalledCheckRes) => any): void {
        this.once("S2C_DLC_INSTALLED_CHECK_RES", handler);
    }
}

export type MetaLocationReq = Unmessage<SC2S_META_LOCATION_REQ>;
export type MetaLocationRes = Unmessage<SS2C_META_LOCATION_RES>;
export type BlockCharacterReq = Unmessage<SC2S_BLOCK_CHARACTER_REQ>;
export type BlockCharacterRes = Unmessage<SS2C_BLOCK_CHARACTER_RES>;
export type UnblockCharacterReq = Unmessage<SC2S_UNBLOCK_CHARACTER_REQ>;
export type UnblockCharacterRes = Unmessage<SS2C_UNBLOCK_CHARACTER_RES>;
export type BlockCharacterListReq = Unmessage<SC2S_BLOCK_CHARACTER_LIST_REQ>;
export type BlockCharacterListRes = Unmessage<SS2C_BLOCK_CHARACTER_LIST_RES>;
export type HackLogReq = Unmessage<SC2S_HACK_LOG_REQ>;
export type HackLogRes = Unmessage<SS2C_HACK_LOG_RES>;
export type OperateAnnounceNot = Unmessage<SS2C_OPERATE_ANNOUNCE_NOT>;
export type ServicePolicyNot = Unmessage<SS2C_SERVICE_POLICY_NOT>;
export type ReLoginReq = Unmessage<SC2S_RE_LOGIN_REQ>;
export type ReLoginRes = Unmessage<SS2C_RE_LOGIN_RES>;
export type ClosedGameNot = Unmessage<SS2C_CLOSED_GAME_NOT>;
export type UserCharacterInfoReq = Unmessage<SC2S_USER_CHARACTER_INFO_REQ>;
export type UserCharacterInfoRes = Unmessage<SS2C_USER_CHARACTER_INFO_RES>;
export type GmEnterGameSpectatorReq = Unmessage<SC2S_GM_ENTER_GAME_SPECTATOR_REQ>;
export type GmEnterGameSpectatorRes = Unmessage<SS2C_GM_ENTER_GAME_SPECTATOR_RES>;
export type AllMapMatchmakingNot = Unmessage<SS2C_ALL_MAP_MATCHMAKING_NOT>;
export type LatencyCheckNot = Unmessage<SS2C_LATENCY_CHECK_NOT>;
export type LobbyCompleteNot = Unmessage<SS2C_LOBBY_COMPLETE_NOT>;
export type ChatHackReportReq = Unmessage<SC2S_CHAT_HACK_REPORT_REQ>;
export type ChatHackReportRes = Unmessage<SS2C_CHAT_HACK_REPORT_RES>;
export type JoinLastGameReq = Unmessage<SC2S_JOIN_LAST_GAME_REQ>;
export type JoinLastGameRes = Unmessage<SS2C_JOIN_LAST_GAME_RES>;
export type WhisperChatReq = Unmessage<SC2S_WHISPER_CHAT_REQ>;
export type WhisperChatRes = Unmessage<SS2C_WHISPER_CHAT_RES>;
export type WhisperChatNot = Unmessage<SS2C_WHISPER_CHAT_NOT>;
export type AccountStatusNot = Unmessage<SS2C_ACCOUNT_STATUS_NOT>;
export type PlatformLinkCodeGenReq = Unmessage<SC2S_PLATFORM_LINK_CODE_GEN_REQ>;
export type PlatformLinkCodeGenRes = Unmessage<SS2C_PLATFORM_LINK_CODE_GEN_RES>;
export type PlatformLinkCodeActiveReq = Unmessage<SC2S_PLATFORM_LINK_CODE_ACTIVE_REQ>;
export type PlatformLinkCodeActiveRes = Unmessage<SS2C_PLATFORM_LINK_CODE_ACTIVE_RES>;
export type PlatformLinkInfoListReq = Unmessage<SC2S_PLATFORM_LINK_INFO_LIST_REQ>;
export type PlatformLinkInfoListRes = Unmessage<SS2C_PLATFORM_LINK_INFO_LIST_RES>;
export type PlatformLinkFaqUrlReq = Unmessage<SC2S_PLATFORM_LINK_FAQ_URL_REQ>;
export type PlatformLinkFaqUrlRes = Unmessage<SS2C_PLATFORM_LINK_FAQ_URL_RES>;
export type ClientPopupMessageNot = Unmessage<SS2C_CLIENT_POPUP_MESSAGE_NOT>;
export type TwitchDropsConnectReq = Unmessage<SC2S_TWITCH_DROPS_CONNECT_REQ>;
export type TwitchDropsConnectRes = Unmessage<SS2C_TWITCH_DROPS_CONNECT_RES>;
export type TwitchDropsConnectNot = Unmessage<SS2C_TWITCH_DROPS_CONNECT_NOT>;
export type TwitchDropsLinkedNot = Unmessage<SS2C_TWITCH_DROPS_LINKED_NOT>;
export type TerminateNot = Unmessage<SS2C_TERMINATE_NOT>;
export type ArenaScheduleNot = Unmessage<SS2C_ARENA_SCHEDULE_NOT>;
export type DlcInstalledCheckReq = Unmessage<SC2S_DLC_INSTALLED_CHECK_REQ>;
export type DlcInstalledCheckRes = Unmessage<SS2C_DLC_INSTALLED_CHECK_RES>;
