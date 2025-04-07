<script setup lang="ts">
const { data: message } = useAsyncData ("hello-get-message", () => HelloService.getMessage());
</script>

<template>
  <h3>Hello World Widget</h3>
  <details class="bg-primary-400">
    <summary>
      Mock <strong>HelloService.getMessage</strong> Response
    </summary>
    <p class="text-xl">
      {{ message?.value }}
    </p>
  </details>
</template>
