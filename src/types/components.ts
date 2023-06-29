import { Components } from "../enums/components";

export interface IComponents {
  /**
   * @category Components
   */
  Component_GetCount(type: Components): number;
  /**
   * @category Components
   */
  Component_GetLocalPosition(type: Components, index: number): Vector3;
  /**
   * @category Components
   */
  Component_GetBlockInfo(type: Components, index: number): BlockInfo;
  /**
   * @category Components
   */
  Component_GetBoolLogic(type: Components, blockIndex: number): boolean;
  /**
   * @category Components
   */
  Component_GetBoolLogic_1(type: Components, blockIndex: number, propertyIndex: number): boolean;
  /**
   * @category Components
   */
  Component_SetBoolLogic(type: Components, index: number, bool: boolean): void;
  /**
   * @category Components
   */
  Component_SetBoolLogic_1(type: Components, blockIndex: number, propertyIndex1: number, bool1: boolean): void;
  /**
   * @category Components
   */
  Component_SetBoolLogic_2(type: Components, blockIndex: number, propertyIndex1: number, bool1: boolean, propertyIndex2: number, bool2: boolean): void;
  /**
   * @category Components
   */
  Component_SetBoolLogic_3(type: Components, blockIndex: number, propertyIndex1: number, bool1: boolean, propertyIndex2: number, bool2: boolean, propertyIndex3: number, bool3: boolean): void;
  /**
   * @category Components
   */
  Component_GetFloatLogic(type: Components, blockIndex: number): number;
  /**
   * @category Components
   */
  Component_GetFloatLogic_1(type: Components, blockIndex: number, propertyIndex: number): number;
  /**
   * @category Components
   */
  Component_SetFloatLogic(type: Components, index: number, float: number): void;
  /**
   * @category Components
   */
  Component_SetFloatLogic_1(type: Components, blockIndex: number, propertyIndex1: number, float1: number): void;
  /**
   * @category Components
   */
  Component_SetFloatLogic_2(type: Components, blockIndex: number, propertyIndex1: number, float1: number, propertyIndex2: number, float2: number): void;
  /**
   * @category Components
   */
  Component_SetFloatLogic_3(type: Components, blockIndex: number, propertyIndex1: number, float1: number, propertyIndex2: number, float2: number, propertyIndex3: number, float3: number): void;
  /**
   * @category Components
   */
  Component_GetIntLogic(type: Components, blockIndex: number): number;
  /**
   * @category Components
   */
  Component_GetIntLogic_1(type: Components, blockIndex: number, propertyIndex: number): number;
  /**
   * @category Components
   */
  Component_SetIntLogic(type: Components, index: number, int: number): void;
  /**
   * @category Components
   */
  Component_SetIntLogic_1(type: Components, blockIndex: number, propertyIndex1: number, int1: number): void;
  /**
   * @category Components
   */
  Component_SetIntLogic_2(type: Components, blockIndex: number, propertyIndex1: number, int1: number, propertyIndex2: number, int2: number): void;
  /**
   * @category Components
   */
  Component_SetIntLogic_3(type: Components, blockIndex: number, propertyIndex1: number, int1: number, propertyIndex2: number, int2: number, propertyIndex3: number, int3: number): void;
  /**
   * @category Components
   */
  Component_SetBoolLogicAll(type: Components, bool: boolean): void;
  /**
   * @category Components
   */
  Component_SetBoolLogicAll_1(type: Components, propertyIndex1: number, bool1: boolean): void;
  /**
   * @category Components
   */
  Component_SetBoolLogicAll_2(type: Components, propertyIndex1: number, bool1: boolean, propertyIndex2: number, bool2: boolean): void;
  /**
   * @category Components
   */
  Component_SetBoolLogicAll_3(type: Components, propertyIndex1: number, bool1: boolean, propertyIndex2: number, bool2: boolean, propertyIndex3: number, bool3: boolean): void;
  /**
   * @category Components
   */
  Component_SetFloatLogicAll(type: Components, float: number): void;
  /**
   * @category Components
   */
  Component_SetFloatLogicAll_1(type: Components, propertyIndex1: number, float1: number): void;
  /**
   * @category Components
   */
  Component_SetFloatLogicAll_2(type: Components, propertyIndex1: number, float1: number, propertyIndex2: number, float2: number): void;
  /**
   * @category Components
   */
  Component_SetFloatLogicAll_3(type: Components, propertyIndex1: number, float1: number, propertyIndex2: number, float2: number, propertyIndex3: number, float3: number): void;
  /**
   * @category Components
   */
  Component_SetIntLogicAll(type: Components, int: number): void;
  /**
   * @category Components
   */
  Component_SetIntLogicAll_1(type: Components, propertyIndex1: number, int1: number): void;
  /**
   * @category Components
   */
  Component_SetIntLogicAll_2(type: Components, propertyIndex1: number, int1: number, propertyIndex2: number, int2: number): void;
  /**
   * @category Components
   */
  Component_SetIntLogicAll_3(type: Components, propertyIndex1: number, int1: number, propertyIndex2: number, int2: number, propertyIndex3: number, int3: number): void;
  /**
   * @category Components
   */
  SetHologramProjectorURL(index: number, url: string): void;
  /**
   * @category Components
   */
  SetPosterHolderURL(index: number, url: string): void;
}

export interface BlockInfo {
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