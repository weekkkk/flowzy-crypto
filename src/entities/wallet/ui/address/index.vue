<script setup lang="ts">
import type { WalletAddressProps } from "./interfaces";

defineProps<WalletAddressProps>();

/** Функция для сокращения адреса */
function shortenAddress(address: string): string {
  if (address.length <= 10)
    return address;

  const start = address.slice(0, 4);
  const end = address.slice(-2);
  return `${start}...${end}`;
}
</script>

<template>
  <div class="flex items-center gap-2.5 text-lg font-medium bg-neutral-800 rounded-5xl py-5.75 px-8.25">
    <UIcon name="fci:fox" class="w-6 h-6" />
    {{ shortenAddress(address) }}
  </div>
</template>
