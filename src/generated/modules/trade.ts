import { Module } from "../../libs/module";
import type { Unmessage } from "../../libs/deepomit";
import { type SC2S_TRADE_CHANNEL_LIST_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADE_CHANNEL_LIST_RES } from "../pb/Trade_pb";
import { type SC2S_TRADE_CHANNEL_SELECT_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADE_CHANNEL_SELECT_RES } from "../pb/Trade_pb";
import { type SC2S_TRADE_CHANNEL_EXIT_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADE_CHANNEL_EXIT_RES } from "../pb/Trade_pb";
import { type SC2S_TRADE_CHANNEL_USER_LIST_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADE_CHANNEL_USER_LIST_RES } from "../pb/Trade_pb";
import { type SS2C_TRADE_CHANNEL_USER_UPDATE_NOT } from "../pb/Trade_pb";
import { type SC2S_TRADE_CHANNEL_CHAT_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADE_CHANNEL_CHAT_RES } from "../pb/Trade_pb";
import { type SC2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES } from "../pb/Trade_pb";
import { type SC2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADE_MEMBERSHIP_REQUIREMENT_RES } from "../pb/Trade_pb";
import { type SC2S_TRADE_MEMBERSHIP_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADE_MEMBERSHIP_RES } from "../pb/Trade_pb";
import { type SC2S_TRADE_REQUEST_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADE_REQUEST_RES } from "../pb/Trade_pb";
import { type SS2C_TRADE_REQUEST_NOT } from "../pb/Trade_pb";
import { type SC2S_TRADE_ANSWER_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADE_ANSWER_RES } from "../pb/Trade_pb";
import { type SS2C_TRADE_ANSWER_REFUSAL_NOT } from "../pb/Trade_pb";
import { type SS2C_TRADING_BEGIN_NOT } from "../pb/Trade_pb";
import { type SC2S_TRADING_CLOSE_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADING_CLOSE_RES } from "../pb/Trade_pb";
import { type SC2S_TRADING_CHAT_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADING_CHAT_RES } from "../pb/Trade_pb";
import { type SC2S_TRADING_ITEM_UPDATE_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADING_ITEM_UPDATE_RES } from "../pb/Trade_pb";
import { type SC2S_TRADING_READY_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADING_READY_RES } from "../pb/Trade_pb";
import { type SS2C_TRADING_READY_NOT } from "../pb/Trade_pb";
import { type SS2C_TRADING_CONFIRM_NOT } from "../pb/Trade_pb";
import { type SC2S_TRADING_CONFIRM_READY_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADING_CONFIRM_READY_RES } from "../pb/Trade_pb";
import { type SS2C_TRADING_CONFIRM_READY_NOT } from "../pb/Trade_pb";
import { type SC2S_TRADING_CONFIRM_CANCEL_REQ } from "../pb/Trade_pb";
import { type SS2C_TRADING_CONFIRM_CANCEL_RES } from "../pb/Trade_pb";
import { type SS2C_TRADING_RESULT_NOT } from "../pb/Trade_pb";

export class TradeModule extends Module {
    override name = "TradeModule";

    /** Call TRADE_CHANNEL_LIST on server */
    async tradeChannelList(payload: TradeChannelListReq): Promise<TradeChannelListRes> {
        return new Promise(res => {
            this.onceTradeChannelListRes(res);
            this.sendTradeChannelListReq(payload);
        });
    }

    /** Send C2S_TRADE_CHANNEL_LIST_REQ(2001) to server */
    async sendTradeChannelListReq(payload: TradeChannelListReq): Promise<void> {
        return this.send("C2S_TRADE_CHANNEL_LIST_REQ", payload);
    }

    /** Receive S2C_TRADE_CHANNEL_LIST_RES(2002) from server */
    onTradeChannelListRes(handler: (payload: TradeChannelListRes) => any): void {
        this.on("S2C_TRADE_CHANNEL_LIST_RES", handler);
    }

    /** Receive S2C_TRADE_CHANNEL_LIST_RES(2002) from server */
    onceTradeChannelListRes(handler: (payload: TradeChannelListRes) => any): void {
        this.once("S2C_TRADE_CHANNEL_LIST_RES", handler);
    }

    /** Call TRADE_CHANNEL_SELECT on server */
    async tradeChannelSelect(payload: TradeChannelSelectReq): Promise<TradeChannelSelectRes> {
        return new Promise(res => {
            this.onceTradeChannelSelectRes(res);
            this.sendTradeChannelSelectReq(payload);
        });
    }

    /** Send C2S_TRADE_CHANNEL_SELECT_REQ(2003) to server */
    async sendTradeChannelSelectReq(payload: TradeChannelSelectReq): Promise<void> {
        return this.send("C2S_TRADE_CHANNEL_SELECT_REQ", payload);
    }

    /** Receive S2C_TRADE_CHANNEL_SELECT_RES(2004) from server */
    onTradeChannelSelectRes(handler: (payload: TradeChannelSelectRes) => any): void {
        this.on("S2C_TRADE_CHANNEL_SELECT_RES", handler);
    }

    /** Receive S2C_TRADE_CHANNEL_SELECT_RES(2004) from server */
    onceTradeChannelSelectRes(handler: (payload: TradeChannelSelectRes) => any): void {
        this.once("S2C_TRADE_CHANNEL_SELECT_RES", handler);
    }

    /** Call TRADE_CHANNEL_EXIT on server */
    async tradeChannelExit(payload: TradeChannelExitReq): Promise<TradeChannelExitRes> {
        return new Promise(res => {
            this.onceTradeChannelExitRes(res);
            this.sendTradeChannelExitReq(payload);
        });
    }

    /** Send C2S_TRADE_CHANNEL_EXIT_REQ(2005) to server */
    async sendTradeChannelExitReq(payload: TradeChannelExitReq): Promise<void> {
        return this.send("C2S_TRADE_CHANNEL_EXIT_REQ", payload);
    }

    /** Receive S2C_TRADE_CHANNEL_EXIT_RES(2006) from server */
    onTradeChannelExitRes(handler: (payload: TradeChannelExitRes) => any): void {
        this.on("S2C_TRADE_CHANNEL_EXIT_RES", handler);
    }

    /** Receive S2C_TRADE_CHANNEL_EXIT_RES(2006) from server */
    onceTradeChannelExitRes(handler: (payload: TradeChannelExitRes) => any): void {
        this.once("S2C_TRADE_CHANNEL_EXIT_RES", handler);
    }

    /** Call TRADE_CHANNEL_USER_LIST on server */
    async tradeChannelUserList(payload: TradeChannelUserListReq): Promise<TradeChannelUserListRes> {
        return new Promise(res => {
            this.onceTradeChannelUserListRes(res);
            this.sendTradeChannelUserListReq(payload);
        });
    }

    /** Send C2S_TRADE_CHANNEL_USER_LIST_REQ(2007) to server */
    async sendTradeChannelUserListReq(payload: TradeChannelUserListReq): Promise<void> {
        return this.send("C2S_TRADE_CHANNEL_USER_LIST_REQ", payload);
    }

    /** Receive S2C_TRADE_CHANNEL_USER_LIST_RES(2008) from server */
    onTradeChannelUserListRes(handler: (payload: TradeChannelUserListRes) => any): void {
        this.on("S2C_TRADE_CHANNEL_USER_LIST_RES", handler);
    }

    /** Receive S2C_TRADE_CHANNEL_USER_LIST_RES(2008) from server */
    onceTradeChannelUserListRes(handler: (payload: TradeChannelUserListRes) => any): void {
        this.once("S2C_TRADE_CHANNEL_USER_LIST_RES", handler);
    }

    /** Receive S2C_TRADE_CHANNEL_USER_UPDATE_NOT(2009) from server */
    onTradeChannelUserUpdateNot(handler: (payload: TradeChannelUserUpdateNot) => any): void {
        this.on("S2C_TRADE_CHANNEL_USER_UPDATE_NOT", handler);
    }

    /** Receive S2C_TRADE_CHANNEL_USER_UPDATE_NOT(2009) from server */
    onceTradeChannelUserUpdateNot(handler: (payload: TradeChannelUserUpdateNot) => any): void {
        this.once("S2C_TRADE_CHANNEL_USER_UPDATE_NOT", handler);
    }

    /** Call TRADE_CHANNEL_CHAT on server */
    async tradeChannelChat(payload: TradeChannelChatReq): Promise<TradeChannelChatRes> {
        return new Promise(res => {
            this.onceTradeChannelChatRes(res);
            this.sendTradeChannelChatReq(payload);
        });
    }

    /** Send C2S_TRADE_CHANNEL_CHAT_REQ(2011) to server */
    async sendTradeChannelChatReq(payload: TradeChannelChatReq): Promise<void> {
        return this.send("C2S_TRADE_CHANNEL_CHAT_REQ", payload);
    }

    /** Receive S2C_TRADE_CHANNEL_CHAT_RES(2012) from server */
    onTradeChannelChatRes(handler: (payload: TradeChannelChatRes) => any): void {
        this.on("S2C_TRADE_CHANNEL_CHAT_RES", handler);
    }

    /** Receive S2C_TRADE_CHANNEL_CHAT_RES(2012) from server */
    onceTradeChannelChatRes(handler: (payload: TradeChannelChatRes) => any): void {
        this.once("S2C_TRADE_CHANNEL_CHAT_RES", handler);
    }

    /** Call TRADE_CHANNEL_CHAT_TEXT_RANGE on server */
    async tradeChannelChatTextRange(payload: TradeChannelChatTextRangeReq): Promise<TradeChannelChatTextRangeRes> {
        return new Promise(res => {
            this.onceTradeChannelChatTextRangeRes(res);
            this.sendTradeChannelChatTextRangeReq(payload);
        });
    }

    /** Send C2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ(2013) to server */
    async sendTradeChannelChatTextRangeReq(payload: TradeChannelChatTextRangeReq): Promise<void> {
        return this.send("C2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ", payload);
    }

    /** Receive S2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES(2014) from server */
    onTradeChannelChatTextRangeRes(handler: (payload: TradeChannelChatTextRangeRes) => any): void {
        this.on("S2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES", handler);
    }

    /** Receive S2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES(2014) from server */
    onceTradeChannelChatTextRangeRes(handler: (payload: TradeChannelChatTextRangeRes) => any): void {
        this.once("S2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES", handler);
    }

    /** Call TRADE_MEMBERSHIP_REQUIREMENT on server */
    async tradeMembershipRequirement(payload: TradeMembershipRequirementReq): Promise<TradeMembershipRequirementRes> {
        return new Promise(res => {
            this.onceTradeMembershipRequirementRes(res);
            this.sendTradeMembershipRequirementReq(payload);
        });
    }

    /** Send C2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ(2030) to server */
    async sendTradeMembershipRequirementReq(payload: TradeMembershipRequirementReq): Promise<void> {
        return this.send("C2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ", payload);
    }

    /** Receive S2C_TRADE_MEMBERSHIP_REQUIREMENT_RES(2031) from server */
    onTradeMembershipRequirementRes(handler: (payload: TradeMembershipRequirementRes) => any): void {
        this.on("S2C_TRADE_MEMBERSHIP_REQUIREMENT_RES", handler);
    }

    /** Receive S2C_TRADE_MEMBERSHIP_REQUIREMENT_RES(2031) from server */
    onceTradeMembershipRequirementRes(handler: (payload: TradeMembershipRequirementRes) => any): void {
        this.once("S2C_TRADE_MEMBERSHIP_REQUIREMENT_RES", handler);
    }

    /** Call TRADE_MEMBERSHIP on server */
    async tradeMembership(payload: TradeMembershipReq): Promise<TradeMembershipRes> {
        return new Promise(res => {
            this.onceTradeMembershipRes(res);
            this.sendTradeMembershipReq(payload);
        });
    }

    /** Send C2S_TRADE_MEMBERSHIP_REQ(2032) to server */
    async sendTradeMembershipReq(payload: TradeMembershipReq): Promise<void> {
        return this.send("C2S_TRADE_MEMBERSHIP_REQ", payload);
    }

    /** Receive S2C_TRADE_MEMBERSHIP_RES(2033) from server */
    onTradeMembershipRes(handler: (payload: TradeMembershipRes) => any): void {
        this.on("S2C_TRADE_MEMBERSHIP_RES", handler);
    }

    /** Receive S2C_TRADE_MEMBERSHIP_RES(2033) from server */
    onceTradeMembershipRes(handler: (payload: TradeMembershipRes) => any): void {
        this.once("S2C_TRADE_MEMBERSHIP_RES", handler);
    }

    /** Call TRADE_REQUEST on server */
    async tradeRequest(payload: TradeRequestReq): Promise<TradeRequestRes> {
        return new Promise(res => {
            this.onceTradeRequestRes(res);
            this.sendTradeRequestReq(payload);
        });
    }

    /** Send C2S_TRADE_REQUEST_REQ(2034) to server */
    async sendTradeRequestReq(payload: TradeRequestReq): Promise<void> {
        return this.send("C2S_TRADE_REQUEST_REQ", payload);
    }

    /** Receive S2C_TRADE_REQUEST_RES(2035) from server */
    onTradeRequestRes(handler: (payload: TradeRequestRes) => any): void {
        this.on("S2C_TRADE_REQUEST_RES", handler);
    }

    /** Receive S2C_TRADE_REQUEST_RES(2035) from server */
    onceTradeRequestRes(handler: (payload: TradeRequestRes) => any): void {
        this.once("S2C_TRADE_REQUEST_RES", handler);
    }

    /** Receive S2C_TRADE_REQUEST_NOT(2036) from server */
    onTradeRequestNot(handler: (payload: TradeRequestNot) => any): void {
        this.on("S2C_TRADE_REQUEST_NOT", handler);
    }

    /** Receive S2C_TRADE_REQUEST_NOT(2036) from server */
    onceTradeRequestNot(handler: (payload: TradeRequestNot) => any): void {
        this.once("S2C_TRADE_REQUEST_NOT", handler);
    }

    /** Call TRADE_ANSWER on server */
    async tradeAnswer(payload: TradeAnswerReq): Promise<TradeAnswerRes> {
        return new Promise(res => {
            this.onceTradeAnswerRes(res);
            this.sendTradeAnswerReq(payload);
        });
    }

    /** Send C2S_TRADE_ANSWER_REQ(2037) to server */
    async sendTradeAnswerReq(payload: TradeAnswerReq): Promise<void> {
        return this.send("C2S_TRADE_ANSWER_REQ", payload);
    }

    /** Receive S2C_TRADE_ANSWER_RES(2038) from server */
    onTradeAnswerRes(handler: (payload: TradeAnswerRes) => any): void {
        this.on("S2C_TRADE_ANSWER_RES", handler);
    }

    /** Receive S2C_TRADE_ANSWER_RES(2038) from server */
    onceTradeAnswerRes(handler: (payload: TradeAnswerRes) => any): void {
        this.once("S2C_TRADE_ANSWER_RES", handler);
    }

    /** Receive S2C_TRADE_ANSWER_REFUSAL_NOT(2039) from server */
    onTradeAnswerRefusalNot(handler: (payload: TradeAnswerRefusalNot) => any): void {
        this.on("S2C_TRADE_ANSWER_REFUSAL_NOT", handler);
    }

    /** Receive S2C_TRADE_ANSWER_REFUSAL_NOT(2039) from server */
    onceTradeAnswerRefusalNot(handler: (payload: TradeAnswerRefusalNot) => any): void {
        this.once("S2C_TRADE_ANSWER_REFUSAL_NOT", handler);
    }

    /** Receive S2C_TRADING_BEGIN_NOT(2050) from server */
    onTradingBeginNot(handler: (payload: TradingBeginNot) => any): void {
        this.on("S2C_TRADING_BEGIN_NOT", handler);
    }

    /** Receive S2C_TRADING_BEGIN_NOT(2050) from server */
    onceTradingBeginNot(handler: (payload: TradingBeginNot) => any): void {
        this.once("S2C_TRADING_BEGIN_NOT", handler);
    }

    /** Call TRADING_CLOSE on server */
    async tradingClose(payload: TradingCloseReq): Promise<TradingCloseRes> {
        return new Promise(res => {
            this.onceTradingCloseRes(res);
            this.sendTradingCloseReq(payload);
        });
    }

    /** Send C2S_TRADING_CLOSE_REQ(2051) to server */
    async sendTradingCloseReq(payload: TradingCloseReq): Promise<void> {
        return this.send("C2S_TRADING_CLOSE_REQ", payload);
    }

    /** Receive S2C_TRADING_CLOSE_RES(2052) from server */
    onTradingCloseRes(handler: (payload: TradingCloseRes) => any): void {
        this.on("S2C_TRADING_CLOSE_RES", handler);
    }

    /** Receive S2C_TRADING_CLOSE_RES(2052) from server */
    onceTradingCloseRes(handler: (payload: TradingCloseRes) => any): void {
        this.once("S2C_TRADING_CLOSE_RES", handler);
    }

    /** Call TRADING_CHAT on server */
    async tradingChat(payload: TradingChatReq): Promise<TradingChatRes> {
        return new Promise(res => {
            this.onceTradingChatRes(res);
            this.sendTradingChatReq(payload);
        });
    }

    /** Send C2S_TRADING_CHAT_REQ(2053) to server */
    async sendTradingChatReq(payload: TradingChatReq): Promise<void> {
        return this.send("C2S_TRADING_CHAT_REQ", payload);
    }

    /** Receive S2C_TRADING_CHAT_RES(2054) from server */
    onTradingChatRes(handler: (payload: TradingChatRes) => any): void {
        this.on("S2C_TRADING_CHAT_RES", handler);
    }

    /** Receive S2C_TRADING_CHAT_RES(2054) from server */
    onceTradingChatRes(handler: (payload: TradingChatRes) => any): void {
        this.once("S2C_TRADING_CHAT_RES", handler);
    }

    /** Call TRADING_ITEM_UPDATE on server */
    async tradingItemUpdate(payload: TradingItemUpdateReq): Promise<TradingItemUpdateRes> {
        return new Promise(res => {
            this.onceTradingItemUpdateRes(res);
            this.sendTradingItemUpdateReq(payload);
        });
    }

    /** Send C2S_TRADING_ITEM_UPDATE_REQ(2055) to server */
    async sendTradingItemUpdateReq(payload: TradingItemUpdateReq): Promise<void> {
        return this.send("C2S_TRADING_ITEM_UPDATE_REQ", payload);
    }

    /** Receive S2C_TRADING_ITEM_UPDATE_RES(2056) from server */
    onTradingItemUpdateRes(handler: (payload: TradingItemUpdateRes) => any): void {
        this.on("S2C_TRADING_ITEM_UPDATE_RES", handler);
    }

    /** Receive S2C_TRADING_ITEM_UPDATE_RES(2056) from server */
    onceTradingItemUpdateRes(handler: (payload: TradingItemUpdateRes) => any): void {
        this.once("S2C_TRADING_ITEM_UPDATE_RES", handler);
    }

    /** Call TRADING_READY on server */
    async tradingReady(payload: TradingReadyReq): Promise<TradingReadyRes> {
        return new Promise(res => {
            this.onceTradingReadyRes(res);
            this.sendTradingReadyReq(payload);
        });
    }

    /** Send C2S_TRADING_READY_REQ(2057) to server */
    async sendTradingReadyReq(payload: TradingReadyReq): Promise<void> {
        return this.send("C2S_TRADING_READY_REQ", payload);
    }

    /** Receive S2C_TRADING_READY_RES(2058) from server */
    onTradingReadyRes(handler: (payload: TradingReadyRes) => any): void {
        this.on("S2C_TRADING_READY_RES", handler);
    }

    /** Receive S2C_TRADING_READY_RES(2058) from server */
    onceTradingReadyRes(handler: (payload: TradingReadyRes) => any): void {
        this.once("S2C_TRADING_READY_RES", handler);
    }

    /** Receive S2C_TRADING_READY_NOT(2059) from server */
    onTradingReadyNot(handler: (payload: TradingReadyNot) => any): void {
        this.on("S2C_TRADING_READY_NOT", handler);
    }

    /** Receive S2C_TRADING_READY_NOT(2059) from server */
    onceTradingReadyNot(handler: (payload: TradingReadyNot) => any): void {
        this.once("S2C_TRADING_READY_NOT", handler);
    }

    /** Receive S2C_TRADING_CONFIRM_NOT(2060) from server */
    onTradingConfirmNot(handler: (payload: TradingConfirmNot) => any): void {
        this.on("S2C_TRADING_CONFIRM_NOT", handler);
    }

    /** Receive S2C_TRADING_CONFIRM_NOT(2060) from server */
    onceTradingConfirmNot(handler: (payload: TradingConfirmNot) => any): void {
        this.once("S2C_TRADING_CONFIRM_NOT", handler);
    }

    /** Call TRADING_CONFIRM_READY on server */
    async tradingConfirmReady(payload: TradingConfirmReadyReq): Promise<TradingConfirmReadyRes> {
        return new Promise(res => {
            this.onceTradingConfirmReadyRes(res);
            this.sendTradingConfirmReadyReq(payload);
        });
    }

    /** Send C2S_TRADING_CONFIRM_READY_REQ(2061) to server */
    async sendTradingConfirmReadyReq(payload: TradingConfirmReadyReq): Promise<void> {
        return this.send("C2S_TRADING_CONFIRM_READY_REQ", payload);
    }

    /** Receive S2C_TRADING_CONFIRM_READY_RES(2062) from server */
    onTradingConfirmReadyRes(handler: (payload: TradingConfirmReadyRes) => any): void {
        this.on("S2C_TRADING_CONFIRM_READY_RES", handler);
    }

    /** Receive S2C_TRADING_CONFIRM_READY_RES(2062) from server */
    onceTradingConfirmReadyRes(handler: (payload: TradingConfirmReadyRes) => any): void {
        this.once("S2C_TRADING_CONFIRM_READY_RES", handler);
    }

    /** Receive S2C_TRADING_CONFIRM_READY_NOT(2063) from server */
    onTradingConfirmReadyNot(handler: (payload: TradingConfirmReadyNot) => any): void {
        this.on("S2C_TRADING_CONFIRM_READY_NOT", handler);
    }

    /** Receive S2C_TRADING_CONFIRM_READY_NOT(2063) from server */
    onceTradingConfirmReadyNot(handler: (payload: TradingConfirmReadyNot) => any): void {
        this.once("S2C_TRADING_CONFIRM_READY_NOT", handler);
    }

    /** Call TRADING_CONFIRM_CANCEL on server */
    async tradingConfirmCancel(payload: TradingConfirmCancelReq): Promise<TradingConfirmCancelRes> {
        return new Promise(res => {
            this.onceTradingConfirmCancelRes(res);
            this.sendTradingConfirmCancelReq(payload);
        });
    }

    /** Send C2S_TRADING_CONFIRM_CANCEL_REQ(2064) to server */
    async sendTradingConfirmCancelReq(payload: TradingConfirmCancelReq): Promise<void> {
        return this.send("C2S_TRADING_CONFIRM_CANCEL_REQ", payload);
    }

    /** Receive S2C_TRADING_CONFIRM_CANCEL_RES(2065) from server */
    onTradingConfirmCancelRes(handler: (payload: TradingConfirmCancelRes) => any): void {
        this.on("S2C_TRADING_CONFIRM_CANCEL_RES", handler);
    }

    /** Receive S2C_TRADING_CONFIRM_CANCEL_RES(2065) from server */
    onceTradingConfirmCancelRes(handler: (payload: TradingConfirmCancelRes) => any): void {
        this.once("S2C_TRADING_CONFIRM_CANCEL_RES", handler);
    }

    /** Receive S2C_TRADING_RESULT_NOT(2066) from server */
    onTradingResultNot(handler: (payload: TradingResultNot) => any): void {
        this.on("S2C_TRADING_RESULT_NOT", handler);
    }

    /** Receive S2C_TRADING_RESULT_NOT(2066) from server */
    onceTradingResultNot(handler: (payload: TradingResultNot) => any): void {
        this.once("S2C_TRADING_RESULT_NOT", handler);
    }
}

export type TradeChannelListReq = Unmessage<SC2S_TRADE_CHANNEL_LIST_REQ>;
export type TradeChannelListRes = Unmessage<SS2C_TRADE_CHANNEL_LIST_RES>;
export type TradeChannelSelectReq = Unmessage<SC2S_TRADE_CHANNEL_SELECT_REQ>;
export type TradeChannelSelectRes = Unmessage<SS2C_TRADE_CHANNEL_SELECT_RES>;
export type TradeChannelExitReq = Unmessage<SC2S_TRADE_CHANNEL_EXIT_REQ>;
export type TradeChannelExitRes = Unmessage<SS2C_TRADE_CHANNEL_EXIT_RES>;
export type TradeChannelUserListReq = Unmessage<SC2S_TRADE_CHANNEL_USER_LIST_REQ>;
export type TradeChannelUserListRes = Unmessage<SS2C_TRADE_CHANNEL_USER_LIST_RES>;
export type TradeChannelUserUpdateNot = Unmessage<SS2C_TRADE_CHANNEL_USER_UPDATE_NOT>;
export type TradeChannelChatReq = Unmessage<SC2S_TRADE_CHANNEL_CHAT_REQ>;
export type TradeChannelChatRes = Unmessage<SS2C_TRADE_CHANNEL_CHAT_RES>;
export type TradeChannelChatTextRangeReq = Unmessage<SC2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ>;
export type TradeChannelChatTextRangeRes = Unmessage<SS2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES>;
export type TradeMembershipRequirementReq = Unmessage<SC2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ>;
export type TradeMembershipRequirementRes = Unmessage<SS2C_TRADE_MEMBERSHIP_REQUIREMENT_RES>;
export type TradeMembershipReq = Unmessage<SC2S_TRADE_MEMBERSHIP_REQ>;
export type TradeMembershipRes = Unmessage<SS2C_TRADE_MEMBERSHIP_RES>;
export type TradeRequestReq = Unmessage<SC2S_TRADE_REQUEST_REQ>;
export type TradeRequestRes = Unmessage<SS2C_TRADE_REQUEST_RES>;
export type TradeRequestNot = Unmessage<SS2C_TRADE_REQUEST_NOT>;
export type TradeAnswerReq = Unmessage<SC2S_TRADE_ANSWER_REQ>;
export type TradeAnswerRes = Unmessage<SS2C_TRADE_ANSWER_RES>;
export type TradeAnswerRefusalNot = Unmessage<SS2C_TRADE_ANSWER_REFUSAL_NOT>;
export type TradingBeginNot = Unmessage<SS2C_TRADING_BEGIN_NOT>;
export type TradingCloseReq = Unmessage<SC2S_TRADING_CLOSE_REQ>;
export type TradingCloseRes = Unmessage<SS2C_TRADING_CLOSE_RES>;
export type TradingChatReq = Unmessage<SC2S_TRADING_CHAT_REQ>;
export type TradingChatRes = Unmessage<SS2C_TRADING_CHAT_RES>;
export type TradingItemUpdateReq = Unmessage<SC2S_TRADING_ITEM_UPDATE_REQ>;
export type TradingItemUpdateRes = Unmessage<SS2C_TRADING_ITEM_UPDATE_RES>;
export type TradingReadyReq = Unmessage<SC2S_TRADING_READY_REQ>;
export type TradingReadyRes = Unmessage<SS2C_TRADING_READY_RES>;
export type TradingReadyNot = Unmessage<SS2C_TRADING_READY_NOT>;
export type TradingConfirmNot = Unmessage<SS2C_TRADING_CONFIRM_NOT>;
export type TradingConfirmReadyReq = Unmessage<SC2S_TRADING_CONFIRM_READY_REQ>;
export type TradingConfirmReadyRes = Unmessage<SS2C_TRADING_CONFIRM_READY_RES>;
export type TradingConfirmReadyNot = Unmessage<SS2C_TRADING_CONFIRM_READY_NOT>;
export type TradingConfirmCancelReq = Unmessage<SC2S_TRADING_CONFIRM_CANCEL_REQ>;
export type TradingConfirmCancelRes = Unmessage<SS2C_TRADING_CONFIRM_CANCEL_RES>;
export type TradingResultNot = Unmessage<SS2C_TRADING_RESULT_NOT>;
