<script lang="ts" async setup>
const { data } = await useAsyncData("user-stat", () => UserService.getStat({ userId: 1 }), { default: () => ({ income: 0, partnershipIncome: 0, partners: 0 }) });
</script>

<template>
  <div class="w-115 h-94.25 bg-neutral-800 max-md:bg-transparent rounded-5xl px-12.5 pt-12.5 md:flex md:flex-col max-md:px-0 max-md:pt-0 max-md:mt-0">
    <UserStatCard :records="data" />
  </div>
</template>
