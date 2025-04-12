import type { GeneralStatRecordDto } from "./general-stat-record.dto";

export interface GetGeneralStatResDto {
  totalParticipants: GeneralStatRecordDto;
  totalTransactions: GeneralStatRecordDto;
  solTurnover: GeneralStatRecordDto;
};
