<script setup lang="ts">
import { WalletIcon, WalletMultiButton } from "solana-wallets-vue";

const { wallet, connecting, connected, content } = useExtendedWallet();
</script>

<template>
  <div>
    <WalletMultiButton>
      <template #default="{ openModal, publicKeyBase58, publicKeyTrimmed }">
        <UButton
          v-if="!wallet"
          label="Connect wallet"
          class="w-55 h-16 text-xl flex items-center justify-center max-md:w-37.75 max-md:h-15 max-md:text-base cursor-pointer"
          @click="openModal"
        />
        <UButton
          v-else-if="!publicKeyBase58.value"
          :disabled="!wallet || connecting || connected"
          :label="content"
          class="w-55 h-16 text-xl flex items-center justify-center max-md:w-37.75 max-md:h-15 max-md:text-base cursor-pointer"
          loading
        />
        <div
          v-else
          class="flex items-center gap-2.5 text-lg max-md:text-sm font-medium bg-neutral-800 rounded-5xl py-5.75 px-8.25 max-md:py-3 max-md:px-4.5"
          color="secondary"
        >
          <WalletIcon :wallet="wallet" />
          {{ publicKeyTrimmed.value }}
        </div>
      </template>
    </WalletMultiButton>
  </div>
</template>
