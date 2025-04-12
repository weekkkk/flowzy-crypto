<script lang="ts" async setup>
const res = await useAsyncData("stat-recent", () => StatService.getRecentStat(), {});
</script>

<template>
  <StatCardRecent :data="res?.data?.value" />
</template>
