export interface ISelf {
  /**
   * @category Self
   *
   * Returns the position of the construct. The construct's position is essentially the position of the first ever block placed, or the centre of the starting raft that it was built from.
   * @returns {Vector3} The position (Vector3 has members x, y, and z).
   */
  GetConstructPosition(): Vector3;

  /**
   * @category Self
   *
   * Return the forward pointing vector of the construct
   * @returns {Vector3} The forward pointing vector of the construct (it has length 1)
   */
  GetConstructForwardVector(): Vector3;

  /**
   * @category Self
   *
   * Return the right pointing vector of the construct
   * @returns {Vector3} The right pointing vector of the construct (it has length 1)
   */
  GetConstructRightVector(): Vector3;

  /**
   * @category Self
   *
   * Return the up pointing vector of the construct
   * @returns {Vector3} The up pointing vector of the construct (it has length 1)
   */
  GetConstructUpVector(): Vector3;

  /**
   * @category Self
   *
   * Returns the 'positive' size of the vehicle (right,up,forwards) relative to its origin (GetConstructPosition()). The coordinates are in local space. This minus GetConstructMinDimensions() provides the full size of the vehicle.
   * @returns {Vector3} The size of the vehicle right, up and forwards of its origin
   */
  GetConstructMaxDimensions(): Vector3;

  /**
   * @category Self
   *
   * Returns the 'negative' size of the vehicle (left,down,back) relative to its origin (GetConstructPosition()). The coordinates are in local space.
   * @returns {Vector3} The size of the vehicle left, down and back of its origin
   */
  GetConstructMinDimensions(): Vector3;

  /**
   * @category Self
   *
   * Return the roll angle in degrees
   * @returns {number} The roll angle in degrees
   */
  GetConstructRoll(): number;

  /**
   * @category Self
   *
   * Return the pitch angle in degrees
   * @returns {number} The pitch angle in degrees
   */
  GetConstructPitch(): number;

  /**
   * @category Self
   *
   * Return the yaw angle in degrees
   * @returns {number} The yaw angle in degrees
   */
  GetConstructYaw(): number;

  /**
   * @category Self
   *
   * Returns the position of the construct's centre of mass in the world
   * @returns {Vector3} The position (Vector3 has members x, y, and z).
   */
  GetConstructCenterOfMass(): Vector3;

  /**
   * @category Self
   *
   * Returns the position of the mainframe in the world. Returns Vector3(0,0,0) if no such mainframe exists.
   * @param {number} mainframeIndex 0 is the first mainframe.
   * @returns {Vector3} The position (Vector3 has members x, y, and z).
   */
  GetAiPosition(mainframeIndex: number): Vector3;

  /**
   * @category Self
   *
   * Returns the magnitude of your velocity in meters per second.
   * @returns {number} magnitude of your velocity in meters per second.
   */
  GetVelocityMagnitude(): number;

  /**
   * @category Self
   *
   * Returns the magnitude of your velocity in the forwards direction in meters per second. A negative value means you're going predominently backwards.
   * @returns {number} magnitude of your forwards velocity in meters per second.
   */
  GetForwardsVelocityMagnitude(): number;

  /**
   * @category Self
   *
   * Returns your construct's velocity vector in world space in meters per second. x is east west, y is up down and z is north south..
   * @returns {Vector3} Your construct's velocity vector in meters per second
   */
  GetVelocityVector(): Vector3;

  /**
   * @category Self
   *
   * Returns your construct's velocity vector in world space in meters per second. x is east west, y is up down and z is north south. It's normalized to have a length of 1.
   * @returns {Vector3} Your construct's velocity vector in meters per second- normalized to have a length of 1.
   */
  GetVelocityVectorNormalized(): Vector3;

  /**
   * @category Self
   *
   * Returns your angular velocity. x is speed of turn around the east->west axis, y is around the vertical axis and z is around the north south axis. You're probably going to want the next function instead of this one...
   * @returns {Vector3} Your construct's angular velocity in world space
   */
  GetAngularVelocity(): Vector3;

  /**
   * @category Self
   *
   * Returns your angular velocity. x is pitch, y yaw and z roll.
   * @returns {Vector3} Your construct's angular velocity in local space
   */
  GetLocalAngularVelocity(): Vector3;

  /**
   * @category Self
   *
   * Returns the fraction of ammo your construct has left
   * @returns {number} fraction. 0 to 1. 1 if no ammo storage is available
   */
  GetAmmoFraction(): number;

  /**
   * @category Self
   *
   * Returns the fraction of fuel your construct has left
   * @returns {number} fraction. 0 to 1. 1 if no fuel storage is available
   */
  GetFuelFraction(): number;

  /**
   * @category Self
   *
   * Returns the fraction of spares your construct has left
   * @returns {number} fraction. 0 to 1. 1 if no spares storage is available
   */
  GetSparesFraction(): number;

  /**
   * @category Self
   *
   * Returns the fraction of energy your construct has left
   * @returns {number} fraction. 0 to 1. 1 if no batteries are available
   */
  GetEnergyFraction(): number;

  /**
   * @category Self
   *
   * Returns the fraction of power your construct has left
   * @returns {number} fraction. 0 to 1
   */
  GetPowerFraction(): number;

  /**
   * @category Self
   *
   * Returns the fraction of electric power your construct has left
   * @returns {number} fraction. 0 to 1.
   */
  GetElectricPowerFraction(): number;

  /**
   * @category Self
   *
   * Returns the fraction of health your construct has (including turrets etc)
   * @returns {number} fraction. 0 to 1. 1 if full health
   */
  GetHealthFraction(): number;

  /**
   * @category Self
   *
   * Returns true if the vehicle is docked
   * @returns {boolean} Docked? true for yes.
   */
  IsDocked(): boolean;

  /**
   * @category Self
   *
   * Returns health difference over a specified measurement time
   * @param {number} time the time you want the difference measured over. Time will be limited to be between 1 and 30.
   * @returns {number} health difference as a fraction (0 to 1)
   */
  GetHealthFractionDifference(time: number): number;

  /**
   * @category Self
   *
   * Returns the the name of this blueprint.
   * @returns {string} name of the bluepritn.
   */
  GetBlueprintName(): string;

  /**
   * @category Self
   *
   * Returns the the unique id of this construct. No other construct has the same id.
   * @returns {number} the unique id.
   */
  GetUniqueId(): number;
}