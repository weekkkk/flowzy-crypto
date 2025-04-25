<script setup lang="ts">
const { data } = useAsyncData("referal-link", () => ReferralService.getLink(), { default: ({ value: "" }) });

/** Ссылка */
const link = data.value?.value;

defineExpose({
  link,
});
</script>

<template>
  <UInput v-model="data.value" :ui="{ base: 'pt-9.5 pb-9 pl-5.5 pr-6.3' }" disabled class="w-127" />
</template>
