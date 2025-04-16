import type { StatGeneralRecordDto } from "../api/interfaces";
import { format } from "~/src/shared/utils";

export function formatStatGeneralRecord(rec: StatGeneralRecordDto) {
  return {
    value: format(rec.value),
    profit: format(rec.profit),
  };
};
