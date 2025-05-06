<script setup lang="ts">
const referalRef = ref();

function copyLink() {
  navigator.clipboard.writeText(referalRef.value.link.text);
}
</script>

<template>
  <div class="max-md:text-center">
    <div class="text-6xl font-medium max-md:text-3xl">
      Partner <span class="max-md:hidden">N</span><span class="md:hidden">n</span>etwork
    </div>
    <div class="text-4xl max-md:text-xl font-medium mt-6.75 max-md:mt-2">
      <span class="bg-gradient-to-l to-secondary-500 from-primary-400 bg-clip-text text-transparent">
        Invite friends
      </span>
      and
      <span class="bg-gradient-to-l to-secondary-500 from-primary-400 bg-clip-text text-transparent">
        earn
      </span>
      from affiliate<br>income up to the third level
    </div>
    <div class="flex items-center gap-2.5 max-md:gap-1.5 mt-15 max-md:mt-5">
      <ReferalLinkFeature ref="referalRef" />
      <UButton variant="link" class="bg-neutral-800 rounded-3xl max-md:rounded-2xl text-neutral-200 cursor-pointer hover:text-neutral-200 p-8 max-md:py-3.25 max-md:px-4" @click="copyLink">
        <UIcon name="fci:copy" class="w-9 h-9 max-md:w-6 max-md:h-6" />
      </UButton>
    </div>
  </div>
</template>
