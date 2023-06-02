/** @NoSelf */
declare class Quaterion {
  static identity: Quaterion;
  eulerAngles: Vector3;
  0: number;
  1: number;
  2: number;
  3: number;
  x: number;
  y: number;
  z: number;
  w: number;
  Set(newX: number, newY: number, newZ: number, newW: number): void;
  SetFromToRotation(fromDirection: Vector3, toDirection: Vector3): void;
  SetLookRotation(view: Vector3, up?: Vector3): void;
  ToAngleAxis(angle: number, axis: Vector3): void;
  ToString(format?: string): string;
  static Angle(a: Quaterion, b: Quaterion): number;
  static AngleAxis(angle: number, axis: Vector3): Quaterion;
  static Dot(a: Quaterion, b: Quaterion): number;
  static Euler(x: number, y: number, z: number): Quaterion;
  static FromToRotation(fromDirection: Vector3, toDirection: Vector3): Quaterion;
  static Inverse(rotation: Quaterion): Quaterion;
  static Lerp(a: Quaterion, b: Quaterion, t: number): Quaterion;
  static LerpUnclamped(a: Quaterion, b: Quaterion, t: number): Quaterion;
  static LookRotation(view: Vector3, upwards?: Vector3): Quaterion;
  static RotateTowards(from: Quaterion, to: Quaterion, maxDegreesDelta: number): Quaterion;
  static Slerp(a: Quaterion, b: Quaterion, t: number): Quaterion;
  static SlerpUnclamped(a: Quaterion, b: Quaterion, t: number): Quaterion;
  multiply: LuaMultiplicationMethod<Quaterion, Quaterion>;
}

/** @NoSelf */
declare function Quaterion(x: number, y: number, z: number, w: number): Quaterion;