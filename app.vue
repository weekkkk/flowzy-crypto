<script setup lang="ts">
// eslint-disable-next-line unicorn/prefer-node-protocol
import { Buffer } from "buffer";
import { useAnchorWallet } from "solana-wallets-vue";

if (window)
  window.Buffer = Buffer;

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
