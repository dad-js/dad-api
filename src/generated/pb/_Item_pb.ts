// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file _Item.proto (package DC.Packet, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file _Item.proto.
 */
export const file__Item: GenFile = /*@__PURE__*/
  fileDesc("CgtfSXRlbS5wcm90bxIJREMuUGFja2V0IqQBCglTSXRlbU1ldGESGwoTU291bEhlYXJ0X0FjY291bnRJZBgBIAEoCRIZChFTb3VsSGVhcnRfUGFydHlJZBgCIAEoCRIhChlTb3VsSGVhcnRfTmlja05hbWVfb3JpZ2luGAMgASgJEiQKHFNvdWxIZWFydF9OaWNrTmFtZV9zdHJlYW1pbmcYBCABKAkSFgoOQXZhaWxhYmxlVmFsdWUYBSABKA0iqwMKCVNEb3duSXRlbRIUCgxpdGVtVW5pcXVlSWQYASABKAQSDgoGaXRlbUlkGAIgASgJEhEKCWl0ZW1Db3VudBgDIAEoDRITCgtpbnZlbnRvcnlJZBgEIAEoDRIOCgZzbG90SWQYBSABKA0SEQoJYkVxdWlwcGVkGAYgASgNEhUKDWl0ZW1BbW1vQ291bnQYByABKA0SGQoRaXRlbUNvbnRlbnRzQ291bnQYCCABKA0SJgoIbWV0YUl0ZW0YCSABKAsyFC5EQy5QYWNrZXQuU0l0ZW1NZXRhEjYKFHByaW1hcnlQcm9wZXJ0eUFycmF5GAogAygLMhguREMuUGFja2V0LlNJdGVtUHJvcGVydHkSOAoWc2Vjb25kYXJ5UHJvcGVydHlBcnJheRgLIAMoCzIYLkRDLlBhY2tldC5TSXRlbVByb3BlcnR5EhEKCWxvb3RTdGF0ZRgMIAEoBRISCgpvcmlnaW5UeXBlGA0gASgFEhYKDm9yaWdpbk5pY2tOYW1lGA4gASgJEiIKGm9yaWdpblN0ZWFtaW5nTW9kZU5pY2tOYW1lGA8gASgJIuwCCgVTSXRlbRIUCgxpdGVtVW5pcXVlSWQYASABKAQSDgoGaXRlbUlkGAIgASgJEhEKCWl0ZW1Db3VudBgDIAEoDRITCgtpbnZlbnRvcnlJZBgEIAEoDRIOCgZzbG90SWQYBSABKA0SFQoNaXRlbUFtbW9Db3VudBgHIAEoDRIZChFpdGVtQ29udGVudHNDb3VudBgIIAEoDRI2ChRwcmltYXJ5UHJvcGVydHlBcnJheRgJIAMoCzIYLkRDLlBhY2tldC5TSXRlbVByb3BlcnR5EjgKFnNlY29uZGFyeVByb3BlcnR5QXJyYXkYCiADKAsyGC5EQy5QYWNrZXQuU0l0ZW1Qcm9wZXJ0eRIRCglsb290U3RhdGUYCyABKAUSEgoKb3JpZ2luVHlwZRgMIAEoBRIWCg5vcmlnaW5OaWNrTmFtZRgNIAEoCRIiChpvcmlnaW5TdGVhbWluZ01vZGVOaWNrTmFtZRgOIAEoCSI/Cg9TSXRlbVByb3BlcnRpZXMSLAoKcHJvcGVydGllcxgBIAMoCzIYLkRDLlBhY2tldC5TSXRlbVByb3BlcnR5Ij4KDVNJdGVtUHJvcGVydHkSFgoOcHJvcGVydHlUeXBlSWQYASABKAkSFQoNcHJvcGVydHlWYWx1ZRgCIAEoBSIoCgZTSXRlbXMSHgoEaXRlbRgBIAMoCzIQLkRDLlBhY2tldC5TSXRlbSImCgVTUGVyaxINCgVpbmRleBgBIAEoDRIOCgZwZXJrSWQYAiABKAkiKAoGU1NraWxsEg0KBWluZGV4GAEgASgNEg8KB3NraWxsSWQYAiABKAkiQwoGU1NwZWxsEhEKCXNsb3RJbmRleBgBIAEoDRIVCg1zZXF1ZW5jZUluZGV4GAIgASgNEg8KB3NwZWxsSWQYAyABKAkiQwoGU011c2ljEg8KB211c2ljSWQYASABKAkSEQoJc2xvdEluZGV4GAIgASgNEhUKDXNlcXVlbmNlSW5kZXgYAyABKA0iTQoLU1NoYXBlU2hpZnQSFAoMc2hhcGVTaGlmdElkGAEgASgJEhEKCXNsb3RJbmRleBgCIAEoDRIVCg1zZXF1ZW5jZUluZGV4GAMgASgNIlQKFFNDVVNUT01JWkVfQ0hBUkFDVEVSEhwKFGN1c3RvbWl6ZUNoYXJhY3RlcklkGAEgASgJEg8KB2lzRXF1aXAYAiABKAUSDQoFaXNOZXcYAyABKAUiSgoPU0NVU1RPTUlaRV9JVEVNEhcKD2N1c3RvbWl6ZUl0ZW1JZBgBIAEoCRIPCgdpc0VxdWlwGAIgASgFEg0KBWlzTmV3GAMgASgFIlUKFVNDVVNUT01JWkVfQVJNT1JfU0tJThIcChRjdXN0b21pemVBcm1vclNraW5JZBgBIAEoCRIPCgdpc0VxdWlwGAIgASgFEg0KBWlzTmV3GAMgASgFIkAKBlNFTU9URRIPCgdlbW90ZUlkGAEgASgJEhYKDmVxdWlwU2xvdEluZGV4GAIgASgFEg0KBWlzTmV3GAMgASgFIk4KEVNDVVNUT01JWkVfQUNUSU9OEhkKEWN1c3RvbWl6ZUFjdGlvbklkGAEgASgJEg8KB2lzRXF1aXAYAiABKAUSDQoFaXNOZXcYAyABKAUiVQoWU0NVU1RPTUlaRV9MT0JCWV9FTU9URRIUCgxsb2JieUVtb3RlSWQYASABKAkSFgoOZXF1aXBTbG90SW5kZXgYAiABKAUSDQoFaXNOZXcYAyABKAUieQoXU0ZyaWVuZEl0ZW1SZWNvdmVyeUluZm8SFwoPZnJpZW5kQWNjb3VudElkGAEgASgJEhkKEWZyaWVuZENoYXJhY3RlcklkGAIgASgJEioKEHJlY292ZXJ5SXRlbUxpc3QYAyADKAsyEC5EQy5QYWNrZXQuU0l0ZW1CGgoQY29tLnBhY2tldHMuaXRlbUIEaXRlbVAAYgZwcm90bzM");

/**
 * @generated from message DC.Packet.SItemMeta
 */
export type SItemMeta = Message<"DC.Packet.SItemMeta"> & {
  /**
   * @generated from field: string SoulHeart_AccountId = 1;
   */
  SoulHeartAccountId: string;

  /**
   * @generated from field: string SoulHeart_PartyId = 2;
   */
  SoulHeartPartyId: string;

  /**
   * @generated from field: string SoulHeart_NickName_origin = 3;
   */
  SoulHeartNickNameOrigin: string;

  /**
   * @generated from field: string SoulHeart_NickName_streaming = 4;
   */
  SoulHeartNickNameStreaming: string;

  /**
   * @generated from field: uint32 AvailableValue = 5;
   */
  AvailableValue: number;
};

/**
 * Describes the message DC.Packet.SItemMeta.
 * Use `create(SItemMetaSchema)` to create a new message.
 */
export const SItemMetaSchema: GenMessage<SItemMeta> = /*@__PURE__*/
  messageDesc(file__Item, 0);

/**
 * @generated from message DC.Packet.SDownItem
 */
export type SDownItem = Message<"DC.Packet.SDownItem"> & {
  /**
   * @generated from field: uint64 itemUniqueId = 1;
   */
  itemUniqueId: bigint;

  /**
   * @generated from field: string itemId = 2;
   */
  itemId: string;

  /**
   * @generated from field: uint32 itemCount = 3;
   */
  itemCount: number;

  /**
   * @generated from field: uint32 inventoryId = 4;
   */
  inventoryId: number;

  /**
   * @generated from field: uint32 slotId = 5;
   */
  slotId: number;

  /**
   * @generated from field: uint32 bEquipped = 6;
   */
  bEquipped: number;

  /**
   * @generated from field: uint32 itemAmmoCount = 7;
   */
  itemAmmoCount: number;

  /**
   * @generated from field: uint32 itemContentsCount = 8;
   */
  itemContentsCount: number;

  /**
   * @generated from field: DC.Packet.SItemMeta metaItem = 9;
   */
  metaItem?: SItemMeta;

  /**
   * @generated from field: repeated DC.Packet.SItemProperty primaryPropertyArray = 10;
   */
  primaryPropertyArray: SItemProperty[];

  /**
   * @generated from field: repeated DC.Packet.SItemProperty secondaryPropertyArray = 11;
   */
  secondaryPropertyArray: SItemProperty[];

  /**
   * @generated from field: int32 lootState = 12;
   */
  lootState: number;

  /**
   * @generated from field: int32 originType = 13;
   */
  originType: number;

  /**
   * @generated from field: string originNickName = 14;
   */
  originNickName: string;

  /**
   * @generated from field: string originSteamingModeNickName = 15;
   */
  originSteamingModeNickName: string;
};

/**
 * Describes the message DC.Packet.SDownItem.
 * Use `create(SDownItemSchema)` to create a new message.
 */
export const SDownItemSchema: GenMessage<SDownItem> = /*@__PURE__*/
  messageDesc(file__Item, 1);

/**
 * @generated from message DC.Packet.SItem
 */
export type SItem = Message<"DC.Packet.SItem"> & {
  /**
   * @generated from field: uint64 itemUniqueId = 1;
   */
  itemUniqueId: bigint;

  /**
   * @generated from field: string itemId = 2;
   */
  itemId: string;

  /**
   * @generated from field: uint32 itemCount = 3;
   */
  itemCount: number;

  /**
   * @generated from field: uint32 inventoryId = 4;
   */
  inventoryId: number;

  /**
   * @generated from field: uint32 slotId = 5;
   */
  slotId: number;

  /**
   * @generated from field: uint32 itemAmmoCount = 7;
   */
  itemAmmoCount: number;

  /**
   * @generated from field: uint32 itemContentsCount = 8;
   */
  itemContentsCount: number;

  /**
   * @generated from field: repeated DC.Packet.SItemProperty primaryPropertyArray = 9;
   */
  primaryPropertyArray: SItemProperty[];

  /**
   * @generated from field: repeated DC.Packet.SItemProperty secondaryPropertyArray = 10;
   */
  secondaryPropertyArray: SItemProperty[];

  /**
   * @generated from field: int32 lootState = 11;
   */
  lootState: number;

  /**
   * @generated from field: int32 originType = 12;
   */
  originType: number;

  /**
   * @generated from field: string originNickName = 13;
   */
  originNickName: string;

  /**
   * @generated from field: string originSteamingModeNickName = 14;
   */
  originSteamingModeNickName: string;
};

/**
 * Describes the message DC.Packet.SItem.
 * Use `create(SItemSchema)` to create a new message.
 */
export const SItemSchema: GenMessage<SItem> = /*@__PURE__*/
  messageDesc(file__Item, 2);

/**
 * @generated from message DC.Packet.SItemProperties
 */
export type SItemProperties = Message<"DC.Packet.SItemProperties"> & {
  /**
   * @generated from field: repeated DC.Packet.SItemProperty properties = 1;
   */
  properties: SItemProperty[];
};

/**
 * Describes the message DC.Packet.SItemProperties.
 * Use `create(SItemPropertiesSchema)` to create a new message.
 */
export const SItemPropertiesSchema: GenMessage<SItemProperties> = /*@__PURE__*/
  messageDesc(file__Item, 3);

/**
 * @generated from message DC.Packet.SItemProperty
 */
export type SItemProperty = Message<"DC.Packet.SItemProperty"> & {
  /**
   * @generated from field: string propertyTypeId = 1;
   */
  propertyTypeId: string;

  /**
   * @generated from field: int32 propertyValue = 2;
   */
  propertyValue: number;
};

/**
 * Describes the message DC.Packet.SItemProperty.
 * Use `create(SItemPropertySchema)` to create a new message.
 */
export const SItemPropertySchema: GenMessage<SItemProperty> = /*@__PURE__*/
  messageDesc(file__Item, 4);

/**
 * @generated from message DC.Packet.SItems
 */
export type SItems = Message<"DC.Packet.SItems"> & {
  /**
   * @generated from field: repeated DC.Packet.SItem item = 1;
   */
  item: SItem[];
};

/**
 * Describes the message DC.Packet.SItems.
 * Use `create(SItemsSchema)` to create a new message.
 */
export const SItemsSchema: GenMessage<SItems> = /*@__PURE__*/
  messageDesc(file__Item, 5);

/**
 * @generated from message DC.Packet.SPerk
 */
export type SPerk = Message<"DC.Packet.SPerk"> & {
  /**
   * @generated from field: uint32 index = 1;
   */
  index: number;

  /**
   * @generated from field: string perkId = 2;
   */
  perkId: string;
};

/**
 * Describes the message DC.Packet.SPerk.
 * Use `create(SPerkSchema)` to create a new message.
 */
export const SPerkSchema: GenMessage<SPerk> = /*@__PURE__*/
  messageDesc(file__Item, 6);

/**
 * @generated from message DC.Packet.SSkill
 */
export type SSkill = Message<"DC.Packet.SSkill"> & {
  /**
   * @generated from field: uint32 index = 1;
   */
  index: number;

  /**
   * @generated from field: string skillId = 2;
   */
  skillId: string;
};

/**
 * Describes the message DC.Packet.SSkill.
 * Use `create(SSkillSchema)` to create a new message.
 */
export const SSkillSchema: GenMessage<SSkill> = /*@__PURE__*/
  messageDesc(file__Item, 7);

/**
 * @generated from message DC.Packet.SSpell
 */
export type SSpell = Message<"DC.Packet.SSpell"> & {
  /**
   * @generated from field: uint32 slotIndex = 1;
   */
  slotIndex: number;

  /**
   * @generated from field: uint32 sequenceIndex = 2;
   */
  sequenceIndex: number;

  /**
   * @generated from field: string spellId = 3;
   */
  spellId: string;
};

/**
 * Describes the message DC.Packet.SSpell.
 * Use `create(SSpellSchema)` to create a new message.
 */
export const SSpellSchema: GenMessage<SSpell> = /*@__PURE__*/
  messageDesc(file__Item, 8);

/**
 * @generated from message DC.Packet.SMusic
 */
export type SMusic = Message<"DC.Packet.SMusic"> & {
  /**
   * @generated from field: string musicId = 1;
   */
  musicId: string;

  /**
   * @generated from field: uint32 slotIndex = 2;
   */
  slotIndex: number;

  /**
   * @generated from field: uint32 sequenceIndex = 3;
   */
  sequenceIndex: number;
};

/**
 * Describes the message DC.Packet.SMusic.
 * Use `create(SMusicSchema)` to create a new message.
 */
export const SMusicSchema: GenMessage<SMusic> = /*@__PURE__*/
  messageDesc(file__Item, 9);

/**
 * @generated from message DC.Packet.SShapeShift
 */
export type SShapeShift = Message<"DC.Packet.SShapeShift"> & {
  /**
   * @generated from field: string shapeShiftId = 1;
   */
  shapeShiftId: string;

  /**
   * @generated from field: uint32 slotIndex = 2;
   */
  slotIndex: number;

  /**
   * @generated from field: uint32 sequenceIndex = 3;
   */
  sequenceIndex: number;
};

/**
 * Describes the message DC.Packet.SShapeShift.
 * Use `create(SShapeShiftSchema)` to create a new message.
 */
export const SShapeShiftSchema: GenMessage<SShapeShift> = /*@__PURE__*/
  messageDesc(file__Item, 10);

/**
 * @generated from message DC.Packet.SCUSTOMIZE_CHARACTER
 */
export type SCUSTOMIZE_CHARACTER = Message<"DC.Packet.SCUSTOMIZE_CHARACTER"> & {
  /**
   * @generated from field: string customizeCharacterId = 1;
   */
  customizeCharacterId: string;

  /**
   * @generated from field: int32 isEquip = 2;
   */
  isEquip: number;

  /**
   * @generated from field: int32 isNew = 3;
   */
  isNew: number;
};

/**
 * Describes the message DC.Packet.SCUSTOMIZE_CHARACTER.
 * Use `create(SCUSTOMIZE_CHARACTERSchema)` to create a new message.
 */
export const SCUSTOMIZE_CHARACTERSchema: GenMessage<SCUSTOMIZE_CHARACTER> = /*@__PURE__*/
  messageDesc(file__Item, 11);

/**
 * @generated from message DC.Packet.SCUSTOMIZE_ITEM
 */
export type SCUSTOMIZE_ITEM = Message<"DC.Packet.SCUSTOMIZE_ITEM"> & {
  /**
   * @generated from field: string customizeItemId = 1;
   */
  customizeItemId: string;

  /**
   * @generated from field: int32 isEquip = 2;
   */
  isEquip: number;

  /**
   * @generated from field: int32 isNew = 3;
   */
  isNew: number;
};

/**
 * Describes the message DC.Packet.SCUSTOMIZE_ITEM.
 * Use `create(SCUSTOMIZE_ITEMSchema)` to create a new message.
 */
export const SCUSTOMIZE_ITEMSchema: GenMessage<SCUSTOMIZE_ITEM> = /*@__PURE__*/
  messageDesc(file__Item, 12);

/**
 * @generated from message DC.Packet.SCUSTOMIZE_ARMOR_SKIN
 */
export type SCUSTOMIZE_ARMOR_SKIN = Message<"DC.Packet.SCUSTOMIZE_ARMOR_SKIN"> & {
  /**
   * @generated from field: string customizeArmorSkinId = 1;
   */
  customizeArmorSkinId: string;

  /**
   * @generated from field: int32 isEquip = 2;
   */
  isEquip: number;

  /**
   * @generated from field: int32 isNew = 3;
   */
  isNew: number;
};

/**
 * Describes the message DC.Packet.SCUSTOMIZE_ARMOR_SKIN.
 * Use `create(SCUSTOMIZE_ARMOR_SKINSchema)` to create a new message.
 */
export const SCUSTOMIZE_ARMOR_SKINSchema: GenMessage<SCUSTOMIZE_ARMOR_SKIN> = /*@__PURE__*/
  messageDesc(file__Item, 13);

/**
 * @generated from message DC.Packet.SEMOTE
 */
export type SEMOTE = Message<"DC.Packet.SEMOTE"> & {
  /**
   * @generated from field: string emoteId = 1;
   */
  emoteId: string;

  /**
   * @generated from field: int32 equipSlotIndex = 2;
   */
  equipSlotIndex: number;

  /**
   * @generated from field: int32 isNew = 3;
   */
  isNew: number;
};

/**
 * Describes the message DC.Packet.SEMOTE.
 * Use `create(SEMOTESchema)` to create a new message.
 */
export const SEMOTESchema: GenMessage<SEMOTE> = /*@__PURE__*/
  messageDesc(file__Item, 14);

/**
 * @generated from message DC.Packet.SCUSTOMIZE_ACTION
 */
export type SCUSTOMIZE_ACTION = Message<"DC.Packet.SCUSTOMIZE_ACTION"> & {
  /**
   * @generated from field: string customizeActionId = 1;
   */
  customizeActionId: string;

  /**
   * @generated from field: int32 isEquip = 2;
   */
  isEquip: number;

  /**
   * @generated from field: int32 isNew = 3;
   */
  isNew: number;
};

/**
 * Describes the message DC.Packet.SCUSTOMIZE_ACTION.
 * Use `create(SCUSTOMIZE_ACTIONSchema)` to create a new message.
 */
export const SCUSTOMIZE_ACTIONSchema: GenMessage<SCUSTOMIZE_ACTION> = /*@__PURE__*/
  messageDesc(file__Item, 15);

/**
 * @generated from message DC.Packet.SCUSTOMIZE_LOBBY_EMOTE
 */
export type SCUSTOMIZE_LOBBY_EMOTE = Message<"DC.Packet.SCUSTOMIZE_LOBBY_EMOTE"> & {
  /**
   * @generated from field: string lobbyEmoteId = 1;
   */
  lobbyEmoteId: string;

  /**
   * @generated from field: int32 equipSlotIndex = 2;
   */
  equipSlotIndex: number;

  /**
   * @generated from field: int32 isNew = 3;
   */
  isNew: number;
};

/**
 * Describes the message DC.Packet.SCUSTOMIZE_LOBBY_EMOTE.
 * Use `create(SCUSTOMIZE_LOBBY_EMOTESchema)` to create a new message.
 */
export const SCUSTOMIZE_LOBBY_EMOTESchema: GenMessage<SCUSTOMIZE_LOBBY_EMOTE> = /*@__PURE__*/
  messageDesc(file__Item, 16);

/**
 * @generated from message DC.Packet.SFriendItemRecoveryInfo
 */
export type SFriendItemRecoveryInfo = Message<"DC.Packet.SFriendItemRecoveryInfo"> & {
  /**
   * @generated from field: string friendAccountId = 1;
   */
  friendAccountId: string;

  /**
   * @generated from field: string friendCharacterId = 2;
   */
  friendCharacterId: string;

  /**
   * @generated from field: repeated DC.Packet.SItem recoveryItemList = 3;
   */
  recoveryItemList: SItem[];
};

/**
 * Describes the message DC.Packet.SFriendItemRecoveryInfo.
 * Use `create(SFriendItemRecoveryInfoSchema)` to create a new message.
 */
export const SFriendItemRecoveryInfoSchema: GenMessage<SFriendItemRecoveryInfo> = /*@__PURE__*/
  messageDesc(file__Item, 17);

