import type { StatGeneralRecordDto } from "../api/interfaces";

export function formatStatGeneralRecord(rec: StatGeneralRecordDto) {
  return {
    value: formatNumber(rec.value),
    profit: formatNumber(rec.profit),
  };
};
