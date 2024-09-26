import { SC2S_ACCOUNT_LOGIN_REQSchema } from "./pb/Account_pb";
import type { AccountLoginReq } from "./modules/account";
import { SS2C_ACCOUNT_LOGIN_RESSchema } from "./pb/Account_pb";
import type { AccountLoginRes } from "./modules/account";
import { SC2S_ACCOUNT_CHARACTER_CREATE_REQSchema } from "./pb/Account_pb";
import type { AccountCharacterCreateReq } from "./modules/account";
import { SS2C_ACCOUNT_CHARACTER_CREATE_RESSchema } from "./pb/Account_pb";
import type { AccountCharacterCreateRes } from "./modules/account";
import { SC2S_ACCOUNT_CHARACTER_LIST_REQSchema } from "./pb/Account_pb";
import type { AccountCharacterListReq } from "./modules/account";
import { SS2C_ACCOUNT_CHARACTER_LIST_RESSchema } from "./pb/Account_pb";
import type { AccountCharacterListRes } from "./modules/account";
import { SC2S_ACCOUNT_CHARACTER_DELETE_REQSchema } from "./pb/Account_pb";
import type { AccountCharacterDeleteReq } from "./modules/account";
import { SS2C_ACCOUNT_CHARACTER_DELETE_RESSchema } from "./pb/Account_pb";
import type { AccountCharacterDeleteRes } from "./modules/account";
import { SC2S_LOBBY_ENTER_REQSchema } from "./pb/Account_pb";
import type { LobbyEnterReq } from "./modules/account";
import { SS2C_LOBBY_ENTER_RESSchema } from "./pb/Account_pb";
import type { LobbyEnterRes } from "./modules/account";
import { SC2S_ACCOUNT_AGREE_ANSWER_REQSchema } from "./pb/Account_pb";
import type { AccountAgreeAnswerReq } from "./modules/account";
import { SS2C_ACCOUNT_AGREE_ANSWER_RESSchema } from "./pb/Account_pb";
import type { AccountAgreeAnswerRes } from "./modules/account";
import { SS2C_ACCOUNT_CHARACTER_CLASS_LIST_NOTSchema } from "./pb/Account_pb";
import type { AccountCharacterClassListNot } from "./modules/account";
import { SC2S_USER_HW_INFO_REQSchema } from "./pb/Account_pb";
import type { UserHwInfoReq } from "./modules/account";
import { SS2C_USER_HW_INFO_RESSchema } from "./pb/Account_pb";
import type { UserHwInfoRes } from "./modules/account";
import { SC2S_TRAINING_INFO_REQSchema } from "./pb/CharacterClass_pb";
import type { TrainingInfoReq } from "./modules/characterClass";
import { SS2C_TRAINING_INFO_RESSchema } from "./pb/CharacterClass_pb";
import type { TrainingInfoRes } from "./modules/characterClass";
import { SC2S_TRAINING_REDEEM_LEARNING_TOKEN_REQSchema } from "./pb/CharacterClass_pb";
import type { TrainingRedeemLearningTokenReq } from "./modules/characterClass";
import { SS2C_TRAINING_REDEEM_LEARNING_TOKEN_RESSchema } from "./pb/CharacterClass_pb";
import type { TrainingRedeemLearningTokenRes } from "./modules/characterClass";
import { SC2S_TRAINING_RECEIVE_CLASS_ABILITY_REQSchema } from "./pb/CharacterClass_pb";
import type { TrainingReceiveClassAbilityReq } from "./modules/characterClass";
import { SS2C_TRAINING_RECEIVE_CLASS_ABILITY_RESSchema } from "./pb/CharacterClass_pb";
import type { TrainingReceiveClassAbilityRes } from "./modules/characterClass";
import { SC2S_TRAINING_REDEEM_REWARD_TOKEN_REQSchema } from "./pb/CharacterClass_pb";
import type { TrainingRedeemRewardTokenReq } from "./modules/characterClass";
import { SS2C_TRAINING_REDEEM_REWARD_TOKEN_RESSchema } from "./pb/CharacterClass_pb";
import type { TrainingRedeemRewardTokenRes } from "./modules/characterClass";
import { SC2S_TRAINING_RECEIVE_REWARD_REQSchema } from "./pb/CharacterClass_pb";
import type { TrainingReceiveRewardReq } from "./modules/characterClass";
import { SS2C_TRAINING_RECEIVE_REWARD_RESSchema } from "./pb/CharacterClass_pb";
import type { TrainingReceiveRewardRes } from "./modules/characterClass";
import { SC2S_CLASS_LEVEL_INFO_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassLevelInfoReq } from "./modules/characterClass";
import { SS2C_CLASS_LEVEL_INFO_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassLevelInfoRes } from "./modules/characterClass";
import { SC2S_CLASS_EQUIP_INFO_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassEquipInfoReq } from "./modules/characterClass";
import { SS2C_CLASS_EQUIP_INFO_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassEquipInfoRes } from "./modules/characterClass";
import { SC2S_CLASS_PERK_LIST_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassPerkListReq } from "./modules/characterClass";
import { SS2C_CLASS_PERK_LIST_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassPerkListRes } from "./modules/characterClass";
import { SC2S_CLASS_SKILL_LIST_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassSkillListReq } from "./modules/characterClass";
import { SS2C_CLASS_SKILL_LIST_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassSkillListRes } from "./modules/characterClass";
import { SC2S_CLASS_SPELL_LIST_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassSpellListReq } from "./modules/characterClass";
import { SS2C_CLASS_SPELL_LIST_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassSpellListRes } from "./modules/characterClass";
import { SC2S_CLASS_MUSIC_LIST_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassMusicListReq } from "./modules/characterClass";
import { SS2C_CLASS_MUSIC_LIST_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassMusicListRes } from "./modules/characterClass";
import { SC2S_CLASS_SHAPESHIFT_LIST_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassShapeshiftListReq } from "./modules/characterClass";
import { SS2C_CLASS_SHAPESHIFT_LIST_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassShapeshiftListRes } from "./modules/characterClass";
import { SC2S_CLASS_SPELL_SLOT_MOVE_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassSpellSlotMoveReq } from "./modules/characterClass";
import { SS2C_CLASS_SPELL_SLOT_MOVE_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassSpellSlotMoveRes } from "./modules/characterClass";
import { SC2S_CLASS_SPELL_SEQUENCE_CHANGE_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassSpellSequenceChangeReq } from "./modules/characterClass";
import { SS2C_CLASS_SPELL_SEQUENCE_CHANGE_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassSpellSequenceChangeRes } from "./modules/characterClass";
import { SC2S_CLASS_ITEM_MOVE_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassItemMoveReq } from "./modules/characterClass";
import { SS2C_CLASS_ITEM_MOVE_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassItemMoveRes } from "./modules/characterClass";
import { SC2S_CLASS_MUSIC_SLOT_MOVE_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassMusicSlotMoveReq } from "./modules/characterClass";
import { SS2C_CLASS_MUSIC_SLOT_MOVE_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassMusicSlotMoveRes } from "./modules/characterClass";
import { SC2S_CLASS_MUSIC_SEQUENCE_CHANGE_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassMusicSequenceChangeReq } from "./modules/characterClass";
import { SS2C_CLASS_MUSIC_SEQUENCE_CHANGE_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassMusicSequenceChangeRes } from "./modules/characterClass";
import { SC2S_CLASS_SHAPESHIFT_SLOT_MOVE_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassShapeshiftSlotMoveReq } from "./modules/characterClass";
import { SS2C_CLASS_SHAPESHIFT_SLOT_MOVE_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassShapeshiftSlotMoveRes } from "./modules/characterClass";
import { SC2S_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_REQSchema } from "./pb/CharacterClass_pb";
import type { ClassShapeshiftSequenceChangeReq } from "./modules/characterClass";
import { SS2C_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_RESSchema } from "./pb/CharacterClass_pb";
import type { ClassShapeshiftSequenceChangeRes } from "./modules/characterClass";
import { SC2S_META_LOCATION_REQSchema } from "./pb/Common_pb";
import type { MetaLocationReq } from "./modules/common";
import { SS2C_META_LOCATION_RESSchema } from "./pb/Common_pb";
import type { MetaLocationRes } from "./modules/common";
import { SC2S_BLOCK_CHARACTER_REQSchema } from "./pb/Common_pb";
import type { BlockCharacterReq } from "./modules/common";
import { SS2C_BLOCK_CHARACTER_RESSchema } from "./pb/Common_pb";
import type { BlockCharacterRes } from "./modules/common";
import { SC2S_UNBLOCK_CHARACTER_REQSchema } from "./pb/Common_pb";
import type { UnblockCharacterReq } from "./modules/common";
import { SS2C_UNBLOCK_CHARACTER_RESSchema } from "./pb/Common_pb";
import type { UnblockCharacterRes } from "./modules/common";
import { SC2S_BLOCK_CHARACTER_LIST_REQSchema } from "./pb/Common_pb";
import type { BlockCharacterListReq } from "./modules/common";
import { SS2C_BLOCK_CHARACTER_LIST_RESSchema } from "./pb/Common_pb";
import type { BlockCharacterListRes } from "./modules/common";
import { SC2S_HACK_LOG_REQSchema } from "./pb/Common_pb";
import type { HackLogReq } from "./modules/common";
import { SS2C_HACK_LOG_RESSchema } from "./pb/Common_pb";
import type { HackLogRes } from "./modules/common";
import { SS2C_OPERATE_ANNOUNCE_NOTSchema } from "./pb/Common_pb";
import type { OperateAnnounceNot } from "./modules/common";
import { SS2C_SERVICE_POLICY_NOTSchema } from "./pb/Common_pb";
import type { ServicePolicyNot } from "./modules/common";
import { SC2S_RE_LOGIN_REQSchema } from "./pb/Common_pb";
import type { ReLoginReq } from "./modules/common";
import { SS2C_RE_LOGIN_RESSchema } from "./pb/Common_pb";
import type { ReLoginRes } from "./modules/common";
import { SS2C_CLOSED_GAME_NOTSchema } from "./pb/Common_pb";
import type { ClosedGameNot } from "./modules/common";
import { SC2S_USER_CHARACTER_INFO_REQSchema } from "./pb/Common_pb";
import type { UserCharacterInfoReq } from "./modules/common";
import { SS2C_USER_CHARACTER_INFO_RESSchema } from "./pb/Common_pb";
import type { UserCharacterInfoRes } from "./modules/common";
import { SC2S_GM_ENTER_GAME_SPECTATOR_REQSchema } from "./pb/Common_pb";
import type { GmEnterGameSpectatorReq } from "./modules/common";
import { SS2C_GM_ENTER_GAME_SPECTATOR_RESSchema } from "./pb/Common_pb";
import type { GmEnterGameSpectatorRes } from "./modules/common";
import { SS2C_ALL_MAP_MATCHMAKING_NOTSchema } from "./pb/Common_pb";
import type { AllMapMatchmakingNot } from "./modules/common";
import { SS2C_LATENCY_CHECK_NOTSchema } from "./pb/Common_pb";
import type { LatencyCheckNot } from "./modules/common";
import { SS2C_LOBBY_COMPLETE_NOTSchema } from "./pb/Common_pb";
import type { LobbyCompleteNot } from "./modules/common";
import { SC2S_CHAT_HACK_REPORT_REQSchema } from "./pb/Common_pb";
import type { ChatHackReportReq } from "./modules/common";
import { SS2C_CHAT_HACK_REPORT_RESSchema } from "./pb/Common_pb";
import type { ChatHackReportRes } from "./modules/common";
import { SC2S_JOIN_LAST_GAME_REQSchema } from "./pb/Common_pb";
import type { JoinLastGameReq } from "./modules/common";
import { SS2C_JOIN_LAST_GAME_RESSchema } from "./pb/Common_pb";
import type { JoinLastGameRes } from "./modules/common";
import { SC2S_WHISPER_CHAT_REQSchema } from "./pb/Common_pb";
import type { WhisperChatReq } from "./modules/common";
import { SS2C_WHISPER_CHAT_RESSchema } from "./pb/Common_pb";
import type { WhisperChatRes } from "./modules/common";
import { SS2C_WHISPER_CHAT_NOTSchema } from "./pb/Common_pb";
import type { WhisperChatNot } from "./modules/common";
import { SS2C_ACCOUNT_STATUS_NOTSchema } from "./pb/Common_pb";
import type { AccountStatusNot } from "./modules/common";
import { SC2S_PLATFORM_LINK_CODE_GEN_REQSchema } from "./pb/Common_pb";
import type { PlatformLinkCodeGenReq } from "./modules/common";
import { SS2C_PLATFORM_LINK_CODE_GEN_RESSchema } from "./pb/Common_pb";
import type { PlatformLinkCodeGenRes } from "./modules/common";
import { SC2S_PLATFORM_LINK_CODE_ACTIVE_REQSchema } from "./pb/Common_pb";
import type { PlatformLinkCodeActiveReq } from "./modules/common";
import { SS2C_PLATFORM_LINK_CODE_ACTIVE_RESSchema } from "./pb/Common_pb";
import type { PlatformLinkCodeActiveRes } from "./modules/common";
import { SC2S_PLATFORM_LINK_INFO_LIST_REQSchema } from "./pb/Common_pb";
import type { PlatformLinkInfoListReq } from "./modules/common";
import { SS2C_PLATFORM_LINK_INFO_LIST_RESSchema } from "./pb/Common_pb";
import type { PlatformLinkInfoListRes } from "./modules/common";
import { SC2S_PLATFORM_LINK_FAQ_URL_REQSchema } from "./pb/Common_pb";
import type { PlatformLinkFaqUrlReq } from "./modules/common";
import { SS2C_PLATFORM_LINK_FAQ_URL_RESSchema } from "./pb/Common_pb";
import type { PlatformLinkFaqUrlRes } from "./modules/common";
import { SS2C_CLIENT_POPUP_MESSAGE_NOTSchema } from "./pb/Common_pb";
import type { ClientPopupMessageNot } from "./modules/common";
import { SC2S_TWITCH_DROPS_CONNECT_REQSchema } from "./pb/Common_pb";
import type { TwitchDropsConnectReq } from "./modules/common";
import { SS2C_TWITCH_DROPS_CONNECT_RESSchema } from "./pb/Common_pb";
import type { TwitchDropsConnectRes } from "./modules/common";
import { SS2C_TWITCH_DROPS_CONNECT_NOTSchema } from "./pb/Common_pb";
import type { TwitchDropsConnectNot } from "./modules/common";
import { SS2C_TWITCH_DROPS_LINKED_NOTSchema } from "./pb/Common_pb";
import type { TwitchDropsLinkedNot } from "./modules/common";
import { SS2C_TERMINATE_NOTSchema } from "./pb/Common_pb";
import type { TerminateNot } from "./modules/common";
import { SS2C_ARENA_SCHEDULE_NOTSchema } from "./pb/Common_pb";
import type { ArenaScheduleNot } from "./modules/common";
import { SC2S_DLC_INSTALLED_CHECK_REQSchema } from "./pb/Common_pb";
import type { DlcInstalledCheckReq } from "./modules/common";
import { SS2C_DLC_INSTALLED_CHECK_RESSchema } from "./pb/Common_pb";
import type { DlcInstalledCheckRes } from "./modules/common";
import { SC2S_CUSTOMIZE_INFO_REQSchema } from "./pb/Customize_pb";
import type { CustomizeInfoReq } from "./modules/customize";
import { SS2C_CUSTOMIZE_INFO_RESSchema } from "./pb/Customize_pb";
import type { CustomizeInfoRes } from "./modules/customize";
import { SC2S_CUSTOMIZE_MOUNT_REQSchema } from "./pb/Customize_pb";
import type { CustomizeMountReq } from "./modules/customize";
import { SS2C_CUSTOMIZE_MOUNT_RESSchema } from "./pb/Customize_pb";
import type { CustomizeMountRes } from "./modules/customize";
import { SC2S_CUSTOMIZE_UNMOUNT_REQSchema } from "./pb/Customize_pb";
import type { CustomizeUnmountReq } from "./modules/customize";
import { SS2C_CUSTOMIZE_UNMOUNT_RESSchema } from "./pb/Customize_pb";
import type { CustomizeUnmountRes } from "./modules/customize";
import { SC2S_CUSTOMIZE_NEW_ITEM_CHECK_REQSchema } from "./pb/Customize_pb";
import type { CustomizeNewItemCheckReq } from "./modules/customize";
import { SS2C_CUSTOMIZE_NEW_ITEM_CHECK_RESSchema } from "./pb/Customize_pb";
import type { CustomizeNewItemCheckRes } from "./modules/customize";
import { SS2C_CUSTOMIZE_NEW_ITEM_ALERT_NOTSchema } from "./pb/Customize_pb";
import type { CustomizeNewItemAlertNot } from "./modules/customize";
import { SC2S_FRIEND_CHECK_ACCOUNTNICKNAME_REQSchema } from "./pb/Friend_pb";
import type { FriendCheckAccountnicknameReq } from "./modules/friend";
import { SS2C_FRIEND_CHECK_ACCOUNTNICKNAME_RESSchema } from "./pb/Friend_pb";
import type { FriendCheckAccountnicknameRes } from "./modules/friend";
import { SC2S_FRIEND_CREATE_ACCOUNTNICKNAME_REQSchema } from "./pb/Friend_pb";
import type { FriendCreateAccountnicknameReq } from "./modules/friend";
import { SS2C_FRIEND_CREATE_ACCOUNTNICKNAME_RESSchema } from "./pb/Friend_pb";
import type { FriendCreateAccountnicknameRes } from "./modules/friend";
import { SC2S_FRIEND_SET_STATUS_REQSchema } from "./pb/Friend_pb";
import type { FriendSetStatusReq } from "./modules/friend";
import { SS2C_FRIEND_SET_STATUS_RESSchema } from "./pb/Friend_pb";
import type { FriendSetStatusRes } from "./modules/friend";
import { SC2S_FRIEND_SET_PRIVACY_REQSchema } from "./pb/Friend_pb";
import type { FriendSetPrivacyReq } from "./modules/friend";
import { SS2C_FRIEND_SET_PRIVACY_RESSchema } from "./pb/Friend_pb";
import type { FriendSetPrivacyRes } from "./modules/friend";
import { SC2S_FRIEND_INVITE_REQSchema } from "./pb/Friend_pb";
import type { FriendInviteReq } from "./modules/friend";
import { SS2C_FRIEND_INVITE_RESSchema } from "./pb/Friend_pb";
import type { FriendInviteRes } from "./modules/friend";
import { SC2S_FRIEND_INVITE_BY_ACCOUNTNICKNAME_REQSchema } from "./pb/Friend_pb";
import type { FriendInviteByAccountnicknameReq } from "./modules/friend";
import { SS2C_FRIEND_INVITE_BY_ACCOUNTNICKNAME_RESSchema } from "./pb/Friend_pb";
import type { FriendInviteByAccountnicknameRes } from "./modules/friend";
import { SC2S_FRIEND_INVITE_ACCEPT_REQSchema } from "./pb/Friend_pb";
import type { FriendInviteAcceptReq } from "./modules/friend";
import { SS2C_FRIEND_INVITE_ACCEPT_RESSchema } from "./pb/Friend_pb";
import type { FriendInviteAcceptRes } from "./modules/friend";
import { SC2S_FRIEND_INVITE_DECLINE_REQSchema } from "./pb/Friend_pb";
import type { FriendInviteDeclineReq } from "./modules/friend";
import { SS2C_FRIEND_INVITE_DECLINE_RESSchema } from "./pb/Friend_pb";
import type { FriendInviteDeclineRes } from "./modules/friend";
import { SC2S_FRIEND_INVITE_CANCEL_REQSchema } from "./pb/Friend_pb";
import type { FriendInviteCancelReq } from "./modules/friend";
import { SS2C_FRIEND_INVITE_CANCEL_RESSchema } from "./pb/Friend_pb";
import type { FriendInviteCancelRes } from "./modules/friend";
import { SC2S_FRIEND_DEL_FRIEND_REQSchema } from "./pb/Friend_pb";
import type { FriendDelFriendReq } from "./modules/friend";
import { SS2C_FRIEND_DEL_FRIEND_RESSchema } from "./pb/Friend_pb";
import type { FriendDelFriendRes } from "./modules/friend";
import { SS2C_FRIEND_INFO_NOTSchema } from "./pb/Friend_pb";
import type { FriendInfoNot } from "./modules/friend";
import { SS2C_FRIEND_SET_FRIEND_INFOS_NOTSchema } from "./pb/Friend_pb";
import type { FriendSetFriendInfosNot } from "./modules/friend";
import { SS2C_FRIEND_DEL_FRIEND_INFOS_NOTSchema } from "./pb/Friend_pb";
import type { FriendDelFriendInfosNot } from "./modules/friend";
import { SS2C_FRIEND_SET_ACCEPT_INFOS_NOTSchema } from "./pb/Friend_pb";
import type { FriendSetAcceptInfosNot } from "./modules/friend";
import { SS2C_FRIEND_DEL_ACCEPT_INFOS_NOTSchema } from "./pb/Friend_pb";
import type { FriendDelAcceptInfosNot } from "./modules/friend";
import { SS2C_FRIEND_SET_INVITE_INFOS_NOTSchema } from "./pb/Friend_pb";
import type { FriendSetInviteInfosNot } from "./modules/friend";
import { SS2C_FRIEND_DEL_INVITE_INFOS_NOTSchema } from "./pb/Friend_pb";
import type { FriendDelInviteInfosNot } from "./modules/friend";
import { SS2C_FRIEND_SET_STATUS_NOTSchema } from "./pb/Friend_pb";
import type { FriendSetStatusNot } from "./modules/friend";
import { SC2S_FRIEND_LIST_REQSchema } from "./pb/Friend_pb";
import type { FriendListReq } from "./modules/friend";
import { SS2C_FRIEND_LIST_RESSchema } from "./pb/Friend_pb";
import type { FriendListRes } from "./modules/friend";
import { SC2S_FRIEND_LIST_ALL_REQSchema } from "./pb/Friend_pb";
import type { FriendListAllReq } from "./modules/friend";
import { SS2C_FRIEND_LIST_ALL_RESSchema } from "./pb/Friend_pb";
import type { FriendListAllRes } from "./modules/friend";
import { SC2S_FRIEND_FIND_REQSchema } from "./pb/Friend_pb";
import type { FriendFindReq } from "./modules/friend";
import { SS2C_FRIEND_FIND_RESSchema } from "./pb/Friend_pb";
import type { FriendFindRes } from "./modules/friend";
import { SC2S_GATHERING_HALL_CHANNEL_LIST_REQSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallChannelListReq } from "./modules/gatheringHall";
import { SS2C_GATHERING_HALL_CHANNEL_LIST_RESSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallChannelListRes } from "./modules/gatheringHall";
import { SC2S_GATHERING_HALL_CHANNEL_SELECT_REQSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallChannelSelectReq } from "./modules/gatheringHall";
import { SS2C_GATHERING_HALL_CHANNEL_SELECT_RESSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallChannelSelectRes } from "./modules/gatheringHall";
import { SC2S_GATHERING_HALL_CHANNEL_EXIT_REQSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallChannelExitReq } from "./modules/gatheringHall";
import { SS2C_GATHERING_HALL_CHANNEL_EXIT_RESSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallChannelExitRes } from "./modules/gatheringHall";
import { SC2S_GATHERING_HALL_CHANNEL_USER_LIST_REQSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallChannelUserListReq } from "./modules/gatheringHall";
import { SS2C_GATHERING_HALL_CHANNEL_USER_LIST_RESSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallChannelUserListRes } from "./modules/gatheringHall";
import { SS2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOTSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallChannelUserUpdateNot } from "./modules/gatheringHall";
import { SC2S_GATHERING_HALL_CHANNEL_CHAT_REQSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallChannelChatReq } from "./modules/gatheringHall";
import { SS2C_GATHERING_HALL_CHANNEL_CHAT_RESSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallChannelChatRes } from "./modules/gatheringHall";
import { SS2C_GATHERING_HALL_CHANNEL_CHAT_NOTSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallChannelChatNot } from "./modules/gatheringHall";
import { SC2S_GATHERING_HALL_TARGET_EQUIPPED_ITEM_REQSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallTargetEquippedItemReq } from "./modules/gatheringHall";
import { SS2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RESSchema } from "./pb/GatheringHall_pb";
import type { GatheringHallTargetEquippedItemRes } from "./modules/gatheringHall";
import { SC2S_GM_PARTY_ALL_RANDOM_REQSchema } from "./pb/Gm_pb";
import type { GmPartyAllRandomReq } from "./modules/gm";
import { SS2C_GM_PARTY_ALL_RANDOM_RESSchema } from "./pb/Gm_pb";
import type { GmPartyAllRandomRes } from "./modules/gm";
import { SS2C_ENTER_GAME_SERVER_NOTSchema } from "./pb/InGame_pb";
import type { EnterGameServerNot } from "./modules/inGame";
import { SC2S_AUTO_MATCH_REG_REQSchema } from "./pb/InGame_pb";
import type { AutoMatchRegReq } from "./modules/inGame";
import { SS2C_AUTO_MATCH_REG_RESSchema } from "./pb/InGame_pb";
import type { AutoMatchRegRes } from "./modules/inGame";
import { SC2S_GAME_ENTER_COMPLETE_NOTSchema } from "./pb/InGame_pb";
import type { GameEnterCompleteNot } from "./modules/inGame";
import { SS2C_AUTO_MATCH_REG_TEAM_NOTSchema } from "./pb/InGame_pb";
import type { AutoMatchRegTeamNot } from "./modules/inGame";
import { SC2S_RECONNECT_INGAME_REQSchema } from "./pb/InGame_pb";
import type { ReconnectIngameReq } from "./modules/inGame";
import { SS2C_RECONNECT_INGAME_RESSchema } from "./pb/InGame_pb";
import type { ReconnectIngameRes } from "./modules/inGame";
import { SS2C_GEAR_BASE_SCORE_LIST_NOTSchema } from "./pb/InGame_pb";
import type { GearBaseScoreListNot } from "./modules/inGame";
import { SS2C_MATCH_POOL_REGISTERED_NOTSchema } from "./pb/InGame_pb";
import type { MatchPoolRegisteredNot } from "./modules/inGame";
import { SS2C_MATCHMAKING_FAIL_NOTSchema } from "./pb/InGame_pb";
import type { MatchmakingFailNot } from "./modules/inGame";
import { SC2S_INVENTORY_INFO_REQSchema } from "./pb/Inventory_pb";
import type { InventoryInfoReq } from "./modules/inventory";
import { SS2C_INVENTORY_INFO_RESSchema } from "./pb/Inventory_pb";
import type { InventoryInfoRes } from "./modules/inventory";
import { SC2S_INVENTORY_ALL_UPDATE_REQSchema } from "./pb/Inventory_pb";
import type { InventoryAllUpdateReq } from "./modules/inventory";
import { SS2C_INVENTORY_ALL_UPDATE_RESSchema } from "./pb/Inventory_pb";
import type { InventoryAllUpdateRes } from "./modules/inventory";
import { SC2S_INVENTORY_MOVE_REQSchema } from "./pb/Inventory_pb";
import type { InventoryMoveReq } from "./modules/inventory";
import { SS2C_INVENTORY_MOVE_RESSchema } from "./pb/Inventory_pb";
import type { InventoryMoveRes } from "./modules/inventory";
import { SC2S_INVENTORY_MERGE_REQSchema } from "./pb/Inventory_pb";
import type { InventoryMergeReq } from "./modules/inventory";
import { SS2C_INVENTORY_MERGE_RESSchema } from "./pb/Inventory_pb";
import type { InventoryMergeRes } from "./modules/inventory";
import { SC2S_INVENTORY_SWAP_REQSchema } from "./pb/Inventory_pb";
import type { InventorySwapReq } from "./modules/inventory";
import { SS2C_INVENTORY_SWAP_RESSchema } from "./pb/Inventory_pb";
import type { InventorySwapRes } from "./modules/inventory";
import { SC2S_INVENTORY_SPLIT_MOVE_REQSchema } from "./pb/Inventory_pb";
import type { InventorySplitMoveReq } from "./modules/inventory";
import { SS2C_INVENTORY_SPLIT_MOVE_RESSchema } from "./pb/Inventory_pb";
import type { InventorySplitMoveRes } from "./modules/inventory";
import { SC2S_INVENTORY_SPLIT_MERGE_REQSchema } from "./pb/Inventory_pb";
import type { InventorySplitMergeReq } from "./modules/inventory";
import { SS2C_INVENTORY_SPLIT_MERGE_RESSchema } from "./pb/Inventory_pb";
import type { InventorySplitMergeRes } from "./modules/inventory";
import { SC2S_INVENTORY_SPLIT_SWAP_REQSchema } from "./pb/Inventory_pb";
import type { InventorySplitSwapReq } from "./modules/inventory";
import { SS2C_INVENTORY_SPLIT_SWAP_RESSchema } from "./pb/Inventory_pb";
import type { InventorySplitSwapRes } from "./modules/inventory";
import { SC2S_INVENTORY_TWO_HANDED_WEAPON_SWAP_REQSchema } from "./pb/Inventory_pb";
import type { InventoryTwoHandedWeaponSwapReq } from "./modules/inventory";
import { SS2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RESSchema } from "./pb/Inventory_pb";
import type { InventoryTwoHandedWeaponSwapRes } from "./modules/inventory";
import { SC2S_INVENTORY_SINGLE_UPDATE_REQSchema } from "./pb/Inventory_pb";
import type { InventorySingleUpdateReq } from "./modules/inventory";
import { SS2C_INVENTORY_SINGLE_UPDATE_RESSchema } from "./pb/Inventory_pb";
import type { InventorySingleUpdateRes } from "./modules/inventory";
import { SC2S_STORAGE_INFO_REQSchema } from "./pb/Inventory_pb";
import type { StorageInfoReq } from "./modules/inventory";
import { SS2C_STORAGE_INFO_RESSchema } from "./pb/Inventory_pb";
import type { StorageInfoRes } from "./modules/inventory";
import { SC2S_INVENTORY_EXPAND_STORAGE_REQSchema } from "./pb/Inventory_pb";
import type { InventoryExpandStorageReq } from "./modules/inventory";
import { SS2C_INVENTORY_EXPAND_STORAGE_RESSchema } from "./pb/Inventory_pb";
import type { InventoryExpandStorageRes } from "./modules/inventory";
import { SC2S_CHARACTER_SELECT_ENTER_REQSchema } from "./pb/Lobby_pb";
import type { CharacterSelectEnterReq } from "./modules/lobby";
import { SS2C_CHARACTER_SELECT_ENTER_RESSchema } from "./pb/Lobby_pb";
import type { CharacterSelectEnterRes } from "./modules/lobby";
import { SC2S_LOBBY_CHARACTER_INFO_REQSchema } from "./pb/Lobby_pb";
import type { LobbyCharacterInfoReq } from "./modules/lobby";
import { SS2C_LOBBY_CHARACTER_INFO_RESSchema } from "./pb/Lobby_pb";
import type { LobbyCharacterInfoRes } from "./modules/lobby";
import { SC2S_OPEN_LOBBY_MAP_REQSchema } from "./pb/Lobby_pb";
import type { OpenLobbyMapReq } from "./modules/lobby";
import { SS2C_OPEN_LOBBY_MAP_RESSchema } from "./pb/Lobby_pb";
import type { OpenLobbyMapRes } from "./modules/lobby";
import { SC2S_LOBBY_REGION_SELECT_REQSchema } from "./pb/Lobby_pb";
import type { LobbyRegionSelectReq } from "./modules/lobby";
import { SS2C_LOBBY_REGION_SELECT_RESSchema } from "./pb/Lobby_pb";
import type { LobbyRegionSelectRes } from "./modules/lobby";
import { SC2S_LOBBY_ENTER_FROM_GAME_REQSchema } from "./pb/Lobby_pb";
import type { LobbyEnterFromGameReq } from "./modules/lobby";
import { SS2C_LOBBY_ENTER_FROM_GAME_RESSchema } from "./pb/Lobby_pb";
import type { LobbyEnterFromGameRes } from "./modules/lobby";
import { SC2S_LOBBY_GAME_TYPE_SELECT_REQSchema } from "./pb/Lobby_pb";
import type { LobbyGameTypeSelectReq } from "./modules/lobby";
import { SS2C_LOBBY_GAME_TYPE_SELECT_RESSchema } from "./pb/Lobby_pb";
import type { LobbyGameTypeSelectRes } from "./modules/lobby";
import { SS2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOTSchema } from "./pb/Lobby_pb";
import type { LobbyAccountCurrencyListNot } from "./modules/lobby";
import { SS2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOTSchema } from "./pb/Lobby_pb";
import type { LobbyCharacterLobbyEmoteNot } from "./modules/lobby";
import { SS2C_LOBBY_REPORT_PUNISH_LIST_NOTSchema } from "./pb/Lobby_pb";
import type { LobbyReportPunishListNot } from "./modules/lobby";
import { SC2S_USER_CHARACTER_GAME_STAT_INFO_REQSchema } from "./pb/Lobby_pb";
import type { UserCharacterGameStatInfoReq } from "./modules/lobby";
import { SS2C_USER_CHARACTER_GAME_STAT_INFO_RESSchema } from "./pb/Lobby_pb";
import type { UserCharacterGameStatInfoRes } from "./modules/lobby";
import { SC2S_KNIGHT_PROGRAM_LINK_SELECT_REQSchema } from "./pb/Lobby_pb";
import type { KnightProgramLinkSelectReq } from "./modules/lobby";
import { SS2C_KNIGHT_PROGRAM_LINK_SELECT_RESSchema } from "./pb/Lobby_pb";
import type { KnightProgramLinkSelectRes } from "./modules/lobby";
import { SC2S_GM_TRADE_CHAT_BAN_REQSchema } from "./pb/Lobby_pb";
import type { GmTradeChatBanReq } from "./modules/lobby";
import { SS2C_GM_TRADE_CHAT_BAN_RESSchema } from "./pb/Lobby_pb";
import type { GmTradeChatBanRes } from "./modules/lobby";
import { SS2C_FRIEND_ITEM_RECOVERED_NOTSchema } from "./pb/Lobby_pb";
import type { FriendItemRecoveredNot } from "./modules/lobby";
import { SS2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOTSchema } from "./pb/Lobby_pb";
import type { FriendItemRecoveryReceiveNot } from "./modules/lobby";
import { SC2S_FRIEND_ITEM_RECOVERED_NOT_CHECK_REQSchema } from "./pb/Lobby_pb";
import type { FriendItemRecoveredNotCheckReq } from "./modules/lobby";
import { SS2C_FRIEND_ITEM_RECOVERED_NOT_CHECK_RESSchema } from "./pb/Lobby_pb";
import type { FriendItemRecoveredNotCheckRes } from "./modules/lobby";
import { SC2S_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_REQSchema } from "./pb/Lobby_pb";
import type { FriendItemRecoveryReceiveNotCheckReq } from "./modules/lobby";
import { SS2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_RESSchema } from "./pb/Lobby_pb";
import type { FriendItemRecoveryReceiveNotCheckRes } from "./modules/lobby";
import { SC2S_LOBBY_RANDOM_MATCHMAKING_REQSchema } from "./pb/Lobby_pb";
import type { LobbyRandomMatchmakingReq } from "./modules/lobby";
import { SS2C_LOBBY_RANDOM_MATCHMAKING_RESSchema } from "./pb/Lobby_pb";
import type { LobbyRandomMatchmakingRes } from "./modules/lobby";
import { SS2C_DLC_LEGENDARY_STATUS_DUPLICATE_WARNING_NOTSchema } from "./pb/Lobby_pb";
import type { DlcLegendaryStatusDuplicateWarningNot } from "./modules/lobby";
import { SS2C_ARENA_STAT_NOTSchema } from "./pb/Lobby_pb";
import type { ArenaStatNot } from "./modules/lobby";
import { SC2S_MARKETPLACE_ITEM_LIST_REQSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceItemListReq } from "./modules/marketPlace";
import { SS2C_MARKETPLACE_ITEM_LIST_RESSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceItemListRes } from "./modules/marketPlace";
import { SC2S_MARKETPLACE_MY_ITEM_LIST_REQSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceMyItemListReq } from "./modules/marketPlace";
import { SS2C_MARKETPLACE_MY_ITEM_LIST_RESSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceMyItemListRes } from "./modules/marketPlace";
import { SC2S_MARKETPLACE_ITEM_BUY_REQSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceItemBuyReq } from "./modules/marketPlace";
import { SS2C_MARKETPLACE_ITEM_BUY_RESSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceItemBuyRes } from "./modules/marketPlace";
import { SC2S_MARKETPLACE_ITEM_REGISTER_REQSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceItemRegisterReq } from "./modules/marketPlace";
import { SS2C_MARKETPLACE_ITEM_REGISTER_RESSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceItemRegisterRes } from "./modules/marketPlace";
import { SC2S_MARKETPLACE_ITEM_CANCEL_REQSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceItemCancelReq } from "./modules/marketPlace";
import { SS2C_MARKETPLACE_ITEM_CANCEL_RESSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceItemCancelRes } from "./modules/marketPlace";
import { SC2S_MARKETPLACE_TRANSFER_ITEMS_REQSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceTransferItemsReq } from "./modules/marketPlace";
import { SS2C_MARKETPLACE_TRANSFER_ITEMS_RESSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceTransferItemsRes } from "./modules/marketPlace";
import { SS2C_MARKETPLACE_ITEM_HAS_SOLD_NOTSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceItemHasSoldNot } from "./modules/marketPlace";
import { SC2S_MARKETPLACE_ENTER_REQSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceEnterReq } from "./modules/marketPlace";
import { SS2C_MARKETPLACE_ENTER_RESSchema } from "./pb/MarketPlace_pb";
import type { MarketplaceEnterRes } from "./modules/marketPlace";
import { SC2S_MERCHANT_LIST_REQSchema } from "./pb/Merchant_pb";
import type { MerchantListReq } from "./modules/merchant";
import { SS2C_MERCHANT_LIST_RESSchema } from "./pb/Merchant_pb";
import type { MerchantListRes } from "./modules/merchant";
import { SC2S_MERCHANT_STOCK_BUY_ITEM_LIST_REQSchema } from "./pb/Merchant_pb";
import type { MerchantStockBuyItemListReq } from "./modules/merchant";
import { SS2C_MERCHANT_STOCK_BUY_ITEM_LIST_RESSchema } from "./pb/Merchant_pb";
import type { MerchantStockBuyItemListRes } from "./modules/merchant";
import { SC2S_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_REQSchema } from "./pb/Merchant_pb";
import type { MerchantStockSellBackItemListReq } from "./modules/merchant";
import { SS2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RESSchema } from "./pb/Merchant_pb";
import type { MerchantStockSellBackItemListRes } from "./modules/merchant";
import { SC2S_MERCHANT_STOCK_BUY_REQSchema } from "./pb/Merchant_pb";
import type { MerchantStockBuyReq } from "./modules/merchant";
import { SS2C_MERCHANT_STOCK_BUY_RESSchema } from "./pb/Merchant_pb";
import type { MerchantStockBuyRes } from "./modules/merchant";
import { SC2S_MERCHANT_STOCK_SELL_BACK_REQSchema } from "./pb/Merchant_pb";
import type { MerchantStockSellBackReq } from "./modules/merchant";
import { SS2C_MERCHANT_STOCK_SELL_BACK_RESSchema } from "./pb/Merchant_pb";
import type { MerchantStockSellBackRes } from "./modules/merchant";
import { SC2S_MERCHANT_SERVICE_CRAFT_LIST_REQSchema } from "./pb/Merchant_pb";
import type { MerchantServiceCraftListReq } from "./modules/merchant";
import { SS2C_MERCHANT_SERVICE_CRAFT_LIST_RESSchema } from "./pb/Merchant_pb";
import type { MerchantServiceCraftListRes } from "./modules/merchant";
import { SC2S_MERCHANT_SERVICE_CRAFT_REQSchema } from "./pb/Merchant_pb";
import type { MerchantServiceCraftReq } from "./modules/merchant";
import { SS2C_MERCHANT_SERVICE_CRAFT_RESSchema } from "./pb/Merchant_pb";
import type { MerchantServiceCraftRes } from "./modules/merchant";
import { SC2S_MERCHANT_QUEST_LIST_INFO_REQSchema } from "./pb/Merchant_pb";
import type { MerchantQuestListInfoReq } from "./modules/merchant";
import { SS2C_MERCHANT_QUEST_LIST_INFO_RESSchema } from "./pb/Merchant_pb";
import type { MerchantQuestListInfoRes } from "./modules/merchant";
import { SC2S_MERCHANT_QUEST_SELECT_REQSchema } from "./pb/Merchant_pb";
import type { MerchantQuestSelectReq } from "./modules/merchant";
import { SS2C_MERCHANT_QUEST_SELECT_RESSchema } from "./pb/Merchant_pb";
import type { MerchantQuestSelectRes } from "./modules/merchant";
import { SC2S_MERCHANT_QUEST_COMPLETE_REQSchema } from "./pb/Merchant_pb";
import type { MerchantQuestCompleteReq } from "./modules/merchant";
import { SS2C_MERCHANT_QUEST_COMPLETE_RESSchema } from "./pb/Merchant_pb";
import type { MerchantQuestCompleteRes } from "./modules/merchant";
import { SC2S_MERCHANT_QUEST_CONTENT_VALUE_STACK_REQSchema } from "./pb/Merchant_pb";
import type { MerchantQuestContentValueStackReq } from "./modules/merchant";
import { SS2C_MERCHANT_QUEST_CONTENT_VALUE_STACK_RESSchema } from "./pb/Merchant_pb";
import type { MerchantQuestContentValueStackRes } from "./modules/merchant";
import { SC2S_MERCHANT_BASE_GEAR_LIST_REQSchema } from "./pb/Merchant_pb";
import type { MerchantBaseGearListReq } from "./modules/merchant";
import { SS2C_MERCHANT_BASE_GEAR_LIST_RESSchema } from "./pb/Merchant_pb";
import type { MerchantBaseGearListRes } from "./modules/merchant";
import { SC2S_MERCHANT_BASE_GEAR_SET_REQSchema } from "./pb/Merchant_pb";
import type { MerchantBaseGearSetReq } from "./modules/merchant";
import { SS2C_MERCHANT_BASE_GEAR_SET_RESSchema } from "./pb/Merchant_pb";
import type { MerchantBaseGearSetRes } from "./modules/merchant";
import { SC2S_MERCHANT_SAVE_BASE_GEAR_SET_REQSchema } from "./pb/Merchant_pb";
import type { MerchantSaveBaseGearSetReq } from "./modules/merchant";
import { SS2C_MERCHANT_SAVE_BASE_GEAR_SET_RESSchema } from "./pb/Merchant_pb";
import type { MerchantSaveBaseGearSetRes } from "./modules/merchant";
import { SC2S_MERCHANT_EQUIP_BASE_GEAR_SET_REQSchema } from "./pb/Merchant_pb";
import type { MerchantEquipBaseGearSetReq } from "./modules/merchant";
import { SS2C_MERCHANT_EQUIP_BASE_GEAR_SET_RESSchema } from "./pb/Merchant_pb";
import type { MerchantEquipBaseGearSetRes } from "./modules/merchant";
import { SC2S_MERCHANT_SERVICE_MINDWIPE_INFO_REQSchema } from "./pb/Merchant_pb";
import type { MerchantServiceMindwipeInfoReq } from "./modules/merchant";
import { SS2C_MERCHANT_SERVICE_MINDWIPE_INFO_RESSchema } from "./pb/Merchant_pb";
import type { MerchantServiceMindwipeInfoRes } from "./modules/merchant";
import { SC2S_MERCHANT_SERVICE_MINDWIPE_REQSchema } from "./pb/Merchant_pb";
import type { MerchantServiceMindwipeReq } from "./modules/merchant";
import { SS2C_MERCHANT_SERVICE_MINDWIPE_RESSchema } from "./pb/Merchant_pb";
import type { MerchantServiceMindwipeRes } from "./modules/merchant";
import { SC2S_MERCHANT_RECOVERY_LIST_REQSchema } from "./pb/Merchant_pb";
import type { MerchantRecoveryListReq } from "./modules/merchant";
import { SS2C_MERCHANT_RECOVERY_LIST_RESSchema } from "./pb/Merchant_pb";
import type { MerchantRecoveryListRes } from "./modules/merchant";
import { SC2S_MERCHANT_RECOVERY_BUY_REQSchema } from "./pb/Merchant_pb";
import type { MerchantRecoveryBuyReq } from "./modules/merchant";
import { SS2C_MERCHANT_RECOVERY_BUY_RESSchema } from "./pb/Merchant_pb";
import type { MerchantRecoveryBuyRes } from "./modules/merchant";
import { SC2S_MERCHANT_QUEST_LOG_LIST_REQSchema } from "./pb/Merchant_pb";
import type { MerchantQuestLogListReq } from "./modules/merchant";
import { SS2C_MERCHANT_QUEST_LOG_LIST_RESSchema } from "./pb/Merchant_pb";
import type { MerchantQuestLogListRes } from "./modules/merchant";
import { SC2S_MERCHANT_QUEST_LOG_ACCEPT_ALL_REQSchema } from "./pb/Merchant_pb";
import type { MerchantQuestLogAcceptAllReq } from "./modules/merchant";
import { SS2C_MERCHANT_QUEST_LOG_ACCEPT_ALL_RESSchema } from "./pb/Merchant_pb";
import type { MerchantQuestLogAcceptAllRes } from "./modules/merchant";
import { SS2C_MERCHANT_RECOVERY_ITEM_CHECK_NOTSchema } from "./pb/Merchant_pb";
import type { MerchantRecoveryItemCheckNot } from "./modules/merchant";
import { SC2S_MERCHANT_RECOVERY_CHECK_REQSchema } from "./pb/Merchant_pb";
import type { MerchantRecoveryCheckReq } from "./modules/merchant";
import { SS2C_MERCHANT_RECOVERY_CHECK_RESSchema } from "./pb/Merchant_pb";
import type { MerchantRecoveryCheckRes } from "./modules/merchant";
import { SC2S_MERCHANT_EXPRESS_LIST_REQSchema } from "./pb/Merchant_pb";
import type { MerchantExpressListReq } from "./modules/merchant";
import { SS2C_MERCHANT_EXPRESS_LIST_RESSchema } from "./pb/Merchant_pb";
import type { MerchantExpressListRes } from "./modules/merchant";
import { SC2S_MERCHANT_EXPRESS_BUY_REQSchema } from "./pb/Merchant_pb";
import type { MerchantExpressBuyReq } from "./modules/merchant";
import { SS2C_MERCHANT_EXPRESS_BUY_RESSchema } from "./pb/Merchant_pb";
import type { MerchantExpressBuyRes } from "./modules/merchant";
import { SS2C_MERCHANT_EXPRESS_ITEM_CHECK_NOTSchema } from "./pb/Merchant_pb";
import type { MerchantExpressItemCheckNot } from "./modules/merchant";
import { SC2S_PARTY_INVITE_REQSchema } from "./pb/Party_pb";
import type { PartyInviteReq } from "./modules/party";
import { SS2C_PARTY_INVITE_RESSchema } from "./pb/Party_pb";
import type { PartyInviteRes } from "./modules/party";
import { SS2C_PARTY_INVITE_NOTSchema } from "./pb/Party_pb";
import type { PartyInviteNot } from "./modules/party";
import { SC2S_PARTY_INVITE_ANSWER_REQSchema } from "./pb/Party_pb";
import type { PartyInviteAnswerReq } from "./modules/party";
import { SS2C_PARTY_INVITE_ANSWER_RESSchema } from "./pb/Party_pb";
import type { PartyInviteAnswerRes } from "./modules/party";
import { SS2C_PARTY_INVITE_ANSWER_RESULT_NOTSchema } from "./pb/Party_pb";
import type { PartyInviteAnswerResultNot } from "./modules/party";
import { SC2S_PARTY_EXIT_REQSchema } from "./pb/Party_pb";
import type { PartyExitReq } from "./modules/party";
import { SS2C_PARTY_EXIT_RESSchema } from "./pb/Party_pb";
import type { PartyExitRes } from "./modules/party";
import { SS2C_PARTY_MEMBER_INFO_NOTSchema } from "./pb/Party_pb";
import type { PartyMemberInfoNot } from "./modules/party";
import { SC2S_PARTY_READY_REQSchema } from "./pb/Party_pb";
import type { PartyReadyReq } from "./modules/party";
import { SS2C_PARTY_READY_RESSchema } from "./pb/Party_pb";
import type { PartyReadyRes } from "./modules/party";
import { SS2C_PARTY_EQUIP_ITEM_CHANGE_NOTSchema } from "./pb/Party_pb";
import type { PartyEquipItemChangeNot } from "./modules/party";
import { SS2C_PARTY_REGION_CHANGE_NOTSchema } from "./pb/Party_pb";
import type { PartyRegionChangeNot } from "./modules/party";
import { SS2C_PARTY_LOCATION_UPDATE_NOTSchema } from "./pb/Party_pb";
import type { PartyLocationUpdateNot } from "./modules/party";
import { SS2C_PARTY_CHARACTER_SKIN_LIST_NOTSchema } from "./pb/Party_pb";
import type { PartyCharacterSkinListNot } from "./modules/party";
import { SS2C_PARTY_CHARACTER_SKIN_CHANGE_NOTSchema } from "./pb/Party_pb";
import type { PartyCharacterSkinChangeNot } from "./modules/party";
import { SS2C_PARTY_ITEM_SKIN_LIST_NOTSchema } from "./pb/Party_pb";
import type { PartyItemSkinListNot } from "./modules/party";
import { SS2C_PARTY_ITEM_SKIN_CHANGE_NOTSchema } from "./pb/Party_pb";
import type { PartyItemSkinChangeNot } from "./modules/party";
import { SS2C_PARTY_ARMOR_SKIN_LIST_NOTSchema } from "./pb/Party_pb";
import type { PartyArmorSkinListNot } from "./modules/party";
import { SS2C_PARTY_ARMOR_SKIN_CHANGE_NOTSchema } from "./pb/Party_pb";
import type { PartyArmorSkinChangeNot } from "./modules/party";
import { SS2C_PARTY_GAME_TYPE_CHANGE_NOTSchema } from "./pb/Party_pb";
import type { PartyGameTypeChangeNot } from "./modules/party";
import { SC2S_PARTY_MEMBER_KICK_REQSchema } from "./pb/Party_pb";
import type { PartyMemberKickReq } from "./modules/party";
import { SS2C_PARTY_MEMBER_KICK_RESSchema } from "./pb/Party_pb";
import type { PartyMemberKickRes } from "./modules/party";
import { SC2S_PARTY_CHAT_REQSchema } from "./pb/Party_pb";
import type { PartyChatReq } from "./modules/party";
import { SS2C_PARTY_CHAT_RESSchema } from "./pb/Party_pb";
import type { PartyChatRes } from "./modules/party";
import { SS2C_PARTY_CHAT_NOTSchema } from "./pb/Party_pb";
import type { PartyChatNot } from "./modules/party";
import { SS2C_PARTY_READY_CHANGE_NOTSchema } from "./pb/Party_pb";
import type { PartyReadyChangeNot } from "./modules/party";
import { SS2C_PARTY_KICKED_OUT_NOTSchema } from "./pb/Party_pb";
import type { PartyKickedOutNot } from "./modules/party";
import { SS2C_PARTY_MEMBER_LOBBY_EMOTE_NOTSchema } from "./pb/Party_pb";
import type { PartyMemberLobbyEmoteNot } from "./modules/party";
import { SC2S_PARTY_START_LOBBY_EMOTE_REQSchema } from "./pb/Party_pb";
import type { PartyStartLobbyEmoteReq } from "./modules/party";
import { SS2C_PARTY_START_LOBBY_EMOTE_RESSchema } from "./pb/Party_pb";
import type { PartyStartLobbyEmoteRes } from "./modules/party";
import { SS2C_PARTY_START_LOBBY_EMOTE_NOTSchema } from "./pb/Party_pb";
import type { PartyStartLobbyEmoteNot } from "./modules/party";
import { SS2C_PARTY_GEAR_SCORE_CHANGE_NOTSchema } from "./pb/Party_pb";
import type { PartyGearScoreChangeNot } from "./modules/party";
import { SS2C_PARTY_RANDOM_MATCHMAKING_NOTSchema } from "./pb/Party_pb";
import type { PartyRandomMatchmakingNot } from "./modules/party";
import { SS2C_PARTY_LAST_GAME_MEMBER_INFO_NOTSchema } from "./pb/Party_pb";
import type { PartyLastGameMemberInfoNot } from "./modules/party";
import { SC2S_RANKING_INFO_REQSchema } from "./pb/Ranking_pb";
import type { RankingInfoReq } from "./modules/ranking";
import { SS2C_RANKING_INFO_RESSchema } from "./pb/Ranking_pb";
import type { RankingInfoRes } from "./modules/ranking";
import { SC2S_RANKING_RANGE_REQSchema } from "./pb/Ranking_pb";
import type { RankingRangeReq } from "./modules/ranking";
import { SS2C_RANKING_RANGE_RESSchema } from "./pb/Ranking_pb";
import type { RankingRangeRes } from "./modules/ranking";
import { SC2S_RANKING_CHARACTER_REQSchema } from "./pb/Ranking_pb";
import type { RankingCharacterReq } from "./modules/ranking";
import { SC2S_RANKING_REWARD_GET_REQSchema } from "./pb/Ranking_pb";
import type { RankingRewardGetReq } from "./modules/ranking";
import { SS2C_RANKING_REWARD_GET_RESSchema } from "./pb/Ranking_pb";
import type { RankingRewardGetRes } from "./modules/ranking";
import { SS2C_RANKING_CHARACTER_RESSchema } from "./pb/Ranking_pb";
import type { RankingCharacterRes } from "./modules/ranking";
import { SC2S_RANKING_AP_CONFIG_REQSchema } from "./pb/Ranking_pb";
import type { RankingApConfigReq } from "./modules/ranking";
import { SS2C_RANKING_AP_CONFIG_RESSchema } from "./pb/Ranking_pb";
import type { RankingApConfigRes } from "./modules/ranking";
import { SS2C_RANKING_HAS_REWARD_NOTSchema } from "./pb/Ranking_pb";
import type { RankingHasRewardNot } from "./modules/ranking";
import { SC2S_RELIGION_LIST_REQSchema } from "./pb/Religion_pb";
import type { ReligionListReq } from "./modules/religion";
import { SS2C_RELIGION_LIST_RESSchema } from "./pb/Religion_pb";
import type { ReligionListRes } from "./modules/religion";
import { SC2S_RELIGION_RANKING_LIST_REQSchema } from "./pb/Religion_pb";
import type { ReligionRankingListReq } from "./modules/religion";
import { SS2C_RELIGION_RANKING_LIST_RESSchema } from "./pb/Religion_pb";
import type { ReligionRankingListRes } from "./modules/religion";
import { SC2S_RELIGION_PERSONAL_RANKING_REQSchema } from "./pb/Religion_pb";
import type { ReligionPersonalRankingReq } from "./modules/religion";
import { SS2C_RELIGION_PERSONAL_RANKING_RESSchema } from "./pb/Religion_pb";
import type { ReligionPersonalRankingRes } from "./modules/religion";
import { SC2S_RELIGION_UPDATE_OFFERING_REQSchema } from "./pb/Religion_pb";
import type { ReligionUpdateOfferingReq } from "./modules/religion";
import { SS2C_RELIGION_UPDATE_OFFERING_RESSchema } from "./pb/Religion_pb";
import type { ReligionUpdateOfferingRes } from "./modules/religion";
import { SC2S_RELIGION_KILL_COUNT_LIST_REQSchema } from "./pb/Religion_pb";
import type { ReligionKillCountListReq } from "./modules/religion";
import { SS2C_RELIGION_KILL_COUNT_LIST_RESSchema } from "./pb/Religion_pb";
import type { ReligionKillCountListRes } from "./modules/religion";
import { SC2S_RELIGION_REGISTER_REQSchema } from "./pb/Religion_pb";
import type { ReligionRegisterReq } from "./modules/religion";
import { SS2C_RELIGION_REGISTER_RESSchema } from "./pb/Religion_pb";
import type { ReligionRegisterRes } from "./modules/religion";
import { SC2S_RELIGION_GET_SEASON_INFO_REQSchema } from "./pb/Religion_pb";
import type { ReligionGetSeasonInfoReq } from "./modules/religion";
import { SS2C_RELIGION_GET_SEASON_INFO_RESSchema } from "./pb/Religion_pb";
import type { ReligionGetSeasonInfoRes } from "./modules/religion";
import { SC2S_SHOP_ITEM_LIST_REQSchema } from "./pb/Shop_pb";
import type { ShopItemListReq } from "./modules/shop";
import { SS2C_SHOP_ITEM_LIST_RESSchema } from "./pb/Shop_pb";
import type { ShopItemListRes } from "./modules/shop";
import { SC2S_SHOP_ITEM_BUY_REQSchema } from "./pb/Shop_pb";
import type { ShopItemBuyReq } from "./modules/shop";
import { SS2C_SHOP_ITEM_BUY_RESSchema } from "./pb/Shop_pb";
import type { ShopItemBuyRes } from "./modules/shop";
import { SC2S_SHOP_ENTER_GIFT_CODE_REQSchema } from "./pb/Shop_pb";
import type { ShopEnterGiftCodeReq } from "./modules/shop";
import { SS2C_SHOP_ENTER_GIFT_CODE_RESSchema } from "./pb/Shop_pb";
import type { ShopEnterGiftCodeRes } from "./modules/shop";
import { SC2S_SHOP_RED_STONE_SHARD_INFO_REQSchema } from "./pb/Shop_pb";
import type { ShopRedStoneShardInfoReq } from "./modules/shop";
import { SS2C_SHOP_RED_STONE_SHARD_INFO_RESSchema } from "./pb/Shop_pb";
import type { ShopRedStoneShardInfoRes } from "./modules/shop";
import { SC2S_SHOP_RED_STONE_SHARD_BUY_REQSchema } from "./pb/Shop_pb";
import type { ShopRedStoneShardBuyReq } from "./modules/shop";
import { SS2C_SHOP_RED_STONE_SHARD_BUY_RESSchema } from "./pb/Shop_pb";
import type { ShopRedStoneShardBuyRes } from "./modules/shop";
import { SC2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQSchema } from "./pb/Shop_pb";
import type { ShopRedStoneShardBuyCheckReq } from "./modules/shop";
import { SS2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RESSchema } from "./pb/Shop_pb";
import type { ShopRedStoneShardBuyCheckRes } from "./modules/shop";
import { SC2S_SHOP_LEGEND_UPGRADE_REQSchema } from "./pb/Shop_pb";
import type { ShopLegendUpgradeReq } from "./modules/shop";
import { SS2C_SHOP_LEGEND_UPGRADE_RESSchema } from "./pb/Shop_pb";
import type { ShopLegendUpgradeRes } from "./modules/shop";
import { SC2S_REFRESH_RED_STONE_SHARD_REQSchema } from "./pb/Shop_pb";
import type { RefreshRedStoneShardReq } from "./modules/shop";
import { SS2C_REFRESH_RED_STONE_SHARD_RESSchema } from "./pb/Shop_pb";
import type { RefreshRedStoneShardRes } from "./modules/shop";
import { SC2S_SHOP_CHANGE_ACCOUNT_NAME_REQSchema } from "./pb/Shop_pb";
import type { ShopChangeAccountNameReq } from "./modules/shop";
import { SS2C_SHOP_CHANGE_ACCOUNT_NAME_RESSchema } from "./pb/Shop_pb";
import type { ShopChangeAccountNameRes } from "./modules/shop";
import { SS2C_SHOP_ITEM_CHECK_NOTSchema } from "./pb/Shop_pb";
import type { ShopItemCheckNot } from "./modules/shop";
import { SC2S_SHOP_LEGEND_DLC_INSTALL_REQSchema } from "./pb/Shop_pb";
import type { ShopLegendDlcInstallReq } from "./modules/shop";
import { SS2C_SHOP_LEGEND_DLC_INSTALL_RESSchema } from "./pb/Shop_pb";
import type { ShopLegendDlcInstallRes } from "./modules/shop";
import { SC2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQSchema } from "./pb/Shop_pb";
import type { ShopLegendDlcInstallCheckReq } from "./modules/shop";
import { SS2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RESSchema } from "./pb/Shop_pb";
import type { ShopLegendDlcInstallCheckRes } from "./modules/shop";
import { SS2C_SHOP_TWITCH_DROPS_REWARD_NOTSchema } from "./pb/Shop_pb";
import type { ShopTwitchDropsRewardNot } from "./modules/shop";
import { SC2S_TRADE_CHANNEL_LIST_REQSchema } from "./pb/Trade_pb";
import type { TradeChannelListReq } from "./modules/trade";
import { SS2C_TRADE_CHANNEL_LIST_RESSchema } from "./pb/Trade_pb";
import type { TradeChannelListRes } from "./modules/trade";
import { SC2S_TRADE_CHANNEL_SELECT_REQSchema } from "./pb/Trade_pb";
import type { TradeChannelSelectReq } from "./modules/trade";
import { SS2C_TRADE_CHANNEL_SELECT_RESSchema } from "./pb/Trade_pb";
import type { TradeChannelSelectRes } from "./modules/trade";
import { SC2S_TRADE_CHANNEL_EXIT_REQSchema } from "./pb/Trade_pb";
import type { TradeChannelExitReq } from "./modules/trade";
import { SS2C_TRADE_CHANNEL_EXIT_RESSchema } from "./pb/Trade_pb";
import type { TradeChannelExitRes } from "./modules/trade";
import { SC2S_TRADE_CHANNEL_USER_LIST_REQSchema } from "./pb/Trade_pb";
import type { TradeChannelUserListReq } from "./modules/trade";
import { SS2C_TRADE_CHANNEL_USER_LIST_RESSchema } from "./pb/Trade_pb";
import type { TradeChannelUserListRes } from "./modules/trade";
import { SS2C_TRADE_CHANNEL_USER_UPDATE_NOTSchema } from "./pb/Trade_pb";
import type { TradeChannelUserUpdateNot } from "./modules/trade";
import { SC2S_TRADE_CHANNEL_CHAT_REQSchema } from "./pb/Trade_pb";
import type { TradeChannelChatReq } from "./modules/trade";
import { SS2C_TRADE_CHANNEL_CHAT_RESSchema } from "./pb/Trade_pb";
import type { TradeChannelChatRes } from "./modules/trade";
import { SC2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQSchema } from "./pb/Trade_pb";
import type { TradeChannelChatTextRangeReq } from "./modules/trade";
import { SS2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RESSchema } from "./pb/Trade_pb";
import type { TradeChannelChatTextRangeRes } from "./modules/trade";
import { SC2S_TRADE_MEMBERSHIP_REQUIREMENT_REQSchema } from "./pb/Trade_pb";
import type { TradeMembershipRequirementReq } from "./modules/trade";
import { SS2C_TRADE_MEMBERSHIP_REQUIREMENT_RESSchema } from "./pb/Trade_pb";
import type { TradeMembershipRequirementRes } from "./modules/trade";
import { SC2S_TRADE_MEMBERSHIP_REQSchema } from "./pb/Trade_pb";
import type { TradeMembershipReq } from "./modules/trade";
import { SS2C_TRADE_MEMBERSHIP_RESSchema } from "./pb/Trade_pb";
import type { TradeMembershipRes } from "./modules/trade";
import { SC2S_TRADE_REQUEST_REQSchema } from "./pb/Trade_pb";
import type { TradeRequestReq } from "./modules/trade";
import { SS2C_TRADE_REQUEST_RESSchema } from "./pb/Trade_pb";
import type { TradeRequestRes } from "./modules/trade";
import { SS2C_TRADE_REQUEST_NOTSchema } from "./pb/Trade_pb";
import type { TradeRequestNot } from "./modules/trade";
import { SC2S_TRADE_ANSWER_REQSchema } from "./pb/Trade_pb";
import type { TradeAnswerReq } from "./modules/trade";
import { SS2C_TRADE_ANSWER_RESSchema } from "./pb/Trade_pb";
import type { TradeAnswerRes } from "./modules/trade";
import { SS2C_TRADE_ANSWER_REFUSAL_NOTSchema } from "./pb/Trade_pb";
import type { TradeAnswerRefusalNot } from "./modules/trade";
import { SS2C_TRADING_BEGIN_NOTSchema } from "./pb/Trade_pb";
import type { TradingBeginNot } from "./modules/trade";
import { SC2S_TRADING_CLOSE_REQSchema } from "./pb/Trade_pb";
import type { TradingCloseReq } from "./modules/trade";
import { SS2C_TRADING_CLOSE_RESSchema } from "./pb/Trade_pb";
import type { TradingCloseRes } from "./modules/trade";
import { SC2S_TRADING_CHAT_REQSchema } from "./pb/Trade_pb";
import type { TradingChatReq } from "./modules/trade";
import { SS2C_TRADING_CHAT_RESSchema } from "./pb/Trade_pb";
import type { TradingChatRes } from "./modules/trade";
import { SC2S_TRADING_ITEM_UPDATE_REQSchema } from "./pb/Trade_pb";
import type { TradingItemUpdateReq } from "./modules/trade";
import { SS2C_TRADING_ITEM_UPDATE_RESSchema } from "./pb/Trade_pb";
import type { TradingItemUpdateRes } from "./modules/trade";
import { SC2S_TRADING_READY_REQSchema } from "./pb/Trade_pb";
import type { TradingReadyReq } from "./modules/trade";
import { SS2C_TRADING_READY_RESSchema } from "./pb/Trade_pb";
import type { TradingReadyRes } from "./modules/trade";
import { SS2C_TRADING_READY_NOTSchema } from "./pb/Trade_pb";
import type { TradingReadyNot } from "./modules/trade";
import { SS2C_TRADING_CONFIRM_NOTSchema } from "./pb/Trade_pb";
import type { TradingConfirmNot } from "./modules/trade";
import { SC2S_TRADING_CONFIRM_READY_REQSchema } from "./pb/Trade_pb";
import type { TradingConfirmReadyReq } from "./modules/trade";
import { SS2C_TRADING_CONFIRM_READY_RESSchema } from "./pb/Trade_pb";
import type { TradingConfirmReadyRes } from "./modules/trade";
import { SS2C_TRADING_CONFIRM_READY_NOTSchema } from "./pb/Trade_pb";
import type { TradingConfirmReadyNot } from "./modules/trade";
import { SC2S_TRADING_CONFIRM_CANCEL_REQSchema } from "./pb/Trade_pb";
import type { TradingConfirmCancelReq } from "./modules/trade";
import { SS2C_TRADING_CONFIRM_CANCEL_RESSchema } from "./pb/Trade_pb";
import type { TradingConfirmCancelRes } from "./modules/trade";
import { SS2C_TRADING_RESULT_NOTSchema } from "./pb/Trade_pb";
import type { TradingResultNot } from "./modules/trade";
import { SC2S_ALIVE_REQSchema } from "./pb/_PacketCommand_pb";
import type { AliveReq } from "./modules/packetCommand";
import { SS2C_ALIVE_RESSchema } from "./pb/_PacketCommand_pb";
import type { AliveRes } from "./modules/packetCommand";
import { SC2S_RECONNECT_REQSchema } from "./pb/_PacketCommand_pb";
import type { ReconnectReq } from "./modules/packetCommand";
import { SS2C_RECONNECT_RESSchema } from "./pb/_PacketCommand_pb";
import type { ReconnectRes } from "./modules/packetCommand";
import { SS2C_ALIVE_REVERSE_NOTSchema } from "./pb/_PacketCommand_pb";
import type { AliveReverseNot } from "./modules/packetCommand";
import { SC2S_ALIVE_REVERSE_REQSchema } from "./pb/_PacketCommand_pb";
import type { AliveReverseReq } from "./modules/packetCommand";
import { SS2C_ALIVE_REVERSE_RESSchema } from "./pb/_PacketCommand_pb";
import type { AliveReverseRes } from "./modules/packetCommand";

export const packetNameToIdMap = {
    PACKET_NONE: 0,
    C2S_ALIVE_REQ: 1,
    S2C_ALIVE_RES: 2,
    C2S_RECONNECT_REQ: 3,
    S2C_RECONNECT_RES: 4,
    S2C_ALIVE_REVERSE_NOT: 5,
    C2S_ALIVE_REVERSE_REQ: 6,
    S2C_ALIVE_REVERSE_RES: 7,
    C2S_ACCOUNT_LOGIN_REQ: 11,
    S2C_ACCOUNT_LOGIN_RES: 12,
    C2S_ACCOUNT_CHARACTER_CREATE_REQ: 15,
    S2C_ACCOUNT_CHARACTER_CREATE_RES: 16,
    C2S_ACCOUNT_CHARACTER_LIST_REQ: 17,
    S2C_ACCOUNT_CHARACTER_LIST_RES: 18,
    C2S_ACCOUNT_CHARACTER_DELETE_REQ: 19,
    S2C_ACCOUNT_CHARACTER_DELETE_RES: 20,
    C2S_LOBBY_ENTER_REQ: 21,
    S2C_LOBBY_ENTER_RES: 22,
    C2S_ACCOUNT_AGREE_ANSWER_REQ: 23,
    S2C_ACCOUNT_AGREE_ANSWER_RES: 24,
    S2C_ACCOUNT_CHARACTER_CLASS_LIST_NOT: 25,
    C2S_USER_HW_INFO_REQ: 26,
    S2C_USER_HW_INFO_RES: 27,
    C2S_CHARACTER_SELECT_ENTER_REQ: 41,
    S2C_CHARACTER_SELECT_ENTER_RES: 42,
    C2S_LOBBY_CHARACTER_INFO_REQ: 43,
    S2C_LOBBY_CHARACTER_INFO_RES: 44,
    C2S_OPEN_LOBBY_MAP_REQ: 45,
    S2C_OPEN_LOBBY_MAP_RES: 46,
    C2S_LOBBY_REGION_SELECT_REQ: 47,
    S2C_LOBBY_REGION_SELECT_RES: 48,
    C2S_LOBBY_ENTER_FROM_GAME_REQ: 49,
    S2C_LOBBY_ENTER_FROM_GAME_RES: 50,
    C2S_LOBBY_GAME_TYPE_SELECT_REQ: 51,
    S2C_LOBBY_GAME_TYPE_SELECT_RES: 52,
    S2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT: 53,
    S2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOT: 54,
    S2C_LOBBY_REPORT_PUNISH_LIST_NOT: 55,
    C2S_USER_CHARACTER_GAME_STAT_INFO_REQ: 56,
    S2C_USER_CHARACTER_GAME_STAT_INFO_RES: 57,
    C2S_KNIGHT_PROGRAM_LINK_SELECT_REQ: 58,
    S2C_KNIGHT_PROGRAM_LINK_SELECT_RES: 59,
    S2C_FRIEND_ITEM_RECOVERED_NOT: 60,
    C2S_FRIEND_ITEM_RECOVERED_NOT_CHECK_REQ: 61,
    S2C_FRIEND_ITEM_RECOVERED_NOT_CHECK_RES: 62,
    C2S_LOBBY_RANDOM_MATCHMAKING_REQ: 63,
    S2C_LOBBY_RANDOM_MATCHMAKING_RES: 64,
    S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT: 65,
    C2S_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_REQ: 66,
    S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_RES: 67,
    S2C_DLC_LEGENDARY_STATUS_DUPLICATE_WARNING_NOT: 68,
    S2C_ARENA_STAT_NOT: 69,
    MIN_INVENTORY_PACKET: 500,
    C2S_INVENTORY_INFO_REQ: 501,
    S2C_INVENTORY_INFO_RES: 502,
    C2S_INVENTORY_ALL_UPDATE_REQ: 503,
    S2C_INVENTORY_ALL_UPDATE_RES: 504,
    C2S_INVENTORY_SINGLE_UPDATE_REQ: 505,
    S2C_INVENTORY_SINGLE_UPDATE_RES: 506,
    C2S_INVENTORY_MOVE_REQ: 507,
    S2C_INVENTORY_MOVE_RES: 508,
    C2S_INVENTORY_MERGE_REQ: 509,
    S2C_INVENTORY_MERGE_RES: 510,
    C2S_INVENTORY_SWAP_REQ: 511,
    S2C_INVENTORY_SWAP_RES: 512,
    C2S_INVENTORY_SPLIT_MOVE_REQ: 513,
    S2C_INVENTORY_SPLIT_MOVE_RES: 514,
    C2S_INVENTORY_SPLIT_MERGE_REQ: 515,
    S2C_INVENTORY_SPLIT_MERGE_RES: 516,
    C2S_INVENTORY_SPLIT_SWAP_REQ: 517,
    S2C_INVENTORY_SPLIT_SWAP_RES: 518,
    C2S_INVENTORY_TWO_HANDED_WEAPON_SWAP_REQ: 519,
    S2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RES: 520,
    C2S_INVENTORY_EXPAND_STORAGE_REQ: 521,
    S2C_INVENTORY_EXPAND_STORAGE_RES: 522,
    C2S_STORAGE_INFO_REQ: 551,
    S2C_STORAGE_INFO_RES: 552,
    MAX_INVENTORY_PACKET: 600,
    C2S_AUTO_MATCH_REG_REQ: 751,
    S2C_AUTO_MATCH_REG_RES: 752,
    S2C_ENTER_GAME_SERVER_NOT: 753,
    C2S_GAME_ENTER_COMPLETE_NOT: 754,
    S2C_AUTO_MATCH_REG_TEAM_NOT: 755,
    C2S_RECONNECT_INGAME_REQ: 756,
    S2C_RECONNECT_INGAME_RES: 757,
    S2C_GEAR_BASE_SCORE_LIST_NOT: 758,
    S2C_MATCH_POOL_REGISTERED_NOT: 759,
    S2C_MATCHMAKING_FAIL_NOT: 760,
    MIN_RANKING_PACKET: 800,
    C2S_RANKING_RANGE_REQ: 801,
    S2C_RANKING_RANGE_RES: 802,
    C2S_RANKING_CHARACTER_REQ: 805,
    S2C_RANKING_CHARACTER_RES: 806,
    C2S_RANKING_INFO_REQ: 807,
    S2C_RANKING_INFO_RES: 808,
    C2S_RANKING_AP_CONFIG_REQ: 809,
    S2C_RANKING_AP_CONFIG_RES: 810,
    S2C_RANKING_HAS_REWARD_NOT: 811,
    C2S_RANKING_REWARD_GET_REQ: 812,
    S2C_RANKING_REWARD_GET_RES: 813,
    MAX_RANKING_PACKET: 880,
    MIN_FRIEND_PACKET: 900,
    C2S_FRIEND_CHECK_ACCOUNTNICKNAME_REQ: 901,
    S2C_FRIEND_CHECK_ACCOUNTNICKNAME_RES: 902,
    C2S_FRIEND_CREATE_ACCOUNTNICKNAME_REQ: 903,
    S2C_FRIEND_CREATE_ACCOUNTNICKNAME_RES: 904,
    C2S_FRIEND_SET_STATUS_REQ: 905,
    S2C_FRIEND_SET_STATUS_RES: 906,
    C2S_FRIEND_SET_PRIVACY_REQ: 907,
    S2C_FRIEND_SET_PRIVACY_RES: 908,
    C2S_FRIEND_INVITE_REQ: 909,
    S2C_FRIEND_INVITE_RES: 910,
    C2S_FRIEND_INVITE_BY_ACCOUNTNICKNAME_REQ: 911,
    S2C_FRIEND_INVITE_BY_ACCOUNTNICKNAME_RES: 912,
    C2S_FRIEND_INVITE_ACCEPT_REQ: 913,
    S2C_FRIEND_INVITE_ACCEPT_RES: 914,
    C2S_FRIEND_INVITE_DECLINE_REQ: 915,
    S2C_FRIEND_INVITE_DECLINE_RES: 916,
    C2S_FRIEND_INVITE_CANCEL_REQ: 917,
    S2C_FRIEND_INVITE_CANCEL_RES: 918,
    C2S_FRIEND_DEL_FRIEND_REQ: 919,
    S2C_FRIEND_DEL_FRIEND_RES: 920,
    S2C_FRIEND_INFO_NOT: 921,
    S2C_FRIEND_SET_FRIEND_INFOS_NOT: 922,
    S2C_FRIEND_DEL_FRIEND_INFOS_NOT: 923,
    S2C_FRIEND_SET_ACCEPT_INFOS_NOT: 924,
    S2C_FRIEND_DEL_ACCEPT_INFOS_NOT: 925,
    S2C_FRIEND_SET_INVITE_INFOS_NOT: 926,
    S2C_FRIEND_DEL_INVITE_INFOS_NOT: 927,
    S2C_FRIEND_SET_STATUS_NOT: 928,
    C2S_FRIEND_LIST_REQ: 940,
    S2C_FRIEND_LIST_RES: 941,
    C2S_FRIEND_LIST_ALL_REQ: 942,
    S2C_FRIEND_LIST_ALL_RES: 943,
    C2S_FRIEND_FIND_REQ: 944,
    S2C_FRIEND_FIND_RES: 945,
    MAX_FRIEND_PACKET: 950,
    MIN_PARTY_PACKET: 1000,
    C2S_PARTY_INVITE_REQ: 1001,
    S2C_PARTY_INVITE_RES: 1002,
    S2C_PARTY_INVITE_NOT: 1003,
    C2S_PARTY_INVITE_ANSWER_REQ: 1004,
    S2C_PARTY_INVITE_ANSWER_RES: 1005,
    S2C_PARTY_INVITE_ANSWER_RESULT_NOT: 1006,
    C2S_PARTY_EXIT_REQ: 1007,
    S2C_PARTY_EXIT_RES: 1008,
    S2C_PARTY_MEMBER_INFO_NOT: 1009,
    C2S_PARTY_READY_REQ: 1010,
    S2C_PARTY_READY_RES: 1011,
    S2C_PARTY_EQUIP_ITEM_CHANGE_NOT: 1012,
    S2C_PARTY_REGION_CHANGE_NOT: 1013,
    S2C_PARTY_LOCATION_UPDATE_NOT: 1014,
    S2C_PARTY_CHARACTER_SKIN_LIST_NOT: 1015,
    S2C_PARTY_CHARACTER_SKIN_CHANGE_NOT: 1016,
    S2C_PARTY_ITEM_SKIN_LIST_NOT: 1017,
    S2C_PARTY_ITEM_SKIN_CHANGE_NOT: 1018,
    S2C_PARTY_GAME_TYPE_CHANGE_NOT: 1019,
    C2S_PARTY_MEMBER_KICK_REQ: 1020,
    S2C_PARTY_MEMBER_KICK_RES: 1021,
    C2S_PARTY_CHAT_REQ: 1022,
    S2C_PARTY_CHAT_RES: 1023,
    S2C_PARTY_CHAT_NOT: 1024,
    S2C_PARTY_READY_CHANGE_NOT: 1025,
    S2C_PARTY_KICKED_OUT_NOT: 1026,
    S2C_PARTY_MEMBER_LOBBY_EMOTE_NOT: 1027,
    C2S_PARTY_START_LOBBY_EMOTE_REQ: 1028,
    S2C_PARTY_START_LOBBY_EMOTE_RES: 1029,
    S2C_PARTY_START_LOBBY_EMOTE_NOT: 1030,
    S2C_PARTY_ARMOR_SKIN_LIST_NOT: 1031,
    S2C_PARTY_ARMOR_SKIN_CHANGE_NOT: 1032,
    S2C_PARTY_GEAR_SCORE_CHANGE_NOT: 1033,
    S2C_PARTY_RANDOM_MATCHMAKING_NOT: 1034,
    S2C_PARTY_LAST_GAME_MEMBER_INFO_NOT: 1035,
    MAX_PARTY_PACKET: 1150,
    MIN_GM_PACKET: 1200,
    C2S_GM_PARTY_ALL_RANDOM_REQ: 1201,
    S2C_GM_PARTY_ALL_RANDOM_RES: 1202,
    C2S_GM_ENTER_GAME_SPECTATOR_REQ: 1203,
    S2C_GM_ENTER_GAME_SPECTATOR_RES: 1204,
    C2S_GM_TRADE_CHAT_BAN_REQ: 1205,
    S2C_GM_TRADE_CHAT_BAN_RES: 1206,
    MAX_GM_PACKET: 1300,
    MIN_MERCHANT_PACKET: 1350,
    C2S_MERCHANT_LIST_REQ: 1351,
    S2C_MERCHANT_LIST_RES: 1352,
    C2S_MERCHANT_STOCK_BUY_ITEM_LIST_REQ: 1353,
    S2C_MERCHANT_STOCK_BUY_ITEM_LIST_RES: 1354,
    C2S_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_REQ: 1355,
    S2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RES: 1356,
    C2S_MERCHANT_STOCK_BUY_REQ: 1357,
    S2C_MERCHANT_STOCK_BUY_RES: 1358,
    C2S_MERCHANT_STOCK_SELL_BACK_REQ: 1359,
    S2C_MERCHANT_STOCK_SELL_BACK_RES: 1360,
    C2S_MERCHANT_SERVICE_CRAFT_LIST_REQ: 1361,
    S2C_MERCHANT_SERVICE_CRAFT_LIST_RES: 1362,
    C2S_MERCHANT_SERVICE_CRAFT_REQ: 1363,
    S2C_MERCHANT_SERVICE_CRAFT_RES: 1364,
    C2S_MERCHANT_SERVICE_REPAIR_REQ: 1365,
    S2C_MERCHANT_SERVICE_REPAIR_RES: 1366,
    C2S_MERCHANT_SERVICE_MINDWIPE_INFO_REQ: 1367,
    S2C_MERCHANT_SERVICE_MINDWIPE_INFO_RES: 1368,
    C2S_MERCHANT_SERVICE_MINDWIPE_REQ: 1369,
    S2C_MERCHANT_SERVICE_MINDWIPE_RES: 1370,
    C2S_MERCHANT_RECOVERY_LIST_REQ: 1371,
    S2C_MERCHANT_RECOVERY_LIST_RES: 1372,
    C2S_MERCHANT_RECOVERY_BUY_REQ: 1373,
    S2C_MERCHANT_RECOVERY_BUY_RES: 1374,
    S2C_MERCHANT_RECOVERY_ITEM_CHECK_NOT: 1375,
    C2S_MERCHANT_RECOVERY_CHECK_REQ: 1376,
    S2C_MERCHANT_RECOVERY_CHECK_RES: 1377,
    C2S_MERCHANT_EXPRESS_LIST_REQ: 1380,
    S2C_MERCHANT_EXPRESS_LIST_RES: 1381,
    C2S_MERCHANT_EXPRESS_BUY_REQ: 1382,
    S2C_MERCHANT_EXPRESS_BUY_RES: 1383,
    S2C_MERCHANT_EXPRESS_ITEM_CHECK_NOT: 1384,
    C2S_MERCHANT_QUEST_LIST_INFO_REQ: 1400,
    S2C_MERCHANT_QUEST_LIST_INFO_RES: 1401,
    C2S_MERCHANT_QUEST_SELECT_REQ: 1402,
    S2C_MERCHANT_QUEST_SELECT_RES: 1403,
    C2S_MERCHANT_QUEST_COMPLETE_REQ: 1404,
    S2C_MERCHANT_QUEST_COMPLETE_RES: 1405,
    C2S_MERCHANT_QUEST_CONTENT_VALUE_STACK_REQ: 1406,
    S2C_MERCHANT_QUEST_CONTENT_VALUE_STACK_RES: 1407,
    C2S_MERCHANT_BASE_GEAR_LIST_REQ: 1450,
    S2C_MERCHANT_BASE_GEAR_LIST_RES: 1451,
    C2S_MERCHANT_BASE_GEAR_SET_REQ: 1452,
    S2C_MERCHANT_BASE_GEAR_SET_RES: 1453,
    C2S_MERCHANT_SAVE_BASE_GEAR_SET_REQ: 1454,
    S2C_MERCHANT_SAVE_BASE_GEAR_SET_RES: 1455,
    C2S_MERCHANT_EQUIP_BASE_GEAR_SET_REQ: 1456,
    S2C_MERCHANT_EQUIP_BASE_GEAR_SET_RES: 1457,
    C2S_MERCHANT_QUEST_LOG_LIST_REQ: 1480,
    S2C_MERCHANT_QUEST_LOG_LIST_RES: 1481,
    C2S_MERCHANT_QUEST_LOG_ACCEPT_ALL_REQ: 1482,
    S2C_MERCHANT_QUEST_LOG_ACCEPT_ALL_RES: 1483,
    MAX_MERCHANT_PACKET: 1600,
    MIN_KARMA_PACKET: 1650,
    C2S_KARMA_REPORT_LIST_REQ: 1651,
    S2C_KARMA_REPORT_LIST_RES: 1652,
    C2S_KARMA_REPORT_ACTION_REQ: 1653,
    S2C_KARMA_REPORT_ACTION_RES: 1654,
    S2C_KARMA_RATING_UPDATE_NOT: 1655,
    MAX_KARMA_PACKET: 1700,
    MIN_TRADE_PACKET: 2000,
    C2S_TRADE_CHANNEL_LIST_REQ: 2001,
    S2C_TRADE_CHANNEL_LIST_RES: 2002,
    C2S_TRADE_CHANNEL_SELECT_REQ: 2003,
    S2C_TRADE_CHANNEL_SELECT_RES: 2004,
    C2S_TRADE_CHANNEL_EXIT_REQ: 2005,
    S2C_TRADE_CHANNEL_EXIT_RES: 2006,
    C2S_TRADE_CHANNEL_USER_LIST_REQ: 2007,
    S2C_TRADE_CHANNEL_USER_LIST_RES: 2008,
    S2C_TRADE_CHANNEL_USER_UPDATE_NOT: 2009,
    C2S_TRADE_CHANNEL_CHAT_REQ: 2011,
    S2C_TRADE_CHANNEL_CHAT_RES: 2012,
    C2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ: 2013,
    S2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES: 2014,
    C2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ: 2030,
    S2C_TRADE_MEMBERSHIP_REQUIREMENT_RES: 2031,
    C2S_TRADE_MEMBERSHIP_REQ: 2032,
    S2C_TRADE_MEMBERSHIP_RES: 2033,
    C2S_TRADE_REQUEST_REQ: 2034,
    S2C_TRADE_REQUEST_RES: 2035,
    S2C_TRADE_REQUEST_NOT: 2036,
    C2S_TRADE_ANSWER_REQ: 2037,
    S2C_TRADE_ANSWER_RES: 2038,
    S2C_TRADE_ANSWER_REFUSAL_NOT: 2039,
    S2C_TRADING_BEGIN_NOT: 2050,
    C2S_TRADING_CLOSE_REQ: 2051,
    S2C_TRADING_CLOSE_RES: 2052,
    C2S_TRADING_CHAT_REQ: 2053,
    S2C_TRADING_CHAT_RES: 2054,
    C2S_TRADING_ITEM_UPDATE_REQ: 2055,
    S2C_TRADING_ITEM_UPDATE_RES: 2056,
    C2S_TRADING_READY_REQ: 2057,
    S2C_TRADING_READY_RES: 2058,
    S2C_TRADING_READY_NOT: 2059,
    S2C_TRADING_CONFIRM_NOT: 2060,
    C2S_TRADING_CONFIRM_READY_REQ: 2061,
    S2C_TRADING_CONFIRM_READY_RES: 2062,
    S2C_TRADING_CONFIRM_READY_NOT: 2063,
    C2S_TRADING_CONFIRM_CANCEL_REQ: 2064,
    S2C_TRADING_CONFIRM_CANCEL_RES: 2065,
    S2C_TRADING_RESULT_NOT: 2066,
    MAX_TRADE_PACKET: 2300,
    MIN_CUSTOMIZE_PACKET: 2330,
    C2S_CUSTOMIZE_NEW_ITEM_CHECK_REQ: 2331,
    S2C_CUSTOMIZE_NEW_ITEM_CHECK_RES: 2332,
    S2C_CUSTOMIZE_NEW_ITEM_ALERT_NOT: 2333,
    C2S_CUSTOMIZE_INFO_REQ: 2341,
    S2C_CUSTOMIZE_INFO_RES: 2342,
    C2S_CUSTOMIZE_MOUNT_REQ: 2351,
    S2C_CUSTOMIZE_MOUNT_RES: 2352,
    C2S_CUSTOMIZE_UNMOUNT_REQ: 2353,
    S2C_CUSTOMIZE_UNMOUNT_RES: 2354,
    MAX_CUSTOMIZE_PACKET: 2450,
    MIN_SHOP_PACKET: 2501,
    C2S_SHOP_ITEM_LIST_REQ: 2502,
    S2C_SHOP_ITEM_LIST_RES: 2503,
    C2S_SHOP_ITEM_BUY_REQ: 2521,
    S2C_SHOP_ITEM_BUY_RES: 2522,
    C2S_SHOP_ENTER_GIFT_CODE_REQ: 2550,
    S2C_SHOP_ENTER_GIFT_CODE_RES: 2551,
    C2S_SHOP_RED_STONE_SHARD_INFO_REQ: 2555,
    S2C_SHOP_RED_STONE_SHARD_INFO_RES: 2556,
    C2S_SHOP_RED_STONE_SHARD_BUY_REQ: 2557,
    S2C_SHOP_RED_STONE_SHARD_BUY_RES: 2558,
    C2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ: 2560,
    S2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES: 2561,
    C2S_SHOP_LEGEND_UPGRADE_REQ: 2562,
    S2C_SHOP_LEGEND_UPGRADE_RES: 2563,
    C2S_SHOP_CHANGE_ACCOUNT_NAME_REQ: 2564,
    S2C_SHOP_CHANGE_ACCOUNT_NAME_RES: 2565,
    C2S_SHOP_LEGEND_DLC_INSTALL_REQ: 2566,
    S2C_SHOP_LEGEND_DLC_INSTALL_RES: 2567,
    C2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ: 2568,
    S2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES: 2569,
    S2C_SHOP_ITEM_CHECK_NOT: 2570,
    S2C_SHOP_TWITCH_DROPS_REWARD_NOT: 2575,
    MAX_SHOP_PACKET: 2600,
    MIN_CLASS_PACKET: 2700,
    C2S_TRAINING_INFO_REQ: 2701,
    S2C_TRAINING_INFO_RES: 2702,
    C2S_TRAINING_REDEEM_LEARNING_TOKEN_REQ: 2705,
    S2C_TRAINING_REDEEM_LEARNING_TOKEN_RES: 2706,
    C2S_TRAINING_RECEIVE_CLASS_ABILITY_REQ: 2707,
    S2C_TRAINING_RECEIVE_CLASS_ABILITY_RES: 2708,
    C2S_TRAINING_REDEEM_REWARD_TOKEN_REQ: 2709,
    S2C_TRAINING_REDEEM_REWARD_TOKEN_RES: 2710,
    C2S_TRAINING_RECEIVE_REWARD_REQ: 2711,
    S2C_TRAINING_RECEIVE_REWARD_RES: 2712,
    C2S_CLASS_LEVEL_INFO_REQ: 3001,
    S2C_CLASS_LEVEL_INFO_RES: 3002,
    C2S_CLASS_EQUIP_INFO_REQ: 3031,
    S2C_CLASS_EQUIP_INFO_RES: 3032,
    C2S_CLASS_PERK_LIST_REQ: 3041,
    S2C_CLASS_PERK_LIST_RES: 3042,
    C2S_CLASS_SKILL_LIST_REQ: 3043,
    S2C_CLASS_SKILL_LIST_RES: 3044,
    C2S_CLASS_SPELL_LIST_REQ: 3045,
    S2C_CLASS_SPELL_LIST_RES: 3046,
    C2S_CLASS_MUSIC_LIST_REQ: 3047,
    S2C_CLASS_MUSIC_LIST_RES: 3048,
    C2S_CLASS_SHAPESHIFT_LIST_REQ: 3049,
    S2C_CLASS_SHAPESHIFT_LIST_RES: 3050,
    C2S_CLASS_ITEM_MOVE_REQ: 3071,
    S2C_CLASS_ITEM_MOVE_RES: 3072,
    C2S_CLASS_SPELL_SLOT_MOVE_REQ: 3073,
    S2C_CLASS_SPELL_SLOT_MOVE_RES: 3074,
    C2S_CLASS_SPELL_SEQUENCE_CHANGE_REQ: 3075,
    S2C_CLASS_SPELL_SEQUENCE_CHANGE_RES: 3076,
    C2S_CLASS_MUSIC_SLOT_MOVE_REQ: 3078,
    S2C_CLASS_MUSIC_SLOT_MOVE_RES: 3079,
    C2S_CLASS_MUSIC_SEQUENCE_CHANGE_REQ: 3080,
    S2C_CLASS_MUSIC_SEQUENCE_CHANGE_RES: 3081,
    C2S_CLASS_SHAPESHIFT_SLOT_MOVE_REQ: 3082,
    S2C_CLASS_SHAPESHIFT_SLOT_MOVE_RES: 3083,
    C2S_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_REQ: 3084,
    S2C_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_RES: 3085,
    MAX_CLASS_PACKET: 3199,
    MIN_GATHERING_HALL_PACKET: 3200,
    C2S_GATHERING_HALL_CHANNEL_LIST_REQ: 3201,
    S2C_GATHERING_HALL_CHANNEL_LIST_RES: 3202,
    C2S_GATHERING_HALL_CHANNEL_SELECT_REQ: 3203,
    S2C_GATHERING_HALL_CHANNEL_SELECT_RES: 3204,
    C2S_GATHERING_HALL_CHANNEL_EXIT_REQ: 3205,
    S2C_GATHERING_HALL_CHANNEL_EXIT_RES: 3206,
    C2S_GATHERING_HALL_CHANNEL_USER_LIST_REQ: 3207,
    S2C_GATHERING_HALL_CHANNEL_USER_LIST_RES: 3208,
    S2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT: 3209,
    C2S_GATHERING_HALL_CHANNEL_CHAT_REQ: 3220,
    S2C_GATHERING_HALL_CHANNEL_CHAT_RES: 3221,
    S2C_GATHERING_HALL_CHANNEL_CHAT_NOT: 3222,
    C2S_GATHERING_HALL_TARGET_EQUIPPED_ITEM_REQ: 3230,
    S2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RES: 3231,
    MAX_GATHERING_HALL_PACKET: 3300,
    MIN_MARKETPLACE_PACKET: 3500,
    C2S_MARKETPLACE_ITEM_LIST_REQ: 3511,
    S2C_MARKETPLACE_ITEM_LIST_RES: 3512,
    C2S_MARKETPLACE_MY_ITEM_LIST_REQ: 3513,
    S2C_MARKETPLACE_MY_ITEM_LIST_RES: 3514,
    C2S_MARKETPLACE_ITEM_BUY_REQ: 3531,
    S2C_MARKETPLACE_ITEM_BUY_RES: 3532,
    C2S_MARKETPLACE_ITEM_REGISTER_REQ: 3533,
    S2C_MARKETPLACE_ITEM_REGISTER_RES: 3534,
    C2S_MARKETPLACE_ITEM_CANCEL_REQ: 3535,
    S2C_MARKETPLACE_ITEM_CANCEL_RES: 3536,
    C2S_MARKETPLACE_TRANSFER_ITEMS_REQ: 3551,
    S2C_MARKETPLACE_TRANSFER_ITEMS_RES: 3552,
    S2C_MARKETPLACE_ITEM_HAS_SOLD_NOT: 3560,
    C2S_MARKETPLACE_ENTER_REQ: 3565,
    S2C_MARKETPLACE_ENTER_RES: 3566,
    MAX_MARKETPLACE_PACKET: 3700,
    MIN_RELIGION_PACKET: 3800,
    C2S_RELIGION_LIST_REQ: 3801,
    S2C_RELIGION_LIST_RES: 3802,
    C2S_RELIGION_RANKING_LIST_REQ: 3803,
    S2C_RELIGION_RANKING_LIST_RES: 3804,
    C2S_RELIGION_UPDATE_OFFERING_REQ: 3805,
    S2C_RELIGION_UPDATE_OFFERING_RES: 3806,
    C2S_RELIGION_KILL_COUNT_LIST_REQ: 3807,
    S2C_RELIGION_KILL_COUNT_LIST_RES: 3808,
    C2S_RELIGION_REGISTER_REQ: 3809,
    S2C_RELIGION_REGISTER_RES: 3810,
    C2S_RELIGION_PERSONAL_RANKING_REQ: 3811,
    S2C_RELIGION_PERSONAL_RANKING_RES: 3812,
    C2S_RELIGION_GET_SEASON_INFO_REQ: 3813,
    S2C_RELIGION_GET_SEASON_INFO_RES: 3814,
    MAX_RELIGION_PACKET: 3900,
    MIN_META_PACKET: 10000,
    C2S_META_LOCATION_REQ: 10001,
    S2C_META_LOCATION_RES: 10002,
    C2S_BLOCK_CHARACTER_REQ: 10010,
    S2C_BLOCK_CHARACTER_RES: 10011,
    C2S_UNBLOCK_CHARACTER_REQ: 10012,
    S2C_UNBLOCK_CHARACTER_RES: 10013,
    C2S_BLOCK_CHARACTER_LIST_REQ: 10014,
    S2C_BLOCK_CHARACTER_LIST_RES: 10015,
    S2C_LOBBY_COMPLETE_NOT: 10020,
    C2S_HACK_LOG_REQ: 10030,
    S2C_HACK_LOG_RES: 10031,
    C2S_CHAT_HACK_REPORT_REQ: 10040,
    S2C_CHAT_HACK_REPORT_RES: 10041,
    S2C_SERVICE_POLICY_NOT: 10050,
    C2S_RE_LOGIN_REQ: 10060,
    S2C_RE_LOGIN_RES: 10061,
    S2C_CLOSED_GAME_NOT: 10062,
    C2S_JOIN_LAST_GAME_REQ: 10063,
    S2C_JOIN_LAST_GAME_RES: 10064,
    S2C_LATENCY_CHECK_NOT: 10070,
    C2S_USER_CHARACTER_INFO_REQ: 10080,
    S2C_USER_CHARACTER_INFO_RES: 10081,
    S2C_ALL_MAP_MATCHMAKING_NOT: 10100,
    C2S_WHISPER_CHAT_REQ: 10120,
    S2C_WHISPER_CHAT_RES: 10121,
    S2C_WHISPER_CHAT_NOT: 10122,
    S2C_OPERATE_ANNOUNCE_NOT: 10500,
    S2C_ACCOUNT_STATUS_NOT: 10550,
    C2S_PLATFORM_LINK_CODE_GEN_REQ: 10601,
    S2C_PLATFORM_LINK_CODE_GEN_RES: 10602,
    C2S_PLATFORM_LINK_CODE_ACTIVE_REQ: 10603,
    S2C_PLATFORM_LINK_CODE_ACTIVE_RES: 10604,
    C2S_PLATFORM_LINK_INFO_LIST_REQ: 10605,
    S2C_PLATFORM_LINK_INFO_LIST_RES: 10606,
    C2S_PLATFORM_LINK_FAQ_URL_REQ: 10607,
    S2C_PLATFORM_LINK_FAQ_URL_RES: 10608,
    C2S_TWITCH_DROPS_CONNECT_REQ: 10621,
    S2C_TWITCH_DROPS_CONNECT_RES: 10622,
    S2C_TWITCH_DROPS_CONNECT_NOT: 10623,
    S2C_TWITCH_DROPS_LINKED_NOT: 10624,
    S2C_CLIENT_POPUP_MESSAGE_NOT: 10630,
    S2C_SQUIRE_STATUS_RESTRICTED_CONTENT_NOT: 10631,
    C2S_REFRESH_RED_STONE_SHARD_REQ: 10650,
    S2C_REFRESH_RED_STONE_SHARD_RES: 10651,
    S2C_TERMINATE_NOT: 10660,
    S2C_ARENA_SCHEDULE_NOT: 10670,
    C2S_DLC_INSTALLED_CHECK_REQ: 10680,
    S2C_DLC_INSTALLED_CHECK_RES: 10681,
    MAX_META_PACKET: 11000
} as const;
export const packetIdToNameMap = {
    0: "PACKET_NONE",
    1: "C2S_ALIVE_REQ",
    2: "S2C_ALIVE_RES",
    3: "C2S_RECONNECT_REQ",
    4: "S2C_RECONNECT_RES",
    5: "S2C_ALIVE_REVERSE_NOT",
    6: "C2S_ALIVE_REVERSE_REQ",
    7: "S2C_ALIVE_REVERSE_RES",
    11: "C2S_ACCOUNT_LOGIN_REQ",
    12: "S2C_ACCOUNT_LOGIN_RES",
    15: "C2S_ACCOUNT_CHARACTER_CREATE_REQ",
    16: "S2C_ACCOUNT_CHARACTER_CREATE_RES",
    17: "C2S_ACCOUNT_CHARACTER_LIST_REQ",
    18: "S2C_ACCOUNT_CHARACTER_LIST_RES",
    19: "C2S_ACCOUNT_CHARACTER_DELETE_REQ",
    20: "S2C_ACCOUNT_CHARACTER_DELETE_RES",
    21: "C2S_LOBBY_ENTER_REQ",
    22: "S2C_LOBBY_ENTER_RES",
    23: "C2S_ACCOUNT_AGREE_ANSWER_REQ",
    24: "S2C_ACCOUNT_AGREE_ANSWER_RES",
    25: "S2C_ACCOUNT_CHARACTER_CLASS_LIST_NOT",
    26: "C2S_USER_HW_INFO_REQ",
    27: "S2C_USER_HW_INFO_RES",
    41: "C2S_CHARACTER_SELECT_ENTER_REQ",
    42: "S2C_CHARACTER_SELECT_ENTER_RES",
    43: "C2S_LOBBY_CHARACTER_INFO_REQ",
    44: "S2C_LOBBY_CHARACTER_INFO_RES",
    45: "C2S_OPEN_LOBBY_MAP_REQ",
    46: "S2C_OPEN_LOBBY_MAP_RES",
    47: "C2S_LOBBY_REGION_SELECT_REQ",
    48: "S2C_LOBBY_REGION_SELECT_RES",
    49: "C2S_LOBBY_ENTER_FROM_GAME_REQ",
    50: "S2C_LOBBY_ENTER_FROM_GAME_RES",
    51: "C2S_LOBBY_GAME_TYPE_SELECT_REQ",
    52: "S2C_LOBBY_GAME_TYPE_SELECT_RES",
    53: "S2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT",
    54: "S2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOT",
    55: "S2C_LOBBY_REPORT_PUNISH_LIST_NOT",
    56: "C2S_USER_CHARACTER_GAME_STAT_INFO_REQ",
    57: "S2C_USER_CHARACTER_GAME_STAT_INFO_RES",
    58: "C2S_KNIGHT_PROGRAM_LINK_SELECT_REQ",
    59: "S2C_KNIGHT_PROGRAM_LINK_SELECT_RES",
    60: "S2C_FRIEND_ITEM_RECOVERED_NOT",
    61: "C2S_FRIEND_ITEM_RECOVERED_NOT_CHECK_REQ",
    62: "S2C_FRIEND_ITEM_RECOVERED_NOT_CHECK_RES",
    63: "C2S_LOBBY_RANDOM_MATCHMAKING_REQ",
    64: "S2C_LOBBY_RANDOM_MATCHMAKING_RES",
    65: "S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT",
    66: "C2S_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_REQ",
    67: "S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_RES",
    68: "S2C_DLC_LEGENDARY_STATUS_DUPLICATE_WARNING_NOT",
    69: "S2C_ARENA_STAT_NOT",
    500: "MIN_INVENTORY_PACKET",
    501: "C2S_INVENTORY_INFO_REQ",
    502: "S2C_INVENTORY_INFO_RES",
    503: "C2S_INVENTORY_ALL_UPDATE_REQ",
    504: "S2C_INVENTORY_ALL_UPDATE_RES",
    505: "C2S_INVENTORY_SINGLE_UPDATE_REQ",
    506: "S2C_INVENTORY_SINGLE_UPDATE_RES",
    507: "C2S_INVENTORY_MOVE_REQ",
    508: "S2C_INVENTORY_MOVE_RES",
    509: "C2S_INVENTORY_MERGE_REQ",
    510: "S2C_INVENTORY_MERGE_RES",
    511: "C2S_INVENTORY_SWAP_REQ",
    512: "S2C_INVENTORY_SWAP_RES",
    513: "C2S_INVENTORY_SPLIT_MOVE_REQ",
    514: "S2C_INVENTORY_SPLIT_MOVE_RES",
    515: "C2S_INVENTORY_SPLIT_MERGE_REQ",
    516: "S2C_INVENTORY_SPLIT_MERGE_RES",
    517: "C2S_INVENTORY_SPLIT_SWAP_REQ",
    518: "S2C_INVENTORY_SPLIT_SWAP_RES",
    519: "C2S_INVENTORY_TWO_HANDED_WEAPON_SWAP_REQ",
    520: "S2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RES",
    521: "C2S_INVENTORY_EXPAND_STORAGE_REQ",
    522: "S2C_INVENTORY_EXPAND_STORAGE_RES",
    551: "C2S_STORAGE_INFO_REQ",
    552: "S2C_STORAGE_INFO_RES",
    600: "MAX_INVENTORY_PACKET",
    751: "C2S_AUTO_MATCH_REG_REQ",
    752: "S2C_AUTO_MATCH_REG_RES",
    753: "S2C_ENTER_GAME_SERVER_NOT",
    754: "C2S_GAME_ENTER_COMPLETE_NOT",
    755: "S2C_AUTO_MATCH_REG_TEAM_NOT",
    756: "C2S_RECONNECT_INGAME_REQ",
    757: "S2C_RECONNECT_INGAME_RES",
    758: "S2C_GEAR_BASE_SCORE_LIST_NOT",
    759: "S2C_MATCH_POOL_REGISTERED_NOT",
    760: "S2C_MATCHMAKING_FAIL_NOT",
    800: "MIN_RANKING_PACKET",
    801: "C2S_RANKING_RANGE_REQ",
    802: "S2C_RANKING_RANGE_RES",
    805: "C2S_RANKING_CHARACTER_REQ",
    806: "S2C_RANKING_CHARACTER_RES",
    807: "C2S_RANKING_INFO_REQ",
    808: "S2C_RANKING_INFO_RES",
    809: "C2S_RANKING_AP_CONFIG_REQ",
    810: "S2C_RANKING_AP_CONFIG_RES",
    811: "S2C_RANKING_HAS_REWARD_NOT",
    812: "C2S_RANKING_REWARD_GET_REQ",
    813: "S2C_RANKING_REWARD_GET_RES",
    880: "MAX_RANKING_PACKET",
    900: "MIN_FRIEND_PACKET",
    901: "C2S_FRIEND_CHECK_ACCOUNTNICKNAME_REQ",
    902: "S2C_FRIEND_CHECK_ACCOUNTNICKNAME_RES",
    903: "C2S_FRIEND_CREATE_ACCOUNTNICKNAME_REQ",
    904: "S2C_FRIEND_CREATE_ACCOUNTNICKNAME_RES",
    905: "C2S_FRIEND_SET_STATUS_REQ",
    906: "S2C_FRIEND_SET_STATUS_RES",
    907: "C2S_FRIEND_SET_PRIVACY_REQ",
    908: "S2C_FRIEND_SET_PRIVACY_RES",
    909: "C2S_FRIEND_INVITE_REQ",
    910: "S2C_FRIEND_INVITE_RES",
    911: "C2S_FRIEND_INVITE_BY_ACCOUNTNICKNAME_REQ",
    912: "S2C_FRIEND_INVITE_BY_ACCOUNTNICKNAME_RES",
    913: "C2S_FRIEND_INVITE_ACCEPT_REQ",
    914: "S2C_FRIEND_INVITE_ACCEPT_RES",
    915: "C2S_FRIEND_INVITE_DECLINE_REQ",
    916: "S2C_FRIEND_INVITE_DECLINE_RES",
    917: "C2S_FRIEND_INVITE_CANCEL_REQ",
    918: "S2C_FRIEND_INVITE_CANCEL_RES",
    919: "C2S_FRIEND_DEL_FRIEND_REQ",
    920: "S2C_FRIEND_DEL_FRIEND_RES",
    921: "S2C_FRIEND_INFO_NOT",
    922: "S2C_FRIEND_SET_FRIEND_INFOS_NOT",
    923: "S2C_FRIEND_DEL_FRIEND_INFOS_NOT",
    924: "S2C_FRIEND_SET_ACCEPT_INFOS_NOT",
    925: "S2C_FRIEND_DEL_ACCEPT_INFOS_NOT",
    926: "S2C_FRIEND_SET_INVITE_INFOS_NOT",
    927: "S2C_FRIEND_DEL_INVITE_INFOS_NOT",
    928: "S2C_FRIEND_SET_STATUS_NOT",
    940: "C2S_FRIEND_LIST_REQ",
    941: "S2C_FRIEND_LIST_RES",
    942: "C2S_FRIEND_LIST_ALL_REQ",
    943: "S2C_FRIEND_LIST_ALL_RES",
    944: "C2S_FRIEND_FIND_REQ",
    945: "S2C_FRIEND_FIND_RES",
    950: "MAX_FRIEND_PACKET",
    1000: "MIN_PARTY_PACKET",
    1001: "C2S_PARTY_INVITE_REQ",
    1002: "S2C_PARTY_INVITE_RES",
    1003: "S2C_PARTY_INVITE_NOT",
    1004: "C2S_PARTY_INVITE_ANSWER_REQ",
    1005: "S2C_PARTY_INVITE_ANSWER_RES",
    1006: "S2C_PARTY_INVITE_ANSWER_RESULT_NOT",
    1007: "C2S_PARTY_EXIT_REQ",
    1008: "S2C_PARTY_EXIT_RES",
    1009: "S2C_PARTY_MEMBER_INFO_NOT",
    1010: "C2S_PARTY_READY_REQ",
    1011: "S2C_PARTY_READY_RES",
    1012: "S2C_PARTY_EQUIP_ITEM_CHANGE_NOT",
    1013: "S2C_PARTY_REGION_CHANGE_NOT",
    1014: "S2C_PARTY_LOCATION_UPDATE_NOT",
    1015: "S2C_PARTY_CHARACTER_SKIN_LIST_NOT",
    1016: "S2C_PARTY_CHARACTER_SKIN_CHANGE_NOT",
    1017: "S2C_PARTY_ITEM_SKIN_LIST_NOT",
    1018: "S2C_PARTY_ITEM_SKIN_CHANGE_NOT",
    1019: "S2C_PARTY_GAME_TYPE_CHANGE_NOT",
    1020: "C2S_PARTY_MEMBER_KICK_REQ",
    1021: "S2C_PARTY_MEMBER_KICK_RES",
    1022: "C2S_PARTY_CHAT_REQ",
    1023: "S2C_PARTY_CHAT_RES",
    1024: "S2C_PARTY_CHAT_NOT",
    1025: "S2C_PARTY_READY_CHANGE_NOT",
    1026: "S2C_PARTY_KICKED_OUT_NOT",
    1027: "S2C_PARTY_MEMBER_LOBBY_EMOTE_NOT",
    1028: "C2S_PARTY_START_LOBBY_EMOTE_REQ",
    1029: "S2C_PARTY_START_LOBBY_EMOTE_RES",
    1030: "S2C_PARTY_START_LOBBY_EMOTE_NOT",
    1031: "S2C_PARTY_ARMOR_SKIN_LIST_NOT",
    1032: "S2C_PARTY_ARMOR_SKIN_CHANGE_NOT",
    1033: "S2C_PARTY_GEAR_SCORE_CHANGE_NOT",
    1034: "S2C_PARTY_RANDOM_MATCHMAKING_NOT",
    1035: "S2C_PARTY_LAST_GAME_MEMBER_INFO_NOT",
    1150: "MAX_PARTY_PACKET",
    1200: "MIN_GM_PACKET",
    1201: "C2S_GM_PARTY_ALL_RANDOM_REQ",
    1202: "S2C_GM_PARTY_ALL_RANDOM_RES",
    1203: "C2S_GM_ENTER_GAME_SPECTATOR_REQ",
    1204: "S2C_GM_ENTER_GAME_SPECTATOR_RES",
    1205: "C2S_GM_TRADE_CHAT_BAN_REQ",
    1206: "S2C_GM_TRADE_CHAT_BAN_RES",
    1300: "MAX_GM_PACKET",
    1350: "MIN_MERCHANT_PACKET",
    1351: "C2S_MERCHANT_LIST_REQ",
    1352: "S2C_MERCHANT_LIST_RES",
    1353: "C2S_MERCHANT_STOCK_BUY_ITEM_LIST_REQ",
    1354: "S2C_MERCHANT_STOCK_BUY_ITEM_LIST_RES",
    1355: "C2S_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_REQ",
    1356: "S2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RES",
    1357: "C2S_MERCHANT_STOCK_BUY_REQ",
    1358: "S2C_MERCHANT_STOCK_BUY_RES",
    1359: "C2S_MERCHANT_STOCK_SELL_BACK_REQ",
    1360: "S2C_MERCHANT_STOCK_SELL_BACK_RES",
    1361: "C2S_MERCHANT_SERVICE_CRAFT_LIST_REQ",
    1362: "S2C_MERCHANT_SERVICE_CRAFT_LIST_RES",
    1363: "C2S_MERCHANT_SERVICE_CRAFT_REQ",
    1364: "S2C_MERCHANT_SERVICE_CRAFT_RES",
    1365: "C2S_MERCHANT_SERVICE_REPAIR_REQ",
    1366: "S2C_MERCHANT_SERVICE_REPAIR_RES",
    1367: "C2S_MERCHANT_SERVICE_MINDWIPE_INFO_REQ",
    1368: "S2C_MERCHANT_SERVICE_MINDWIPE_INFO_RES",
    1369: "C2S_MERCHANT_SERVICE_MINDWIPE_REQ",
    1370: "S2C_MERCHANT_SERVICE_MINDWIPE_RES",
    1371: "C2S_MERCHANT_RECOVERY_LIST_REQ",
    1372: "S2C_MERCHANT_RECOVERY_LIST_RES",
    1373: "C2S_MERCHANT_RECOVERY_BUY_REQ",
    1374: "S2C_MERCHANT_RECOVERY_BUY_RES",
    1375: "S2C_MERCHANT_RECOVERY_ITEM_CHECK_NOT",
    1376: "C2S_MERCHANT_RECOVERY_CHECK_REQ",
    1377: "S2C_MERCHANT_RECOVERY_CHECK_RES",
    1380: "C2S_MERCHANT_EXPRESS_LIST_REQ",
    1381: "S2C_MERCHANT_EXPRESS_LIST_RES",
    1382: "C2S_MERCHANT_EXPRESS_BUY_REQ",
    1383: "S2C_MERCHANT_EXPRESS_BUY_RES",
    1384: "S2C_MERCHANT_EXPRESS_ITEM_CHECK_NOT",
    1400: "C2S_MERCHANT_QUEST_LIST_INFO_REQ",
    1401: "S2C_MERCHANT_QUEST_LIST_INFO_RES",
    1402: "C2S_MERCHANT_QUEST_SELECT_REQ",
    1403: "S2C_MERCHANT_QUEST_SELECT_RES",
    1404: "C2S_MERCHANT_QUEST_COMPLETE_REQ",
    1405: "S2C_MERCHANT_QUEST_COMPLETE_RES",
    1406: "C2S_MERCHANT_QUEST_CONTENT_VALUE_STACK_REQ",
    1407: "S2C_MERCHANT_QUEST_CONTENT_VALUE_STACK_RES",
    1450: "C2S_MERCHANT_BASE_GEAR_LIST_REQ",
    1451: "S2C_MERCHANT_BASE_GEAR_LIST_RES",
    1452: "C2S_MERCHANT_BASE_GEAR_SET_REQ",
    1453: "S2C_MERCHANT_BASE_GEAR_SET_RES",
    1454: "C2S_MERCHANT_SAVE_BASE_GEAR_SET_REQ",
    1455: "S2C_MERCHANT_SAVE_BASE_GEAR_SET_RES",
    1456: "C2S_MERCHANT_EQUIP_BASE_GEAR_SET_REQ",
    1457: "S2C_MERCHANT_EQUIP_BASE_GEAR_SET_RES",
    1480: "C2S_MERCHANT_QUEST_LOG_LIST_REQ",
    1481: "S2C_MERCHANT_QUEST_LOG_LIST_RES",
    1482: "C2S_MERCHANT_QUEST_LOG_ACCEPT_ALL_REQ",
    1483: "S2C_MERCHANT_QUEST_LOG_ACCEPT_ALL_RES",
    1600: "MAX_MERCHANT_PACKET",
    1650: "MIN_KARMA_PACKET",
    1651: "C2S_KARMA_REPORT_LIST_REQ",
    1652: "S2C_KARMA_REPORT_LIST_RES",
    1653: "C2S_KARMA_REPORT_ACTION_REQ",
    1654: "S2C_KARMA_REPORT_ACTION_RES",
    1655: "S2C_KARMA_RATING_UPDATE_NOT",
    1700: "MAX_KARMA_PACKET",
    2000: "MIN_TRADE_PACKET",
    2001: "C2S_TRADE_CHANNEL_LIST_REQ",
    2002: "S2C_TRADE_CHANNEL_LIST_RES",
    2003: "C2S_TRADE_CHANNEL_SELECT_REQ",
    2004: "S2C_TRADE_CHANNEL_SELECT_RES",
    2005: "C2S_TRADE_CHANNEL_EXIT_REQ",
    2006: "S2C_TRADE_CHANNEL_EXIT_RES",
    2007: "C2S_TRADE_CHANNEL_USER_LIST_REQ",
    2008: "S2C_TRADE_CHANNEL_USER_LIST_RES",
    2009: "S2C_TRADE_CHANNEL_USER_UPDATE_NOT",
    2011: "C2S_TRADE_CHANNEL_CHAT_REQ",
    2012: "S2C_TRADE_CHANNEL_CHAT_RES",
    2013: "C2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ",
    2014: "S2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES",
    2030: "C2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ",
    2031: "S2C_TRADE_MEMBERSHIP_REQUIREMENT_RES",
    2032: "C2S_TRADE_MEMBERSHIP_REQ",
    2033: "S2C_TRADE_MEMBERSHIP_RES",
    2034: "C2S_TRADE_REQUEST_REQ",
    2035: "S2C_TRADE_REQUEST_RES",
    2036: "S2C_TRADE_REQUEST_NOT",
    2037: "C2S_TRADE_ANSWER_REQ",
    2038: "S2C_TRADE_ANSWER_RES",
    2039: "S2C_TRADE_ANSWER_REFUSAL_NOT",
    2050: "S2C_TRADING_BEGIN_NOT",
    2051: "C2S_TRADING_CLOSE_REQ",
    2052: "S2C_TRADING_CLOSE_RES",
    2053: "C2S_TRADING_CHAT_REQ",
    2054: "S2C_TRADING_CHAT_RES",
    2055: "C2S_TRADING_ITEM_UPDATE_REQ",
    2056: "S2C_TRADING_ITEM_UPDATE_RES",
    2057: "C2S_TRADING_READY_REQ",
    2058: "S2C_TRADING_READY_RES",
    2059: "S2C_TRADING_READY_NOT",
    2060: "S2C_TRADING_CONFIRM_NOT",
    2061: "C2S_TRADING_CONFIRM_READY_REQ",
    2062: "S2C_TRADING_CONFIRM_READY_RES",
    2063: "S2C_TRADING_CONFIRM_READY_NOT",
    2064: "C2S_TRADING_CONFIRM_CANCEL_REQ",
    2065: "S2C_TRADING_CONFIRM_CANCEL_RES",
    2066: "S2C_TRADING_RESULT_NOT",
    2300: "MAX_TRADE_PACKET",
    2330: "MIN_CUSTOMIZE_PACKET",
    2331: "C2S_CUSTOMIZE_NEW_ITEM_CHECK_REQ",
    2332: "S2C_CUSTOMIZE_NEW_ITEM_CHECK_RES",
    2333: "S2C_CUSTOMIZE_NEW_ITEM_ALERT_NOT",
    2341: "C2S_CUSTOMIZE_INFO_REQ",
    2342: "S2C_CUSTOMIZE_INFO_RES",
    2351: "C2S_CUSTOMIZE_MOUNT_REQ",
    2352: "S2C_CUSTOMIZE_MOUNT_RES",
    2353: "C2S_CUSTOMIZE_UNMOUNT_REQ",
    2354: "S2C_CUSTOMIZE_UNMOUNT_RES",
    2450: "MAX_CUSTOMIZE_PACKET",
    2501: "MIN_SHOP_PACKET",
    2502: "C2S_SHOP_ITEM_LIST_REQ",
    2503: "S2C_SHOP_ITEM_LIST_RES",
    2521: "C2S_SHOP_ITEM_BUY_REQ",
    2522: "S2C_SHOP_ITEM_BUY_RES",
    2550: "C2S_SHOP_ENTER_GIFT_CODE_REQ",
    2551: "S2C_SHOP_ENTER_GIFT_CODE_RES",
    2555: "C2S_SHOP_RED_STONE_SHARD_INFO_REQ",
    2556: "S2C_SHOP_RED_STONE_SHARD_INFO_RES",
    2557: "C2S_SHOP_RED_STONE_SHARD_BUY_REQ",
    2558: "S2C_SHOP_RED_STONE_SHARD_BUY_RES",
    2560: "C2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ",
    2561: "S2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES",
    2562: "C2S_SHOP_LEGEND_UPGRADE_REQ",
    2563: "S2C_SHOP_LEGEND_UPGRADE_RES",
    2564: "C2S_SHOP_CHANGE_ACCOUNT_NAME_REQ",
    2565: "S2C_SHOP_CHANGE_ACCOUNT_NAME_RES",
    2566: "C2S_SHOP_LEGEND_DLC_INSTALL_REQ",
    2567: "S2C_SHOP_LEGEND_DLC_INSTALL_RES",
    2568: "C2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ",
    2569: "S2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES",
    2570: "S2C_SHOP_ITEM_CHECK_NOT",
    2575: "S2C_SHOP_TWITCH_DROPS_REWARD_NOT",
    2600: "MAX_SHOP_PACKET",
    2700: "MIN_CLASS_PACKET",
    2701: "C2S_TRAINING_INFO_REQ",
    2702: "S2C_TRAINING_INFO_RES",
    2705: "C2S_TRAINING_REDEEM_LEARNING_TOKEN_REQ",
    2706: "S2C_TRAINING_REDEEM_LEARNING_TOKEN_RES",
    2707: "C2S_TRAINING_RECEIVE_CLASS_ABILITY_REQ",
    2708: "S2C_TRAINING_RECEIVE_CLASS_ABILITY_RES",
    2709: "C2S_TRAINING_REDEEM_REWARD_TOKEN_REQ",
    2710: "S2C_TRAINING_REDEEM_REWARD_TOKEN_RES",
    2711: "C2S_TRAINING_RECEIVE_REWARD_REQ",
    2712: "S2C_TRAINING_RECEIVE_REWARD_RES",
    3001: "C2S_CLASS_LEVEL_INFO_REQ",
    3002: "S2C_CLASS_LEVEL_INFO_RES",
    3031: "C2S_CLASS_EQUIP_INFO_REQ",
    3032: "S2C_CLASS_EQUIP_INFO_RES",
    3041: "C2S_CLASS_PERK_LIST_REQ",
    3042: "S2C_CLASS_PERK_LIST_RES",
    3043: "C2S_CLASS_SKILL_LIST_REQ",
    3044: "S2C_CLASS_SKILL_LIST_RES",
    3045: "C2S_CLASS_SPELL_LIST_REQ",
    3046: "S2C_CLASS_SPELL_LIST_RES",
    3047: "C2S_CLASS_MUSIC_LIST_REQ",
    3048: "S2C_CLASS_MUSIC_LIST_RES",
    3049: "C2S_CLASS_SHAPESHIFT_LIST_REQ",
    3050: "S2C_CLASS_SHAPESHIFT_LIST_RES",
    3071: "C2S_CLASS_ITEM_MOVE_REQ",
    3072: "S2C_CLASS_ITEM_MOVE_RES",
    3073: "C2S_CLASS_SPELL_SLOT_MOVE_REQ",
    3074: "S2C_CLASS_SPELL_SLOT_MOVE_RES",
    3075: "C2S_CLASS_SPELL_SEQUENCE_CHANGE_REQ",
    3076: "S2C_CLASS_SPELL_SEQUENCE_CHANGE_RES",
    3078: "C2S_CLASS_MUSIC_SLOT_MOVE_REQ",
    3079: "S2C_CLASS_MUSIC_SLOT_MOVE_RES",
    3080: "C2S_CLASS_MUSIC_SEQUENCE_CHANGE_REQ",
    3081: "S2C_CLASS_MUSIC_SEQUENCE_CHANGE_RES",
    3082: "C2S_CLASS_SHAPESHIFT_SLOT_MOVE_REQ",
    3083: "S2C_CLASS_SHAPESHIFT_SLOT_MOVE_RES",
    3084: "C2S_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_REQ",
    3085: "S2C_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_RES",
    3199: "MAX_CLASS_PACKET",
    3200: "MIN_GATHERING_HALL_PACKET",
    3201: "C2S_GATHERING_HALL_CHANNEL_LIST_REQ",
    3202: "S2C_GATHERING_HALL_CHANNEL_LIST_RES",
    3203: "C2S_GATHERING_HALL_CHANNEL_SELECT_REQ",
    3204: "S2C_GATHERING_HALL_CHANNEL_SELECT_RES",
    3205: "C2S_GATHERING_HALL_CHANNEL_EXIT_REQ",
    3206: "S2C_GATHERING_HALL_CHANNEL_EXIT_RES",
    3207: "C2S_GATHERING_HALL_CHANNEL_USER_LIST_REQ",
    3208: "S2C_GATHERING_HALL_CHANNEL_USER_LIST_RES",
    3209: "S2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT",
    3220: "C2S_GATHERING_HALL_CHANNEL_CHAT_REQ",
    3221: "S2C_GATHERING_HALL_CHANNEL_CHAT_RES",
    3222: "S2C_GATHERING_HALL_CHANNEL_CHAT_NOT",
    3230: "C2S_GATHERING_HALL_TARGET_EQUIPPED_ITEM_REQ",
    3231: "S2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RES",
    3300: "MAX_GATHERING_HALL_PACKET",
    3500: "MIN_MARKETPLACE_PACKET",
    3511: "C2S_MARKETPLACE_ITEM_LIST_REQ",
    3512: "S2C_MARKETPLACE_ITEM_LIST_RES",
    3513: "C2S_MARKETPLACE_MY_ITEM_LIST_REQ",
    3514: "S2C_MARKETPLACE_MY_ITEM_LIST_RES",
    3531: "C2S_MARKETPLACE_ITEM_BUY_REQ",
    3532: "S2C_MARKETPLACE_ITEM_BUY_RES",
    3533: "C2S_MARKETPLACE_ITEM_REGISTER_REQ",
    3534: "S2C_MARKETPLACE_ITEM_REGISTER_RES",
    3535: "C2S_MARKETPLACE_ITEM_CANCEL_REQ",
    3536: "S2C_MARKETPLACE_ITEM_CANCEL_RES",
    3551: "C2S_MARKETPLACE_TRANSFER_ITEMS_REQ",
    3552: "S2C_MARKETPLACE_TRANSFER_ITEMS_RES",
    3560: "S2C_MARKETPLACE_ITEM_HAS_SOLD_NOT",
    3565: "C2S_MARKETPLACE_ENTER_REQ",
    3566: "S2C_MARKETPLACE_ENTER_RES",
    3700: "MAX_MARKETPLACE_PACKET",
    3800: "MIN_RELIGION_PACKET",
    3801: "C2S_RELIGION_LIST_REQ",
    3802: "S2C_RELIGION_LIST_RES",
    3803: "C2S_RELIGION_RANKING_LIST_REQ",
    3804: "S2C_RELIGION_RANKING_LIST_RES",
    3805: "C2S_RELIGION_UPDATE_OFFERING_REQ",
    3806: "S2C_RELIGION_UPDATE_OFFERING_RES",
    3807: "C2S_RELIGION_KILL_COUNT_LIST_REQ",
    3808: "S2C_RELIGION_KILL_COUNT_LIST_RES",
    3809: "C2S_RELIGION_REGISTER_REQ",
    3810: "S2C_RELIGION_REGISTER_RES",
    3811: "C2S_RELIGION_PERSONAL_RANKING_REQ",
    3812: "S2C_RELIGION_PERSONAL_RANKING_RES",
    3813: "C2S_RELIGION_GET_SEASON_INFO_REQ",
    3814: "S2C_RELIGION_GET_SEASON_INFO_RES",
    3900: "MAX_RELIGION_PACKET",
    10000: "MIN_META_PACKET",
    10001: "C2S_META_LOCATION_REQ",
    10002: "S2C_META_LOCATION_RES",
    10010: "C2S_BLOCK_CHARACTER_REQ",
    10011: "S2C_BLOCK_CHARACTER_RES",
    10012: "C2S_UNBLOCK_CHARACTER_REQ",
    10013: "S2C_UNBLOCK_CHARACTER_RES",
    10014: "C2S_BLOCK_CHARACTER_LIST_REQ",
    10015: "S2C_BLOCK_CHARACTER_LIST_RES",
    10020: "S2C_LOBBY_COMPLETE_NOT",
    10030: "C2S_HACK_LOG_REQ",
    10031: "S2C_HACK_LOG_RES",
    10040: "C2S_CHAT_HACK_REPORT_REQ",
    10041: "S2C_CHAT_HACK_REPORT_RES",
    10050: "S2C_SERVICE_POLICY_NOT",
    10060: "C2S_RE_LOGIN_REQ",
    10061: "S2C_RE_LOGIN_RES",
    10062: "S2C_CLOSED_GAME_NOT",
    10063: "C2S_JOIN_LAST_GAME_REQ",
    10064: "S2C_JOIN_LAST_GAME_RES",
    10070: "S2C_LATENCY_CHECK_NOT",
    10080: "C2S_USER_CHARACTER_INFO_REQ",
    10081: "S2C_USER_CHARACTER_INFO_RES",
    10100: "S2C_ALL_MAP_MATCHMAKING_NOT",
    10120: "C2S_WHISPER_CHAT_REQ",
    10121: "S2C_WHISPER_CHAT_RES",
    10122: "S2C_WHISPER_CHAT_NOT",
    10500: "S2C_OPERATE_ANNOUNCE_NOT",
    10550: "S2C_ACCOUNT_STATUS_NOT",
    10601: "C2S_PLATFORM_LINK_CODE_GEN_REQ",
    10602: "S2C_PLATFORM_LINK_CODE_GEN_RES",
    10603: "C2S_PLATFORM_LINK_CODE_ACTIVE_REQ",
    10604: "S2C_PLATFORM_LINK_CODE_ACTIVE_RES",
    10605: "C2S_PLATFORM_LINK_INFO_LIST_REQ",
    10606: "S2C_PLATFORM_LINK_INFO_LIST_RES",
    10607: "C2S_PLATFORM_LINK_FAQ_URL_REQ",
    10608: "S2C_PLATFORM_LINK_FAQ_URL_RES",
    10621: "C2S_TWITCH_DROPS_CONNECT_REQ",
    10622: "S2C_TWITCH_DROPS_CONNECT_RES",
    10623: "S2C_TWITCH_DROPS_CONNECT_NOT",
    10624: "S2C_TWITCH_DROPS_LINKED_NOT",
    10630: "S2C_CLIENT_POPUP_MESSAGE_NOT",
    10631: "S2C_SQUIRE_STATUS_RESTRICTED_CONTENT_NOT",
    10650: "C2S_REFRESH_RED_STONE_SHARD_REQ",
    10651: "S2C_REFRESH_RED_STONE_SHARD_RES",
    10660: "S2C_TERMINATE_NOT",
    10670: "S2C_ARENA_SCHEDULE_NOT",
    10680: "C2S_DLC_INSTALLED_CHECK_REQ",
    10681: "S2C_DLC_INSTALLED_CHECK_RES",
    11000: "MAX_META_PACKET"
} as const;
export const packetNameToSchemaMap = {
    C2S_ACCOUNT_LOGIN_REQ: SC2S_ACCOUNT_LOGIN_REQSchema,
    S2C_ACCOUNT_LOGIN_RES: SS2C_ACCOUNT_LOGIN_RESSchema,
    C2S_ACCOUNT_CHARACTER_CREATE_REQ: SC2S_ACCOUNT_CHARACTER_CREATE_REQSchema,
    S2C_ACCOUNT_CHARACTER_CREATE_RES: SS2C_ACCOUNT_CHARACTER_CREATE_RESSchema,
    C2S_ACCOUNT_CHARACTER_LIST_REQ: SC2S_ACCOUNT_CHARACTER_LIST_REQSchema,
    S2C_ACCOUNT_CHARACTER_LIST_RES: SS2C_ACCOUNT_CHARACTER_LIST_RESSchema,
    C2S_ACCOUNT_CHARACTER_DELETE_REQ: SC2S_ACCOUNT_CHARACTER_DELETE_REQSchema,
    S2C_ACCOUNT_CHARACTER_DELETE_RES: SS2C_ACCOUNT_CHARACTER_DELETE_RESSchema,
    C2S_LOBBY_ENTER_REQ: SC2S_LOBBY_ENTER_REQSchema,
    S2C_LOBBY_ENTER_RES: SS2C_LOBBY_ENTER_RESSchema,
    C2S_ACCOUNT_AGREE_ANSWER_REQ: SC2S_ACCOUNT_AGREE_ANSWER_REQSchema,
    S2C_ACCOUNT_AGREE_ANSWER_RES: SS2C_ACCOUNT_AGREE_ANSWER_RESSchema,
    S2C_ACCOUNT_CHARACTER_CLASS_LIST_NOT: SS2C_ACCOUNT_CHARACTER_CLASS_LIST_NOTSchema,
    C2S_USER_HW_INFO_REQ: SC2S_USER_HW_INFO_REQSchema,
    S2C_USER_HW_INFO_RES: SS2C_USER_HW_INFO_RESSchema,
    C2S_TRAINING_INFO_REQ: SC2S_TRAINING_INFO_REQSchema,
    S2C_TRAINING_INFO_RES: SS2C_TRAINING_INFO_RESSchema,
    C2S_TRAINING_REDEEM_LEARNING_TOKEN_REQ: SC2S_TRAINING_REDEEM_LEARNING_TOKEN_REQSchema,
    S2C_TRAINING_REDEEM_LEARNING_TOKEN_RES: SS2C_TRAINING_REDEEM_LEARNING_TOKEN_RESSchema,
    C2S_TRAINING_RECEIVE_CLASS_ABILITY_REQ: SC2S_TRAINING_RECEIVE_CLASS_ABILITY_REQSchema,
    S2C_TRAINING_RECEIVE_CLASS_ABILITY_RES: SS2C_TRAINING_RECEIVE_CLASS_ABILITY_RESSchema,
    C2S_TRAINING_REDEEM_REWARD_TOKEN_REQ: SC2S_TRAINING_REDEEM_REWARD_TOKEN_REQSchema,
    S2C_TRAINING_REDEEM_REWARD_TOKEN_RES: SS2C_TRAINING_REDEEM_REWARD_TOKEN_RESSchema,
    C2S_TRAINING_RECEIVE_REWARD_REQ: SC2S_TRAINING_RECEIVE_REWARD_REQSchema,
    S2C_TRAINING_RECEIVE_REWARD_RES: SS2C_TRAINING_RECEIVE_REWARD_RESSchema,
    C2S_CLASS_LEVEL_INFO_REQ: SC2S_CLASS_LEVEL_INFO_REQSchema,
    S2C_CLASS_LEVEL_INFO_RES: SS2C_CLASS_LEVEL_INFO_RESSchema,
    C2S_CLASS_EQUIP_INFO_REQ: SC2S_CLASS_EQUIP_INFO_REQSchema,
    S2C_CLASS_EQUIP_INFO_RES: SS2C_CLASS_EQUIP_INFO_RESSchema,
    C2S_CLASS_PERK_LIST_REQ: SC2S_CLASS_PERK_LIST_REQSchema,
    S2C_CLASS_PERK_LIST_RES: SS2C_CLASS_PERK_LIST_RESSchema,
    C2S_CLASS_SKILL_LIST_REQ: SC2S_CLASS_SKILL_LIST_REQSchema,
    S2C_CLASS_SKILL_LIST_RES: SS2C_CLASS_SKILL_LIST_RESSchema,
    C2S_CLASS_SPELL_LIST_REQ: SC2S_CLASS_SPELL_LIST_REQSchema,
    S2C_CLASS_SPELL_LIST_RES: SS2C_CLASS_SPELL_LIST_RESSchema,
    C2S_CLASS_MUSIC_LIST_REQ: SC2S_CLASS_MUSIC_LIST_REQSchema,
    S2C_CLASS_MUSIC_LIST_RES: SS2C_CLASS_MUSIC_LIST_RESSchema,
    C2S_CLASS_SHAPESHIFT_LIST_REQ: SC2S_CLASS_SHAPESHIFT_LIST_REQSchema,
    S2C_CLASS_SHAPESHIFT_LIST_RES: SS2C_CLASS_SHAPESHIFT_LIST_RESSchema,
    C2S_CLASS_SPELL_SLOT_MOVE_REQ: SC2S_CLASS_SPELL_SLOT_MOVE_REQSchema,
    S2C_CLASS_SPELL_SLOT_MOVE_RES: SS2C_CLASS_SPELL_SLOT_MOVE_RESSchema,
    C2S_CLASS_SPELL_SEQUENCE_CHANGE_REQ: SC2S_CLASS_SPELL_SEQUENCE_CHANGE_REQSchema,
    S2C_CLASS_SPELL_SEQUENCE_CHANGE_RES: SS2C_CLASS_SPELL_SEQUENCE_CHANGE_RESSchema,
    C2S_CLASS_ITEM_MOVE_REQ: SC2S_CLASS_ITEM_MOVE_REQSchema,
    S2C_CLASS_ITEM_MOVE_RES: SS2C_CLASS_ITEM_MOVE_RESSchema,
    C2S_CLASS_MUSIC_SLOT_MOVE_REQ: SC2S_CLASS_MUSIC_SLOT_MOVE_REQSchema,
    S2C_CLASS_MUSIC_SLOT_MOVE_RES: SS2C_CLASS_MUSIC_SLOT_MOVE_RESSchema,
    C2S_CLASS_MUSIC_SEQUENCE_CHANGE_REQ: SC2S_CLASS_MUSIC_SEQUENCE_CHANGE_REQSchema,
    S2C_CLASS_MUSIC_SEQUENCE_CHANGE_RES: SS2C_CLASS_MUSIC_SEQUENCE_CHANGE_RESSchema,
    C2S_CLASS_SHAPESHIFT_SLOT_MOVE_REQ: SC2S_CLASS_SHAPESHIFT_SLOT_MOVE_REQSchema,
    S2C_CLASS_SHAPESHIFT_SLOT_MOVE_RES: SS2C_CLASS_SHAPESHIFT_SLOT_MOVE_RESSchema,
    C2S_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_REQ: SC2S_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_REQSchema,
    S2C_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_RES: SS2C_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_RESSchema,
    C2S_META_LOCATION_REQ: SC2S_META_LOCATION_REQSchema,
    S2C_META_LOCATION_RES: SS2C_META_LOCATION_RESSchema,
    C2S_BLOCK_CHARACTER_REQ: SC2S_BLOCK_CHARACTER_REQSchema,
    S2C_BLOCK_CHARACTER_RES: SS2C_BLOCK_CHARACTER_RESSchema,
    C2S_UNBLOCK_CHARACTER_REQ: SC2S_UNBLOCK_CHARACTER_REQSchema,
    S2C_UNBLOCK_CHARACTER_RES: SS2C_UNBLOCK_CHARACTER_RESSchema,
    C2S_BLOCK_CHARACTER_LIST_REQ: SC2S_BLOCK_CHARACTER_LIST_REQSchema,
    S2C_BLOCK_CHARACTER_LIST_RES: SS2C_BLOCK_CHARACTER_LIST_RESSchema,
    C2S_HACK_LOG_REQ: SC2S_HACK_LOG_REQSchema,
    S2C_HACK_LOG_RES: SS2C_HACK_LOG_RESSchema,
    S2C_OPERATE_ANNOUNCE_NOT: SS2C_OPERATE_ANNOUNCE_NOTSchema,
    S2C_SERVICE_POLICY_NOT: SS2C_SERVICE_POLICY_NOTSchema,
    C2S_RE_LOGIN_REQ: SC2S_RE_LOGIN_REQSchema,
    S2C_RE_LOGIN_RES: SS2C_RE_LOGIN_RESSchema,
    S2C_CLOSED_GAME_NOT: SS2C_CLOSED_GAME_NOTSchema,
    C2S_USER_CHARACTER_INFO_REQ: SC2S_USER_CHARACTER_INFO_REQSchema,
    S2C_USER_CHARACTER_INFO_RES: SS2C_USER_CHARACTER_INFO_RESSchema,
    C2S_GM_ENTER_GAME_SPECTATOR_REQ: SC2S_GM_ENTER_GAME_SPECTATOR_REQSchema,
    S2C_GM_ENTER_GAME_SPECTATOR_RES: SS2C_GM_ENTER_GAME_SPECTATOR_RESSchema,
    S2C_ALL_MAP_MATCHMAKING_NOT: SS2C_ALL_MAP_MATCHMAKING_NOTSchema,
    S2C_LATENCY_CHECK_NOT: SS2C_LATENCY_CHECK_NOTSchema,
    S2C_LOBBY_COMPLETE_NOT: SS2C_LOBBY_COMPLETE_NOTSchema,
    C2S_CHAT_HACK_REPORT_REQ: SC2S_CHAT_HACK_REPORT_REQSchema,
    S2C_CHAT_HACK_REPORT_RES: SS2C_CHAT_HACK_REPORT_RESSchema,
    C2S_JOIN_LAST_GAME_REQ: SC2S_JOIN_LAST_GAME_REQSchema,
    S2C_JOIN_LAST_GAME_RES: SS2C_JOIN_LAST_GAME_RESSchema,
    C2S_WHISPER_CHAT_REQ: SC2S_WHISPER_CHAT_REQSchema,
    S2C_WHISPER_CHAT_RES: SS2C_WHISPER_CHAT_RESSchema,
    S2C_WHISPER_CHAT_NOT: SS2C_WHISPER_CHAT_NOTSchema,
    S2C_ACCOUNT_STATUS_NOT: SS2C_ACCOUNT_STATUS_NOTSchema,
    C2S_PLATFORM_LINK_CODE_GEN_REQ: SC2S_PLATFORM_LINK_CODE_GEN_REQSchema,
    S2C_PLATFORM_LINK_CODE_GEN_RES: SS2C_PLATFORM_LINK_CODE_GEN_RESSchema,
    C2S_PLATFORM_LINK_CODE_ACTIVE_REQ: SC2S_PLATFORM_LINK_CODE_ACTIVE_REQSchema,
    S2C_PLATFORM_LINK_CODE_ACTIVE_RES: SS2C_PLATFORM_LINK_CODE_ACTIVE_RESSchema,
    C2S_PLATFORM_LINK_INFO_LIST_REQ: SC2S_PLATFORM_LINK_INFO_LIST_REQSchema,
    S2C_PLATFORM_LINK_INFO_LIST_RES: SS2C_PLATFORM_LINK_INFO_LIST_RESSchema,
    C2S_PLATFORM_LINK_FAQ_URL_REQ: SC2S_PLATFORM_LINK_FAQ_URL_REQSchema,
    S2C_PLATFORM_LINK_FAQ_URL_RES: SS2C_PLATFORM_LINK_FAQ_URL_RESSchema,
    S2C_CLIENT_POPUP_MESSAGE_NOT: SS2C_CLIENT_POPUP_MESSAGE_NOTSchema,
    C2S_TWITCH_DROPS_CONNECT_REQ: SC2S_TWITCH_DROPS_CONNECT_REQSchema,
    S2C_TWITCH_DROPS_CONNECT_RES: SS2C_TWITCH_DROPS_CONNECT_RESSchema,
    S2C_TWITCH_DROPS_CONNECT_NOT: SS2C_TWITCH_DROPS_CONNECT_NOTSchema,
    S2C_TWITCH_DROPS_LINKED_NOT: SS2C_TWITCH_DROPS_LINKED_NOTSchema,
    S2C_TERMINATE_NOT: SS2C_TERMINATE_NOTSchema,
    S2C_ARENA_SCHEDULE_NOT: SS2C_ARENA_SCHEDULE_NOTSchema,
    C2S_DLC_INSTALLED_CHECK_REQ: SC2S_DLC_INSTALLED_CHECK_REQSchema,
    S2C_DLC_INSTALLED_CHECK_RES: SS2C_DLC_INSTALLED_CHECK_RESSchema,
    C2S_CUSTOMIZE_INFO_REQ: SC2S_CUSTOMIZE_INFO_REQSchema,
    S2C_CUSTOMIZE_INFO_RES: SS2C_CUSTOMIZE_INFO_RESSchema,
    C2S_CUSTOMIZE_MOUNT_REQ: SC2S_CUSTOMIZE_MOUNT_REQSchema,
    S2C_CUSTOMIZE_MOUNT_RES: SS2C_CUSTOMIZE_MOUNT_RESSchema,
    C2S_CUSTOMIZE_UNMOUNT_REQ: SC2S_CUSTOMIZE_UNMOUNT_REQSchema,
    S2C_CUSTOMIZE_UNMOUNT_RES: SS2C_CUSTOMIZE_UNMOUNT_RESSchema,
    C2S_CUSTOMIZE_NEW_ITEM_CHECK_REQ: SC2S_CUSTOMIZE_NEW_ITEM_CHECK_REQSchema,
    S2C_CUSTOMIZE_NEW_ITEM_CHECK_RES: SS2C_CUSTOMIZE_NEW_ITEM_CHECK_RESSchema,
    S2C_CUSTOMIZE_NEW_ITEM_ALERT_NOT: SS2C_CUSTOMIZE_NEW_ITEM_ALERT_NOTSchema,
    C2S_FRIEND_CHECK_ACCOUNTNICKNAME_REQ: SC2S_FRIEND_CHECK_ACCOUNTNICKNAME_REQSchema,
    S2C_FRIEND_CHECK_ACCOUNTNICKNAME_RES: SS2C_FRIEND_CHECK_ACCOUNTNICKNAME_RESSchema,
    C2S_FRIEND_CREATE_ACCOUNTNICKNAME_REQ: SC2S_FRIEND_CREATE_ACCOUNTNICKNAME_REQSchema,
    S2C_FRIEND_CREATE_ACCOUNTNICKNAME_RES: SS2C_FRIEND_CREATE_ACCOUNTNICKNAME_RESSchema,
    C2S_FRIEND_SET_STATUS_REQ: SC2S_FRIEND_SET_STATUS_REQSchema,
    S2C_FRIEND_SET_STATUS_RES: SS2C_FRIEND_SET_STATUS_RESSchema,
    C2S_FRIEND_SET_PRIVACY_REQ: SC2S_FRIEND_SET_PRIVACY_REQSchema,
    S2C_FRIEND_SET_PRIVACY_RES: SS2C_FRIEND_SET_PRIVACY_RESSchema,
    C2S_FRIEND_INVITE_REQ: SC2S_FRIEND_INVITE_REQSchema,
    S2C_FRIEND_INVITE_RES: SS2C_FRIEND_INVITE_RESSchema,
    C2S_FRIEND_INVITE_BY_ACCOUNTNICKNAME_REQ: SC2S_FRIEND_INVITE_BY_ACCOUNTNICKNAME_REQSchema,
    S2C_FRIEND_INVITE_BY_ACCOUNTNICKNAME_RES: SS2C_FRIEND_INVITE_BY_ACCOUNTNICKNAME_RESSchema,
    C2S_FRIEND_INVITE_ACCEPT_REQ: SC2S_FRIEND_INVITE_ACCEPT_REQSchema,
    S2C_FRIEND_INVITE_ACCEPT_RES: SS2C_FRIEND_INVITE_ACCEPT_RESSchema,
    C2S_FRIEND_INVITE_DECLINE_REQ: SC2S_FRIEND_INVITE_DECLINE_REQSchema,
    S2C_FRIEND_INVITE_DECLINE_RES: SS2C_FRIEND_INVITE_DECLINE_RESSchema,
    C2S_FRIEND_INVITE_CANCEL_REQ: SC2S_FRIEND_INVITE_CANCEL_REQSchema,
    S2C_FRIEND_INVITE_CANCEL_RES: SS2C_FRIEND_INVITE_CANCEL_RESSchema,
    C2S_FRIEND_DEL_FRIEND_REQ: SC2S_FRIEND_DEL_FRIEND_REQSchema,
    S2C_FRIEND_DEL_FRIEND_RES: SS2C_FRIEND_DEL_FRIEND_RESSchema,
    S2C_FRIEND_INFO_NOT: SS2C_FRIEND_INFO_NOTSchema,
    S2C_FRIEND_SET_FRIEND_INFOS_NOT: SS2C_FRIEND_SET_FRIEND_INFOS_NOTSchema,
    S2C_FRIEND_DEL_FRIEND_INFOS_NOT: SS2C_FRIEND_DEL_FRIEND_INFOS_NOTSchema,
    S2C_FRIEND_SET_ACCEPT_INFOS_NOT: SS2C_FRIEND_SET_ACCEPT_INFOS_NOTSchema,
    S2C_FRIEND_DEL_ACCEPT_INFOS_NOT: SS2C_FRIEND_DEL_ACCEPT_INFOS_NOTSchema,
    S2C_FRIEND_SET_INVITE_INFOS_NOT: SS2C_FRIEND_SET_INVITE_INFOS_NOTSchema,
    S2C_FRIEND_DEL_INVITE_INFOS_NOT: SS2C_FRIEND_DEL_INVITE_INFOS_NOTSchema,
    S2C_FRIEND_SET_STATUS_NOT: SS2C_FRIEND_SET_STATUS_NOTSchema,
    C2S_FRIEND_LIST_REQ: SC2S_FRIEND_LIST_REQSchema,
    S2C_FRIEND_LIST_RES: SS2C_FRIEND_LIST_RESSchema,
    C2S_FRIEND_LIST_ALL_REQ: SC2S_FRIEND_LIST_ALL_REQSchema,
    S2C_FRIEND_LIST_ALL_RES: SS2C_FRIEND_LIST_ALL_RESSchema,
    C2S_FRIEND_FIND_REQ: SC2S_FRIEND_FIND_REQSchema,
    S2C_FRIEND_FIND_RES: SS2C_FRIEND_FIND_RESSchema,
    C2S_GATHERING_HALL_CHANNEL_LIST_REQ: SC2S_GATHERING_HALL_CHANNEL_LIST_REQSchema,
    S2C_GATHERING_HALL_CHANNEL_LIST_RES: SS2C_GATHERING_HALL_CHANNEL_LIST_RESSchema,
    C2S_GATHERING_HALL_CHANNEL_SELECT_REQ: SC2S_GATHERING_HALL_CHANNEL_SELECT_REQSchema,
    S2C_GATHERING_HALL_CHANNEL_SELECT_RES: SS2C_GATHERING_HALL_CHANNEL_SELECT_RESSchema,
    C2S_GATHERING_HALL_CHANNEL_EXIT_REQ: SC2S_GATHERING_HALL_CHANNEL_EXIT_REQSchema,
    S2C_GATHERING_HALL_CHANNEL_EXIT_RES: SS2C_GATHERING_HALL_CHANNEL_EXIT_RESSchema,
    C2S_GATHERING_HALL_CHANNEL_USER_LIST_REQ: SC2S_GATHERING_HALL_CHANNEL_USER_LIST_REQSchema,
    S2C_GATHERING_HALL_CHANNEL_USER_LIST_RES: SS2C_GATHERING_HALL_CHANNEL_USER_LIST_RESSchema,
    S2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT: SS2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOTSchema,
    C2S_GATHERING_HALL_CHANNEL_CHAT_REQ: SC2S_GATHERING_HALL_CHANNEL_CHAT_REQSchema,
    S2C_GATHERING_HALL_CHANNEL_CHAT_RES: SS2C_GATHERING_HALL_CHANNEL_CHAT_RESSchema,
    S2C_GATHERING_HALL_CHANNEL_CHAT_NOT: SS2C_GATHERING_HALL_CHANNEL_CHAT_NOTSchema,
    C2S_GATHERING_HALL_TARGET_EQUIPPED_ITEM_REQ: SC2S_GATHERING_HALL_TARGET_EQUIPPED_ITEM_REQSchema,
    S2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RES: SS2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RESSchema,
    C2S_GM_PARTY_ALL_RANDOM_REQ: SC2S_GM_PARTY_ALL_RANDOM_REQSchema,
    S2C_GM_PARTY_ALL_RANDOM_RES: SS2C_GM_PARTY_ALL_RANDOM_RESSchema,
    S2C_ENTER_GAME_SERVER_NOT: SS2C_ENTER_GAME_SERVER_NOTSchema,
    C2S_AUTO_MATCH_REG_REQ: SC2S_AUTO_MATCH_REG_REQSchema,
    S2C_AUTO_MATCH_REG_RES: SS2C_AUTO_MATCH_REG_RESSchema,
    C2S_GAME_ENTER_COMPLETE_NOT: SC2S_GAME_ENTER_COMPLETE_NOTSchema,
    S2C_AUTO_MATCH_REG_TEAM_NOT: SS2C_AUTO_MATCH_REG_TEAM_NOTSchema,
    C2S_RECONNECT_INGAME_REQ: SC2S_RECONNECT_INGAME_REQSchema,
    S2C_RECONNECT_INGAME_RES: SS2C_RECONNECT_INGAME_RESSchema,
    S2C_GEAR_BASE_SCORE_LIST_NOT: SS2C_GEAR_BASE_SCORE_LIST_NOTSchema,
    S2C_MATCH_POOL_REGISTERED_NOT: SS2C_MATCH_POOL_REGISTERED_NOTSchema,
    S2C_MATCHMAKING_FAIL_NOT: SS2C_MATCHMAKING_FAIL_NOTSchema,
    C2S_INVENTORY_INFO_REQ: SC2S_INVENTORY_INFO_REQSchema,
    S2C_INVENTORY_INFO_RES: SS2C_INVENTORY_INFO_RESSchema,
    C2S_INVENTORY_ALL_UPDATE_REQ: SC2S_INVENTORY_ALL_UPDATE_REQSchema,
    S2C_INVENTORY_ALL_UPDATE_RES: SS2C_INVENTORY_ALL_UPDATE_RESSchema,
    C2S_INVENTORY_MOVE_REQ: SC2S_INVENTORY_MOVE_REQSchema,
    S2C_INVENTORY_MOVE_RES: SS2C_INVENTORY_MOVE_RESSchema,
    C2S_INVENTORY_MERGE_REQ: SC2S_INVENTORY_MERGE_REQSchema,
    S2C_INVENTORY_MERGE_RES: SS2C_INVENTORY_MERGE_RESSchema,
    C2S_INVENTORY_SWAP_REQ: SC2S_INVENTORY_SWAP_REQSchema,
    S2C_INVENTORY_SWAP_RES: SS2C_INVENTORY_SWAP_RESSchema,
    C2S_INVENTORY_SPLIT_MOVE_REQ: SC2S_INVENTORY_SPLIT_MOVE_REQSchema,
    S2C_INVENTORY_SPLIT_MOVE_RES: SS2C_INVENTORY_SPLIT_MOVE_RESSchema,
    C2S_INVENTORY_SPLIT_MERGE_REQ: SC2S_INVENTORY_SPLIT_MERGE_REQSchema,
    S2C_INVENTORY_SPLIT_MERGE_RES: SS2C_INVENTORY_SPLIT_MERGE_RESSchema,
    C2S_INVENTORY_SPLIT_SWAP_REQ: SC2S_INVENTORY_SPLIT_SWAP_REQSchema,
    S2C_INVENTORY_SPLIT_SWAP_RES: SS2C_INVENTORY_SPLIT_SWAP_RESSchema,
    C2S_INVENTORY_TWO_HANDED_WEAPON_SWAP_REQ: SC2S_INVENTORY_TWO_HANDED_WEAPON_SWAP_REQSchema,
    S2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RES: SS2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RESSchema,
    C2S_INVENTORY_SINGLE_UPDATE_REQ: SC2S_INVENTORY_SINGLE_UPDATE_REQSchema,
    S2C_INVENTORY_SINGLE_UPDATE_RES: SS2C_INVENTORY_SINGLE_UPDATE_RESSchema,
    C2S_STORAGE_INFO_REQ: SC2S_STORAGE_INFO_REQSchema,
    S2C_STORAGE_INFO_RES: SS2C_STORAGE_INFO_RESSchema,
    C2S_INVENTORY_EXPAND_STORAGE_REQ: SC2S_INVENTORY_EXPAND_STORAGE_REQSchema,
    S2C_INVENTORY_EXPAND_STORAGE_RES: SS2C_INVENTORY_EXPAND_STORAGE_RESSchema,
    C2S_CHARACTER_SELECT_ENTER_REQ: SC2S_CHARACTER_SELECT_ENTER_REQSchema,
    S2C_CHARACTER_SELECT_ENTER_RES: SS2C_CHARACTER_SELECT_ENTER_RESSchema,
    C2S_LOBBY_CHARACTER_INFO_REQ: SC2S_LOBBY_CHARACTER_INFO_REQSchema,
    S2C_LOBBY_CHARACTER_INFO_RES: SS2C_LOBBY_CHARACTER_INFO_RESSchema,
    C2S_OPEN_LOBBY_MAP_REQ: SC2S_OPEN_LOBBY_MAP_REQSchema,
    S2C_OPEN_LOBBY_MAP_RES: SS2C_OPEN_LOBBY_MAP_RESSchema,
    C2S_LOBBY_REGION_SELECT_REQ: SC2S_LOBBY_REGION_SELECT_REQSchema,
    S2C_LOBBY_REGION_SELECT_RES: SS2C_LOBBY_REGION_SELECT_RESSchema,
    C2S_LOBBY_ENTER_FROM_GAME_REQ: SC2S_LOBBY_ENTER_FROM_GAME_REQSchema,
    S2C_LOBBY_ENTER_FROM_GAME_RES: SS2C_LOBBY_ENTER_FROM_GAME_RESSchema,
    C2S_LOBBY_GAME_TYPE_SELECT_REQ: SC2S_LOBBY_GAME_TYPE_SELECT_REQSchema,
    S2C_LOBBY_GAME_TYPE_SELECT_RES: SS2C_LOBBY_GAME_TYPE_SELECT_RESSchema,
    S2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT: SS2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOTSchema,
    S2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOT: SS2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOTSchema,
    S2C_LOBBY_REPORT_PUNISH_LIST_NOT: SS2C_LOBBY_REPORT_PUNISH_LIST_NOTSchema,
    C2S_USER_CHARACTER_GAME_STAT_INFO_REQ: SC2S_USER_CHARACTER_GAME_STAT_INFO_REQSchema,
    S2C_USER_CHARACTER_GAME_STAT_INFO_RES: SS2C_USER_CHARACTER_GAME_STAT_INFO_RESSchema,
    C2S_KNIGHT_PROGRAM_LINK_SELECT_REQ: SC2S_KNIGHT_PROGRAM_LINK_SELECT_REQSchema,
    S2C_KNIGHT_PROGRAM_LINK_SELECT_RES: SS2C_KNIGHT_PROGRAM_LINK_SELECT_RESSchema,
    C2S_GM_TRADE_CHAT_BAN_REQ: SC2S_GM_TRADE_CHAT_BAN_REQSchema,
    S2C_GM_TRADE_CHAT_BAN_RES: SS2C_GM_TRADE_CHAT_BAN_RESSchema,
    S2C_FRIEND_ITEM_RECOVERED_NOT: SS2C_FRIEND_ITEM_RECOVERED_NOTSchema,
    S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT: SS2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOTSchema,
    C2S_FRIEND_ITEM_RECOVERED_NOT_CHECK_REQ: SC2S_FRIEND_ITEM_RECOVERED_NOT_CHECK_REQSchema,
    S2C_FRIEND_ITEM_RECOVERED_NOT_CHECK_RES: SS2C_FRIEND_ITEM_RECOVERED_NOT_CHECK_RESSchema,
    C2S_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_REQ: SC2S_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_REQSchema,
    S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_RES: SS2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_RESSchema,
    C2S_LOBBY_RANDOM_MATCHMAKING_REQ: SC2S_LOBBY_RANDOM_MATCHMAKING_REQSchema,
    S2C_LOBBY_RANDOM_MATCHMAKING_RES: SS2C_LOBBY_RANDOM_MATCHMAKING_RESSchema,
    S2C_DLC_LEGENDARY_STATUS_DUPLICATE_WARNING_NOT: SS2C_DLC_LEGENDARY_STATUS_DUPLICATE_WARNING_NOTSchema,
    S2C_ARENA_STAT_NOT: SS2C_ARENA_STAT_NOTSchema,
    C2S_MARKETPLACE_ITEM_LIST_REQ: SC2S_MARKETPLACE_ITEM_LIST_REQSchema,
    S2C_MARKETPLACE_ITEM_LIST_RES: SS2C_MARKETPLACE_ITEM_LIST_RESSchema,
    C2S_MARKETPLACE_MY_ITEM_LIST_REQ: SC2S_MARKETPLACE_MY_ITEM_LIST_REQSchema,
    S2C_MARKETPLACE_MY_ITEM_LIST_RES: SS2C_MARKETPLACE_MY_ITEM_LIST_RESSchema,
    C2S_MARKETPLACE_ITEM_BUY_REQ: SC2S_MARKETPLACE_ITEM_BUY_REQSchema,
    S2C_MARKETPLACE_ITEM_BUY_RES: SS2C_MARKETPLACE_ITEM_BUY_RESSchema,
    C2S_MARKETPLACE_ITEM_REGISTER_REQ: SC2S_MARKETPLACE_ITEM_REGISTER_REQSchema,
    S2C_MARKETPLACE_ITEM_REGISTER_RES: SS2C_MARKETPLACE_ITEM_REGISTER_RESSchema,
    C2S_MARKETPLACE_ITEM_CANCEL_REQ: SC2S_MARKETPLACE_ITEM_CANCEL_REQSchema,
    S2C_MARKETPLACE_ITEM_CANCEL_RES: SS2C_MARKETPLACE_ITEM_CANCEL_RESSchema,
    C2S_MARKETPLACE_TRANSFER_ITEMS_REQ: SC2S_MARKETPLACE_TRANSFER_ITEMS_REQSchema,
    S2C_MARKETPLACE_TRANSFER_ITEMS_RES: SS2C_MARKETPLACE_TRANSFER_ITEMS_RESSchema,
    S2C_MARKETPLACE_ITEM_HAS_SOLD_NOT: SS2C_MARKETPLACE_ITEM_HAS_SOLD_NOTSchema,
    C2S_MARKETPLACE_ENTER_REQ: SC2S_MARKETPLACE_ENTER_REQSchema,
    S2C_MARKETPLACE_ENTER_RES: SS2C_MARKETPLACE_ENTER_RESSchema,
    C2S_MERCHANT_LIST_REQ: SC2S_MERCHANT_LIST_REQSchema,
    S2C_MERCHANT_LIST_RES: SS2C_MERCHANT_LIST_RESSchema,
    C2S_MERCHANT_STOCK_BUY_ITEM_LIST_REQ: SC2S_MERCHANT_STOCK_BUY_ITEM_LIST_REQSchema,
    S2C_MERCHANT_STOCK_BUY_ITEM_LIST_RES: SS2C_MERCHANT_STOCK_BUY_ITEM_LIST_RESSchema,
    C2S_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_REQ: SC2S_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_REQSchema,
    S2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RES: SS2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RESSchema,
    C2S_MERCHANT_STOCK_BUY_REQ: SC2S_MERCHANT_STOCK_BUY_REQSchema,
    S2C_MERCHANT_STOCK_BUY_RES: SS2C_MERCHANT_STOCK_BUY_RESSchema,
    C2S_MERCHANT_STOCK_SELL_BACK_REQ: SC2S_MERCHANT_STOCK_SELL_BACK_REQSchema,
    S2C_MERCHANT_STOCK_SELL_BACK_RES: SS2C_MERCHANT_STOCK_SELL_BACK_RESSchema,
    C2S_MERCHANT_SERVICE_CRAFT_LIST_REQ: SC2S_MERCHANT_SERVICE_CRAFT_LIST_REQSchema,
    S2C_MERCHANT_SERVICE_CRAFT_LIST_RES: SS2C_MERCHANT_SERVICE_CRAFT_LIST_RESSchema,
    C2S_MERCHANT_SERVICE_CRAFT_REQ: SC2S_MERCHANT_SERVICE_CRAFT_REQSchema,
    S2C_MERCHANT_SERVICE_CRAFT_RES: SS2C_MERCHANT_SERVICE_CRAFT_RESSchema,
    C2S_MERCHANT_QUEST_LIST_INFO_REQ: SC2S_MERCHANT_QUEST_LIST_INFO_REQSchema,
    S2C_MERCHANT_QUEST_LIST_INFO_RES: SS2C_MERCHANT_QUEST_LIST_INFO_RESSchema,
    C2S_MERCHANT_QUEST_SELECT_REQ: SC2S_MERCHANT_QUEST_SELECT_REQSchema,
    S2C_MERCHANT_QUEST_SELECT_RES: SS2C_MERCHANT_QUEST_SELECT_RESSchema,
    C2S_MERCHANT_QUEST_COMPLETE_REQ: SC2S_MERCHANT_QUEST_COMPLETE_REQSchema,
    S2C_MERCHANT_QUEST_COMPLETE_RES: SS2C_MERCHANT_QUEST_COMPLETE_RESSchema,
    C2S_MERCHANT_QUEST_CONTENT_VALUE_STACK_REQ: SC2S_MERCHANT_QUEST_CONTENT_VALUE_STACK_REQSchema,
    S2C_MERCHANT_QUEST_CONTENT_VALUE_STACK_RES: SS2C_MERCHANT_QUEST_CONTENT_VALUE_STACK_RESSchema,
    C2S_MERCHANT_BASE_GEAR_LIST_REQ: SC2S_MERCHANT_BASE_GEAR_LIST_REQSchema,
    S2C_MERCHANT_BASE_GEAR_LIST_RES: SS2C_MERCHANT_BASE_GEAR_LIST_RESSchema,
    C2S_MERCHANT_BASE_GEAR_SET_REQ: SC2S_MERCHANT_BASE_GEAR_SET_REQSchema,
    S2C_MERCHANT_BASE_GEAR_SET_RES: SS2C_MERCHANT_BASE_GEAR_SET_RESSchema,
    C2S_MERCHANT_SAVE_BASE_GEAR_SET_REQ: SC2S_MERCHANT_SAVE_BASE_GEAR_SET_REQSchema,
    S2C_MERCHANT_SAVE_BASE_GEAR_SET_RES: SS2C_MERCHANT_SAVE_BASE_GEAR_SET_RESSchema,
    C2S_MERCHANT_EQUIP_BASE_GEAR_SET_REQ: SC2S_MERCHANT_EQUIP_BASE_GEAR_SET_REQSchema,
    S2C_MERCHANT_EQUIP_BASE_GEAR_SET_RES: SS2C_MERCHANT_EQUIP_BASE_GEAR_SET_RESSchema,
    C2S_MERCHANT_SERVICE_MINDWIPE_INFO_REQ: SC2S_MERCHANT_SERVICE_MINDWIPE_INFO_REQSchema,
    S2C_MERCHANT_SERVICE_MINDWIPE_INFO_RES: SS2C_MERCHANT_SERVICE_MINDWIPE_INFO_RESSchema,
    C2S_MERCHANT_SERVICE_MINDWIPE_REQ: SC2S_MERCHANT_SERVICE_MINDWIPE_REQSchema,
    S2C_MERCHANT_SERVICE_MINDWIPE_RES: SS2C_MERCHANT_SERVICE_MINDWIPE_RESSchema,
    C2S_MERCHANT_RECOVERY_LIST_REQ: SC2S_MERCHANT_RECOVERY_LIST_REQSchema,
    S2C_MERCHANT_RECOVERY_LIST_RES: SS2C_MERCHANT_RECOVERY_LIST_RESSchema,
    C2S_MERCHANT_RECOVERY_BUY_REQ: SC2S_MERCHANT_RECOVERY_BUY_REQSchema,
    S2C_MERCHANT_RECOVERY_BUY_RES: SS2C_MERCHANT_RECOVERY_BUY_RESSchema,
    C2S_MERCHANT_QUEST_LOG_LIST_REQ: SC2S_MERCHANT_QUEST_LOG_LIST_REQSchema,
    S2C_MERCHANT_QUEST_LOG_LIST_RES: SS2C_MERCHANT_QUEST_LOG_LIST_RESSchema,
    C2S_MERCHANT_QUEST_LOG_ACCEPT_ALL_REQ: SC2S_MERCHANT_QUEST_LOG_ACCEPT_ALL_REQSchema,
    S2C_MERCHANT_QUEST_LOG_ACCEPT_ALL_RES: SS2C_MERCHANT_QUEST_LOG_ACCEPT_ALL_RESSchema,
    S2C_MERCHANT_RECOVERY_ITEM_CHECK_NOT: SS2C_MERCHANT_RECOVERY_ITEM_CHECK_NOTSchema,
    C2S_MERCHANT_RECOVERY_CHECK_REQ: SC2S_MERCHANT_RECOVERY_CHECK_REQSchema,
    S2C_MERCHANT_RECOVERY_CHECK_RES: SS2C_MERCHANT_RECOVERY_CHECK_RESSchema,
    C2S_MERCHANT_EXPRESS_LIST_REQ: SC2S_MERCHANT_EXPRESS_LIST_REQSchema,
    S2C_MERCHANT_EXPRESS_LIST_RES: SS2C_MERCHANT_EXPRESS_LIST_RESSchema,
    C2S_MERCHANT_EXPRESS_BUY_REQ: SC2S_MERCHANT_EXPRESS_BUY_REQSchema,
    S2C_MERCHANT_EXPRESS_BUY_RES: SS2C_MERCHANT_EXPRESS_BUY_RESSchema,
    S2C_MERCHANT_EXPRESS_ITEM_CHECK_NOT: SS2C_MERCHANT_EXPRESS_ITEM_CHECK_NOTSchema,
    C2S_PARTY_INVITE_REQ: SC2S_PARTY_INVITE_REQSchema,
    S2C_PARTY_INVITE_RES: SS2C_PARTY_INVITE_RESSchema,
    S2C_PARTY_INVITE_NOT: SS2C_PARTY_INVITE_NOTSchema,
    C2S_PARTY_INVITE_ANSWER_REQ: SC2S_PARTY_INVITE_ANSWER_REQSchema,
    S2C_PARTY_INVITE_ANSWER_RES: SS2C_PARTY_INVITE_ANSWER_RESSchema,
    S2C_PARTY_INVITE_ANSWER_RESULT_NOT: SS2C_PARTY_INVITE_ANSWER_RESULT_NOTSchema,
    C2S_PARTY_EXIT_REQ: SC2S_PARTY_EXIT_REQSchema,
    S2C_PARTY_EXIT_RES: SS2C_PARTY_EXIT_RESSchema,
    S2C_PARTY_MEMBER_INFO_NOT: SS2C_PARTY_MEMBER_INFO_NOTSchema,
    C2S_PARTY_READY_REQ: SC2S_PARTY_READY_REQSchema,
    S2C_PARTY_READY_RES: SS2C_PARTY_READY_RESSchema,
    S2C_PARTY_EQUIP_ITEM_CHANGE_NOT: SS2C_PARTY_EQUIP_ITEM_CHANGE_NOTSchema,
    S2C_PARTY_REGION_CHANGE_NOT: SS2C_PARTY_REGION_CHANGE_NOTSchema,
    S2C_PARTY_LOCATION_UPDATE_NOT: SS2C_PARTY_LOCATION_UPDATE_NOTSchema,
    S2C_PARTY_CHARACTER_SKIN_LIST_NOT: SS2C_PARTY_CHARACTER_SKIN_LIST_NOTSchema,
    S2C_PARTY_CHARACTER_SKIN_CHANGE_NOT: SS2C_PARTY_CHARACTER_SKIN_CHANGE_NOTSchema,
    S2C_PARTY_ITEM_SKIN_LIST_NOT: SS2C_PARTY_ITEM_SKIN_LIST_NOTSchema,
    S2C_PARTY_ITEM_SKIN_CHANGE_NOT: SS2C_PARTY_ITEM_SKIN_CHANGE_NOTSchema,
    S2C_PARTY_ARMOR_SKIN_LIST_NOT: SS2C_PARTY_ARMOR_SKIN_LIST_NOTSchema,
    S2C_PARTY_ARMOR_SKIN_CHANGE_NOT: SS2C_PARTY_ARMOR_SKIN_CHANGE_NOTSchema,
    S2C_PARTY_GAME_TYPE_CHANGE_NOT: SS2C_PARTY_GAME_TYPE_CHANGE_NOTSchema,
    C2S_PARTY_MEMBER_KICK_REQ: SC2S_PARTY_MEMBER_KICK_REQSchema,
    S2C_PARTY_MEMBER_KICK_RES: SS2C_PARTY_MEMBER_KICK_RESSchema,
    C2S_PARTY_CHAT_REQ: SC2S_PARTY_CHAT_REQSchema,
    S2C_PARTY_CHAT_RES: SS2C_PARTY_CHAT_RESSchema,
    S2C_PARTY_CHAT_NOT: SS2C_PARTY_CHAT_NOTSchema,
    S2C_PARTY_READY_CHANGE_NOT: SS2C_PARTY_READY_CHANGE_NOTSchema,
    S2C_PARTY_KICKED_OUT_NOT: SS2C_PARTY_KICKED_OUT_NOTSchema,
    S2C_PARTY_MEMBER_LOBBY_EMOTE_NOT: SS2C_PARTY_MEMBER_LOBBY_EMOTE_NOTSchema,
    C2S_PARTY_START_LOBBY_EMOTE_REQ: SC2S_PARTY_START_LOBBY_EMOTE_REQSchema,
    S2C_PARTY_START_LOBBY_EMOTE_RES: SS2C_PARTY_START_LOBBY_EMOTE_RESSchema,
    S2C_PARTY_START_LOBBY_EMOTE_NOT: SS2C_PARTY_START_LOBBY_EMOTE_NOTSchema,
    S2C_PARTY_GEAR_SCORE_CHANGE_NOT: SS2C_PARTY_GEAR_SCORE_CHANGE_NOTSchema,
    S2C_PARTY_RANDOM_MATCHMAKING_NOT: SS2C_PARTY_RANDOM_MATCHMAKING_NOTSchema,
    S2C_PARTY_LAST_GAME_MEMBER_INFO_NOT: SS2C_PARTY_LAST_GAME_MEMBER_INFO_NOTSchema,
    C2S_RANKING_INFO_REQ: SC2S_RANKING_INFO_REQSchema,
    S2C_RANKING_INFO_RES: SS2C_RANKING_INFO_RESSchema,
    C2S_RANKING_RANGE_REQ: SC2S_RANKING_RANGE_REQSchema,
    S2C_RANKING_RANGE_RES: SS2C_RANKING_RANGE_RESSchema,
    C2S_RANKING_CHARACTER_REQ: SC2S_RANKING_CHARACTER_REQSchema,
    C2S_RANKING_REWARD_GET_REQ: SC2S_RANKING_REWARD_GET_REQSchema,
    S2C_RANKING_REWARD_GET_RES: SS2C_RANKING_REWARD_GET_RESSchema,
    S2C_RANKING_CHARACTER_RES: SS2C_RANKING_CHARACTER_RESSchema,
    C2S_RANKING_AP_CONFIG_REQ: SC2S_RANKING_AP_CONFIG_REQSchema,
    S2C_RANKING_AP_CONFIG_RES: SS2C_RANKING_AP_CONFIG_RESSchema,
    S2C_RANKING_HAS_REWARD_NOT: SS2C_RANKING_HAS_REWARD_NOTSchema,
    C2S_RELIGION_LIST_REQ: SC2S_RELIGION_LIST_REQSchema,
    S2C_RELIGION_LIST_RES: SS2C_RELIGION_LIST_RESSchema,
    C2S_RELIGION_RANKING_LIST_REQ: SC2S_RELIGION_RANKING_LIST_REQSchema,
    S2C_RELIGION_RANKING_LIST_RES: SS2C_RELIGION_RANKING_LIST_RESSchema,
    C2S_RELIGION_PERSONAL_RANKING_REQ: SC2S_RELIGION_PERSONAL_RANKING_REQSchema,
    S2C_RELIGION_PERSONAL_RANKING_RES: SS2C_RELIGION_PERSONAL_RANKING_RESSchema,
    C2S_RELIGION_UPDATE_OFFERING_REQ: SC2S_RELIGION_UPDATE_OFFERING_REQSchema,
    S2C_RELIGION_UPDATE_OFFERING_RES: SS2C_RELIGION_UPDATE_OFFERING_RESSchema,
    C2S_RELIGION_KILL_COUNT_LIST_REQ: SC2S_RELIGION_KILL_COUNT_LIST_REQSchema,
    S2C_RELIGION_KILL_COUNT_LIST_RES: SS2C_RELIGION_KILL_COUNT_LIST_RESSchema,
    C2S_RELIGION_REGISTER_REQ: SC2S_RELIGION_REGISTER_REQSchema,
    S2C_RELIGION_REGISTER_RES: SS2C_RELIGION_REGISTER_RESSchema,
    C2S_RELIGION_GET_SEASON_INFO_REQ: SC2S_RELIGION_GET_SEASON_INFO_REQSchema,
    S2C_RELIGION_GET_SEASON_INFO_RES: SS2C_RELIGION_GET_SEASON_INFO_RESSchema,
    C2S_SHOP_ITEM_LIST_REQ: SC2S_SHOP_ITEM_LIST_REQSchema,
    S2C_SHOP_ITEM_LIST_RES: SS2C_SHOP_ITEM_LIST_RESSchema,
    C2S_SHOP_ITEM_BUY_REQ: SC2S_SHOP_ITEM_BUY_REQSchema,
    S2C_SHOP_ITEM_BUY_RES: SS2C_SHOP_ITEM_BUY_RESSchema,
    C2S_SHOP_ENTER_GIFT_CODE_REQ: SC2S_SHOP_ENTER_GIFT_CODE_REQSchema,
    S2C_SHOP_ENTER_GIFT_CODE_RES: SS2C_SHOP_ENTER_GIFT_CODE_RESSchema,
    C2S_SHOP_RED_STONE_SHARD_INFO_REQ: SC2S_SHOP_RED_STONE_SHARD_INFO_REQSchema,
    S2C_SHOP_RED_STONE_SHARD_INFO_RES: SS2C_SHOP_RED_STONE_SHARD_INFO_RESSchema,
    C2S_SHOP_RED_STONE_SHARD_BUY_REQ: SC2S_SHOP_RED_STONE_SHARD_BUY_REQSchema,
    S2C_SHOP_RED_STONE_SHARD_BUY_RES: SS2C_SHOP_RED_STONE_SHARD_BUY_RESSchema,
    C2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ: SC2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQSchema,
    S2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES: SS2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RESSchema,
    C2S_SHOP_LEGEND_UPGRADE_REQ: SC2S_SHOP_LEGEND_UPGRADE_REQSchema,
    S2C_SHOP_LEGEND_UPGRADE_RES: SS2C_SHOP_LEGEND_UPGRADE_RESSchema,
    C2S_REFRESH_RED_STONE_SHARD_REQ: SC2S_REFRESH_RED_STONE_SHARD_REQSchema,
    S2C_REFRESH_RED_STONE_SHARD_RES: SS2C_REFRESH_RED_STONE_SHARD_RESSchema,
    C2S_SHOP_CHANGE_ACCOUNT_NAME_REQ: SC2S_SHOP_CHANGE_ACCOUNT_NAME_REQSchema,
    S2C_SHOP_CHANGE_ACCOUNT_NAME_RES: SS2C_SHOP_CHANGE_ACCOUNT_NAME_RESSchema,
    S2C_SHOP_ITEM_CHECK_NOT: SS2C_SHOP_ITEM_CHECK_NOTSchema,
    C2S_SHOP_LEGEND_DLC_INSTALL_REQ: SC2S_SHOP_LEGEND_DLC_INSTALL_REQSchema,
    S2C_SHOP_LEGEND_DLC_INSTALL_RES: SS2C_SHOP_LEGEND_DLC_INSTALL_RESSchema,
    C2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ: SC2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQSchema,
    S2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES: SS2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RESSchema,
    S2C_SHOP_TWITCH_DROPS_REWARD_NOT: SS2C_SHOP_TWITCH_DROPS_REWARD_NOTSchema,
    C2S_TRADE_CHANNEL_LIST_REQ: SC2S_TRADE_CHANNEL_LIST_REQSchema,
    S2C_TRADE_CHANNEL_LIST_RES: SS2C_TRADE_CHANNEL_LIST_RESSchema,
    C2S_TRADE_CHANNEL_SELECT_REQ: SC2S_TRADE_CHANNEL_SELECT_REQSchema,
    S2C_TRADE_CHANNEL_SELECT_RES: SS2C_TRADE_CHANNEL_SELECT_RESSchema,
    C2S_TRADE_CHANNEL_EXIT_REQ: SC2S_TRADE_CHANNEL_EXIT_REQSchema,
    S2C_TRADE_CHANNEL_EXIT_RES: SS2C_TRADE_CHANNEL_EXIT_RESSchema,
    C2S_TRADE_CHANNEL_USER_LIST_REQ: SC2S_TRADE_CHANNEL_USER_LIST_REQSchema,
    S2C_TRADE_CHANNEL_USER_LIST_RES: SS2C_TRADE_CHANNEL_USER_LIST_RESSchema,
    S2C_TRADE_CHANNEL_USER_UPDATE_NOT: SS2C_TRADE_CHANNEL_USER_UPDATE_NOTSchema,
    C2S_TRADE_CHANNEL_CHAT_REQ: SC2S_TRADE_CHANNEL_CHAT_REQSchema,
    S2C_TRADE_CHANNEL_CHAT_RES: SS2C_TRADE_CHANNEL_CHAT_RESSchema,
    C2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ: SC2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQSchema,
    S2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES: SS2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RESSchema,
    C2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ: SC2S_TRADE_MEMBERSHIP_REQUIREMENT_REQSchema,
    S2C_TRADE_MEMBERSHIP_REQUIREMENT_RES: SS2C_TRADE_MEMBERSHIP_REQUIREMENT_RESSchema,
    C2S_TRADE_MEMBERSHIP_REQ: SC2S_TRADE_MEMBERSHIP_REQSchema,
    S2C_TRADE_MEMBERSHIP_RES: SS2C_TRADE_MEMBERSHIP_RESSchema,
    C2S_TRADE_REQUEST_REQ: SC2S_TRADE_REQUEST_REQSchema,
    S2C_TRADE_REQUEST_RES: SS2C_TRADE_REQUEST_RESSchema,
    S2C_TRADE_REQUEST_NOT: SS2C_TRADE_REQUEST_NOTSchema,
    C2S_TRADE_ANSWER_REQ: SC2S_TRADE_ANSWER_REQSchema,
    S2C_TRADE_ANSWER_RES: SS2C_TRADE_ANSWER_RESSchema,
    S2C_TRADE_ANSWER_REFUSAL_NOT: SS2C_TRADE_ANSWER_REFUSAL_NOTSchema,
    S2C_TRADING_BEGIN_NOT: SS2C_TRADING_BEGIN_NOTSchema,
    C2S_TRADING_CLOSE_REQ: SC2S_TRADING_CLOSE_REQSchema,
    S2C_TRADING_CLOSE_RES: SS2C_TRADING_CLOSE_RESSchema,
    C2S_TRADING_CHAT_REQ: SC2S_TRADING_CHAT_REQSchema,
    S2C_TRADING_CHAT_RES: SS2C_TRADING_CHAT_RESSchema,
    C2S_TRADING_ITEM_UPDATE_REQ: SC2S_TRADING_ITEM_UPDATE_REQSchema,
    S2C_TRADING_ITEM_UPDATE_RES: SS2C_TRADING_ITEM_UPDATE_RESSchema,
    C2S_TRADING_READY_REQ: SC2S_TRADING_READY_REQSchema,
    S2C_TRADING_READY_RES: SS2C_TRADING_READY_RESSchema,
    S2C_TRADING_READY_NOT: SS2C_TRADING_READY_NOTSchema,
    S2C_TRADING_CONFIRM_NOT: SS2C_TRADING_CONFIRM_NOTSchema,
    C2S_TRADING_CONFIRM_READY_REQ: SC2S_TRADING_CONFIRM_READY_REQSchema,
    S2C_TRADING_CONFIRM_READY_RES: SS2C_TRADING_CONFIRM_READY_RESSchema,
    S2C_TRADING_CONFIRM_READY_NOT: SS2C_TRADING_CONFIRM_READY_NOTSchema,
    C2S_TRADING_CONFIRM_CANCEL_REQ: SC2S_TRADING_CONFIRM_CANCEL_REQSchema,
    S2C_TRADING_CONFIRM_CANCEL_RES: SS2C_TRADING_CONFIRM_CANCEL_RESSchema,
    S2C_TRADING_RESULT_NOT: SS2C_TRADING_RESULT_NOTSchema,
    C2S_ALIVE_REQ: SC2S_ALIVE_REQSchema,
    S2C_ALIVE_RES: SS2C_ALIVE_RESSchema,
    C2S_RECONNECT_REQ: SC2S_RECONNECT_REQSchema,
    S2C_RECONNECT_RES: SS2C_RECONNECT_RESSchema,
    S2C_ALIVE_REVERSE_NOT: SS2C_ALIVE_REVERSE_NOTSchema,
    C2S_ALIVE_REVERSE_REQ: SC2S_ALIVE_REVERSE_REQSchema,
    S2C_ALIVE_REVERSE_RES: SS2C_ALIVE_REVERSE_RESSchema
} as const;

export interface PacketPayloads {
    C2S_ACCOUNT_LOGIN_REQ: AccountLoginReq;
    S2C_ACCOUNT_LOGIN_RES: AccountLoginRes;
    C2S_ACCOUNT_CHARACTER_CREATE_REQ: AccountCharacterCreateReq;
    S2C_ACCOUNT_CHARACTER_CREATE_RES: AccountCharacterCreateRes;
    C2S_ACCOUNT_CHARACTER_LIST_REQ: AccountCharacterListReq;
    S2C_ACCOUNT_CHARACTER_LIST_RES: AccountCharacterListRes;
    C2S_ACCOUNT_CHARACTER_DELETE_REQ: AccountCharacterDeleteReq;
    S2C_ACCOUNT_CHARACTER_DELETE_RES: AccountCharacterDeleteRes;
    C2S_LOBBY_ENTER_REQ: LobbyEnterReq;
    S2C_LOBBY_ENTER_RES: LobbyEnterRes;
    C2S_ACCOUNT_AGREE_ANSWER_REQ: AccountAgreeAnswerReq;
    S2C_ACCOUNT_AGREE_ANSWER_RES: AccountAgreeAnswerRes;
    S2C_ACCOUNT_CHARACTER_CLASS_LIST_NOT: AccountCharacterClassListNot;
    C2S_USER_HW_INFO_REQ: UserHwInfoReq;
    S2C_USER_HW_INFO_RES: UserHwInfoRes;
    C2S_TRAINING_INFO_REQ: TrainingInfoReq;
    S2C_TRAINING_INFO_RES: TrainingInfoRes;
    C2S_TRAINING_REDEEM_LEARNING_TOKEN_REQ: TrainingRedeemLearningTokenReq;
    S2C_TRAINING_REDEEM_LEARNING_TOKEN_RES: TrainingRedeemLearningTokenRes;
    C2S_TRAINING_RECEIVE_CLASS_ABILITY_REQ: TrainingReceiveClassAbilityReq;
    S2C_TRAINING_RECEIVE_CLASS_ABILITY_RES: TrainingReceiveClassAbilityRes;
    C2S_TRAINING_REDEEM_REWARD_TOKEN_REQ: TrainingRedeemRewardTokenReq;
    S2C_TRAINING_REDEEM_REWARD_TOKEN_RES: TrainingRedeemRewardTokenRes;
    C2S_TRAINING_RECEIVE_REWARD_REQ: TrainingReceiveRewardReq;
    S2C_TRAINING_RECEIVE_REWARD_RES: TrainingReceiveRewardRes;
    C2S_CLASS_LEVEL_INFO_REQ: ClassLevelInfoReq;
    S2C_CLASS_LEVEL_INFO_RES: ClassLevelInfoRes;
    C2S_CLASS_EQUIP_INFO_REQ: ClassEquipInfoReq;
    S2C_CLASS_EQUIP_INFO_RES: ClassEquipInfoRes;
    C2S_CLASS_PERK_LIST_REQ: ClassPerkListReq;
    S2C_CLASS_PERK_LIST_RES: ClassPerkListRes;
    C2S_CLASS_SKILL_LIST_REQ: ClassSkillListReq;
    S2C_CLASS_SKILL_LIST_RES: ClassSkillListRes;
    C2S_CLASS_SPELL_LIST_REQ: ClassSpellListReq;
    S2C_CLASS_SPELL_LIST_RES: ClassSpellListRes;
    C2S_CLASS_MUSIC_LIST_REQ: ClassMusicListReq;
    S2C_CLASS_MUSIC_LIST_RES: ClassMusicListRes;
    C2S_CLASS_SHAPESHIFT_LIST_REQ: ClassShapeshiftListReq;
    S2C_CLASS_SHAPESHIFT_LIST_RES: ClassShapeshiftListRes;
    C2S_CLASS_SPELL_SLOT_MOVE_REQ: ClassSpellSlotMoveReq;
    S2C_CLASS_SPELL_SLOT_MOVE_RES: ClassSpellSlotMoveRes;
    C2S_CLASS_SPELL_SEQUENCE_CHANGE_REQ: ClassSpellSequenceChangeReq;
    S2C_CLASS_SPELL_SEQUENCE_CHANGE_RES: ClassSpellSequenceChangeRes;
    C2S_CLASS_ITEM_MOVE_REQ: ClassItemMoveReq;
    S2C_CLASS_ITEM_MOVE_RES: ClassItemMoveRes;
    C2S_CLASS_MUSIC_SLOT_MOVE_REQ: ClassMusicSlotMoveReq;
    S2C_CLASS_MUSIC_SLOT_MOVE_RES: ClassMusicSlotMoveRes;
    C2S_CLASS_MUSIC_SEQUENCE_CHANGE_REQ: ClassMusicSequenceChangeReq;
    S2C_CLASS_MUSIC_SEQUENCE_CHANGE_RES: ClassMusicSequenceChangeRes;
    C2S_CLASS_SHAPESHIFT_SLOT_MOVE_REQ: ClassShapeshiftSlotMoveReq;
    S2C_CLASS_SHAPESHIFT_SLOT_MOVE_RES: ClassShapeshiftSlotMoveRes;
    C2S_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_REQ: ClassShapeshiftSequenceChangeReq;
    S2C_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_RES: ClassShapeshiftSequenceChangeRes;
    C2S_META_LOCATION_REQ: MetaLocationReq;
    S2C_META_LOCATION_RES: MetaLocationRes;
    C2S_BLOCK_CHARACTER_REQ: BlockCharacterReq;
    S2C_BLOCK_CHARACTER_RES: BlockCharacterRes;
    C2S_UNBLOCK_CHARACTER_REQ: UnblockCharacterReq;
    S2C_UNBLOCK_CHARACTER_RES: UnblockCharacterRes;
    C2S_BLOCK_CHARACTER_LIST_REQ: BlockCharacterListReq;
    S2C_BLOCK_CHARACTER_LIST_RES: BlockCharacterListRes;
    C2S_HACK_LOG_REQ: HackLogReq;
    S2C_HACK_LOG_RES: HackLogRes;
    S2C_OPERATE_ANNOUNCE_NOT: OperateAnnounceNot;
    S2C_SERVICE_POLICY_NOT: ServicePolicyNot;
    C2S_RE_LOGIN_REQ: ReLoginReq;
    S2C_RE_LOGIN_RES: ReLoginRes;
    S2C_CLOSED_GAME_NOT: ClosedGameNot;
    C2S_USER_CHARACTER_INFO_REQ: UserCharacterInfoReq;
    S2C_USER_CHARACTER_INFO_RES: UserCharacterInfoRes;
    C2S_GM_ENTER_GAME_SPECTATOR_REQ: GmEnterGameSpectatorReq;
    S2C_GM_ENTER_GAME_SPECTATOR_RES: GmEnterGameSpectatorRes;
    S2C_ALL_MAP_MATCHMAKING_NOT: AllMapMatchmakingNot;
    S2C_LATENCY_CHECK_NOT: LatencyCheckNot;
    S2C_LOBBY_COMPLETE_NOT: LobbyCompleteNot;
    C2S_CHAT_HACK_REPORT_REQ: ChatHackReportReq;
    S2C_CHAT_HACK_REPORT_RES: ChatHackReportRes;
    C2S_JOIN_LAST_GAME_REQ: JoinLastGameReq;
    S2C_JOIN_LAST_GAME_RES: JoinLastGameRes;
    C2S_WHISPER_CHAT_REQ: WhisperChatReq;
    S2C_WHISPER_CHAT_RES: WhisperChatRes;
    S2C_WHISPER_CHAT_NOT: WhisperChatNot;
    S2C_ACCOUNT_STATUS_NOT: AccountStatusNot;
    C2S_PLATFORM_LINK_CODE_GEN_REQ: PlatformLinkCodeGenReq;
    S2C_PLATFORM_LINK_CODE_GEN_RES: PlatformLinkCodeGenRes;
    C2S_PLATFORM_LINK_CODE_ACTIVE_REQ: PlatformLinkCodeActiveReq;
    S2C_PLATFORM_LINK_CODE_ACTIVE_RES: PlatformLinkCodeActiveRes;
    C2S_PLATFORM_LINK_INFO_LIST_REQ: PlatformLinkInfoListReq;
    S2C_PLATFORM_LINK_INFO_LIST_RES: PlatformLinkInfoListRes;
    C2S_PLATFORM_LINK_FAQ_URL_REQ: PlatformLinkFaqUrlReq;
    S2C_PLATFORM_LINK_FAQ_URL_RES: PlatformLinkFaqUrlRes;
    S2C_CLIENT_POPUP_MESSAGE_NOT: ClientPopupMessageNot;
    C2S_TWITCH_DROPS_CONNECT_REQ: TwitchDropsConnectReq;
    S2C_TWITCH_DROPS_CONNECT_RES: TwitchDropsConnectRes;
    S2C_TWITCH_DROPS_CONNECT_NOT: TwitchDropsConnectNot;
    S2C_TWITCH_DROPS_LINKED_NOT: TwitchDropsLinkedNot;
    S2C_TERMINATE_NOT: TerminateNot;
    S2C_ARENA_SCHEDULE_NOT: ArenaScheduleNot;
    C2S_DLC_INSTALLED_CHECK_REQ: DlcInstalledCheckReq;
    S2C_DLC_INSTALLED_CHECK_RES: DlcInstalledCheckRes;
    C2S_CUSTOMIZE_INFO_REQ: CustomizeInfoReq;
    S2C_CUSTOMIZE_INFO_RES: CustomizeInfoRes;
    C2S_CUSTOMIZE_MOUNT_REQ: CustomizeMountReq;
    S2C_CUSTOMIZE_MOUNT_RES: CustomizeMountRes;
    C2S_CUSTOMIZE_UNMOUNT_REQ: CustomizeUnmountReq;
    S2C_CUSTOMIZE_UNMOUNT_RES: CustomizeUnmountRes;
    C2S_CUSTOMIZE_NEW_ITEM_CHECK_REQ: CustomizeNewItemCheckReq;
    S2C_CUSTOMIZE_NEW_ITEM_CHECK_RES: CustomizeNewItemCheckRes;
    S2C_CUSTOMIZE_NEW_ITEM_ALERT_NOT: CustomizeNewItemAlertNot;
    C2S_FRIEND_CHECK_ACCOUNTNICKNAME_REQ: FriendCheckAccountnicknameReq;
    S2C_FRIEND_CHECK_ACCOUNTNICKNAME_RES: FriendCheckAccountnicknameRes;
    C2S_FRIEND_CREATE_ACCOUNTNICKNAME_REQ: FriendCreateAccountnicknameReq;
    S2C_FRIEND_CREATE_ACCOUNTNICKNAME_RES: FriendCreateAccountnicknameRes;
    C2S_FRIEND_SET_STATUS_REQ: FriendSetStatusReq;
    S2C_FRIEND_SET_STATUS_RES: FriendSetStatusRes;
    C2S_FRIEND_SET_PRIVACY_REQ: FriendSetPrivacyReq;
    S2C_FRIEND_SET_PRIVACY_RES: FriendSetPrivacyRes;
    C2S_FRIEND_INVITE_REQ: FriendInviteReq;
    S2C_FRIEND_INVITE_RES: FriendInviteRes;
    C2S_FRIEND_INVITE_BY_ACCOUNTNICKNAME_REQ: FriendInviteByAccountnicknameReq;
    S2C_FRIEND_INVITE_BY_ACCOUNTNICKNAME_RES: FriendInviteByAccountnicknameRes;
    C2S_FRIEND_INVITE_ACCEPT_REQ: FriendInviteAcceptReq;
    S2C_FRIEND_INVITE_ACCEPT_RES: FriendInviteAcceptRes;
    C2S_FRIEND_INVITE_DECLINE_REQ: FriendInviteDeclineReq;
    S2C_FRIEND_INVITE_DECLINE_RES: FriendInviteDeclineRes;
    C2S_FRIEND_INVITE_CANCEL_REQ: FriendInviteCancelReq;
    S2C_FRIEND_INVITE_CANCEL_RES: FriendInviteCancelRes;
    C2S_FRIEND_DEL_FRIEND_REQ: FriendDelFriendReq;
    S2C_FRIEND_DEL_FRIEND_RES: FriendDelFriendRes;
    S2C_FRIEND_INFO_NOT: FriendInfoNot;
    S2C_FRIEND_SET_FRIEND_INFOS_NOT: FriendSetFriendInfosNot;
    S2C_FRIEND_DEL_FRIEND_INFOS_NOT: FriendDelFriendInfosNot;
    S2C_FRIEND_SET_ACCEPT_INFOS_NOT: FriendSetAcceptInfosNot;
    S2C_FRIEND_DEL_ACCEPT_INFOS_NOT: FriendDelAcceptInfosNot;
    S2C_FRIEND_SET_INVITE_INFOS_NOT: FriendSetInviteInfosNot;
    S2C_FRIEND_DEL_INVITE_INFOS_NOT: FriendDelInviteInfosNot;
    S2C_FRIEND_SET_STATUS_NOT: FriendSetStatusNot;
    C2S_FRIEND_LIST_REQ: FriendListReq;
    S2C_FRIEND_LIST_RES: FriendListRes;
    C2S_FRIEND_LIST_ALL_REQ: FriendListAllReq;
    S2C_FRIEND_LIST_ALL_RES: FriendListAllRes;
    C2S_FRIEND_FIND_REQ: FriendFindReq;
    S2C_FRIEND_FIND_RES: FriendFindRes;
    C2S_GATHERING_HALL_CHANNEL_LIST_REQ: GatheringHallChannelListReq;
    S2C_GATHERING_HALL_CHANNEL_LIST_RES: GatheringHallChannelListRes;
    C2S_GATHERING_HALL_CHANNEL_SELECT_REQ: GatheringHallChannelSelectReq;
    S2C_GATHERING_HALL_CHANNEL_SELECT_RES: GatheringHallChannelSelectRes;
    C2S_GATHERING_HALL_CHANNEL_EXIT_REQ: GatheringHallChannelExitReq;
    S2C_GATHERING_HALL_CHANNEL_EXIT_RES: GatheringHallChannelExitRes;
    C2S_GATHERING_HALL_CHANNEL_USER_LIST_REQ: GatheringHallChannelUserListReq;
    S2C_GATHERING_HALL_CHANNEL_USER_LIST_RES: GatheringHallChannelUserListRes;
    S2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT: GatheringHallChannelUserUpdateNot;
    C2S_GATHERING_HALL_CHANNEL_CHAT_REQ: GatheringHallChannelChatReq;
    S2C_GATHERING_HALL_CHANNEL_CHAT_RES: GatheringHallChannelChatRes;
    S2C_GATHERING_HALL_CHANNEL_CHAT_NOT: GatheringHallChannelChatNot;
    C2S_GATHERING_HALL_TARGET_EQUIPPED_ITEM_REQ: GatheringHallTargetEquippedItemReq;
    S2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RES: GatheringHallTargetEquippedItemRes;
    C2S_GM_PARTY_ALL_RANDOM_REQ: GmPartyAllRandomReq;
    S2C_GM_PARTY_ALL_RANDOM_RES: GmPartyAllRandomRes;
    S2C_ENTER_GAME_SERVER_NOT: EnterGameServerNot;
    C2S_AUTO_MATCH_REG_REQ: AutoMatchRegReq;
    S2C_AUTO_MATCH_REG_RES: AutoMatchRegRes;
    C2S_GAME_ENTER_COMPLETE_NOT: GameEnterCompleteNot;
    S2C_AUTO_MATCH_REG_TEAM_NOT: AutoMatchRegTeamNot;
    C2S_RECONNECT_INGAME_REQ: ReconnectIngameReq;
    S2C_RECONNECT_INGAME_RES: ReconnectIngameRes;
    S2C_GEAR_BASE_SCORE_LIST_NOT: GearBaseScoreListNot;
    S2C_MATCH_POOL_REGISTERED_NOT: MatchPoolRegisteredNot;
    S2C_MATCHMAKING_FAIL_NOT: MatchmakingFailNot;
    C2S_INVENTORY_INFO_REQ: InventoryInfoReq;
    S2C_INVENTORY_INFO_RES: InventoryInfoRes;
    C2S_INVENTORY_ALL_UPDATE_REQ: InventoryAllUpdateReq;
    S2C_INVENTORY_ALL_UPDATE_RES: InventoryAllUpdateRes;
    C2S_INVENTORY_MOVE_REQ: InventoryMoveReq;
    S2C_INVENTORY_MOVE_RES: InventoryMoveRes;
    C2S_INVENTORY_MERGE_REQ: InventoryMergeReq;
    S2C_INVENTORY_MERGE_RES: InventoryMergeRes;
    C2S_INVENTORY_SWAP_REQ: InventorySwapReq;
    S2C_INVENTORY_SWAP_RES: InventorySwapRes;
    C2S_INVENTORY_SPLIT_MOVE_REQ: InventorySplitMoveReq;
    S2C_INVENTORY_SPLIT_MOVE_RES: InventorySplitMoveRes;
    C2S_INVENTORY_SPLIT_MERGE_REQ: InventorySplitMergeReq;
    S2C_INVENTORY_SPLIT_MERGE_RES: InventorySplitMergeRes;
    C2S_INVENTORY_SPLIT_SWAP_REQ: InventorySplitSwapReq;
    S2C_INVENTORY_SPLIT_SWAP_RES: InventorySplitSwapRes;
    C2S_INVENTORY_TWO_HANDED_WEAPON_SWAP_REQ: InventoryTwoHandedWeaponSwapReq;
    S2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RES: InventoryTwoHandedWeaponSwapRes;
    C2S_INVENTORY_SINGLE_UPDATE_REQ: InventorySingleUpdateReq;
    S2C_INVENTORY_SINGLE_UPDATE_RES: InventorySingleUpdateRes;
    C2S_STORAGE_INFO_REQ: StorageInfoReq;
    S2C_STORAGE_INFO_RES: StorageInfoRes;
    C2S_INVENTORY_EXPAND_STORAGE_REQ: InventoryExpandStorageReq;
    S2C_INVENTORY_EXPAND_STORAGE_RES: InventoryExpandStorageRes;
    C2S_CHARACTER_SELECT_ENTER_REQ: CharacterSelectEnterReq;
    S2C_CHARACTER_SELECT_ENTER_RES: CharacterSelectEnterRes;
    C2S_LOBBY_CHARACTER_INFO_REQ: LobbyCharacterInfoReq;
    S2C_LOBBY_CHARACTER_INFO_RES: LobbyCharacterInfoRes;
    C2S_OPEN_LOBBY_MAP_REQ: OpenLobbyMapReq;
    S2C_OPEN_LOBBY_MAP_RES: OpenLobbyMapRes;
    C2S_LOBBY_REGION_SELECT_REQ: LobbyRegionSelectReq;
    S2C_LOBBY_REGION_SELECT_RES: LobbyRegionSelectRes;
    C2S_LOBBY_ENTER_FROM_GAME_REQ: LobbyEnterFromGameReq;
    S2C_LOBBY_ENTER_FROM_GAME_RES: LobbyEnterFromGameRes;
    C2S_LOBBY_GAME_TYPE_SELECT_REQ: LobbyGameTypeSelectReq;
    S2C_LOBBY_GAME_TYPE_SELECT_RES: LobbyGameTypeSelectRes;
    S2C_LOBBY_ACCOUNT_CURRENCY_LIST_NOT: LobbyAccountCurrencyListNot;
    S2C_LOBBY_CHARACTER_LOBBY_EMOTE_NOT: LobbyCharacterLobbyEmoteNot;
    S2C_LOBBY_REPORT_PUNISH_LIST_NOT: LobbyReportPunishListNot;
    C2S_USER_CHARACTER_GAME_STAT_INFO_REQ: UserCharacterGameStatInfoReq;
    S2C_USER_CHARACTER_GAME_STAT_INFO_RES: UserCharacterGameStatInfoRes;
    C2S_KNIGHT_PROGRAM_LINK_SELECT_REQ: KnightProgramLinkSelectReq;
    S2C_KNIGHT_PROGRAM_LINK_SELECT_RES: KnightProgramLinkSelectRes;
    C2S_GM_TRADE_CHAT_BAN_REQ: GmTradeChatBanReq;
    S2C_GM_TRADE_CHAT_BAN_RES: GmTradeChatBanRes;
    S2C_FRIEND_ITEM_RECOVERED_NOT: FriendItemRecoveredNot;
    S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT: FriendItemRecoveryReceiveNot;
    C2S_FRIEND_ITEM_RECOVERED_NOT_CHECK_REQ: FriendItemRecoveredNotCheckReq;
    S2C_FRIEND_ITEM_RECOVERED_NOT_CHECK_RES: FriendItemRecoveredNotCheckRes;
    C2S_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_REQ: FriendItemRecoveryReceiveNotCheckReq;
    S2C_FRIEND_ITEM_RECOVERY_RECEIVE_NOT_CHECK_RES: FriendItemRecoveryReceiveNotCheckRes;
    C2S_LOBBY_RANDOM_MATCHMAKING_REQ: LobbyRandomMatchmakingReq;
    S2C_LOBBY_RANDOM_MATCHMAKING_RES: LobbyRandomMatchmakingRes;
    S2C_DLC_LEGENDARY_STATUS_DUPLICATE_WARNING_NOT: DlcLegendaryStatusDuplicateWarningNot;
    S2C_ARENA_STAT_NOT: ArenaStatNot;
    C2S_MARKETPLACE_ITEM_LIST_REQ: MarketplaceItemListReq;
    S2C_MARKETPLACE_ITEM_LIST_RES: MarketplaceItemListRes;
    C2S_MARKETPLACE_MY_ITEM_LIST_REQ: MarketplaceMyItemListReq;
    S2C_MARKETPLACE_MY_ITEM_LIST_RES: MarketplaceMyItemListRes;
    C2S_MARKETPLACE_ITEM_BUY_REQ: MarketplaceItemBuyReq;
    S2C_MARKETPLACE_ITEM_BUY_RES: MarketplaceItemBuyRes;
    C2S_MARKETPLACE_ITEM_REGISTER_REQ: MarketplaceItemRegisterReq;
    S2C_MARKETPLACE_ITEM_REGISTER_RES: MarketplaceItemRegisterRes;
    C2S_MARKETPLACE_ITEM_CANCEL_REQ: MarketplaceItemCancelReq;
    S2C_MARKETPLACE_ITEM_CANCEL_RES: MarketplaceItemCancelRes;
    C2S_MARKETPLACE_TRANSFER_ITEMS_REQ: MarketplaceTransferItemsReq;
    S2C_MARKETPLACE_TRANSFER_ITEMS_RES: MarketplaceTransferItemsRes;
    S2C_MARKETPLACE_ITEM_HAS_SOLD_NOT: MarketplaceItemHasSoldNot;
    C2S_MARKETPLACE_ENTER_REQ: MarketplaceEnterReq;
    S2C_MARKETPLACE_ENTER_RES: MarketplaceEnterRes;
    C2S_MERCHANT_LIST_REQ: MerchantListReq;
    S2C_MERCHANT_LIST_RES: MerchantListRes;
    C2S_MERCHANT_STOCK_BUY_ITEM_LIST_REQ: MerchantStockBuyItemListReq;
    S2C_MERCHANT_STOCK_BUY_ITEM_LIST_RES: MerchantStockBuyItemListRes;
    C2S_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_REQ: MerchantStockSellBackItemListReq;
    S2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RES: MerchantStockSellBackItemListRes;
    C2S_MERCHANT_STOCK_BUY_REQ: MerchantStockBuyReq;
    S2C_MERCHANT_STOCK_BUY_RES: MerchantStockBuyRes;
    C2S_MERCHANT_STOCK_SELL_BACK_REQ: MerchantStockSellBackReq;
    S2C_MERCHANT_STOCK_SELL_BACK_RES: MerchantStockSellBackRes;
    C2S_MERCHANT_SERVICE_CRAFT_LIST_REQ: MerchantServiceCraftListReq;
    S2C_MERCHANT_SERVICE_CRAFT_LIST_RES: MerchantServiceCraftListRes;
    C2S_MERCHANT_SERVICE_CRAFT_REQ: MerchantServiceCraftReq;
    S2C_MERCHANT_SERVICE_CRAFT_RES: MerchantServiceCraftRes;
    C2S_MERCHANT_QUEST_LIST_INFO_REQ: MerchantQuestListInfoReq;
    S2C_MERCHANT_QUEST_LIST_INFO_RES: MerchantQuestListInfoRes;
    C2S_MERCHANT_QUEST_SELECT_REQ: MerchantQuestSelectReq;
    S2C_MERCHANT_QUEST_SELECT_RES: MerchantQuestSelectRes;
    C2S_MERCHANT_QUEST_COMPLETE_REQ: MerchantQuestCompleteReq;
    S2C_MERCHANT_QUEST_COMPLETE_RES: MerchantQuestCompleteRes;
    C2S_MERCHANT_QUEST_CONTENT_VALUE_STACK_REQ: MerchantQuestContentValueStackReq;
    S2C_MERCHANT_QUEST_CONTENT_VALUE_STACK_RES: MerchantQuestContentValueStackRes;
    C2S_MERCHANT_BASE_GEAR_LIST_REQ: MerchantBaseGearListReq;
    S2C_MERCHANT_BASE_GEAR_LIST_RES: MerchantBaseGearListRes;
    C2S_MERCHANT_BASE_GEAR_SET_REQ: MerchantBaseGearSetReq;
    S2C_MERCHANT_BASE_GEAR_SET_RES: MerchantBaseGearSetRes;
    C2S_MERCHANT_SAVE_BASE_GEAR_SET_REQ: MerchantSaveBaseGearSetReq;
    S2C_MERCHANT_SAVE_BASE_GEAR_SET_RES: MerchantSaveBaseGearSetRes;
    C2S_MERCHANT_EQUIP_BASE_GEAR_SET_REQ: MerchantEquipBaseGearSetReq;
    S2C_MERCHANT_EQUIP_BASE_GEAR_SET_RES: MerchantEquipBaseGearSetRes;
    C2S_MERCHANT_SERVICE_MINDWIPE_INFO_REQ: MerchantServiceMindwipeInfoReq;
    S2C_MERCHANT_SERVICE_MINDWIPE_INFO_RES: MerchantServiceMindwipeInfoRes;
    C2S_MERCHANT_SERVICE_MINDWIPE_REQ: MerchantServiceMindwipeReq;
    S2C_MERCHANT_SERVICE_MINDWIPE_RES: MerchantServiceMindwipeRes;
    C2S_MERCHANT_RECOVERY_LIST_REQ: MerchantRecoveryListReq;
    S2C_MERCHANT_RECOVERY_LIST_RES: MerchantRecoveryListRes;
    C2S_MERCHANT_RECOVERY_BUY_REQ: MerchantRecoveryBuyReq;
    S2C_MERCHANT_RECOVERY_BUY_RES: MerchantRecoveryBuyRes;
    C2S_MERCHANT_QUEST_LOG_LIST_REQ: MerchantQuestLogListReq;
    S2C_MERCHANT_QUEST_LOG_LIST_RES: MerchantQuestLogListRes;
    C2S_MERCHANT_QUEST_LOG_ACCEPT_ALL_REQ: MerchantQuestLogAcceptAllReq;
    S2C_MERCHANT_QUEST_LOG_ACCEPT_ALL_RES: MerchantQuestLogAcceptAllRes;
    S2C_MERCHANT_RECOVERY_ITEM_CHECK_NOT: MerchantRecoveryItemCheckNot;
    C2S_MERCHANT_RECOVERY_CHECK_REQ: MerchantRecoveryCheckReq;
    S2C_MERCHANT_RECOVERY_CHECK_RES: MerchantRecoveryCheckRes;
    C2S_MERCHANT_EXPRESS_LIST_REQ: MerchantExpressListReq;
    S2C_MERCHANT_EXPRESS_LIST_RES: MerchantExpressListRes;
    C2S_MERCHANT_EXPRESS_BUY_REQ: MerchantExpressBuyReq;
    S2C_MERCHANT_EXPRESS_BUY_RES: MerchantExpressBuyRes;
    S2C_MERCHANT_EXPRESS_ITEM_CHECK_NOT: MerchantExpressItemCheckNot;
    C2S_PARTY_INVITE_REQ: PartyInviteReq;
    S2C_PARTY_INVITE_RES: PartyInviteRes;
    S2C_PARTY_INVITE_NOT: PartyInviteNot;
    C2S_PARTY_INVITE_ANSWER_REQ: PartyInviteAnswerReq;
    S2C_PARTY_INVITE_ANSWER_RES: PartyInviteAnswerRes;
    S2C_PARTY_INVITE_ANSWER_RESULT_NOT: PartyInviteAnswerResultNot;
    C2S_PARTY_EXIT_REQ: PartyExitReq;
    S2C_PARTY_EXIT_RES: PartyExitRes;
    S2C_PARTY_MEMBER_INFO_NOT: PartyMemberInfoNot;
    C2S_PARTY_READY_REQ: PartyReadyReq;
    S2C_PARTY_READY_RES: PartyReadyRes;
    S2C_PARTY_EQUIP_ITEM_CHANGE_NOT: PartyEquipItemChangeNot;
    S2C_PARTY_REGION_CHANGE_NOT: PartyRegionChangeNot;
    S2C_PARTY_LOCATION_UPDATE_NOT: PartyLocationUpdateNot;
    S2C_PARTY_CHARACTER_SKIN_LIST_NOT: PartyCharacterSkinListNot;
    S2C_PARTY_CHARACTER_SKIN_CHANGE_NOT: PartyCharacterSkinChangeNot;
    S2C_PARTY_ITEM_SKIN_LIST_NOT: PartyItemSkinListNot;
    S2C_PARTY_ITEM_SKIN_CHANGE_NOT: PartyItemSkinChangeNot;
    S2C_PARTY_ARMOR_SKIN_LIST_NOT: PartyArmorSkinListNot;
    S2C_PARTY_ARMOR_SKIN_CHANGE_NOT: PartyArmorSkinChangeNot;
    S2C_PARTY_GAME_TYPE_CHANGE_NOT: PartyGameTypeChangeNot;
    C2S_PARTY_MEMBER_KICK_REQ: PartyMemberKickReq;
    S2C_PARTY_MEMBER_KICK_RES: PartyMemberKickRes;
    C2S_PARTY_CHAT_REQ: PartyChatReq;
    S2C_PARTY_CHAT_RES: PartyChatRes;
    S2C_PARTY_CHAT_NOT: PartyChatNot;
    S2C_PARTY_READY_CHANGE_NOT: PartyReadyChangeNot;
    S2C_PARTY_KICKED_OUT_NOT: PartyKickedOutNot;
    S2C_PARTY_MEMBER_LOBBY_EMOTE_NOT: PartyMemberLobbyEmoteNot;
    C2S_PARTY_START_LOBBY_EMOTE_REQ: PartyStartLobbyEmoteReq;
    S2C_PARTY_START_LOBBY_EMOTE_RES: PartyStartLobbyEmoteRes;
    S2C_PARTY_START_LOBBY_EMOTE_NOT: PartyStartLobbyEmoteNot;
    S2C_PARTY_GEAR_SCORE_CHANGE_NOT: PartyGearScoreChangeNot;
    S2C_PARTY_RANDOM_MATCHMAKING_NOT: PartyRandomMatchmakingNot;
    S2C_PARTY_LAST_GAME_MEMBER_INFO_NOT: PartyLastGameMemberInfoNot;
    C2S_RANKING_INFO_REQ: RankingInfoReq;
    S2C_RANKING_INFO_RES: RankingInfoRes;
    C2S_RANKING_RANGE_REQ: RankingRangeReq;
    S2C_RANKING_RANGE_RES: RankingRangeRes;
    C2S_RANKING_CHARACTER_REQ: RankingCharacterReq;
    C2S_RANKING_REWARD_GET_REQ: RankingRewardGetReq;
    S2C_RANKING_REWARD_GET_RES: RankingRewardGetRes;
    S2C_RANKING_CHARACTER_RES: RankingCharacterRes;
    C2S_RANKING_AP_CONFIG_REQ: RankingApConfigReq;
    S2C_RANKING_AP_CONFIG_RES: RankingApConfigRes;
    S2C_RANKING_HAS_REWARD_NOT: RankingHasRewardNot;
    C2S_RELIGION_LIST_REQ: ReligionListReq;
    S2C_RELIGION_LIST_RES: ReligionListRes;
    C2S_RELIGION_RANKING_LIST_REQ: ReligionRankingListReq;
    S2C_RELIGION_RANKING_LIST_RES: ReligionRankingListRes;
    C2S_RELIGION_PERSONAL_RANKING_REQ: ReligionPersonalRankingReq;
    S2C_RELIGION_PERSONAL_RANKING_RES: ReligionPersonalRankingRes;
    C2S_RELIGION_UPDATE_OFFERING_REQ: ReligionUpdateOfferingReq;
    S2C_RELIGION_UPDATE_OFFERING_RES: ReligionUpdateOfferingRes;
    C2S_RELIGION_KILL_COUNT_LIST_REQ: ReligionKillCountListReq;
    S2C_RELIGION_KILL_COUNT_LIST_RES: ReligionKillCountListRes;
    C2S_RELIGION_REGISTER_REQ: ReligionRegisterReq;
    S2C_RELIGION_REGISTER_RES: ReligionRegisterRes;
    C2S_RELIGION_GET_SEASON_INFO_REQ: ReligionGetSeasonInfoReq;
    S2C_RELIGION_GET_SEASON_INFO_RES: ReligionGetSeasonInfoRes;
    C2S_SHOP_ITEM_LIST_REQ: ShopItemListReq;
    S2C_SHOP_ITEM_LIST_RES: ShopItemListRes;
    C2S_SHOP_ITEM_BUY_REQ: ShopItemBuyReq;
    S2C_SHOP_ITEM_BUY_RES: ShopItemBuyRes;
    C2S_SHOP_ENTER_GIFT_CODE_REQ: ShopEnterGiftCodeReq;
    S2C_SHOP_ENTER_GIFT_CODE_RES: ShopEnterGiftCodeRes;
    C2S_SHOP_RED_STONE_SHARD_INFO_REQ: ShopRedStoneShardInfoReq;
    S2C_SHOP_RED_STONE_SHARD_INFO_RES: ShopRedStoneShardInfoRes;
    C2S_SHOP_RED_STONE_SHARD_BUY_REQ: ShopRedStoneShardBuyReq;
    S2C_SHOP_RED_STONE_SHARD_BUY_RES: ShopRedStoneShardBuyRes;
    C2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ: ShopRedStoneShardBuyCheckReq;
    S2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES: ShopRedStoneShardBuyCheckRes;
    C2S_SHOP_LEGEND_UPGRADE_REQ: ShopLegendUpgradeReq;
    S2C_SHOP_LEGEND_UPGRADE_RES: ShopLegendUpgradeRes;
    C2S_REFRESH_RED_STONE_SHARD_REQ: RefreshRedStoneShardReq;
    S2C_REFRESH_RED_STONE_SHARD_RES: RefreshRedStoneShardRes;
    C2S_SHOP_CHANGE_ACCOUNT_NAME_REQ: ShopChangeAccountNameReq;
    S2C_SHOP_CHANGE_ACCOUNT_NAME_RES: ShopChangeAccountNameRes;
    S2C_SHOP_ITEM_CHECK_NOT: ShopItemCheckNot;
    C2S_SHOP_LEGEND_DLC_INSTALL_REQ: ShopLegendDlcInstallReq;
    S2C_SHOP_LEGEND_DLC_INSTALL_RES: ShopLegendDlcInstallRes;
    C2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ: ShopLegendDlcInstallCheckReq;
    S2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES: ShopLegendDlcInstallCheckRes;
    S2C_SHOP_TWITCH_DROPS_REWARD_NOT: ShopTwitchDropsRewardNot;
    C2S_TRADE_CHANNEL_LIST_REQ: TradeChannelListReq;
    S2C_TRADE_CHANNEL_LIST_RES: TradeChannelListRes;
    C2S_TRADE_CHANNEL_SELECT_REQ: TradeChannelSelectReq;
    S2C_TRADE_CHANNEL_SELECT_RES: TradeChannelSelectRes;
    C2S_TRADE_CHANNEL_EXIT_REQ: TradeChannelExitReq;
    S2C_TRADE_CHANNEL_EXIT_RES: TradeChannelExitRes;
    C2S_TRADE_CHANNEL_USER_LIST_REQ: TradeChannelUserListReq;
    S2C_TRADE_CHANNEL_USER_LIST_RES: TradeChannelUserListRes;
    S2C_TRADE_CHANNEL_USER_UPDATE_NOT: TradeChannelUserUpdateNot;
    C2S_TRADE_CHANNEL_CHAT_REQ: TradeChannelChatReq;
    S2C_TRADE_CHANNEL_CHAT_RES: TradeChannelChatRes;
    C2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ: TradeChannelChatTextRangeReq;
    S2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES: TradeChannelChatTextRangeRes;
    C2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ: TradeMembershipRequirementReq;
    S2C_TRADE_MEMBERSHIP_REQUIREMENT_RES: TradeMembershipRequirementRes;
    C2S_TRADE_MEMBERSHIP_REQ: TradeMembershipReq;
    S2C_TRADE_MEMBERSHIP_RES: TradeMembershipRes;
    C2S_TRADE_REQUEST_REQ: TradeRequestReq;
    S2C_TRADE_REQUEST_RES: TradeRequestRes;
    S2C_TRADE_REQUEST_NOT: TradeRequestNot;
    C2S_TRADE_ANSWER_REQ: TradeAnswerReq;
    S2C_TRADE_ANSWER_RES: TradeAnswerRes;
    S2C_TRADE_ANSWER_REFUSAL_NOT: TradeAnswerRefusalNot;
    S2C_TRADING_BEGIN_NOT: TradingBeginNot;
    C2S_TRADING_CLOSE_REQ: TradingCloseReq;
    S2C_TRADING_CLOSE_RES: TradingCloseRes;
    C2S_TRADING_CHAT_REQ: TradingChatReq;
    S2C_TRADING_CHAT_RES: TradingChatRes;
    C2S_TRADING_ITEM_UPDATE_REQ: TradingItemUpdateReq;
    S2C_TRADING_ITEM_UPDATE_RES: TradingItemUpdateRes;
    C2S_TRADING_READY_REQ: TradingReadyReq;
    S2C_TRADING_READY_RES: TradingReadyRes;
    S2C_TRADING_READY_NOT: TradingReadyNot;
    S2C_TRADING_CONFIRM_NOT: TradingConfirmNot;
    C2S_TRADING_CONFIRM_READY_REQ: TradingConfirmReadyReq;
    S2C_TRADING_CONFIRM_READY_RES: TradingConfirmReadyRes;
    S2C_TRADING_CONFIRM_READY_NOT: TradingConfirmReadyNot;
    C2S_TRADING_CONFIRM_CANCEL_REQ: TradingConfirmCancelReq;
    S2C_TRADING_CONFIRM_CANCEL_RES: TradingConfirmCancelRes;
    S2C_TRADING_RESULT_NOT: TradingResultNot;
    C2S_ALIVE_REQ: AliveReq;
    S2C_ALIVE_RES: AliveRes;
    C2S_RECONNECT_REQ: ReconnectReq;
    S2C_RECONNECT_RES: ReconnectRes;
    S2C_ALIVE_REVERSE_NOT: AliveReverseNot;
    C2S_ALIVE_REVERSE_REQ: AliveReverseReq;
    S2C_ALIVE_REVERSE_RES: AliveReverseRes;
}
