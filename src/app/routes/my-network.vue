<script setup lang="ts">
definePageMeta({
  middleware: "authorized",
});

useSeoMeta({
  title: "My Network",
});
</script>

<template>
  <MyNetworkPage />
</template>
