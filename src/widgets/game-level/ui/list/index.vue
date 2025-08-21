<script setup lang="ts">
import type { AnchorWallet } from "solana-wallets-vue";
import { useAnchorWallet } from "solana-wallets-vue";

const wallet = useAnchorWallet();

const { data, status } = useAsyncData(
  "short-levels",
  () => GameLevelService.getShortList(wallet.value as AnchorWallet),
  {
    server: false,
    immediate: !!wallet.value,
  },
);
</script>

<template>
  <div class="grid grid-cols-5 gap-x-10 max-md:grid-cols-2 gap-y-8 max-md:gap-2.5 md:bg-neutral-800 rounded-5xl md:py-12.5 md:px-12">
    <div
      v-if="status === 'pending'"
      class="col-start-1 col-end-6 max-md:col-end-3 flex justify-center items-center"
    >
      <UProgress class="w-1/2" size="2xl" color="primary" />
    </div>
    <div
      v-else-if="!data"
      class="col-start-1 col-end-6 max-md:col-end-3 flex justify-center items-center"
    >
      <p>Empty</p>
    </div>
    <template v-else>
      <GameLevelCard v-for="item in data" :key="item.id" :info="item" />
    </template>
  </div>
</template>
