<script setup lang="ts">
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
  <div class="flex gap-2.5">
    <WalletBalance :balance="balance" />
    <WalletAddress :address="address" />
    <AuthLogoutFeature />
  </div>
</template>
