<script lang="ts" setup>
const { data: stat, error, status } = useSolanaMethod({
  key: "stat",
  f: StatService.getGeneral,
});
</script>

<template>
  <UiLoaderWrap
    empty-class="w-full h-full"
    loader-class="w-full h-full"
    wrap-class="w-115 h-121.75 bg-neutral-800 max-md:bg-transparent rounded-5xl px-12.5 pt-5.5 flex flex-col max-md:w-full max-md:px-0 max-md:h-auto max-md:pt-0 max-md:mt-0"
    :status="status"
    :data="stat"
    :error="error"
  >
    <template #default="{ data }">
      <StatGeneralCard
        :total-participants="data?.totalParticipants"
        :total-transactions="data?.totalTransactions"
        :sol-turnover="data?.solTurnover"
      />
    </template>
  </UiLoaderWrap>
</template>
