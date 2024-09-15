import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_MERCHANT_LIST_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_LIST_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_STOCK_BUY_ITEM_LIST_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_STOCK_BUY_ITEM_LIST_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_STOCK_BUY_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_STOCK_BUY_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_STOCK_SELL_BACK_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_STOCK_SELL_BACK_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_SERVICE_CRAFT_LIST_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_SERVICE_CRAFT_LIST_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_SERVICE_CRAFT_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_SERVICE_CRAFT_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_QUEST_LIST_INFO_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_QUEST_LIST_INFO_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_QUEST_SELECT_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_QUEST_SELECT_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_QUEST_COMPLETE_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_QUEST_COMPLETE_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_QUEST_CONTENT_VALUE_STACK_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_QUEST_CONTENT_VALUE_STACK_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_BASE_GEAR_LIST_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_BASE_GEAR_LIST_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_BASE_GEAR_SET_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_BASE_GEAR_SET_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_SAVE_BASE_GEAR_SET_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_SAVE_BASE_GEAR_SET_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_EQUIP_BASE_GEAR_SET_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_EQUIP_BASE_GEAR_SET_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_SERVICE_MINDWIPE_INFO_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_SERVICE_MINDWIPE_INFO_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_SERVICE_MINDWIPE_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_SERVICE_MINDWIPE_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_RECOVERY_LIST_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_RECOVERY_LIST_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_RECOVERY_BUY_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_RECOVERY_BUY_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_QUEST_LOG_LIST_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_QUEST_LOG_LIST_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_QUEST_LOG_ACCEPT_ALL_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_QUEST_LOG_ACCEPT_ALL_RES } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_RECOVERY_ITEM_CHECK_NOT } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_RECOVERY_CHECK_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_RECOVERY_CHECK_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_EXPRESS_LIST_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_EXPRESS_LIST_RES } from "../pb/Merchant_pb";
import { type SC2S_MERCHANT_EXPRESS_BUY_REQ } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_EXPRESS_BUY_RES } from "../pb/Merchant_pb";
import { type SS2C_MERCHANT_EXPRESS_ITEM_CHECK_NOT } from "../pb/Merchant_pb";

export class MerchantModule extends Module {
    override name = "MerchantModule";

    /** Call MERCHANT_LIST on server */
    async merchantList(payload: MerchantListReq): Promise<MerchantListRes> {
        return new Promise(res => {
            this.onceMerchantListRes(res);
            this.sendMerchantListReq(payload);
        });
    }

    /** Send C2S_MERCHANT_LIST_REQ(1351) to server */
    async sendMerchantListReq(payload: MerchantListReq): Promise<void> {
        return this.send("C2S_MERCHANT_LIST_REQ", payload);
    }

    /** Receive S2C_MERCHANT_LIST_RES(1352) from server */
    onMerchantListRes(handler: (payload: MerchantListRes) => any): void {
        this.on("S2C_MERCHANT_LIST_RES", handler);
    }

    /** Receive S2C_MERCHANT_LIST_RES(1352) from server */
    onceMerchantListRes(handler: (payload: MerchantListRes) => any): void {
        this.once("S2C_MERCHANT_LIST_RES", handler);
    }

    /** Call MERCHANT_STOCK_BUY_ITEM_LIST on server */
    async merchantStockBuyItemList(payload: MerchantStockBuyItemListReq): Promise<MerchantStockBuyItemListRes> {
        return new Promise(res => {
            this.onceMerchantStockBuyItemListRes(res);
            this.sendMerchantStockBuyItemListReq(payload);
        });
    }

    /** Send C2S_MERCHANT_STOCK_BUY_ITEM_LIST_REQ(1353) to server */
    async sendMerchantStockBuyItemListReq(payload: MerchantStockBuyItemListReq): Promise<void> {
        return this.send("C2S_MERCHANT_STOCK_BUY_ITEM_LIST_REQ", payload);
    }

    /** Receive S2C_MERCHANT_STOCK_BUY_ITEM_LIST_RES(1354) from server */
    onMerchantStockBuyItemListRes(handler: (payload: MerchantStockBuyItemListRes) => any): void {
        this.on("S2C_MERCHANT_STOCK_BUY_ITEM_LIST_RES", handler);
    }

    /** Receive S2C_MERCHANT_STOCK_BUY_ITEM_LIST_RES(1354) from server */
    onceMerchantStockBuyItemListRes(handler: (payload: MerchantStockBuyItemListRes) => any): void {
        this.once("S2C_MERCHANT_STOCK_BUY_ITEM_LIST_RES", handler);
    }

    /** Call MERCHANT_STOCK_SELL_BACK_ITEM_LIST on server */
    async merchantStockSellBackItemList(payload: MerchantStockSellBackItemListReq): Promise<MerchantStockSellBackItemListRes> {
        return new Promise(res => {
            this.onceMerchantStockSellBackItemListRes(res);
            this.sendMerchantStockSellBackItemListReq(payload);
        });
    }

    /** Send C2S_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_REQ(1355) to server */
    async sendMerchantStockSellBackItemListReq(payload: MerchantStockSellBackItemListReq): Promise<void> {
        return this.send("C2S_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_REQ", payload);
    }

    /** Receive S2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RES(1356) from server */
    onMerchantStockSellBackItemListRes(handler: (payload: MerchantStockSellBackItemListRes) => any): void {
        this.on("S2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RES", handler);
    }

    /** Receive S2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RES(1356) from server */
    onceMerchantStockSellBackItemListRes(handler: (payload: MerchantStockSellBackItemListRes) => any): void {
        this.once("S2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RES", handler);
    }

    /** Call MERCHANT_STOCK_BUY on server */
    async merchantStockBuy(payload: MerchantStockBuyReq): Promise<MerchantStockBuyRes> {
        return new Promise(res => {
            this.onceMerchantStockBuyRes(res);
            this.sendMerchantStockBuyReq(payload);
        });
    }

    /** Send C2S_MERCHANT_STOCK_BUY_REQ(1357) to server */
    async sendMerchantStockBuyReq(payload: MerchantStockBuyReq): Promise<void> {
        return this.send("C2S_MERCHANT_STOCK_BUY_REQ", payload);
    }

    /** Receive S2C_MERCHANT_STOCK_BUY_RES(1358) from server */
    onMerchantStockBuyRes(handler: (payload: MerchantStockBuyRes) => any): void {
        this.on("S2C_MERCHANT_STOCK_BUY_RES", handler);
    }

    /** Receive S2C_MERCHANT_STOCK_BUY_RES(1358) from server */
    onceMerchantStockBuyRes(handler: (payload: MerchantStockBuyRes) => any): void {
        this.once("S2C_MERCHANT_STOCK_BUY_RES", handler);
    }

    /** Call MERCHANT_STOCK_SELL_BACK on server */
    async merchantStockSellBack(payload: MerchantStockSellBackReq): Promise<MerchantStockSellBackRes> {
        return new Promise(res => {
            this.onceMerchantStockSellBackRes(res);
            this.sendMerchantStockSellBackReq(payload);
        });
    }

    /** Send C2S_MERCHANT_STOCK_SELL_BACK_REQ(1359) to server */
    async sendMerchantStockSellBackReq(payload: MerchantStockSellBackReq): Promise<void> {
        return this.send("C2S_MERCHANT_STOCK_SELL_BACK_REQ", payload);
    }

    /** Receive S2C_MERCHANT_STOCK_SELL_BACK_RES(1360) from server */
    onMerchantStockSellBackRes(handler: (payload: MerchantStockSellBackRes) => any): void {
        this.on("S2C_MERCHANT_STOCK_SELL_BACK_RES", handler);
    }

    /** Receive S2C_MERCHANT_STOCK_SELL_BACK_RES(1360) from server */
    onceMerchantStockSellBackRes(handler: (payload: MerchantStockSellBackRes) => any): void {
        this.once("S2C_MERCHANT_STOCK_SELL_BACK_RES", handler);
    }

    /** Call MERCHANT_SERVICE_CRAFT_LIST on server */
    async merchantServiceCraftList(payload: MerchantServiceCraftListReq): Promise<MerchantServiceCraftListRes> {
        return new Promise(res => {
            this.onceMerchantServiceCraftListRes(res);
            this.sendMerchantServiceCraftListReq(payload);
        });
    }

    /** Send C2S_MERCHANT_SERVICE_CRAFT_LIST_REQ(1361) to server */
    async sendMerchantServiceCraftListReq(payload: MerchantServiceCraftListReq): Promise<void> {
        return this.send("C2S_MERCHANT_SERVICE_CRAFT_LIST_REQ", payload);
    }

    /** Receive S2C_MERCHANT_SERVICE_CRAFT_LIST_RES(1362) from server */
    onMerchantServiceCraftListRes(handler: (payload: MerchantServiceCraftListRes) => any): void {
        this.on("S2C_MERCHANT_SERVICE_CRAFT_LIST_RES", handler);
    }

    /** Receive S2C_MERCHANT_SERVICE_CRAFT_LIST_RES(1362) from server */
    onceMerchantServiceCraftListRes(handler: (payload: MerchantServiceCraftListRes) => any): void {
        this.once("S2C_MERCHANT_SERVICE_CRAFT_LIST_RES", handler);
    }

    /** Call MERCHANT_SERVICE_CRAFT on server */
    async merchantServiceCraft(payload: MerchantServiceCraftReq): Promise<MerchantServiceCraftRes> {
        return new Promise(res => {
            this.onceMerchantServiceCraftRes(res);
            this.sendMerchantServiceCraftReq(payload);
        });
    }

    /** Send C2S_MERCHANT_SERVICE_CRAFT_REQ(1363) to server */
    async sendMerchantServiceCraftReq(payload: MerchantServiceCraftReq): Promise<void> {
        return this.send("C2S_MERCHANT_SERVICE_CRAFT_REQ", payload);
    }

    /** Receive S2C_MERCHANT_SERVICE_CRAFT_RES(1364) from server */
    onMerchantServiceCraftRes(handler: (payload: MerchantServiceCraftRes) => any): void {
        this.on("S2C_MERCHANT_SERVICE_CRAFT_RES", handler);
    }

    /** Receive S2C_MERCHANT_SERVICE_CRAFT_RES(1364) from server */
    onceMerchantServiceCraftRes(handler: (payload: MerchantServiceCraftRes) => any): void {
        this.once("S2C_MERCHANT_SERVICE_CRAFT_RES", handler);
    }

    /** Call MERCHANT_QUEST_LIST_INFO on server */
    async merchantQuestListInfo(payload: MerchantQuestListInfoReq): Promise<MerchantQuestListInfoRes> {
        return new Promise(res => {
            this.onceMerchantQuestListInfoRes(res);
            this.sendMerchantQuestListInfoReq(payload);
        });
    }

    /** Send C2S_MERCHANT_QUEST_LIST_INFO_REQ(1400) to server */
    async sendMerchantQuestListInfoReq(payload: MerchantQuestListInfoReq): Promise<void> {
        return this.send("C2S_MERCHANT_QUEST_LIST_INFO_REQ", payload);
    }

    /** Receive S2C_MERCHANT_QUEST_LIST_INFO_RES(1401) from server */
    onMerchantQuestListInfoRes(handler: (payload: MerchantQuestListInfoRes) => any): void {
        this.on("S2C_MERCHANT_QUEST_LIST_INFO_RES", handler);
    }

    /** Receive S2C_MERCHANT_QUEST_LIST_INFO_RES(1401) from server */
    onceMerchantQuestListInfoRes(handler: (payload: MerchantQuestListInfoRes) => any): void {
        this.once("S2C_MERCHANT_QUEST_LIST_INFO_RES", handler);
    }

    /** Call MERCHANT_QUEST_SELECT on server */
    async merchantQuestSelect(payload: MerchantQuestSelectReq): Promise<MerchantQuestSelectRes> {
        return new Promise(res => {
            this.onceMerchantQuestSelectRes(res);
            this.sendMerchantQuestSelectReq(payload);
        });
    }

    /** Send C2S_MERCHANT_QUEST_SELECT_REQ(1402) to server */
    async sendMerchantQuestSelectReq(payload: MerchantQuestSelectReq): Promise<void> {
        return this.send("C2S_MERCHANT_QUEST_SELECT_REQ", payload);
    }

    /** Receive S2C_MERCHANT_QUEST_SELECT_RES(1403) from server */
    onMerchantQuestSelectRes(handler: (payload: MerchantQuestSelectRes) => any): void {
        this.on("S2C_MERCHANT_QUEST_SELECT_RES", handler);
    }

    /** Receive S2C_MERCHANT_QUEST_SELECT_RES(1403) from server */
    onceMerchantQuestSelectRes(handler: (payload: MerchantQuestSelectRes) => any): void {
        this.once("S2C_MERCHANT_QUEST_SELECT_RES", handler);
    }

    /** Call MERCHANT_QUEST_COMPLETE on server */
    async merchantQuestComplete(payload: MerchantQuestCompleteReq): Promise<MerchantQuestCompleteRes> {
        return new Promise(res => {
            this.onceMerchantQuestCompleteRes(res);
            this.sendMerchantQuestCompleteReq(payload);
        });
    }

    /** Send C2S_MERCHANT_QUEST_COMPLETE_REQ(1404) to server */
    async sendMerchantQuestCompleteReq(payload: MerchantQuestCompleteReq): Promise<void> {
        return this.send("C2S_MERCHANT_QUEST_COMPLETE_REQ", payload);
    }

    /** Receive S2C_MERCHANT_QUEST_COMPLETE_RES(1405) from server */
    onMerchantQuestCompleteRes(handler: (payload: MerchantQuestCompleteRes) => any): void {
        this.on("S2C_MERCHANT_QUEST_COMPLETE_RES", handler);
    }

    /** Receive S2C_MERCHANT_QUEST_COMPLETE_RES(1405) from server */
    onceMerchantQuestCompleteRes(handler: (payload: MerchantQuestCompleteRes) => any): void {
        this.once("S2C_MERCHANT_QUEST_COMPLETE_RES", handler);
    }

    /** Call MERCHANT_QUEST_CONTENT_VALUE_STACK on server */
    async merchantQuestContentValueStack(payload: MerchantQuestContentValueStackReq): Promise<MerchantQuestContentValueStackRes> {
        return new Promise(res => {
            this.onceMerchantQuestContentValueStackRes(res);
            this.sendMerchantQuestContentValueStackReq(payload);
        });
    }

    /** Send C2S_MERCHANT_QUEST_CONTENT_VALUE_STACK_REQ(1406) to server */
    async sendMerchantQuestContentValueStackReq(payload: MerchantQuestContentValueStackReq): Promise<void> {
        return this.send("C2S_MERCHANT_QUEST_CONTENT_VALUE_STACK_REQ", payload);
    }

    /** Receive S2C_MERCHANT_QUEST_CONTENT_VALUE_STACK_RES(1407) from server */
    onMerchantQuestContentValueStackRes(handler: (payload: MerchantQuestContentValueStackRes) => any): void {
        this.on("S2C_MERCHANT_QUEST_CONTENT_VALUE_STACK_RES", handler);
    }

    /** Receive S2C_MERCHANT_QUEST_CONTENT_VALUE_STACK_RES(1407) from server */
    onceMerchantQuestContentValueStackRes(handler: (payload: MerchantQuestContentValueStackRes) => any): void {
        this.once("S2C_MERCHANT_QUEST_CONTENT_VALUE_STACK_RES", handler);
    }

    /** Call MERCHANT_BASE_GEAR_LIST on server */
    async merchantBaseGearList(payload: MerchantBaseGearListReq): Promise<MerchantBaseGearListRes> {
        return new Promise(res => {
            this.onceMerchantBaseGearListRes(res);
            this.sendMerchantBaseGearListReq(payload);
        });
    }

    /** Send C2S_MERCHANT_BASE_GEAR_LIST_REQ(1450) to server */
    async sendMerchantBaseGearListReq(payload: MerchantBaseGearListReq): Promise<void> {
        return this.send("C2S_MERCHANT_BASE_GEAR_LIST_REQ", payload);
    }

    /** Receive S2C_MERCHANT_BASE_GEAR_LIST_RES(1451) from server */
    onMerchantBaseGearListRes(handler: (payload: MerchantBaseGearListRes) => any): void {
        this.on("S2C_MERCHANT_BASE_GEAR_LIST_RES", handler);
    }

    /** Receive S2C_MERCHANT_BASE_GEAR_LIST_RES(1451) from server */
    onceMerchantBaseGearListRes(handler: (payload: MerchantBaseGearListRes) => any): void {
        this.once("S2C_MERCHANT_BASE_GEAR_LIST_RES", handler);
    }

    /** Call MERCHANT_BASE_GEAR_SET on server */
    async merchantBaseGearSet(payload: MerchantBaseGearSetReq): Promise<MerchantBaseGearSetRes> {
        return new Promise(res => {
            this.onceMerchantBaseGearSetRes(res);
            this.sendMerchantBaseGearSetReq(payload);
        });
    }

    /** Send C2S_MERCHANT_BASE_GEAR_SET_REQ(1452) to server */
    async sendMerchantBaseGearSetReq(payload: MerchantBaseGearSetReq): Promise<void> {
        return this.send("C2S_MERCHANT_BASE_GEAR_SET_REQ", payload);
    }

    /** Receive S2C_MERCHANT_BASE_GEAR_SET_RES(1453) from server */
    onMerchantBaseGearSetRes(handler: (payload: MerchantBaseGearSetRes) => any): void {
        this.on("S2C_MERCHANT_BASE_GEAR_SET_RES", handler);
    }

    /** Receive S2C_MERCHANT_BASE_GEAR_SET_RES(1453) from server */
    onceMerchantBaseGearSetRes(handler: (payload: MerchantBaseGearSetRes) => any): void {
        this.once("S2C_MERCHANT_BASE_GEAR_SET_RES", handler);
    }

    /** Call MERCHANT_SAVE_BASE_GEAR_SET on server */
    async merchantSaveBaseGearSet(payload: MerchantSaveBaseGearSetReq): Promise<MerchantSaveBaseGearSetRes> {
        return new Promise(res => {
            this.onceMerchantSaveBaseGearSetRes(res);
            this.sendMerchantSaveBaseGearSetReq(payload);
        });
    }

    /** Send C2S_MERCHANT_SAVE_BASE_GEAR_SET_REQ(1454) to server */
    async sendMerchantSaveBaseGearSetReq(payload: MerchantSaveBaseGearSetReq): Promise<void> {
        return this.send("C2S_MERCHANT_SAVE_BASE_GEAR_SET_REQ", payload);
    }

    /** Receive S2C_MERCHANT_SAVE_BASE_GEAR_SET_RES(1455) from server */
    onMerchantSaveBaseGearSetRes(handler: (payload: MerchantSaveBaseGearSetRes) => any): void {
        this.on("S2C_MERCHANT_SAVE_BASE_GEAR_SET_RES", handler);
    }

    /** Receive S2C_MERCHANT_SAVE_BASE_GEAR_SET_RES(1455) from server */
    onceMerchantSaveBaseGearSetRes(handler: (payload: MerchantSaveBaseGearSetRes) => any): void {
        this.once("S2C_MERCHANT_SAVE_BASE_GEAR_SET_RES", handler);
    }

    /** Call MERCHANT_EQUIP_BASE_GEAR_SET on server */
    async merchantEquipBaseGearSet(payload: MerchantEquipBaseGearSetReq): Promise<MerchantEquipBaseGearSetRes> {
        return new Promise(res => {
            this.onceMerchantEquipBaseGearSetRes(res);
            this.sendMerchantEquipBaseGearSetReq(payload);
        });
    }

    /** Send C2S_MERCHANT_EQUIP_BASE_GEAR_SET_REQ(1456) to server */
    async sendMerchantEquipBaseGearSetReq(payload: MerchantEquipBaseGearSetReq): Promise<void> {
        return this.send("C2S_MERCHANT_EQUIP_BASE_GEAR_SET_REQ", payload);
    }

    /** Receive S2C_MERCHANT_EQUIP_BASE_GEAR_SET_RES(1457) from server */
    onMerchantEquipBaseGearSetRes(handler: (payload: MerchantEquipBaseGearSetRes) => any): void {
        this.on("S2C_MERCHANT_EQUIP_BASE_GEAR_SET_RES", handler);
    }

    /** Receive S2C_MERCHANT_EQUIP_BASE_GEAR_SET_RES(1457) from server */
    onceMerchantEquipBaseGearSetRes(handler: (payload: MerchantEquipBaseGearSetRes) => any): void {
        this.once("S2C_MERCHANT_EQUIP_BASE_GEAR_SET_RES", handler);
    }

    /** Call MERCHANT_SERVICE_MINDWIPE_INFO on server */
    async merchantServiceMindwipeInfo(payload: MerchantServiceMindwipeInfoReq): Promise<MerchantServiceMindwipeInfoRes> {
        return new Promise(res => {
            this.onceMerchantServiceMindwipeInfoRes(res);
            this.sendMerchantServiceMindwipeInfoReq(payload);
        });
    }

    /** Send C2S_MERCHANT_SERVICE_MINDWIPE_INFO_REQ(1367) to server */
    async sendMerchantServiceMindwipeInfoReq(payload: MerchantServiceMindwipeInfoReq): Promise<void> {
        return this.send("C2S_MERCHANT_SERVICE_MINDWIPE_INFO_REQ", payload);
    }

    /** Receive S2C_MERCHANT_SERVICE_MINDWIPE_INFO_RES(1368) from server */
    onMerchantServiceMindwipeInfoRes(handler: (payload: MerchantServiceMindwipeInfoRes) => any): void {
        this.on("S2C_MERCHANT_SERVICE_MINDWIPE_INFO_RES", handler);
    }

    /** Receive S2C_MERCHANT_SERVICE_MINDWIPE_INFO_RES(1368) from server */
    onceMerchantServiceMindwipeInfoRes(handler: (payload: MerchantServiceMindwipeInfoRes) => any): void {
        this.once("S2C_MERCHANT_SERVICE_MINDWIPE_INFO_RES", handler);
    }

    /** Call MERCHANT_SERVICE_MINDWIPE on server */
    async merchantServiceMindwipe(payload: MerchantServiceMindwipeReq): Promise<MerchantServiceMindwipeRes> {
        return new Promise(res => {
            this.onceMerchantServiceMindwipeRes(res);
            this.sendMerchantServiceMindwipeReq(payload);
        });
    }

    /** Send C2S_MERCHANT_SERVICE_MINDWIPE_REQ(1369) to server */
    async sendMerchantServiceMindwipeReq(payload: MerchantServiceMindwipeReq): Promise<void> {
        return this.send("C2S_MERCHANT_SERVICE_MINDWIPE_REQ", payload);
    }

    /** Receive S2C_MERCHANT_SERVICE_MINDWIPE_RES(1370) from server */
    onMerchantServiceMindwipeRes(handler: (payload: MerchantServiceMindwipeRes) => any): void {
        this.on("S2C_MERCHANT_SERVICE_MINDWIPE_RES", handler);
    }

    /** Receive S2C_MERCHANT_SERVICE_MINDWIPE_RES(1370) from server */
    onceMerchantServiceMindwipeRes(handler: (payload: MerchantServiceMindwipeRes) => any): void {
        this.once("S2C_MERCHANT_SERVICE_MINDWIPE_RES", handler);
    }

    /** Call MERCHANT_RECOVERY_LIST on server */
    async merchantRecoveryList(payload: MerchantRecoveryListReq): Promise<MerchantRecoveryListRes> {
        return new Promise(res => {
            this.onceMerchantRecoveryListRes(res);
            this.sendMerchantRecoveryListReq(payload);
        });
    }

    /** Send C2S_MERCHANT_RECOVERY_LIST_REQ(1371) to server */
    async sendMerchantRecoveryListReq(payload: MerchantRecoveryListReq): Promise<void> {
        return this.send("C2S_MERCHANT_RECOVERY_LIST_REQ", payload);
    }

    /** Receive S2C_MERCHANT_RECOVERY_LIST_RES(1372) from server */
    onMerchantRecoveryListRes(handler: (payload: MerchantRecoveryListRes) => any): void {
        this.on("S2C_MERCHANT_RECOVERY_LIST_RES", handler);
    }

    /** Receive S2C_MERCHANT_RECOVERY_LIST_RES(1372) from server */
    onceMerchantRecoveryListRes(handler: (payload: MerchantRecoveryListRes) => any): void {
        this.once("S2C_MERCHANT_RECOVERY_LIST_RES", handler);
    }

    /** Call MERCHANT_RECOVERY_BUY on server */
    async merchantRecoveryBuy(payload: MerchantRecoveryBuyReq): Promise<MerchantRecoveryBuyRes> {
        return new Promise(res => {
            this.onceMerchantRecoveryBuyRes(res);
            this.sendMerchantRecoveryBuyReq(payload);
        });
    }

    /** Send C2S_MERCHANT_RECOVERY_BUY_REQ(1373) to server */
    async sendMerchantRecoveryBuyReq(payload: MerchantRecoveryBuyReq): Promise<void> {
        return this.send("C2S_MERCHANT_RECOVERY_BUY_REQ", payload);
    }

    /** Receive S2C_MERCHANT_RECOVERY_BUY_RES(1374) from server */
    onMerchantRecoveryBuyRes(handler: (payload: MerchantRecoveryBuyRes) => any): void {
        this.on("S2C_MERCHANT_RECOVERY_BUY_RES", handler);
    }

    /** Receive S2C_MERCHANT_RECOVERY_BUY_RES(1374) from server */
    onceMerchantRecoveryBuyRes(handler: (payload: MerchantRecoveryBuyRes) => any): void {
        this.once("S2C_MERCHANT_RECOVERY_BUY_RES", handler);
    }

    /** Call MERCHANT_QUEST_LOG_LIST on server */
    async merchantQuestLogList(payload: MerchantQuestLogListReq): Promise<MerchantQuestLogListRes> {
        return new Promise(res => {
            this.onceMerchantQuestLogListRes(res);
            this.sendMerchantQuestLogListReq(payload);
        });
    }

    /** Send C2S_MERCHANT_QUEST_LOG_LIST_REQ(1480) to server */
    async sendMerchantQuestLogListReq(payload: MerchantQuestLogListReq): Promise<void> {
        return this.send("C2S_MERCHANT_QUEST_LOG_LIST_REQ", payload);
    }

    /** Receive S2C_MERCHANT_QUEST_LOG_LIST_RES(1481) from server */
    onMerchantQuestLogListRes(handler: (payload: MerchantQuestLogListRes) => any): void {
        this.on("S2C_MERCHANT_QUEST_LOG_LIST_RES", handler);
    }

    /** Receive S2C_MERCHANT_QUEST_LOG_LIST_RES(1481) from server */
    onceMerchantQuestLogListRes(handler: (payload: MerchantQuestLogListRes) => any): void {
        this.once("S2C_MERCHANT_QUEST_LOG_LIST_RES", handler);
    }

    /** Call MERCHANT_QUEST_LOG_ACCEPT_ALL on server */
    async merchantQuestLogAcceptAll(payload: MerchantQuestLogAcceptAllReq): Promise<MerchantQuestLogAcceptAllRes> {
        return new Promise(res => {
            this.onceMerchantQuestLogAcceptAllRes(res);
            this.sendMerchantQuestLogAcceptAllReq(payload);
        });
    }

    /** Send C2S_MERCHANT_QUEST_LOG_ACCEPT_ALL_REQ(1482) to server */
    async sendMerchantQuestLogAcceptAllReq(payload: MerchantQuestLogAcceptAllReq): Promise<void> {
        return this.send("C2S_MERCHANT_QUEST_LOG_ACCEPT_ALL_REQ", payload);
    }

    /** Receive S2C_MERCHANT_QUEST_LOG_ACCEPT_ALL_RES(1483) from server */
    onMerchantQuestLogAcceptAllRes(handler: (payload: MerchantQuestLogAcceptAllRes) => any): void {
        this.on("S2C_MERCHANT_QUEST_LOG_ACCEPT_ALL_RES", handler);
    }

    /** Receive S2C_MERCHANT_QUEST_LOG_ACCEPT_ALL_RES(1483) from server */
    onceMerchantQuestLogAcceptAllRes(handler: (payload: MerchantQuestLogAcceptAllRes) => any): void {
        this.once("S2C_MERCHANT_QUEST_LOG_ACCEPT_ALL_RES", handler);
    }

    /** Receive S2C_MERCHANT_RECOVERY_ITEM_CHECK_NOT(1375) from server */
    onMerchantRecoveryItemCheckNot(handler: (payload: MerchantRecoveryItemCheckNot) => any): void {
        this.on("S2C_MERCHANT_RECOVERY_ITEM_CHECK_NOT", handler);
    }

    /** Receive S2C_MERCHANT_RECOVERY_ITEM_CHECK_NOT(1375) from server */
    onceMerchantRecoveryItemCheckNot(handler: (payload: MerchantRecoveryItemCheckNot) => any): void {
        this.once("S2C_MERCHANT_RECOVERY_ITEM_CHECK_NOT", handler);
    }

    /** Call MERCHANT_RECOVERY_CHECK on server */
    async merchantRecoveryCheck(payload: MerchantRecoveryCheckReq): Promise<MerchantRecoveryCheckRes> {
        return new Promise(res => {
            this.onceMerchantRecoveryCheckRes(res);
            this.sendMerchantRecoveryCheckReq(payload);
        });
    }

    /** Send C2S_MERCHANT_RECOVERY_CHECK_REQ(1376) to server */
    async sendMerchantRecoveryCheckReq(payload: MerchantRecoveryCheckReq): Promise<void> {
        return this.send("C2S_MERCHANT_RECOVERY_CHECK_REQ", payload);
    }

    /** Receive S2C_MERCHANT_RECOVERY_CHECK_RES(1377) from server */
    onMerchantRecoveryCheckRes(handler: (payload: MerchantRecoveryCheckRes) => any): void {
        this.on("S2C_MERCHANT_RECOVERY_CHECK_RES", handler);
    }

    /** Receive S2C_MERCHANT_RECOVERY_CHECK_RES(1377) from server */
    onceMerchantRecoveryCheckRes(handler: (payload: MerchantRecoveryCheckRes) => any): void {
        this.once("S2C_MERCHANT_RECOVERY_CHECK_RES", handler);
    }

    /** Call MERCHANT_EXPRESS_LIST on server */
    async merchantExpressList(payload: MerchantExpressListReq): Promise<MerchantExpressListRes> {
        return new Promise(res => {
            this.onceMerchantExpressListRes(res);
            this.sendMerchantExpressListReq(payload);
        });
    }

    /** Send C2S_MERCHANT_EXPRESS_LIST_REQ(1380) to server */
    async sendMerchantExpressListReq(payload: MerchantExpressListReq): Promise<void> {
        return this.send("C2S_MERCHANT_EXPRESS_LIST_REQ", payload);
    }

    /** Receive S2C_MERCHANT_EXPRESS_LIST_RES(1381) from server */
    onMerchantExpressListRes(handler: (payload: MerchantExpressListRes) => any): void {
        this.on("S2C_MERCHANT_EXPRESS_LIST_RES", handler);
    }

    /** Receive S2C_MERCHANT_EXPRESS_LIST_RES(1381) from server */
    onceMerchantExpressListRes(handler: (payload: MerchantExpressListRes) => any): void {
        this.once("S2C_MERCHANT_EXPRESS_LIST_RES", handler);
    }

    /** Call MERCHANT_EXPRESS_BUY on server */
    async merchantExpressBuy(payload: MerchantExpressBuyReq): Promise<MerchantExpressBuyRes> {
        return new Promise(res => {
            this.onceMerchantExpressBuyRes(res);
            this.sendMerchantExpressBuyReq(payload);
        });
    }

    /** Send C2S_MERCHANT_EXPRESS_BUY_REQ(1382) to server */
    async sendMerchantExpressBuyReq(payload: MerchantExpressBuyReq): Promise<void> {
        return this.send("C2S_MERCHANT_EXPRESS_BUY_REQ", payload);
    }

    /** Receive S2C_MERCHANT_EXPRESS_BUY_RES(1383) from server */
    onMerchantExpressBuyRes(handler: (payload: MerchantExpressBuyRes) => any): void {
        this.on("S2C_MERCHANT_EXPRESS_BUY_RES", handler);
    }

    /** Receive S2C_MERCHANT_EXPRESS_BUY_RES(1383) from server */
    onceMerchantExpressBuyRes(handler: (payload: MerchantExpressBuyRes) => any): void {
        this.once("S2C_MERCHANT_EXPRESS_BUY_RES", handler);
    }

    /** Receive S2C_MERCHANT_EXPRESS_ITEM_CHECK_NOT(1384) from server */
    onMerchantExpressItemCheckNot(handler: (payload: MerchantExpressItemCheckNot) => any): void {
        this.on("S2C_MERCHANT_EXPRESS_ITEM_CHECK_NOT", handler);
    }

    /** Receive S2C_MERCHANT_EXPRESS_ITEM_CHECK_NOT(1384) from server */
    onceMerchantExpressItemCheckNot(handler: (payload: MerchantExpressItemCheckNot) => any): void {
        this.once("S2C_MERCHANT_EXPRESS_ITEM_CHECK_NOT", handler);
    }
}

export type MerchantListReq = Unmessage<SC2S_MERCHANT_LIST_REQ>;
export type MerchantListRes = Unmessage<SS2C_MERCHANT_LIST_RES>;
export type MerchantStockBuyItemListReq = Unmessage<SC2S_MERCHANT_STOCK_BUY_ITEM_LIST_REQ>;
export type MerchantStockBuyItemListRes = Unmessage<SS2C_MERCHANT_STOCK_BUY_ITEM_LIST_RES>;
export type MerchantStockSellBackItemListReq = Unmessage<SC2S_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_REQ>;
export type MerchantStockSellBackItemListRes = Unmessage<SS2C_MERCHANT_STOCK_SELL_BACK_ITEM_LIST_RES>;
export type MerchantStockBuyReq = Unmessage<SC2S_MERCHANT_STOCK_BUY_REQ>;
export type MerchantStockBuyRes = Unmessage<SS2C_MERCHANT_STOCK_BUY_RES>;
export type MerchantStockSellBackReq = Unmessage<SC2S_MERCHANT_STOCK_SELL_BACK_REQ>;
export type MerchantStockSellBackRes = Unmessage<SS2C_MERCHANT_STOCK_SELL_BACK_RES>;
export type MerchantServiceCraftListReq = Unmessage<SC2S_MERCHANT_SERVICE_CRAFT_LIST_REQ>;
export type MerchantServiceCraftListRes = Unmessage<SS2C_MERCHANT_SERVICE_CRAFT_LIST_RES>;
export type MerchantServiceCraftReq = Unmessage<SC2S_MERCHANT_SERVICE_CRAFT_REQ>;
export type MerchantServiceCraftRes = Unmessage<SS2C_MERCHANT_SERVICE_CRAFT_RES>;
export type MerchantQuestListInfoReq = Unmessage<SC2S_MERCHANT_QUEST_LIST_INFO_REQ>;
export type MerchantQuestListInfoRes = Unmessage<SS2C_MERCHANT_QUEST_LIST_INFO_RES>;
export type MerchantQuestSelectReq = Unmessage<SC2S_MERCHANT_QUEST_SELECT_REQ>;
export type MerchantQuestSelectRes = Unmessage<SS2C_MERCHANT_QUEST_SELECT_RES>;
export type MerchantQuestCompleteReq = Unmessage<SC2S_MERCHANT_QUEST_COMPLETE_REQ>;
export type MerchantQuestCompleteRes = Unmessage<SS2C_MERCHANT_QUEST_COMPLETE_RES>;
export type MerchantQuestContentValueStackReq = Unmessage<SC2S_MERCHANT_QUEST_CONTENT_VALUE_STACK_REQ>;
export type MerchantQuestContentValueStackRes = Unmessage<SS2C_MERCHANT_QUEST_CONTENT_VALUE_STACK_RES>;
export type MerchantBaseGearListReq = Unmessage<SC2S_MERCHANT_BASE_GEAR_LIST_REQ>;
export type MerchantBaseGearListRes = Unmessage<SS2C_MERCHANT_BASE_GEAR_LIST_RES>;
export type MerchantBaseGearSetReq = Unmessage<SC2S_MERCHANT_BASE_GEAR_SET_REQ>;
export type MerchantBaseGearSetRes = Unmessage<SS2C_MERCHANT_BASE_GEAR_SET_RES>;
export type MerchantSaveBaseGearSetReq = Unmessage<SC2S_MERCHANT_SAVE_BASE_GEAR_SET_REQ>;
export type MerchantSaveBaseGearSetRes = Unmessage<SS2C_MERCHANT_SAVE_BASE_GEAR_SET_RES>;
export type MerchantEquipBaseGearSetReq = Unmessage<SC2S_MERCHANT_EQUIP_BASE_GEAR_SET_REQ>;
export type MerchantEquipBaseGearSetRes = Unmessage<SS2C_MERCHANT_EQUIP_BASE_GEAR_SET_RES>;
export type MerchantServiceMindwipeInfoReq = Unmessage<SC2S_MERCHANT_SERVICE_MINDWIPE_INFO_REQ>;
export type MerchantServiceMindwipeInfoRes = Unmessage<SS2C_MERCHANT_SERVICE_MINDWIPE_INFO_RES>;
export type MerchantServiceMindwipeReq = Unmessage<SC2S_MERCHANT_SERVICE_MINDWIPE_REQ>;
export type MerchantServiceMindwipeRes = Unmessage<SS2C_MERCHANT_SERVICE_MINDWIPE_RES>;
export type MerchantRecoveryListReq = Unmessage<SC2S_MERCHANT_RECOVERY_LIST_REQ>;
export type MerchantRecoveryListRes = Unmessage<SS2C_MERCHANT_RECOVERY_LIST_RES>;
export type MerchantRecoveryBuyReq = Unmessage<SC2S_MERCHANT_RECOVERY_BUY_REQ>;
export type MerchantRecoveryBuyRes = Unmessage<SS2C_MERCHANT_RECOVERY_BUY_RES>;
export type MerchantQuestLogListReq = Unmessage<SC2S_MERCHANT_QUEST_LOG_LIST_REQ>;
export type MerchantQuestLogListRes = Unmessage<SS2C_MERCHANT_QUEST_LOG_LIST_RES>;
export type MerchantQuestLogAcceptAllReq = Unmessage<SC2S_MERCHANT_QUEST_LOG_ACCEPT_ALL_REQ>;
export type MerchantQuestLogAcceptAllRes = Unmessage<SS2C_MERCHANT_QUEST_LOG_ACCEPT_ALL_RES>;
export type MerchantRecoveryItemCheckNot = Unmessage<SS2C_MERCHANT_RECOVERY_ITEM_CHECK_NOT>;
export type MerchantRecoveryCheckReq = Unmessage<SC2S_MERCHANT_RECOVERY_CHECK_REQ>;
export type MerchantRecoveryCheckRes = Unmessage<SS2C_MERCHANT_RECOVERY_CHECK_RES>;
export type MerchantExpressListReq = Unmessage<SC2S_MERCHANT_EXPRESS_LIST_REQ>;
export type MerchantExpressListRes = Unmessage<SS2C_MERCHANT_EXPRESS_LIST_RES>;
export type MerchantExpressBuyReq = Unmessage<SC2S_MERCHANT_EXPRESS_BUY_REQ>;
export type MerchantExpressBuyRes = Unmessage<SS2C_MERCHANT_EXPRESS_BUY_RES>;
export type MerchantExpressItemCheckNot = Unmessage<SS2C_MERCHANT_EXPRESS_ITEM_CHECK_NOT>;
