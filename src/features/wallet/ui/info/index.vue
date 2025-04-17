<script setup lang="ts">
import type { WalletInfoFeatureProps } from "./interfaces";

/** Параметры */
const props = defineProps<WalletInfoFeatureProps>();

/** Получить данные кошелька */
const { data } = useAsyncData("get-wallet-info", () => WalletService.getInfo({ userId: props.userId }));
</script>

<template>
  <div class="flex items-center gap-2.5 max-md:gap-4">
    <WalletBalance :balance="data?.balance" />
    <WalletAddress :address="data?.address" />
  </div>
</template>
