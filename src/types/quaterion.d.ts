/**
 * Based off of Unity 2021.3 documentation (https://docs.unity3d.com/ScriptReference/Quaternion.html)
 */
declare class Quaterion {
  /**
   * @readonly
   * The identity rotation.
   * 
   * This quaternion corresponds to "no rotation" - the object is perfectly aligned with the world or parent axes.
   */
  static identity: Quaterion;
  /**
   * DO NOT USE A CONSTRUCTOR!
   * 
   * To create a new Quaterion instance, use the `Quaterion(x: number, y: number, z: number, w: number): Quaterion` function instead.
   */
  constructor();
  /**
   * Returns or sets the euler angle representation of the rotation.
   * 
   * Euler angles can represent a three dimensional rotation by performing three separate rotations around individual axes. In Unity these rotations are performed around the Z axis, the X axis, and the Y axis, in that order.
   * 
   * You can set the rotation of a Quaternion by setting this property, and you can read the Euler angle values by reading this property.
   * 
   * When using the .eulerAngles property to set a rotation, it is important to understand that although you are providing X, Y, and Z rotation values to describe your rotation, those values are not stored in the rotation. Instead, the X, Y & Z values are converted to the Quaternion's internal format.
   * 
   * When you read the .eulerAngles property, Unity converts the Quaternion's internal representation of the rotation to Euler angles. Because, there is more than one way to represent any given rotation using Euler angles, the values you read back out may be quite different from the values you assigned. This can cause confusion if you are trying to gradually increment the values to produce animation. See bottom scripting example for more information.
   * 
   * To avoid these kinds of problems, the recommended way to work with rotations is to avoid relying on consistent results when reading .eulerAngles particularly when attempting to gradually increment a rotation to produce animation. For better ways to achieve this, see the {@link multiply Quaternion * operator}.
   */
  eulerAngles: Vector3;
  /**
   * @readonly
   * @returns Quaternion with a magnitude of 1.
   * 
   * When normalized, a quaternion keeps the same orientation but its magnitude is 1.0.
   * 
   * Note that the current quaternion is unchanged and a new normalized quaternion is returned. If you want to normalize the original quaternion, use the {@link Normalize} method instead.
   * 
   * If the quaternion is too small to be normalized {@link identity} will be returned.
   * 
   * See Also: {@link Normalize} function.
   */
  normalized: Quaterion;
  /**
   * `this[int]`
   * 
   * Access the x, y, z, w components using [0], [1], [2], [3] respectively.
   */
  0: number;
  /**
   * `this[int]`
   * 
   * Access the x, y, z, w components using [0], [1], [2], [3] respectively.
   */
  1: number;
  /**
   * `this[int]`
   * 
   * Access the x, y, z, w components using [0], [1], [2], [3] respectively.
   */
  2: number;
  /**
   * `this[int]`
   * 
   * Access the x, y, z, w components using [0], [1], [2], [3] respectively.
   */
  3: number;
  /**
   * W component of the Quaternion. Do not directly modify quaternions.
   * 
   * A quaternion can represent a 3D rotation and is defined by 4 real numbers. {@link x}, {@link y} and {@link z} represent a vector. {@link w} is a scalar that stores the rotation around the vector. More details about quaternions can be located at https://scriptinghelpers.org/blog/how-to-think-about-quaternions.
   */
  w: number;
  /**
   * X component of the Quaternion. Don't modify this directly unless you know quaternions inside out.
   */
  x: number;
  /**
   * Y component of the Quaternion. Don't modify this directly unless you know quaternions inside out.
   */
  y: number;
  /**
   * Z component of the Quaternion. Don't modify this directly unless you know quaternions inside out.
   */
  z: number;
  /**
   * Set x, y, z and w components of an existing Quaternion.
   */
  Set(newX: number, newY: number, newZ: number, newW: number): void;
  /**
   * Creates a rotation which rotates from `fromDirection` to `toDirection`.
   * 
   * Use this to create a rotation which starts at the first Vector (fromDirection) and rotates to the second Vector (toDirection). These Vectors must be set up in a script.
   */
  SetFromToRotation(fromDirection: Vector3, toDirection: Vector3): void;
  /**
   * Creates a rotation with the specified `forward` and `upwards` directions.
   * 
   * The result is applied to this quaternion. If used to orient a Transform, the Z axis will be aligned with `forward` and the Y axis with `upwards`, assuming these vectors are orthogonal. Logs an error if the forward direction is zero.
   * 
   * See Also: {@link LookRotation}.
   * 
   * @param view The direction to look in.
   * @param up The vector that defines in which direction up is.
   */
  SetLookRotation(view: Vector3, up?: Vector3): void;
  /**
   * Converts a rotation to angle-axis representation (angles in degrees).
   */
  ToAngleAxis(angle: number, axis: Vector3): void;
  /**
   * Returns a formatted string for this quaternion.
   * 
   * Defaults to five digits displayed (format="F5"). For more information, see Microsoft's documentation on {@link https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings#FFormatString Standard numeric format strings}.
   * 
   * @param format A numeric format string.
   */
  ToString(format?: string): string;
  /**
   * Example: Think of two GameObjects (A and B) moving around a third GameObject (C). Lines from C to A and C to B create a triangle which can change over time. The angle between CA and CB is the value {@link Angle} provides.
   * 
   * @returns Angle in degrees between two rotations `a` and `b`.
   */
  static Angle(a: Quaterion, b: Quaterion): number;
  /**
   * Creates a rotation which rotates `angle` degrees around `axis`.
   * 
   * For more information see {@link https://docs.unity3d.com/Manual/QuaternionAndEulerRotationsInUnity.html Rotation and Orientation in Unity}. The magnitude of the axis parameter is not applied.
   */
  static AngleAxis(angle: number, axis: Vector3): Quaterion;
  /**
   * The dot product between two rotations.
   */
  static Dot(a: Quaterion, b: Quaterion): number;
  /**
   * @returns Rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis; applied in that order.
   * 
   * For more information, see {@link https://docs.unity3d.com/Manual/QuaternionAndEulerRotationsInUnity.html Rotation and Orientation in Unity}.
   */
  static Euler(x: number, y: number, z: number): Quaterion;
  /**
   * @returns Rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis.
   */
  static Euler(euler: Vector3): Quaterion;
  /**
   * Creates a rotation which rotates from `fromDirection` to `toDirection`.
   * 
   * Usually you use this to rotate a transform so that one of its axes eg. the y-axis - follows a target direction `toDirection` in world space.
   */
  static FromToRotation(fromDirection: Vector3, toDirection: Vector3): Quaterion;
  /**
   * @returns Inverse of `rotation`.
   */
  static Inverse(rotation: Quaterion): Quaterion;
  /**
   * Interpolates between `a` and `b` by `t` and normalizes the result afterwards. The parameter `t` is clamped to the range [0, 1].
   * 
   * This is faster than Slerp but looks worse if the rotations are far apart.
   * 
   * @param a Start value, returned when t = 0.
   * @param b End value, returned when t = 1.
   * @param t Interpolation ratio.
   * @returns A quaternion interpolated between quaternions a and b. 
   */
  static Lerp(a: Quaterion, b: Quaterion, t: number): Quaterion;
  /**
   * Interpolates between `a` and `b` by `t` and normalizes the result afterwards. The parameter `t` is not clamped.
   * 
   * This is faster than Slerp but looks worse if the rotations are far apart.
   * 
   * See Also: {@link Lerp}, {@link SlerpUnclamped}.
   */
  static LerpUnclamped(a: Quaterion, b: Quaterion, t: number): Quaterion;
  /**
   * Creates a rotation with the specified `forward` and `upwards` directions.
   * 
   * Z axis will be aligned with `forward`, X axis aligned with cross product between `forward` and `upwards`, and Y axis aligned with cross product between Z and X.
   * 
   * Returns identity if the magnitude of `forward` is zero.
   * 
   * If `forward` and `upwards` are colinear, or if the magnitude of `upwards` is zero, the result is the same as {@link FromToRotation} with `fromDirection` set to the positive Z-axis (0, 0, 1) and `toDirection` set to the normalized `forwards` direction.
   * 
   * See Also: {@link SetLookRotation}.
   * 
   * @param forward The direction to look in.
   * @param upwards The vector that defines in which direction up is.
   */
  static LookRotation(forward: Vector3, upwards?: Vector3): Quaterion;
  /**
   * Converts this quaternion to one with the same orientation but with a magnitude of 1.
   * 
   * When normalized, a quaternion keeps the same orientation but its magnitude is 1.0.
   * 
   * Note that this method will change the current quaternion. If you want to keep the current quaternion unchanged, use the {@link normalized} property instead.
   * 
   * If this quaternion is too small to be normalized it will be set to {@link identity}.
   * 
   * See Also: {@link normalized} variable.
   */
  static Normalize(q: Quaterion): Quaterion;
  /**
   * Rotates a rotation `from` towards `to`.
   * 
   * The `from` quaternion is rotated towards `to` by an angular step of `maxDegreesDelta` (but note that the rotation will not overshoot). Negative values of `maxDegreesDelta` will move away from `to` until the rotation is exactly the opposite direction.
   */
  static RotateTowards(from: Quaterion, to: Quaterion, maxDegreesDelta: number): Quaterion;
  /**
   * Spherically interpolates between quaternions `a` and `b` by ratio `t`. The parameter `t` is clamped to the range [0, 1].
   * 
   * Use this to create a rotation which smoothly interpolates between the first quaternion `a` to the second quaternion `b`, based on the value of the parameter `t`. If the value of the parameter is close to 0, the output will be close to `a`, if it is close to 1, the output will be close to `b`.
   * 
   * See Also: {@link Lerp}, {@link SlerpUnclamped}.
   * 
   * @param a Start value, returned when t = 0.
   * @param b End value, returned when t = 1.
   * @param t Interpolation ratio.
   * @returns A quaternion spherically interpolated between quaternions a and b. 
   */
  static Slerp(a: Quaterion, b: Quaterion, t: number): Quaterion;
  /**
   * Spherically interpolates between `a` and `b` by t. The parameter `t` is not clamped.
   * 
   * See Also: {@link LerpUnclamped}, {@link Slerp}.
   */
  static SlerpUnclamped(a: Quaterion, b: Quaterion, t: number): Quaterion;
  /**
   * Combines rotations `lhs` and `rhs`.
   * 
   * This is a special operation requiring typescript code to treat this as a function (think of this as `multiply(rhs: Quaternion): Quaternion`). This will be transformed by `tstl` into `lhs * rhs` in the generated lua output.
   * 
   * Rotating by the product `lhs` * `rhs` is the same as applying the two rotations in sequence: `lhs` first and then `rhs`, relative to the reference frame resulting from `lhs` rotation. Note that this means rotations are not commutative, so `lhs` * `rhs` does not give the same rotation as `rhs` * `lhs`.
   * 
   * @param lhs Left-hand side quaternion.
   * @param rhs Right-hand side quaternion.
   */
  multiply: LuaMultiplicationMethod<Quaterion, Quaterion>;
}

declare function Quaterion(x: number, y: number, z: number, w: number): Quaterion;