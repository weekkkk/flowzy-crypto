<script setup generic="T" lang="ts">
import type { AsyncData } from "#app";

defineProps<{
  data: AsyncData<T, Error>["data"]["value"];
  status: AsyncData<T, Error>["status"]["value"];
  error: AsyncData<T, Error>["error"]["value"];
  wrapClass: string;
  loaderClass: string;
  emptyClass: string;
}>();
</script>

<template>
  <div :class="wrapClass">
    <div
      v-if="status === 'pending'"
      class="flex justify-center items-center"
      :class="loaderClass"
    >
      <UProgress class="w-1/2" size="2xl" color="primary" />
    </div>
    <div
      v-else-if="!error && (!data || (Array.isArray(data) && !data.length))"
      class="flex justify-center items-center"
      :class="emptyClass"
    >
      <p>Empty</p>
    </div>
    <template v-else>
      <slot :data="data" :error="error" />
    </template>
  </div>
</template>
