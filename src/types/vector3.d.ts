declare class Vector3 {
  /**
   * Shorthand for writing `Vector3(0, 0, -1)`.
   */
  static back: Vector3;
  /**
   * Shorthand for writing `Vector3(0, -1, 0)`.
   */
  static down: Vector3;
  /**
   * Shorthand for writing `Vector3(0, 0, 1)`.
   */
  static forward: Vector3;
  /**
   * Shorthand for writing `Vector3(-1, 0, 0)`.
   */
  static left: Vector3;
  /**
   * Shorthand for writing `Vector3(Mathf.NegativeInfinity, Mathf.NegativeInfinity, Mathf.NegativeInfinity)`.
   */
  static negativeInfinity: Vector3;
  /**
   * Shorthand for writing `Vector3(1, 1, 1)`.
   */
  static one: Vector3;
  /**
   * Shorthand for writing `Vector3(Mathf.Infinity, Mathf.Infinity, Mathf.Infinity)`.
   */
  static positiveInfinity: Vector3;
  /**
   * Shorthand for writing `Vector3(1, 0, 0)`.
   */
  static right: Vector3;
  /**
   * Shorthand for writing `Vector3(0, 1, 0)`.
   */
  static up: Vector3;
  /**
   * Shorthand for writing `Vector3(0, 0, 0)`.
   */
  static zero: Vector3;
  /**
   * DO NOT USE A CONSTRUCTOR!
   * 
   * To create a new Vector3 instance, use the `Vector3(x: number, y: number, z: number): Vector3` function instead.
   */
  constructor();
  magnitude: number;
  normalized: number;
  sqrMagnitude: number;
  /**
   * `this[int]`
   * 
   * Access the x, y, z components using [0], [1], [2] respectively.
   */
  0: number;
  /**
   * `this[int]`
   * 
   * Access the x, y, z components using [0], [1], [2] respectively.
   */
  1: number;
  /**
   * `this[int]`
   * 
   * Access the x, y, z components using [0], [1], [2] respectively.
   */
  2: number;
  /**
   * X component of the vector.
   * 
   * Use this to modify or return the X component of a vector.
   */
  x: number;
  /**
   * Y component of the vector.
   * 
   * Use this to modify or return the Y component of a vector.
   */
  y: number;
  /**
   * Z component of the vector.
   * 
   * Use this to modify or return the Z component of a vector.
   */
  z: number;
  /**
   * Returns true if the given vector is exactly equal to this vector.
   * 
   * Due to floating point inaccuracies, this might return false for vectors which are essentially (but not exactly) equal. Use the == operator to test two vectors for approximate equality.
   */
  Equals(other: Vector3): boolean;
  /**
   * Set x, y and z components of an existing Vector3.
   */
  Set(newX: number, newY: number, newZ: number): void;
  /**
   * Returns a formatted string for this vector.
   * 
   * Defaults to two digits displayed (format="F2"). For more information, see Microsoft's documentation on {@link https://docs.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings#FFormatString Standard numeric format strings}.
   * 
   * @param format A numeric format string.
   */
  ToString(format?: string): string;
  /**
   * Calculates the angle between vectors from and to.
   * 
   * The angle returned is the angle of rotation from the first vector to the second, when treating these two vector inputs as directions.
   * Note: The angle returned will always be between 0 and 180 degrees, because the method returns the smallest angle between the vectors. That is, it will never return a reflex angle.
   * 
   * @param from The vector from which the angular difference is measured.
   * @param to The vector to which the angular difference is measured.
   * @returns The angle in degrees between the two vectors.
   */
  static Angle(from: Vector3, to: Vector3): number;
  /**
   * @returns Copy of `vector` with its magnitude clamped to `maxLength`.
   */
  static ClampMagnitude(vector: Vector3, maxLength: number): Vector3;
  /**
   * Cross Product of two vectors.
   * 
   * The cross product of two vectors results in a third vector which is perpendicular to the two input vectors. The result's magnitude is equal to the magnitudes of the two inputs multiplied together and then multiplied by the sine of the angle between the inputs. You can determine the direction of the result vector using the "left hand rule".
   */
  static Cross(lhs: Vector3, rhs: Vector3): Vector3;
  /**
   * `Vector3.Distance(a,b)` is the same as `(a-b).magnitude`.
   * 
   * @returns Distance between `a` and `b`.
   */
  static Distance(a: Vector3, b: Vector3): number;
  /**
   * Dot Product of two vectors.
   * 
   * The dot product is a float value equal to the magnitudes of the two vectors multiplied together and then multiplied by the cosine of the angle between them.
   * 
   * For {@link normalized} vectors Dot returns 1 if they point in exactly the same direction, -1 if they point in completely opposite directions and zero if the vectors are perpendicular.
   */
  static Dot(lhs: Vector3, rhs: Vector3): number;
  /**
   * Linearly interpolates between two points.
   * 
   * Interpolates between the points `a` and `b` by the interpolant `t`. The parameter `t` is clamped to the range [0, 1]. This is most commonly used to find a point some fraction of the way along a line between two endpoints (e.g. to move an object gradually between those points).
   * 
   * The value returned equals `a + (b - a) * t` (which can also be written `a * (1-t) + b * t`).
   * When `t` = 0, `Vector3.Lerp(a, b, t)` returns `a`.
   * When `t` = 1, `Vector3.Lerp(a, b, t)` returns `b`.
   * When `t` = 0.5, `Vector3.Lerp(a, b, t)` returns the point midway between `a` and `b`.
   * 
   * @param a Start value, returned when t = 0.
   * @param b End value, returned when t = 1.
   * @param t Value used to interpolate between a and b.
   */
  static Lerp(a: Vector3, b: Vector3, t: number): Vector3;
  /**
   * Linearly interpolates between two vectors.
   * 
   * Interpolates between the vectors `a` and `b` by the interpolant `t`. This is most commonly used to find a point some fraction of the way along a line between two endpoints (e.g. to move an object gradually between those points).
   * 
   * When `t` = 0 returns `a`. When `t` = 1 returns `b`. When `t` = 0.5 returns the point midway between `a` and `b`.
   * 
   * See Also: {@link Lerp}.
   */
  static LerpUnclamped(a: Vector3, b: Vector3, t: number): Vector3;
  /**
   * See Also: {@link Min} function.
   * 
   * @returns Vector that is made from the largest components of two vectors.
   */
  static Max(lhs: Vector3, rhs: Vector3): Vector3;
  /**
   * See Also: {@link Max} function.
   * 
   * @returns Vector that is made from the smallest components of two vectors.
   */
  static Min(lhs: Vector3, rhs: Vector3): Vector3;
  /**
   * Calculate a position between the points specified by `current` and `target`, moving no farther than the distance specified by `maxDistanceDelta`.
   * 
   * Use the {@link MoveTowards} member to move an object at the `current` position toward the `target` position. By updating an object’s position each frame using the position calculated by this function, you can move it towards the target smoothly. Control the speed of movement with the `maxDistanceDelta` parameter. If the `current` position is already closer to the `target` than `maxDistanceDelta`, the value returned is equal to `target`; the new position does not overshoot `target`. To make sure that object speed is independent of frame rate, multiply the `maxDistanceDelta` value by Time.deltaTime (or Time.fixedDeltaTime in a FixedUpdate loop).
   * 
   * Note that if you set `maxDistanceDelta` to a negative value, this function returns a position in the opposite direction from the `target`.
   * 
   * @param current The position to move from.
   * @param target The position to move towards.
   * @param maxDistanceDelta Distance to move `current` per call.
   * @returns The new position.
   */
  static MoveTowards(current: Vector3, target: Vector3, maxDistanceDelta: number): Vector3;
  /**
   * Makes this vector have a magnitude of 1.
   * 
   * When normalized, a vector keeps the same direction but its length is 1.0.
   * 
   * Note that this function will change the current vector. If you want to keep the current vector unchanged, use {@link normalized} variable.
   * 
   * If this vector is too small to be normalized it will be set to zero.
   * 
   * See Also: {@link normalized} property.
   */
  static Normalize(value: Vector3): Vector3;
  /**
   * Makes vectors normalized and orthogonal to each other.
   * 
   * Normalizes `normal`. Normalizes `tangent` and makes sure it is orthogonal to `normal` (that is, angle between them is 90 degrees).
   * 
   * See Also: {@link Normalize} function.
   */
  static OrthoNormalize(normal: Vector3, tangent: Vector3): void;
  /**
   * Makes vectors normalized and orthogonal to each other.
   * 
   * Normalizes `normal`. Normalizes `tangent` and makes sure it is orthogonal to `normal`. Normalizes `binormal` and makes sure it is orthogonal to both `normal` and `tangent`.
   * 
   * Points in space are usually specified with coordinates in the standard XYZ axis system. However, you can interpret any three vectors as "axes" if they are normalized (ie, have a magnitude of 1) and are orthogonal (ie, perpendicular to each other).
   * 
   * Creating your own coordinate axes is useful, say, if you want to scale a mesh in arbitrary directions rather than just along the XYZ axes - you can transform the vertices to your own coordinate system, scale them and then transform back. Often, a transformation like this will be carried out along only one axis while the other two are either left as they are or treated equally. For example, a stretching effect can be applied to a mesh by scaling up on one axis while scaling down proportionally on the other two. This means that once the first axis vector is specified, it doesn't greatly matter what the other two are as long as they are normalized and orthogonal. OrthoNormalize can be used to ensure the first vector is normal and then generate two normalized, orthogonal vectors for the other two axes.
   * 
   * See Also: {@link Normalize} function.
   */
  static OrthoNormalize(normal: Vector3, tangent: Vector3, binormal: Vector3): void;
  /**
   * Projects a vector onto another vector.
   * 
   * To understand vector projection, imagine that `onNormal` is resting on a line pointing in its direction. Somewhere along that line will be the nearest point to the tip of `vector`. The projection is just `onNormal` rescaled so that it reaches that point on the line.
   * 
   * The function will return a zero vector if `onNormal` is almost zero.
   * 
   * An example of the usage of projection is a rail-mounted gun that should slide so that it gets as close as possible to a target object. The projection of the target heading along the direction of the rail can be used to move the gun by applying a force to a rigidbody, say.
   */
  static Project(vector: Vector3, onNormal: Vector3): Vector3;
  /**
   * Projects a vector onto a plane defined by a normal orthogonal to the plane.
   * 
   * A Vector3 stores the position of the given vector in 3d space. A second Vector3 is given by `planeNormal` and defines a direction from a plane towards vector that passes through the origin. {@link ProjectOnPlane} uses the two Vector3 values to generate the position of vector in the `planeNormal` direction, and return the location of the Vector3 on the plane.
   * 
   * @param vector The location of the vector above the plane.
   * @param planeNormal The direction from the vector towards the plane. 
   * @returns  The location of the vector on the plane.
   */
  static ProjectOnPlane(vector: Vector3, planeNormal: Vector3): Vector3;
  /**
   * Reflects a vector off the plane defined by a normal.
   * 
   * The `inNormal` vector defines a plane (a plane's normal is the vector that is perpendicular to its surface). the `inDirection` vector is treated as a directional arrow coming in to the plane. The returned value is a vector of equal magnitude to `inDirection` but with its direction reflected.
   */
  static Reflect(inDirection: Vector3, inNormal: Vector3): Vector3;
  /**
   * Rotates a vector `current` towards `target`.
   * 
   * This function is similar to {@link MoveTowards} except that the vector is treated as a direction rather than a position. The `current` vector will be rotated round toward the `target` direction by an angle of `maxRadiansDelta`, although it will land exactly on the target rather than overshoot. If the magnitudes of `current` and `target` are different, then the magnitude of the result will be linearly interpolated during the rotation. If a negative value is used for `maxRadiansDelta`, the vector will rotate away from `target` until it is pointing in exactly the opposite direction, then stops.
   * 
   * @param current The vector being managed.
   * @param target The vector.
   * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
   * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
   * @returns The location that RotateTowards generates. 
   */
  static RotateTowards(current: Vector3, target: Vector3, maxRadiansDelta: number, maxMagnitudeDelta: number): Vector3;
  /**
   * Multiplies two vectors component-wise.
   * 
   * Every component in the result is a component of `a` multiplied by the same component of `b`.
   */
  static Scale(a: Vector3, b: Vector3): Vector3;
  /**
   * Multiplies every component of this vector by the same component of `scale`.
   */
  static Scale(scale: Vector3): Vector3;
  /**
   * Calculates the signed angle between vectors `from` and `to` in relation to `axis`.
   * 
   * The angle returned is the angle of rotation from the first vector to the second, when treating these first two vector inputs as directions. These two vectors also define the plane of rotation, meaning they are parallel to the plane. This means the axis of rotation around which the angle is calculated is the cross product of the first and second vectors (and not the 3rd "axis" parameter). You can use the "left hand rule" to determine the axis of rotation, given the two input vectors. The third input (named the “axis” parameter), gives you a way to provide a contextual direction to include in the calculation. This has the result of flipping the sign of the result depending on whether this third vector that you supply falls above or below the plane of rotation defined by the first two input vectors. Therefore the sign of the final result depends on two things: the order in which you supply the "from" and "to" vector, and the direction of the third "axis" vector.
   * 
   * Note: The angle returned will always be between -180 and 180 degrees, because the method returns the smallest angle between the vectors. That is, it will never return a reflex angle.
   * 
   * @param from The vector from which the angular difference is measured.
   * @param to The vector to which the angular difference is measured.
   * @param axis A vector around which the other vectors are rotated.
   * @return The signed angle between from and to in degrees. 
   */
  static SignedAngle(from: Vector3, to: Vector3, axis: Vector3): number;
  /**
   * Spherically interpolates between two vectors.
   * 
   * Interpolates between `a` and `b` by amount `t`. The difference between this and linear interpolation (aka, "lerp") is that the vectors are treated as directions rather than points in space. The direction of the returned vector is interpolated by the angle and its {@link magnitude} is interpolated between the magnitudes of `from` and `to`.
   * 
   * The parameter t is clamped to the range [0, 1].
   */
  static Slerp(a: Vector3, b: Vector3, t: number): Vector3;
  /**
   * Spherically interpolates between two vectors.
   * 
   * Interpolates between `a` and `b` by amount `t`. The difference between this and linear interpolation (aka, "lerp") is that the vectors are treated as directions rather than points in space. The direction of the returned vector is interpolated by the angle and its {@link magnitude} is interpolated between the magnitudes of `from` and `to`.
   * 
   * Note: This static method can slerp beyond the `a` and `b` vectors. This means `t` can be less than zero or greater than one.
   * 
   * See Also: {@link Slerp}.
   */
  static SlerpUnclamped(a: Vector3, b: Vector3, t: number): Vector3;
  /**
   * Gradually changes a vector towards a desired goal over time.
   * 
   * The vector is smoothed by some spring-damper like function, which will never overshoot. The most common use is for smoothing a follow camera.
   * 
   * @param current The current position.
   * @param target The position we are trying to reach.
   * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
   * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
   * @param maxSpeed Optionally allows you to clamp the maximum speed.
   * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
   */
  static SmoothDamp(current: Vector3, target: Vector3, currentVelocity: Vector3, smoothTime: number, maxSpeed?: number, deltaTime?: number): number;
  /**
   * Adds two vectors.
   * 
   * Adds corresponding components together.
   * 
   * This is a special operation requiring typescript code to treat this as a function (think of this as `add(b: Vector3): Vector3`). This will be transformed by `tstl` into `a + b` in the generated lua output.
   */
  add: LuaAdditionMethod<Vector3, Vector3>;
  /**
   * Subtracts one vector from another.
   * 
   * Subtracts each component of `b` from `a`.
   * 
   * This is a special operation requiring typescript code to treat this as a function (think of this as `subtract(b: Vector3): Vector3`). This will be transformed by `tstl` into `a - b` in the generated lua output.
   */
  subtract: LuaSubtractionMethod<Vector3, Vector3>;
  /**
   * Negates a vector.
   * 
   * Each component in the result is negated.
   * 
   * This is a special operation requiring typescript code to treat this as a function (think of this as `negate(): Vector3`). This will be transformed by `tstl` into `-a` in the generated lua output.
   */
  negate: LuaNegationMethod<Vector3>;
  /**
   * Multiplies a vector by a number.
   * 
   * Multiplies each component of `a` by a number `d`.
   * 
   * This is a special operation requiring typescript code to treat this as a function (think of this as `multiply(d: number): Vector3`). This will be transformed by `tstl` into `a * d` in the generated lua output.
   */
  multiply: LuaMultiplicationMethod<number, Vector3>;
  /**
   * Divides a vector by a number.
   * 
   * Divides each component of `a` by a number `d`.
   * 
   * This is a special operation requiring typescript code to treat this as a function (think of this as `divide(d: number): Vector3`). This will be transformed by `tstl` into `a / d` in the generated lua output.
   */
  divide: LuaDivisionMethod<number, Vector3>;
}

declare function Vector3(x: number, y: number, z: number): Vector3;