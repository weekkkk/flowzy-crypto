<script lang="ts" setup>
import { useMediaQuery } from "@vueuse/core";

const isMobile = useMediaQuery("(max-width: 768px)");
</script>

<template>
  <div>
    <h2 class="text-4xl mb-8 max-md:text-xl max-md:mb-3">
      About game
    </h2>
    <p class="text-2xl max-md:text-base">
      <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">The world's first smart contract game</span> with passive income in SOL <br v-show="!isMobile">straight to your wallet.<br>
      All players are randomly placed on 16 levels with unlimited cycles.
    </p>
    <p class="text-2xl max-md:text-base mt-6 max-md:mt-3">
      Rewards are distributed as follows:
    </p>
    <ul class="text-2xl max-md:text-base">
      <li>
        <span class="text-secondary-400">- 74%</span> of the level cost for each cycle of your <br v-show="isMobile">level
      </li>
      <li>
        <span class="text-info-400">- 13%-8%-5%</span> of the level cost from partners to 3 deep whenever they earn
      </li>
    </ul>
  </div>
</template>
