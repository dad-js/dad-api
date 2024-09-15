import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_MARKETPLACE_ITEM_LIST_REQ } from "../pb/MarketPlace_pb";
import { type SS2C_MARKETPLACE_ITEM_LIST_RES } from "../pb/MarketPlace_pb";
import { type SC2S_MARKETPLACE_MY_ITEM_LIST_REQ } from "../pb/MarketPlace_pb";
import { type SS2C_MARKETPLACE_MY_ITEM_LIST_RES } from "../pb/MarketPlace_pb";
import { type SC2S_MARKETPLACE_ITEM_BUY_REQ } from "../pb/MarketPlace_pb";
import { type SS2C_MARKETPLACE_ITEM_BUY_RES } from "../pb/MarketPlace_pb";
import { type SC2S_MARKETPLACE_ITEM_REGISTER_REQ } from "../pb/MarketPlace_pb";
import { type SS2C_MARKETPLACE_ITEM_REGISTER_RES } from "../pb/MarketPlace_pb";
import { type SC2S_MARKETPLACE_ITEM_CANCEL_REQ } from "../pb/MarketPlace_pb";
import { type SS2C_MARKETPLACE_ITEM_CANCEL_RES } from "../pb/MarketPlace_pb";
import { type SC2S_MARKETPLACE_TRANSFER_ITEMS_REQ } from "../pb/MarketPlace_pb";
import { type SS2C_MARKETPLACE_TRANSFER_ITEMS_RES } from "../pb/MarketPlace_pb";
import { type SS2C_MARKETPLACE_ITEM_HAS_SOLD_NOT } from "../pb/MarketPlace_pb";
import { type SC2S_MARKETPLACE_ENTER_REQ } from "../pb/MarketPlace_pb";
import { type SS2C_MARKETPLACE_ENTER_RES } from "../pb/MarketPlace_pb";

export class MarketPlaceModule extends Module {
    override name = "MarketPlaceModule";

    /** Call MARKETPLACE_ITEM_LIST on server */
    async marketplaceItemList(payload: MarketplaceItemListReq): Promise<MarketplaceItemListRes> {
        return new Promise(res => {
            this.onceMarketplaceItemListRes(res);
            this.sendMarketplaceItemListReq(payload);
        });
    }

    /** Send C2S_MARKETPLACE_ITEM_LIST_REQ(3511) to server */
    async sendMarketplaceItemListReq(payload: MarketplaceItemListReq): Promise<void> {
        return this.send("C2S_MARKETPLACE_ITEM_LIST_REQ", payload);
    }

    /** Receive S2C_MARKETPLACE_ITEM_LIST_RES(3512) from server */
    onMarketplaceItemListRes(handler: (payload: MarketplaceItemListRes) => any): void {
        this.on("S2C_MARKETPLACE_ITEM_LIST_RES", handler);
    }

    /** Receive S2C_MARKETPLACE_ITEM_LIST_RES(3512) from server */
    onceMarketplaceItemListRes(handler: (payload: MarketplaceItemListRes) => any): void {
        this.once("S2C_MARKETPLACE_ITEM_LIST_RES", handler);
    }

    /** Call MARKETPLACE_MY_ITEM_LIST on server */
    async marketplaceMyItemList(payload: MarketplaceMyItemListReq): Promise<MarketplaceMyItemListRes> {
        return new Promise(res => {
            this.onceMarketplaceMyItemListRes(res);
            this.sendMarketplaceMyItemListReq(payload);
        });
    }

    /** Send C2S_MARKETPLACE_MY_ITEM_LIST_REQ(3513) to server */
    async sendMarketplaceMyItemListReq(payload: MarketplaceMyItemListReq): Promise<void> {
        return this.send("C2S_MARKETPLACE_MY_ITEM_LIST_REQ", payload);
    }

    /** Receive S2C_MARKETPLACE_MY_ITEM_LIST_RES(3514) from server */
    onMarketplaceMyItemListRes(handler: (payload: MarketplaceMyItemListRes) => any): void {
        this.on("S2C_MARKETPLACE_MY_ITEM_LIST_RES", handler);
    }

    /** Receive S2C_MARKETPLACE_MY_ITEM_LIST_RES(3514) from server */
    onceMarketplaceMyItemListRes(handler: (payload: MarketplaceMyItemListRes) => any): void {
        this.once("S2C_MARKETPLACE_MY_ITEM_LIST_RES", handler);
    }

    /** Call MARKETPLACE_ITEM_BUY on server */
    async marketplaceItemBuy(payload: MarketplaceItemBuyReq): Promise<MarketplaceItemBuyRes> {
        return new Promise(res => {
            this.onceMarketplaceItemBuyRes(res);
            this.sendMarketplaceItemBuyReq(payload);
        });
    }

    /** Send C2S_MARKETPLACE_ITEM_BUY_REQ(3531) to server */
    async sendMarketplaceItemBuyReq(payload: MarketplaceItemBuyReq): Promise<void> {
        return this.send("C2S_MARKETPLACE_ITEM_BUY_REQ", payload);
    }

    /** Receive S2C_MARKETPLACE_ITEM_BUY_RES(3532) from server */
    onMarketplaceItemBuyRes(handler: (payload: MarketplaceItemBuyRes) => any): void {
        this.on("S2C_MARKETPLACE_ITEM_BUY_RES", handler);
    }

    /** Receive S2C_MARKETPLACE_ITEM_BUY_RES(3532) from server */
    onceMarketplaceItemBuyRes(handler: (payload: MarketplaceItemBuyRes) => any): void {
        this.once("S2C_MARKETPLACE_ITEM_BUY_RES", handler);
    }

    /** Call MARKETPLACE_ITEM_REGISTER on server */
    async marketplaceItemRegister(payload: MarketplaceItemRegisterReq): Promise<MarketplaceItemRegisterRes> {
        return new Promise(res => {
            this.onceMarketplaceItemRegisterRes(res);
            this.sendMarketplaceItemRegisterReq(payload);
        });
    }

    /** Send C2S_MARKETPLACE_ITEM_REGISTER_REQ(3533) to server */
    async sendMarketplaceItemRegisterReq(payload: MarketplaceItemRegisterReq): Promise<void> {
        return this.send("C2S_MARKETPLACE_ITEM_REGISTER_REQ", payload);
    }

    /** Receive S2C_MARKETPLACE_ITEM_REGISTER_RES(3534) from server */
    onMarketplaceItemRegisterRes(handler: (payload: MarketplaceItemRegisterRes) => any): void {
        this.on("S2C_MARKETPLACE_ITEM_REGISTER_RES", handler);
    }

    /** Receive S2C_MARKETPLACE_ITEM_REGISTER_RES(3534) from server */
    onceMarketplaceItemRegisterRes(handler: (payload: MarketplaceItemRegisterRes) => any): void {
        this.once("S2C_MARKETPLACE_ITEM_REGISTER_RES", handler);
    }

    /** Call MARKETPLACE_ITEM_CANCEL on server */
    async marketplaceItemCancel(payload: MarketplaceItemCancelReq): Promise<MarketplaceItemCancelRes> {
        return new Promise(res => {
            this.onceMarketplaceItemCancelRes(res);
            this.sendMarketplaceItemCancelReq(payload);
        });
    }

    /** Send C2S_MARKETPLACE_ITEM_CANCEL_REQ(3535) to server */
    async sendMarketplaceItemCancelReq(payload: MarketplaceItemCancelReq): Promise<void> {
        return this.send("C2S_MARKETPLACE_ITEM_CANCEL_REQ", payload);
    }

    /** Receive S2C_MARKETPLACE_ITEM_CANCEL_RES(3536) from server */
    onMarketplaceItemCancelRes(handler: (payload: MarketplaceItemCancelRes) => any): void {
        this.on("S2C_MARKETPLACE_ITEM_CANCEL_RES", handler);
    }

    /** Receive S2C_MARKETPLACE_ITEM_CANCEL_RES(3536) from server */
    onceMarketplaceItemCancelRes(handler: (payload: MarketplaceItemCancelRes) => any): void {
        this.once("S2C_MARKETPLACE_ITEM_CANCEL_RES", handler);
    }

    /** Call MARKETPLACE_TRANSFER_ITEMS on server */
    async marketplaceTransferItems(payload: MarketplaceTransferItemsReq): Promise<MarketplaceTransferItemsRes> {
        return new Promise(res => {
            this.onceMarketplaceTransferItemsRes(res);
            this.sendMarketplaceTransferItemsReq(payload);
        });
    }

    /** Send C2S_MARKETPLACE_TRANSFER_ITEMS_REQ(3551) to server */
    async sendMarketplaceTransferItemsReq(payload: MarketplaceTransferItemsReq): Promise<void> {
        return this.send("C2S_MARKETPLACE_TRANSFER_ITEMS_REQ", payload);
    }

    /** Receive S2C_MARKETPLACE_TRANSFER_ITEMS_RES(3552) from server */
    onMarketplaceTransferItemsRes(handler: (payload: MarketplaceTransferItemsRes) => any): void {
        this.on("S2C_MARKETPLACE_TRANSFER_ITEMS_RES", handler);
    }

    /** Receive S2C_MARKETPLACE_TRANSFER_ITEMS_RES(3552) from server */
    onceMarketplaceTransferItemsRes(handler: (payload: MarketplaceTransferItemsRes) => any): void {
        this.once("S2C_MARKETPLACE_TRANSFER_ITEMS_RES", handler);
    }

    /** Receive S2C_MARKETPLACE_ITEM_HAS_SOLD_NOT(3560) from server */
    onMarketplaceItemHasSoldNot(handler: (payload: MarketplaceItemHasSoldNot) => any): void {
        this.on("S2C_MARKETPLACE_ITEM_HAS_SOLD_NOT", handler);
    }

    /** Receive S2C_MARKETPLACE_ITEM_HAS_SOLD_NOT(3560) from server */
    onceMarketplaceItemHasSoldNot(handler: (payload: MarketplaceItemHasSoldNot) => any): void {
        this.once("S2C_MARKETPLACE_ITEM_HAS_SOLD_NOT", handler);
    }

    /** Call MARKETPLACE_ENTER on server */
    async marketplaceEnter(payload: MarketplaceEnterReq): Promise<MarketplaceEnterRes> {
        return new Promise(res => {
            this.onceMarketplaceEnterRes(res);
            this.sendMarketplaceEnterReq(payload);
        });
    }

    /** Send C2S_MARKETPLACE_ENTER_REQ(3565) to server */
    async sendMarketplaceEnterReq(payload: MarketplaceEnterReq): Promise<void> {
        return this.send("C2S_MARKETPLACE_ENTER_REQ", payload);
    }

    /** Receive S2C_MARKETPLACE_ENTER_RES(3566) from server */
    onMarketplaceEnterRes(handler: (payload: MarketplaceEnterRes) => any): void {
        this.on("S2C_MARKETPLACE_ENTER_RES", handler);
    }

    /** Receive S2C_MARKETPLACE_ENTER_RES(3566) from server */
    onceMarketplaceEnterRes(handler: (payload: MarketplaceEnterRes) => any): void {
        this.once("S2C_MARKETPLACE_ENTER_RES", handler);
    }
}

export type MarketplaceItemListReq = Unmessage<SC2S_MARKETPLACE_ITEM_LIST_REQ>;
export type MarketplaceItemListRes = Unmessage<SS2C_MARKETPLACE_ITEM_LIST_RES>;
export type MarketplaceMyItemListReq = Unmessage<SC2S_MARKETPLACE_MY_ITEM_LIST_REQ>;
export type MarketplaceMyItemListRes = Unmessage<SS2C_MARKETPLACE_MY_ITEM_LIST_RES>;
export type MarketplaceItemBuyReq = Unmessage<SC2S_MARKETPLACE_ITEM_BUY_REQ>;
export type MarketplaceItemBuyRes = Unmessage<SS2C_MARKETPLACE_ITEM_BUY_RES>;
export type MarketplaceItemRegisterReq = Unmessage<SC2S_MARKETPLACE_ITEM_REGISTER_REQ>;
export type MarketplaceItemRegisterRes = Unmessage<SS2C_MARKETPLACE_ITEM_REGISTER_RES>;
export type MarketplaceItemCancelReq = Unmessage<SC2S_MARKETPLACE_ITEM_CANCEL_REQ>;
export type MarketplaceItemCancelRes = Unmessage<SS2C_MARKETPLACE_ITEM_CANCEL_RES>;
export type MarketplaceTransferItemsReq = Unmessage<SC2S_MARKETPLACE_TRANSFER_ITEMS_REQ>;
export type MarketplaceTransferItemsRes = Unmessage<SS2C_MARKETPLACE_TRANSFER_ITEMS_RES>;
export type MarketplaceItemHasSoldNot = Unmessage<SS2C_MARKETPLACE_ITEM_HAS_SOLD_NOT>;
export type MarketplaceEnterReq = Unmessage<SC2S_MARKETPLACE_ENTER_REQ>;
export type MarketplaceEnterRes = Unmessage<SS2C_MARKETPLACE_ENTER_RES>;
