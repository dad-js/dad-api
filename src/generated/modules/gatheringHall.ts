import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_GATHERING_HALL_CHANNEL_LIST_REQ } from "../pb/GatheringHall_pb";
import { type SS2C_GATHERING_HALL_CHANNEL_LIST_RES } from "../pb/GatheringHall_pb";
import { type SC2S_GATHERING_HALL_CHANNEL_SELECT_REQ } from "../pb/GatheringHall_pb";
import { type SS2C_GATHERING_HALL_CHANNEL_SELECT_RES } from "../pb/GatheringHall_pb";
import { type SC2S_GATHERING_HALL_CHANNEL_EXIT_REQ } from "../pb/GatheringHall_pb";
import { type SS2C_GATHERING_HALL_CHANNEL_EXIT_RES } from "../pb/GatheringHall_pb";
import { type SC2S_GATHERING_HALL_CHANNEL_USER_LIST_REQ } from "../pb/GatheringHall_pb";
import { type SS2C_GATHERING_HALL_CHANNEL_USER_LIST_RES } from "../pb/GatheringHall_pb";
import { type SS2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT } from "../pb/GatheringHall_pb";
import { type SC2S_GATHERING_HALL_CHANNEL_CHAT_REQ } from "../pb/GatheringHall_pb";
import { type SS2C_GATHERING_HALL_CHANNEL_CHAT_RES } from "../pb/GatheringHall_pb";
import { type SS2C_GATHERING_HALL_CHANNEL_CHAT_NOT } from "../pb/GatheringHall_pb";
import { type SC2S_GATHERING_HALL_TARGET_EQUIPPED_ITEM_REQ } from "../pb/GatheringHall_pb";
import { type SS2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RES } from "../pb/GatheringHall_pb";

export class GatheringHallModule extends Module {
    override name = "GatheringHallModule";

    /** Call GATHERING_HALL_CHANNEL_LIST on server */
    async gatheringHallChannelList(payload: GatheringHallChannelListReq): Promise<GatheringHallChannelListRes> {
        return new Promise(res => {
            this.onceGatheringHallChannelListRes(res);
            this.sendGatheringHallChannelListReq(payload);
        });
    }

    /** Send C2S_GATHERING_HALL_CHANNEL_LIST_REQ(3201) to server */
    async sendGatheringHallChannelListReq(payload: GatheringHallChannelListReq): Promise<void> {
        return this.send("C2S_GATHERING_HALL_CHANNEL_LIST_REQ", payload);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_LIST_RES(3202) from server */
    onGatheringHallChannelListRes(handler: (payload: GatheringHallChannelListRes) => any): void {
        this.on("S2C_GATHERING_HALL_CHANNEL_LIST_RES", handler);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_LIST_RES(3202) from server */
    onceGatheringHallChannelListRes(handler: (payload: GatheringHallChannelListRes) => any): void {
        this.once("S2C_GATHERING_HALL_CHANNEL_LIST_RES", handler);
    }

    /** Call GATHERING_HALL_CHANNEL_SELECT on server */
    async gatheringHallChannelSelect(payload: GatheringHallChannelSelectReq): Promise<GatheringHallChannelSelectRes> {
        return new Promise(res => {
            this.onceGatheringHallChannelSelectRes(res);
            this.sendGatheringHallChannelSelectReq(payload);
        });
    }

    /** Send C2S_GATHERING_HALL_CHANNEL_SELECT_REQ(3203) to server */
    async sendGatheringHallChannelSelectReq(payload: GatheringHallChannelSelectReq): Promise<void> {
        return this.send("C2S_GATHERING_HALL_CHANNEL_SELECT_REQ", payload);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_SELECT_RES(3204) from server */
    onGatheringHallChannelSelectRes(handler: (payload: GatheringHallChannelSelectRes) => any): void {
        this.on("S2C_GATHERING_HALL_CHANNEL_SELECT_RES", handler);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_SELECT_RES(3204) from server */
    onceGatheringHallChannelSelectRes(handler: (payload: GatheringHallChannelSelectRes) => any): void {
        this.once("S2C_GATHERING_HALL_CHANNEL_SELECT_RES", handler);
    }

    /** Call GATHERING_HALL_CHANNEL_EXIT on server */
    async gatheringHallChannelExit(payload: GatheringHallChannelExitReq): Promise<GatheringHallChannelExitRes> {
        return new Promise(res => {
            this.onceGatheringHallChannelExitRes(res);
            this.sendGatheringHallChannelExitReq(payload);
        });
    }

    /** Send C2S_GATHERING_HALL_CHANNEL_EXIT_REQ(3205) to server */
    async sendGatheringHallChannelExitReq(payload: GatheringHallChannelExitReq): Promise<void> {
        return this.send("C2S_GATHERING_HALL_CHANNEL_EXIT_REQ", payload);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_EXIT_RES(3206) from server */
    onGatheringHallChannelExitRes(handler: (payload: GatheringHallChannelExitRes) => any): void {
        this.on("S2C_GATHERING_HALL_CHANNEL_EXIT_RES", handler);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_EXIT_RES(3206) from server */
    onceGatheringHallChannelExitRes(handler: (payload: GatheringHallChannelExitRes) => any): void {
        this.once("S2C_GATHERING_HALL_CHANNEL_EXIT_RES", handler);
    }

    /** Call GATHERING_HALL_CHANNEL_USER_LIST on server */
    async gatheringHallChannelUserList(payload: GatheringHallChannelUserListReq): Promise<GatheringHallChannelUserListRes> {
        return new Promise(res => {
            this.onceGatheringHallChannelUserListRes(res);
            this.sendGatheringHallChannelUserListReq(payload);
        });
    }

    /** Send C2S_GATHERING_HALL_CHANNEL_USER_LIST_REQ(3207) to server */
    async sendGatheringHallChannelUserListReq(payload: GatheringHallChannelUserListReq): Promise<void> {
        return this.send("C2S_GATHERING_HALL_CHANNEL_USER_LIST_REQ", payload);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_USER_LIST_RES(3208) from server */
    onGatheringHallChannelUserListRes(handler: (payload: GatheringHallChannelUserListRes) => any): void {
        this.on("S2C_GATHERING_HALL_CHANNEL_USER_LIST_RES", handler);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_USER_LIST_RES(3208) from server */
    onceGatheringHallChannelUserListRes(handler: (payload: GatheringHallChannelUserListRes) => any): void {
        this.once("S2C_GATHERING_HALL_CHANNEL_USER_LIST_RES", handler);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT(3209) from server */
    onGatheringHallChannelUserUpdateNot(handler: (payload: GatheringHallChannelUserUpdateNot) => any): void {
        this.on("S2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT", handler);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT(3209) from server */
    onceGatheringHallChannelUserUpdateNot(handler: (payload: GatheringHallChannelUserUpdateNot) => any): void {
        this.once("S2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT", handler);
    }

    /** Call GATHERING_HALL_CHANNEL_CHAT on server */
    async gatheringHallChannelChat(payload: GatheringHallChannelChatReq): Promise<GatheringHallChannelChatRes> {
        return new Promise(res => {
            this.onceGatheringHallChannelChatRes(res);
            this.sendGatheringHallChannelChatReq(payload);
        });
    }

    /** Send C2S_GATHERING_HALL_CHANNEL_CHAT_REQ(3220) to server */
    async sendGatheringHallChannelChatReq(payload: GatheringHallChannelChatReq): Promise<void> {
        return this.send("C2S_GATHERING_HALL_CHANNEL_CHAT_REQ", payload);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_CHAT_RES(3221) from server */
    onGatheringHallChannelChatRes(handler: (payload: GatheringHallChannelChatRes) => any): void {
        this.on("S2C_GATHERING_HALL_CHANNEL_CHAT_RES", handler);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_CHAT_RES(3221) from server */
    onceGatheringHallChannelChatRes(handler: (payload: GatheringHallChannelChatRes) => any): void {
        this.once("S2C_GATHERING_HALL_CHANNEL_CHAT_RES", handler);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_CHAT_NOT(3222) from server */
    onGatheringHallChannelChatNot(handler: (payload: GatheringHallChannelChatNot) => any): void {
        this.on("S2C_GATHERING_HALL_CHANNEL_CHAT_NOT", handler);
    }

    /** Receive S2C_GATHERING_HALL_CHANNEL_CHAT_NOT(3222) from server */
    onceGatheringHallChannelChatNot(handler: (payload: GatheringHallChannelChatNot) => any): void {
        this.once("S2C_GATHERING_HALL_CHANNEL_CHAT_NOT", handler);
    }

    /** Call GATHERING_HALL_TARGET_EQUIPPED_ITEM on server */
    async gatheringHallTargetEquippedItem(payload: GatheringHallTargetEquippedItemReq): Promise<GatheringHallTargetEquippedItemRes> {
        return new Promise(res => {
            this.onceGatheringHallTargetEquippedItemRes(res);
            this.sendGatheringHallTargetEquippedItemReq(payload);
        });
    }

    /** Send C2S_GATHERING_HALL_TARGET_EQUIPPED_ITEM_REQ(3230) to server */
    async sendGatheringHallTargetEquippedItemReq(payload: GatheringHallTargetEquippedItemReq): Promise<void> {
        return this.send("C2S_GATHERING_HALL_TARGET_EQUIPPED_ITEM_REQ", payload);
    }

    /** Receive S2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RES(3231) from server */
    onGatheringHallTargetEquippedItemRes(handler: (payload: GatheringHallTargetEquippedItemRes) => any): void {
        this.on("S2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RES", handler);
    }

    /** Receive S2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RES(3231) from server */
    onceGatheringHallTargetEquippedItemRes(handler: (payload: GatheringHallTargetEquippedItemRes) => any): void {
        this.once("S2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RES", handler);
    }
}

export type GatheringHallChannelListReq = Unmessage<SC2S_GATHERING_HALL_CHANNEL_LIST_REQ>;
export type GatheringHallChannelListRes = Unmessage<SS2C_GATHERING_HALL_CHANNEL_LIST_RES>;
export type GatheringHallChannelSelectReq = Unmessage<SC2S_GATHERING_HALL_CHANNEL_SELECT_REQ>;
export type GatheringHallChannelSelectRes = Unmessage<SS2C_GATHERING_HALL_CHANNEL_SELECT_RES>;
export type GatheringHallChannelExitReq = Unmessage<SC2S_GATHERING_HALL_CHANNEL_EXIT_REQ>;
export type GatheringHallChannelExitRes = Unmessage<SS2C_GATHERING_HALL_CHANNEL_EXIT_RES>;
export type GatheringHallChannelUserListReq = Unmessage<SC2S_GATHERING_HALL_CHANNEL_USER_LIST_REQ>;
export type GatheringHallChannelUserListRes = Unmessage<SS2C_GATHERING_HALL_CHANNEL_USER_LIST_RES>;
export type GatheringHallChannelUserUpdateNot = Unmessage<SS2C_GATHERING_HALL_CHANNEL_USER_UPDATE_NOT>;
export type GatheringHallChannelChatReq = Unmessage<SC2S_GATHERING_HALL_CHANNEL_CHAT_REQ>;
export type GatheringHallChannelChatRes = Unmessage<SS2C_GATHERING_HALL_CHANNEL_CHAT_RES>;
export type GatheringHallChannelChatNot = Unmessage<SS2C_GATHERING_HALL_CHANNEL_CHAT_NOT>;
export type GatheringHallTargetEquippedItemReq = Unmessage<SC2S_GATHERING_HALL_TARGET_EQUIPPED_ITEM_REQ>;
export type GatheringHallTargetEquippedItemRes = Unmessage<SS2C_GATHERING_HALL_TARGET_EQUIPPED_ITEM_RES>;
