<script setup lang="ts">
const { disconnect } = useExtendedWallet();
</script>

<template>
  <UButton color="neutral" class="bg-neutral-800 p-5 max-md:p-3 h-max rounded-5xl max-md:rounded-4xl text-neutral-200 cursor-pointer" @click="disconnect">
    <UIcon name="fci:logout" class="w-8 h-8 max-md:w-6 max-md:h-6" />
  </UButton>
</template>
