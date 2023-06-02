import { BlockInfo } from "./components";

interface I {
  GetAllSubconstructsCount(): number;
  GetSubConstructIdentifier(index: number): number;
  GetSubconstructsChildrenCount(SubConstructIdentifier: number): number;
  GetSubConstructChildIdentifier(SubConstructIdentifier: number, index: number): number;
  GetParent(SubConstructIdentifier: number): number;
  IsTurret(SubConstructIdentifier: number): boolean;
  IsSpinBlock(SubConstructIdentifier: number): boolean;
  IsPiston(SubConstructIdentifier: number): boolean;
  IsAlive(SubConstructIdentifier: number): boolean;
  IsSubConstructOnHull(SubConstructIdentifier: number): boolean;
  GetSubConstructInfo(SubConstructIdentifier: number): BlockInfo;
  GetSubConstructIdleRotation(SubConstructIdentifier: number): Quaterion;
}