<script setup lang="ts">
const { data: link } = useAsyncData("referal-link", () => ReferralService.getLink(), { default: () => ({ text: "" }) });
defineExpose({
  link,
});
</script>

<template>
  <UInput v-model="link.text" :ui="{ base: 'pt-9.5 pb-9 pl-5.5 pr-6.3 bg-neutral-800' }" disabled class="w-127" />
</template>
