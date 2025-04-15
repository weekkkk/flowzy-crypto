<script setup lang="ts">
/** Получить список игровых уровней */
const { data } = await useAsyncData("game-levels", () => GameLevelService.getGameLevels());
</script>

<template>
  <GameLevel v-for="item in data?.info" :key="item.id" :info="item" />
</template>
