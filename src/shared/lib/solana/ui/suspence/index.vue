<script setup lang="ts">
defineProps<{ loaderClass?: string }>();

const { connecting, connected } = useExtendedWallet();
</script>

<template>
  <ClientOnly>
    <template #fallback>
      <div class="flex justify-center items-center" :class="loaderClass">
        <UProgress size="2xl" color="primary" class="w-1/2" />
      </div>
    </template>
    <div
      v-if="connecting"
      class="flex justify-center items-center"
      :class="loaderClass"
    >
      <UProgress size="2xl" color="primary" class="w-1/2" />
    </div>
    <slot v-else v-bind="{ connected, connecting }" />
  </ClientOnly>
</template>
