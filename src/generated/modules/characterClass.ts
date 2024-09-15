import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_TRAINING_INFO_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_TRAINING_INFO_RES } from "../pb/CharacterClass_pb";
import { type SC2S_TRAINING_REDEEM_LEARNING_TOKEN_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_TRAINING_REDEEM_LEARNING_TOKEN_RES } from "../pb/CharacterClass_pb";
import { type SC2S_TRAINING_RECEIVE_CLASS_ABILITY_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_TRAINING_RECEIVE_CLASS_ABILITY_RES } from "../pb/CharacterClass_pb";
import { type SC2S_TRAINING_REDEEM_REWARD_TOKEN_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_TRAINING_REDEEM_REWARD_TOKEN_RES } from "../pb/CharacterClass_pb";
import { type SC2S_TRAINING_RECEIVE_REWARD_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_TRAINING_RECEIVE_REWARD_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_LEVEL_INFO_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_LEVEL_INFO_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_EQUIP_INFO_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_EQUIP_INFO_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_PERK_LIST_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_PERK_LIST_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_SKILL_LIST_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_SKILL_LIST_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_SPELL_LIST_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_SPELL_LIST_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_MUSIC_LIST_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_MUSIC_LIST_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_SHAPESHIFT_LIST_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_SHAPESHIFT_LIST_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_SPELL_SLOT_MOVE_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_SPELL_SLOT_MOVE_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_SPELL_SEQUENCE_CHANGE_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_SPELL_SEQUENCE_CHANGE_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_ITEM_MOVE_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_ITEM_MOVE_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_MUSIC_SLOT_MOVE_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_MUSIC_SLOT_MOVE_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_MUSIC_SEQUENCE_CHANGE_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_MUSIC_SEQUENCE_CHANGE_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_SHAPESHIFT_SLOT_MOVE_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_SHAPESHIFT_SLOT_MOVE_RES } from "../pb/CharacterClass_pb";
import { type SC2S_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_REQ } from "../pb/CharacterClass_pb";
import { type SS2C_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_RES } from "../pb/CharacterClass_pb";

export class CharacterClassModule extends Module {
    override name = "CharacterClassModule";

    /** Call TRAINING_INFO on server */
    async trainingInfo(payload: TrainingInfoReq): Promise<TrainingInfoRes> {
        return new Promise(res => {
            this.onceTrainingInfoRes(res);
            this.sendTrainingInfoReq(payload);
        });
    }

    /** Send C2S_TRAINING_INFO_REQ(2701) to server */
    async sendTrainingInfoReq(payload: TrainingInfoReq): Promise<void> {
        return this.send("C2S_TRAINING_INFO_REQ", payload);
    }

    /** Receive S2C_TRAINING_INFO_RES(2702) from server */
    onTrainingInfoRes(handler: (payload: TrainingInfoRes) => any): void {
        this.on("S2C_TRAINING_INFO_RES", handler);
    }

    /** Receive S2C_TRAINING_INFO_RES(2702) from server */
    onceTrainingInfoRes(handler: (payload: TrainingInfoRes) => any): void {
        this.once("S2C_TRAINING_INFO_RES", handler);
    }

    /** Call TRAINING_REDEEM_LEARNING_TOKEN on server */
    async trainingRedeemLearningToken(payload: TrainingRedeemLearningTokenReq): Promise<TrainingRedeemLearningTokenRes> {
        return new Promise(res => {
            this.onceTrainingRedeemLearningTokenRes(res);
            this.sendTrainingRedeemLearningTokenReq(payload);
        });
    }

    /** Send C2S_TRAINING_REDEEM_LEARNING_TOKEN_REQ(2705) to server */
    async sendTrainingRedeemLearningTokenReq(payload: TrainingRedeemLearningTokenReq): Promise<void> {
        return this.send("C2S_TRAINING_REDEEM_LEARNING_TOKEN_REQ", payload);
    }

    /** Receive S2C_TRAINING_REDEEM_LEARNING_TOKEN_RES(2706) from server */
    onTrainingRedeemLearningTokenRes(handler: (payload: TrainingRedeemLearningTokenRes) => any): void {
        this.on("S2C_TRAINING_REDEEM_LEARNING_TOKEN_RES", handler);
    }

    /** Receive S2C_TRAINING_REDEEM_LEARNING_TOKEN_RES(2706) from server */
    onceTrainingRedeemLearningTokenRes(handler: (payload: TrainingRedeemLearningTokenRes) => any): void {
        this.once("S2C_TRAINING_REDEEM_LEARNING_TOKEN_RES", handler);
    }

    /** Call TRAINING_RECEIVE_CLASS_ABILITY on server */
    async trainingReceiveClassAbility(payload: TrainingReceiveClassAbilityReq): Promise<TrainingReceiveClassAbilityRes> {
        return new Promise(res => {
            this.onceTrainingReceiveClassAbilityRes(res);
            this.sendTrainingReceiveClassAbilityReq(payload);
        });
    }

    /** Send C2S_TRAINING_RECEIVE_CLASS_ABILITY_REQ(2707) to server */
    async sendTrainingReceiveClassAbilityReq(payload: TrainingReceiveClassAbilityReq): Promise<void> {
        return this.send("C2S_TRAINING_RECEIVE_CLASS_ABILITY_REQ", payload);
    }

    /** Receive S2C_TRAINING_RECEIVE_CLASS_ABILITY_RES(2708) from server */
    onTrainingReceiveClassAbilityRes(handler: (payload: TrainingReceiveClassAbilityRes) => any): void {
        this.on("S2C_TRAINING_RECEIVE_CLASS_ABILITY_RES", handler);
    }

    /** Receive S2C_TRAINING_RECEIVE_CLASS_ABILITY_RES(2708) from server */
    onceTrainingReceiveClassAbilityRes(handler: (payload: TrainingReceiveClassAbilityRes) => any): void {
        this.once("S2C_TRAINING_RECEIVE_CLASS_ABILITY_RES", handler);
    }

    /** Call TRAINING_REDEEM_REWARD_TOKEN on server */
    async trainingRedeemRewardToken(payload: TrainingRedeemRewardTokenReq): Promise<TrainingRedeemRewardTokenRes> {
        return new Promise(res => {
            this.onceTrainingRedeemRewardTokenRes(res);
            this.sendTrainingRedeemRewardTokenReq(payload);
        });
    }

    /** Send C2S_TRAINING_REDEEM_REWARD_TOKEN_REQ(2709) to server */
    async sendTrainingRedeemRewardTokenReq(payload: TrainingRedeemRewardTokenReq): Promise<void> {
        return this.send("C2S_TRAINING_REDEEM_REWARD_TOKEN_REQ", payload);
    }

    /** Receive S2C_TRAINING_REDEEM_REWARD_TOKEN_RES(2710) from server */
    onTrainingRedeemRewardTokenRes(handler: (payload: TrainingRedeemRewardTokenRes) => any): void {
        this.on("S2C_TRAINING_REDEEM_REWARD_TOKEN_RES", handler);
    }

    /** Receive S2C_TRAINING_REDEEM_REWARD_TOKEN_RES(2710) from server */
    onceTrainingRedeemRewardTokenRes(handler: (payload: TrainingRedeemRewardTokenRes) => any): void {
        this.once("S2C_TRAINING_REDEEM_REWARD_TOKEN_RES", handler);
    }

    /** Call TRAINING_RECEIVE_REWARD on server */
    async trainingReceiveReward(payload: TrainingReceiveRewardReq): Promise<TrainingReceiveRewardRes> {
        return new Promise(res => {
            this.onceTrainingReceiveRewardRes(res);
            this.sendTrainingReceiveRewardReq(payload);
        });
    }

    /** Send C2S_TRAINING_RECEIVE_REWARD_REQ(2711) to server */
    async sendTrainingReceiveRewardReq(payload: TrainingReceiveRewardReq): Promise<void> {
        return this.send("C2S_TRAINING_RECEIVE_REWARD_REQ", payload);
    }

    /** Receive S2C_TRAINING_RECEIVE_REWARD_RES(2712) from server */
    onTrainingReceiveRewardRes(handler: (payload: TrainingReceiveRewardRes) => any): void {
        this.on("S2C_TRAINING_RECEIVE_REWARD_RES", handler);
    }

    /** Receive S2C_TRAINING_RECEIVE_REWARD_RES(2712) from server */
    onceTrainingReceiveRewardRes(handler: (payload: TrainingReceiveRewardRes) => any): void {
        this.once("S2C_TRAINING_RECEIVE_REWARD_RES", handler);
    }

    /** Call CLASS_LEVEL_INFO on server */
    async classLevelInfo(payload: ClassLevelInfoReq): Promise<ClassLevelInfoRes> {
        return new Promise(res => {
            this.onceClassLevelInfoRes(res);
            this.sendClassLevelInfoReq(payload);
        });
    }

    /** Send C2S_CLASS_LEVEL_INFO_REQ(3001) to server */
    async sendClassLevelInfoReq(payload: ClassLevelInfoReq): Promise<void> {
        return this.send("C2S_CLASS_LEVEL_INFO_REQ", payload);
    }

    /** Receive S2C_CLASS_LEVEL_INFO_RES(3002) from server */
    onClassLevelInfoRes(handler: (payload: ClassLevelInfoRes) => any): void {
        this.on("S2C_CLASS_LEVEL_INFO_RES", handler);
    }

    /** Receive S2C_CLASS_LEVEL_INFO_RES(3002) from server */
    onceClassLevelInfoRes(handler: (payload: ClassLevelInfoRes) => any): void {
        this.once("S2C_CLASS_LEVEL_INFO_RES", handler);
    }

    /** Call CLASS_EQUIP_INFO on server */
    async classEquipInfo(payload: ClassEquipInfoReq): Promise<ClassEquipInfoRes> {
        return new Promise(res => {
            this.onceClassEquipInfoRes(res);
            this.sendClassEquipInfoReq(payload);
        });
    }

    /** Send C2S_CLASS_EQUIP_INFO_REQ(3031) to server */
    async sendClassEquipInfoReq(payload: ClassEquipInfoReq): Promise<void> {
        return this.send("C2S_CLASS_EQUIP_INFO_REQ", payload);
    }

    /** Receive S2C_CLASS_EQUIP_INFO_RES(3032) from server */
    onClassEquipInfoRes(handler: (payload: ClassEquipInfoRes) => any): void {
        this.on("S2C_CLASS_EQUIP_INFO_RES", handler);
    }

    /** Receive S2C_CLASS_EQUIP_INFO_RES(3032) from server */
    onceClassEquipInfoRes(handler: (payload: ClassEquipInfoRes) => any): void {
        this.once("S2C_CLASS_EQUIP_INFO_RES", handler);
    }

    /** Call CLASS_PERK_LIST on server */
    async classPerkList(payload: ClassPerkListReq): Promise<ClassPerkListRes> {
        return new Promise(res => {
            this.onceClassPerkListRes(res);
            this.sendClassPerkListReq(payload);
        });
    }

    /** Send C2S_CLASS_PERK_LIST_REQ(3041) to server */
    async sendClassPerkListReq(payload: ClassPerkListReq): Promise<void> {
        return this.send("C2S_CLASS_PERK_LIST_REQ", payload);
    }

    /** Receive S2C_CLASS_PERK_LIST_RES(3042) from server */
    onClassPerkListRes(handler: (payload: ClassPerkListRes) => any): void {
        this.on("S2C_CLASS_PERK_LIST_RES", handler);
    }

    /** Receive S2C_CLASS_PERK_LIST_RES(3042) from server */
    onceClassPerkListRes(handler: (payload: ClassPerkListRes) => any): void {
        this.once("S2C_CLASS_PERK_LIST_RES", handler);
    }

    /** Call CLASS_SKILL_LIST on server */
    async classSkillList(payload: ClassSkillListReq): Promise<ClassSkillListRes> {
        return new Promise(res => {
            this.onceClassSkillListRes(res);
            this.sendClassSkillListReq(payload);
        });
    }

    /** Send C2S_CLASS_SKILL_LIST_REQ(3043) to server */
    async sendClassSkillListReq(payload: ClassSkillListReq): Promise<void> {
        return this.send("C2S_CLASS_SKILL_LIST_REQ", payload);
    }

    /** Receive S2C_CLASS_SKILL_LIST_RES(3044) from server */
    onClassSkillListRes(handler: (payload: ClassSkillListRes) => any): void {
        this.on("S2C_CLASS_SKILL_LIST_RES", handler);
    }

    /** Receive S2C_CLASS_SKILL_LIST_RES(3044) from server */
    onceClassSkillListRes(handler: (payload: ClassSkillListRes) => any): void {
        this.once("S2C_CLASS_SKILL_LIST_RES", handler);
    }

    /** Call CLASS_SPELL_LIST on server */
    async classSpellList(payload: ClassSpellListReq): Promise<ClassSpellListRes> {
        return new Promise(res => {
            this.onceClassSpellListRes(res);
            this.sendClassSpellListReq(payload);
        });
    }

    /** Send C2S_CLASS_SPELL_LIST_REQ(3045) to server */
    async sendClassSpellListReq(payload: ClassSpellListReq): Promise<void> {
        return this.send("C2S_CLASS_SPELL_LIST_REQ", payload);
    }

    /** Receive S2C_CLASS_SPELL_LIST_RES(3046) from server */
    onClassSpellListRes(handler: (payload: ClassSpellListRes) => any): void {
        this.on("S2C_CLASS_SPELL_LIST_RES", handler);
    }

    /** Receive S2C_CLASS_SPELL_LIST_RES(3046) from server */
    onceClassSpellListRes(handler: (payload: ClassSpellListRes) => any): void {
        this.once("S2C_CLASS_SPELL_LIST_RES", handler);
    }

    /** Call CLASS_MUSIC_LIST on server */
    async classMusicList(payload: ClassMusicListReq): Promise<ClassMusicListRes> {
        return new Promise(res => {
            this.onceClassMusicListRes(res);
            this.sendClassMusicListReq(payload);
        });
    }

    /** Send C2S_CLASS_MUSIC_LIST_REQ(3047) to server */
    async sendClassMusicListReq(payload: ClassMusicListReq): Promise<void> {
        return this.send("C2S_CLASS_MUSIC_LIST_REQ", payload);
    }

    /** Receive S2C_CLASS_MUSIC_LIST_RES(3048) from server */
    onClassMusicListRes(handler: (payload: ClassMusicListRes) => any): void {
        this.on("S2C_CLASS_MUSIC_LIST_RES", handler);
    }

    /** Receive S2C_CLASS_MUSIC_LIST_RES(3048) from server */
    onceClassMusicListRes(handler: (payload: ClassMusicListRes) => any): void {
        this.once("S2C_CLASS_MUSIC_LIST_RES", handler);
    }

    /** Call CLASS_SHAPESHIFT_LIST on server */
    async classShapeshiftList(payload: ClassShapeshiftListReq): Promise<ClassShapeshiftListRes> {
        return new Promise(res => {
            this.onceClassShapeshiftListRes(res);
            this.sendClassShapeshiftListReq(payload);
        });
    }

    /** Send C2S_CLASS_SHAPESHIFT_LIST_REQ(3049) to server */
    async sendClassShapeshiftListReq(payload: ClassShapeshiftListReq): Promise<void> {
        return this.send("C2S_CLASS_SHAPESHIFT_LIST_REQ", payload);
    }

    /** Receive S2C_CLASS_SHAPESHIFT_LIST_RES(3050) from server */
    onClassShapeshiftListRes(handler: (payload: ClassShapeshiftListRes) => any): void {
        this.on("S2C_CLASS_SHAPESHIFT_LIST_RES", handler);
    }

    /** Receive S2C_CLASS_SHAPESHIFT_LIST_RES(3050) from server */
    onceClassShapeshiftListRes(handler: (payload: ClassShapeshiftListRes) => any): void {
        this.once("S2C_CLASS_SHAPESHIFT_LIST_RES", handler);
    }

    /** Call CLASS_SPELL_SLOT_MOVE on server */
    async classSpellSlotMove(payload: ClassSpellSlotMoveReq): Promise<ClassSpellSlotMoveRes> {
        return new Promise(res => {
            this.onceClassSpellSlotMoveRes(res);
            this.sendClassSpellSlotMoveReq(payload);
        });
    }

    /** Send C2S_CLASS_SPELL_SLOT_MOVE_REQ(3073) to server */
    async sendClassSpellSlotMoveReq(payload: ClassSpellSlotMoveReq): Promise<void> {
        return this.send("C2S_CLASS_SPELL_SLOT_MOVE_REQ", payload);
    }

    /** Receive S2C_CLASS_SPELL_SLOT_MOVE_RES(3074) from server */
    onClassSpellSlotMoveRes(handler: (payload: ClassSpellSlotMoveRes) => any): void {
        this.on("S2C_CLASS_SPELL_SLOT_MOVE_RES", handler);
    }

    /** Receive S2C_CLASS_SPELL_SLOT_MOVE_RES(3074) from server */
    onceClassSpellSlotMoveRes(handler: (payload: ClassSpellSlotMoveRes) => any): void {
        this.once("S2C_CLASS_SPELL_SLOT_MOVE_RES", handler);
    }

    /** Call CLASS_SPELL_SEQUENCE_CHANGE on server */
    async classSpellSequenceChange(payload: ClassSpellSequenceChangeReq): Promise<ClassSpellSequenceChangeRes> {
        return new Promise(res => {
            this.onceClassSpellSequenceChangeRes(res);
            this.sendClassSpellSequenceChangeReq(payload);
        });
    }

    /** Send C2S_CLASS_SPELL_SEQUENCE_CHANGE_REQ(3075) to server */
    async sendClassSpellSequenceChangeReq(payload: ClassSpellSequenceChangeReq): Promise<void> {
        return this.send("C2S_CLASS_SPELL_SEQUENCE_CHANGE_REQ", payload);
    }

    /** Receive S2C_CLASS_SPELL_SEQUENCE_CHANGE_RES(3076) from server */
    onClassSpellSequenceChangeRes(handler: (payload: ClassSpellSequenceChangeRes) => any): void {
        this.on("S2C_CLASS_SPELL_SEQUENCE_CHANGE_RES", handler);
    }

    /** Receive S2C_CLASS_SPELL_SEQUENCE_CHANGE_RES(3076) from server */
    onceClassSpellSequenceChangeRes(handler: (payload: ClassSpellSequenceChangeRes) => any): void {
        this.once("S2C_CLASS_SPELL_SEQUENCE_CHANGE_RES", handler);
    }

    /** Call CLASS_ITEM_MOVE on server */
    async classItemMove(payload: ClassItemMoveReq): Promise<ClassItemMoveRes> {
        return new Promise(res => {
            this.onceClassItemMoveRes(res);
            this.sendClassItemMoveReq(payload);
        });
    }

    /** Send C2S_CLASS_ITEM_MOVE_REQ(3071) to server */
    async sendClassItemMoveReq(payload: ClassItemMoveReq): Promise<void> {
        return this.send("C2S_CLASS_ITEM_MOVE_REQ", payload);
    }

    /** Receive S2C_CLASS_ITEM_MOVE_RES(3072) from server */
    onClassItemMoveRes(handler: (payload: ClassItemMoveRes) => any): void {
        this.on("S2C_CLASS_ITEM_MOVE_RES", handler);
    }

    /** Receive S2C_CLASS_ITEM_MOVE_RES(3072) from server */
    onceClassItemMoveRes(handler: (payload: ClassItemMoveRes) => any): void {
        this.once("S2C_CLASS_ITEM_MOVE_RES", handler);
    }

    /** Call CLASS_MUSIC_SLOT_MOVE on server */
    async classMusicSlotMove(payload: ClassMusicSlotMoveReq): Promise<ClassMusicSlotMoveRes> {
        return new Promise(res => {
            this.onceClassMusicSlotMoveRes(res);
            this.sendClassMusicSlotMoveReq(payload);
        });
    }

    /** Send C2S_CLASS_MUSIC_SLOT_MOVE_REQ(3078) to server */
    async sendClassMusicSlotMoveReq(payload: ClassMusicSlotMoveReq): Promise<void> {
        return this.send("C2S_CLASS_MUSIC_SLOT_MOVE_REQ", payload);
    }

    /** Receive S2C_CLASS_MUSIC_SLOT_MOVE_RES(3079) from server */
    onClassMusicSlotMoveRes(handler: (payload: ClassMusicSlotMoveRes) => any): void {
        this.on("S2C_CLASS_MUSIC_SLOT_MOVE_RES", handler);
    }

    /** Receive S2C_CLASS_MUSIC_SLOT_MOVE_RES(3079) from server */
    onceClassMusicSlotMoveRes(handler: (payload: ClassMusicSlotMoveRes) => any): void {
        this.once("S2C_CLASS_MUSIC_SLOT_MOVE_RES", handler);
    }

    /** Call CLASS_MUSIC_SEQUENCE_CHANGE on server */
    async classMusicSequenceChange(payload: ClassMusicSequenceChangeReq): Promise<ClassMusicSequenceChangeRes> {
        return new Promise(res => {
            this.onceClassMusicSequenceChangeRes(res);
            this.sendClassMusicSequenceChangeReq(payload);
        });
    }

    /** Send C2S_CLASS_MUSIC_SEQUENCE_CHANGE_REQ(3080) to server */
    async sendClassMusicSequenceChangeReq(payload: ClassMusicSequenceChangeReq): Promise<void> {
        return this.send("C2S_CLASS_MUSIC_SEQUENCE_CHANGE_REQ", payload);
    }

    /** Receive S2C_CLASS_MUSIC_SEQUENCE_CHANGE_RES(3081) from server */
    onClassMusicSequenceChangeRes(handler: (payload: ClassMusicSequenceChangeRes) => any): void {
        this.on("S2C_CLASS_MUSIC_SEQUENCE_CHANGE_RES", handler);
    }

    /** Receive S2C_CLASS_MUSIC_SEQUENCE_CHANGE_RES(3081) from server */
    onceClassMusicSequenceChangeRes(handler: (payload: ClassMusicSequenceChangeRes) => any): void {
        this.once("S2C_CLASS_MUSIC_SEQUENCE_CHANGE_RES", handler);
    }

    /** Call CLASS_SHAPESHIFT_SLOT_MOVE on server */
    async classShapeshiftSlotMove(payload: ClassShapeshiftSlotMoveReq): Promise<ClassShapeshiftSlotMoveRes> {
        return new Promise(res => {
            this.onceClassShapeshiftSlotMoveRes(res);
            this.sendClassShapeshiftSlotMoveReq(payload);
        });
    }

    /** Send C2S_CLASS_SHAPESHIFT_SLOT_MOVE_REQ(3082) to server */
    async sendClassShapeshiftSlotMoveReq(payload: ClassShapeshiftSlotMoveReq): Promise<void> {
        return this.send("C2S_CLASS_SHAPESHIFT_SLOT_MOVE_REQ", payload);
    }

    /** Receive S2C_CLASS_SHAPESHIFT_SLOT_MOVE_RES(3083) from server */
    onClassShapeshiftSlotMoveRes(handler: (payload: ClassShapeshiftSlotMoveRes) => any): void {
        this.on("S2C_CLASS_SHAPESHIFT_SLOT_MOVE_RES", handler);
    }

    /** Receive S2C_CLASS_SHAPESHIFT_SLOT_MOVE_RES(3083) from server */
    onceClassShapeshiftSlotMoveRes(handler: (payload: ClassShapeshiftSlotMoveRes) => any): void {
        this.once("S2C_CLASS_SHAPESHIFT_SLOT_MOVE_RES", handler);
    }

    /** Call CLASS_SHAPESHIFT_SEQUENCE_CHANGE on server */
    async classShapeshiftSequenceChange(payload: ClassShapeshiftSequenceChangeReq): Promise<ClassShapeshiftSequenceChangeRes> {
        return new Promise(res => {
            this.onceClassShapeshiftSequenceChangeRes(res);
            this.sendClassShapeshiftSequenceChangeReq(payload);
        });
    }

    /** Send C2S_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_REQ(3084) to server */
    async sendClassShapeshiftSequenceChangeReq(payload: ClassShapeshiftSequenceChangeReq): Promise<void> {
        return this.send("C2S_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_REQ", payload);
    }

    /** Receive S2C_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_RES(3085) from server */
    onClassShapeshiftSequenceChangeRes(handler: (payload: ClassShapeshiftSequenceChangeRes) => any): void {
        this.on("S2C_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_RES", handler);
    }

    /** Receive S2C_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_RES(3085) from server */
    onceClassShapeshiftSequenceChangeRes(handler: (payload: ClassShapeshiftSequenceChangeRes) => any): void {
        this.once("S2C_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_RES", handler);
    }
}

export type TrainingInfoReq = Unmessage<SC2S_TRAINING_INFO_REQ>;
export type TrainingInfoRes = Unmessage<SS2C_TRAINING_INFO_RES>;
export type TrainingRedeemLearningTokenReq = Unmessage<SC2S_TRAINING_REDEEM_LEARNING_TOKEN_REQ>;
export type TrainingRedeemLearningTokenRes = Unmessage<SS2C_TRAINING_REDEEM_LEARNING_TOKEN_RES>;
export type TrainingReceiveClassAbilityReq = Unmessage<SC2S_TRAINING_RECEIVE_CLASS_ABILITY_REQ>;
export type TrainingReceiveClassAbilityRes = Unmessage<SS2C_TRAINING_RECEIVE_CLASS_ABILITY_RES>;
export type TrainingRedeemRewardTokenReq = Unmessage<SC2S_TRAINING_REDEEM_REWARD_TOKEN_REQ>;
export type TrainingRedeemRewardTokenRes = Unmessage<SS2C_TRAINING_REDEEM_REWARD_TOKEN_RES>;
export type TrainingReceiveRewardReq = Unmessage<SC2S_TRAINING_RECEIVE_REWARD_REQ>;
export type TrainingReceiveRewardRes = Unmessage<SS2C_TRAINING_RECEIVE_REWARD_RES>;
export type ClassLevelInfoReq = Unmessage<SC2S_CLASS_LEVEL_INFO_REQ>;
export type ClassLevelInfoRes = Unmessage<SS2C_CLASS_LEVEL_INFO_RES>;
export type ClassEquipInfoReq = Unmessage<SC2S_CLASS_EQUIP_INFO_REQ>;
export type ClassEquipInfoRes = Unmessage<SS2C_CLASS_EQUIP_INFO_RES>;
export type ClassPerkListReq = Unmessage<SC2S_CLASS_PERK_LIST_REQ>;
export type ClassPerkListRes = Unmessage<SS2C_CLASS_PERK_LIST_RES>;
export type ClassSkillListReq = Unmessage<SC2S_CLASS_SKILL_LIST_REQ>;
export type ClassSkillListRes = Unmessage<SS2C_CLASS_SKILL_LIST_RES>;
export type ClassSpellListReq = Unmessage<SC2S_CLASS_SPELL_LIST_REQ>;
export type ClassSpellListRes = Unmessage<SS2C_CLASS_SPELL_LIST_RES>;
export type ClassMusicListReq = Unmessage<SC2S_CLASS_MUSIC_LIST_REQ>;
export type ClassMusicListRes = Unmessage<SS2C_CLASS_MUSIC_LIST_RES>;
export type ClassShapeshiftListReq = Unmessage<SC2S_CLASS_SHAPESHIFT_LIST_REQ>;
export type ClassShapeshiftListRes = Unmessage<SS2C_CLASS_SHAPESHIFT_LIST_RES>;
export type ClassSpellSlotMoveReq = Unmessage<SC2S_CLASS_SPELL_SLOT_MOVE_REQ>;
export type ClassSpellSlotMoveRes = Unmessage<SS2C_CLASS_SPELL_SLOT_MOVE_RES>;
export type ClassSpellSequenceChangeReq = Unmessage<SC2S_CLASS_SPELL_SEQUENCE_CHANGE_REQ>;
export type ClassSpellSequenceChangeRes = Unmessage<SS2C_CLASS_SPELL_SEQUENCE_CHANGE_RES>;
export type ClassItemMoveReq = Unmessage<SC2S_CLASS_ITEM_MOVE_REQ>;
export type ClassItemMoveRes = Unmessage<SS2C_CLASS_ITEM_MOVE_RES>;
export type ClassMusicSlotMoveReq = Unmessage<SC2S_CLASS_MUSIC_SLOT_MOVE_REQ>;
export type ClassMusicSlotMoveRes = Unmessage<SS2C_CLASS_MUSIC_SLOT_MOVE_RES>;
export type ClassMusicSequenceChangeReq = Unmessage<SC2S_CLASS_MUSIC_SEQUENCE_CHANGE_REQ>;
export type ClassMusicSequenceChangeRes = Unmessage<SS2C_CLASS_MUSIC_SEQUENCE_CHANGE_RES>;
export type ClassShapeshiftSlotMoveReq = Unmessage<SC2S_CLASS_SHAPESHIFT_SLOT_MOVE_REQ>;
export type ClassShapeshiftSlotMoveRes = Unmessage<SS2C_CLASS_SHAPESHIFT_SLOT_MOVE_RES>;
export type ClassShapeshiftSequenceChangeReq = Unmessage<SC2S_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_REQ>;
export type ClassShapeshiftSequenceChangeRes = Unmessage<SS2C_CLASS_SHAPESHIFT_SEQUENCE_CHANGE_RES>;
