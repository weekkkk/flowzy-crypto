<script setup lang="ts">
import type { GameLevelEntryProps } from "./interfaces";

/** Параметры */
defineProps<GameLevelEntryProps>();
</script>

<template>
  <div>
    {{ info }}
  </div>
</template>
