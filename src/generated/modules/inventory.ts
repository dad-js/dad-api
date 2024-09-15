import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_INVENTORY_INFO_REQ } from "../pb/Inventory_pb";
import { type SS2C_INVENTORY_INFO_RES } from "../pb/Inventory_pb";
import { type SC2S_INVENTORY_ALL_UPDATE_REQ } from "../pb/Inventory_pb";
import { type SS2C_INVENTORY_ALL_UPDATE_RES } from "../pb/Inventory_pb";
import { type SC2S_INVENTORY_MOVE_REQ } from "../pb/Inventory_pb";
import { type SS2C_INVENTORY_MOVE_RES } from "../pb/Inventory_pb";
import { type SC2S_INVENTORY_MERGE_REQ } from "../pb/Inventory_pb";
import { type SS2C_INVENTORY_MERGE_RES } from "../pb/Inventory_pb";
import { type SC2S_INVENTORY_SWAP_REQ } from "../pb/Inventory_pb";
import { type SS2C_INVENTORY_SWAP_RES } from "../pb/Inventory_pb";
import { type SC2S_INVENTORY_SPLIT_MOVE_REQ } from "../pb/Inventory_pb";
import { type SS2C_INVENTORY_SPLIT_MOVE_RES } from "../pb/Inventory_pb";
import { type SC2S_INVENTORY_SPLIT_MERGE_REQ } from "../pb/Inventory_pb";
import { type SS2C_INVENTORY_SPLIT_MERGE_RES } from "../pb/Inventory_pb";
import { type SC2S_INVENTORY_SPLIT_SWAP_REQ } from "../pb/Inventory_pb";
import { type SS2C_INVENTORY_SPLIT_SWAP_RES } from "../pb/Inventory_pb";
import { type SC2S_INVENTORY_TWO_HANDED_WEAPON_SWAP_REQ } from "../pb/Inventory_pb";
import { type SS2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RES } from "../pb/Inventory_pb";
import { type SC2S_INVENTORY_SINGLE_UPDATE_REQ } from "../pb/Inventory_pb";
import { type SS2C_INVENTORY_SINGLE_UPDATE_RES } from "../pb/Inventory_pb";
import { type SC2S_STORAGE_INFO_REQ } from "../pb/Inventory_pb";
import { type SS2C_STORAGE_INFO_RES } from "../pb/Inventory_pb";
import { type SC2S_INVENTORY_EXPAND_STORAGE_REQ } from "../pb/Inventory_pb";
import { type SS2C_INVENTORY_EXPAND_STORAGE_RES } from "../pb/Inventory_pb";

export class InventoryModule extends Module {
    override name = "InventoryModule";

    /** Call INVENTORY_INFO on server */
    async inventoryInfo(payload: InventoryInfoReq): Promise<InventoryInfoRes> {
        return new Promise(res => {
            this.onceInventoryInfoRes(res);
            this.sendInventoryInfoReq(payload);
        });
    }

    /** Send C2S_INVENTORY_INFO_REQ(501) to server */
    async sendInventoryInfoReq(payload: InventoryInfoReq): Promise<void> {
        return this.send("C2S_INVENTORY_INFO_REQ", payload);
    }

    /** Receive S2C_INVENTORY_INFO_RES(502) from server */
    onInventoryInfoRes(handler: (payload: InventoryInfoRes) => any): void {
        this.on("S2C_INVENTORY_INFO_RES", handler);
    }

    /** Receive S2C_INVENTORY_INFO_RES(502) from server */
    onceInventoryInfoRes(handler: (payload: InventoryInfoRes) => any): void {
        this.once("S2C_INVENTORY_INFO_RES", handler);
    }

    /** Call INVENTORY_ALL_UPDATE on server */
    async inventoryAllUpdate(payload: InventoryAllUpdateReq): Promise<InventoryAllUpdateRes> {
        return new Promise(res => {
            this.onceInventoryAllUpdateRes(res);
            this.sendInventoryAllUpdateReq(payload);
        });
    }

    /** Send C2S_INVENTORY_ALL_UPDATE_REQ(503) to server */
    async sendInventoryAllUpdateReq(payload: InventoryAllUpdateReq): Promise<void> {
        return this.send("C2S_INVENTORY_ALL_UPDATE_REQ", payload);
    }

    /** Receive S2C_INVENTORY_ALL_UPDATE_RES(504) from server */
    onInventoryAllUpdateRes(handler: (payload: InventoryAllUpdateRes) => any): void {
        this.on("S2C_INVENTORY_ALL_UPDATE_RES", handler);
    }

    /** Receive S2C_INVENTORY_ALL_UPDATE_RES(504) from server */
    onceInventoryAllUpdateRes(handler: (payload: InventoryAllUpdateRes) => any): void {
        this.once("S2C_INVENTORY_ALL_UPDATE_RES", handler);
    }

    /** Call INVENTORY_MOVE on server */
    async inventoryMove(payload: InventoryMoveReq): Promise<InventoryMoveRes> {
        return new Promise(res => {
            this.onceInventoryMoveRes(res);
            this.sendInventoryMoveReq(payload);
        });
    }

    /** Send C2S_INVENTORY_MOVE_REQ(507) to server */
    async sendInventoryMoveReq(payload: InventoryMoveReq): Promise<void> {
        return this.send("C2S_INVENTORY_MOVE_REQ", payload);
    }

    /** Receive S2C_INVENTORY_MOVE_RES(508) from server */
    onInventoryMoveRes(handler: (payload: InventoryMoveRes) => any): void {
        this.on("S2C_INVENTORY_MOVE_RES", handler);
    }

    /** Receive S2C_INVENTORY_MOVE_RES(508) from server */
    onceInventoryMoveRes(handler: (payload: InventoryMoveRes) => any): void {
        this.once("S2C_INVENTORY_MOVE_RES", handler);
    }

    /** Call INVENTORY_MERGE on server */
    async inventoryMerge(payload: InventoryMergeReq): Promise<InventoryMergeRes> {
        return new Promise(res => {
            this.onceInventoryMergeRes(res);
            this.sendInventoryMergeReq(payload);
        });
    }

    /** Send C2S_INVENTORY_MERGE_REQ(509) to server */
    async sendInventoryMergeReq(payload: InventoryMergeReq): Promise<void> {
        return this.send("C2S_INVENTORY_MERGE_REQ", payload);
    }

    /** Receive S2C_INVENTORY_MERGE_RES(510) from server */
    onInventoryMergeRes(handler: (payload: InventoryMergeRes) => any): void {
        this.on("S2C_INVENTORY_MERGE_RES", handler);
    }

    /** Receive S2C_INVENTORY_MERGE_RES(510) from server */
    onceInventoryMergeRes(handler: (payload: InventoryMergeRes) => any): void {
        this.once("S2C_INVENTORY_MERGE_RES", handler);
    }

    /** Call INVENTORY_SWAP on server */
    async inventorySwap(payload: InventorySwapReq): Promise<InventorySwapRes> {
        return new Promise(res => {
            this.onceInventorySwapRes(res);
            this.sendInventorySwapReq(payload);
        });
    }

    /** Send C2S_INVENTORY_SWAP_REQ(511) to server */
    async sendInventorySwapReq(payload: InventorySwapReq): Promise<void> {
        return this.send("C2S_INVENTORY_SWAP_REQ", payload);
    }

    /** Receive S2C_INVENTORY_SWAP_RES(512) from server */
    onInventorySwapRes(handler: (payload: InventorySwapRes) => any): void {
        this.on("S2C_INVENTORY_SWAP_RES", handler);
    }

    /** Receive S2C_INVENTORY_SWAP_RES(512) from server */
    onceInventorySwapRes(handler: (payload: InventorySwapRes) => any): void {
        this.once("S2C_INVENTORY_SWAP_RES", handler);
    }

    /** Call INVENTORY_SPLIT_MOVE on server */
    async inventorySplitMove(payload: InventorySplitMoveReq): Promise<InventorySplitMoveRes> {
        return new Promise(res => {
            this.onceInventorySplitMoveRes(res);
            this.sendInventorySplitMoveReq(payload);
        });
    }

    /** Send C2S_INVENTORY_SPLIT_MOVE_REQ(513) to server */
    async sendInventorySplitMoveReq(payload: InventorySplitMoveReq): Promise<void> {
        return this.send("C2S_INVENTORY_SPLIT_MOVE_REQ", payload);
    }

    /** Receive S2C_INVENTORY_SPLIT_MOVE_RES(514) from server */
    onInventorySplitMoveRes(handler: (payload: InventorySplitMoveRes) => any): void {
        this.on("S2C_INVENTORY_SPLIT_MOVE_RES", handler);
    }

    /** Receive S2C_INVENTORY_SPLIT_MOVE_RES(514) from server */
    onceInventorySplitMoveRes(handler: (payload: InventorySplitMoveRes) => any): void {
        this.once("S2C_INVENTORY_SPLIT_MOVE_RES", handler);
    }

    /** Call INVENTORY_SPLIT_MERGE on server */
    async inventorySplitMerge(payload: InventorySplitMergeReq): Promise<InventorySplitMergeRes> {
        return new Promise(res => {
            this.onceInventorySplitMergeRes(res);
            this.sendInventorySplitMergeReq(payload);
        });
    }

    /** Send C2S_INVENTORY_SPLIT_MERGE_REQ(515) to server */
    async sendInventorySplitMergeReq(payload: InventorySplitMergeReq): Promise<void> {
        return this.send("C2S_INVENTORY_SPLIT_MERGE_REQ", payload);
    }

    /** Receive S2C_INVENTORY_SPLIT_MERGE_RES(516) from server */
    onInventorySplitMergeRes(handler: (payload: InventorySplitMergeRes) => any): void {
        this.on("S2C_INVENTORY_SPLIT_MERGE_RES", handler);
    }

    /** Receive S2C_INVENTORY_SPLIT_MERGE_RES(516) from server */
    onceInventorySplitMergeRes(handler: (payload: InventorySplitMergeRes) => any): void {
        this.once("S2C_INVENTORY_SPLIT_MERGE_RES", handler);
    }

    /** Call INVENTORY_SPLIT_SWAP on server */
    async inventorySplitSwap(payload: InventorySplitSwapReq): Promise<InventorySplitSwapRes> {
        return new Promise(res => {
            this.onceInventorySplitSwapRes(res);
            this.sendInventorySplitSwapReq(payload);
        });
    }

    /** Send C2S_INVENTORY_SPLIT_SWAP_REQ(517) to server */
    async sendInventorySplitSwapReq(payload: InventorySplitSwapReq): Promise<void> {
        return this.send("C2S_INVENTORY_SPLIT_SWAP_REQ", payload);
    }

    /** Receive S2C_INVENTORY_SPLIT_SWAP_RES(518) from server */
    onInventorySplitSwapRes(handler: (payload: InventorySplitSwapRes) => any): void {
        this.on("S2C_INVENTORY_SPLIT_SWAP_RES", handler);
    }

    /** Receive S2C_INVENTORY_SPLIT_SWAP_RES(518) from server */
    onceInventorySplitSwapRes(handler: (payload: InventorySplitSwapRes) => any): void {
        this.once("S2C_INVENTORY_SPLIT_SWAP_RES", handler);
    }

    /** Call INVENTORY_TWO_HANDED_WEAPON_SWAP on server */
    async inventoryTwoHandedWeaponSwap(payload: InventoryTwoHandedWeaponSwapReq): Promise<InventoryTwoHandedWeaponSwapRes> {
        return new Promise(res => {
            this.onceInventoryTwoHandedWeaponSwapRes(res);
            this.sendInventoryTwoHandedWeaponSwapReq(payload);
        });
    }

    /** Send C2S_INVENTORY_TWO_HANDED_WEAPON_SWAP_REQ(519) to server */
    async sendInventoryTwoHandedWeaponSwapReq(payload: InventoryTwoHandedWeaponSwapReq): Promise<void> {
        return this.send("C2S_INVENTORY_TWO_HANDED_WEAPON_SWAP_REQ", payload);
    }

    /** Receive S2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RES(520) from server */
    onInventoryTwoHandedWeaponSwapRes(handler: (payload: InventoryTwoHandedWeaponSwapRes) => any): void {
        this.on("S2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RES", handler);
    }

    /** Receive S2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RES(520) from server */
    onceInventoryTwoHandedWeaponSwapRes(handler: (payload: InventoryTwoHandedWeaponSwapRes) => any): void {
        this.once("S2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RES", handler);
    }

    /** Call INVENTORY_SINGLE_UPDATE on server */
    async inventorySingleUpdate(payload: InventorySingleUpdateReq): Promise<InventorySingleUpdateRes> {
        return new Promise(res => {
            this.onceInventorySingleUpdateRes(res);
            this.sendInventorySingleUpdateReq(payload);
        });
    }

    /** Send C2S_INVENTORY_SINGLE_UPDATE_REQ(505) to server */
    async sendInventorySingleUpdateReq(payload: InventorySingleUpdateReq): Promise<void> {
        return this.send("C2S_INVENTORY_SINGLE_UPDATE_REQ", payload);
    }

    /** Receive S2C_INVENTORY_SINGLE_UPDATE_RES(506) from server */
    onInventorySingleUpdateRes(handler: (payload: InventorySingleUpdateRes) => any): void {
        this.on("S2C_INVENTORY_SINGLE_UPDATE_RES", handler);
    }

    /** Receive S2C_INVENTORY_SINGLE_UPDATE_RES(506) from server */
    onceInventorySingleUpdateRes(handler: (payload: InventorySingleUpdateRes) => any): void {
        this.once("S2C_INVENTORY_SINGLE_UPDATE_RES", handler);
    }

    /** Call STORAGE_INFO on server */
    async storageInfo(payload: StorageInfoReq): Promise<StorageInfoRes> {
        return new Promise(res => {
            this.onceStorageInfoRes(res);
            this.sendStorageInfoReq(payload);
        });
    }

    /** Send C2S_STORAGE_INFO_REQ(551) to server */
    async sendStorageInfoReq(payload: StorageInfoReq): Promise<void> {
        return this.send("C2S_STORAGE_INFO_REQ", payload);
    }

    /** Receive S2C_STORAGE_INFO_RES(552) from server */
    onStorageInfoRes(handler: (payload: StorageInfoRes) => any): void {
        this.on("S2C_STORAGE_INFO_RES", handler);
    }

    /** Receive S2C_STORAGE_INFO_RES(552) from server */
    onceStorageInfoRes(handler: (payload: StorageInfoRes) => any): void {
        this.once("S2C_STORAGE_INFO_RES", handler);
    }

    /** Call INVENTORY_EXPAND_STORAGE on server */
    async inventoryExpandStorage(payload: InventoryExpandStorageReq): Promise<InventoryExpandStorageRes> {
        return new Promise(res => {
            this.onceInventoryExpandStorageRes(res);
            this.sendInventoryExpandStorageReq(payload);
        });
    }

    /** Send C2S_INVENTORY_EXPAND_STORAGE_REQ(521) to server */
    async sendInventoryExpandStorageReq(payload: InventoryExpandStorageReq): Promise<void> {
        return this.send("C2S_INVENTORY_EXPAND_STORAGE_REQ", payload);
    }

    /** Receive S2C_INVENTORY_EXPAND_STORAGE_RES(522) from server */
    onInventoryExpandStorageRes(handler: (payload: InventoryExpandStorageRes) => any): void {
        this.on("S2C_INVENTORY_EXPAND_STORAGE_RES", handler);
    }

    /** Receive S2C_INVENTORY_EXPAND_STORAGE_RES(522) from server */
    onceInventoryExpandStorageRes(handler: (payload: InventoryExpandStorageRes) => any): void {
        this.once("S2C_INVENTORY_EXPAND_STORAGE_RES", handler);
    }
}

export type InventoryInfoReq = Unmessage<SC2S_INVENTORY_INFO_REQ>;
export type InventoryInfoRes = Unmessage<SS2C_INVENTORY_INFO_RES>;
export type InventoryAllUpdateReq = Unmessage<SC2S_INVENTORY_ALL_UPDATE_REQ>;
export type InventoryAllUpdateRes = Unmessage<SS2C_INVENTORY_ALL_UPDATE_RES>;
export type InventoryMoveReq = Unmessage<SC2S_INVENTORY_MOVE_REQ>;
export type InventoryMoveRes = Unmessage<SS2C_INVENTORY_MOVE_RES>;
export type InventoryMergeReq = Unmessage<SC2S_INVENTORY_MERGE_REQ>;
export type InventoryMergeRes = Unmessage<SS2C_INVENTORY_MERGE_RES>;
export type InventorySwapReq = Unmessage<SC2S_INVENTORY_SWAP_REQ>;
export type InventorySwapRes = Unmessage<SS2C_INVENTORY_SWAP_RES>;
export type InventorySplitMoveReq = Unmessage<SC2S_INVENTORY_SPLIT_MOVE_REQ>;
export type InventorySplitMoveRes = Unmessage<SS2C_INVENTORY_SPLIT_MOVE_RES>;
export type InventorySplitMergeReq = Unmessage<SC2S_INVENTORY_SPLIT_MERGE_REQ>;
export type InventorySplitMergeRes = Unmessage<SS2C_INVENTORY_SPLIT_MERGE_RES>;
export type InventorySplitSwapReq = Unmessage<SC2S_INVENTORY_SPLIT_SWAP_REQ>;
export type InventorySplitSwapRes = Unmessage<SS2C_INVENTORY_SPLIT_SWAP_RES>;
export type InventoryTwoHandedWeaponSwapReq = Unmessage<SC2S_INVENTORY_TWO_HANDED_WEAPON_SWAP_REQ>;
export type InventoryTwoHandedWeaponSwapRes = Unmessage<SS2C_INVENTORY_TWO_HANDED_WEAPON_SWAP_RES>;
export type InventorySingleUpdateReq = Unmessage<SC2S_INVENTORY_SINGLE_UPDATE_REQ>;
export type InventorySingleUpdateRes = Unmessage<SS2C_INVENTORY_SINGLE_UPDATE_RES>;
export type StorageInfoReq = Unmessage<SC2S_STORAGE_INFO_REQ>;
export type StorageInfoRes = Unmessage<SS2C_STORAGE_INFO_RES>;
export type InventoryExpandStorageReq = Unmessage<SC2S_INVENTORY_EXPAND_STORAGE_REQ>;
export type InventoryExpandStorageRes = Unmessage<SS2C_INVENTORY_EXPAND_STORAGE_RES>;
