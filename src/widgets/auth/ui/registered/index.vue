<script lang="ts" setup>
</script>

<template>
  <div class="py-12.5 px-12.5 bg-neutral-800 rounded-3xl">
    <div class="flex items-center justify-center gap-x-3.75 mb-5">
      <h1 class="text-4xl">
        Registered
      </h1>
      <UIcon name="fci:check" class="w-8 h-8" />
    </div>
    <div class="text-center text-2xl mb-5">
      <span class="text-neutral-400/60">Congratulations! You are succesfully </span>
      <span>registered</span>
    </div>
    <USeparator color="crayola" class="opacity-18 mb-5" />
    <div class="text-2xl text-center mb-10">
      <span class="text-neutral-400/60">Connect your Network game account to </span>
      <span>telegram bot</span><br>
      <span class="text-neutral-400/60"> to receive immediate notifications about incoming<br>transactions and other info</span>
    </div>
    <div class="flex flex-col items-center justify-center">
      <UButton label="Connect notifier bot" class="w-142.5 h-16.25 text-xl flex justify-center mb-5 cursor-pointer rounded-3xl" />
      <UButton label="Close" variant="ghost" leading-icon="fci:grey-cross" class="w-35 h-16.25 text-neutral-400/60 text-2xl flex justify-center cursor-pointer" />
    </div>
  </div>
</template>
