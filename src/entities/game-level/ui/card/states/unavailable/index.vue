<script setup lang="ts">
import type { GameLevelCardUnavailableProps } from "./interfaces";

/** Параметры */
const props = defineProps<GameLevelCardUnavailableProps>();

const hours = computed(() => (props.info.initializeTimestamp - Date.now()) / (60 * 60 * 1000));
</script>

<template>
  <div class="relative max-md:h-39.75 h-60">
    <div class="max-md:hidden absolute -inset-0.5 -bottom-0.5 rounded-3xl bg-linear-270 from-(--ui-primary) to-(--ui-secondary)" />
    <div class="bg-neutral-700 max-md:h-39.75 h-full max-md:p-4 max-md:rounded-2xl max-md:text-sm py-5.5 px-5 rounded-3xl relative">
      <div class="flex justify-between z-20 relative text-lg max-md:text-sm">
        <div class="text-neutral-400 opacity-60">
          level {{ info.level }}
        </div>
        <div class="flex items-center gap-2.5  mr-1.2">
          <UIcon name="fci:solana" class="w-6 h-6 max-md:w-3 max-md:h-3" />
          {{ info.price }}
        </div>
      </div>
      <div class="flex flex-col justify-center items-center mt-4">
        <UIcon name="fci:timer" class="w-12 h-12" />
        <div class="text-lg font-medium text-center mt-4.75 max-md:mt-2 max-md:text-sm">
          <div class="opacity-60">
            Available in:
          </div>
          <div>{{ hours.toFixed(1) }} hours</div>
        </div>
      </div>
    </div>
  </div>
</template>
