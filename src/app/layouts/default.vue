<script setup lang="ts">
const router = useRouter();
/** Переход на домашнюю страницу */
function redirectToHome() {
  router.push({ path: "/" });
}
</script>

<template>
  <LayoutHeaderWidget @redirect-to-home="redirectToHome " />
  <NuxtPage />
</template>
