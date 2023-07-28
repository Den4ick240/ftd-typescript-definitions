export interface ITarget {
  /**
   * @category Target
   *
   * The mainframe count of your vehicle is useful for requesting targets
   * @returns {number} The number of mainframes on your vehicle.
   */
  GetNumberOfMainframes(): number;

  /**
   * @category Target
   *
   * The target count is important when calling GetTarget(mainframeIndex, targetIndex).
   * @param {number} mainframeIndex 0 being the first mainframe. Use GetNumberOfMainframes() to find out how many there are.
   * @returns {number} The number of targets in this particular mainframe. Returns 0 if such a mainframe does not exist.
   */
  GetNumberOfTargets(mainframeIndex: number): number;

  /**
   * @category Target
   *
   * The TargetInfo object contains many interesting variables relating to the target. Valid will be false if the target has died but the AI has not yet cleared it.
   * @param {number} mainframeIndex 0 being the first mainframe. Use GetNumberOfMainframes() to find out how many there are.
   * @param {number} targetIndex 0 being the first target. If target prioritisation card is in use 0 is the highest priority target.
   * @returns {TargetInfo} A TargetInfo object
   */
  GetTargetInfo(mainframeIndex: number, targetIndex: number): TargetInfo;

  /**
   * @category Target
   *
   * The TargetPositionInfo object contains many interesting variables relating to the target. Valid will be false if the target has died but the AI has not yet cleared it.
   * @param {number} mainframeIndex 0 being the first mainframe. Use GetNumberOfMainframes() to find out how many there are.
   * @param {number} targetIndex 0 being the first target. If target prioritisation card is in use 0 is the highest priority target.
   * @returns {TargetPositionInfo} A TargetPositionInfo object
   */
  GetTargetPositionInfo(mainframeIndex: number, targetIndex: number): TargetPositionInfo;

  /**
   * @category Target
   *
   * The TargetPositionInfo object contains many interesting variables relating to the target.
   * @param {number} mainframeIndex 0 being the first mainframe. Use GetNumberOfMainframes() to find out how many there are.
   * @param {number} x east west in meters.
   * @param {number} y up down in meters (0 is sea level).
   * @param {number} z north south in meters.
   * @returns {TargetPositionInfo} A TargetPositionInfo object for this point in space. Velocity will be 0.
   */
  GetTargetPositionInfoForPosition(mainframeIndex: number, x: number, y: number, z: number): TargetPositionInfo;
}

export interface TargetInfo {
  Valid: boolean;
  Priority: number;
  Score: number;
  AimPointPosition: Vector3;
  Team: number;
  Protected: boolean;
  Position: Vector3;
  Velocity: Vector3;
  PlayerTargetChoice: boolean;
  Id: number;
}

export interface TargetPositionInfo {
  Valid: boolean;
  Azimuth: number;
  Elevation: number;
  ElevationForAltitudeComponentOnly: number;
  Range: number;
  Direction: Vector3;
  GroundDistance: number;
  AltitudeAboveSeaLevel: number;
  Position: Vector3;
  Velocity: Vector3;
}