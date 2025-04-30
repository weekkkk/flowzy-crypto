<script lang="ts" setup>
import type { UserStatCardItemProps } from "./interfaces";

const props = defineProps<UserStatCardItemProps>();
</script>

<template>
  <li class="list-none pb-5 pt-6.25 first:pt-0 max-md:pt-3 max-md:pb-3 first:max-md:pt-0 last:max-md:pb-0 first:max-md:pb-3">
    <h5 class="text-2xl text-neutral-400 opacity-60 max-md:text-base">
      <slot />
    </h5>
    <div class="flex items-center gap-x-1.25">
      <p class="text-4xl max-md:text-xl max-md:leading-6">
        {{ props.value }}
      </p>
      <p v-show="props.sol" class="text-2xl bg-gradient-to-r primary-gradient bg-clip-text text-transparent max-md:text-sm">
        SOL
      </p>
    </div>
  </li>
</template>
