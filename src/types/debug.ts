export interface IDebug {
  /**
   * @category Debug
   *
   * Writes a message to the log. Log is visible when editing the LUA box and appears in the 'Errors / Log' panel. The last 100 log messages are maintained.
   * @param {string} message the message you want to write to the log.
   */
  Log(message: string): void;

  /**
   * @category Debug
   *
   * Clears your log. Pretty harmless!
   */
  ClearLogs(): void;

  /**
   * @category Debug
   *
   * Writes a message to the HUD. HUD messages are visible during normal play and when on the map.
   * @param {string} message the message you want to write to the HUD.
   */
  LogToHud(message: string): void;
}