<script setup lang="ts">
import type { GameLevelAwaitingProps } from "./interfaces";

/** Параметры */
defineProps<GameLevelAwaitingProps>();

/** Прогресс */
const progress = 10;
</script>

<template>
  <div class="border-transparent w-72.5 py-5.5 px-5 rounded-3xl mb-2.5 relative">
    <div class="bg-black opacity-50 absolute w-full h-full top-0 left-0 z-10 rounded-3xl" />
    <div class="flex justify-between z-50 relative">
      <div class="text-neutral-400 opacity-60">
        level {{ info.level }}
      </div>
      <div class="flex items-center gap-2.5">
        <UIcon name="fci:solana" class="w-6 h-6" />
        {{ info.price }}
      </div>
    </div>
    <div class="mt-7.75 text-lg font-medium z-50 relative opacity-50">
      Awaiting the next line...
    </div>
    <UProgress v-model="progress" />
  </div>
</template>
