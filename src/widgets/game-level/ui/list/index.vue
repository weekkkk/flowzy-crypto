<script setup lang="ts">
/** Получить список игровых уровней */
const { data } = await useAsyncData("game-levels", () => GameLevelService.getGameLevels());
</script>

<template>
  <div class="grid grid-cols-5 max-md:grid-cols-2 gap-6 max-md:gap-2.5 md:bg-neutral-800 rounded-5xl md:py-12.5 md:px-12">
    <GameLevel v-for="item in data?.info" :key="item.id" :info="item" />
  </div>
</template>
