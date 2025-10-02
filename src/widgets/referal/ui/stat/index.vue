<script setup lang="ts">
const { data: stat, status, error } = useSolanaMethod({
  key: "referal-state",
  f: ReferralService.getStat,
});
</script>

<template>
  <UiLoaderWrap
    empty-class="w-full h-full"
    loader-class="w-full h-full"
    wrap-class="md:bg-neutral-800 rounded-5xl w-145 max-md:w-full h-94.25 md:h-94.25"
    :status="status"
    :error="error"
    :data="stat"
  >
    <template #default="{ data }">
      <ReferalStatCard v-if="data" :info="data.info" />
    </template>
  </UiLoaderWrap>
</template>
