import { Components } from "../enums/components";

export interface IComponents {
  /**
   * @category Components
   *
   * Returns the number of components of this type
   * @param {Components} type the type of component you want the count of.
   * @returns {number} the number of components of this type.
   */
  Component_GetCount(type: Components): number;

  /**
   * @category Components
   *
   * Returns the local position in the vehicle of this component.
   * @param {Components} type the type of component you want the local position of.
   * @param {number} index the index of the component you want the position of.
   * @returns {Vector3} a Vector3i is a Vector3 where .x .y and .z are integers.
   */
  Component_GetLocalPosition(type: Components, index: number): Vector3;

  /**
   * @category Components
   *
   * Returns an extensive BlockInfo object for the component.
   * @param {Components} type the type of component you want information on.
   * @param {number} index the index of the component you want block info for..
   * @returns {BlockInfo} a BlockInfo structure relating to the component.
   */
  Component_GetBlockInfo(type: Components, index: number): BlockInfo;

  /**
   * @category Components
   *
   * Returns a boolean (true/false) for a component. Depending on the type of this component this means different things (or nothing at all). Default return is false.
   * @param {Components} type the type of component you want boolean logic for.
   * @param {number} blockIndex the index of the component you want boolean logic for.
   * @returns {boolean} the first boolean logic for this component. For a component without boolean logic, or a block index that doesn't exist, false is returned.
   */
  Component_GetBoolLogic(type: Components, blockIndex: number): boolean;

  /**
   * @category Components
   *
   * Returns a boolean (true/false) for a component. Depending on the type of this component this means different things (or nothing at all). Default return is false.
   * @param {Components} type the type of component you want boolean logic for.
   * @param {number} blockIndex the index of the component you want boolean logic for.
   * @param {number} propertyIndex the index of the index of the boolean logic you want.
   * @returns {boolean} the specified boolean logic for this component. For a component without boolean logic, or an index that doesn't exist, false is returned.
   */
  Component_GetBoolLogic_1(type: Components, blockIndex: number, propertyIndex: number): boolean;

  /**
   * @category Components
   *
   * Sets the first boolean logic for a component. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set boolean logic for.
   * @param {number} index the index of the component you want to set boolean logic for.
   * @param {boolean} bool the true/false you want to set.
   */
  Component_SetBoolLogic(type: Components, index: number, bool: boolean): void;

  /**
   * @category Components
   *
   * Sets the specified boolean logic for a component. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set boolean logic for.
   * @param {number} blockIndex the index of the component you want to set boolean logic for.
   * @param {number} propertyIndex1 the index of the boolean logic you want to set.
   * @param {boolean} bool1 the true/false you want to set.
   */
  Component_SetBoolLogic_1(type: Components, blockIndex: number, propertyIndex1: number, bool1: boolean): void;

  /**
   * @category Components
   *
   * Sets the two specified boolean logics for a component. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set boolean logic for.
   * @param {number} blockIndex the index of the component you want to set boolean logic for.
   * @param {number} propertyIndex1 the index of the first boolean logic you want to set.
   * @param {boolean} bool1 the true/false you want to set the first logic to.
   * @param {number} propertyIndex2 the index of the second boolean logic you want to set.
   * @param {boolean} bool2 the true/false you want to set the second logic to.
   */
  Component_SetBoolLogic_2(type: Components, blockIndex: number, propertyIndex1: number, bool1: boolean, propertyIndex2: number, bool2: boolean): void;

  /**
   * @category Components
   *
   * Sets the three specified boolean logics for a component. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set boolean logic for.
   * @param {number} blockIndex the index of the component you want to set boolean logic for.
   * @param {number} propertyIndex1 the index of the first boolean logic you want to set.
   * @param {boolean} bool1 the true/false you want to set the first logic to.
   * @param {number} propertyIndex2 the index of the second boolean logic you want to set.
   * @param {boolean} bool2 the true/false you want to set the second logic to.
   * @param {number} propertyIndex3 the index of the third boolean logic you want to set.
   * @param {boolean} bool3 the true/false you want to set the third logic to.
   */
  Component_SetBoolLogic_3(type: Components, blockIndex: number, propertyIndex1: number, bool1: boolean, propertyIndex2: number, bool2: boolean, propertyIndex3: number, bool3: boolean): void;

  /**
   * @category Components
   *
   * Returns a floating point value for a component. Depending on the type of this component this means different things (or nothing at all). Default return is 0.
   * @param {Components} type the type of component you want float logic for.
   * @param {number} blockIndex the index of the component you want float logic for.
   * @returns {number} the first float logic for this component. For a component without float logic, or a block index that doesn't exist, 0 is returned.
   */
  Component_GetFloatLogic(type: Components, blockIndex: number): number;

  /**
   * @category Components
   *
   * Returns a floating point value for a component. Depending on the type of this component this means different things (or nothing at all). Default return is 0.
   * @param {Components} type the type of component you want float logic for.
   * @param {number} blockIndex the index of the component you want float logic for.
   * @param {number} propertyIndex the index of the index of the float logic you want.
   * @returns {number} the specified float logic for this component. For a component without float logic, or an index that doesn't exist, 0 is returned.
   */
  Component_GetFloatLogic_1(type: Components, blockIndex: number, propertyIndex: number): number;

  /**
   * @category Components
   *
   * Sets the first float logic for a component. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set float logic for.
   * @param {number} index the index of the component you want to set float logic for.
   * @param {number} float the floating point value you want to set.
   */
  Component_SetFloatLogic(type: Components, index: number, float: number): void;

  /**
   * @category Components
   *
   * Sets the specified float logic for a component. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set float logic for.
   * @param {number} blockIndex the index of the component you want to set float logic for.
   * @param {number} propertyIndex1 the index of the float logic you want to set.
   * @param {number} float1 the floating point value you want to set.
   */
  Component_SetFloatLogic_1(type: Components, blockIndex: number, propertyIndex1: number, float1: number): void;

  /**
   * @category Components
   *
   * Sets the two specified float logics for a component. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set float logic for.
   * @param {number} blockIndex the index of the component you want to set float logic for.
   * @param {number} propertyIndex1 the index of the first float logic you want to set.
   * @param {number} float1 the floating point value you want to set the first logic to.
   * @param {number} propertyIndex2 the index of the second float logic you want to set.
   * @param {number} float2 the floating point value you want to set the second logic to.
   */
  Component_SetFloatLogic_2(type: Components, blockIndex: number, propertyIndex1: number, float1: number, propertyIndex2: number, float2: number): void;

  /**
   * @category Components
   *
   * Sets the three specified float logics for a component. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set float logic for.
   * @param {number} blockIndex the index of the component you want to set float logic for.
   * @param {number} propertyIndex1 the index of the first float logic you want to set.
   * @param {number} float1 the floating point value you want to set the first logic to.
   * @param {number} propertyIndex2 the index of the second float logic you want to set.
   * @param {number} float2 the floating point value you want to set the second logic to.
   * @param {number} propertyIndex3 the index of the third float logic you want to set.
   * @param {number} float3 the floating point value you want to set the third logic to.
   */
  Component_SetFloatLogic_3(type: Components, blockIndex: number, propertyIndex1: number, float1: number, propertyIndex2: number, float2: number, propertyIndex3: number, float3: number): void;

  /**
   * @category Components
   *
   * Returns a integer number for a component. Depending on the type of this component this means different things (or nothing at all). Default return is 0.
   * @param {Components} type the type of component you want int logic for.
   * @param {number} blockIndex the index of the component you want int logic for.
   * @returns {number} the first int logic for this component. For a component without int logic, or a block index that doesn't exist, 0 is returned.
   */
  Component_GetIntLogic(type: Components, blockIndex: number): number;

  /**
   * @category Components
   *
   * Returns a integer number for a component. Depending on the type of this component this means different things (or nothing at all). Default return is 0.
   * @param {Components} type the type of component you want int logic for.
   * @param {number} blockIndex the index of the component you want int logic for.
   * @param {number} propertyIndex the index of the index of the int logic you want.
   * @returns {number} the specified int logic for this component. For a component without int logic, or an index that doesn't exist, 0 is returned.
   */
  Component_GetIntLogic_1(type: Components, blockIndex: number, propertyIndex: number): number;

  /**
   * @category Components
   *
   * Sets the first int logic for a component. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set int logic for.
   * @param {number} index the index of the component you want to set int logic for.
   * @param {number} int the integer number you want to set.
   */
  Component_SetIntLogic(type: Components, index: number, int: number): void;

  /**
   * @category Components
   *
   * Sets the specified int logic for a component. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set int logic for.
   * @param {number} blockIndex the index of the component you want to set int logic for.
   * @param {number} propertyIndex1 the index of the int logic you want to set.
   * @param {number} int1 the integer number you want to set.
   */
  Component_SetIntLogic_1(type: Components, blockIndex: number, propertyIndex1: number, int1: number): void;

  /**
   * @category Components
   *
   * Sets the two specified int logics for a component. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set int logic for.
   * @param {number} blockIndex the index of the component you want to set int logic for.
   * @param {number} propertyIndex1 the index of the first int logic you want to set.
   * @param {number} int1 the integer number you want to set the first logic to.
   * @param {number} propertyIndex2 the index of the second int logic you want to set.
   * @param {number} int2 the integer number you want to set the second logic to.
   */
  Component_SetIntLogic_2(type: Components, blockIndex: number, propertyIndex1: number, int1: number, propertyIndex2: number, int2: number): void;

  /**
   * @category Components
   *
   * Sets the three specified int logics for a component. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set int logic for.
   * @param {number} blockIndex the index of the component you want to set int logic for.
   * @param {number} propertyIndex1 the index of the first int logic you want to set.
   * @param {number} int1 the integer number you want to set the first logic to.
   * @param {number} propertyIndex2 the index of the second int logic you want to set.
   * @param {number} int2 the integer number you want to set the second logic to.
   * @param {number} propertyIndex3 the index of the third int logic you want to set.
   * @param {number} int3 the integer number you want to set the third logic to.
   */
  Component_SetIntLogic_3(type: Components, blockIndex: number, propertyIndex1: number, int1: number, propertyIndex2: number, int2: number, propertyIndex3: number, int3: number): void;

  /**
   * @category Components
   *
   * Sets the first boolean logic for all components of a specific type. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set boolean logic for.ool [bool] the bool (true/false) you want to set.
   * @param {boolean} bool
   */
  Component_SetBoolLogicAll(type: Components, bool: boolean): void;

  /**
   * @category Components
   *
   * Sets the specified boolean logic for all components of a specific type. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set boolean logic for.
   * @param {number} propertyIndex1 the index of the boolean logic you want to set.
   * @param {boolean} bool1 the true/false you want to set.
   */
  Component_SetBoolLogicAll_1(type: Components, propertyIndex1: number, bool1: boolean): void;

  /**
   * @category Components
   *
   * Sets the two specified boolean logics for all components of a specific type. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set boolean logic for.
   * @param {number} propertyIndex1 the index of the first boolean logic you want to set.
   * @param {boolean} bool1 the true/false you want to set the first logic to.
   * @param {number} propertyIndex2 the index of the second boolean logic you want to set.
   * @param {boolean} bool2 the true/false you want to set the second logic to.
   */
  Component_SetBoolLogicAll_2(type: Components, propertyIndex1: number, bool1: boolean, propertyIndex2: number, bool2: boolean): void;

  /**
   * @category Components
   *
   * Sets the three specified boolean logics for all components of a specific type. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set boolean logic for.
   * @param {number} propertyIndex1 the index of the first boolean logic you want to set.
   * @param {boolean} bool1 the true/false you want to set the first logic to.
   * @param {number} propertyIndex2 the index of the second boolean logic you want to set.
   * @param {boolean} bool2 the true/false you want to set the second logic to.
   * @param {number} propertyIndex3 the index of the third boolean logic you want to set.
   * @param {boolean} bool3 the true/false you want to set the third logic to.
   */
  Component_SetBoolLogicAll_3(type: Components, propertyIndex1: number, bool1: boolean, propertyIndex2: number, bool2: boolean, propertyIndex3: number, bool3: boolean): void;

  /**
   * @category Components
   *
   * Sets the first floating point logic for all components of a specific type. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set floating point logic for.
   * @param {number} float the floating point number you want to set.
   */
  Component_SetFloatLogicAll(type: Components, float: number): void;

  /**
   * @category Components
   *
   * Sets the specified floating point logic for all components of a specific type. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set float logic for.
   * @param {number} propertyIndex1 the index of the float logic you want to set.
   * @param {number} float1 the floating point value you want to set.
   */
  Component_SetFloatLogicAll_1(type: Components, propertyIndex1: number, float1: number): void;

  /**
   * @category Components
   *
   * Sets the two specified floating point logics for all components of a specific type. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set float logic for.
   * @param {number} propertyIndex1 the index of the first float logic you want to set.
   * @param {number} float1 the floating point value you want to set the first logic to.
   * @param {number} propertyIndex2 the index of the second float logic you want to set.
   * @param {number} float2 the floating point value you want to set the second logic to.
   */
  Component_SetFloatLogicAll_2(type: Components, propertyIndex1: number, float1: number, propertyIndex2: number, float2: number): void;

  /**
   * @category Components
   *
   * Sets the three specified floating point logics for all components of a specific type. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set float logic for.
   * @param {number} propertyIndex1 the index of the first float logic you want to set.
   * @param {number} float1 the floating point value you want to set the first logic to.
   * @param {number} propertyIndex2 the index of the second float logic you want to set.
   * @param {number} float2 the floating point value you want to set the second logic to.
   * @param {number} propertyIndex3 the index of the third float logic you want to set.
   * @param {number} float3 the floating point value you want to set the third logic to.
   */
  Component_SetFloatLogicAll_3(type: Components, propertyIndex1: number, float1: number, propertyIndex2: number, float2: number, propertyIndex3: number, float3: number): void;

  /**
   * @category Components
   *
   * Sets the first integer logic for all components of a specific type. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set integer logic for.
   * @param {number} int the integer you want to set.
   */
  Component_SetIntLogicAll(type: Components, int: number): void;

  /**
   * @category Components
   *
   * Sets the specified integer logic for all components of a specific type. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set int logic for.
   * @param {number} propertyIndex1 the index of the int logic you want to set.
   * @param {number} int1 the integer number you want to set.
   */
  Component_SetIntLogicAll_1(type: Components, propertyIndex1: number, int1: number): void;

  /**
   * @category Components
   *
   * Sets the two specified integer logics for all components of a specific type. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set int logic for.
   * @param {number} propertyIndex1 the index of the first int logic you want to set.
   * @param {number} int1 the integer number you want to set the first logic to.
   * @param {number} propertyIndex2 the index of the second int logic you want to set.
   * @param {number} int2 the integer number you want to set the second logic to.
   */
  Component_SetIntLogicAll_2(type: Components, propertyIndex1: number, int1: number, propertyIndex2: number, int2: number): void;

  /**
   * @category Components
   *
   * Sets the three specified integer logics for all components of a specific type. Depending on the type of this component this means different things (or nothing at all).
   * @param {Components} type the type of component you want to set int logic for.
   * @param {number} propertyIndex1 the index of the first int logic you want to set.
   * @param {number} int1 the integer number you want to set the first logic to.
   * @param {number} propertyIndex2 the index of the second int logic you want to set.
   * @param {number} int2 the integer number you want to set the second logic to.
   * @param {number} propertyIndex3 the index of the third int logic you want to set.
   * @param {number} int3 the integer number you want to set the third logic to.
   */
  Component_SetIntLogicAll_3(type: Components, propertyIndex1: number, int1: number, propertyIndex2: number, int2: number, propertyIndex3: number, int3: number): void;

  /**
   * @category Components
   *
   * Sets the url of the specified hologram projector
   * @param {number} index the index of the hologram projector.
   * @param {string} url the url to set the hologram projector to as a string.
   */
  SetHologramProjectorURL(index: number, url: string): void;

  /**
   * @category Components
   *
   * Sets the url of the specified poster holder
   * @param {number} index the index of the poster holder.
   * @param {string} url the url to set the poster holder to as a string.
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