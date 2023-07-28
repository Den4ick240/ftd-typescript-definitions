import { WeaponType } from "../enums/weapons";
import { BlockInfo } from "./components";

export interface IWeapons {
  /**
   * @category Weapons
   *
   * Get the number of weapons on the hull. Knowing is number is useful for when you want to call GetWeaponInfo(i) to find out weapon information.
   * @returns {number} the number of weapons on the hull- doesn't include weapons on the turrets but does include the turrets themselves.
   */
  GetWeaponCount(): number;

  /**
   * @category Weapons
   *
   * Gets weapon information for a specific weapon. Useful to figure out what sort of weapon is present.
   * @param {number} weaponIndex the index of the weapon you want information on. 0 is the first weapon.
   * @returns {WeaponInfo} information on the weapon. weaponInfo.Valid is false if you ask for an invalid weaponIndex.
   */
  GetWeaponInfo(weaponIndex: number): WeaponInfo;

  /**
   * @category Weapons
   *
   * Gets field-of-fire constrains information for a specific weapon.
   * @param {number} weaponIndex the index of the weapon you want the constraints off. 0 is the first weapon.
   * @returns {WeaponConstraints} information on the field-of-fire constraints of the weapon.
   */
  GetWeaponConstraints(weaponIndex: number): WeaponConstraints;

  /**
   * @category Weapons
   *
   * Gets the block information for a specific weapon.
   * @param {number} weaponIndex the index of the weapon you want information on. 0 is the first weapon.
   * @returns {BlockInfo} the block inforamation of the main component of the weapon. See 'Components' for information on BlockInfo.
   */
  GetWeaponBlockInfo(weaponIndex: number): BlockInfo;

  /**
   * @category Weapons
   *
   * Aims a weapon in a specific direction. For a turret this will aim all weapons on the turret as well as the turret itself.
   * @param {number} weaponIndex 0 is the first weapon.
   * @param {number} x
   * @param {number} y
   * @param {number} z the world coordinate scheme direction components to point in. They don't need to be normalised.
   * @param {number} weaponSlot 0 for all, otherwise 1 to 5.
   * @returns {number} the number of weapons that can fire in this direction. 0 for none.
   */
  AimWeaponInDirection(weaponIndex: number, x: number, y: number, z: number, weaponSlot: number): number;

  /**
   * @category Weapons
   *
   * Fires a specific weapon. It's important for most weapons that you aim them first as they won't fire if they can't fire in the direction they are aimed.
   * @param {number} weaponIndex 0 is the first weapon.
   * @param {number} weaponSlot 0 will control all weapons
   * @returns {boolean} has any weapon fired? will be true if so.
   */
  FireWeapon(weaponIndex: number, weaponSlot: number): boolean;

  /**
   * @category Weapons
   *
   * return the number of weapons on the turret or spinner. If you wanted to control the turret itself then note that it is treated as a hull mounted weapon.
   * @param {number} SubConstructIdentifier This identifier never change in the blueprint, use the SubConstructs-related functions to get it.
   * @returns {number} the number of weapons on this turret or spinner, not including the turret itself
   */
  GetWeaponCountOnSubConstruct(SubConstructIdentifier: number): number;

  /**
   * @category Weapons
   *
   * Get weapon info of a weapon on a turret or spinner
   * @param {number} SubConstructIdentifier This identifier never change in the blueprint, use the SubConstructs-related functions to get it.
   * @param {number} weaponIndex the index of the weapon. 0 is the first one.
   * @returns {WeaponInfo} a WeaponInfo object. See above for the definition of this structure. Note that changes to this structure in LUA do not affect the weapon itself.
   */
  GetWeaponInfoOnSubConstruct(SubConstructIdentifier: number, weaponIndex: number): WeaponInfo;

  /**
   * @category Weapons
   *
   * Gets field-of-fire constrains information for a specific weapon.
   * @param {number} SubConstructIdentifier This identifier never change in the blueprint, use the SubConstructs-related functions to get it.
   * @param {number} weaponIndex the index of the weapon. 0 is the first one.
   * @returns {WeaponConstraints} information on the field-of-fire constraints of the weapon.
   */
  GetWeaponConstraintsOnSubConstruct(SubConstructIdentifier: number, weaponIndex: number): WeaponConstraints;

  /**
   * @category Weapons
   *
   * Gets the block information for a specific weapon.
   * @param {number} SubConstructIdentifier This identifier never change in the blueprint, use the SubConstructs-related functions to get it.
   * @param {number} weaponIndex the index of the weapon. 0 is the first one.
   * @returns {BlockInfo} the block inforamation of the main component of the weapon. See 'Components' for information on BlockInfo.
   */
  GetWeaponBlockInfoOnSubConstruct(SubConstructIdentifier: number, weaponIndex: number): BlockInfo;

  /**
   * @category Weapons
   *
   * Aims a specific weapon on the turret without aiming the turret
   * @param {number} SubConstructIdentifier  is the SubConstruct identifier. For the other parameters, see 'AimWeaponInDirection'
   * @param {number} weaponIndex
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} weaponSlot
   * @returns {number} as per AimWeaponInDirection
   */
  AimWeaponInDirectionOnSubConstruct(SubConstructIdentifier: number, weaponIndex: number, x: number, y: number, z: number, weaponSlot: number): number;

  /**
   * @category Weapons
   *
   * Fires a specific weapon. It's important for most weapons that you aim them first as they won't fire if they can't fire in the direction they are aimed.
   * @param {number} SubConstructIdentifier  is the SubConstruct identifier. For the other parameters, see 'FireWeapon'
   * @param {number} weaponIndex
   * @param {number} weaponSlot
   * @returns {boolean} has any weapon fired? will be true if so.
   */
  FireWeaponOnSubConstruct(SubConstructIdentifier: number, weaponIndex: number, weaponSlot: number): boolean;
}

export interface WeaponInfo {
  /**
   * false means this WeaponInfo packet is useless. Move onto the next valid one.
   */
  Valid: boolean;
  /**
   * the local position in the vehicle of the weapon. x is right, y is up and z is forwards.
   */
  LocalPosition: Vector3;
  /**
   * the global position of the weapon. x is East, y is Up and Z is North.
   */
  GlobalPosition: Vector3;
  /**
   * the local position in the vehicle where the projectile or laser will be created.
   */
  LocalFirePoint: Vector3;
  /**
   * the global position in the world where the projectile or laser will be created.
   */
  GlobalFirePoint: Vector3;
  /**
   * the speed in meters per second of the weapon- approximately correct for most weapon types.
   */
  Speed: number;
  /**
   * the direction in global coordinate system that the weapon is facing
   */
  CurrentDirection: Vector3;
  /**
   * the type of the weapon. cannon = 0,missile = 1 ,laser = 2,harpoon = 3,turret = 4,missilecontrol = 5,fireControlComputer  =6
   */
  WeaponType: WeaponType;
  /**
   * the weapon slot of the weapon itself. 0 -> 5.
   */
  WeaponSlot: number;
  /**
   * the weapon slot bit mask. The rightmost bit represents 'ALL' and is always on, and the second bit represents slot 1, etc. (for example 100111 will respond to slots All, 1, 2, and 5)
   */
  WeaponSlotMask: number;
  /**
   * true if the player is controlling this weapon at the moment
   */
  PlayerCurrentlyControllingIt: boolean;
}

export interface WeaponConstraints {
  /**
   * false means this WeaponConstraints packet is useless. Move onto the next valid one.
   */
  Valid: boolean;
  /**
   * the minimum azimuth angle in degrees.
   */
  MinAzimuth: number;
  /**
   * the maximum azimuth angle in degrees.
   */
  MaxAzimuth: number;
  /**
   * the minimum elevation angle in degrees.
   */
  MinElevation: number;
  /**
   * the maximum elevation angle in degrees.
   */
  MaxElevation: number;
  /**
   * true if the 'Flip azimuth constraints' toggle is selected.
   */
  FlipAzimuth: boolean;
  /**
   * true if the 'Set the restrictions in the parent construct space' toggle is selected.
   */
  InParentConstructSpace: boolean;
}