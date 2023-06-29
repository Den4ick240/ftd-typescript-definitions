import { AIFiringMode, AIMovementMode } from "../enums/ai";

export interface IAi {
  /**
   * @category AI
   */
  GetAIMovementMode(index: number): AIMovementMode;
  /**
   * @category AI
   */
  GetAIFiringMode(index: number): AIFiringMode;
}