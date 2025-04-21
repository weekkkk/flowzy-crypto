<script setup lang="ts">
import type { GameLevelErrorProps } from "./interfaces";

/** Параметры */
defineProps<GameLevelErrorProps>();
</script>

<template>
  <div class="bg-error-500 w-72.5 py-5.5 px-5 rounded-3xl mb-2.5">
    <div class="flex justify-between">
      <div class="text-neutral-400 opacity-60">
        level {{ info.level }}
      </div>
      <div class="flex items-center gap-2.5">
        <UIcon name="fci:solana" class="w-6 h-6" />
        {{ info.price }}
      </div>
    </div>
    <div class="text-center mt-3.5 text-lg font-medium opacity-60">
      Available for<br>activation
    </div>
    <div class="text-lg text-center mt-3.5">
      Missed 1.901 SOL
    </div>
    <div class="flex justify-center mt-5.75">
      <UButton disabled class="flex text-xl py-5.5 px-18.5 cursor-pointer">
        Activate
      </UButton>
    </div>
  </div>
</template>
