<script setup lang="ts">
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

defineProps<{
  short?: boolean;
}>();

const { publicKey } = useExtendedWallet();

const balance = ref<number | null>(null);

const formatedBalance = computed(() => balance.value?.toFixed(3) ?? "0.000");

onMounted(async () => {
  if (!publicKey.value)
    return;

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const lamports = await connection.getBalance(new PublicKey(publicKey.value));

  balance.value = lamports / LAMPORTS_PER_SOL;
});
</script>

<template>
  <div class="relative flex items-center gap-2.5 text-lg font-medium bg-neutral-800 rounded-5xl py-5.75 px-7 w-max max-md:py-3 max-md:px-4 max-md:h-max">
    <UIcon v-if="!short" name="fci:solana" class="w-6 h-6" />
    <div class="relative text-lg max-md:text-sm font-medium">
      <UProgress
        v-if="balance === null"
        size="2xl"
        color="primary"
        class="absolute inset-0"
      />
      {{ formatedBalance }}
    </div>
    SOL
  </div>
</template>
