export interface IMisc {
  GetTerrainAltitudeForPosition(x: number, y: number, z: number): number;
  GetTerrainAltitudeForLocalPosition(x: number, y: number, z: number): number;
  GetGravityForAltitude(alt: number): Vector3;
  GetTime(): number;
  GetTimeSinceSpawn(): number;
  GetGameTime(): number;
  GetWindDirectionAndMagnitude(): Vector3;
}