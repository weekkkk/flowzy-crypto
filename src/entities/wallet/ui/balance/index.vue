<script setup lang="ts">
import type { WalletBalanceProps } from "./interfaces";

withDefaults(defineProps<WalletBalanceProps>(), {
  balance: 0,
});
</script>

<template>
  <div class="flex items-center gap-2.5 text-lg font-medium bg-neutral-800 rounded-5xl py-5.75 px-7 w-max max-md:py-3 max-md:px-4 max-md:h-max">
    <UIcon v-if="!short" name="fci:solana" class="w-6 h-6" />
    <div class="text-lg max-md:text-sm font-medium">
      {{ balance }} SOL
    </div>
  </div>
</template>
