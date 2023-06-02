interface I {
  ResourceZones(): ResourceZoneInfo[];
  Resources(): ResourceInfo;
}

interface ResourceZoneInfo {
  Id: number;
  Name: string;
  Position: Vector3;
  Radius: number;
  Resources: ResourceInfo;
}

interface ResourceInfo {
  CrystalTotal: number;
  CrystalMax: number;
  MetalTotal: number;
  MetalMax: number;
  NaturalTotal: number;
  NaturalMax: number;
  OilTotal: number;
  OilMax: number;
  ScrapTotal: number;
  ScrapMax: number;
}