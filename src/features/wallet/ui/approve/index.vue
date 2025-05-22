<script lang="ts" setup>
import type { WalletApproveFeatureEmits, WalletApproveFeatureProps } from "./interfaces";

const props = defineProps<WalletApproveFeatureProps>();
const emit = defineEmits<WalletApproveFeatureEmits>();

async function onCheck() {
  const result = await WalletService.check({ address: props.modelValue });
  emit("result", result); // отдаем результат наверх
}
</script>

<template>
  <UInput
    :model-value="modelValue"
    variant="soft"
    size="md"
    placeholder="333333"
    class="w-142.5 max-md:w-full"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #trailing>
      <UButton
        label="Approve"
        class="w-40 h-15.5 flex justify-center mr-1 cursor-pointer rounded-3xl max-md:w-26.5 max-md:h-12 max-md:text-sm max-md:rounded-2xl max-md:mr-0.25"
        @click="onCheck"
      />
    </template>
  </UInput>
</template>
