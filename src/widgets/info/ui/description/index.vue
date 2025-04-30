<template>
  <div class="flex items-start justify-between">
    <div class="grid grid-cols-2">
      <div class="mr-16.75">
        <div class="flex items-center gap-4.75 mb-6.25">
          <UBadge class="w-17.5 h-17.5" />
          <div class="text-2xl">
            New player position
          </div>
        </div>
        <div class="flex items-center gap-4.75">
          <UBadge color="secondary" class="w-17.5 h-17.5" />
          <div class="text-2xl">
            The place where the player <br>moves to after recycling
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center gap-4.75  mb-6.25">
          <UBadge color="neutral" class="w-17.5 h-17.5" />
          <div class="text-2xl">
            The place where the player<br>was before the recycle
          </div>
        </div>
        <div class="flex items-center gap-4.75 ">
          <UIcon name="fci:gradient-border-square" class="w-17.5 h-17.5" />
          <div class="text-2xl">
            Available space
          </div>
        </div>
      </div>
    </div>
    <div class="text-2xl">
      <div>
        <span class="font-medium">GAME</span>
        is the first ever
        <span class="bg-gradient-to-r primary-gradient bg-clip-text text-transparent">
          SMART CONTRACT GAME
        </span>that allows you to<br>
        earn PASSIVE INCOME in SOL straight to your wallet even without<br>
        inviting personal partners.
      </div>
      <div class="mt-5">
        Rewards in SOL from the game are instantly sent to your personal<br>crypto wallet.
      </div>
      <div class="mt-5">
        <span class="font-medium">Each</span>level is a separate structure thanks to the random placement.<br>
        Easy interaction, the Game uses only SOL.
      </div>
      <div class="mt-5">
        The SMART CONTRACT never stores any funds.
        <span class="text-primary-400">
          ALL REWARDS ARE
        </span><br>
        <span class="text-secondary-400">
          SENT INSTANTLY
        </span>
        and directly to the participants personal wallets.
      </div>
    </div>
  </div>
  <div class="flex items-center mt-38">
    <div class="text-2xl">
      <div>
        <span class="font-medium">ALL NEW PLAYERS</span>are randomly placed in the single big structure on each
        <br>level, providing everyone with the equal chance to earn rewards without the
        <br>need to invite personal partners.
      </div>
      <div class="mt-5">
        Each level can generate 2 types of rewards:
      </div>
      <div class="mt-2.5">
        <span class="text-secondary-400">BASIC LEVEL REWARD</span>- 74% of the level value from each cycle.
      </div>
      <div class="mt-2.5">
        <span class="text-primary-400">REFERRAL BONUS</span>- 26% from partners down to 3rd generation whenever<br>they earn the basic reward on the level.
      </div>
    </div>
    <NuxtImg src="/images/chart-1.png" class="w-59 h-58 ml-39" />
  </div>
</template>
