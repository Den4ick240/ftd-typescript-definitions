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
  /**
   * false if the Friendly Info could not be retrieved
   */
  Valid: boolean;
  /**
   * the rotation of the friendly construct
   */
  Rotation: Quaternion;
  /**
   * the position of the construct (world East Up North frame) from which PositiveSize and Negative size are referenced
   */
  ReferencePosition: Vector3;
  /**
   * the extent of the construct in the right,up,forwards direction relative to ReferencePostion
   */
  PositiveSize: Vector3;
  /**
   * the extent of the construct in the left,down,back direction relative to ReferencePosition
   */
  NegativeSize: Vector3;
  /**
   * the centre of mass of the construct in world East Up North frame
   */
  CenterOfMass: Vector3;
  /**
   * the velocity of the construct in world East Up North frame
   */
  Velocity: Vector3;
  /**
   * The up vector in world East Up North frame
   */
  UpVector: Vector3;
  /**
   * The up vector in world East Up North frame
   */
  RightVector: Vector3;
  /**
   * The forward vector in world East Up North frame
   */
  ForwardVector: Vector3;
  /**
   * the fraction of health (including turrets etc)
   */
  HealthFraction: number;
  /**
   * the spares fraction. Returns 1 if no spares storage present
   */
  SparesFraction: number;
  /**
   * the ammo fraction. Returns 1 if no ammo storage present
   */
  AmmoFraction: number;
  /**
   * the fuel fraction. Returns 1 if no fuel storage present
   */
  FuelFraction: number;
  /**
   * the energy fraction. Returns 1 if no batteries present
   */
  EnergyFraction: number;
  /**
   * the power fraction. Returns 1 if no fuel storage present
   */
  PowerFraction: number;
  /**
   * the electric power fraction. Returns 1 if no fuel storage present
   */
  ElectricPowerFraction: number;
  /**
   * the world East Up North minimum extent of the construct
   */
  AxisAlignedBoundingBoxMinimum: Vector3;
  /**
   * the world East Up North maximum extent of the construct
   */
  AxisAlignedBoundingBoxMaximum: Vector3;
  /**
   * the name
   */
  BlueprintName: string;
  /**
   * the unique Id of the construct
   */
  Id: number;
}