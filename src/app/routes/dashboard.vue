<script setup lang="ts">
definePageMeta({
  middleware: "authorized",
});

useSeoMeta({
  title: "Dashboard",
});
</script>

<template>
  <DashboardConnectedPage />
</template>
