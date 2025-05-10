<script setup lang="ts">
import type { GameLevelCardErrorProps } from "./interfaces";

/** Параметры */
defineProps<GameLevelCardErrorProps>();
</script>

<template>
  <div class="bg-error-500 max-md:h-39.75 py-5.5 px-5 max-md:p-4 rounded-3xl max-md:rounded-2xl">
    <div class="flex justify-between text-lg max-md:text-sm">
      <div class="text-neutral-400 opacity-60">
        level {{ info.level }}
      </div>
      <div class="flex items-center gap-2.5 max-md:gap-2">
        <UIcon name="fci:solana" class="w-6 h-6 max-md:w-3 max-md:h-3" />
        {{ info.price }}
      </div>
    </div>
    <div class="text-center mt-3.5 text-lg font-medium opacity-60 max-md:text-sm">
      Available for<br>activation
    </div>
    <div class="text-lg text-center mt-3.5 max-md:mt-1.5 max-md:text-sm">
      Missed 1.901 SOL
    </div>
    <div class="flex justify-center mt-5.75 max-md:mt-2.25">
      <UButton disabled class="flex text-xl py-5.5 px-18.5 max-md:py-3 max-md:px-10 cursor-pointer max-md:text-sm">
        Activate
      </UButton>
    </div>
  </div>
</template>
