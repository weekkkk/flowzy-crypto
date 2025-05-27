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
        <span class="text-secondary-200">
          frozen
        </span> if 2 cycles are completed (2<br class="md:hidden"> base level rewards are
        earned), but the next<br>more
        <span class="text-info-400">
          expensive
        </span>
        level is not activated. When a level is
        frozen,
        <span class="bg-gradient-to-l from-secondary-400 via-primary-400 to-primary-400 bg-clip-text text-transparent">
          all profits, including referral<br> <span class="max-md:text-secondary-400">bonuses</span>
        </span> , go to the higher partner who has that<br class="md:hidden">level
        <span class="text-secondary-200">
          activated</span>.
      </div>
      <div class="grid md:grid-cols-3 max-md:grid-cols-2 gap-10 mt-10 max-md:mt-3 max-md:gap-2.5 md:w-237.5">
        <GameLevelCard v-for="item in data" :key="item.id" :info="item" />
      </div>
    </div>
  </div>
</template>
