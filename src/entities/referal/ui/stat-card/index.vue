<script setup lang="ts">
import type { ReferalStatCardProps } from "./interfaces";

defineProps<ReferalStatCardProps>();
</script>

<template>
  <div class="md:bg-neutral-800 md:py-9.5 md:px-12.5 rounded-5xl w-145 max-md:w-full md:h-94.25">
    <div class="mb-6 max-md:mb-3">
      <div class="text-2xl opacity-60 max-md:text-base">
        Partners
      </div>
      <div class="text-4xl max-md:text-xl max-md:mt-1">
        {{ info.countPartners }}
      </div>
    </div>
    <div class="h-0.25 bg-neutral-400 opacity-20" />
    <div class="mt-5 max-md:mt-3.5 mb-5 max-md:mb-4.5">
      <div class="text-2xl opacity-60 max-md:text-base">
        Referral bonus
      </div>
      <div class="text-4xl flex items-center gap-1.25 mt-0.5 max-md:text-xl">
        {{ info.referralBonus }}
        <span class="text-2xl max-md:text-base bg-gradient-to-l to-secondary-500 from-primary-400 bg-clip-text text-transparent">
          SOL
        </span>
      </div>
    </div>
    <div class="h-0.25 bg-neutral-400 opacity-20" />
    <div class="mt-4.5 max-md:mt-3">
      <div class="text-2xl opacity-60 max-md:text-base">
        Lost profits
      </div>
      <div class="text-4xl flex items-center gap-1.25 mt-0.5 max-md:text-xl">
        {{ info.lostProfits }}
        <span class="text-2xl max-md:text-base bg-gradient-to-l to-secondary-500 from-primary-400 bg-clip-text text-transparent">
          SOL
        </span>
      </div>
    </div>
  </div>
</template>
