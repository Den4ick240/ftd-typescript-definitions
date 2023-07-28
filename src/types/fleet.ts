import { FriendlyInfo } from "./friendly";

export interface IFleet {
  /**
   * @category Fleet
   *
   * Returns the index of the ship in the fleet. Starts at 0.
   * @returns {number} undefined
   */
  FleetIndex(): number;

  /**
   * @category Fleet
   *
   * Returns the current state of the fleet.
   * @returns {FleetInfo} undefined
   */
  Fleet(): FleetInfo;

  /**
   * @category Fleet
   *
   * Used to determine whether the ship is a flagship of a fleet.
   * @returns {boolean} undefined
   */
  IsFlagship(): boolean;
}

export interface FleetInfo {
  ID: number;
  Name: string;
  Flagship: FriendlyInfo;
  Members: FriendlyInfo[];
}