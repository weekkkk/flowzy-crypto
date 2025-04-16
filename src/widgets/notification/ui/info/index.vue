<script setup lang="ts">
/** Проверка коннекта с ботом */
const { data, refresh } = await useAsyncData("bot-connection-status", () => NotificationService.getBotConnected({ userId: 1 }));

/** Повторный вызов метода проверки коннекта с ботом */
function refreshBotConnection() {
  if (document.visibilityState === "visible")
    refresh();
}

/** После вмонтирования компонента */
onMounted(() => {
  document.addEventListener("visibilitychange", refreshBotConnection);
});
/** После размонтирования комопнента */
onUnmounted(() => {
  document.removeEventListener("visibilitychange", refreshBotConnection);
});
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="w-226.75">
      <div v-if="data?.isConnectedBot" class="flex flex-col items-center">
        <h1 class="text-6xl max-md:text-3xl mb-12.5 max-md:mb-6 text-center font-medium">
          Connect bot to receive
          <span class="text-secondary-200">notifications</span>
          about
          <br class="md:hidden">
          <span class="text-info-400">rewards</span>
          <span class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            directly in <br class="md:hidden"> telegram
          </span>
        </h1>
        <UButton to="#" target="_blank" class="flex py-5.5 px-18.5 max-md:px-12.5 text-xl max-md:text-base cursor-pointer">
          Connect
        </UButton>
      </div>
      <div v-else>
        <h1 class="text-6xl max-md:text-3xl mb-12.5 text-center font-medium">
          The
          <span class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            telegram
          </span>
          bot is <br class="md:hidden">
          <span class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            already
          </span>
          <span class="text-secondary-200">connected</span>
        </h1>
      </div>
    </div>
  </div>
</template>
