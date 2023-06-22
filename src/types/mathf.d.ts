/**
 * Based off of Unity 2021.3 documentation (https://docs.unity3d.com/ScriptReference/Mathf.html)
 */
declare class Mathf {
  /**
   * @readonly
   * Degrees-to-radians conversion constant.
   * 
   * This is equal to (PI * 2) / 360.
   * 
   * See Also: {@link Rad2Deg} constant.
   */
  static Deg2Rad: number;
  /**
   * @readonly
   * A tiny floating point value.
   * 
   * The smallest value that a float can have different from zero.
   * 
   * With the following rules:
   * - anyValue + Epsilon = anyValue
   * - anyValue - Epsilon = anyValue
   * - 0 + Epsilon = Epsilon
   * - 0 - Epsilon = -Epsilon
   * 
   * A value Between any number and Epsilon will result in an arbitrary number due to truncating errors.
   */
  static Epsilon: number;
  /**
   * @readonly
   * 
   * A representation of positive infinity.
   */
  static Infinity: number;
  /**
   * @readonly
   * 
   * A representation of negative infinity.
   */
  static NegativeInfinity: number;
  /**
   * @readonly
   * The well-known 3.14159265358979... value.
   * 
   * The ratio of the circumference of a circle to its diameter. Note that this value is a 32-bit floating point number i.e. a float. Approximately seven digits of precision are provided.
   */
  static PI: number;
  /**
   * @readonly
   * Radians-to-degrees conversion constant.
   * 
   * This is equal to 360 / (PI * 2).
   * 
   * See Also: {@link Deg2Rad} constant.
   */
  static Rad2Deg: number;
  /** @hidden */
  constructor();
  /**
   * @returns Absolute value of `f`.
   */
  static Abs(f: number): number;
  /**
   * @returns Arc-cosine of `f` - the angle in radians whose cosine is `f`.
   */
  static Acos(f: number): number;
  /**
   * Compares two floating point values and returns true if they are similar.
   * 
   * Floating point imprecision makes comparing floats using the equals operator inaccurate. For example, `(1.0 == 10.0 / 10.0)` might not return true every time. `Approximately()` compares two floats and returns true if they are within a small value ({@link Epsilon}) of each other.
   */
  static Approximately(a: number, b: number): boolean;
  /**
   * @returns Arc-sine of `f` - the angle in radians whose sine is `f`.
   */
  static Asin(f: number): number;
  /**
   * @returns Arc-tangent of `f` - the angle in radians whose tangent is `f`.
   */
  static Atan(f: number): number;
  /**
   * Value is the angle between the x-axis and a 2D vector starting at zero and terminating at (x,y).
   * @returns Angle in radians whose Tan is `y/x`.
   */
  static Atan2(y: number, x: number): number;
  /**
   * @returns Smallest integer greater to or equal to `f`.
   */
  static Ceil(f: number): number;
  /**
   * @returns Smallest integer greater to or equal to `f`.
   */
  static CeilToInt(f: number): number;
  /**
   * Clamps the given value between the given minimum float and maximum float values. Returns the given value if it is within the minimum and maximum range.
   * 
   * Returns the minimum value if the given float value is less than the minimum. Returns the maximum value if the given value is greater than the maximum value. Use Clamp to restrict a value to a range that is defined by the minimum and maximum values.
   * Note: if the minimum value is is greater than the maximum value, the method returns the minimum value.
   * 
   * @param value The floating point value to restrict inside the range defined by the minimum and maximum values.
   * @param min The minimum floating point value to compare against.
   * @param max The maximum floating point value to compare against.
   * @returns The float result between the minimum and maximum values. 
   */
  static Clamp(value: number, min: number, max: number): number;
  /**
   * Clamps value between 0 and 1 and returns value.
   * 
   * If the value is negative then zero is returned. If value is greater than one then one is returned.
   */
  static Clamp01(value: number): number;
  /**
   * @returns Closest power of two value.
   */
  static ClosestPowerOfTwo(value: number): number;
  /**
   * Returns the cosine of angle `f`.
   * 
   * Note: If using very large numbers with this function, there is an acceptable range for input angle values for this method, beyond which the calculation will fail. On windows, the acceptable range is approximately between -9223372036854775295 to 9223372036854775295. This range may differ on other platforms. For values outside of the acceptable range, the Cos method returns the input value, rather than throwing an exception.
   * 
   * See Also: {@link Sin}, {@link Tan}
   * 
   * @param f The input angle, in radians.
   * @returns Value between -1 and 1.
   */
  static Cos(f: number): number;
  /**
   * Calculates the shortest difference between two given angles given in degrees.
   */
  static DeltaAngle(current: number, target: number): number;
  /**
   * @returns `e` raised to the specified power.
   */
  static Exp(power: number): number;
  /**
   * @returns Largest integer smaller than or equal to `f`.
   */
  static Floor(f: number): number;
  /**
   * @returns Largest integer smaller than or equal to `f`.
   */
  static FloorToInt(f: number): number;
  /**
   * Determines where a `value` lies between two points.
   * 
   * The a and b values define the start and end of a linear numeric range. The "value" parameter you supply represents a value which might lie somewhere within that range. This method calculates where, within the specified range, the "value" parameter falls.
   * If the "value" parameter is within the range, InverseLerp returns a value between zero and one, proportional to the value's position within the range. If the "value" parameter falls outside of the range, InverseLerp returns either zero or one, depending on whether it falls before the start of the range or after the end of the range.
   * 
   * @param a The start of the range.
   * @param b The end of the range.
   * @param value The point within the range you want to calculate.
   * @returns A value between zero and one, representing where the "value" parameter falls within the range defined by a and b.
   */
  static InverseLerp(a: number, b: number, value: number): number;
  /**
   * @returns `true` if the value is power of two.
   */
  static IsPowerOfTwo(value: number): boolean;
  /**
   * Linearly interpolates between `a` and `b` by `t`.
   * 
   * The parameter `t` is clamped to the range [0, 1].
   * 
   * When `t` = 0 returns `a`.
   * 
   * When `t` = 1 return `b`.
   * 
   * When `t` = 0.5 returns the midpoint of `a` and `b`.
   * 
   * @param a The start value.
   * @param b The end value.
   * @param t The interpolation value between the two floats.
   * @returns The interpolated float result between the two float values.
   */
  static Lerp(a: number, b: number, t: number): number;
  /**
   * Same as {@link Lerp} but makes sure the values interpolate correctly when they wrap around 360 degrees.
   * 
   * The parameter `t` is clamped to the range [0, 1]. Variables `a` and `b` are assumed to be in degrees.
   */
  static LerpAngle(a: number, b: number, t: number): number;
  /**
   * Linearly interpolates between `a` and `b` by `t` with no limit to `t`.
   * 
   * The parameter `t` is not clamped and a value based on `a` and `b` is supported. If `t` is less than zero, or greater than one, then {@link LerpUnclamped} will result in a return value outside the range `a` to `b`.
   * 
   * Suppose parameter `a` = 0.33f, and `b` = 1.5f. If interpolator `t` = -0.25f then the return value is 0.0375f.
   * 
   * Details: The calculation (`b` - `a`) is 1.17f. This is scaled by 0.25f and a result of 0.2925f is obtained. Subtracting this from `a` (because the interpolant `t` is negative) results in 0.0375f.
   * 
   * See Also: {@link Lerp}.
   * 
   * @param a The start value.
   * @param b The end value.
   * @param t The interpolation between the two floats.
   * @returns The float value as a result from the linear interpolation. 
   */
  static LerpUnclamped(a: number, b: number, t: number): number;
  /**
   * @returns Logarithm of a specified number in a specified base.
   */
  static Log(f: number, p: number): number;
  /**
   * @returns Natural (base e) logarithm of a specified number.
   */
  static Log(f: number): number;
  /**
   * @returns Base 10 logarithm of a specified number.
   */
  static Log10(f: number): number;
  /**
   * @returns Largest of two or more values.
   */
  static Max(a: number, b: number): number;
  /**
   * @returns Largest of two or more values.
   */
  static Max(values: number[]): number;
  /**
   * @returns Smallest of two or more values.
   */
  static Min(a: number, b: number): number;
  /**
   * @returns Smallest of two or more values.
   */
  static Min(values: number[]): number;
  /**
   * Moves a value `current` towards `target`.
   * 
   * This is essentially the same as {@link Lerp} but instead the function will ensure that the speed never exceeds `maxDelta`. Negative values of `maxDelta` pushes the value away from `target`.
   * 
   * @param current The current value.
   * @param target The value to move towards.
   * @param maxDelta The maximum change that should be applied to the value.
   */
  static MoveTowards(current: number, target: number, maxDelta: number): number;
  /**
   * Same as {@link MoveTowards} but makes sure the values interpolate correctly when they wrap around 360 degrees.
   * 
   * Variables `current` and `target` are assumed to be in degrees. For optimization reasons, negative values of `maxDelta` are not supported and may cause oscillation. To push `current` away from a target angle, add 180 to that angle instead.
   */
  static MoveTowardsAngle(current: number, target: number, maxDelta: number): number;
  /**
   * @returns Next power of two that is equal to, or greater than, the argument.
   */
  static NextPowerOfTwo(value: number): number;
  /**
   * Generate 2D Perlin noise.
   * 
   * Perlin noise is a pseudo-random pattern of float values generated across a 2D plane (although the technique does generalise to three or more dimensions, this is not implemented in Unity). The noise does not contain a completely random value at each point but rather consists of "waves" whose values gradually increase and decrease across the pattern. The noise can be used as the basis for texture effects but also for animation, generating terrain heightmaps and many other things.
   * 
   * Any point in the plane can be sampled by passing the appropriate X and Y coordinates. The same coordinates will always return the same sample value but the plane is essentially infinite so it is easy to avoid repetition by choosing a random area to sample from.
   * 
   * Although the noise plane is two-dimensional, it is easy to use just a single one-dimensional line through the pattern, say for animation effects.
   * 
   * Note: It is possible for the return value to be slightly less than 0.0f or slightly exceed 1.0f. You may need to clamp the return value if the 0.0 to 1.0 range is important to you.
   * 
   * @param x X-coordinate of sample point.
   * @param y Y-coordinate of sample point.
   * @returns Value between 0.0 and 1.0. (Return value might be slightly below 0.0 or beyond 1.0.)
   */
  static PerlinNoise(x: number, y: number): number;
  /**
   * PingPong returns a value that will increment and decrement between the value 0 and length.
   * 
   * PingPong requires the value `t` to be a self-incrementing value, for example Time.time, and Time.unscaledTime.
   */
  static PingPong(t: number, length: number): number;
  /**
   * @returns `f` raised to power `p`.
   */
  static Pow(f: number, p: number): number;
  /**
   * Loops the value t, so that it is never larger than length and never smaller than 0.
   * 
   * This is similar to the modulo operator but it works with floating point numbers. For example, using 3.0 for `t` and 2.5 for `length`, the result would be 0.5. With `t` = 5 and `length` = 2.5, the result would be 0.0. Note, however, that the behaviour is not defined for negative numbers as it is for the modulo operator.
   * 
   * In the example below the value of time is restricted between 0.0 and just under 3.0. This is then used to keep the x position in this range.
   */
  static Repeat(t: number, length: number): number;
  /**
   * If the number ends in .5 so it is halfway between two integers, one of which is even and the other odd, the even number is returned.
   * 
   * @return `f` rounded to the nearest integer.
   */
  static Round(f: number): number;
  /**
   * If the number ends in .5 so it is halfway between two integers, one of which is even and the other odd, the even number is returned.
   * 
   * @return `f` rounded to the nearest integer.
   */
  static RoundToInt(f: number): number;
  /**
   * Return value is 1 when `f` is positive or zero, -1 when `f` is negative.
   * 
   * @returns Sign of `f`.
   */
  static Sign(f: number): number;
  /**
   * Returns the sine of angle `f`.
   * 
   * Note: If using very large numbers with this function, there is an acceptable range for input angle values for this method, beyond which the calculation will fail. On windows, the acceptable range is approximately between -9223372036854775295 to 9223372036854775295. This range may differ on other platforms. For values outside of the acceptable range, the Sin method returns the input value, rather than throwing an exception.
   * 
   * See Also: {@link Cos}, {@link Tan}
   * 
   * @param f The input angle, in radians.
   * @returns Value between -1 and +1.
   */
  static Sin(f: number): number;
  /**
   * Gradually changes a value towards a desired goal over time.
   * 
   * The value is smoothed by some spring-damper like function, which will never overshoot. The function can be used to smooth any kind of value, positions, colors, scalars.
   * 
   * @param current The current position.
   * @param target The position we are trying to reach.
   * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
   * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
   * @param maxSpeed Optionally allows you to clamp the maximum speed.
   * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
   */
  static SmoothDamp(current: number, target: number, currentVelocity: number, smoothTime: number, maxSpeed?: number, deltaTime?: number): number;
  /**
   * Gradually changes an angle given in degrees towards a desired goal angle over time.
   * 
   * The value is smoothed by some spring-damper like function. The function can be used to smooth any kind of value, positions, colors, scalars. The most common use is for smoothing a follow camera.
   * 
   * @param current The current position.
   * @param target The position we are trying to reach.
   * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
   * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
   * @param maxSpeed Optionally allows you to clamp the maximum speed.
   * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
   */
  static SmoothDampAngle(current: number, target: number, currentVelocity: number, smoothTime: number, maxSpeed?: number, deltaTime?: number): number;
  /**
   * Interpolates between `min` and `max` with smoothing at the limits.
   * 
   * This function interpolates between `min` and `max` in a similar way to {@link Lerp}. However, the interpolation will gradually speed up from the start and slow down toward the end. This is useful for creating natural-looking animation, fading and other transitions.
   */
  static SmoothStep(from: number, to: number, t: number): number;
  /**
   * @returns Square root of `f`.
   */
  static Sqrt(f: number): number;
  /**
   * See Also: {@link Cos}, {@link Sin}.
   * 
   * @returns Tangent of angle `f` in radians.
   */
  static Tan(f: number): number;
}