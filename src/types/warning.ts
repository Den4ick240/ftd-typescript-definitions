export interface IWarning {
  /**
   * @category Warning
   *
   * Return the number of missiles the construct has warnings for
   * @returns {number} the number of missiles being warned on
   */
  GetNumberOfWarnings(): number;

  /**
   * @category Warning
   *
   * Request information on a specific missile warning
   * @param {number} missileIndex the index of the missile
   * @returns {MissileWarningInfo} information on the missile. missileWarningInfo.Valid = false if you didn't request an existing missile index
   */
  GetMissileWarning(missileIndex: number): MissileWarningInfo;
}

export interface MissileWarningInfo {
  /**
   * false if the warning is junk due to incorrect indices.
   */
  Valid: boolean;
  /**
   * the position of the missile
   */
  Position: Vector3;
  /**
   * the velocity of the missile in meters per second
   */
  Velocity: Vector3;
  /**
   * the distance from centre of mass of your construct to the missile
   */
  Range: number;
  /**
   * the azimuth angle between your construct's forward direction and the missile (degrees)
   */
  Azimuth: number;
  /**
   * the elevation angle between your construct's forward direction and the missile (degrees)
   */
  Elevation: number;
  /**
   * the time since missile launch.
   */
  TimeSinceLaunch: number;
  /**
   * the unique Id of the missile
   */
  Id: number;
}