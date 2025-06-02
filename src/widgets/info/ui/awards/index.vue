<template>
  <div>
    <div class="text-6xl max-md:text-xl">
      Awards
    </div>
    <div class="md:flex">
      <!-- <UIcon name="fci:chart-2" class="w-206.75 h-92.5 mt-14.25 max-md:mt-3.5 max-md:w-83.75 max-md:h-37.5" /> -->
      <UiIconChart2 class="w-206.75 h-92.5 mt-14.25 max-md:mt-3.5 max-md:w-83.75 max-md:h-37.5" />
      <div class="md:ml-15.75 text-2xl max-md:text-base mt-1.75 max-md:mt-6.5">
        <div>
          Rewards in
          <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
            SOL
          </span>are generated when new <br class="md:hidden">players activate levels.
        </div>
        <div class="mt-5 max-md:mt-4.5">
          100% OF THE LEVEL ACTIVATION AMOUNT IS<br class="md:hidden">DIVIDED INTO 4 <br class="max-md:hidden">PARTS: 74%, 13%, 8%, 5%
        </div>
        <div class="mt-5 max-md:mt-3.5">
          <span class="text-secondary-200">BASIC Reward - 74%</span> goes to a random higher<br class="md:hidden">
          participant in the level structure
        </div>
        <div class="mt-4.5">
          <span class="text-secondary-200">REFERRAL BONUS - 26%</span> is split between<br class="md:hidden">
          higher referral partners up to the <br class="max-md:hidden"> 3rd partner<br class="md:hidden">ascending tier.
        </div>
        <div class="mt-2.75">
          <span class="text-info-400">
            1st
          </span>
          higher tier receives
          <span class="text-info-400">
            13%
          </span>
        </div>
        <div class="mt-3.75 max-md:mt-2.5">
          <span class="text-info-400">
            2nd
          </span> higher tier receives
          <span class="text-info-400">
            8%
          </span>
        </div>
        <div class="mt-3.75 max-md:mt-1.75">
          <span class="text-info-400">
            3rd
          </span> higher level receives
          <span class="text-info-400">
            5%
          </span>
        </div>
        <div class="mt-5.5 opacity-60 max-md:mt-4">
          * Referral bonuses can only be received from<br class="md:hidden">activated levels.
        </div>
        <div class="mt-4.5 opacity-60">
          - These 4 parts from one transaction are<br class="md:hidden">
          immediately distributed<br class="max-md:hidden">
          to the wallets of the<br class="md:hidden">
          participants according to the game rules.
        </div>
      </div>
    </div>
    <div class="md:flex md:justify-between mt-14.5 max-md:mt-7.5">
      <UiIconInfoBasicReward class="max-md:hidden w-175 h-44" />
      <!-- <UIcon name="fci:info-basic-reward" class="max-md:hidden w-175 h-44" /> -->
      <UiIconInfoReferralBonus class="max-md:hidden w-175 h-47" />
      <!-- <UIcon name="fci:info-referral-bonus" class="max-md:hidden w-175 h-47" /> -->
      <UiIconBasicRewardMobile class="md:hidden w-80.5 h-34.25" />
      <!-- <UIcon name="fci:basic-reward-mobile" class="md:hidden w-80.5 h-34.25" /> -->
      <UiIconReferralBonusMobile class="md:hidden w-83.75 h-41.5 mt-8.5" />
      <!-- <UIcon name="fci:referral-bonus-mobile" class="md:hidden w-83.75 h-41.5 mt-8.5" /> -->
    </div>
  </div>
</template>
