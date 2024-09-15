// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file _Chat.proto (package DC.Packet, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { SACCOUNT_NICKNAME } from "./_Character_pb";
import { file__Character } from "./_Character_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file _Chat.proto.
 */
export const file__Chat: GenFile = /*@__PURE__*/
  fileDesc("CgtfQ2hhdC5wcm90bxIJREMuUGFja2V0IjgKHVNDSEFUREFUQV9QSUVDRV9JVEVNX1BST1BFUlRZEgsKA3BpZBgBIAEoCRIKCgJwdhgCIAEoBSKcAQoUU0NIQVREQVRBX1BJRUNFX0lURU0SCwoDdWlkGAEgASgEEgsKA2lpZBgCIAEoCRI0CgJwcBgDIAMoCzIoLkRDLlBhY2tldC5TQ0hBVERBVEFfUElFQ0VfSVRFTV9QUk9QRVJUWRI0CgJzcBgEIAMoCzIoLkRDLlBhY2tldC5TQ0hBVERBVEFfUElFQ0VfSVRFTV9QUk9QRVJUWSJeCg9TQ0hBVERBVEFfUElFQ0USDwoHY2hhdFN0chgBIAEoCRI6ChFjaGF0RGF0YVBpZWNlSXRlbRgCIAEoCzIfLkRDLlBhY2tldC5TQ0hBVERBVEFfUElFQ0VfSVRFTSKsAQoJU0NIQVREQVRBEhEKCWFjY291bnRJZBgBIAEoCRITCgtjaGFyYWN0ZXJJZBgCIAEoCRIuCghuaWNrbmFtZRgDIAEoCzIcLkRDLlBhY2tldC5TQUNDT1VOVF9OSUNLTkFNRRIPCgdwYXJ0eUlkGAQgASgJEjYKEmNoYXREYXRhUGllY2VBcnJheRgFIAMoCzIaLkRDLlBhY2tldC5TQ0hBVERBVEFfUElFQ0UiUAoQU1BJRUNFX0lURU1fQk9EWRILCgNpZHgYASABKA0SLwoGcGllY2VzGAIgASgLMh8uREMuUGFja2V0LlNDSEFUREFUQV9QSUVDRV9JVEVNIj8KEVNQSUVDRV9JVEVNX0FSUkFZEioKBWxpbmtzGAEgAygLMhsuREMuUGFja2V0LlNQSUVDRV9JVEVNX0JPRFlCGgoQY29tLnBhY2tldHMuY2hhdEIEY2hhdFAAYgZwcm90bzM", [file__Character]);

/**
 * @generated from message DC.Packet.SCHATDATA_PIECE_ITEM_PROPERTY
 */
export type SCHATDATA_PIECE_ITEM_PROPERTY = Message<"DC.Packet.SCHATDATA_PIECE_ITEM_PROPERTY"> & {
  /**
   * @generated from field: string pid = 1;
   */
  pid: string;

  /**
   * @generated from field: int32 pv = 2;
   */
  pv: number;
};

/**
 * Describes the message DC.Packet.SCHATDATA_PIECE_ITEM_PROPERTY.
 * Use `create(SCHATDATA_PIECE_ITEM_PROPERTYSchema)` to create a new message.
 */
export const SCHATDATA_PIECE_ITEM_PROPERTYSchema: GenMessage<SCHATDATA_PIECE_ITEM_PROPERTY> = /*@__PURE__*/
  messageDesc(file__Chat, 0);

/**
 * @generated from message DC.Packet.SCHATDATA_PIECE_ITEM
 */
export type SCHATDATA_PIECE_ITEM = Message<"DC.Packet.SCHATDATA_PIECE_ITEM"> & {
  /**
   * @generated from field: uint64 uid = 1;
   */
  uid: bigint;

  /**
   * @generated from field: string iid = 2;
   */
  iid: string;

  /**
   * @generated from field: repeated DC.Packet.SCHATDATA_PIECE_ITEM_PROPERTY pp = 3;
   */
  pp: SCHATDATA_PIECE_ITEM_PROPERTY[];

  /**
   * @generated from field: repeated DC.Packet.SCHATDATA_PIECE_ITEM_PROPERTY sp = 4;
   */
  sp: SCHATDATA_PIECE_ITEM_PROPERTY[];
};

/**
 * Describes the message DC.Packet.SCHATDATA_PIECE_ITEM.
 * Use `create(SCHATDATA_PIECE_ITEMSchema)` to create a new message.
 */
export const SCHATDATA_PIECE_ITEMSchema: GenMessage<SCHATDATA_PIECE_ITEM> = /*@__PURE__*/
  messageDesc(file__Chat, 1);

/**
 * @generated from message DC.Packet.SCHATDATA_PIECE
 */
export type SCHATDATA_PIECE = Message<"DC.Packet.SCHATDATA_PIECE"> & {
  /**
   * @generated from field: string chatStr = 1;
   */
  chatStr: string;

  /**
   * @generated from field: DC.Packet.SCHATDATA_PIECE_ITEM chatDataPieceItem = 2;
   */
  chatDataPieceItem?: SCHATDATA_PIECE_ITEM;
};

/**
 * Describes the message DC.Packet.SCHATDATA_PIECE.
 * Use `create(SCHATDATA_PIECESchema)` to create a new message.
 */
export const SCHATDATA_PIECESchema: GenMessage<SCHATDATA_PIECE> = /*@__PURE__*/
  messageDesc(file__Chat, 2);

/**
 * @generated from message DC.Packet.SCHATDATA
 */
export type SCHATDATA = Message<"DC.Packet.SCHATDATA"> & {
  /**
   * @generated from field: string accountId = 1;
   */
  accountId: string;

  /**
   * @generated from field: string characterId = 2;
   */
  characterId: string;

  /**
   * @generated from field: DC.Packet.SACCOUNT_NICKNAME nickname = 3;
   */
  nickname?: SACCOUNT_NICKNAME;

  /**
   * @generated from field: string partyId = 4;
   */
  partyId: string;

  /**
   * @generated from field: repeated DC.Packet.SCHATDATA_PIECE chatDataPieceArray = 5;
   */
  chatDataPieceArray: SCHATDATA_PIECE[];
};

/**
 * Describes the message DC.Packet.SCHATDATA.
 * Use `create(SCHATDATASchema)` to create a new message.
 */
export const SCHATDATASchema: GenMessage<SCHATDATA> = /*@__PURE__*/
  messageDesc(file__Chat, 3);

/**
 * @generated from message DC.Packet.SPIECE_ITEM_BODY
 */
export type SPIECE_ITEM_BODY = Message<"DC.Packet.SPIECE_ITEM_BODY"> & {
  /**
   * @generated from field: uint32 idx = 1;
   */
  idx: number;

  /**
   * @generated from field: DC.Packet.SCHATDATA_PIECE_ITEM pieces = 2;
   */
  pieces?: SCHATDATA_PIECE_ITEM;
};

/**
 * Describes the message DC.Packet.SPIECE_ITEM_BODY.
 * Use `create(SPIECE_ITEM_BODYSchema)` to create a new message.
 */
export const SPIECE_ITEM_BODYSchema: GenMessage<SPIECE_ITEM_BODY> = /*@__PURE__*/
  messageDesc(file__Chat, 4);

/**
 * @generated from message DC.Packet.SPIECE_ITEM_ARRAY
 */
export type SPIECE_ITEM_ARRAY = Message<"DC.Packet.SPIECE_ITEM_ARRAY"> & {
  /**
   * @generated from field: repeated DC.Packet.SPIECE_ITEM_BODY links = 1;
   */
  links: SPIECE_ITEM_BODY[];
};

/**
 * Describes the message DC.Packet.SPIECE_ITEM_ARRAY.
 * Use `create(SPIECE_ITEM_ARRAYSchema)` to create a new message.
 */
export const SPIECE_ITEM_ARRAYSchema: GenMessage<SPIECE_ITEM_ARRAY> = /*@__PURE__*/
  messageDesc(file__Chat, 5);

