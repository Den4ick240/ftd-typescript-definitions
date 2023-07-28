export interface IMisc {
  /**
   * @category Misc
   *
   * Returns altitude of the terrain at a position in the world. Can be overloaded with a single Vector3 rather than x,y,z components.
   * @param {number} x game world east west position in meters.
   * @param {number} y game world vertical (not important)
   * @param {number} z game world north south position in meters.
   * @returns {number} the terrain altitude in meters where 0 is sea level.
   */
  GetTerrainAltitudeForPosition(x: number, y: number, z: number): number;

  /**
   * @category Misc
   *
   * Returns altitude of the terrain at a position relative to the construct. Can be overloaded with a single Vector3 rather than x,y,z components.
   * @param {number} x right offset from construct position in meters.
   * @param {number} y up offset from construct position in meters
   * @param {number} z forwards offset from construct position in meters.
   * @returns {number} the terrain altitude in meters where 0 is sea level.
   */
  GetTerrainAltitudeForLocalPosition(x: number, y: number, z: number): number;

  /**
   * @category Misc
   *
   * Returns gravity vector for an altitude. gravity.y is the component of interest.
   * @param {number} alt altitude (0 is sea level)
   * @returns {Vector3} gravity vector
   */
  GetGravityForAltitude(alt: number): Vector3;

  /**
   * @category Misc
   *
   * Returns time with an arbitrary offset (i.e. the time will seldom be 0).
   * @returns {number} the time in seconds.
   */
  GetTime(): number;

  /**
   * @category Misc
   *
   * Returns time since construct spawned in seconds.
   * @returns {number} the time in seconds since the construct spawned.
   */
  GetTimeSinceSpawn(): number;

  /**
   * @category Misc
   *
   * Returns time since the instance started in seconds..
   * @returns {number} The time since the Instance started in seconds.
   */
  GetGameTime(): number;

  /**
   * @category Misc
   *
   * Get the direction and magnitude of the current wind.
   * @returns {Vector3} Vector representing the direction and the magnitude of the wind.
   */
  GetWindDirectionAndMagnitude(): Vector3;
}