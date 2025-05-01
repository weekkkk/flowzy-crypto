<script setup lang="ts">
import { GameLevelCardStates } from "~/src/entities/game-level/ui/card/enums";

const data = [
  {
    id: 1,
    level: 14,
    price: 5,
    state: GameLevelCardStates.Awaiting,
    partnerBonus: 0,
    profitLevel: 0,
    userEarnings: [],
    progress: 5,
  },
  {
    id: 1,
    level: 14,
    price: 5,
    state: GameLevelCardStates.Unavailable,
    partnerBonus: 0,
    profitLevel: 0,
    userEarnings: [],
    progress: 5,
  },
  {
    id: 1,
    level: 14,
    price: 5,
    state: GameLevelCardStates.Freeze,
    partnerBonus: 0,
    profitLevel: 0,
    userEarnings: [],
    progress: 5,
  },
];
</script>

<template>
  <div>
    <div class="text-6xl max-md:text-xl">
      Level freezing
    </div>
    <div class="text-2xl mt-14.25 max-md:mt-4 max-md:text-base">
      <div>FREEZE</div>
      <div class="mt-3.75 max-md:mt-2 font-normal">
        A level will be
        <span class="text-secondary-400">
          frozen
        </span> if 2 cycles are completed (2<br class="md:hidden">base level rewards are<br class="max-md:hidden">
        earned), but the next<br class="md:hidden">more
        <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
          expensive
        </span>
        level is not activated. When a<br class="md:hidden">level is<br class="max-md:hidden">
        frozen,
        <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
          all profits, including referral<br class="md:hidden"> <span class="max-md:text-secondary-400">bonuses</span>
        </span> , go to the higher partner who has<br class="max-md:hidden">
        that<br class="md:hidden">level
        <span class="text-secondary-400">
          activated</span>.
      </div>
      <div class="grid md:grid-cols-3 max-md:grid-cols-2 gap-10 mt-10 max-md:mt-3 max-md:gap-2.5 md:w-237.5">
        <GameLevelCard v-for="item in data" :key="item.id" :info="item" />
      </div>
    </div>
  </div>
</template>
