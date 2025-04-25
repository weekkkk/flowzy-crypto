<script lang="ts" setup>
import * as z from "zod";
// import type { FormSubmitEvent } from '@nuxt/ui';
import { levels } from "./consts";

const schema = z.object({
  address: z.string().nonempty("This field is required"),
  level: z.string(),
});

type Schema = z.output<typeof schema>;

const state = reactive<Required<Schema>>({
  address: "",
  level: levels[0],
});

function onSubmit() {
  console.warn(`address: ${state.address}`);
  console.warn(`level: ${state.level}`);
}
</script>

<template>
  <div class="flex justify-center max-md:shrink-0">
    <UForm :state="state" :schema="schema" class="flex flex-col bg-neutral-800 p-13 rounded-3xl max-md:bg-transparent max-md:px-0 max-md:py-0" @submit="onSubmit">
      <div class="flex flex-col gap-y-3.75 mb-12.5 max-md:gap-y-3 max-md:mb-12">
        <h2 class="text-4xl max-md:text-xl">
          Quick registration<br>Network Game
        </h2>
        <p class="text-2xl max-md:text-base">
          <span class="text-neutral-400/60">Activate Network Game in one <br class="md:hidden">transaction with </span>
          <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent font-medium">SOL</span>
        </p>
      </div>
      <div class="flex flex-col mb-12.5">
        <p class="text-2xl mb-2.5 max-md:text-base">
          Your upline address and ID
        </p>
        <p class="text-neutral-400/60 text-lg mb-6 max-md:text-sm">
          0xF9e57f124C85E451CFAFceb118729023CdcddDCf
        </p>
        <UFormField name="address">
          <WalletApproveFeature v-model="state.address" />
        </UFormField>
      </div>
      <UFormField label="Choose game level" name="level" class="text-2xl mb-7.25 max-md:text-base">
        <USelect v-model="state.level" class="w-142.5 h-17.5 mt-6 max-md:w-full max-md:mt-10.5 max-md:h-14" variant="soft" size="md" trailing-icon="fci:select-open" :items="levels" :content="{ sideOffset: 0 }" />
      </UFormField>
      <div class="flex flex-col gap-3.75 text-2xl text-success-400 mb-11.5 max-md:text-base">
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
      <UButton label="Activate" class="flex justify-center text-xl h-16.25 rounded-3xl cursor-pointer max-md:h-15 max-md:text-base" type="submit" />
    </UForm>
  </div>
</template>
