<script lang="ts" setup>
const emit = defineEmits(["check"]);
</script>

<template>
  <UInput variant="soft" size="md" placeholder="333333" class="w-142.5 max-md:w-full">
    <template #trailing>
      <UButton label="Approve" class="w-40 h-15.5 flex justify-center cursor-pointer rounded-3xl max-md:w-26.5 max-md:h-12 max-md:text-sm max-md:rounded-2xl max-md:mr-0.25" @click="emit('check')" />
    </template>
  </UInput>
</template>
