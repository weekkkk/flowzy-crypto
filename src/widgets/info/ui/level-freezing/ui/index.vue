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
    <div class="text-6xl">
      Level freezing
    </div>
    <div class="text-2xl mt-14.25">
      <div>FREEZE</div>
      <div class="mt-3.75 font-normal">
        A level will be
        <span class="text-secondary-400">
          frozen
        </span> if 2 cycles are completed (2 base level rewards are<br>
        earned), but the next more
        <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
          expensive
        </span>
        level is not activated. When a level is<br>
        frozen,
        <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
          all profits, including referral bonuses
        </span> , go to the higher partner who has<br>
        that level
        <span class="text-secondary-400">
          activated</span>.
      </div>
      <div class="flex gap-10 mt-10">
        <GameLevelCard v-for="item in data" :key="item.id" :info="item" />
      </div>
    </div>
  </div>
</template>
