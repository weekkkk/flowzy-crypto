import type { GameLevelStatusEnum } from "../enums";

export interface GameLevelShortDto {
  id: number;
  level: number;
  price: number;
  status: GameLevelStatusEnum;
  partnerBonus: number;
  profitLevel: number;
  userEarnings: number[];
  progress: number;
  initializeTimestamp: number;
}
