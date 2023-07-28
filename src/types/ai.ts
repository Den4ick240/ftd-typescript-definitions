import { AIFiringMode, AIMovementMode } from "../enums/ai";

export interface IAi {
  /**
   * @category Ai
   *
   * returns the movement mode of the AI mainframe specified by the index
   * @param {number} index index of the AI mainframe
   * @returns {AIMovementMode} movement mode of the AI mainframe. Possible modes: Off, Manual, Automatic, Fleet
   */
  GetAIMovementMode(index: number): AIMovementMode;

  /**
   * @category Ai
   *
   * returns the firing mode of the AI mainframe specified by the index
   * @param {number} index index of the AI mainframe
   * @returns {AIFiringMode} firing mode of the AI mainframe. Possible modes: Off, On
   */
  GetAIFiringMode(index: number): AIFiringMode;
}
