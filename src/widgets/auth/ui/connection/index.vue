<script lang="ts" setup>
const items = [
  "Level 16 (8 SOL)",
  "Level 3 (0.1 SOL)",
  "Level 4 (0.08 SOL)",
  "Level 5 (0.14 SOL)",
  "Level 6 (0.2 SOL)",
  "Level 7 (0.28 SOL)",
  "Level 8 (0.4 SOL)",
  "Level 8 (0.4 SOL)",
  "Level 7 (0.4 SOL)",
  "Level 6 (0.4 SOL)",
  "Level 5 (0.4 SOL)",
  "Level 4 (0.4 SOL)",
  "Level 3 (0.4 SOL)",
  "Level 2 (0.4 SOL)",
  "Level 1 (0.4 SOL)",
];
</script>

<template>
  <WalletApproveFeature />
  <USelect class="w-142.5 h-17.5 mt-20" variant="soft" trailing-icon="fci:select-open" :items="items" :default-value="items.at(0)" />
</template>
