<script setup lang="ts">
/** Получить список игровых уровней */
const { data } = await useAsyncData("game-levels", () => GameLevelService.getGameLevels());
</script>

<template>
  <div class="grid grid-cols-5 gap-10 bg-neutral-800 rounded-5xl py-12.5 px-15">
    <GameLevel v-for="item in data?.info" :key="item.id" :info="item" />
  </div>
</template>
