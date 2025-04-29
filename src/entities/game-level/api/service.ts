import type { ActivateGameLevelReqDto, ActivateGameLevelResDto, GameLevelGetInfoReqDto, GameLevelGetInfoResDto, GameLevelsReqDto } from "./interfaces";
import { $gameLevel } from "./point";

export class GameLevelService {
  /** Получить игровые уровни */
  static async getGameLevels() {
    const response = await $gameLevel<GameLevelsReqDto>("/get-game-levels", {
      method: "GET",
    });
    return response;
  }

  /** Получить информацию игрового уровня */
  static async getInfo(req: GameLevelGetInfoReqDto) {
    const response = await $gameLevel<GameLevelGetInfoResDto>(`/get-game-info?${req.id}`, {
      method: "GET",
    });
    return response;
  }

  /** Активировать игровой уровень */
  static async activateGameLevel(req: ActivateGameLevelReqDto) {
    const response = await $gameLevel<ActivateGameLevelResDto>(`/activate-game-level?${req.id}`);
    return response;
  }
}
