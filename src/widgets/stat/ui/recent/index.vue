<script lang="ts" async setup>
const { data } = await useAsyncData("stat-recent", () => StatService.getRecent());
</script>

<template>
  <div class="w-full bg-neutral-800 rounded-5xl px-12.5 pt-12.5 pb-13.25 max-md:bg-transparent max-md:px-0 max-md:py-0">
    <div class="mb-12.5 max-md:mb-4">
      <h3 class="text-4xl max-md:text-xl max-md:leading-6">
        Recent activity
      </h3>
    </div>
    <StatRecentTable :records="data?.records" />
  </div>
</template>
