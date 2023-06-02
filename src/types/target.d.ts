interface I {
  GetNumberOfMainframes(): number;
  GetNumberOfTargets(mainframeIndex: number): number;
  GetTargetInfo(mainframeIndex: number, targetIndex: number): TargetInfo;
  GetTargetPositionInfo(mainframeIndex: number, targetIndex: number): TargetPositionInfo;
  GetTargetPositionInfoForPosition(mainframeIndex: number, x: number, y: number, z: number): TargetPositionInfo;
}

interface TargetInfo {
  Valid: boolean;
  Priority: number;
  Score: number;
  AimPointPosition: Vector3;
  Team: number;
  Protected: boolean;
  Position: Vector3;
  Velocity: Vector3;
  PlayerTargetChoice: boolean;
  Id: number;
}

interface TargetPositionInfo {
  Valid: boolean;
  Azimuth: number;
  Elevation: number;
  ElevationForAltitudeComponentOnly: number;
  Range: number;
  Direction: Vector3;
  GroundDistance: number;
  AltitudeAboveSeaLevel: number;
  Position: Vector3;
  Velocity: Vector3;
}