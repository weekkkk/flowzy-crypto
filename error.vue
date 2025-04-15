<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div v-if="error?.statusCode === 404" class="flex flex-col items-center justify-center text-6xl max-md:text-3xl font-medium h-screen">
    <h1>404</h1>
    <h2 class="mt-2.5 text-center">
      Ops, This page <br class="md:hidden"> not found
    </h2>
    <UButton
      class="text-xl max-md:text-base font-medium py-5 px-21 max-md:py-5.25 max-md:px-13.5 cursor-pointer mt-12.5 max-md:mt-6"
      @click="handleError"
    >
      Home
    </UButton>
  </div>
  <div v-else>
    <h2>{{ error?.statusCode }}</h2>
    <button @click="handleError">
      Clear errors
    </button>
  </div>
</template>
