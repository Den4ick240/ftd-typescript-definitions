import { AIFiringMode } from "../enums/ai";

interface I {
  GetAIMovementMode(index: number): AIFiringMode;
  GetAIFiringMode(index: number): AIFiringMode;
}
