<script setup lang="ts">
import type { GameLevelCardActiveProps } from "./interfaces";

/** Параметры */
const props = defineProps<GameLevelCardActiveProps>();

/** Позиция иконки */
const iconPositions = computed(() => {
  return props.info.userEarnings.map(val => val * 100);
});
</script>

<template>
  <div class="relative max-md:h-39.75">
    <div class="max-md:hidden absolute -inset-0.5 rounded-3xl max-md:rounded-2xl bg-linear-270 from-(--ui-primary) to-(--ui-secondary)" />
    <div class="bg-neutral-700 relative inset-0 max-md:h-39.75 max-md:p-4 py-5.5 px-5 rounded-3xl max-md:rounded-2xl">
      <div class="flex justify-between relative mb-11.25 max-md:mb-4.75 text-lg max-md:text-sm">
        <div class="text-neutral-400 opacity-60">
          level {{ info.level }}
        </div>
        <div class="flex items-center gap-2.5 max-md:gap-2">
          <UIcon name="fci:solana" class="w-6 h-6 max-md:w-3 max-md:h-3" />
          {{ info.price }}
        </div>
      </div>
      <div class="relative">
        <div class="bg-linear-470 primary-gradient rounded">
          <UProgress v-model="info.progress" size="2xl" color="primary" class="p-[0.1rem]" />
        </div>
        <div
          v-for="(pos, index) in iconPositions"
          :key="index"
          class="absolute -top-0.5 max-md:-top-1 -translate-x-1/2"
          :style="{ left: `${pos}%` }"
        >
          <UIcon name="fci:solana" class="w-6 h-6 max-md:w-3 max-md:h-3" />
        </div>
      </div>
      <div class="text-center text-lg  relative mt-2.5 max-md:mt-2 max-md:text-sm">
        Filling the current line
      </div>
      <div class="text-center text-2xl md:mt-1.75  relative max-md:text-sm">
        {{ info.progress }} %
      </div>
      <div class="flex justify-between text-sm mt-4 max-md:mt-5 max-md:text-xs">
        <div>
          <div class=" relative">
            {{ info.partnerBonus }} SOL
          </div>
          <div class="opacity-60">
            Partner bonus
          </div>
        </div>
        <div class="flex flex-col items-end">
          <div class=" relative">
            {{ info.profitLevel }} SOL
          </div>
          <div class="opacity-60">
            Profit level
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
