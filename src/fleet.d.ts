interface I {
  FleetIndex(): number;
  Fleet(): FleetInfo;
  IsFlagship(): boolean;
}

interface FleetInfo {
  ID: number;
  Name: string;
  Flagship: FriendlyInfo;
  Members: FriendlyInfo[];
}