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
  Valid: boolean;
  Position: Vector3;
  Velocity: Vector3;
  Range: number;
  Azimuth: number;
  Elevation: number;
  TimeSinceLaunch: number;
  Id: number;
}