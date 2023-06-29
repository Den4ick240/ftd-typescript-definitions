import { FriendlyInfo } from "./friendly";

export interface IFleet {
  FleetIndex(): number;
  Fleet(): FleetInfo;
  IsFlagship(): boolean;
}

export interface FleetInfo {
  ID: number;
  Name: string;
  Flagship: FriendlyInfo;
  Members: FriendlyInfo[];
}