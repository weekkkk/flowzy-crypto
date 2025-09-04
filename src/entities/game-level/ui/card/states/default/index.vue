<script setup lang="ts">
import type { GameLevelCardDefaultProps } from "./interfaces";

/** Параметры */
defineProps<GameLevelCardDefaultProps>();
</script>

<template>
  <div class="bg-neutral-700 max-md:h-39.75 max-md:p-4 max-md:text-sm py-5.5 px-5 max-md:rounded-2xl rounded-3xl">
    <div class="flex justify-between text-lg max-md:text-sm">
      <div class="text-neutral-400 opacity-60">
        level {{ info.level }}
      </div>
      <div class="flex items-center gap-2.5">
        <UIcon name="fci:solana" class="w-6 h-6 max-md:w-3 max-md:h-3" />
        {{ info.price }}
      </div>
    </div>
    <div class="text-center mt-7.75 max-md:mt-5 text-lg font-medium max-md:text-sm">
      Available for<br>activation
    </div>
    <div class="flex justify-center mt-10 max-md:mt-6">
      <ClientOnly>
        <GameLevelModalFeature :id-level="info.id">
          <template #activate>
            <UButton class="flex text-xl py-5.5 px-18.5 max-md:py-3 max-md:px-10 cursor-pointer max-md:text-sm">
              Activate
            </UButton>
          </template>
        </GameLevelModalFeature>
      </ClientOnly>
    </div>
  </div>
</template>
