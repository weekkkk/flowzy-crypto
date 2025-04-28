<script lang="ts" setup>
</script>

<template>
  <div class="py-12.5 px-12.5 bg-neutral-800 rounded-3xl max-md:bg-transparent max-md:px-0 max-md:py-0">
    <div class="flex items-center justify-center gap-x-3.75 mb-5 max-md:mb-3">
      <h1 class="text-4xl max-md:text-xl">
        Registered
      </h1>
      <UIcon name="fci:check" class="w-8 h-8" />
    </div>
    <div class="text-center text-2xl mb-5 max-md:text-base max-md:mb-6">
      <span class="text-neutral-400/60">Congratulations! You are succesfully </span>
      <span>registered</span>
    </div>
    <USeparator color="crayola" class="opacity-18 max-md:mb-6" />
    <div class="text-2xl text-center mb-10 max-md:text-base max-md:mb-35">
      <span class="text-neutral-400/60">Connect your Network game account to </span><br class="md:hidden">
      <span>telegram bot</span><br class="max-md:hidden">
      <span class="text-neutral-400/60"> to receive immediate notifications about incoming <br class="max-md:hidden">transactions and other info</span>
    </div>
    <div class="flex flex-col items-center justify-center max-md:mb-6.75">
      <UButton label="Connect notifier bot" class="w-142.5 max-md:w-83.75 h-16.25 max-md:h-15 text-xl flex justify-center mb-5 cursor-pointer rounded-3xl max-md:rounded-5xl max-md:text-base max-md:mb-4" />
      <UButton label="Close" variant="ghost" leading-icon="fci:grey-cross" class="w-35 h-16.25 text-neutral-400/60 text-2xl flex justify-center cursor-pointer max-md:text-base max-md:w-full" />
    </div>
  </div>
</template>
