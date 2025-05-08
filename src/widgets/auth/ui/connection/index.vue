<script lang="ts" setup>
import type { FormSubmitEvent } from "@nuxt/ui";
import * as z from "zod";
import { GameLevelCardStates } from "~/src/entities/game-level/ui/card/enums";

const { data: info } = await useAsyncData(
  "game-levels",
  () => GameLevelService.getGameLevels(),
  {
    default: () => ({
      info: [
        {
          id: 1,
          level: 1,
          price: 55,
          state: GameLevelCardStates.Default,
          partnerBonus: 0,
          profitLevel: 0,
          userEarnings: [],
          progress: 0,
        },
      ],
    }),
  },
);

const levels = computed(() => {
  return info.value?.info?.map(lvl => `Level ${lvl.id} (${lvl.price} SOL)`);
});

const schema = z.object({
  address: z.string().nonempty("This field is required"),
  level: z.string(),
});

type Schema = z.output<typeof schema>;

const state = reactive<Required<Schema>>({
  address: "",
  level: levels.value[0],
});

// function onWalletResult(result: { isApproved: boolean }) {
//   if (result.isApproved) {
//     router.push("/registration/activating");
//   }
//   else {
//     console.warn("Not approved");
//   }
// }

function onSubmit(event: FormSubmitEvent<Schema>) {
  console.warn(event);
  navigateTo("/registration/activating");
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
        <p class="text-2xl mb-2.5 max-md:text-base max-md:mb-1">
          Your upline address and ID
        </p>
        <p class="text-neutral-400/60 text-lg mb-6 max-md:text-sm max-md:mb-5.75">
          0xF9e57f124C85E451CFAFceb118729023CdcddDCf
        </p>
        <UFormField name="address">
          <WalletApproveFeature
            v-model="state.address"
          />
          <!-- @result="onWalletResult" -->
        </UFormField>
      </div>
      <UFormField label="Choose game level" name="level" class="text-2xl mb-6.25 max-md:text-base">
        <USelect v-model="state.level" class="w-142.5 h-17.5 mt-6 max-md:w-83.75 max-md:mt-10.5 max-md:h-14" variant="soft" size="md" trailing-icon="fci:select-open" :items="levels" :content="{ sideOffset: 0 }" />
      </UFormField>
      <div class="flex flex-col gap-3.75 text-2xl text-success-400 mb-11.5 max-md:text-base max-md:mb-31">
        <div class="flex items-center justify-between">
          <p>
            Network verification (Smart chain)
          </p>
          <UIcon name="fci:check" class="text-success-400" />
        </div>
        <div class="flex justify-between">
          <p>
            Balance check (At least 5.5 SOL)
          </p>
          <UIcon name="fci:check" class="text-success-400" />
        </div>
      </div>
      <UButton label="Activate" class="flex justify-center text-xl h-16.25 rounded-3xl cursor-pointer max-md:h-15 max-md:text-base" type="submit" />
    </UForm>
  </div>
</template>
