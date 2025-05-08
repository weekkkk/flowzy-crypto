<script setup lang="ts">
definePageMeta({
  middleware: "authorized",
});

useSeoMeta({
  title: "Partners",
});
</script>

<template>
  <PartnersPage />
</template>
