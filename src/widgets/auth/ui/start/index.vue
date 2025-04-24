<script lang="ts" setup>
const router = useRouter();
function navigateToLogin() {
  router.push("/login");
}
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-6xl font-medium text-center max-md:text-3xl">
      Make <span class="text-secondary-200">Your Crypto</span><br>
      Transactions <span class="text-info-400">Easier</span>
    </h1>
    <p class="mt-4 text-lg text-neutral-400 opacity-60 text-center max-md:mt-2 max-md:text-base">
      You can use any of the offered<br>wallets for connection
    </p>
    <UButton label="Connect wallet" class="w-55 h-16 mt-12 text-xl flex items-center justify-center max-md:mt-6 max-md:w-37.75 max-md:h-15 max-md:text-base cursor-pointer" @click="navigateToLogin" />
  </div>
</template>
