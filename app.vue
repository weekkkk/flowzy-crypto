<script setup lang="ts">
import { useAnchorWallet } from "solana-wallets-vue";

const { $solana } = useNuxtApp();

const wallet = useAnchorWallet();
watch(wallet, (wallet) => {
  if (wallet) {
    $solana.init(wallet);
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
