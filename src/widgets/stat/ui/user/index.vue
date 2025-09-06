<script lang="ts"  setup>
const { data: stat, status, error } = useSolanaMethod({
  key: "user-stat",
  f: UserService.getStat,
  default: {
    income: 0,
    partners: 0,
    partnershipIncome: 0,
  },
});
</script>

<template>
  <UiLoaderWrap
    empty-class="w-full h-full"
    loader-class="w-full h-full"
    wrap-class="w-115 h-94.25 bg-neutral-800 max-md:bg-transparent rounded-5xl px-12.5 pt-12.5 md:flex md:flex-col max-md:px-0 max-md:pt-0 max-md:mt-0"
    :data="stat"
    :status="status"
    :error="error"
  >
    <template #default="{ data }">
      <UserStatCard :records="data" />
    </template>
  </UiLoaderWrap>
</template>
