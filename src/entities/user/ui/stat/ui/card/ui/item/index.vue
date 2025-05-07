<script lang="ts" setup>
import type { UserStatCardItemProps } from "./interfaces";

const props = defineProps<UserStatCardItemProps>();
</script>

<template>
  <li class="list-none">
    <h5 class="text-2xl  text-neutral-400 opacity-60 max-md:text-base mb-1.25 max-md:mb-1">
      <slot />
    </h5>
    <div class="flex items-center gap-x-1.25">
      <p class="text-4xl max-md:text-xl max-md:leading-6">
        {{ props.value }}
      </p>
      <p v-show="props.sol" class="text-2xl bg-gradient-to-r primary-gradient bg-clip-text text-transparent max-md:text-base">
        SOL
      </p>
    </div>
  </li>
</template>
