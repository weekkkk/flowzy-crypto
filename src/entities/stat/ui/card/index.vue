<script lang="ts" setup>
import type { StatCardProps } from "./interfaces";

const props = defineProps<StatCardProps>();

const { totalParticipants, totalTransactions, solTurnover } = props;
</script>

<template>
  <div class="w-115 h-121.75 bg-neutral-700 rounded-5xl px-12.5 pt-12.5 flex flex-col">
    <div class="pb-5">
      <h5 class="text-2xl text-neutral-400 opacity-60">
        Total participants
      </h5>
      <p class="text-4xl">
        {{ totalParticipants.value }}
      </p>
      <p class="text-lg bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
        {{ totalParticipants.profit }}
      </p>
    </div>
    <USeparator />
    <div class="pb-5 pt-6.25">
      <h5 class="text-2xl text-neutral-400 opacity-60">
        Total transactions
      </h5>
      <p class="text-4xl">
        {{ totalTransactions.value }}
      </p>
      <p class="text-lg bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
        {{ totalTransactions.profit }}
      </p>
    </div>
    <USeparator />
    <div class="pb-5 pt-6.25">
      <h5 class="text-2xl text-neutral-400 ">
        <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">SOL </span>
        <span class="opacity-60">turnover</span>
      </h5>
      <p class="text-4xl">
        {{ solTurnover.value }}
      </p>
      <p class="text-lg bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
        {{ solTurnover.profit }}
      </p>
    </div>
  </div>
</template>
