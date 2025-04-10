<script setup lang="ts">
import type { WalletBalanceProps } from "./interfaces";

defineProps<WalletBalanceProps>();
</script>

<template>
  <div class="flex items-center gap-2.5 text-lg font-medium bg-neutral-800 rounded-5xl py-5.75 px-7">
    <UIcon name="fci:solana" class="w-6 h-6" />
    <div class="text-lg font-medium">
      {{ balance }} SOL
    </div>
  </div>
</template>
