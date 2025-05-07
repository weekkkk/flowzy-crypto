<script setup lang="ts">
import { GameLevelMiniCardStates } from "~/src/entities/game-level/ui/mini-card/enums";

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
          state: GameLevelMiniCardStates.Default,
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
  <div class="grid grid-cols-8 max-md:grid-cols-6 gap-5 max-md:gap-3">
    <GameLevelMiniCard v-for="item in data?.info" :key="item.id" :info="item" />
  </div>
</template>
