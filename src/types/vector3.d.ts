/** @NoSelf */
declare class Vector3 {
  static back: Vector3;
  static down: Vector3;
  static forward: Vector3;
  static left: Vector3;
  static negativeInfinity: Vector3;
  static one: Vector3;
  static positiveInfinity: Vector3;
  static right: Vector3;
  static up: Vector3;
  static zero: Vector3;
  magnitude: number;
  normalized: number;
  sqrMagnitude: number;
  0: number;
  1: number;
  2: number;
  x: number;
  y: number;
  z: number;
  Equals(other: Vector3): boolean;
  Set(newX: number, newY: number, newZ: number): void;
  ToString(format?: string): string;
  static Angle(from: Vector3, to: Vector3): number;
  static ClampMagnitude(vector: Vector3, maxLength: number): Vector3;
  static Cross(lhs: Vector3, rhs: Vector3): Vector3;
  static Distance(a: Vector3, b: Vector3): number;
  static Dot(lhs: Vector3, rhs: Vector3): number;
  static Lerp(lhs: Vector3, rhs: Vector3, t: number): Vector3;
  static LerpUnclamped(lhs: Vector3, rhs: Vector3, t: number): Vector3;
  static Max(lhs: Vector3, rhs: Vector3): Vector3;
  static Min(lhs: Vector3, rhs: Vector3): Vector3;
  static MoveTowards(current: Vector3, target: Vector3, maxDistanceDelta: number): Vector3;
  static Normalize(value: Vector3): Vector3;
  static OrthoNormalize(normal: Vector3, tangent: Vector3): void;
  static Project(vector: Vector3, onNormal: Vector3): Vector3;
  static ProjectOnPlane(vector: Vector3, planeNormal: Vector3): Vector3;
  static Reflect(inDirection: Vector3, inNormal: Vector3): Vector3;
  static RotateTowards(current: Vector3, target: Vector3, maxRadiansDelta: number, maxMagnitudeDelta: number): Vector3;
  static Scale(a: Vector3, b: Vector3): Vector3;
  static SignedAngle(from: Vector3, to: Vector3, axis: Vector3): number;
  static Slerp(a: Vector3, b: Vector3, t: number): Vector3;
  static SlerpUnclamped(a: Vector3, b: Vector3, t: number): Vector3;
  static SmoothDamp(current: Vector3, target: Vector3, currentVelocity: Vector3, smoothTime: number, maxSpeed?: number, deltaTime?: number): number;
  add: LuaAdditionMethod<Vector3, Vector3>;
  subtract: LuaSubtractionMethod<Vector3, Vector3>;
  multiply: LuaMultiplicationMethod<number, Vector3>;
  divide: LuaDivisionMethod<number, Vector3>;
}

/** @NoSelf */
declare function Vector3(x: number, y: number, z: number): Vector3;