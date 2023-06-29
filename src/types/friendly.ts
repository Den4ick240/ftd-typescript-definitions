export interface IFriendly {
  GetFriendlyCount(): number;
  GetFriendlyInfo(index: number): FriendlyInfo;
  GetFriendlyInfoById(id: number): FriendlyInfo;
}

export interface FriendlyInfo {
  Valid: boolean;
  Rotation: Quaterion;
  ReferencePosition: Vector3;
  PositiveSize: Vector3;
  NegativeSize: Vector3;
  CenterOfMass: Vector3;
  Velocity: Vector3;
  UpVector: Vector3;
  RightVector: Vector3;
  ForwardVector: Vector3;
  HealthFraction: number;
  SparesFraction: number;
  AmmoFraction: number;
  FuelFraction: number;
  EnergyFraction: number;
  PowerFraction: number;
  ElectricPowerFraction: number;
  AxisAlignedBoundingBoxMinimum: Vector3;
  AxisAlignedBoundingBoxMaximum: Vector3;
  BlueprintName: string;
  Id: number;
}