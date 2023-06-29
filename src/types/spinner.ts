import { BlockInfo } from "./components";

export interface ISpinner {
  SetSpinBlockSpeedFactor(SubConstructIdentifier: number, speedFactor: number): void;
  SetSpinBlockPowerDrive(SubConstructIdentifier: number, drive: number): void;
  SetSpinBlockRotationAngle(SubConstructIdentifier: number, angle: number): void;
  SetSpinBlockContinuousSpeed(SubConstructIdentifier: number, speed: number): void;
  SetSpinBlockInstaSpin(SubConstructIdentifier: number, magnitudeAndDirection: number): void;
  GetPistonExtension(SubConstructIdentifier: number): number;
  GetPistonVelocity(SubConstructIdentifier: number): number;
  SetPistonExtension(SubConstructIdentifier: number, ExtensionDistance: number): void;
  SetPistonVelocity(SubConstructIdentifier: number, ExtensionVelocity: number): void;
  GetDedibladeCount(): number;
  GetDedibladeInfo(DedibladeIndex: number): BlockInfo;
  IsDedibladeOnHull(DedibladeIndex: number): boolean;
  SetDedibladeSpeedFactor(DedibladeIndex: number, speedFactor: number): void;
  SetDedibladePowerDrive(DedibladeIndex: number, drive: number): void;
  SetDedibladeContinuousSpeed(DedibladeIndex: number, speed: number): void;
  SetDedibladeInstaSpin(DedibladeIndex: number, magnitudeAndDirection: number): void;
  SetDedibladeUpFraction(DedibladeIndex: number, upFraction: number): void;
}