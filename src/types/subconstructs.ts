import { BlockInfo } from "./components";

export interface ISubconstructs {
  /**
   * @category Subconstructs
   *
   * Returns the number of SubConstructs on the vehicle, including SubConstructs on SubConstructs
   * @returns {number} the total number of SubConstructs on the vehicle
   */
  GetAllSubconstructsCount(): number;

  /**
   * @category Subconstructs
   *
   * Returns the identifier of the SubConstruct. The indices start at 0 and are in no particular order
   * @param {number} index 0 is the first SubConstruct
   * @returns {number} the persistent indentifier of the SubConstruct
   */
  GetSubConstructIdentifier(index: number): number;

  /**
   * @category Subconstructs
   *
   * Returns the number of SubConstructs on the given SubConstruct
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct
   * @returns {number} all the number of SubConstructs directly placed on the given SubConstruct.
   */
  GetSubconstructsChildrenCount(SubConstructIdentifier: number): number;

  /**
   * @category Subconstructs
   *
   * Returns the identifier of the child SubConstruct placed on the parent SubConstruct. The indices start at 0 and are in no particular order
   * @param {number} SubConstructIdentifier the persistent identifier of the parent SubConstruct
   * @param {number} index 0 is the first child SubConstruct
   * @returns {number} the persistent indentifier of the SubConstruct
   */
  GetSubConstructChildIdentifier(SubConstructIdentifier: number, index: number): number;

  /**
   * @category Subconstructs
   *
   * Returns the persistent index of the parent SubConstruct of the given SubConstruct, '0' for the MainConstruct, '-1' if not found
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct
   * @returns {number} the persistent index of the parent SubConstruct of the given SubConstruct.
   */
  GetParent(SubConstructIdentifier: number): number;

  /**
   * @category Subconstructs
   *
   * Indicates if the SubConstruct is a turret or not
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct
   * @returns {boolean} 'true' if the SubConstruct is a turret, 'false' otherwise.
   */
  IsTurret(SubConstructIdentifier: number): boolean;

  /**
   * @category Subconstructs
   *
   * Indicates if the SubConstruct is a spin block or not
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct
   * @returns {boolean} 'true' if the SubConstruct is a spin block, 'false' otherwise.
   */
  IsSpinBlock(SubConstructIdentifier: number): boolean;

  /**
   * @category Subconstructs
   *
   * Indicates if the SubConstruct is a piston or not
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct
   * @returns {boolean} 'true' if the SubConstruct is a piston, 'false' otherwise.
   */
  IsPiston(SubConstructIdentifier: number): boolean;

  /**
   * @category Subconstructs
   *
   * Indicates if the SubConstruct is destroyed or not
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct
   * @returns {boolean} 'true' if the SubConstruct is not completely destroyed.
   */
  IsAlive(SubConstructIdentifier: number): boolean;

  /**
   * @category Subconstructs
   *
   * Indicates if the SubConstruct is on the hull or not
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct
   * @returns {boolean} 'true' if the SubConstruct is on the hull.
   */
  IsSubConstructOnHull(SubConstructIdentifier: number): boolean;

  /**
   * @category Subconstructs
   *
   * Returns a BlockInfo object for the active block of the SubConstruct, and invalid BlockInfo if the SubConstruct hasn't been found.
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct
   * @returns {BlockInfo} a BlockInfo object for the SubConstruct active block (the SpinBlock block, the piston or the turret block)
   */
  GetSubConstructInfo(SubConstructIdentifier: number): BlockInfo;

  /**
   * @category Subconstructs
   *
   * Returns a Quaternion representing the orientation of the block in its parent SubConstruct as it was when it was placed.
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct
   * @returns {Quaterion} the rotation of the subconstruct relative to its parent as it was first placed.
   */
  GetSubConstructIdleRotation(SubConstructIdentifier: number): Quaterion;
}