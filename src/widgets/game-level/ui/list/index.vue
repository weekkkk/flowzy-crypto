<script setup lang="ts">
import { GameLevelCardStates } from "~/src/entities/game-level/ui/card/enums";

/** Получить список игровых уровней */
const { data } = await useAsyncData(
  "game-levels",
  () => GameLevelService.getGameLevels(),
  {
    default: () => ({
      info: [
        {
          id: 1,
          level: 1,
          price: 55,
          state: GameLevelCardStates.Default,
          partnerBonus: 0,
          profitLevel: 0,
          userEarnings: [],
          progress: 0,
        },
      ],
    }),
  },
);
</script>

<template>
  <div class="grid grid-cols-5 max-md:grid-cols-2 gap-6 max-md:gap-2.5 md:bg-neutral-800 rounded-5xl md:py-12.5 md:px-12">
    <GameLevelCard v-for="item in data?.info" :key="item.id" :info="item" />
  </div>
</template>
