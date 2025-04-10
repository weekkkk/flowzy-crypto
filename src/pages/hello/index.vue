<script setup lang="ts"></script>

<template>
  <h2 class="text-6xl">
    Hello Page!
  </h2>
  <HelloPageInfo />
  <HelloWorldWidget />
  <HelloWorldFeature />
  <HelloWorld />
  <UiWorld />
  <NuxtImg src="/images/hello-world.png" />
  <UButton>
    Test Button
  </UButton>

  <div class="flex items-center gap-2">
    <UIcon name="fci:logout" class="text-primary-400 text-6xl" />

    <span class="text-5xl">
      <i class="font-bold">fci</i>:logout
    </span>
  </div>

  <div class="bg-primary-400 mt-4">
    Test Box
  </div>
</template>
