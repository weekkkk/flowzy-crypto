<script setup lang="ts">
useSeoMeta({
  title: "Authorization",
  middleware: "not-authorized",
});
definePageMeta({
  layout: "form",
});
</script>

<template>
  <AuthActivatingPage />
</template>
