// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file Shop.proto (package DC.Packet, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file Shop.proto.
 */
export const file_Shop: GenFile = /*@__PURE__*/
  fileDesc("CgpTaG9wLnByb3RvEglEQy5QYWNrZXQiagoUU1NIT1BfSVRFTV9CQVNFX0lORk8SEAoIc2hvcFR5cGUYASABKA0SEgoKc2hvcEl0ZW1JZBgCIAEoCRIOCgZpc0hhdmUYAyABKA0SHAoUcmVtYWluRGlzY291bnRUaW1lTVMYBCABKAQiGQoXU0MyU19TSE9QX0lURU1fTElTVF9SRVEiqwEKF1NTMkNfU0hPUF9JVEVNX0xJU1RfUkVTEhAKCGxvb3BGbGFnGAEgASgFEi4KBWluZm9zGAIgAygLMh8uREMuUGFja2V0LlNTSE9QX0lURU1fQkFTRV9JTkZPEhsKE2N1cnJlbnRUcml1bXBoTGV2ZWwYAyABKAUSFgoObmV4dFRyaXVtcGhFeHAYBCABKAUSGQoRY3VycmVudFRyaXVtcGhFeHAYBSABKAUiZwoWU0MyU19TSE9QX0lURU1fQlVZX1JFURIQCghzaG9wVHlwZRgBIAEoDRIVCg1idXlTaG9wSXRlbUlkGAIgASgJEhUKDXBheW1lbnRNZXRob2QYAyABKA0SDQoFcHJpY2UYBCABKA0iaAoWU1MyQ19TSE9QX0lURU1fQlVZX1JFUxIOCgZyZXN1bHQYASABKA0SEAoIc2hvcFR5cGUYAiABKA0SFQoNYnV5U2hvcEl0ZW1JZBgDIAEoCRIVCg1wYXltZW50TWV0aG9kGAQgASgNIjMKDFNSRVdBUkRfSU5GTxISCgpyZXdhcmRUeXBlGAEgASgJEg8KB3N0b2NrSWQYAiABKAkiTwoTU1RXSVRDSF9SRVdBUkRfSU5GTxISCgpyZXdhcmRUeXBlGAEgASgJEg8KB3N0b2NrSWQYAiABKAkSEwoLcmV3YXJkQ291bnQYAyABKA0iMQodU0MyU19TSE9QX0VOVEVSX0dJRlRfQ09ERV9SRVESEAoIZ2lmdENvZGUYASABKAkiWQodU1MyQ19TSE9QX0VOVEVSX0dJRlRfQ09ERV9SRVMSDgoGcmVzdWx0GAEgASgNEigKB3Jld2FyZHMYAiADKAsyFy5EQy5QYWNrZXQuU1JFV0FSRF9JTkZPIiQKIlNDMlNfU0hPUF9SRURfU1RPTkVfU0hBUkRfSU5GT19SRVEitQEKGlNTSE9QX1JFRF9TVE9ORV9TSEFSRF9JTkZPEhQKDHByb2R1Y3RJbmRleBgBIAEoDRIUCgxwcm9kdWN0UHJpY2UYAiABKAISFAoMcHJvZHVjdENvdW50GAMgASgNEhQKDGRlc2lnbkRhdGFJZBgEIAEoCRIWCg5yZWRpcmVjdGlvblVybBgFIAEoCRISCgpjdXN0b21EYXRhGAYgASgJEhMKC3Byb2R1Y3ROYW1lGAcgASgJIm0KIlNTMkNfU0hPUF9SRURfU1RPTkVfU0hBUkRfSU5GT19SRVMSNAoFaW5mb3MYASADKAsyJS5EQy5QYWNrZXQuU1NIT1BfUkVEX1NUT05FX1NIQVJEX0lORk8SEQoJbG9naW5UeXBlGAIgASgNIkwKIVNDMlNfU0hPUF9SRURfU1RPTkVfU0hBUkRfQlVZX1JFURIUCgxwcm9kdWN0SW5kZXgYASABKAUSEQoJbG9jYWxQb3J0GAIgASgFIpABCiFTUzJDX1NIT1BfUkVEX1NUT05FX1NIQVJEX0JVWV9SRVMSDgoGcmVzdWx0GAEgASgFEg0KBXRyeElkGAIgASgDEhAKCHRyeElkU3RyGAMgASgJEhIKCnBsYXRmb3JtSWQYBCABKAkSEwoLb2ZmZXJJdGVtSWQYBSABKAkSEQoJc2FuZGJveElkGAYgASgJInQKJ1NDMlNfU0hPUF9SRURfU1RPTkVfU0hBUkRfQlVZX0NIRUNLX1JFURINCgVhcHBJZBgBIAEoDRIPCgdvcmRlcklkGAIgASgEEhIKCmF1dGhvcml6ZWQYAyABKAUSFQoNdHJhbnNhY3Rpb25JZBgEIAEoCSI5CidTUzJDX1NIT1BfUkVEX1NUT05FX1NIQVJEX0JVWV9DSEVDS19SRVMSDgoGcmVzdWx0GAEgASgFIh4KHFNDMlNfU0hPUF9MRUdFTkRfVVBHUkFERV9SRVEiWAocU1MyQ19TSE9QX0xFR0VORF9VUEdSQURFX1JFUxIOCgZyZXN1bHQYASABKAUSEwoLdXBncmFkZURhdGUYAiABKAkSEwoLdXBncmFkZVRpbWUYAyABKAkiNAogU0MyU19SRUZSRVNIX1JFRF9TVE9ORV9TSEFSRF9SRVESEAoIYWNjZXNzSWQYASABKAkiIgogU1MyQ19SRUZSRVNIX1JFRF9TVE9ORV9TSEFSRF9SRVMiPgohU0MyU19TSE9QX0NIQU5HRV9BQ0NPVU5UX05BTUVfUkVREhkKEWNoYW5nZUFjY291bnROYW1lGAEgASgJIk4KIVNTMkNfU0hPUF9DSEFOR0VfQUNDT1VOVF9OQU1FX1JFUxIOCgZyZXN1bHQYASABKAUSGQoRY2hhbmdlQWNjb3VudE5hbWUYAiABKAkiKQoXU1NIT1BfSVRFTV9DSEVDS0VEX0lORk8SDgoGc2hvcElkGAEgAygJIjQKGFNTMkNfU0hPUF9JVEVNX0NIRUNLX05PVBIYChBzaG9wTm90aWZ5U3RhdHVzGAEgASgFIiIKIFNDMlNfU0hPUF9MRUdFTkRfRExDX0lOU1RBTExfUkVRIq8BCiBTUzJDX1NIT1BfTEVHRU5EX0RMQ19JTlNUQUxMX1JFUxIOCgZyZXN1bHQYASABKAUSDQoFdHJ4SWQYAiABKAMSEAoIdHJ4SWRTdHIYAyABKAkSEgoKcGxhdGZvcm1JZBgEIAEoCRITCgtvZmZlckl0ZW1JZBgFIAEoCRIRCglzYW5kYm94SWQYBiABKAkSDgoGcGFyYW0xGAcgASgJEg4KBnBhcmFtMhgIIAEoCSJzCiZTQzJTX1NIT1BfTEVHRU5EX0RMQ19JTlNUQUxMX0NIRUNLX1JFURINCgVhcHBJZBgBIAEoDRIPCgdvcmRlcklkGAIgASgEEhIKCmF1dGhvcml6ZWQYAyABKAUSFQoNdHJhbnNhY3Rpb25JZBgEIAEoCSI4CiZTUzJDX1NIT1BfTEVHRU5EX0RMQ19JTlNUQUxMX0NIRUNLX1JFUxIOCgZyZXN1bHQYASABKAUiZAohU1MyQ19TSE9QX1RXSVRDSF9EUk9QU19SRVdBUkRfTk9UEg4KBnJlc3VsdBgBIAEoDRIvCgdyZXdhcmRzGAIgAygLMh4uREMuUGFja2V0LlNUV0lUQ0hfUkVXQVJEX0lORk9CGgoQY29tLnBhY2tldHMuc2hvcEIEc2hvcFAAYgZwcm90bzM");

/**
 * @generated from message DC.Packet.SSHOP_ITEM_BASE_INFO
 */
export type SSHOP_ITEM_BASE_INFO = Message<"DC.Packet.SSHOP_ITEM_BASE_INFO"> & {
  /**
   * @generated from field: uint32 shopType = 1;
   */
  shopType: number;

  /**
   * @generated from field: string shopItemId = 2;
   */
  shopItemId: string;

  /**
   * @generated from field: uint32 isHave = 3;
   */
  isHave: number;

  /**
   * @generated from field: uint64 remainDiscountTimeMS = 4;
   */
  remainDiscountTimeMS: bigint;
};

/**
 * Describes the message DC.Packet.SSHOP_ITEM_BASE_INFO.
 * Use `create(SSHOP_ITEM_BASE_INFOSchema)` to create a new message.
 */
export const SSHOP_ITEM_BASE_INFOSchema: GenMessage<SSHOP_ITEM_BASE_INFO> = /*@__PURE__*/
  messageDesc(file_Shop, 0);

/**
 * @generated from message DC.Packet.SC2S_SHOP_ITEM_LIST_REQ
 */
export type SC2S_SHOP_ITEM_LIST_REQ = Message<"DC.Packet.SC2S_SHOP_ITEM_LIST_REQ"> & {
};

/**
 * Describes the message DC.Packet.SC2S_SHOP_ITEM_LIST_REQ.
 * Use `create(SC2S_SHOP_ITEM_LIST_REQSchema)` to create a new message.
 */
export const SC2S_SHOP_ITEM_LIST_REQSchema: GenMessage<SC2S_SHOP_ITEM_LIST_REQ> = /*@__PURE__*/
  messageDesc(file_Shop, 1);

/**
 * @generated from message DC.Packet.SS2C_SHOP_ITEM_LIST_RES
 */
export type SS2C_SHOP_ITEM_LIST_RES = Message<"DC.Packet.SS2C_SHOP_ITEM_LIST_RES"> & {
  /**
   * @generated from field: int32 loopFlag = 1;
   */
  loopFlag: number;

  /**
   * @generated from field: repeated DC.Packet.SSHOP_ITEM_BASE_INFO infos = 2;
   */
  infos: SSHOP_ITEM_BASE_INFO[];

  /**
   * @generated from field: int32 currentTriumphLevel = 3;
   */
  currentTriumphLevel: number;

  /**
   * @generated from field: int32 nextTriumphExp = 4;
   */
  nextTriumphExp: number;

  /**
   * @generated from field: int32 currentTriumphExp = 5;
   */
  currentTriumphExp: number;
};

/**
 * Describes the message DC.Packet.SS2C_SHOP_ITEM_LIST_RES.
 * Use `create(SS2C_SHOP_ITEM_LIST_RESSchema)` to create a new message.
 */
export const SS2C_SHOP_ITEM_LIST_RESSchema: GenMessage<SS2C_SHOP_ITEM_LIST_RES> = /*@__PURE__*/
  messageDesc(file_Shop, 2);

/**
 * @generated from message DC.Packet.SC2S_SHOP_ITEM_BUY_REQ
 */
export type SC2S_SHOP_ITEM_BUY_REQ = Message<"DC.Packet.SC2S_SHOP_ITEM_BUY_REQ"> & {
  /**
   * @generated from field: uint32 shopType = 1;
   */
  shopType: number;

  /**
   * @generated from field: string buyShopItemId = 2;
   */
  buyShopItemId: string;

  /**
   * @generated from field: uint32 paymentMethod = 3;
   */
  paymentMethod: number;

  /**
   * @generated from field: uint32 price = 4;
   */
  price: number;
};

/**
 * Describes the message DC.Packet.SC2S_SHOP_ITEM_BUY_REQ.
 * Use `create(SC2S_SHOP_ITEM_BUY_REQSchema)` to create a new message.
 */
export const SC2S_SHOP_ITEM_BUY_REQSchema: GenMessage<SC2S_SHOP_ITEM_BUY_REQ> = /*@__PURE__*/
  messageDesc(file_Shop, 3);

/**
 * @generated from message DC.Packet.SS2C_SHOP_ITEM_BUY_RES
 */
export type SS2C_SHOP_ITEM_BUY_RES = Message<"DC.Packet.SS2C_SHOP_ITEM_BUY_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;

  /**
   * @generated from field: uint32 shopType = 2;
   */
  shopType: number;

  /**
   * @generated from field: string buyShopItemId = 3;
   */
  buyShopItemId: string;

  /**
   * @generated from field: uint32 paymentMethod = 4;
   */
  paymentMethod: number;
};

/**
 * Describes the message DC.Packet.SS2C_SHOP_ITEM_BUY_RES.
 * Use `create(SS2C_SHOP_ITEM_BUY_RESSchema)` to create a new message.
 */
export const SS2C_SHOP_ITEM_BUY_RESSchema: GenMessage<SS2C_SHOP_ITEM_BUY_RES> = /*@__PURE__*/
  messageDesc(file_Shop, 4);

/**
 * @generated from message DC.Packet.SREWARD_INFO
 */
export type SREWARD_INFO = Message<"DC.Packet.SREWARD_INFO"> & {
  /**
   * @generated from field: string rewardType = 1;
   */
  rewardType: string;

  /**
   * @generated from field: string stockId = 2;
   */
  stockId: string;
};

/**
 * Describes the message DC.Packet.SREWARD_INFO.
 * Use `create(SREWARD_INFOSchema)` to create a new message.
 */
export const SREWARD_INFOSchema: GenMessage<SREWARD_INFO> = /*@__PURE__*/
  messageDesc(file_Shop, 5);

/**
 * @generated from message DC.Packet.STWITCH_REWARD_INFO
 */
export type STWITCH_REWARD_INFO = Message<"DC.Packet.STWITCH_REWARD_INFO"> & {
  /**
   * @generated from field: string rewardType = 1;
   */
  rewardType: string;

  /**
   * @generated from field: string stockId = 2;
   */
  stockId: string;

  /**
   * @generated from field: uint32 rewardCount = 3;
   */
  rewardCount: number;
};

/**
 * Describes the message DC.Packet.STWITCH_REWARD_INFO.
 * Use `create(STWITCH_REWARD_INFOSchema)` to create a new message.
 */
export const STWITCH_REWARD_INFOSchema: GenMessage<STWITCH_REWARD_INFO> = /*@__PURE__*/
  messageDesc(file_Shop, 6);

/**
 * @generated from message DC.Packet.SC2S_SHOP_ENTER_GIFT_CODE_REQ
 */
export type SC2S_SHOP_ENTER_GIFT_CODE_REQ = Message<"DC.Packet.SC2S_SHOP_ENTER_GIFT_CODE_REQ"> & {
  /**
   * @generated from field: string giftCode = 1;
   */
  giftCode: string;
};

/**
 * Describes the message DC.Packet.SC2S_SHOP_ENTER_GIFT_CODE_REQ.
 * Use `create(SC2S_SHOP_ENTER_GIFT_CODE_REQSchema)` to create a new message.
 */
export const SC2S_SHOP_ENTER_GIFT_CODE_REQSchema: GenMessage<SC2S_SHOP_ENTER_GIFT_CODE_REQ> = /*@__PURE__*/
  messageDesc(file_Shop, 7);

/**
 * @generated from message DC.Packet.SS2C_SHOP_ENTER_GIFT_CODE_RES
 */
export type SS2C_SHOP_ENTER_GIFT_CODE_RES = Message<"DC.Packet.SS2C_SHOP_ENTER_GIFT_CODE_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;

  /**
   * @generated from field: repeated DC.Packet.SREWARD_INFO rewards = 2;
   */
  rewards: SREWARD_INFO[];
};

/**
 * Describes the message DC.Packet.SS2C_SHOP_ENTER_GIFT_CODE_RES.
 * Use `create(SS2C_SHOP_ENTER_GIFT_CODE_RESSchema)` to create a new message.
 */
export const SS2C_SHOP_ENTER_GIFT_CODE_RESSchema: GenMessage<SS2C_SHOP_ENTER_GIFT_CODE_RES> = /*@__PURE__*/
  messageDesc(file_Shop, 8);

/**
 * @generated from message DC.Packet.SC2S_SHOP_RED_STONE_SHARD_INFO_REQ
 */
export type SC2S_SHOP_RED_STONE_SHARD_INFO_REQ = Message<"DC.Packet.SC2S_SHOP_RED_STONE_SHARD_INFO_REQ"> & {
};

/**
 * Describes the message DC.Packet.SC2S_SHOP_RED_STONE_SHARD_INFO_REQ.
 * Use `create(SC2S_SHOP_RED_STONE_SHARD_INFO_REQSchema)` to create a new message.
 */
export const SC2S_SHOP_RED_STONE_SHARD_INFO_REQSchema: GenMessage<SC2S_SHOP_RED_STONE_SHARD_INFO_REQ> = /*@__PURE__*/
  messageDesc(file_Shop, 9);

/**
 * @generated from message DC.Packet.SSHOP_RED_STONE_SHARD_INFO
 */
export type SSHOP_RED_STONE_SHARD_INFO = Message<"DC.Packet.SSHOP_RED_STONE_SHARD_INFO"> & {
  /**
   * @generated from field: uint32 productIndex = 1;
   */
  productIndex: number;

  /**
   * @generated from field: float productPrice = 2;
   */
  productPrice: number;

  /**
   * @generated from field: uint32 productCount = 3;
   */
  productCount: number;

  /**
   * @generated from field: string designDataId = 4;
   */
  designDataId: string;

  /**
   * @generated from field: string redirectionUrl = 5;
   */
  redirectionUrl: string;

  /**
   * @generated from field: string customData = 6;
   */
  customData: string;

  /**
   * @generated from field: string productName = 7;
   */
  productName: string;
};

/**
 * Describes the message DC.Packet.SSHOP_RED_STONE_SHARD_INFO.
 * Use `create(SSHOP_RED_STONE_SHARD_INFOSchema)` to create a new message.
 */
export const SSHOP_RED_STONE_SHARD_INFOSchema: GenMessage<SSHOP_RED_STONE_SHARD_INFO> = /*@__PURE__*/
  messageDesc(file_Shop, 10);

/**
 * @generated from message DC.Packet.SS2C_SHOP_RED_STONE_SHARD_INFO_RES
 */
export type SS2C_SHOP_RED_STONE_SHARD_INFO_RES = Message<"DC.Packet.SS2C_SHOP_RED_STONE_SHARD_INFO_RES"> & {
  /**
   * @generated from field: repeated DC.Packet.SSHOP_RED_STONE_SHARD_INFO infos = 1;
   */
  infos: SSHOP_RED_STONE_SHARD_INFO[];

  /**
   * @generated from field: uint32 loginType = 2;
   */
  loginType: number;
};

/**
 * Describes the message DC.Packet.SS2C_SHOP_RED_STONE_SHARD_INFO_RES.
 * Use `create(SS2C_SHOP_RED_STONE_SHARD_INFO_RESSchema)` to create a new message.
 */
export const SS2C_SHOP_RED_STONE_SHARD_INFO_RESSchema: GenMessage<SS2C_SHOP_RED_STONE_SHARD_INFO_RES> = /*@__PURE__*/
  messageDesc(file_Shop, 11);

/**
 * @generated from message DC.Packet.SC2S_SHOP_RED_STONE_SHARD_BUY_REQ
 */
export type SC2S_SHOP_RED_STONE_SHARD_BUY_REQ = Message<"DC.Packet.SC2S_SHOP_RED_STONE_SHARD_BUY_REQ"> & {
  /**
   * @generated from field: int32 productIndex = 1;
   */
  productIndex: number;

  /**
   * @generated from field: int32 localPort = 2;
   */
  localPort: number;
};

/**
 * Describes the message DC.Packet.SC2S_SHOP_RED_STONE_SHARD_BUY_REQ.
 * Use `create(SC2S_SHOP_RED_STONE_SHARD_BUY_REQSchema)` to create a new message.
 */
export const SC2S_SHOP_RED_STONE_SHARD_BUY_REQSchema: GenMessage<SC2S_SHOP_RED_STONE_SHARD_BUY_REQ> = /*@__PURE__*/
  messageDesc(file_Shop, 12);

/**
 * @generated from message DC.Packet.SS2C_SHOP_RED_STONE_SHARD_BUY_RES
 */
export type SS2C_SHOP_RED_STONE_SHARD_BUY_RES = Message<"DC.Packet.SS2C_SHOP_RED_STONE_SHARD_BUY_RES"> & {
  /**
   * @generated from field: int32 result = 1;
   */
  result: number;

  /**
   * @generated from field: int64 trxId = 2;
   */
  trxId: bigint;

  /**
   * @generated from field: string trxIdStr = 3;
   */
  trxIdStr: string;

  /**
   * @generated from field: string platformId = 4;
   */
  platformId: string;

  /**
   * @generated from field: string offerItemId = 5;
   */
  offerItemId: string;

  /**
   * @generated from field: string sandboxId = 6;
   */
  sandboxId: string;
};

/**
 * Describes the message DC.Packet.SS2C_SHOP_RED_STONE_SHARD_BUY_RES.
 * Use `create(SS2C_SHOP_RED_STONE_SHARD_BUY_RESSchema)` to create a new message.
 */
export const SS2C_SHOP_RED_STONE_SHARD_BUY_RESSchema: GenMessage<SS2C_SHOP_RED_STONE_SHARD_BUY_RES> = /*@__PURE__*/
  messageDesc(file_Shop, 13);

/**
 * @generated from message DC.Packet.SC2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ
 */
export type SC2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ = Message<"DC.Packet.SC2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ"> & {
  /**
   * @generated from field: uint32 appId = 1;
   */
  appId: number;

  /**
   * @generated from field: uint64 orderId = 2;
   */
  orderId: bigint;

  /**
   * @generated from field: int32 authorized = 3;
   */
  authorized: number;

  /**
   * @generated from field: string transactionId = 4;
   */
  transactionId: string;
};

/**
 * Describes the message DC.Packet.SC2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ.
 * Use `create(SC2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQSchema)` to create a new message.
 */
export const SC2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQSchema: GenMessage<SC2S_SHOP_RED_STONE_SHARD_BUY_CHECK_REQ> = /*@__PURE__*/
  messageDesc(file_Shop, 14);

/**
 * @generated from message DC.Packet.SS2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES
 */
export type SS2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES = Message<"DC.Packet.SS2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES"> & {
  /**
   * @generated from field: int32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES.
 * Use `create(SS2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RESSchema)` to create a new message.
 */
export const SS2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RESSchema: GenMessage<SS2C_SHOP_RED_STONE_SHARD_BUY_CHECK_RES> = /*@__PURE__*/
  messageDesc(file_Shop, 15);

/**
 * @generated from message DC.Packet.SC2S_SHOP_LEGEND_UPGRADE_REQ
 */
export type SC2S_SHOP_LEGEND_UPGRADE_REQ = Message<"DC.Packet.SC2S_SHOP_LEGEND_UPGRADE_REQ"> & {
};

/**
 * Describes the message DC.Packet.SC2S_SHOP_LEGEND_UPGRADE_REQ.
 * Use `create(SC2S_SHOP_LEGEND_UPGRADE_REQSchema)` to create a new message.
 */
export const SC2S_SHOP_LEGEND_UPGRADE_REQSchema: GenMessage<SC2S_SHOP_LEGEND_UPGRADE_REQ> = /*@__PURE__*/
  messageDesc(file_Shop, 16);

/**
 * @generated from message DC.Packet.SS2C_SHOP_LEGEND_UPGRADE_RES
 */
export type SS2C_SHOP_LEGEND_UPGRADE_RES = Message<"DC.Packet.SS2C_SHOP_LEGEND_UPGRADE_RES"> & {
  /**
   * @generated from field: int32 result = 1;
   */
  result: number;

  /**
   * @generated from field: string upgradeDate = 2;
   */
  upgradeDate: string;

  /**
   * @generated from field: string upgradeTime = 3;
   */
  upgradeTime: string;
};

/**
 * Describes the message DC.Packet.SS2C_SHOP_LEGEND_UPGRADE_RES.
 * Use `create(SS2C_SHOP_LEGEND_UPGRADE_RESSchema)` to create a new message.
 */
export const SS2C_SHOP_LEGEND_UPGRADE_RESSchema: GenMessage<SS2C_SHOP_LEGEND_UPGRADE_RES> = /*@__PURE__*/
  messageDesc(file_Shop, 17);

/**
 * @generated from message DC.Packet.SC2S_REFRESH_RED_STONE_SHARD_REQ
 */
export type SC2S_REFRESH_RED_STONE_SHARD_REQ = Message<"DC.Packet.SC2S_REFRESH_RED_STONE_SHARD_REQ"> & {
  /**
   * @generated from field: string accessId = 1;
   */
  accessId: string;
};

/**
 * Describes the message DC.Packet.SC2S_REFRESH_RED_STONE_SHARD_REQ.
 * Use `create(SC2S_REFRESH_RED_STONE_SHARD_REQSchema)` to create a new message.
 */
export const SC2S_REFRESH_RED_STONE_SHARD_REQSchema: GenMessage<SC2S_REFRESH_RED_STONE_SHARD_REQ> = /*@__PURE__*/
  messageDesc(file_Shop, 18);

/**
 * @generated from message DC.Packet.SS2C_REFRESH_RED_STONE_SHARD_RES
 */
export type SS2C_REFRESH_RED_STONE_SHARD_RES = Message<"DC.Packet.SS2C_REFRESH_RED_STONE_SHARD_RES"> & {
};

/**
 * Describes the message DC.Packet.SS2C_REFRESH_RED_STONE_SHARD_RES.
 * Use `create(SS2C_REFRESH_RED_STONE_SHARD_RESSchema)` to create a new message.
 */
export const SS2C_REFRESH_RED_STONE_SHARD_RESSchema: GenMessage<SS2C_REFRESH_RED_STONE_SHARD_RES> = /*@__PURE__*/
  messageDesc(file_Shop, 19);

/**
 * @generated from message DC.Packet.SC2S_SHOP_CHANGE_ACCOUNT_NAME_REQ
 */
export type SC2S_SHOP_CHANGE_ACCOUNT_NAME_REQ = Message<"DC.Packet.SC2S_SHOP_CHANGE_ACCOUNT_NAME_REQ"> & {
  /**
   * @generated from field: string changeAccountName = 1;
   */
  changeAccountName: string;
};

/**
 * Describes the message DC.Packet.SC2S_SHOP_CHANGE_ACCOUNT_NAME_REQ.
 * Use `create(SC2S_SHOP_CHANGE_ACCOUNT_NAME_REQSchema)` to create a new message.
 */
export const SC2S_SHOP_CHANGE_ACCOUNT_NAME_REQSchema: GenMessage<SC2S_SHOP_CHANGE_ACCOUNT_NAME_REQ> = /*@__PURE__*/
  messageDesc(file_Shop, 20);

/**
 * @generated from message DC.Packet.SS2C_SHOP_CHANGE_ACCOUNT_NAME_RES
 */
export type SS2C_SHOP_CHANGE_ACCOUNT_NAME_RES = Message<"DC.Packet.SS2C_SHOP_CHANGE_ACCOUNT_NAME_RES"> & {
  /**
   * @generated from field: int32 result = 1;
   */
  result: number;

  /**
   * @generated from field: string changeAccountName = 2;
   */
  changeAccountName: string;
};

/**
 * Describes the message DC.Packet.SS2C_SHOP_CHANGE_ACCOUNT_NAME_RES.
 * Use `create(SS2C_SHOP_CHANGE_ACCOUNT_NAME_RESSchema)` to create a new message.
 */
export const SS2C_SHOP_CHANGE_ACCOUNT_NAME_RESSchema: GenMessage<SS2C_SHOP_CHANGE_ACCOUNT_NAME_RES> = /*@__PURE__*/
  messageDesc(file_Shop, 21);

/**
 * @generated from message DC.Packet.SSHOP_ITEM_CHECKED_INFO
 */
export type SSHOP_ITEM_CHECKED_INFO = Message<"DC.Packet.SSHOP_ITEM_CHECKED_INFO"> & {
  /**
   * @generated from field: repeated string shopId = 1;
   */
  shopId: string[];
};

/**
 * Describes the message DC.Packet.SSHOP_ITEM_CHECKED_INFO.
 * Use `create(SSHOP_ITEM_CHECKED_INFOSchema)` to create a new message.
 */
export const SSHOP_ITEM_CHECKED_INFOSchema: GenMessage<SSHOP_ITEM_CHECKED_INFO> = /*@__PURE__*/
  messageDesc(file_Shop, 22);

/**
 * @generated from message DC.Packet.SS2C_SHOP_ITEM_CHECK_NOT
 */
export type SS2C_SHOP_ITEM_CHECK_NOT = Message<"DC.Packet.SS2C_SHOP_ITEM_CHECK_NOT"> & {
  /**
   * @generated from field: int32 shopNotifyStatus = 1;
   */
  shopNotifyStatus: number;
};

/**
 * Describes the message DC.Packet.SS2C_SHOP_ITEM_CHECK_NOT.
 * Use `create(SS2C_SHOP_ITEM_CHECK_NOTSchema)` to create a new message.
 */
export const SS2C_SHOP_ITEM_CHECK_NOTSchema: GenMessage<SS2C_SHOP_ITEM_CHECK_NOT> = /*@__PURE__*/
  messageDesc(file_Shop, 23);

/**
 * @generated from message DC.Packet.SC2S_SHOP_LEGEND_DLC_INSTALL_REQ
 */
export type SC2S_SHOP_LEGEND_DLC_INSTALL_REQ = Message<"DC.Packet.SC2S_SHOP_LEGEND_DLC_INSTALL_REQ"> & {
};

/**
 * Describes the message DC.Packet.SC2S_SHOP_LEGEND_DLC_INSTALL_REQ.
 * Use `create(SC2S_SHOP_LEGEND_DLC_INSTALL_REQSchema)` to create a new message.
 */
export const SC2S_SHOP_LEGEND_DLC_INSTALL_REQSchema: GenMessage<SC2S_SHOP_LEGEND_DLC_INSTALL_REQ> = /*@__PURE__*/
  messageDesc(file_Shop, 24);

/**
 * @generated from message DC.Packet.SS2C_SHOP_LEGEND_DLC_INSTALL_RES
 */
export type SS2C_SHOP_LEGEND_DLC_INSTALL_RES = Message<"DC.Packet.SS2C_SHOP_LEGEND_DLC_INSTALL_RES"> & {
  /**
   * @generated from field: int32 result = 1;
   */
  result: number;

  /**
   * @generated from field: int64 trxId = 2;
   */
  trxId: bigint;

  /**
   * @generated from field: string trxIdStr = 3;
   */
  trxIdStr: string;

  /**
   * @generated from field: string platformId = 4;
   */
  platformId: string;

  /**
   * @generated from field: string offerItemId = 5;
   */
  offerItemId: string;

  /**
   * @generated from field: string sandboxId = 6;
   */
  sandboxId: string;

  /**
   * @generated from field: string param1 = 7;
   */
  param1: string;

  /**
   * @generated from field: string param2 = 8;
   */
  param2: string;
};

/**
 * Describes the message DC.Packet.SS2C_SHOP_LEGEND_DLC_INSTALL_RES.
 * Use `create(SS2C_SHOP_LEGEND_DLC_INSTALL_RESSchema)` to create a new message.
 */
export const SS2C_SHOP_LEGEND_DLC_INSTALL_RESSchema: GenMessage<SS2C_SHOP_LEGEND_DLC_INSTALL_RES> = /*@__PURE__*/
  messageDesc(file_Shop, 25);

/**
 * @generated from message DC.Packet.SC2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ
 */
export type SC2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ = Message<"DC.Packet.SC2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ"> & {
  /**
   * @generated from field: uint32 appId = 1;
   */
  appId: number;

  /**
   * @generated from field: uint64 orderId = 2;
   */
  orderId: bigint;

  /**
   * @generated from field: int32 authorized = 3;
   */
  authorized: number;

  /**
   * @generated from field: string transactionId = 4;
   */
  transactionId: string;
};

/**
 * Describes the message DC.Packet.SC2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ.
 * Use `create(SC2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQSchema)` to create a new message.
 */
export const SC2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQSchema: GenMessage<SC2S_SHOP_LEGEND_DLC_INSTALL_CHECK_REQ> = /*@__PURE__*/
  messageDesc(file_Shop, 26);

/**
 * @generated from message DC.Packet.SS2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES
 */
export type SS2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES = Message<"DC.Packet.SS2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES"> & {
  /**
   * @generated from field: int32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES.
 * Use `create(SS2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RESSchema)` to create a new message.
 */
export const SS2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RESSchema: GenMessage<SS2C_SHOP_LEGEND_DLC_INSTALL_CHECK_RES> = /*@__PURE__*/
  messageDesc(file_Shop, 27);

/**
 * @generated from message DC.Packet.SS2C_SHOP_TWITCH_DROPS_REWARD_NOT
 */
export type SS2C_SHOP_TWITCH_DROPS_REWARD_NOT = Message<"DC.Packet.SS2C_SHOP_TWITCH_DROPS_REWARD_NOT"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;

  /**
   * @generated from field: repeated DC.Packet.STWITCH_REWARD_INFO rewards = 2;
   */
  rewards: STWITCH_REWARD_INFO[];
};

/**
 * Describes the message DC.Packet.SS2C_SHOP_TWITCH_DROPS_REWARD_NOT.
 * Use `create(SS2C_SHOP_TWITCH_DROPS_REWARD_NOTSchema)` to create a new message.
 */
export const SS2C_SHOP_TWITCH_DROPS_REWARD_NOTSchema: GenMessage<SS2C_SHOP_TWITCH_DROPS_REWARD_NOT> = /*@__PURE__*/
  messageDesc(file_Shop, 28);

