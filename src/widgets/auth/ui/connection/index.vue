<script lang="ts" setup>
import { levels } from "./consts";

// const state = reactive({
//   address: undefined,
//   level: undefined,
// });

// function onSumbit() {
//   return "submit";
// };
</script>

<template>
  <div class="flex justify-center">
    <!-- <UForm :state="state" class="space-y-4" @submit="onSubmit">
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormField>

      <UFormField label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormField>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm> -->
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
        <USelect class="w-142.5 h-17.5" variant="soft" size="md" trailing-icon="fci:select-open" :items="levels" :content="{ sideOffset: 0 }" :default-value="levels.at(0)" />
      </div>
      <div class="flex flex-col gap-3.75 text-2xl text-success-400 mb-11.5">
        <div class="flex items-center justify-between">
          <p>
            Network verification (Smart chain)
          </p>
          <UIcon name="fci:check" />
        </div>
        <div class="flex justify-between">
          <p>
            Balance check (At least 5.5 SOL)
          </p>
          <UIcon name="fci:check" />
        </div>
      </div>
      <UButton label="Activate" class="flex justify-center text-xl h-16.25 rounded-3xl cursor-pointer" />
    </div>
  </div>
</template>
