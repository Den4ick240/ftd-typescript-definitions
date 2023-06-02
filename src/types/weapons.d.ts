import { WeaponType } from "../enums/weapons";
import { BlockInfo } from "./components";

interface I {
  GetWeaponCount(): number;
  GetWeaponInfo(weaponIndex: number): WeaponInfo;
  GetWeaponConstraints(weaponIndex: number): WeaponConstraints;
  GetWeaponBlockInfo(weaponIndex: number): BlockInfo;
  AimWeaponInDirection(weaponIndex: number, x: number, y: number, z: number, weaponSlot: number): number;
  FireWeapon(weaponIndex: number, weaponSlot: number): boolean;
  GetWeaponCountOnSubConstruct(SubConstructIdentifier: number): number;
  GetWeaponInfoOnSubConstruct(SubConstructIdentifier: number, weaponIndex: number): WeaponInfo;
  GetWeaponConstraintsOnSubConstruct(SubConstructIdentifier: number, weaponIndex: number): WeaponConstraints;
  GetWeaponBlockInfoOnSubConstruct(SubConstructIdentifier: number, weaponIndex: number): BlockInfo;
  AimWeaponInDirectionOnSubConstruct(SubConstructIdentifier: number, weaponIndex: number, x: number, y: number, z: number, weaponSlot: number): number;
  FireWeaponOnSubConstruct(SubConstructIdentifier: number, weaponIndex: number, weaponSlot: number): boolean;
}

interface WeaponInfo {
  Valid: boolean;
  LocalPosition: Vector3;
  GlobalPosition: Vector3;
  LocalFirePoint: Vector3;
  GlobalFirePoint: Vector3;
  Speed: number;
  CurrentDirection: Vector3;
  WeaponType: WeaponType;
  WeaponSlot: number;
  WeaponSlotMask: number;
  PlayerCurrentlyControllingIt: boolean;
}

interface WeaponConstraints {
  Valid: boolean;
  MinAzimuth: number;
  MaxAzimuth: number;
  MinElevation: number;
  MaxElevation: number;
  FlipAzimuth: boolean;
  InParentConstructSpace: boolean;
}