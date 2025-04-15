import type { GameLevelsReqDto } from "./interfaces";
import { $gameLevel } from "./point";

export class GameLevelService {
  static async getGameLevels() {
    const response = await $gameLevel<GameLevelsReqDto>("/get-game-levels", {
      method: "GET",
    });
    return response;
  }
}
