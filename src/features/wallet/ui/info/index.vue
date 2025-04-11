<script setup lang="ts">
import type { WalletInfoEmit } from "./interfaces";

/** События */
const emit = defineEmits<WalletInfoEmit>();

/** Адрес кошелька */
const address = ref("");
/** Баланс кошелька */
const balance = ref("");

/** Получить данные кошелька */
async function getWalletData() {
  const response = await WalletService.getInfo({ userId: 1 });
  address.value = response.address;
  balance.value = response.balance;
}

/** После рендера компонента */
onMounted(async () => {
  await getWalletData();
});
</script>

<template>
  <div class="flex items-center gap-2.5 max-md:gap-4">
    <WalletBalance :balance="balance" />
    <WalletAddress :address="address" />
    <AuthLogoutFeature @logout="emit('logout')" />
  </div>
</template>
