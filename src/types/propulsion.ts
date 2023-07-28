import { ComplexControllerStimulus, PropulsionRequest } from "../enums/propulsion";

export interface IPropulsion {
  /**
   * @category Propulsion
   *
   * Will stop the AI from issuing propulsion commands for the next second, after which it will assume control again. This is exactly what happens when the player presses a control key on an AI controlled vehicle.
   */
  TellAiThatWeAreTakingControl(): void;

  /**
   * @category Propulsion
   *
   * Adds a propulsion request to the specified axis. This is additive to any other requests made to the axis in the same frame and is clamped between -1 and 1
   * @param {PropulsionRequest} type Main = 0, Secondary = 1, Tertiary = 2 , Roll = 3, Pitch = 4, Yaw = 5, Forwards = 6, Up = 7, Right = 8, A = 9, B = 10, C = 11, D = 12, E = 13]
   * @param {number} drive the amount to add to the axis
   */
  AddPropulsionRequest(type: PropulsionRequest, drive: number): void;

  /**
   * @category Propulsion
   *
   * Sets the propulsion request to the specified axis. This overwrites any other requests made to the axis in the same frame and is clamped between -1 and 1
   * @param {PropulsionRequest} type Main = 0, Secondary = 1, Tertiary = 2 , Roll = 3, Pitch = 4, Yaw = 5, Forwards = 6, Up = 7, Right = 8, A = 9, B = 10, C = 11, D = 12, E = 13]
   * @param {number} drive the amount the axis is set to
   */
  SetPropulsionRequest(type: PropulsionRequest, drive: number): void;

  /**
   * @category Propulsion
   *
   * Gets the sum of all requests made to the specified axis in the previous frame or reads the value that the drive is set to if the type is Main, Secondary or Tertiary
   * @param {PropulsionRequest} type Main = 0, Secondary = 1, Tertiary = 2 , Roll = 3, Pitch = 4, Yaw = 5, Forwards = 6, Up = 7, Right = 8, A = 9, B = 10, C = 11, D = 12, E = 13]
   * @returns {number} 
   */
  GetPropulsionRequest(type: PropulsionRequest): number;

  /**
   * @category Propulsion
   *
   * Requests a stimuli as per the complex controller block.
   * @param {ComplexControllerStimulus} stim none = 0,T =1,G =2 ,Y =3,H =4,U =5,J =6,I =7,K =8,O= 9,L =10,up=11,down=12,left=13,right=14
   */
  RequestComplexControllerStimulus(stim: ComplexControllerStimulus): void;

  /**
   * @category Propulsion
   *
   * Move fortress in any direction. Limited to 1 meter.
   * @param {Vector3} direction  Direction to move the fortress in.  Limited to 1 meter.
   */
  MoveFortress(direction: Vector3): void;

  /**
   * @category Propulsion
   *
   * Creates or uses an axis with a custom name. Adds a value to the axis. Axes values are limited to between -1 and 1. Axes names are limited to 32 characters.
   * @param {string} axisName name of axis to create/use. Limited to 32 characters.
   * @param {number} drive value to add to the axis on this frame.
   */
  RequestCustomAxis(axisName: string, drive: number): void;

  /**
   * @category Propulsion
   *
   * Returns the value of the named axis that it had the previous frame, or 0 if axis not created yet.
   * @param {string} axisName name of axis to get value for.
   * @returns {number} The value of the axis as a float. 0 if axis not created yet.
   */
  GetCustomAxis(axisName: string): number;
}