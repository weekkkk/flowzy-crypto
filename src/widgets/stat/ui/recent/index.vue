<script lang="ts" async setup>
const { data } = await useAsyncData("stat-recent", () => StatService.getRecentStat(), {});
</script>

<template>
  <StatTable :items="data?.data" />
</template>
