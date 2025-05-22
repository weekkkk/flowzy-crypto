<script lang="ts" setup>
import type { StatGeneralCardProps } from "./interfaces";
import { formatStatGeneralRecord } from "../../utils/format";

const props = withDefaults(defineProps<StatGeneralCardProps>(), {
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
    <StatGeneralCardItem :record="participants">
      Total participants
    </StatGeneralCardItem>
    <USeparator color="crayola" class="opacity-18" />
    <StatGeneralCardItem :record="transactions">
      Total transactions
    </StatGeneralCardItem>
    <USeparator color="crayola" class="opacity-18" />
    <StatGeneralCardItem :record="turnover">
      <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">SOL </span>
      <span>turnover</span>
    </StatGeneralCardItem>
  </ul>
</template>
