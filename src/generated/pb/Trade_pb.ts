// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file Trade.proto (package DC.Packet, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { SItem } from "./_Item_pb";
import { file__Item } from "./_Item_pb";
import type { SACCOUNT_NICKNAME, SCHARACTER_TRADE_INFO } from "./_Character_pb";
import { file__Character } from "./_Character_pb";
import type { SCHATDATA } from "./_Chat_pb";
import { file__Chat } from "./_Chat_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file Trade.proto.
 */
export const file_Trade: GenFile = /*@__PURE__*/
  fileDesc("CgtUcmFkZS5wcm90bxIJREMuUGFja2V0Im8KDlNUUkFERV9DSEFOTkVMEg0KBWluZGV4GAEgASgNEhMKC2NoYW5uZWxOYW1lGAIgASgJEhMKC21lbWJlckNvdW50GAMgASgNEhAKCHJvb21UeXBlGAQgASgNEhIKCmdyb3VwSW5kZXgYBSABKA0ifwoPU1RSQURFX0NIQVRfQzJTEhAKCGNoYXRUeXBlGAEgASgNEhcKD3RhcmdldEFjY291bnRJZBgCIAEoCRIZChF0YXJnZXRDaGFyYWN0ZXJJZBgDIAEoCRImCghjaGF0RGF0YRgEIAEoCzIULkRDLlBhY2tldC5TQ0hBVERBVEEiaAoPU1RSQURFX0NIQVRfUzJDEg0KBWluZGV4GAEgASgEEhAKCGNoYXRUeXBlGAIgASgNEgwKBHRpbWUYAyABKAQSJgoIY2hhdERhdGEYBCABKAsyFC5EQy5QYWNrZXQuU0NIQVREQVRBIlAKHVNUUkFERV9NRU1CRVJTSElQX1JFUVVJUkVNRU5UEhYKDm1lbWJlclNoaXBUeXBlGAEgASgNEhcKD21lbWJlclNoaXBWYWx1ZRgCIAEoDSJXChJTVFJBRElOR19VU0VSX0lORk8SLgoIbmlja05hbWUYASABKAsyHC5EQy5QYWNrZXQuU0FDQ09VTlRfTklDS05BTUUSEQoJYWNjb3VudElkGAIgASgJImUKFVNUUkFESU5HX0NPTkZJUk1fSVRFTRIrCgRpbmZvGAEgASgLMh0uREMuUGFja2V0LlNUUkFESU5HX1VTRVJfSU5GTxIfCgVpdGVtcxgCIAMoCzIQLkRDLlBhY2tldC5TSXRlbSJnCh9TVFJBREVfQ0hBTk5FTF9VU0VSX1VQREFURV9JTkZPEhIKCnVwZGF0ZUZsYWcYASABKA0SMAoGdHJhZGVyGAIgASgLMiAuREMuUGFja2V0LlNDSEFSQUNURVJfVFJBREVfSU5GTyIdChtTQzJTX1RSQURFX0NIQU5ORUxfTElTVF9SRVEiXAobU1MyQ19UUkFERV9DSEFOTkVMX0xJU1RfUkVTEhAKCGlzVHJhZGVyGAEgASgNEisKCGNoYW5uZWxzGAIgAygLMhkuREMuUGFja2V0LlNUUkFERV9DSEFOTkVMIi4KHVNDMlNfVFJBREVfQ0hBTk5FTF9TRUxFQ1RfUkVREg0KBWluZGV4GAEgASgNIi8KHVNTMkNfVFJBREVfQ0hBTk5FTF9TRUxFQ1RfUkVTEg4KBnJlc3VsdBgBIAEoDSIdChtTQzJTX1RSQURFX0NIQU5ORUxfRVhJVF9SRVEiLQobU1MyQ19UUkFERV9DSEFOTkVMX0VYSVRfUkVTEg4KBnJlc3VsdBgBIAEoDSIiCiBTQzJTX1RSQURFX0NIQU5ORUxfVVNFUl9MSVNUX1JFUSJnCiBTUzJDX1RSQURFX0NIQU5ORUxfVVNFUl9MSVNUX1JFUxIQCghsb29wRmxhZxgBIAEoDRIxCgd0cmFkZXJzGAIgAygLMiAuREMuUGFja2V0LlNDSEFSQUNURVJfVFJBREVfSU5GTyJhCiJTUzJDX1RSQURFX0NIQU5ORUxfVVNFUl9VUERBVEVfTk9UEjsKB3VwZGF0ZXMYASADKAsyKi5EQy5QYWNrZXQuU1RSQURFX0NIQU5ORUxfVVNFUl9VUERBVEVfSU5GTyJHChtTQzJTX1RSQURFX0NIQU5ORUxfQ0hBVF9SRVESKAoEY2hhdBgBIAEoCzIaLkRDLlBhY2tldC5TVFJBREVfQ0hBVF9DMlMiWAobU1MyQ19UUkFERV9DSEFOTkVMX0NIQVRfUkVTEg4KBnJlc3VsdBgBIAEoDRIpCgVjaGF0cxgCIAMoCzIaLkRDLlBhY2tldC5TVFJBREVfQ0hBVF9TMkMiPAomU0MyU19UUkFERV9DSEFOTkVMX0NIQVRfVEVYVF9SQU5HRV9SRVESEgoKYmVnaW5JbmRleBgBIAEoDSJTCiZTUzJDX1RSQURFX0NIQU5ORUxfQ0hBVF9URVhUX1JBTkdFX1JFUxIpCgVjaGF0cxgBIAMoCzIaLkRDLlBhY2tldC5TVFJBREVfQ0hBVF9TMkMiJwolU0MyU19UUkFERV9NRU1CRVJTSElQX1JFUVVJUkVNRU5UX1JFUSJnCiVTUzJDX1RSQURFX01FTUJFUlNISVBfUkVRVUlSRU1FTlRfUkVTEj4KDHJlcXVpcmVtZW50cxgBIAMoCzIoLkRDLlBhY2tldC5TVFJBREVfTUVNQkVSU0hJUF9SRVFVSVJFTUVOVCI1ChlTQzJTX1RSQURFX01FTUJFUlNISVBfUkVREhgKEGJlY29tZVRyYWRlckZsYWcYASABKA0iKwoZU1MyQ19UUkFERV9NRU1CRVJTSElQX1JFUxIOCgZyZXN1bHQYASABKA0icAoWU0MyU19UUkFERV9SRVFVRVNUX1JFURIRCglhY2NvdW50SWQYASABKAkSLgoIbmlja05hbWUYAiABKAsyHC5EQy5QYWNrZXQuU0FDQ09VTlRfTklDS05BTUUSEwoLY2hhcmFjdGVySWQYAyABKAkiXwoWU1MyQ19UUkFERV9SRVFVRVNUX1JFUxIOCgZyZXN1bHQYASABKA0SNQoPcmVxdWVzdE5pY2tOYW1lGAIgASgLMhwuREMuUGFja2V0LlNBQ0NPVU5UX05JQ0tOQU1FIlsKFlNTMkNfVFJBREVfUkVRVUVTVF9OT1QSEQoJYWNjb3VudElkGAEgASgJEi4KCG5pY2tOYW1lGAIgASgLMhwuREMuUGFja2V0LlNBQ0NPVU5UX05JQ0tOQU1FIm4KFVNDMlNfVFJBREVfQU5TV0VSX1JFURIRCglhY2NvdW50SWQYASABKAkSLgoIbmlja05hbWUYAiABKAsyHC5EQy5QYWNrZXQuU0FDQ09VTlRfTklDS05BTUUSEgoKc2VsZWN0RmxhZxgDIAEoDSInChVTUzJDX1RSQURFX0FOU1dFUl9SRVMSDgoGcmVzdWx0GAEgASgNImIKHVNTMkNfVFJBREVfQU5TV0VSX1JFRlVTQUxfTk9UEhEKCWFjY291bnRJZBgBIAEoCRIuCghuaWNrTmFtZRgCIAEoCzIcLkRDLlBhY2tldC5TQUNDT1VOVF9OSUNLTkFNRSKgAQoWU1MyQ19UUkFESU5HX0JFR0lOX05PVBItCgZ0YXJnZXQYASABKAsyHS5EQy5QYWNrZXQuU1RSQURJTkdfVVNFUl9JTkZPEisKBG1pbmUYAiABKAsyHS5EQy5QYWNrZXQuU1RSQURJTkdfVVNFUl9JTkZPEhAKCHRyYWRlRmVlGAQgASgNEhgKEG1vdmVSZXNldFRpbWVTZWMYBSABKA0iGAoWU0MyU19UUkFESU5HX0NMT1NFX1JFUSIoChZTUzJDX1RSQURJTkdfQ0xPU0VfUkVTEg4KBnJlc3VsdBgBIAEoDSJBChVTQzJTX1RSQURJTkdfQ0hBVF9SRVESKAoEY2hhdBgBIAEoCzIaLkRDLlBhY2tldC5TVFJBREVfQ0hBVF9DMlMiUQoVU1MyQ19UUkFESU5HX0NIQVRfUkVTEg4KBnJlc3VsdBgBIAEoDRIoCgRjaGF0GAIgASgLMhouREMuUGFja2V0LlNUUkFERV9DSEFUX1MyQyJUChxTQzJTX1RSQURJTkdfSVRFTV9VUERBVEVfUkVREhIKCnVwZGF0ZUZsYWcYASABKA0SEAoIdW5pcXVlSWQYAiABKAQSDgoGc2xvdElkGAMgASgNIp8BChxTUzJDX1RSQURJTkdfSVRFTV9VUERBVEVfUkVTEg4KBnJlc3VsdBgBIAEoDRI1Cg51cGRhdGVVc2VySW5mbxgCIAEoCzIdLkRDLlBhY2tldC5TVFJBRElOR19VU0VSX0lORk8SEgoKdXBkYXRlRmxhZxgDIAEoDRIkCgp1cGRhdGVJdGVtGAQgASgLMhAuREMuUGFja2V0LlNJdGVtIikKFlNDMlNfVFJBRElOR19SRUFEWV9SRVESDwoHaXNSZWFkeRgBIAEoDSIoChZTUzJDX1RSQURJTkdfUkVBRFlfUkVTEg4KBnJlc3VsdBgBIAEoDSJfChZTUzJDX1RSQURJTkdfUkVBRFlfTk9UEjQKDXJlYWR5VXNlckluZm8YASABKAsyHS5EQy5QYWNrZXQuU1RSQURJTkdfVVNFUl9JTkZPEg8KB2lzUmVhZHkYAiABKA0ifAoYU1MyQ19UUkFESU5HX0NPTkZJUk1fTk9UEjAKBnRhcmdldBgBIAEoCzIgLkRDLlBhY2tldC5TVFJBRElOR19DT05GSVJNX0lURU0SLgoEbWluZRgCIAEoCzIgLkRDLlBhY2tldC5TVFJBRElOR19DT05GSVJNX0lURU0iMQoeU0MyU19UUkFESU5HX0NPTkZJUk1fUkVBRFlfUkVREg8KB2lzUmVhZHkYASABKA0iMAoeU1MyQ19UUkFESU5HX0NPTkZJUk1fUkVBRFlfUkVTEg4KBnJlc3VsdBgBIAEoDSJnCh5TUzJDX1RSQURJTkdfQ09ORklSTV9SRUFEWV9OT1QSNAoNcmVhZHlVc2VySW5mbxgBIAEoCzIdLkRDLlBhY2tldC5TVFJBRElOR19VU0VSX0lORk8SDwoHaXNSZWFkeRgCIAEoDSIhCh9TQzJTX1RSQURJTkdfQ09ORklSTV9DQU5DRUxfUkVRIjEKH1NTMkNfVFJBRElOR19DT05GSVJNX0NBTkNFTF9SRVMSDgoGcmVzdWx0GAEgASgNIikKF1NTMkNfVFJBRElOR19SRVNVTFRfTk9UEg4KBnJlc3VsdBgBIAEoDUIcChFjb20ucGFja2V0cy50cmFkZUIFdHJhZGVQAGIGcHJvdG8z", [file__Item, file__Character, file__Chat]);

/**
 * @generated from message DC.Packet.STRADE_CHANNEL
 */
export type STRADE_CHANNEL = Message<"DC.Packet.STRADE_CHANNEL"> & {
  /**
   * @generated from field: uint32 index = 1;
   */
  index: number;

  /**
   * @generated from field: string channelName = 2;
   */
  channelName: string;

  /**
   * @generated from field: uint32 memberCount = 3;
   */
  memberCount: number;

  /**
   * @generated from field: uint32 roomType = 4;
   */
  roomType: number;

  /**
   * @generated from field: uint32 groupIndex = 5;
   */
  groupIndex: number;
};

/**
 * Describes the message DC.Packet.STRADE_CHANNEL.
 * Use `create(STRADE_CHANNELSchema)` to create a new message.
 */
export const STRADE_CHANNELSchema: GenMessage<STRADE_CHANNEL> = /*@__PURE__*/
  messageDesc(file_Trade, 0);

/**
 * @generated from message DC.Packet.STRADE_CHAT_C2S
 */
export type STRADE_CHAT_C2S = Message<"DC.Packet.STRADE_CHAT_C2S"> & {
  /**
   * @generated from field: uint32 chatType = 1;
   */
  chatType: number;

  /**
   * @generated from field: string targetAccountId = 2;
   */
  targetAccountId: string;

  /**
   * @generated from field: string targetCharacterId = 3;
   */
  targetCharacterId: string;

  /**
   * @generated from field: DC.Packet.SCHATDATA chatData = 4;
   */
  chatData?: SCHATDATA;
};

/**
 * Describes the message DC.Packet.STRADE_CHAT_C2S.
 * Use `create(STRADE_CHAT_C2SSchema)` to create a new message.
 */
export const STRADE_CHAT_C2SSchema: GenMessage<STRADE_CHAT_C2S> = /*@__PURE__*/
  messageDesc(file_Trade, 1);

/**
 * @generated from message DC.Packet.STRADE_CHAT_S2C
 */
export type STRADE_CHAT_S2C = Message<"DC.Packet.STRADE_CHAT_S2C"> & {
  /**
   * @generated from field: uint64 index = 1;
   */
  index: bigint;

  /**
   * @generated from field: uint32 chatType = 2;
   */
  chatType: number;

  /**
   * @generated from field: uint64 time = 3;
   */
  time: bigint;

  /**
   * @generated from field: DC.Packet.SCHATDATA chatData = 4;
   */
  chatData?: SCHATDATA;
};

/**
 * Describes the message DC.Packet.STRADE_CHAT_S2C.
 * Use `create(STRADE_CHAT_S2CSchema)` to create a new message.
 */
export const STRADE_CHAT_S2CSchema: GenMessage<STRADE_CHAT_S2C> = /*@__PURE__*/
  messageDesc(file_Trade, 2);

/**
 * @generated from message DC.Packet.STRADE_MEMBERSHIP_REQUIREMENT
 */
export type STRADE_MEMBERSHIP_REQUIREMENT = Message<"DC.Packet.STRADE_MEMBERSHIP_REQUIREMENT"> & {
  /**
   * @generated from field: uint32 memberShipType = 1;
   */
  memberShipType: number;

  /**
   * @generated from field: uint32 memberShipValue = 2;
   */
  memberShipValue: number;
};

/**
 * Describes the message DC.Packet.STRADE_MEMBERSHIP_REQUIREMENT.
 * Use `create(STRADE_MEMBERSHIP_REQUIREMENTSchema)` to create a new message.
 */
export const STRADE_MEMBERSHIP_REQUIREMENTSchema: GenMessage<STRADE_MEMBERSHIP_REQUIREMENT> = /*@__PURE__*/
  messageDesc(file_Trade, 3);

/**
 * @generated from message DC.Packet.STRADING_USER_INFO
 */
export type STRADING_USER_INFO = Message<"DC.Packet.STRADING_USER_INFO"> & {
  /**
   * @generated from field: DC.Packet.SACCOUNT_NICKNAME nickName = 1;
   */
  nickName?: SACCOUNT_NICKNAME;

  /**
   * @generated from field: string accountId = 2;
   */
  accountId: string;
};

/**
 * Describes the message DC.Packet.STRADING_USER_INFO.
 * Use `create(STRADING_USER_INFOSchema)` to create a new message.
 */
export const STRADING_USER_INFOSchema: GenMessage<STRADING_USER_INFO> = /*@__PURE__*/
  messageDesc(file_Trade, 4);

/**
 * @generated from message DC.Packet.STRADING_CONFIRM_ITEM
 */
export type STRADING_CONFIRM_ITEM = Message<"DC.Packet.STRADING_CONFIRM_ITEM"> & {
  /**
   * @generated from field: DC.Packet.STRADING_USER_INFO info = 1;
   */
  info?: STRADING_USER_INFO;

  /**
   * @generated from field: repeated DC.Packet.SItem items = 2;
   */
  items: SItem[];
};

/**
 * Describes the message DC.Packet.STRADING_CONFIRM_ITEM.
 * Use `create(STRADING_CONFIRM_ITEMSchema)` to create a new message.
 */
export const STRADING_CONFIRM_ITEMSchema: GenMessage<STRADING_CONFIRM_ITEM> = /*@__PURE__*/
  messageDesc(file_Trade, 5);

/**
 * @generated from message DC.Packet.STRADE_CHANNEL_USER_UPDATE_INFO
 */
export type STRADE_CHANNEL_USER_UPDATE_INFO = Message<"DC.Packet.STRADE_CHANNEL_USER_UPDATE_INFO"> & {
  /**
   * @generated from field: uint32 updateFlag = 1;
   */
  updateFlag: number;

  /**
   * @generated from field: DC.Packet.SCHARACTER_TRADE_INFO trader = 2;
   */
  trader?: SCHARACTER_TRADE_INFO;
};

/**
 * Describes the message DC.Packet.STRADE_CHANNEL_USER_UPDATE_INFO.
 * Use `create(STRADE_CHANNEL_USER_UPDATE_INFOSchema)` to create a new message.
 */
export const STRADE_CHANNEL_USER_UPDATE_INFOSchema: GenMessage<STRADE_CHANNEL_USER_UPDATE_INFO> = /*@__PURE__*/
  messageDesc(file_Trade, 6);

/**
 * @generated from message DC.Packet.SC2S_TRADE_CHANNEL_LIST_REQ
 */
export type SC2S_TRADE_CHANNEL_LIST_REQ = Message<"DC.Packet.SC2S_TRADE_CHANNEL_LIST_REQ"> & {
};

/**
 * Describes the message DC.Packet.SC2S_TRADE_CHANNEL_LIST_REQ.
 * Use `create(SC2S_TRADE_CHANNEL_LIST_REQSchema)` to create a new message.
 */
export const SC2S_TRADE_CHANNEL_LIST_REQSchema: GenMessage<SC2S_TRADE_CHANNEL_LIST_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 7);

/**
 * @generated from message DC.Packet.SS2C_TRADE_CHANNEL_LIST_RES
 */
export type SS2C_TRADE_CHANNEL_LIST_RES = Message<"DC.Packet.SS2C_TRADE_CHANNEL_LIST_RES"> & {
  /**
   * @generated from field: uint32 isTrader = 1;
   */
  isTrader: number;

  /**
   * @generated from field: repeated DC.Packet.STRADE_CHANNEL channels = 2;
   */
  channels: STRADE_CHANNEL[];
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_CHANNEL_LIST_RES.
 * Use `create(SS2C_TRADE_CHANNEL_LIST_RESSchema)` to create a new message.
 */
export const SS2C_TRADE_CHANNEL_LIST_RESSchema: GenMessage<SS2C_TRADE_CHANNEL_LIST_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 8);

/**
 * @generated from message DC.Packet.SC2S_TRADE_CHANNEL_SELECT_REQ
 */
export type SC2S_TRADE_CHANNEL_SELECT_REQ = Message<"DC.Packet.SC2S_TRADE_CHANNEL_SELECT_REQ"> & {
  /**
   * @generated from field: uint32 index = 1;
   */
  index: number;
};

/**
 * Describes the message DC.Packet.SC2S_TRADE_CHANNEL_SELECT_REQ.
 * Use `create(SC2S_TRADE_CHANNEL_SELECT_REQSchema)` to create a new message.
 */
export const SC2S_TRADE_CHANNEL_SELECT_REQSchema: GenMessage<SC2S_TRADE_CHANNEL_SELECT_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 9);

/**
 * @generated from message DC.Packet.SS2C_TRADE_CHANNEL_SELECT_RES
 */
export type SS2C_TRADE_CHANNEL_SELECT_RES = Message<"DC.Packet.SS2C_TRADE_CHANNEL_SELECT_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_CHANNEL_SELECT_RES.
 * Use `create(SS2C_TRADE_CHANNEL_SELECT_RESSchema)` to create a new message.
 */
export const SS2C_TRADE_CHANNEL_SELECT_RESSchema: GenMessage<SS2C_TRADE_CHANNEL_SELECT_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 10);

/**
 * @generated from message DC.Packet.SC2S_TRADE_CHANNEL_EXIT_REQ
 */
export type SC2S_TRADE_CHANNEL_EXIT_REQ = Message<"DC.Packet.SC2S_TRADE_CHANNEL_EXIT_REQ"> & {
};

/**
 * Describes the message DC.Packet.SC2S_TRADE_CHANNEL_EXIT_REQ.
 * Use `create(SC2S_TRADE_CHANNEL_EXIT_REQSchema)` to create a new message.
 */
export const SC2S_TRADE_CHANNEL_EXIT_REQSchema: GenMessage<SC2S_TRADE_CHANNEL_EXIT_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 11);

/**
 * @generated from message DC.Packet.SS2C_TRADE_CHANNEL_EXIT_RES
 */
export type SS2C_TRADE_CHANNEL_EXIT_RES = Message<"DC.Packet.SS2C_TRADE_CHANNEL_EXIT_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_CHANNEL_EXIT_RES.
 * Use `create(SS2C_TRADE_CHANNEL_EXIT_RESSchema)` to create a new message.
 */
export const SS2C_TRADE_CHANNEL_EXIT_RESSchema: GenMessage<SS2C_TRADE_CHANNEL_EXIT_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 12);

/**
 * @generated from message DC.Packet.SC2S_TRADE_CHANNEL_USER_LIST_REQ
 */
export type SC2S_TRADE_CHANNEL_USER_LIST_REQ = Message<"DC.Packet.SC2S_TRADE_CHANNEL_USER_LIST_REQ"> & {
};

/**
 * Describes the message DC.Packet.SC2S_TRADE_CHANNEL_USER_LIST_REQ.
 * Use `create(SC2S_TRADE_CHANNEL_USER_LIST_REQSchema)` to create a new message.
 */
export const SC2S_TRADE_CHANNEL_USER_LIST_REQSchema: GenMessage<SC2S_TRADE_CHANNEL_USER_LIST_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 13);

/**
 * @generated from message DC.Packet.SS2C_TRADE_CHANNEL_USER_LIST_RES
 */
export type SS2C_TRADE_CHANNEL_USER_LIST_RES = Message<"DC.Packet.SS2C_TRADE_CHANNEL_USER_LIST_RES"> & {
  /**
   * @generated from field: uint32 loopFlag = 1;
   */
  loopFlag: number;

  /**
   * @generated from field: repeated DC.Packet.SCHARACTER_TRADE_INFO traders = 2;
   */
  traders: SCHARACTER_TRADE_INFO[];
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_CHANNEL_USER_LIST_RES.
 * Use `create(SS2C_TRADE_CHANNEL_USER_LIST_RESSchema)` to create a new message.
 */
export const SS2C_TRADE_CHANNEL_USER_LIST_RESSchema: GenMessage<SS2C_TRADE_CHANNEL_USER_LIST_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 14);

/**
 * @generated from message DC.Packet.SS2C_TRADE_CHANNEL_USER_UPDATE_NOT
 */
export type SS2C_TRADE_CHANNEL_USER_UPDATE_NOT = Message<"DC.Packet.SS2C_TRADE_CHANNEL_USER_UPDATE_NOT"> & {
  /**
   * @generated from field: repeated DC.Packet.STRADE_CHANNEL_USER_UPDATE_INFO updates = 1;
   */
  updates: STRADE_CHANNEL_USER_UPDATE_INFO[];
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_CHANNEL_USER_UPDATE_NOT.
 * Use `create(SS2C_TRADE_CHANNEL_USER_UPDATE_NOTSchema)` to create a new message.
 */
export const SS2C_TRADE_CHANNEL_USER_UPDATE_NOTSchema: GenMessage<SS2C_TRADE_CHANNEL_USER_UPDATE_NOT> = /*@__PURE__*/
  messageDesc(file_Trade, 15);

/**
 * @generated from message DC.Packet.SC2S_TRADE_CHANNEL_CHAT_REQ
 */
export type SC2S_TRADE_CHANNEL_CHAT_REQ = Message<"DC.Packet.SC2S_TRADE_CHANNEL_CHAT_REQ"> & {
  /**
   * @generated from field: DC.Packet.STRADE_CHAT_C2S chat = 1;
   */
  chat?: STRADE_CHAT_C2S;
};

/**
 * Describes the message DC.Packet.SC2S_TRADE_CHANNEL_CHAT_REQ.
 * Use `create(SC2S_TRADE_CHANNEL_CHAT_REQSchema)` to create a new message.
 */
export const SC2S_TRADE_CHANNEL_CHAT_REQSchema: GenMessage<SC2S_TRADE_CHANNEL_CHAT_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 16);

/**
 * @generated from message DC.Packet.SS2C_TRADE_CHANNEL_CHAT_RES
 */
export type SS2C_TRADE_CHANNEL_CHAT_RES = Message<"DC.Packet.SS2C_TRADE_CHANNEL_CHAT_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;

  /**
   * @generated from field: repeated DC.Packet.STRADE_CHAT_S2C chats = 2;
   */
  chats: STRADE_CHAT_S2C[];
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_CHANNEL_CHAT_RES.
 * Use `create(SS2C_TRADE_CHANNEL_CHAT_RESSchema)` to create a new message.
 */
export const SS2C_TRADE_CHANNEL_CHAT_RESSchema: GenMessage<SS2C_TRADE_CHANNEL_CHAT_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 17);

/**
 * @generated from message DC.Packet.SC2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ
 */
export type SC2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ = Message<"DC.Packet.SC2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ"> & {
  /**
   * @generated from field: uint32 beginIndex = 1;
   */
  beginIndex: number;
};

/**
 * Describes the message DC.Packet.SC2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ.
 * Use `create(SC2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQSchema)` to create a new message.
 */
export const SC2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQSchema: GenMessage<SC2S_TRADE_CHANNEL_CHAT_TEXT_RANGE_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 18);

/**
 * @generated from message DC.Packet.SS2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES
 */
export type SS2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES = Message<"DC.Packet.SS2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES"> & {
  /**
   * @generated from field: repeated DC.Packet.STRADE_CHAT_S2C chats = 1;
   */
  chats: STRADE_CHAT_S2C[];
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES.
 * Use `create(SS2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RESSchema)` to create a new message.
 */
export const SS2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RESSchema: GenMessage<SS2C_TRADE_CHANNEL_CHAT_TEXT_RANGE_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 19);

/**
 * @generated from message DC.Packet.SC2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ
 */
export type SC2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ = Message<"DC.Packet.SC2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ"> & {
};

/**
 * Describes the message DC.Packet.SC2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ.
 * Use `create(SC2S_TRADE_MEMBERSHIP_REQUIREMENT_REQSchema)` to create a new message.
 */
export const SC2S_TRADE_MEMBERSHIP_REQUIREMENT_REQSchema: GenMessage<SC2S_TRADE_MEMBERSHIP_REQUIREMENT_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 20);

/**
 * @generated from message DC.Packet.SS2C_TRADE_MEMBERSHIP_REQUIREMENT_RES
 */
export type SS2C_TRADE_MEMBERSHIP_REQUIREMENT_RES = Message<"DC.Packet.SS2C_TRADE_MEMBERSHIP_REQUIREMENT_RES"> & {
  /**
   * @generated from field: repeated DC.Packet.STRADE_MEMBERSHIP_REQUIREMENT requirements = 1;
   */
  requirements: STRADE_MEMBERSHIP_REQUIREMENT[];
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_MEMBERSHIP_REQUIREMENT_RES.
 * Use `create(SS2C_TRADE_MEMBERSHIP_REQUIREMENT_RESSchema)` to create a new message.
 */
export const SS2C_TRADE_MEMBERSHIP_REQUIREMENT_RESSchema: GenMessage<SS2C_TRADE_MEMBERSHIP_REQUIREMENT_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 21);

/**
 * @generated from message DC.Packet.SC2S_TRADE_MEMBERSHIP_REQ
 */
export type SC2S_TRADE_MEMBERSHIP_REQ = Message<"DC.Packet.SC2S_TRADE_MEMBERSHIP_REQ"> & {
  /**
   * @generated from field: uint32 becomeTraderFlag = 1;
   */
  becomeTraderFlag: number;
};

/**
 * Describes the message DC.Packet.SC2S_TRADE_MEMBERSHIP_REQ.
 * Use `create(SC2S_TRADE_MEMBERSHIP_REQSchema)` to create a new message.
 */
export const SC2S_TRADE_MEMBERSHIP_REQSchema: GenMessage<SC2S_TRADE_MEMBERSHIP_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 22);

/**
 * @generated from message DC.Packet.SS2C_TRADE_MEMBERSHIP_RES
 */
export type SS2C_TRADE_MEMBERSHIP_RES = Message<"DC.Packet.SS2C_TRADE_MEMBERSHIP_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_MEMBERSHIP_RES.
 * Use `create(SS2C_TRADE_MEMBERSHIP_RESSchema)` to create a new message.
 */
export const SS2C_TRADE_MEMBERSHIP_RESSchema: GenMessage<SS2C_TRADE_MEMBERSHIP_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 23);

/**
 * @generated from message DC.Packet.SC2S_TRADE_REQUEST_REQ
 */
export type SC2S_TRADE_REQUEST_REQ = Message<"DC.Packet.SC2S_TRADE_REQUEST_REQ"> & {
  /**
   * @generated from field: string accountId = 1;
   */
  accountId: string;

  /**
   * @generated from field: DC.Packet.SACCOUNT_NICKNAME nickName = 2;
   */
  nickName?: SACCOUNT_NICKNAME;

  /**
   * @generated from field: string characterId = 3;
   */
  characterId: string;
};

/**
 * Describes the message DC.Packet.SC2S_TRADE_REQUEST_REQ.
 * Use `create(SC2S_TRADE_REQUEST_REQSchema)` to create a new message.
 */
export const SC2S_TRADE_REQUEST_REQSchema: GenMessage<SC2S_TRADE_REQUEST_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 24);

/**
 * @generated from message DC.Packet.SS2C_TRADE_REQUEST_RES
 */
export type SS2C_TRADE_REQUEST_RES = Message<"DC.Packet.SS2C_TRADE_REQUEST_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;

  /**
   * @generated from field: DC.Packet.SACCOUNT_NICKNAME requestNickName = 2;
   */
  requestNickName?: SACCOUNT_NICKNAME;
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_REQUEST_RES.
 * Use `create(SS2C_TRADE_REQUEST_RESSchema)` to create a new message.
 */
export const SS2C_TRADE_REQUEST_RESSchema: GenMessage<SS2C_TRADE_REQUEST_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 25);

/**
 * @generated from message DC.Packet.SS2C_TRADE_REQUEST_NOT
 */
export type SS2C_TRADE_REQUEST_NOT = Message<"DC.Packet.SS2C_TRADE_REQUEST_NOT"> & {
  /**
   * @generated from field: string accountId = 1;
   */
  accountId: string;

  /**
   * @generated from field: DC.Packet.SACCOUNT_NICKNAME nickName = 2;
   */
  nickName?: SACCOUNT_NICKNAME;
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_REQUEST_NOT.
 * Use `create(SS2C_TRADE_REQUEST_NOTSchema)` to create a new message.
 */
export const SS2C_TRADE_REQUEST_NOTSchema: GenMessage<SS2C_TRADE_REQUEST_NOT> = /*@__PURE__*/
  messageDesc(file_Trade, 26);

/**
 * @generated from message DC.Packet.SC2S_TRADE_ANSWER_REQ
 */
export type SC2S_TRADE_ANSWER_REQ = Message<"DC.Packet.SC2S_TRADE_ANSWER_REQ"> & {
  /**
   * @generated from field: string accountId = 1;
   */
  accountId: string;

  /**
   * @generated from field: DC.Packet.SACCOUNT_NICKNAME nickName = 2;
   */
  nickName?: SACCOUNT_NICKNAME;

  /**
   * @generated from field: uint32 selectFlag = 3;
   */
  selectFlag: number;
};

/**
 * Describes the message DC.Packet.SC2S_TRADE_ANSWER_REQ.
 * Use `create(SC2S_TRADE_ANSWER_REQSchema)` to create a new message.
 */
export const SC2S_TRADE_ANSWER_REQSchema: GenMessage<SC2S_TRADE_ANSWER_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 27);

/**
 * @generated from message DC.Packet.SS2C_TRADE_ANSWER_RES
 */
export type SS2C_TRADE_ANSWER_RES = Message<"DC.Packet.SS2C_TRADE_ANSWER_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_ANSWER_RES.
 * Use `create(SS2C_TRADE_ANSWER_RESSchema)` to create a new message.
 */
export const SS2C_TRADE_ANSWER_RESSchema: GenMessage<SS2C_TRADE_ANSWER_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 28);

/**
 * @generated from message DC.Packet.SS2C_TRADE_ANSWER_REFUSAL_NOT
 */
export type SS2C_TRADE_ANSWER_REFUSAL_NOT = Message<"DC.Packet.SS2C_TRADE_ANSWER_REFUSAL_NOT"> & {
  /**
   * @generated from field: string accountId = 1;
   */
  accountId: string;

  /**
   * @generated from field: DC.Packet.SACCOUNT_NICKNAME nickName = 2;
   */
  nickName?: SACCOUNT_NICKNAME;
};

/**
 * Describes the message DC.Packet.SS2C_TRADE_ANSWER_REFUSAL_NOT.
 * Use `create(SS2C_TRADE_ANSWER_REFUSAL_NOTSchema)` to create a new message.
 */
export const SS2C_TRADE_ANSWER_REFUSAL_NOTSchema: GenMessage<SS2C_TRADE_ANSWER_REFUSAL_NOT> = /*@__PURE__*/
  messageDesc(file_Trade, 29);

/**
 * @generated from message DC.Packet.SS2C_TRADING_BEGIN_NOT
 */
export type SS2C_TRADING_BEGIN_NOT = Message<"DC.Packet.SS2C_TRADING_BEGIN_NOT"> & {
  /**
   * @generated from field: DC.Packet.STRADING_USER_INFO target = 1;
   */
  target?: STRADING_USER_INFO;

  /**
   * @generated from field: DC.Packet.STRADING_USER_INFO mine = 2;
   */
  mine?: STRADING_USER_INFO;

  /**
   * @generated from field: uint32 tradeFee = 4;
   */
  tradeFee: number;

  /**
   * @generated from field: uint32 moveResetTimeSec = 5;
   */
  moveResetTimeSec: number;
};

/**
 * Describes the message DC.Packet.SS2C_TRADING_BEGIN_NOT.
 * Use `create(SS2C_TRADING_BEGIN_NOTSchema)` to create a new message.
 */
export const SS2C_TRADING_BEGIN_NOTSchema: GenMessage<SS2C_TRADING_BEGIN_NOT> = /*@__PURE__*/
  messageDesc(file_Trade, 30);

/**
 * @generated from message DC.Packet.SC2S_TRADING_CLOSE_REQ
 */
export type SC2S_TRADING_CLOSE_REQ = Message<"DC.Packet.SC2S_TRADING_CLOSE_REQ"> & {
};

/**
 * Describes the message DC.Packet.SC2S_TRADING_CLOSE_REQ.
 * Use `create(SC2S_TRADING_CLOSE_REQSchema)` to create a new message.
 */
export const SC2S_TRADING_CLOSE_REQSchema: GenMessage<SC2S_TRADING_CLOSE_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 31);

/**
 * @generated from message DC.Packet.SS2C_TRADING_CLOSE_RES
 */
export type SS2C_TRADING_CLOSE_RES = Message<"DC.Packet.SS2C_TRADING_CLOSE_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_TRADING_CLOSE_RES.
 * Use `create(SS2C_TRADING_CLOSE_RESSchema)` to create a new message.
 */
export const SS2C_TRADING_CLOSE_RESSchema: GenMessage<SS2C_TRADING_CLOSE_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 32);

/**
 * @generated from message DC.Packet.SC2S_TRADING_CHAT_REQ
 */
export type SC2S_TRADING_CHAT_REQ = Message<"DC.Packet.SC2S_TRADING_CHAT_REQ"> & {
  /**
   * @generated from field: DC.Packet.STRADE_CHAT_C2S chat = 1;
   */
  chat?: STRADE_CHAT_C2S;
};

/**
 * Describes the message DC.Packet.SC2S_TRADING_CHAT_REQ.
 * Use `create(SC2S_TRADING_CHAT_REQSchema)` to create a new message.
 */
export const SC2S_TRADING_CHAT_REQSchema: GenMessage<SC2S_TRADING_CHAT_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 33);

/**
 * @generated from message DC.Packet.SS2C_TRADING_CHAT_RES
 */
export type SS2C_TRADING_CHAT_RES = Message<"DC.Packet.SS2C_TRADING_CHAT_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;

  /**
   * @generated from field: DC.Packet.STRADE_CHAT_S2C chat = 2;
   */
  chat?: STRADE_CHAT_S2C;
};

/**
 * Describes the message DC.Packet.SS2C_TRADING_CHAT_RES.
 * Use `create(SS2C_TRADING_CHAT_RESSchema)` to create a new message.
 */
export const SS2C_TRADING_CHAT_RESSchema: GenMessage<SS2C_TRADING_CHAT_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 34);

/**
 * @generated from message DC.Packet.SC2S_TRADING_ITEM_UPDATE_REQ
 */
export type SC2S_TRADING_ITEM_UPDATE_REQ = Message<"DC.Packet.SC2S_TRADING_ITEM_UPDATE_REQ"> & {
  /**
   * @generated from field: uint32 updateFlag = 1;
   */
  updateFlag: number;

  /**
   * @generated from field: uint64 uniqueId = 2;
   */
  uniqueId: bigint;

  /**
   * @generated from field: uint32 slotId = 3;
   */
  slotId: number;
};

/**
 * Describes the message DC.Packet.SC2S_TRADING_ITEM_UPDATE_REQ.
 * Use `create(SC2S_TRADING_ITEM_UPDATE_REQSchema)` to create a new message.
 */
export const SC2S_TRADING_ITEM_UPDATE_REQSchema: GenMessage<SC2S_TRADING_ITEM_UPDATE_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 35);

/**
 * @generated from message DC.Packet.SS2C_TRADING_ITEM_UPDATE_RES
 */
export type SS2C_TRADING_ITEM_UPDATE_RES = Message<"DC.Packet.SS2C_TRADING_ITEM_UPDATE_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;

  /**
   * @generated from field: DC.Packet.STRADING_USER_INFO updateUserInfo = 2;
   */
  updateUserInfo?: STRADING_USER_INFO;

  /**
   * @generated from field: uint32 updateFlag = 3;
   */
  updateFlag: number;

  /**
   * @generated from field: DC.Packet.SItem updateItem = 4;
   */
  updateItem?: SItem;
};

/**
 * Describes the message DC.Packet.SS2C_TRADING_ITEM_UPDATE_RES.
 * Use `create(SS2C_TRADING_ITEM_UPDATE_RESSchema)` to create a new message.
 */
export const SS2C_TRADING_ITEM_UPDATE_RESSchema: GenMessage<SS2C_TRADING_ITEM_UPDATE_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 36);

/**
 * @generated from message DC.Packet.SC2S_TRADING_READY_REQ
 */
export type SC2S_TRADING_READY_REQ = Message<"DC.Packet.SC2S_TRADING_READY_REQ"> & {
  /**
   * @generated from field: uint32 isReady = 1;
   */
  isReady: number;
};

/**
 * Describes the message DC.Packet.SC2S_TRADING_READY_REQ.
 * Use `create(SC2S_TRADING_READY_REQSchema)` to create a new message.
 */
export const SC2S_TRADING_READY_REQSchema: GenMessage<SC2S_TRADING_READY_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 37);

/**
 * @generated from message DC.Packet.SS2C_TRADING_READY_RES
 */
export type SS2C_TRADING_READY_RES = Message<"DC.Packet.SS2C_TRADING_READY_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_TRADING_READY_RES.
 * Use `create(SS2C_TRADING_READY_RESSchema)` to create a new message.
 */
export const SS2C_TRADING_READY_RESSchema: GenMessage<SS2C_TRADING_READY_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 38);

/**
 * @generated from message DC.Packet.SS2C_TRADING_READY_NOT
 */
export type SS2C_TRADING_READY_NOT = Message<"DC.Packet.SS2C_TRADING_READY_NOT"> & {
  /**
   * @generated from field: DC.Packet.STRADING_USER_INFO readyUserInfo = 1;
   */
  readyUserInfo?: STRADING_USER_INFO;

  /**
   * @generated from field: uint32 isReady = 2;
   */
  isReady: number;
};

/**
 * Describes the message DC.Packet.SS2C_TRADING_READY_NOT.
 * Use `create(SS2C_TRADING_READY_NOTSchema)` to create a new message.
 */
export const SS2C_TRADING_READY_NOTSchema: GenMessage<SS2C_TRADING_READY_NOT> = /*@__PURE__*/
  messageDesc(file_Trade, 39);

/**
 * @generated from message DC.Packet.SS2C_TRADING_CONFIRM_NOT
 */
export type SS2C_TRADING_CONFIRM_NOT = Message<"DC.Packet.SS2C_TRADING_CONFIRM_NOT"> & {
  /**
   * @generated from field: DC.Packet.STRADING_CONFIRM_ITEM target = 1;
   */
  target?: STRADING_CONFIRM_ITEM;

  /**
   * @generated from field: DC.Packet.STRADING_CONFIRM_ITEM mine = 2;
   */
  mine?: STRADING_CONFIRM_ITEM;
};

/**
 * Describes the message DC.Packet.SS2C_TRADING_CONFIRM_NOT.
 * Use `create(SS2C_TRADING_CONFIRM_NOTSchema)` to create a new message.
 */
export const SS2C_TRADING_CONFIRM_NOTSchema: GenMessage<SS2C_TRADING_CONFIRM_NOT> = /*@__PURE__*/
  messageDesc(file_Trade, 40);

/**
 * @generated from message DC.Packet.SC2S_TRADING_CONFIRM_READY_REQ
 */
export type SC2S_TRADING_CONFIRM_READY_REQ = Message<"DC.Packet.SC2S_TRADING_CONFIRM_READY_REQ"> & {
  /**
   * @generated from field: uint32 isReady = 1;
   */
  isReady: number;
};

/**
 * Describes the message DC.Packet.SC2S_TRADING_CONFIRM_READY_REQ.
 * Use `create(SC2S_TRADING_CONFIRM_READY_REQSchema)` to create a new message.
 */
export const SC2S_TRADING_CONFIRM_READY_REQSchema: GenMessage<SC2S_TRADING_CONFIRM_READY_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 41);

/**
 * @generated from message DC.Packet.SS2C_TRADING_CONFIRM_READY_RES
 */
export type SS2C_TRADING_CONFIRM_READY_RES = Message<"DC.Packet.SS2C_TRADING_CONFIRM_READY_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_TRADING_CONFIRM_READY_RES.
 * Use `create(SS2C_TRADING_CONFIRM_READY_RESSchema)` to create a new message.
 */
export const SS2C_TRADING_CONFIRM_READY_RESSchema: GenMessage<SS2C_TRADING_CONFIRM_READY_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 42);

/**
 * @generated from message DC.Packet.SS2C_TRADING_CONFIRM_READY_NOT
 */
export type SS2C_TRADING_CONFIRM_READY_NOT = Message<"DC.Packet.SS2C_TRADING_CONFIRM_READY_NOT"> & {
  /**
   * @generated from field: DC.Packet.STRADING_USER_INFO readyUserInfo = 1;
   */
  readyUserInfo?: STRADING_USER_INFO;

  /**
   * @generated from field: uint32 isReady = 2;
   */
  isReady: number;
};

/**
 * Describes the message DC.Packet.SS2C_TRADING_CONFIRM_READY_NOT.
 * Use `create(SS2C_TRADING_CONFIRM_READY_NOTSchema)` to create a new message.
 */
export const SS2C_TRADING_CONFIRM_READY_NOTSchema: GenMessage<SS2C_TRADING_CONFIRM_READY_NOT> = /*@__PURE__*/
  messageDesc(file_Trade, 43);

/**
 * @generated from message DC.Packet.SC2S_TRADING_CONFIRM_CANCEL_REQ
 */
export type SC2S_TRADING_CONFIRM_CANCEL_REQ = Message<"DC.Packet.SC2S_TRADING_CONFIRM_CANCEL_REQ"> & {
};

/**
 * Describes the message DC.Packet.SC2S_TRADING_CONFIRM_CANCEL_REQ.
 * Use `create(SC2S_TRADING_CONFIRM_CANCEL_REQSchema)` to create a new message.
 */
export const SC2S_TRADING_CONFIRM_CANCEL_REQSchema: GenMessage<SC2S_TRADING_CONFIRM_CANCEL_REQ> = /*@__PURE__*/
  messageDesc(file_Trade, 44);

/**
 * @generated from message DC.Packet.SS2C_TRADING_CONFIRM_CANCEL_RES
 */
export type SS2C_TRADING_CONFIRM_CANCEL_RES = Message<"DC.Packet.SS2C_TRADING_CONFIRM_CANCEL_RES"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_TRADING_CONFIRM_CANCEL_RES.
 * Use `create(SS2C_TRADING_CONFIRM_CANCEL_RESSchema)` to create a new message.
 */
export const SS2C_TRADING_CONFIRM_CANCEL_RESSchema: GenMessage<SS2C_TRADING_CONFIRM_CANCEL_RES> = /*@__PURE__*/
  messageDesc(file_Trade, 45);

/**
 * @generated from message DC.Packet.SS2C_TRADING_RESULT_NOT
 */
export type SS2C_TRADING_RESULT_NOT = Message<"DC.Packet.SS2C_TRADING_RESULT_NOT"> & {
  /**
   * @generated from field: uint32 result = 1;
   */
  result: number;
};

/**
 * Describes the message DC.Packet.SS2C_TRADING_RESULT_NOT.
 * Use `create(SS2C_TRADING_RESULT_NOTSchema)` to create a new message.
 */
export const SS2C_TRADING_RESULT_NOTSchema: GenMessage<SS2C_TRADING_RESULT_NOT> = /*@__PURE__*/
  messageDesc(file_Trade, 46);

