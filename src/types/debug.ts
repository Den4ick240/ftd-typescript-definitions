export interface IDebug {
  Log(message: string): void;
  ClearLogs(): void;
  LogToHud(message: string): void;
}