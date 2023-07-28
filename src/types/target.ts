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
  /**
   * true if a target was correctly returned
   */
  Valid: boolean;
  /**
   * 0 is highest priority
   */
  Priority: number;
  /**
   * high is a good score- taken from target prioritisation card
   */
  Score: number;
  /**
   * position in game world of aim point (this is the current position of the block that's being aimed for)
   */
  AimPointPosition: Vector3;
  /**
   * team of target
   */
  Team: number;
  /**
   * is it salvage? Will be false for salvage.
   */
  Protected: boolean;
  /**
   * position in game world of target object.
   */
  Position: Vector3;
  /**
   * velocity in game world in meters per second
   */
  Velocity: Vector3;
  /**
   * has the player set this as the target?
   */
  PlayerTargetChoice: boolean;
  /**
   * the unique integer Id of the target.
   */
  Id: number;
}

export interface TargetPositionInfo {
  /**
   * true if target position info correctly returned.
   */
  Valid: boolean;
  /**
   * degrees off nose of our vehicle where positive is clockwise
   */
  Azimuth: number;
  /**
   * degrees off nose of our vehicle where positive is downwards. This often has dodgy values
   */
  Elevation: number;
  /**
   * the elevation off nose of the target's altitude. Robustly calculated
   */
  ElevationForAltitudeComponentOnly: number;
  /**
   * the range to the target
   */
  Range: number;
  /**
   * the direction to the target (absolute, not normalised)
   */
  Direction: Vector3;
  /**
   * the distance along the ground (ignoring vertical component) to the target
   */
  GroundDistance: number;
  /**
   * in metres.
   */
  AltitudeAboveSeaLevel: number;
  /**
   * position of target
   */
  Position: Vector3;
  /**
   * meters per second
   */
  Velocity: Vector3;
}