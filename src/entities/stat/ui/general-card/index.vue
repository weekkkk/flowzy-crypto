<script lang="ts" setup>
import type { StatCardProps } from "./interfaces";
import { formatStatGeneralRecord } from "../../utils/format";

const props = withDefaults(defineProps<StatCardProps>(), {
  totalParticipants: () => ({
    value: 0,
    profit: 0,
  }),
  totalTransactions: () => ({
    value: 0,
    profit: 0,
  }),
  solTurnover: () => ({
    value: 0,
    profit: 0,
  }),
});

const { totalParticipants, totalTransactions, solTurnover } = props;

const participants = computed(() => {
  return formatStatGeneralRecord(totalParticipants);
});

const transactions = computed(() => {
  return formatStatGeneralRecord(totalTransactions);
});

const turnover = computed(() => {
  return formatStatGeneralRecord(solTurnover);
});
</script>

<template>
  <ul class="pb-5 max-md:pb-0">
    <StatGeneralCardItem :record="participants" class="pt-6.25 max-md:pt-0 pb-5 max-md:pb-3">
      Total participants
    </StatGeneralCardItem>
    <USeparator color="crayola" class="opacity-18" />
    <StatGeneralCardItem :record="transactions" class="pb-5 pt-6.25 max-md:pt-3 max-md:pb-3">
      Total transactions
    </StatGeneralCardItem>
    <USeparator color="crayola" class="opacity-18" />
    <StatGeneralCardItem :record="turnover" class="pb-5 pt-6.25 max-md:pt-3 max-md:pb-0">
      <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">SOL </span>
      <span class="opacity-60">turnover</span>
    </StatGeneralCardItem>
  </ul>
</template>
