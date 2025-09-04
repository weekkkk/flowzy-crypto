<script setup lang="ts">
import { useWalletBalance } from "../../composables";

defineProps<{
  short?: boolean;
}>();

const { balance, status } = useWalletBalance();

const formatedBalance = computed(() => balance.value?.toFixed(3) ?? "0.000");
</script>

<template>
  <div class="relative flex items-center gap-2.5 text-lg font-medium bg-neutral-800 rounded-5xl py-5.75 px-7 w-max max-md:py-3 max-md:px-4 max-md:h-max">
    <UIcon v-if="!short" name="fci:solana" class="w-6 h-6" />
    <span>
      <span class="relative text-lg max-md:text-sm font-medium">
        <UProgress
          v-if="status === 'pending'"
          size="2xl"
          color="primary"
          class="absolute inset-0"
        />
        {{ formatedBalance }}
      </span>
      SOL
    </span>
  </div>
</template>
