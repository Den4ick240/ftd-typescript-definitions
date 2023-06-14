import { AIFiringMode, AIMovementMode } from "../enums/ai";

interface I {
  GetAIMovementMode(index: number): AIMovementMode;
  GetAIFiringMode(index: number): AIFiringMode;
}