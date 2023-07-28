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
  /**
   * Unique ID of the Resource Zone
   */
  Id: number;
  /**
   * Name of the Resource Zone
   */
  Name: string;
  /**
   * Position of the Resource Zone
   */
  Position: Vector3;
  /**
   * Radius of the Resource Zone
   */
  Radius: number;
  /**
   * Available resources of the Resource Zone
   */
  Resources: ResourceInfo;
}

export interface ResourceInfo {
  /**
   * Total Crystal resources.
   */
  CrystalTotal: number;
  /**
   * Max Crystal resources.
   */
  CrystalMax: number;
  /**
   * Total Metal resources.
   */
  MetalTotal: number;
  /**
   * Max Metal resources.
   */
  MetalMax: number;
  /**
   * Total Natural resources.
   */
  NaturalTotal: number;
  /**
   * Max Natural resources.
   */
  NaturalMax: number;
  /**
   * Total Oil resources.
   */
  OilTotal: number;
  /**
   * Max Oil resources.
   */
  OilMax: number;
  /**
   * Total Scrap resources.
   */
  ScrapTotal: number;
  /**
   * Max Scrap resources.
   */
  ScrapMax: number;
}