<script setup lang="ts">
definePageMeta({
  middleware: "authorized",
});

useHead({
  title: "Notifications",
});
</script>

<template>
  <NotificationsPage />
</template>
