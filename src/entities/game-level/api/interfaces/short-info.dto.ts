export interface GameLevelShortInfoDto {
  id: number;
  level: number;
  price: number;
  state: string;
  partnerBonus: number;
  profitLevel: number;
  userEarnings: number[];
  progress: number;
}
