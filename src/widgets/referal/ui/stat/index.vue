<script setup lang="ts">
const { data } = useAsyncData("referal-state", () => ReferralService.getStat(), { default: () => ({ info: { countPartners: 0, referralBonus: 0, lostProfits: 0 } }) });
</script>

<template>
  <ReferalStatCard :info="data.info" />
</template>
