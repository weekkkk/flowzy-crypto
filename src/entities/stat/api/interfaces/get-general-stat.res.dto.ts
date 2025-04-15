import type { StatGeneralRecordDto } from "./general-stat-record.dto";

export interface StatGetGeneralResDto {
  totalParticipants: StatGeneralRecordDto;
  totalTransactions: StatGeneralRecordDto;
  solTurnover: StatGeneralRecordDto;
};
