<script lang="ts" setup>
// const levelsState = [
//   "default",
//   "default",
//   "active",
//   "default",
//   "active",
//   "default",
//   "default",
//   "active",
//   "default",
//   "default",
//   "default",
//   "active",
//   "default",
//   "default",
//   "unavailable",
//   "default",
// ];
</script>

<template>
  <div>
    <div class="grid grid-cols-[2fr_1fr] grid-rows-2 max-md:grid-cols-none max-md:grid-rows-[auto_auto_auto]">
      <div class="col-span-1 max-md:row-start-1">
        <h1 class="text-6xl mb-9.25 max-md:text-3xl max-md:text-center max-md:mb-6">
          Welcome back
        </h1>
        <div class="w-175 h-40 bg-neutral-800 mb-11.25 max-md:w-87 max-md:-ml-1.5 max-md:mb-6 max-md:h-42">
          <p>levels</p>
        </div>
      </div>
      <UButton label="My network" class="w-55 h-16.25 text-xl flex justify-center items-center col-start-1 max-md:row-start-3" />
      <StatUserWidget class="col-start-2 row-end-1 row-span-2 max-md:row-start-2 max-md:row-span-1 max-md:col-start-1 max-md:mt-0 self-end justify-self-end max-md:self-auto max-md:justify-self-auto" />
    </div>
  </div>
</template>
