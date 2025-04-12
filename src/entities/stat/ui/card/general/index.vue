<script lang="ts" setup>
import type { StatCardProps } from "./interfaces";

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
  return {
    value: totalParticipants.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    profit: totalParticipants.profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  };
});

const transactions = computed(() => {
  return {
    value: totalTransactions.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    profit: totalTransactions.profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  };
});

const turnover = computed(() => {
  return {
    value: solTurnover.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    profit: solTurnover.profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  };
});
</script>

<template>
  <div class="w-115 h-121.75 bg-neutral-800 rounded-5xl px-12.5 pt-12.5 flex flex-col">
    <div class="pb-5">
      <h5 class="text-2xl text-neutral-400 opacity-60">
        Total participants
      </h5>
      <p class="text-4xl">
        {{ participants.value }}
      </p>
      <p class="text-lg bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
        + {{ participants.profit }}
      </p>
    </div>
    <USeparator color="crayola" class="opacity-18" />
    <div class="pb-5 pt-6.25">
      <h5 class="text-2xl text-neutral-400 opacity-60">
        Total transactions
      </h5>
      <p class="text-4xl">
        {{ transactions.value }}
      </p>
      <p class="text-lg bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
        + {{ transactions.profit }}
      </p>
    </div>
    <USeparator color="crayola" class="opacity-18" />
    <div class="pb-5 pt-6.25">
      <h5 class="text-2xl text-neutral-400 ">
        <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">SOL </span>
        <span class="opacity-60">turnover</span>
      </h5>
      <p class="text-4xl">
        {{ turnover.value }}
      </p>
      <p class="text-lg bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
        + {{ turnover.profit }}
      </p>
    </div>
  </div>
</template>
