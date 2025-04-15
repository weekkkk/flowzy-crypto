import type { StatGeneralRecordDto } from "../../../api/interfaces";

export interface StatCardProps {
  totalParticipants?: StatGeneralRecordDto;
  totalTransactions?: StatGeneralRecordDto;
  solTurnover?: StatGeneralRecordDto;
}
