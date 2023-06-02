import { ComplexControllerStimulus, PropulsionRequest } from "../enums/propulsion";

interface I {
  TellAiThatWeAreTakingControl(): void;
  AddPropulsionRequest(type: PropulsionRequest, drive: number): void;
  SetPropulsionRequest(type: PropulsionRequest, drive: number): void;
  GetPropulsionRequest(type: PropulsionRequest): number;
  RequestComplexControllerStimulus(stim: ComplexControllerStimulus): void;
  MoveFortress(direction: Vector3): void;
  RequestCustomAxis(axisName: string, drive: number): void;
  GetCustomAxis(axisName: string): number;
}