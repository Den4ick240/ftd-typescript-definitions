export interface IFriendly {
  /**
   * @category Friendly
   *
   * Returns the number of friendly constructs
   * @returns {number} the number of friendlies spawned into the world
   */
  GetFriendlyCount(): number;

  /**
   * @category Friendly
   *
   * Returns a friendly info object for a friendly vehicle
   * @param {number} index 0 is the first construct
   * @returns {FriendlyInfo} the FriendlyInfo object
   */
  GetFriendlyInfo(index: number): FriendlyInfo;

  /**
   * @category Friendly
   *
   * Returns a friendly info object for an Id
   * @param {number} id the Id you want
   * @returns {FriendlyInfo} the FriendlyInfo object
   */
  GetFriendlyInfoById(id: number): FriendlyInfo;
}

export interface FriendlyInfo {
  Valid: boolean;
  Rotation: Quaterion;
  ReferencePosition: Vector3;
  PositiveSize: Vector3;
  NegativeSize: Vector3;
  CenterOfMass: Vector3;
  Velocity: Vector3;
  UpVector: Vector3;
  RightVector: Vector3;
  ForwardVector: Vector3;
  HealthFraction: number;
  SparesFraction: number;
  AmmoFraction: number;
  FuelFraction: number;
  EnergyFraction: number;
  PowerFraction: number;
  ElectricPowerFraction: number;
  AxisAlignedBoundingBoxMinimum: Vector3;
  AxisAlignedBoundingBoxMaximum: Vector3;
  BlueprintName: string;
  Id: number;
}