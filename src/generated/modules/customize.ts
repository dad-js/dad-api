import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_CUSTOMIZE_INFO_REQ } from "../pb/Customize_pb";
import { type SS2C_CUSTOMIZE_INFO_RES } from "../pb/Customize_pb";
import { type SC2S_CUSTOMIZE_MOUNT_REQ } from "../pb/Customize_pb";
import { type SS2C_CUSTOMIZE_MOUNT_RES } from "../pb/Customize_pb";
import { type SC2S_CUSTOMIZE_UNMOUNT_REQ } from "../pb/Customize_pb";
import { type SS2C_CUSTOMIZE_UNMOUNT_RES } from "../pb/Customize_pb";
import { type SC2S_CUSTOMIZE_NEW_ITEM_CHECK_REQ } from "../pb/Customize_pb";
import { type SS2C_CUSTOMIZE_NEW_ITEM_CHECK_RES } from "../pb/Customize_pb";
import { type SS2C_CUSTOMIZE_NEW_ITEM_ALERT_NOT } from "../pb/Customize_pb";

export class CustomizeModule extends Module {
    override name = "CustomizeModule";

    /** Call CUSTOMIZE_INFO on server */
    async customizeInfo(payload: CustomizeInfoReq): Promise<CustomizeInfoRes> {
        return new Promise(res => {
            this.onceCustomizeInfoRes(res);
            this.sendCustomizeInfoReq(payload);
        });
    }

    /** Send C2S_CUSTOMIZE_INFO_REQ(2341) to server */
    async sendCustomizeInfoReq(payload: CustomizeInfoReq): Promise<void> {
        return this.send("C2S_CUSTOMIZE_INFO_REQ", payload);
    }

    /** Receive S2C_CUSTOMIZE_INFO_RES(2342) from server */
    onCustomizeInfoRes(handler: (payload: CustomizeInfoRes) => any): void {
        this.on("S2C_CUSTOMIZE_INFO_RES", handler);
    }

    /** Receive S2C_CUSTOMIZE_INFO_RES(2342) from server */
    onceCustomizeInfoRes(handler: (payload: CustomizeInfoRes) => any): void {
        this.once("S2C_CUSTOMIZE_INFO_RES", handler);
    }

    /** Call CUSTOMIZE_MOUNT on server */
    async customizeMount(payload: CustomizeMountReq): Promise<CustomizeMountRes> {
        return new Promise(res => {
            this.onceCustomizeMountRes(res);
            this.sendCustomizeMountReq(payload);
        });
    }

    /** Send C2S_CUSTOMIZE_MOUNT_REQ(2351) to server */
    async sendCustomizeMountReq(payload: CustomizeMountReq): Promise<void> {
        return this.send("C2S_CUSTOMIZE_MOUNT_REQ", payload);
    }

    /** Receive S2C_CUSTOMIZE_MOUNT_RES(2352) from server */
    onCustomizeMountRes(handler: (payload: CustomizeMountRes) => any): void {
        this.on("S2C_CUSTOMIZE_MOUNT_RES", handler);
    }

    /** Receive S2C_CUSTOMIZE_MOUNT_RES(2352) from server */
    onceCustomizeMountRes(handler: (payload: CustomizeMountRes) => any): void {
        this.once("S2C_CUSTOMIZE_MOUNT_RES", handler);
    }

    /** Call CUSTOMIZE_UNMOUNT on server */
    async customizeUnmount(payload: CustomizeUnmountReq): Promise<CustomizeUnmountRes> {
        return new Promise(res => {
            this.onceCustomizeUnmountRes(res);
            this.sendCustomizeUnmountReq(payload);
        });
    }

    /** Send C2S_CUSTOMIZE_UNMOUNT_REQ(2353) to server */
    async sendCustomizeUnmountReq(payload: CustomizeUnmountReq): Promise<void> {
        return this.send("C2S_CUSTOMIZE_UNMOUNT_REQ", payload);
    }

    /** Receive S2C_CUSTOMIZE_UNMOUNT_RES(2354) from server */
    onCustomizeUnmountRes(handler: (payload: CustomizeUnmountRes) => any): void {
        this.on("S2C_CUSTOMIZE_UNMOUNT_RES", handler);
    }

    /** Receive S2C_CUSTOMIZE_UNMOUNT_RES(2354) from server */
    onceCustomizeUnmountRes(handler: (payload: CustomizeUnmountRes) => any): void {
        this.once("S2C_CUSTOMIZE_UNMOUNT_RES", handler);
    }

    /** Call CUSTOMIZE_NEW_ITEM_CHECK on server */
    async customizeNewItemCheck(payload: CustomizeNewItemCheckReq): Promise<CustomizeNewItemCheckRes> {
        return new Promise(res => {
            this.onceCustomizeNewItemCheckRes(res);
            this.sendCustomizeNewItemCheckReq(payload);
        });
    }

    /** Send C2S_CUSTOMIZE_NEW_ITEM_CHECK_REQ(2331) to server */
    async sendCustomizeNewItemCheckReq(payload: CustomizeNewItemCheckReq): Promise<void> {
        return this.send("C2S_CUSTOMIZE_NEW_ITEM_CHECK_REQ", payload);
    }

    /** Receive S2C_CUSTOMIZE_NEW_ITEM_CHECK_RES(2332) from server */
    onCustomizeNewItemCheckRes(handler: (payload: CustomizeNewItemCheckRes) => any): void {
        this.on("S2C_CUSTOMIZE_NEW_ITEM_CHECK_RES", handler);
    }

    /** Receive S2C_CUSTOMIZE_NEW_ITEM_CHECK_RES(2332) from server */
    onceCustomizeNewItemCheckRes(handler: (payload: CustomizeNewItemCheckRes) => any): void {
        this.once("S2C_CUSTOMIZE_NEW_ITEM_CHECK_RES", handler);
    }

    /** Receive S2C_CUSTOMIZE_NEW_ITEM_ALERT_NOT(2333) from server */
    onCustomizeNewItemAlertNot(handler: (payload: CustomizeNewItemAlertNot) => any): void {
        this.on("S2C_CUSTOMIZE_NEW_ITEM_ALERT_NOT", handler);
    }

    /** Receive S2C_CUSTOMIZE_NEW_ITEM_ALERT_NOT(2333) from server */
    onceCustomizeNewItemAlertNot(handler: (payload: CustomizeNewItemAlertNot) => any): void {
        this.once("S2C_CUSTOMIZE_NEW_ITEM_ALERT_NOT", handler);
    }
}

export type CustomizeInfoReq = Unmessage<SC2S_CUSTOMIZE_INFO_REQ>;
export type CustomizeInfoRes = Unmessage<SS2C_CUSTOMIZE_INFO_RES>;
export type CustomizeMountReq = Unmessage<SC2S_CUSTOMIZE_MOUNT_REQ>;
export type CustomizeMountRes = Unmessage<SS2C_CUSTOMIZE_MOUNT_RES>;
export type CustomizeUnmountReq = Unmessage<SC2S_CUSTOMIZE_UNMOUNT_REQ>;
export type CustomizeUnmountRes = Unmessage<SS2C_CUSTOMIZE_UNMOUNT_RES>;
export type CustomizeNewItemCheckReq = Unmessage<SC2S_CUSTOMIZE_NEW_ITEM_CHECK_REQ>;
export type CustomizeNewItemCheckRes = Unmessage<SS2C_CUSTOMIZE_NEW_ITEM_CHECK_RES>;
export type CustomizeNewItemAlertNot = Unmessage<SS2C_CUSTOMIZE_NEW_ITEM_ALERT_NOT>;
