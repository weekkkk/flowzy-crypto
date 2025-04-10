<script lang="ts" setup>
import type { GeneralStatRecordDto } from "~/src/entities/stat/api/interfaces";
import { StatService } from "~/src/entities/stat/api";

const totalParticipants = ref<GeneralStatRecordDto>({
  value: 0,
  profit: 0,
}); ;
const totalTransactions = ref<GeneralStatRecordDto>({
  value: 0,
  profit: 0,
}); ;
const solTurnover = ref<GeneralStatRecordDto>({
  value: 0,
  profit: 0,
}); ;

async function getGeneralStat() {
  const res = await StatService.getGeneralStat();

  totalParticipants.value = res.totalParticipants;
  totalTransactions.value = res.totalTransactions;
  solTurnover.value = res.solTurnover;
}

onMounted(async () => {
  await getGeneralStat();
});
</script>

<template>
  <StatCard :total-participants="totalParticipants" :total-transactions="totalTransactions" :sol-turnover="solTurnover" />
</template>
