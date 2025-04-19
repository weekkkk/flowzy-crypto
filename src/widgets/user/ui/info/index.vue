<script setup lang="ts">
/** Получить информацию кошелька юзера */
const { data } = useAsyncData("user-info", () => WalletService.getInfo({ userId: 1 }));
</script>

<template>
  <div>
    <div class="text-2xl opacity-60 mb-5.75">
      ID {{ data?.userId }} / Network game
    </div>
    <div class="flex justify-between text-6xl font-medium">
      <div>
        Network game
      </div>
      <div class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
        {{ data?.balance }} SOL
      </div>
    </div>
  </div>
</template>
