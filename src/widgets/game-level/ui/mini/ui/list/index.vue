<script setup lang="ts">
/** Получить список игровых уровней */
const { data: levels, status } = useSolanaMethod({
  key: "short-levels",
  f: GameLevelService.getShortList,
});
</script>

<template>
  <UiLoaderWrap
    :data="levels"
    :status="status"
    wrap-class="grid grid-cols-8 max-md:grid-cols-6 gap-5 max-md:gap-3"
    loader-class="col-start-1 col-end-9 max-md:col-end-7"
    empty-class="col-start-1 col-end-9 max-md:col-end-7"
  >
    <template #default="{ data }">
      <GameLevelMiniCard v-for="item in data" :key="item.id" :info="item" />
    </template>
  </UiLoaderWrap>
</template>
