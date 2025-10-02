<script setup lang="ts">
const { data: link } = useSolanaMethod({
  key: "referal-link",
  f: ReferralService.getLink,
});

const linkText = computed(() => link.value && `${window.location.origin}/?partner=${link.value.token}`);

defineExpose({
  linkText,
});
</script>

<template>
  <UInput v-if="linkText" :model-value="linkText" :ui="{ base: 'pt-9.5 pb-9 pl-5.5 pr-6.3 bg-neutral-800' }" disabled class="w-127" />
</template>
