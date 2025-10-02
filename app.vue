<script setup lang="ts">
import { useAnchorWallet } from "solana-wallets-vue";

const { $solana } = useNuxtApp();

const route = useRoute();

const wallet = useAnchorWallet();
watch(wallet, (wallet) => {
  if (wallet) {
    const { partner } = route.query;
    $solana.init(wallet, typeof partner === "string" ? partner : undefined);
  }
  else {
    $solana.destroy();
  }
}, { immediate: import.meta.client });
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
