import type { StatGeneralRecordDto } from "../api/interfaces";
import { format } from "~/src/shared/utils";

export function formatRecord(rec: StatGeneralRecordDto) {
  return {
    value: format(rec.value.toString()),
    profit: format(rec.profit.toString()),
  };
};
