<script setup lang="ts">
/** Получить информацию кошелька юзера */
const { data } = useAsyncData("user-info", () => WalletService.getInfo({ userId: 1 }));

const { balance, status } = useWalletBalance();
const formatedBalance = computed(() => balance.value ? balance.value.toFixed(1) : "0.0");
</script>

<template>
  <div>
    <div class="text-2xl opacity-60 mb-5.75 max-md:mb-3.75 max-md:text-base">
      ID {{ data?.userId }} / Network game
    </div>
    <div class="flex justify-between items-center text-6xl font-medium">
      <div class="max-md:text-3xl">
        Network game
      </div>
      <div class="relative bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent max-md:text-xl">
        <ClientOnly>
          <UProgress
            v-if="status === 'pending'"
            size="2xl"
            color="primary"
            class="absolute inset-0 items-center justify-center"
          />
          <span :class="{ 'opacity-0': status === 'pending' }">
            {{ formatedBalance }} SOL
          </span>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
