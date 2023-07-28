import { BlockInfo } from "./components";
import { MissileWarningInfo } from "./warning";

export interface IGuidance {
  /**
   * @category Guidance
   *
   * Return the number of LuaTransceivers. Each transceiver can have a number of missiles which are controllable
   * @returns {number} the number of LuaTransceivers
   */
  GetLuaTransceiverCount(): number;

  /**
   * @category Guidance
   *
   * Returns the number of missiles which that luaTransceiver has communications link to
   * @param {number} luaTransceiverIndex the index of the LuaTransceiver where 0 is the first one
   * @returns {number} the number of missiles associated with that LuaTransceiver
   */
  GetLuaControlledMissileCount(luaTransceiverIndex: number): number;

  /**
   * @category Guidance
   *
   * See the Components tab for the BlockInfo structure
   * @param {number} luaTransceiverIndex the index of the LuaTransceiver where 0 is the first one
   * @returns {BlockInfo} a BlockInfo object for the LuaTransceiver's Launchpad
   */
  GetLuaTransceiverInfo(luaTransceiverIndex: number): BlockInfo;

  /**
   * @category Guidance
   *
   * See the Missile Warning tab for the MissileWarningInfo structure
   * @param {number} luaTransceiverIndex 0 is the first one.
   * @param {number} missileIndex 0 is the first missile.
   * @returns {MissileWarningInfo} Get a MissileWarningInfo object for your missile.
   */
  GetLuaControlledMissileInfo(luaTransceiverIndex: number, missileIndex: number): MissileWarningInfo;

  /**
   * @category Guidance
   *
   * Sets the aim point. No guidance modules will help achieve this aim point so do your own predictive guidance. Needs a lua receiver component ON the missile to work.
   * @param {number} luaTransceiverIndex as above.
   * @param {number} missileIndex as above.
   * @param {number} x
   * @param {number} y
   * @param {number} z global coordinates of the aim point
   */
  SetLuaControlledMissileAimPoint(luaTransceiverIndex: number, missileIndex: number, x: number, y: number, z: number): void;

  /**
   * @category Guidance
   *
   * Explodes the missile. Needs a lua receiver component ON the missile to work.
   * @param {number} luaTransceiverIndex as above.
   * @param {number} missileIndex as above.
   */
  DetonateLuaControlledMissile(luaTransceiverIndex: number, missileIndex: number): void;

  /**
   * @category Guidance
   *
   * Find out if the missile has an interceptor capability.
   * @param {number} luaTransceiverIndex 0 is the first one
   * @param {number} missileIndex 0 is the first one
   * @returns {boolean} [bool]: true means the missile has an interceptor module, otherwise false is returned. If the missile has no lua receiver false will be returned.
   */
  IsLuaControlledMissileAnInterceptor(luaTransceiverIndex: number, missileIndex: number): boolean;

  /**
   * @category Guidance
   *
   * Set the target of an interceptor missile to be a specific missile for which a warning exists. This is enough to get the interceptor missile to behave normally but if you want to actually guide it yourself use SetLuaControlledMissileInterceptorStandardGuidanceOnOff to turn the guidance off.
   * @param {number} luaTransceiverIndex 0 is the first one
   * @param {number} missileIndex 0 is the first one,
   * @param {number} targetIndex 0 is the first missile which that mainframe has a warning for
   */
  SetLuaControlledMissileInterceptorTarget(luaTransceiverIndex: number, missileIndex: number, targetIndex: number): void;

  /**
   * @category Guidance
   *
   * Turns standard guidance for the missile on and off. Turn it off if you're going to guide the missile in yourself.
   * @param {number} luaTransceiverIndex 0 is the first one
   * @param {number} missileIndex 0 is the first one
   * @param {boolean} onOff true will use standard missile guidance to aim at the interceptors target, false will rely on SetLuaControlledMissileAimPoint for aiming coordinates.
   */
  SetLuaControlledMissileInterceptorStandardGuidanceOnOff(luaTransceiverIndex: number, missileIndex: number, onOff: boolean): void;
}
