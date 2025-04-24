<script setup lang="ts">
// isLoggedIn нужно получать из метода check auth
const isLoggedIn = false;
const layout = isLoggedIn ? "default" : "custom";
</script>

<template>
  <UApp>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
