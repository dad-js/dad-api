// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file google/protobuf/any.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/protobuf/any.proto.
 */
export const file_google_protobuf_any: GenFile = /*@__PURE__*/
  fileDesc("Chlnb29nbGUvcHJvdG9idWYvYW55LnByb3RvEg9nb29nbGUucHJvdG9idWYiJgoDQW55EhAKCHR5cGVfdXJsGAEgASgJEg0KBXZhbHVlGAIgASgMQnYKE2NvbS5nb29nbGUucHJvdG9idWZCCEFueVByb3RvUAFaLGdvb2dsZS5nb2xhbmcub3JnL3Byb3RvYnVmL3R5cGVzL2tub3duL2FueXBiogIDR1BCqgIeR29vZ2xlLlByb3RvYnVmLldlbGxLbm93blR5cGVzYgZwcm90bzM");

/**
 * @generated from message google.protobuf.Any
 */
export type Any = Message<"google.protobuf.Any"> & {
  /**
   * @generated from field: string type_url = 1;
   */
  typeUrl: string;

  /**
   * @generated from field: bytes value = 2;
   */
  value: Uint8Array;
};

/**
 * Describes the message google.protobuf.Any.
 * Use `create(AnySchema)` to create a new message.
 */
export const AnySchema: GenMessage<Any> = /*@__PURE__*/
  messageDesc(file_google_protobuf_any, 0);

