<script setup lang="ts">
const {
  data: levels,
  status,
  error: levelsError,
} = useSolanaMethod(
  {
    key: "short-levels",
    f: GameLevelService.getShortList,
  },
);
</script>

<template>
  <UiLoaderWrap
    :data="levels"
    :status="status"
    :error="levelsError"
    wrap-class="grid grid-cols-5 gap-x-10 max-md:grid-cols-2 gap-y-8 max-md:gap-2.5 md:bg-neutral-800 rounded-5xl md:py-12.5 md:px-12"
    loader-class="col-start-1 col-end-6 max-md:col-end-3 flex justify-center items-center"
    empty-class="col-start-1 col-end-6 max-md:col-end-3 flex justify-center items-center"
  >
    <template #default="{ data }">
      <GameLevelCard v-for="item in data" :key="item.id" :info="item" />
    </template>
  </UiLoaderWrap>
</template>
