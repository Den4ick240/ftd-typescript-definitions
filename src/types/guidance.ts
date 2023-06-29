import { BlockInfo } from "./components";
import { MissileWarningInfo } from "./warning";

export interface IGuidance {
  GetLuaTransceiverCount(): number;
  GetLuaControlledMissileCount(luaTransceiverIndex: number): number;
  GetLuaTransceiverInfo(luaTransceiverIndex: number): BlockInfo;
  GetLuaControlledMissileInfo(luaTransceiverIndex: number, missileIndex: number): MissileWarningInfo;
  SetLuaControlledMissileAimPoint(luaTransceiverIndex: number, missileIndex: number, x: number, y: number, z: number): void;
  DetonateLuaControlledMissile(luaTransceiverIndex: number, missileIndex: number): void;
  IsLuaControlledMissileAnInterceptor(luaTransceiverIndex: number, missileIndex: number): boolean;
  SetLuaControlledMissileInterceptorTarget(luaTransceiverIndex: number, missileIndex: number, targetIndex: number): void;
  SetLuaControlledMissileInterceptorStandardGuidanceOnOff(luaTranceiver: number, missileIndex: number, onOff: boolean): void;
}