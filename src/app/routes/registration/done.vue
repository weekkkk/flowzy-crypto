<script setup lang="ts">
useSeoMeta({
  title: "Authorization",
  middleware: "authorized",
});

definePageMeta({
  layout: "form",
});
</script>

<template>
  <AuthRegisteredPage />
</template>
