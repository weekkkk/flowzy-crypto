<script setup lang="ts">
const { data } = useAsyncData("referal-state", () => ReferralService.getStat());

const statInfo = data.value?.info;
</script>

<template>
  <ReferalStatCard v-if="statInfo" :info="statInfo" />
</template>
