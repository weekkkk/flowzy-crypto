<script lang="ts" setup>

</script>

<template>
  <div>
    <div class="grid grid-cols-[2fr_1fr] grid-rows-2 max-md:grid-cols-none max-md:grid-flow-row max-md:grid-rows-none">
      <div class="col-span-1 max-md:row-start-1 max-md:-ml-1.5">
        <div class="max-md:w-87">
          <h1 class="text-6xl mb-9.25 max-md:text-3xl max-md:text-center max-md:mb-6">
            Welcome back
          </h1>
          <GameLevelMiniListWidget class="w-175 h-40 mb-11.25 max-md:w-full max-md:mb-6 max-md:h-42" />
        </div>
      </div>
      <div class="flex justify-center md:block max-md:w-83.75">
        <UButton label="My network" class="w-55 h-16.25 text-xl flex justify-center items-center col-start-1 max-md:row-start-3 max-md:row-span-2 max-md:w-37.75 max-md:h-15 max-md:text-base" />
      </div>
      <StatUserWidget class="col-start-2 row-end-1 row-span-2 max-md:row-start-2 max-md:row-span-1 max-md:col-start-1 max-md:mt-0 self-end justify-self-end max-md:self-auto max-md:justify-self-auto max-md:mb-6 max-md:w-83.75 max-md:h-47.5" />
    </div>
  </div>
</template>
