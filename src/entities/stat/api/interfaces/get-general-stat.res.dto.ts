import type { GeneralStatRecordDto } from "./general-stat.rec.dto";

export interface GetGeneralStatResDto {
  totalParticipants: GeneralStatRecordDto;
  totalTransactions: GeneralStatRecordDto;
  solTurnover: GeneralStatRecordDto;
}
