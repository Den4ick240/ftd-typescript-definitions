import { BlockInfo } from "./components";

export interface ISpinner {
  /**
   * @category Spinner
   *
   * Set the speed factor. In continuous mode spinners this allows some blades to spin slower than others, in insta-spin blades this is related to the speed they are spinning at (1 is max speed, 0 is no speed), and in rotation spinners this does nothing.
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct.
   * @param {number} speedFactor 0 to 1, the fractional power output
   */
  SetSpinBlockSpeedFactor(SubConstructIdentifier: number, speedFactor: number): void;

  /**
   * @category Spinner
   *
   * Sets the power drive. this allows heliblades to produce more force. Requires engine power. 0 removes engine use. 10 is maximum power use.
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct.
   * @param {number} drive the relative power use of the spinner (0 to 10).
   */
  SetSpinBlockPowerDrive(SubConstructIdentifier: number, drive: number): void;

  /**
   * @category Spinner
   *
   * Sets the angle of rotation. Changes the spinner into Rotate mode. 'Rotatebackwards' is not available through this interface but you shouldn't need it.
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct.
   * @param {number} angle angle in degrees to turn to.
   */
  SetSpinBlockRotationAngle(SubConstructIdentifier: number, angle: number): void;

  /**
   * @category Spinner
   *
   * Sets the speed of rotation. Changes the spinner into continuous mode. 'ContinuouseReverse' mode is not available through this interface so set the speed negative to facilitate reverse spinning.
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct.
   * @param {number} speed speed to rotate at. 30 is the maximum so values from -30 to 30 work.
   */
  SetSpinBlockContinuousSpeed(SubConstructIdentifier: number, speed: number): void;

  /**
   * @category Spinner
   *
   * Pistons have their own interface because they use 'SubConstruct' identifiers
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct.
   * @param {number} magnitudeAndDirection -1 means spin backwards full speed, 1 is spin forwards full speed
   */
  SetSpinBlockInstaSpin(SubConstructIdentifier: number, magnitudeAndDirection: number): void;

  /**
   * @category Spinner
   *
   * Get the extension of the piston, -1 if not found.
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct.
   * @returns {number} the extension distance of the piston in meters
   */
  GetPistonExtension(SubConstructIdentifier: number): number;

  /**
   * @category Spinner
   *
   * Get the velocity of the piston (always positive), -1 if not found.
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct.
   * @returns {number} the velocity of the piston in meters per second
   */
  GetPistonVelocity(SubConstructIdentifier: number): number;

  /**
   * @category Spinner
   *
   * Set the extension of the piston.
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct.
   * @param {number} ExtensionDistance the extension distance of the piston (in meters, will be clamped if necessary)
   */
  SetPistonExtension(SubConstructIdentifier: number, ExtensionDistance: number): void;

  /**
   * @category Spinner
   *
   * Dedicated helicopter spinners have their own interface because they have their own indexing system
   * @param {number} SubConstructIdentifier the persistent identifier of the SubConstruct.
   * @param {number} ExtensionVelocity the velocity of the piston in meters per second (between 0.1 and 2)
   */
  SetPistonVelocity(SubConstructIdentifier: number, ExtensionVelocity: number): void;

  /**
   * @category Spinner
   *
   * Returns the number of dedicated helicopter spinners
   * @returns {number} the number of dedicated helicopter spinners
   */
  GetDedibladeCount(): number;

  /**
   * @category Spinner
   *
   * Returns block info for the dedicated helicopter spinner.
   * @param {number} DedibladeIndex 0 is the first dedicated helicopter spinner
   * @returns {BlockInfo} a block info object for the dedicated helicopter spinner.
   */
  GetDedibladeInfo(DedibladeIndex: number): BlockInfo;

  /**
   * @category Spinner
   *
   * Returns whether the dedicated helicopter spinner is on the hull or on a SubConstruct.
   * @param {number} DedibladeIndex 0 is the first dedicated helicopter spinner
   * @returns {boolean} true if on hull
   */
  IsDedibladeOnHull(DedibladeIndex: number): boolean;

  /**
   * @category Spinner
   *
   * Set the speed factor. In continuous mode spinners this allows some blades to spin slower than others, in insta-spin blades this is related to the speed they are spinning at (1 is max speed, 0 is no speed), and in rotation spinners this does nothing.
   * @param {number} DedibladeIndex 0 is the first dedicated helicopter spinner.
   * @param {number} speedFactor 0 to 1, the fractional power output
   */
  SetDedibladeSpeedFactor(DedibladeIndex: number, speedFactor: number): void;

  /**
   * @category Spinner
   *
   * Sets the power drive. this allows heliblades to produce more force. Requires engine power. 0 removes engine use. 10 is maximum power use.
   * @param {number} DedibladeIndex 0 is the first dedicated helicopter spinner.
   * @param {number} drive the relative power use of the dedicated helicopter spinner (0 to 10).
   */
  SetDedibladePowerDrive(DedibladeIndex: number, drive: number): void;

  /**
   * @category Spinner
   *
   * Sets the speed of rotation. Changes the dedicated helicopter spinner into continuous mode. 'ContinuouseReverse' mode is not available through this interface so set the speed negative to facilitate reverse spinning.
   * @param {number} DedibladeIndex 0 is the first dedicated helicopter spinner.
   * @param {number} speed speed to rotate at. 30 is the maximum so values from -30 to 30 work.
   */
  SetDedibladeContinuousSpeed(DedibladeIndex: number, speed: number): void;

  /**
   * @category Spinner
   *
   * Spins the blades in a direction and speed determined by magnitudeAndDirection. Will set the dedicated helicopter spinner into instaspin forwards mode and will affect speed factor variable of the spinner.
   * @param {number} DedibladeIndex 0 is the first dedicated helicopter spinner.
   * @param {number} magnitudeAndDirection -1 means spin backwards full speed, 1 is spin forwards full speed
   */
  SetDedibladeInstaSpin(DedibladeIndex: number, magnitudeAndDirection: number): void;
  SetDedibladeUpFraction(DedibladeIndex: number, upFraction: number): void;
}