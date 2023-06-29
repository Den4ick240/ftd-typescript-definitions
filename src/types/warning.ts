export interface IWarning {
  GetNumberOfWarnings(): number;
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