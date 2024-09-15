import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_SHOP_ITEM_LIST_REQ } from "../pb/Shop_pb";
import { type SS2C_SHOP_ITEM_LIST_RES } from "../pb/Shop_pb";
import { type SC2S_SHOP_ITEM_BUY_REQ } from "../pb/Shop_pb";
import { type SS2C_SHOP_ITEM_BUY_RES } from "../pb/Shop_pb";
import { type SC2S_SHOP_ENTER_GIFT_CODE_REQ } from "../pb/Shop_pb";
import { type SS2C_SHOP_ENTER_GIFT_CODE_RES } from "../pb/Shop_pb";
import { type SC2S_SHOP_RED_STONE_SHARD_INFO_REQ } from "../pb/Shop_pb";
import { type SS2C_SHOP_RED_STONE_SHARD_INFO_RES } from "../pb/Shop_pb";
import { type SC2S_SHOP_RED_STONE_SHARD_BUY_REQ } from "../pb/Shop_pb";
import { type SS2C_SHOP_RED_STONE_SHARD_BUY_RES } from "../pb/Shop_pb";
import { type SC2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ } from "../pb/Shop_pb";
import { type SS2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES } from "../pb/Shop_pb";
import { type SC2S_SHOP_LEGEND_UPGRADE_REQ } from "../pb/Shop_pb";
import { type SS2C_SHOP_LEGEND_UPGRADE_RES } from "../pb/Shop_pb";
import { type SC2S_REFRESH_RED_STONE_SHARD_REQ } from "../pb/Shop_pb";
import { type SS2C_REFRESH_RED_STONE_SHARD_RES } from "../pb/Shop_pb";
import { type SC2S_SHOP_CHANGE_ACCOUNT_NAME_REQ } from "../pb/Shop_pb";
import { type SS2C_SHOP_CHANGE_ACCOUNT_NAME_RES } from "../pb/Shop_pb";
import { type SS2C_SHOP_ITEM_CHECK_NOT } from "../pb/Shop_pb";
import { type SC2S_SHOP_LEGEND_DLC_INSTALL_REQ } from "../pb/Shop_pb";
import { type SS2C_SHOP_LEGEND_DLC_INSTALL_RES } from "../pb/Shop_pb";
import { type SC2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ } from "../pb/Shop_pb";
import { type SS2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES } from "../pb/Shop_pb";
import { type SS2C_SHOP_TWITCH_DROPS_REWARD_NOT } from "../pb/Shop_pb";

export class ShopModule extends Module {
    override name = "ShopModule";

    /** Call SHOP_ITEM_LIST on server */
    async shopItemList(payload: ShopItemListReq): Promise<ShopItemListRes> {
        return new Promise(res => {
            this.onceShopItemListRes(res);
            this.sendShopItemListReq(payload);
        });
    }

    /** Send C2S_SHOP_ITEM_LIST_REQ(2502) to server */
    async sendShopItemListReq(payload: ShopItemListReq): Promise<void> {
        return this.send("C2S_SHOP_ITEM_LIST_REQ", payload);
    }

    /** Receive S2C_SHOP_ITEM_LIST_RES(2503) from server */
    onShopItemListRes(handler: (payload: ShopItemListRes) => any): void {
        this.on("S2C_SHOP_ITEM_LIST_RES", handler);
    }

    /** Receive S2C_SHOP_ITEM_LIST_RES(2503) from server */
    onceShopItemListRes(handler: (payload: ShopItemListRes) => any): void {
        this.once("S2C_SHOP_ITEM_LIST_RES", handler);
    }

    /** Call SHOP_ITEM_BUY on server */
    async shopItemBuy(payload: ShopItemBuyReq): Promise<ShopItemBuyRes> {
        return new Promise(res => {
            this.onceShopItemBuyRes(res);
            this.sendShopItemBuyReq(payload);
        });
    }

    /** Send C2S_SHOP_ITEM_BUY_REQ(2521) to server */
    async sendShopItemBuyReq(payload: ShopItemBuyReq): Promise<void> {
        return this.send("C2S_SHOP_ITEM_BUY_REQ", payload);
    }

    /** Receive S2C_SHOP_ITEM_BUY_RES(2522) from server */
    onShopItemBuyRes(handler: (payload: ShopItemBuyRes) => any): void {
        this.on("S2C_SHOP_ITEM_BUY_RES", handler);
    }

    /** Receive S2C_SHOP_ITEM_BUY_RES(2522) from server */
    onceShopItemBuyRes(handler: (payload: ShopItemBuyRes) => any): void {
        this.once("S2C_SHOP_ITEM_BUY_RES", handler);
    }

    /** Call SHOP_ENTER_GIFT_CODE on server */
    async shopEnterGiftCode(payload: ShopEnterGiftCodeReq): Promise<ShopEnterGiftCodeRes> {
        return new Promise(res => {
            this.onceShopEnterGiftCodeRes(res);
            this.sendShopEnterGiftCodeReq(payload);
        });
    }

    /** Send C2S_SHOP_ENTER_GIFT_CODE_REQ(2550) to server */
    async sendShopEnterGiftCodeReq(payload: ShopEnterGiftCodeReq): Promise<void> {
        return this.send("C2S_SHOP_ENTER_GIFT_CODE_REQ", payload);
    }

    /** Receive S2C_SHOP_ENTER_GIFT_CODE_RES(2551) from server */
    onShopEnterGiftCodeRes(handler: (payload: ShopEnterGiftCodeRes) => any): void {
        this.on("S2C_SHOP_ENTER_GIFT_CODE_RES", handler);
    }

    /** Receive S2C_SHOP_ENTER_GIFT_CODE_RES(2551) from server */
    onceShopEnterGiftCodeRes(handler: (payload: ShopEnterGiftCodeRes) => any): void {
        this.once("S2C_SHOP_ENTER_GIFT_CODE_RES", handler);
    }

    /** Call SHOP_RED_STONE_SHARD_INFO on server */
    async shopRedStoneShardInfo(payload: ShopRedStoneShardInfoReq): Promise<ShopRedStoneShardInfoRes> {
        return new Promise(res => {
            this.onceShopRedStoneShardInfoRes(res);
            this.sendShopRedStoneShardInfoReq(payload);
        });
    }

    /** Send C2S_SHOP_RED_STONE_SHARD_INFO_REQ(2555) to server */
    async sendShopRedStoneShardInfoReq(payload: ShopRedStoneShardInfoReq): Promise<void> {
        return this.send("C2S_SHOP_RED_STONE_SHARD_INFO_REQ", payload);
    }

    /** Receive S2C_SHOP_RED_STONE_SHARD_INFO_RES(2556) from server */
    onShopRedStoneShardInfoRes(handler: (payload: ShopRedStoneShardInfoRes) => any): void {
        this.on("S2C_SHOP_RED_STONE_SHARD_INFO_RES", handler);
    }

    /** Receive S2C_SHOP_RED_STONE_SHARD_INFO_RES(2556) from server */
    onceShopRedStoneShardInfoRes(handler: (payload: ShopRedStoneShardInfoRes) => any): void {
        this.once("S2C_SHOP_RED_STONE_SHARD_INFO_RES", handler);
    }

    /** Call SHOP_RED_STONE_SHARD_BUY on server */
    async shopRedStoneShardBuy(payload: ShopRedStoneShardBuyReq): Promise<ShopRedStoneShardBuyRes> {
        return new Promise(res => {
            this.onceShopRedStoneShardBuyRes(res);
            this.sendShopRedStoneShardBuyReq(payload);
        });
    }

    /** Send C2S_SHOP_RED_STONE_SHARD_BUY_REQ(2557) to server */
    async sendShopRedStoneShardBuyReq(payload: ShopRedStoneShardBuyReq): Promise<void> {
        return this.send("C2S_SHOP_RED_STONE_SHARD_BUY_REQ", payload);
    }

    /** Receive S2C_SHOP_RED_STONE_SHARD_BUY_RES(2558) from server */
    onShopRedStoneShardBuyRes(handler: (payload: ShopRedStoneShardBuyRes) => any): void {
        this.on("S2C_SHOP_RED_STONE_SHARD_BUY_RES", handler);
    }

    /** Receive S2C_SHOP_RED_STONE_SHARD_BUY_RES(2558) from server */
    onceShopRedStoneShardBuyRes(handler: (payload: ShopRedStoneShardBuyRes) => any): void {
        this.once("S2C_SHOP_RED_STONE_SHARD_BUY_RES", handler);
    }

    /** Call SHOP_RED_STONE_SHARD_BUY_CHECK on server */
    async shopRedStoneShardBuyCheck(payload: ShopRedStoneShardBuyCheckReq): Promise<ShopRedStoneShardBuyCheckRes> {
        return new Promise(res => {
            this.onceShopRedStoneShardBuyCheckRes(res);
            this.sendShopRedStoneShardBuyCheckReq(payload);
        });
    }

    /** Send C2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ(2560) to server */
    async sendShopRedStoneShardBuyCheckReq(payload: ShopRedStoneShardBuyCheckReq): Promise<void> {
        return this.send("C2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ", payload);
    }

    /** Receive S2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES(2561) from server */
    onShopRedStoneShardBuyCheckRes(handler: (payload: ShopRedStoneShardBuyCheckRes) => any): void {
        this.on("S2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES", handler);
    }

    /** Receive S2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES(2561) from server */
    onceShopRedStoneShardBuyCheckRes(handler: (payload: ShopRedStoneShardBuyCheckRes) => any): void {
        this.once("S2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES", handler);
    }

    /** Call SHOP_LEGEND_UPGRADE on server */
    async shopLegendUpgrade(payload: ShopLegendUpgradeReq): Promise<ShopLegendUpgradeRes> {
        return new Promise(res => {
            this.onceShopLegendUpgradeRes(res);
            this.sendShopLegendUpgradeReq(payload);
        });
    }

    /** Send C2S_SHOP_LEGEND_UPGRADE_REQ(2562) to server */
    async sendShopLegendUpgradeReq(payload: ShopLegendUpgradeReq): Promise<void> {
        return this.send("C2S_SHOP_LEGEND_UPGRADE_REQ", payload);
    }

    /** Receive S2C_SHOP_LEGEND_UPGRADE_RES(2563) from server */
    onShopLegendUpgradeRes(handler: (payload: ShopLegendUpgradeRes) => any): void {
        this.on("S2C_SHOP_LEGEND_UPGRADE_RES", handler);
    }

    /** Receive S2C_SHOP_LEGEND_UPGRADE_RES(2563) from server */
    onceShopLegendUpgradeRes(handler: (payload: ShopLegendUpgradeRes) => any): void {
        this.once("S2C_SHOP_LEGEND_UPGRADE_RES", handler);
    }

    /** Call REFRESH_RED_STONE_SHARD on server */
    async refreshRedStoneShard(payload: RefreshRedStoneShardReq): Promise<RefreshRedStoneShardRes> {
        return new Promise(res => {
            this.onceRefreshRedStoneShardRes(res);
            this.sendRefreshRedStoneShardReq(payload);
        });
    }

    /** Send C2S_REFRESH_RED_STONE_SHARD_REQ(10650) to server */
    async sendRefreshRedStoneShardReq(payload: RefreshRedStoneShardReq): Promise<void> {
        return this.send("C2S_REFRESH_RED_STONE_SHARD_REQ", payload);
    }

    /** Receive S2C_REFRESH_RED_STONE_SHARD_RES(10651) from server */
    onRefreshRedStoneShardRes(handler: (payload: RefreshRedStoneShardRes) => any): void {
        this.on("S2C_REFRESH_RED_STONE_SHARD_RES", handler);
    }

    /** Receive S2C_REFRESH_RED_STONE_SHARD_RES(10651) from server */
    onceRefreshRedStoneShardRes(handler: (payload: RefreshRedStoneShardRes) => any): void {
        this.once("S2C_REFRESH_RED_STONE_SHARD_RES", handler);
    }

    /** Call SHOP_CHANGE_ACCOUNT_NAME on server */
    async shopChangeAccountName(payload: ShopChangeAccountNameReq): Promise<ShopChangeAccountNameRes> {
        return new Promise(res => {
            this.onceShopChangeAccountNameRes(res);
            this.sendShopChangeAccountNameReq(payload);
        });
    }

    /** Send C2S_SHOP_CHANGE_ACCOUNT_NAME_REQ(2564) to server */
    async sendShopChangeAccountNameReq(payload: ShopChangeAccountNameReq): Promise<void> {
        return this.send("C2S_SHOP_CHANGE_ACCOUNT_NAME_REQ", payload);
    }

    /** Receive S2C_SHOP_CHANGE_ACCOUNT_NAME_RES(2565) from server */
    onShopChangeAccountNameRes(handler: (payload: ShopChangeAccountNameRes) => any): void {
        this.on("S2C_SHOP_CHANGE_ACCOUNT_NAME_RES", handler);
    }

    /** Receive S2C_SHOP_CHANGE_ACCOUNT_NAME_RES(2565) from server */
    onceShopChangeAccountNameRes(handler: (payload: ShopChangeAccountNameRes) => any): void {
        this.once("S2C_SHOP_CHANGE_ACCOUNT_NAME_RES", handler);
    }

    /** Receive S2C_SHOP_ITEM_CHECK_NOT(2570) from server */
    onShopItemCheckNot(handler: (payload: ShopItemCheckNot) => any): void {
        this.on("S2C_SHOP_ITEM_CHECK_NOT", handler);
    }

    /** Receive S2C_SHOP_ITEM_CHECK_NOT(2570) from server */
    onceShopItemCheckNot(handler: (payload: ShopItemCheckNot) => any): void {
        this.once("S2C_SHOP_ITEM_CHECK_NOT", handler);
    }

    /** Call SHOP_LEGEND_DLC_INSTALL on server */
    async shopLegendDlcInstall(payload: ShopLegendDlcInstallReq): Promise<ShopLegendDlcInstallRes> {
        return new Promise(res => {
            this.onceShopLegendDlcInstallRes(res);
            this.sendShopLegendDlcInstallReq(payload);
        });
    }

    /** Send C2S_SHOP_LEGEND_DLC_INSTALL_REQ(2566) to server */
    async sendShopLegendDlcInstallReq(payload: ShopLegendDlcInstallReq): Promise<void> {
        return this.send("C2S_SHOP_LEGEND_DLC_INSTALL_REQ", payload);
    }

    /** Receive S2C_SHOP_LEGEND_DLC_INSTALL_RES(2567) from server */
    onShopLegendDlcInstallRes(handler: (payload: ShopLegendDlcInstallRes) => any): void {
        this.on("S2C_SHOP_LEGEND_DLC_INSTALL_RES", handler);
    }

    /** Receive S2C_SHOP_LEGEND_DLC_INSTALL_RES(2567) from server */
    onceShopLegendDlcInstallRes(handler: (payload: ShopLegendDlcInstallRes) => any): void {
        this.once("S2C_SHOP_LEGEND_DLC_INSTALL_RES", handler);
    }

    /** Call SHOP_LEGEND_DLC_INSTALL_CHECK on server */
    async shopLegendDlcInstallCheck(payload: ShopLegendDlcInstallCheckReq): Promise<ShopLegendDlcInstallCheckRes> {
        return new Promise(res => {
            this.onceShopLegendDlcInstallCheckRes(res);
            this.sendShopLegendDlcInstallCheckReq(payload);
        });
    }

    /** Send C2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ(2568) to server */
    async sendShopLegendDlcInstallCheckReq(payload: ShopLegendDlcInstallCheckReq): Promise<void> {
        return this.send("C2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ", payload);
    }

    /** Receive S2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES(2569) from server */
    onShopLegendDlcInstallCheckRes(handler: (payload: ShopLegendDlcInstallCheckRes) => any): void {
        this.on("S2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES", handler);
    }

    /** Receive S2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES(2569) from server */
    onceShopLegendDlcInstallCheckRes(handler: (payload: ShopLegendDlcInstallCheckRes) => any): void {
        this.once("S2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES", handler);
    }

    /** Receive S2C_SHOP_TWITCH_DROPS_REWARD_NOT(2575) from server */
    onShopTwitchDropsRewardNot(handler: (payload: ShopTwitchDropsRewardNot) => any): void {
        this.on("S2C_SHOP_TWITCH_DROPS_REWARD_NOT", handler);
    }

    /** Receive S2C_SHOP_TWITCH_DROPS_REWARD_NOT(2575) from server */
    onceShopTwitchDropsRewardNot(handler: (payload: ShopTwitchDropsRewardNot) => any): void {
        this.once("S2C_SHOP_TWITCH_DROPS_REWARD_NOT", handler);
    }
}

export type ShopItemListReq = Unmessage<SC2S_SHOP_ITEM_LIST_REQ>;
export type ShopItemListRes = Unmessage<SS2C_SHOP_ITEM_LIST_RES>;
export type ShopItemBuyReq = Unmessage<SC2S_SHOP_ITEM_BUY_REQ>;
export type ShopItemBuyRes = Unmessage<SS2C_SHOP_ITEM_BUY_RES>;
export type ShopEnterGiftCodeReq = Unmessage<SC2S_SHOP_ENTER_GIFT_CODE_REQ>;
export type ShopEnterGiftCodeRes = Unmessage<SS2C_SHOP_ENTER_GIFT_CODE_RES>;
export type ShopRedStoneShardInfoReq = Unmessage<SC2S_SHOP_RED_STONE_SHARD_INFO_REQ>;
export type ShopRedStoneShardInfoRes = Unmessage<SS2C_SHOP_RED_STONE_SHARD_INFO_RES>;
export type ShopRedStoneShardBuyReq = Unmessage<SC2S_SHOP_RED_STONE_SHARD_BUY_REQ>;
export type ShopRedStoneShardBuyRes = Unmessage<SS2C_SHOP_RED_STONE_SHARD_BUY_RES>;
export type ShopRedStoneShardBuyCheckReq = Unmessage<SC2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ>;
export type ShopRedStoneShardBuyCheckRes = Unmessage<SS2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES>;
export type ShopLegendUpgradeReq = Unmessage<SC2S_SHOP_LEGEND_UPGRADE_REQ>;
export type ShopLegendUpgradeRes = Unmessage<SS2C_SHOP_LEGEND_UPGRADE_RES>;
export type RefreshRedStoneShardReq = Unmessage<SC2S_REFRESH_RED_STONE_SHARD_REQ>;
export type RefreshRedStoneShardRes = Unmessage<SS2C_REFRESH_RED_STONE_SHARD_RES>;
export type ShopChangeAccountNameReq = Unmessage<SC2S_SHOP_CHANGE_ACCOUNT_NAME_REQ>;
export type ShopChangeAccountNameRes = Unmessage<SS2C_SHOP_CHANGE_ACCOUNT_NAME_RES>;
export type ShopItemCheckNot = Unmessage<SS2C_SHOP_ITEM_CHECK_NOT>;
export type ShopLegendDlcInstallReq = Unmessage<SC2S_SHOP_LEGEND_DLC_INSTALL_REQ>;
export type ShopLegendDlcInstallRes = Unmessage<SS2C_SHOP_LEGEND_DLC_INSTALL_RES>;
export type ShopLegendDlcInstallCheckReq = Unmessage<SC2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ>;
export type ShopLegendDlcInstallCheckRes = Unmessage<SS2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES>;
export type ShopTwitchDropsRewardNot = Unmessage<SS2C_SHOP_TWITCH_DROPS_REWARD_NOT>;
