import type { GeneralStatRecordDto } from "../../../api/interfaces";

export interface StatCardProps {
  totalParticipants: GeneralStatRecordDto;
  totalTransactions: GeneralStatRecordDto;
  solTurnover: GeneralStatRecordDto;
}
