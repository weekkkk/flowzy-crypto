<template>
  <div class="md:flex md:items-start md:justify-between">
    <div class="md:grid md:grid-cols-2">
      <div class="mr-16.75">
        <div class="flex items-center gap-4.75 max-md:gap-1.5 md:mb-6.25 max-md:mb-4">
          <UBadge class="w-17.5 h-17.5 max-md:w-8 max-md:h-8" />
          <div class="text-2xl max-md:text-sm">
            New player position
          </div>
        </div>
        <div class="flex items-center gap-4.75 max-md:gap-2.5 max-md:mb-4">
          <UBadge color="secondary" class="w-17.5 h-17.5 max-md:w-8 max-md:h-8" />
          <div class="text-2xl max-md:text-sm">
            The place where the player <br class="max-md:hidden">moves<br class="md:hidden">to after recycling
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center gap-4.75 max-md:gap-2.5 md:mb-6.25 max-md:mb-4">
          <UBadge color="neutral" class="w-17.5 h-17.5 max-md:w-8 max-md:h-8" />
          <div class="text-2xl max-md:text-sm">
            The place where the player<br class="max-md:hidden"> was<br class="md:hidden">before the recycle
          </div>
        </div>
        <div class="flex items-center gap-4.75 max-md:gap-2.5 max-md:mb-4">
          <UIcon name="fci:gradient-border-square" class="w-17.5 h-17.5 max-md:w-8 max-md:h-8" />
          <div class="text-2xl max-md:text-sm">
            Available space
          </div>
        </div>
      </div>
    </div>
    <div class="text-2xl max-md:text-base max-md:mt-6">
      <div>
        <span class="font-medium">GAME</span>
        is the first ever
        <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
          SMART CONTRACT<br class="md:hidden"> GAME
        </span>that allows you to<br class="max-md:hidden">
        earn PASSIVE INCOME<br class="md:hidden">in SOL straight to your wallet even without<br>
        inviting personal partners.
      </div>
      <div class="mt-5">
        Rewards in SOL from the game are instantly sent <br class="md:hidden">to your personal<br class="max-md:hidden">crypto wallet.
      </div>
      <div class="mt-4.5">
        <span class="font-medium">Each</span> level is a separate structure thanks to the<br class="md:hidden">random placement.<br>
        Easy interaction, the Game uses only SOL.
      </div>
      <div class="mt-5">
        The SMART CONTRACT never stores any funds.<br class="md:hidden">
        <span class="max-md:bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
          <span class="md:text-primary-400">
            ALL REWARDS ARE
          </span><br class="max-md:hidden">
          <span class="md:text-secondary-400">
            SENT INSTANTLY
          </span>
        </span>
        and<br class="md:hidden">directly to the participants personal wallets.
      </div>
    </div>
  </div>
  <div class="flex md:items-center max-md:flex-col mt-38 max-md:mt-12">
    <div class="text-2xl max-md:text-base">
      <div>
        <span class="font-medium">ALL NEW PLAYERS</span> are randomly placed in the<br class="md:hidden">
        single big structure on each
        <br class="max-md:hidden">level, providing<br class="md:hidden">
        everyone with the equal chance to earn rewards<br class="md:hidden">
        without the
        <br class="max-md:hidden">need to invite personal partners.
      </div>
      <div class="mt-5 max-md:hidden">
        Each level can generate 2 types of rewards:
      </div>
      <div class="mt-2.5 max-md:hidden">
        <span class="text-secondary-400">BASIC LEVEL REWARD</span>- 74% of the level value from each cycle.
      </div>
      <div class="mt-2.5 max-md:mt-4">
        <span class="text-primary-400 max-md:text-info-400">REFERRAL BONUS</span> - 26% from partners down<br class="md:hidden">
        to 3rd generation whenever<br class="max-md:hidden">they earn the basic<br class="md:hidden">reward on the level.
      </div>
    </div>
    <NuxtImg src="/images/chart-1.png" class="max-md:hidden w-59 h-58 md:ml-39" />
    <NuxtImg src="/images/chart-1-mobile.png" class="md:hidden w-45.75 h-43.25 mt-6 ml-16" />
  </div>
</template>
