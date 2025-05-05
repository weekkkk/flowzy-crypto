<script setup lang="ts">
import type { GameLevelCardFreezeProps } from "./interfaces";

/** Параметры */
defineProps<GameLevelCardFreezeProps>();
</script>

<template>
  <div class="w-72.5 max-md:h-39.75 py-5.5 px-5 max-md:w-40.75 max-md:p-4 max-md:text-sm max-md:rounded-2xl rounded-3xl md:mb-2.5 relative">
    <div class="max-md:hidden absolute -inset-0.5 -bottom-0.5 rounded-3xl max-md:rounded-2xl bg-linear-270 from-(--ui-primary) to-(--ui-secondary)" />    <NuxtImg src="/images/freeze.png" class="absolute top-0 left-0 w-full h-full z-30" />
    <div class="bg-black opacity-50 absolute w-full h-full top-0 left-0 z-10 rounded-3xl" />
    <div class="flex justify-between z-20 relative text-lg max-md:text-sm">
      <div class="text-neutral-400 opacity-60">
        level {{ info.level }}
      </div>
      <div class="flex items-center gap-2.5 max-md:gap-2">
        <UIcon name="fci:solana" class="w-6 h-6 max-md:w-3 max-md:h-3" />
        {{ info.price }}
      </div>
    </div>
    <div class="mt-1.75 mb-4 max-md:mt-2 max-md:mb-3 text-lg font-medium z-20 relative opacity-50 max-md:text-sm">
      Awaiting the next line<span class="max-md:hidden">...</span>
    </div>
    <UProgress v-model="info.progress" size="2xl" color="neutral" />
    <div class="text-center text-lg z-20 relative mt-2.5 max-md:text-sm">
      Filling the current line
    </div>
    <div class="text-center text-2xl md:mt-1.75 max-md:text-sm z-20 relative">
      {{ info.progress }} %
    </div>
    <div class="flex justify-between text-sm mt-4 max-md:mt-1 max-md:text-xs z-20 relative">
      <div>
        <div>
          {{ info.partnerBonus }} SOL
        </div>
        <div class="opacity-60">
          Partner bonus
        </div>
      </div>
      <div class="flex flex-col items-end">
        <div>
          {{ info.profitLevel }} SOL
        </div>
        <div class="opacity-60">
          Profit level
        </div>
      </div>
    </div>
  </div>
</template>
