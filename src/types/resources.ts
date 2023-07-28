export interface IResources {
  /**
   * @category Resources
   *
   * Returns a Lua table containing a list of known resource zones.
   * @returns {ResourceZoneInfo[]} undefined
   */
  ResourceZones(): ResourceZoneInfo[];

  /**
   * @category Resources
   *
   * Returns information about a ship's available resources.
   * @returns {ResourceInfo} undefined
   */
  Resources(): ResourceInfo;
}

export interface ResourceZoneInfo {
  Id: number;
  Name: string;
  Position: Vector3;
  Radius: number;
  Resources: ResourceInfo;
}

export interface ResourceInfo {
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