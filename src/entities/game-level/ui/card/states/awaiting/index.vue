<script setup lang="ts">
import type { GameLevelCardAwaitingProps } from "./interfaces";

/** Параметры */
defineProps<GameLevelCardAwaitingProps>();
</script>

<template>
  <div class="max-md:max-h-39.75 py-5.5 max-md:max-w-40.75 max-md:p-4 max-md:text-sm px-5 rounded-3xl max-md:rounded-2xl relative">
    <div class="max-md:hidden absolute -inset-0.5 -bottom-0.5 -left-0.5 rounded-3xl max-md:rounded-2xl z-0 bg-linear-270 from-(--ui-primary) to-(--ui-secondary)" />
    <div class="bg-neutral-700 absolute w-full h-full top-0 left-0 z-10 rounded-3xl max-md:rounded-2xl" />
    <div class="bg-black opacity-50 absolute w-full h-full top-0 left-0 z-20 rounded-3xl max-md:rounded-2xl" />
    <div class="flex justify-between z-30 relative text-lg max-md:text-sm">
      <div class="text-neutral-400 opacity-60">
        level {{ info.level }}
      </div>
      <div class="flex items-center gap-2.5 max-md:gap-2 opacity-50">
        <UIcon name="fci:solana" class="w-6 h-6 max-md:w-3 max-md:h-3" />
        {{ info.price }}
      </div>
    </div>
    <div class="mt-1.75 mb-4 max-md:mt-2 max-md:mb-3 text-lg font-medium z-30 relative opacity-50 max-md:text-sm">
      Awaiting the next line<span class="max-md:hidden">...</span>
    </div>
    <div class="bg-linear-470 primary-gradient z-30 relative rounded">
      <UProgress v-model="info.progress" size="2xl" color="neutral" class="p-[0.1rem]" />
    </div>
    <div class="text-center text-lg z-30 relative mt-2.5 opacity-50 max-md:text-sm">
      Filling the current line
    </div>
    <div class="text-center text-2xl md:mt-1.75 opacity-50 max-md:text-sm z-30 relative">
      {{ info.progress }} %
    </div>
    <div class="flex justify-between text-sm mt-4 max-md:mt-1 max-md:text-xs z-30 relative">
      <div class="opacity-50">
        <div>
          {{ info.partnerBonus }} SOL
        </div>
        <div>
          Partner bonus
        </div>
      </div>
      <div class="flex flex-col items-end opacity-50">
        <div>
          {{ info.profitLevel }} SOL
        </div>
        <div>
          Profit level
        </div>
      </div>
    </div>
  </div>
</template>
