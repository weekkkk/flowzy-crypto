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
  <div class="flex justify-center">
    <div class="flex flex-col bg-neutral-800 p-13 rounded-3xl">
      <div class="flex flex-col gap-y-3.75 mb-12.5">
        <h2 class="text-4xl">
          Quick registration<br>Network Game
        </h2>
        <p class="text-2xl">
          <span class="text-neutral-400/60">Activate Network Game in one transaction with </span>
          <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent font-medium">SOL</span>
        </p>
      </div>
      <div class="flex flex-col mb-12.5">
        <p class="text-2xl mb-2.5">
          Your upline address and ID
        </p>
        <p class="text-neutral-400/60 text-lg mb-6">
          0xF9e57f124C85E451CFAFceb118729023CdcddDCf
        </p>
        <WalletApproveFeature />
      </div>
      <div class="mb-7.25">
        <p class="text-2xl mb-6">
          Choose game level
        </p>
        <USelect class="w-142.5 h-17.5" variant="soft" size="md" trailing-icon="fci:select-open" :items="items" :content="{ sideOffset: 0 }" :default-value="items.at(0)" />
      </div>
      <div class="flex flex-col gap-3.75 text-2xl text-success-400 mb-11.5">
        <div>
          <p>
            Network verification (Smart chain)
          </p>
          <UIcon name="fci:check" />
        </div>
        <div>
          <p>
            Balance check (At least 5.5 SOL)
          </p>
        </div>
      </div>
      <UButton label="Activate" class="flex justify-center text-xl h-16.25 rounded-3xl cursor-pointer" />
    </div>
  </div>
</template>
