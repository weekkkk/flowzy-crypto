<script setup lang="ts">
import type { GameLevelEntryProps } from "./interfaces";
import { GameLevelModalFeature } from "#components";

/** Параметры */
defineProps<GameLevelEntryProps>();
</script>

<template>
  <div class="bg-neutral-700 w-72.5 py-5.5 px-5 rounded-3xl">
    <div class="flex justify-between">
      <div class="text-neutral-400 opacity-60">
        level {{ info.level }}
      </div>
      <div class="flex items-center gap-2.5">
        <UIcon name="fci:solana" class="w-6 h-6" />
        {{ info.price }}
      </div>
    </div>
    <div class="text-center mt-7.75 text-lg font-medium">
      Available for<br>activation
    </div>
    <div class="flex justify-center mt-10">
      <GameLevelModalFeature :id-card="1">
        <template #activate>
          <UButton class="flex text-xl py-5.5 px-18.5 cursor-pointer">
            Activate
          </UButton>
        </template>
      </GameLevelModalFeature>
    </div>
  </div>
</template>
