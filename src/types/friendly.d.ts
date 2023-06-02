interface I {
  GetFriendlyCount(): number;
  GetFriendlyInfo(index: number): FriendlyInfo;
  GetFriendlyInfoById(id: number): FriendlyInfo;
}

interface FriendlyInfo {
  //TODO: Finish implementing this
  Valid: boolean;
  //Rotation: Quaterion;
  //ReferencePosition: Vector3;
}