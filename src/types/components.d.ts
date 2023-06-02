import { Components } from "../enums/components";

interface I {
  Component_GetCount(type: Components): number;
  Component_GetLocalPosition(type: Components, index: number): Vector3;
  Component_GetBlockInfo(type: Components, index: number): BlockInfo;
  Component_GetBoolLogic(type: Components, blockIndex: number): boolean;
  Component_GetBoolLogic_1(type: Components, blockIndex: number, propertyIndex: number): boolean;
  Component_SetBoolLogic(type: Components, index: number, bool: boolean): void;
  Component_SetBoolLogic_1(type: Components, blockIndex: number, propertyIndex1: number, bool1: boolean): void;
  Component_SetBoolLogic_2(type: Components, blockIndex: number, propertyIndex1: number, bool1: boolean, propertyIndex2: number, bool2: boolean): void;
  Component_SetBoolLogic_3(type: Components, blockIndex: number, propertyIndex1: number, bool1: boolean, propertyIndex2: number, bool2: boolean, propertyIndex3: number, bool3: boolean): void;
  Component_GetFloatLogic(type: Components, blockIndex: number): number;
  Component_GetFloatLogic_1(type: Components, blockIndex: number, propertyIndex: number): number;
  Component_SetFloatLogic(type: Components, index: number, float: number): void;
  Component_SetFloatLogic_1(type: Components, blockIndex: number, propertyIndex1: number, float1: number): void;
  Component_SetFloatLogic_2(type: Components, blockIndex: number, propertyIndex1: number, float1: number, propertyIndex2: number, float2: number): void;
  Component_SetFloatLogic_3(type: Components, blockIndex: number, propertyIndex1: number, float1: number, propertyIndex2: number, float2: number, propertyIndex3: number, float3: number): void;
  Component_GetIntLogic(type: Components, blockIndex: number): number;
  Component_GetIntLogic_1(type: Components, blockIndex: number, propertyIndex: number): number;
  Component_SetIntLogic(type: Components, index: number, int: number): void;
  Component_SetIntLogic_1(type: Components, blockIndex: number, propertyIndex1: number, int1: number): void;
  Component_SetIntLogic_2(type: Components, blockIndex: number, propertyIndex1: number, int1: number, propertyIndex2: number, int2: number): void;
  Component_SetIntLogic_3(type: Components, blockIndex: number, propertyIndex1: number, int1: number, propertyIndex2: number, int2: number, propertyIndex3: number, int3: number): void;
  Component_SetBoolLogicAll(type: Components, bool: boolean): void;
  Component_SetBoolLogicAll_1(type: Components, propertyIndex1: number, bool1: boolean): void;
  Component_SetBoolLogicAll_2(type: Components, propertyIndex1: number, bool1: boolean, propertyIndex2: number, bool2: boolean): void;
  Component_SetBoolLogicAll_3(type: Components, propertyIndex1: number, bool1: boolean, propertyIndex2: number, bool2: boolean, propertyIndex3: number, bool3: boolean): void;
  Component_SetFloatLogicAll(type: Components, float: number): void;
  Component_SetFloatLogicAll_1(type: Components, propertyIndex1: number, float1: number): void;
  Component_SetFloatLogicAll_2(type: Components, propertyIndex1: number, float1: number, propertyIndex2: number, float2: number): void;
  Component_SetFloatLogicAll_3(type: Components, propertyIndex1: number, float1: number, propertyIndex2: number, float2: number, propertyIndex3: number, float3: number): void;
  Component_SetIntLogicAll(type: Components, int: number): void;
  Component_SetIntLogicAll_1(type: Components, propertyIndex1: number, int1: number): void;
  Component_SetIntLogicAll_2(type: Components, propertyIndex1: number, int1: number, propertyIndex2: number, int2: number): void;
  Component_SetIntLogicAll_3(type: Components, propertyIndex1: number, int1: number, propertyIndex2: number, int2: number, propertyIndex3: number, int3: number): void;
  SetHologramProjectorURL(index: number, url: string): void;
  SetPosterHolderURL(index: number, url: string): void;
}

interface BlockInfo {
  Valid: boolean;
  Position: Vector3;
  LocalPosition: Vector3;
  Forwards: Vector3;
  LocalForwards: Vector3;
  Rotation: Quaterion;
  LocalRotation: Quaterion;
  SubConstructIdentifier: number;
  CustomName: string;
}