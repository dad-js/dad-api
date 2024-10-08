// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file MarketPlace.proto (package DC.Packet, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { SItem } from "./_Item_pb";
import { file__Item } from "./_Item_pb";
import type { SACCOUNT_NICKNAME } from "./_Character_pb";
import { file__Character } from "./_Character_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file MarketPlace.proto.
 */
export const file_MarketPlace: GenFile = /*@__PURE__*/
  fileDesc("ChFNYXJrZXRQbGFjZS5wcm90bxIJREMuUGFja2V0Ij8KGFNNQVJLRVRQTEFDRV9GSUxURVJfSU5GTxISCgpmaWx0ZXJUeXBlGAEgASgFEg8KB2ZpbHRlcnMYAiADKAkilQEKHlNDMlNfTUFSS0VUUExBQ0VfSVRFTV9MSVNUX1JFURI4CgtmaWx0ZXJJbmZvcxgBIAMoCzIjLkRDLlBhY2tldC5TTUFSS0VUUExBQ0VfRklMVEVSX0lORk8SEAoIc29ydFR5cGUYAyABKAUSEgoKc29ydE1ldGhvZBgCIAEoBRITCgtjdXJyZW50UGFnZRgEIAEoBSKoAQoWU01BUktFVFBMQUNFX0lURU1fSU5GTxIRCglsaXN0aW5nSWQYASABKAMSHgoEaXRlbRgCIAEoCzIQLkRDLlBhY2tldC5TSXRlbRINCgVwcmljZRgDIAEoBRIcChRyZW1haW5FeHBpcmF0aW9uVGltZRgEIAEoAxIuCghuaWNrbmFtZRgFIAEoCzIcLkRDLlBhY2tldC5TQUNDT1VOVF9OSUNLTkFNRSJ8Ch5TUzJDX01BUktFVFBMQUNFX0lURU1fTElTVF9SRVMSNAoJaXRlbUluZm9zGAEgAygLMiEuREMuUGFja2V0LlNNQVJLRVRQTEFDRV9JVEVNX0lORk8SEwoLY3VycmVudFBhZ2UYAiABKAUSDwoHbWF4UGFnZRgDIAEoBSIjCiFTQzJTX01BUktFVFBMQUNFX01ZX0lURU1fTElTVF9SRVEiOAoXU01BUktFVFBMQUNFX1BSSUNFX0lORk8SDgoGaXRlbUlkGAEgASgJEg0KBXByaWNlGAIgASgNIrsBChlTTUFSS0VUUExBQ0VfTVlfSVRFTV9JTkZPEjMKCGl0ZW1JbmZvGAEgASgLMiEuREMuUGFja2V0LlNNQVJLRVRQTEFDRV9JVEVNX0lORk8SHAoUcmVtYWluRXhwaXJhdGlvblRpbWUYAiABKAMSEwoLbXlJdGVtU3RhdGUYAyABKAUSNgoKcHJpY2VJbmZvcxgEIAMoCzIiLkRDLlBhY2tldC5TTUFSS0VUUExBQ0VfUFJJQ0VfSU5GTyJeCiFTUzJDX01BUktFVFBMQUNFX01ZX0lURU1fTElTVF9SRVMSOQoLbXlJdGVtSW5mb3MYASADKAsyJC5EQy5QYWNrZXQuU01BUktFVFBMQUNFX01ZX0lURU1fSU5GTyJyChxTTUFSS0VUUExBQ0VfVFJBREVfSVRFTV9JTkZPEhQKDGl0ZW1VbmlxdWVJZBgBIAEoBBIRCglpdGVtQ291bnQYAiABKA0SGQoRaXRlbUNvbnRlbnRzQ291bnQYAyABKA0SDgoGc2xvdElkGAQgASgFIm8KHVNDMlNfTUFSS0VUUExBQ0VfSVRFTV9CVVlfUkVREhEKCWxpc3RpbmdJZBgBIAEoAxI7Cgp0cmFkZUluZm9zGAIgAygLMicuREMuUGFja2V0LlNNQVJLRVRQTEFDRV9UUkFERV9JVEVNX0lORk8iLwodU1MyQ19NQVJLRVRQTEFDRV9JVEVNX0JVWV9SRVMSDgoGcmVzdWx0GAEgASgFIlwKGlNNQVJLRVRQTEFDRV9SRUdJU1RFUl9JTkZPEhAKCHVuaXF1ZUlkGAEgASgDEhEKCWl0ZW1Db3VudBgCIAEoDRIZChFpdGVtQ29udGVudHNDb3VudBgDIAEoDSKZAQoiU0MyU19NQVJLRVRQTEFDRV9JVEVNX1JFR0lTVEVSX1JFURI7CgxyZWdpc3RlckluZm8YASABKAsyJS5EQy5QYWNrZXQuU01BUktFVFBMQUNFX1JFR0lTVEVSX0lORk8SNgoKcHJpY2VJbmZvcxgCIAMoCzIiLkRDLlBhY2tldC5TTUFSS0VUUExBQ0VfUFJJQ0VfSU5GTyI0CiJTUzJDX01BUktFVFBMQUNFX0lURU1fUkVHSVNURVJfUkVTEg4KBnJlc3VsdBgBIAEoBSI1CiBTQzJTX01BUktFVFBMQUNFX0lURU1fQ0FOQ0VMX1JFURIRCglsaXN0aW5nSWQYASABKAMiMgogU1MyQ19NQVJLRVRQTEFDRV9JVEVNX0NBTkNFTF9SRVMSDgoGcmVzdWx0GAEgASgFIpcBChxTTUFSS0VUUExBQ0VfVFJBREVfU0xPVF9JTkZPEhMKC2ludmVudG9yeUlkGAEgASgNEg4KBnNsb3RJZBgCIAEoDRIOCgZpdGVtSWQYAyABKAkSFAoMaXRlbVVuaXF1ZUlkGAQgASgEEhEKCWl0ZW1Db3VudBgFIAEoDRIZChFpdGVtQ29udGVudHNDb3VudBgGIAEoDSJ0CiNTQzJTX01BUktFVFBMQUNFX1RSQU5TRkVSX0lURU1TX1JFURIRCglsaXN0aW5nSWQYASABKAMSOgoJc2xvdEluZm9zGAIgAygLMicuREMuUGFja2V0LlNNQVJLRVRQTEFDRV9UUkFERV9TTE9UX0lORk8iNQojU1MyQ19NQVJLRVRQTEFDRV9UUkFOU0ZFUl9JVEVNU19SRVMSDgoGcmVzdWx0GAEgASgFIjQKIlNTMkNfTUFSS0VUUExBQ0VfSVRFTV9IQVNfU09MRF9OT1QSDgoGaXNTb2xkGAEgASgFIhwKGlNDMlNfTUFSS0VUUExBQ0VfRU5URVJfUkVRIiwKGlNTMkNfTUFSS0VUUExBQ0VfRU5URVJfUkVTEg4KBnJlc3VsdBgBIAEoBSqRAQoSTUFSS0VUUExBQ0VfRklMVEVSEg8KC0ZJTFRFUl9OT05FEAASCAoETkFNRRABEgoKBlJBUklUWRACEggKBFNMT1QQAxIICgRUWVBFEAQSFAoQU1RBVElDX0FUVFJJQlVURRAFEhQKEFJBTkRPTV9BVFRSSUJVVEUQBhIJCgVQUklDRRAHEgkKBUNMQVNTEAgqTAoQTUFSS0VUUExBQ0VfU09SVBIZChVNQVJLRVRQTEFDRV9TT1JUX05PTkUQABINCglBU0NFTkRJTkcQARIOCgpERVNDRU5ESU5HEAIqdQoZTUFSS0VUUExBQ0VfTVlfSVRFTV9TVEFURRIWChJNWV9JVEVNX1NUQVRFX05PTkUQABILCgdMSVNUSU5HEAESEwoPTElTVElOR19FWFBJUkVEEAISCAoEU09MRBADEhQKEFRSQU5TRkVSX0VYUElSRUQQBEIoChdjb20ucGFja2V0cy5tYXJrZXRQbGFjZUILbWFya2V0UGxhY2VQAGIGcHJvdG8z", [file__Item, file__Character]);

/**
 * @generated from message DC.Packet.SMARKETPLACE_FILTER_INFO
 */
export type SMARKETPLACE_FILTER_INFO = Message<"DC.Packet.SMARKETPLACE_FILTER_INFO"> & {
  /**
   * @generated from field: int32 filterType = 1;
   */
  filterType: number;

  /**
   * @generated from field: repeated string filters = 2;
   */
  filters: string[];
};

/**
 * Describes the message DC.Packet.SMARKETPLACE_FILTER_INFO.
 * Use `create(SMARKETPLACE_FILTER_INFOSchema)` to create a new message.
 */
export const SMARKETPLACE_FILTER_INFOSchema: GenMessage<SMARKETPLACE_FILTER_INFO> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 0);

/**
 * @generated from message DC.Packet.SC2S_MARKETPLACE_ITEM_LIST_REQ
 */
export type SC2S_MARKETPLACE_ITEM_LIST_REQ = Message<"DC.Packet.SC2S_MARKETPLACE_ITEM_LIST_REQ"> & {
  /**
   * @generated from field: repeated DC.Packet.SMARKETPLACE_FILTER_INFO filterInfos = 1;
   */
  filterInfos: SMARKETPLACE_FILTER_INFO[];

  /**
   * @generated from field: int32 sortType = 3;
   */
  sortType: number;

  /**
   * @generated from field: int32 sortMethod = 2;
   */
  sortMethod: number;

  /**
   * @generated from field: int32 currentPage = 4;
   */
  currentPage: number;
};

/**
 * Describes the message DC.Packet.SC2S_MARKETPLACE_ITEM_LIST_REQ.
 * Use `create(SC2S_MARKETPLACE_ITEM_LIST_REQSchema)` to create a new message.
 */
export const SC2S_MARKETPLACE_ITEM_LIST_REQSchema: GenMessage<SC2S_MARKETPLACE_ITEM_LIST_REQ> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 1);

/**
 * @generated from message DC.Packet.SMARKETPLACE_ITEM_INFO
 */
export type SMARKETPLACE_ITEM_INFO = Message<"DC.Packet.SMARKETPLACE_ITEM_INFO"> & {
  /**
   * @generated from field: int64 listingId = 1;
   */
  listingId: bigint;

  /**
   * @generated from field: DC.Packet.SItem item = 2;
   */
  item?: SItem;

  /**
   * @generated from field: int32 price = 3;
   */
  price: number;

  /**
   * @generated from field: int64 remainExpirationTime = 4;
   */
  remainExpirationTime: bigint;

  /**
   * @generated from field: DC.Packet.SACCOUNT_NICKNAME nickname = 5;
   */
  nickname?: SACCOUNT_NICKNAME;
};

/**
 * Describes the message DC.Packet.SMARKETPLACE_ITEM_INFO.
 * Use `create(SMARKETPLACE_ITEM_INFOSchema)` to create a new message.
 */
export const SMARKETPLACE_ITEM_INFOSchema: GenMessage<SMARKETPLACE_ITEM_INFO> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 2);

/**
 * @generated from message DC.Packet.SS2C_MARKETPLACE_ITEM_LIST_RES
 */
export type SS2C_MARKETPLACE_ITEM_LIST_RES = Message<"DC.Packet.SS2C_MARKETPLACE_ITEM_LIST_RES"> & {
  /**
   * @generated from field: repeated DC.Packet.SMARKETPLACE_ITEM_INFO itemInfos = 1;
   */
  itemInfos: SMARKETPLACE_ITEM_INFO[];

  /**
   * @generated from field: int32 currentPage = 2;
   */
  currentPage: number;

  /**
   * @generated from field: int32 maxPage = 3;
   */
  maxPage: number;
};

/**
 * Describes the message DC.Packet.SS2C_MARKETPLACE_ITEM_LIST_RES.
 * Use `create(SS2C_MARKETPLACE_ITEM_LIST_RESSchema)` to create a new message.
 */
export const SS2C_MARKETPLACE_ITEM_LIST_RESSchema: GenMessage<SS2C_MARKETPLACE_ITEM_LIST_RES> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 3);

/**
 * @generated from message DC.Packet.SC2S_MARKETPLACE_MY_ITEM_LIST_REQ
 */
export type SC2S_MARKETPLACE_MY_ITEM_LIST_REQ = Message<"DC.Packet.SC2S_MARKETPLACE_MY_ITEM_LIST_REQ"> & {
};

/**
 * Describes the message DC.Packet.SC2S_MARKETPLACE_MY_ITEM_LIST_REQ.
 * Use `create(SC2S_MARKETPLACE_MY_ITEM_LIST_REQSchema)` to create a new message.
 */
export const SC2S_MARKETPLACE_MY_ITEM_LIST_REQSchema: GenMessage<SC2S_MARKETPLACE_MY_ITEM_LIST_REQ> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 4);

/**
 * @generated from message DC.Packet.SMARKETPLACE_PRICE_INFO
 */
export type SMARKETPLACE_PRICE_INFO = Message<"DC.Packet.SMARKETPLACE_PRICE_INFO"> & {
  /**
   * @generated from field: string itemId = 1;
   */
  itemId: string;

  /**
   * @generated from field: uint32 price = 2;
   */
  price: number;
};

/**
 * Describes the message DC.Packet.SMARKETPLACE_PRICE_INFO.
 * Use `create(SMARKETPLACE_PRICE_INFOSchema)` to create a new message.
 */
export const SMARKETPLACE_PRICE_INFOSchema: GenMessage<SMARKETPLACE_PRICE_INFO> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 5);

/**
 * @generated from message DC.Packet.SMARKETPLACE_MY_ITEM_INFO
 */
export type SMARKETPLACE_MY_ITEM_INFO = Message<"DC.Packet.SMARKETPLACE_MY_ITEM_INFO"> & {
  /**
   * @generated from field: DC.Packet.SMARKETPLACE_ITEM_INFO itemInfo = 1;
   */
  itemInfo?: SMARKETPLACE_ITEM_INFO;

  /**
   * @generated from field: int64 remainExpirationTime = 2;
   */
  remainExpirationTime: bigint;

  /**
   * @generated from field: int32 myItemState = 3;
   */
  myItemState: number;

  /**
   * @generated from field: repeated DC.Packet.SMARKETPLACE_PRICE_INFO priceInfos = 4;
   */
  priceInfos: SMARKETPLACE_PRICE_INFO[];
};

/**
 * Describes the message DC.Packet.SMARKETPLACE_MY_ITEM_INFO.
 * Use `create(SMARKETPLACE_MY_ITEM_INFOSchema)` to create a new message.
 */
export const SMARKETPLACE_MY_ITEM_INFOSchema: GenMessage<SMARKETPLACE_MY_ITEM_INFO> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 6);

/**
 * @generated from message DC.Packet.SS2C_MARKETPLACE_MY_ITEM_LIST_RES
 */
export type SS2C_MARKETPLACE_MY_ITEM_LIST_RES = Message<"DC.Packet.SS2C_MARKETPLACE_MY_ITEM_LIST_RES"> & {
  /**
   * @generated from field: repeated DC.Packet.SMARKETPLACE_MY_ITEM_INFO myItemInfos = 1;
   */
  myItemInfos: SMARKETPLACE_MY_ITEM_INFO[];
};

/**
 * Describes the message DC.Packet.SS2C_MARKETPLACE_MY_ITEM_LIST_RES.
 * Use `create(SS2C_MARKETPLACE_MY_ITEM_LIST_RESSchema)` to create a new message.
 */
export const SS2C_MARKETPLACE_MY_ITEM_LIST_RESSchema: GenMessage<SS2C_MARKETPLACE_MY_ITEM_LIST_RES> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 7);

/**
 * @generated from message DC.Packet.SMARKETPLACE_TRADE_ITEM_INFO
 */
export type SMARKETPLACE_TRADE_ITEM_INFO = Message<"DC.Packet.SMARKETPLACE_TRADE_ITEM_INFO"> & {
  /**
   * @generated from field: uint64 itemUniqueId = 1;
   */
  itemUniqueId: bigint;

  /**
   * @generated from field: uint32 itemCount = 2;
   */
  itemCount: number;

  /**
   * @generated from field: uint32 itemContentsCount = 3;
   */
  itemContentsCount: number;

  /**
   * @generated from field: int32 slotId = 4;
   */
  slotId: number;
};

/**
 * Describes the message DC.Packet.SMARKETPLACE_TRADE_ITEM_INFO.
 * Use `create(SMARKETPLACE_TRADE_ITEM_INFOSchema)` to create a new message.
 */
export const SMARKETPLACE_TRADE_ITEM_INFOSchema: GenMessage<SMARKETPLACE_TRADE_ITEM_INFO> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 8);

/**
 * @generated from message DC.Packet.SC2S_MARKETPLACE_ITEM_BUY_REQ
 */
export type SC2S_MARKETPLACE_ITEM_BUY_REQ = Message<"DC.Packet.SC2S_MARKETPLACE_ITEM_BUY_REQ"> & {
  /**
   * @generated from field: int64 listingId = 1;
   */
  listingId: bigint;

  /**
   * @generated from field: repeated DC.Packet.SMARKETPLACE_TRADE_ITEM_INFO tradeInfos = 2;
   */
  tradeInfos: SMARKETPLACE_TRADE_ITEM_INFO[];
};

/**
 * Describes the message DC.Packet.SC2S_MARKETPLACE_ITEM_BUY_REQ.
 * Use `create(SC2S_MARKETPLACE_ITEM_BUY_REQSchema)` to create a new message.
 */
export const SC2S_MARKETPLACE_ITEM_BUY_REQSchema: GenMessage<SC2S_MARKETPLACE_ITEM_BUY_REQ> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 9);

/**
 * @generated from message DC.Packet.SS2C_MARKETPLACE_ITEM_BUY_RES
 */
export type SS2C_MARKETPLACE_ITEM_BUY_RES = Message<"DC.Packet.SS2C_MARKETPLACE_ITEM_BUY_RES"> & {
  /**
   * @generated from field: int32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_MARKETPLACE_ITEM_BUY_RES.
 * Use `create(SS2C_MARKETPLACE_ITEM_BUY_RESSchema)` to create a new message.
 */
export const SS2C_MARKETPLACE_ITEM_BUY_RESSchema: GenMessage<SS2C_MARKETPLACE_ITEM_BUY_RES> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 10);

/**
 * @generated from message DC.Packet.SMARKETPLACE_REGISTER_INFO
 */
export type SMARKETPLACE_REGISTER_INFO = Message<"DC.Packet.SMARKETPLACE_REGISTER_INFO"> & {
  /**
   * @generated from field: int64 uniqueId = 1;
   */
  uniqueId: bigint;

  /**
   * @generated from field: uint32 itemCount = 2;
   */
  itemCount: number;

  /**
   * @generated from field: uint32 itemContentsCount = 3;
   */
  itemContentsCount: number;
};

/**
 * Describes the message DC.Packet.SMARKETPLACE_REGISTER_INFO.
 * Use `create(SMARKETPLACE_REGISTER_INFOSchema)` to create a new message.
 */
export const SMARKETPLACE_REGISTER_INFOSchema: GenMessage<SMARKETPLACE_REGISTER_INFO> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 11);

/**
 * @generated from message DC.Packet.SC2S_MARKETPLACE_ITEM_REGISTER_REQ
 */
export type SC2S_MARKETPLACE_ITEM_REGISTER_REQ = Message<"DC.Packet.SC2S_MARKETPLACE_ITEM_REGISTER_REQ"> & {
  /**
   * @generated from field: DC.Packet.SMARKETPLACE_REGISTER_INFO registerInfo = 1;
   */
  registerInfo?: SMARKETPLACE_REGISTER_INFO;

  /**
   * @generated from field: repeated DC.Packet.SMARKETPLACE_PRICE_INFO priceInfos = 2;
   */
  priceInfos: SMARKETPLACE_PRICE_INFO[];
};

/**
 * Describes the message DC.Packet.SC2S_MARKETPLACE_ITEM_REGISTER_REQ.
 * Use `create(SC2S_MARKETPLACE_ITEM_REGISTER_REQSchema)` to create a new message.
 */
export const SC2S_MARKETPLACE_ITEM_REGISTER_REQSchema: GenMessage<SC2S_MARKETPLACE_ITEM_REGISTER_REQ> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 12);

/**
 * @generated from message DC.Packet.SS2C_MARKETPLACE_ITEM_REGISTER_RES
 */
export type SS2C_MARKETPLACE_ITEM_REGISTER_RES = Message<"DC.Packet.SS2C_MARKETPLACE_ITEM_REGISTER_RES"> & {
  /**
   * @generated from field: int32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_MARKETPLACE_ITEM_REGISTER_RES.
 * Use `create(SS2C_MARKETPLACE_ITEM_REGISTER_RESSchema)` to create a new message.
 */
export const SS2C_MARKETPLACE_ITEM_REGISTER_RESSchema: GenMessage<SS2C_MARKETPLACE_ITEM_REGISTER_RES> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 13);

/**
 * @generated from message DC.Packet.SC2S_MARKETPLACE_ITEM_CANCEL_REQ
 */
export type SC2S_MARKETPLACE_ITEM_CANCEL_REQ = Message<"DC.Packet.SC2S_MARKETPLACE_ITEM_CANCEL_REQ"> & {
  /**
   * @generated from field: int64 listingId = 1;
   */
  listingId: bigint;
};

/**
 * Describes the message DC.Packet.SC2S_MARKETPLACE_ITEM_CANCEL_REQ.
 * Use `create(SC2S_MARKETPLACE_ITEM_CANCEL_REQSchema)` to create a new message.
 */
export const SC2S_MARKETPLACE_ITEM_CANCEL_REQSchema: GenMessage<SC2S_MARKETPLACE_ITEM_CANCEL_REQ> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 14);

/**
 * @generated from message DC.Packet.SS2C_MARKETPLACE_ITEM_CANCEL_RES
 */
export type SS2C_MARKETPLACE_ITEM_CANCEL_RES = Message<"DC.Packet.SS2C_MARKETPLACE_ITEM_CANCEL_RES"> & {
  /**
   * @generated from field: int32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_MARKETPLACE_ITEM_CANCEL_RES.
 * Use `create(SS2C_MARKETPLACE_ITEM_CANCEL_RESSchema)` to create a new message.
 */
export const SS2C_MARKETPLACE_ITEM_CANCEL_RESSchema: GenMessage<SS2C_MARKETPLACE_ITEM_CANCEL_RES> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 15);

/**
 * @generated from message DC.Packet.SMARKETPLACE_TRADE_SLOT_INFO
 */
export type SMARKETPLACE_TRADE_SLOT_INFO = Message<"DC.Packet.SMARKETPLACE_TRADE_SLOT_INFO"> & {
  /**
   * @generated from field: uint32 inventoryId = 1;
   */
  inventoryId: number;

  /**
   * @generated from field: uint32 slotId = 2;
   */
  slotId: number;

  /**
   * @generated from field: string itemId = 3;
   */
  itemId: string;

  /**
   * @generated from field: uint64 itemUniqueId = 4;
   */
  itemUniqueId: bigint;

  /**
   * @generated from field: uint32 itemCount = 5;
   */
  itemCount: number;

  /**
   * @generated from field: uint32 itemContentsCount = 6;
   */
  itemContentsCount: number;
};

/**
 * Describes the message DC.Packet.SMARKETPLACE_TRADE_SLOT_INFO.
 * Use `create(SMARKETPLACE_TRADE_SLOT_INFOSchema)` to create a new message.
 */
export const SMARKETPLACE_TRADE_SLOT_INFOSchema: GenMessage<SMARKETPLACE_TRADE_SLOT_INFO> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 16);

/**
 * @generated from message DC.Packet.SC2S_MARKETPLACE_TRANSFER_ITEMS_REQ
 */
export type SC2S_MARKETPLACE_TRANSFER_ITEMS_REQ = Message<"DC.Packet.SC2S_MARKETPLACE_TRANSFER_ITEMS_REQ"> & {
  /**
   * @generated from field: int64 listingId = 1;
   */
  listingId: bigint;

  /**
   * @generated from field: repeated DC.Packet.SMARKETPLACE_TRADE_SLOT_INFO slotInfos = 2;
   */
  slotInfos: SMARKETPLACE_TRADE_SLOT_INFO[];
};

/**
 * Describes the message DC.Packet.SC2S_MARKETPLACE_TRANSFER_ITEMS_REQ.
 * Use `create(SC2S_MARKETPLACE_TRANSFER_ITEMS_REQSchema)` to create a new message.
 */
export const SC2S_MARKETPLACE_TRANSFER_ITEMS_REQSchema: GenMessage<SC2S_MARKETPLACE_TRANSFER_ITEMS_REQ> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 17);

/**
 * @generated from message DC.Packet.SS2C_MARKETPLACE_TRANSFER_ITEMS_RES
 */
export type SS2C_MARKETPLACE_TRANSFER_ITEMS_RES = Message<"DC.Packet.SS2C_MARKETPLACE_TRANSFER_ITEMS_RES"> & {
  /**
   * @generated from field: int32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_MARKETPLACE_TRANSFER_ITEMS_RES.
 * Use `create(SS2C_MARKETPLACE_TRANSFER_ITEMS_RESSchema)` to create a new message.
 */
export const SS2C_MARKETPLACE_TRANSFER_ITEMS_RESSchema: GenMessage<SS2C_MARKETPLACE_TRANSFER_ITEMS_RES> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 18);

/**
 * @generated from message DC.Packet.SS2C_MARKETPLACE_ITEM_HAS_SOLD_NOT
 */
export type SS2C_MARKETPLACE_ITEM_HAS_SOLD_NOT = Message<"DC.Packet.SS2C_MARKETPLACE_ITEM_HAS_SOLD_NOT"> & {
  /**
   * @generated from field: int32 isSold = 1;
   */
  isSold: number;
};

/**
 * Describes the message DC.Packet.SS2C_MARKETPLACE_ITEM_HAS_SOLD_NOT.
 * Use `create(SS2C_MARKETPLACE_ITEM_HAS_SOLD_NOTSchema)` to create a new message.
 */
export const SS2C_MARKETPLACE_ITEM_HAS_SOLD_NOTSchema: GenMessage<SS2C_MARKETPLACE_ITEM_HAS_SOLD_NOT> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 19);

/**
 * @generated from message DC.Packet.SC2S_MARKETPLACE_ENTER_REQ
 */
export type SC2S_MARKETPLACE_ENTER_REQ = Message<"DC.Packet.SC2S_MARKETPLACE_ENTER_REQ"> & {
};

/**
 * Describes the message DC.Packet.SC2S_MARKETPLACE_ENTER_REQ.
 * Use `create(SC2S_MARKETPLACE_ENTER_REQSchema)` to create a new message.
 */
export const SC2S_MARKETPLACE_ENTER_REQSchema: GenMessage<SC2S_MARKETPLACE_ENTER_REQ> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 20);

/**
 * @generated from message DC.Packet.SS2C_MARKETPLACE_ENTER_RES
 */
export type SS2C_MARKETPLACE_ENTER_RES = Message<"DC.Packet.SS2C_MARKETPLACE_ENTER_RES"> & {
  /**
   * @generated from field: int32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_MARKETPLACE_ENTER_RES.
 * Use `create(SS2C_MARKETPLACE_ENTER_RESSchema)` to create a new message.
 */
export const SS2C_MARKETPLACE_ENTER_RESSchema: GenMessage<SS2C_MARKETPLACE_ENTER_RES> = /*@__PURE__*/
  messageDesc(file_MarketPlace, 21);

/**
 * @generated from enum DC.Packet.MARKETPLACE_FILTER
 */
export enum MARKETPLACE_FILTER {
  /**
   * @generated from enum value: FILTER_NONE = 0;
   */
  FILTER_NONE = 0,

  /**
   * @generated from enum value: NAME = 1;
   */
  NAME = 1,

  /**
   * @generated from enum value: RARITY = 2;
   */
  RARITY = 2,

  /**
   * @generated from enum value: SLOT = 3;
   */
  SLOT = 3,

  /**
   * @generated from enum value: TYPE = 4;
   */
  TYPE = 4,

  /**
   * @generated from enum value: STATIC_ATTRIBUTE = 5;
   */
  STATIC_ATTRIBUTE = 5,

  /**
   * @generated from enum value: RANDOM_ATTRIBUTE = 6;
   */
  RANDOM_ATTRIBUTE = 6,

  /**
   * @generated from enum value: PRICE = 7;
   */
  PRICE = 7,

  /**
   * @generated from enum value: CLASS = 8;
   */
  CLASS = 8,
}

/**
 * Describes the enum DC.Packet.MARKETPLACE_FILTER.
 */
export const MARKETPLACE_FILTERSchema: GenEnum<MARKETPLACE_FILTER> = /*@__PURE__*/
  enumDesc(file_MarketPlace, 0);

/**
 * @generated from enum DC.Packet.MARKETPLACE_SORT
 */
export enum MARKETPLACE_SORT {
  /**
   * @generated from enum value: MARKETPLACE_SORT_NONE = 0;
   */
  MARKETPLACE_SORT_NONE = 0,

  /**
   * @generated from enum value: ASCENDING = 1;
   */
  ASCENDING = 1,

  /**
   * @generated from enum value: DESCENDING = 2;
   */
  DESCENDING = 2,
}

/**
 * Describes the enum DC.Packet.MARKETPLACE_SORT.
 */
export const MARKETPLACE_SORTSchema: GenEnum<MARKETPLACE_SORT> = /*@__PURE__*/
  enumDesc(file_MarketPlace, 1);

/**
 * @generated from enum DC.Packet.MARKETPLACE_MY_ITEM_STATE
 */
export enum MARKETPLACE_MY_ITEM_STATE {
  /**
   * @generated from enum value: MY_ITEM_STATE_NONE = 0;
   */
  MY_ITEM_STATE_NONE = 0,

  /**
   * @generated from enum value: LISTING = 1;
   */
  LISTING = 1,

  /**
   * @generated from enum value: LISTING_EXPIRED = 2;
   */
  LISTING_EXPIRED = 2,

  /**
   * @generated from enum value: SOLD = 3;
   */
  SOLD = 3,

  /**
   * @generated from enum value: TRANSFER_EXPIRED = 4;
   */
  TRANSFER_EXPIRED = 4,
}

/**
 * Describes the enum DC.Packet.MARKETPLACE_MY_ITEM_STATE.
 */
export const MARKETPLACE_MY_ITEM_STATESchema: GenEnum<MARKETPLACE_MY_ITEM_STATE> = /*@__PURE__*/
  enumDesc(file_MarketPlace, 2);

