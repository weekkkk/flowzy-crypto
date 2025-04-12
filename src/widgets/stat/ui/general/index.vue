<script lang="ts" async setup>
const { data } = await useAsyncData("stat", () => StatService.getGeneralStat(), {});
</script>

<template>
  <StatCard :total-participants="data?.totalParticipants" :total-transactions="data?.totalTransactions" :sol-turnover="data?.solTurnover" />
</template>
