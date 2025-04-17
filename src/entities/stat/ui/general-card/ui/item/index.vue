<script lang="ts" setup>
import type { StatGeneralCardItemProps } from "./interfaces";

const props = defineProps<StatGeneralCardItemProps>();
</script>

<template>
  <li class="list-none pb-5 pt-6.25 max-md:pt-3 max-md:pb-3 first:max-md:pt-0 last:max-md:pb-0">
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
