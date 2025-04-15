<script lang="ts" setup>
import type { StatCardItemProps } from "./interfaces";

const props = defineProps<StatCardItemProps>();
</script>

<template>
  <li class="list-none">
    <h5 class="text-2xl text-neutral-400 opacity-60 max-md:text-base">
      <slot />
    </h5>
    <p class="text-4xl max-md:text-xl max-md:leading-6">
      {{ props.record.value }}
    </p>
    <p class="text-lg bg-gradient-to-r primary-gradient bg-clip-text text-transparent max-md:text-sm">
      + {{ props.record.profit }}
    </p>
  </li>
</template>
