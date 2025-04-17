<script setup lang="ts">
import type { AuthLogoutFeatureEmits } from "./interfaces";

/** События */
const emit = defineEmits<AuthLogoutFeatureEmits>(); ;
/** Выйти из учетки */
async function logout() {
  await AuthService.logout();
  emit("logout");
}
</script>

<template>
  <UButton variant="link" class="max-md:py-0.5 max-md:px-0.5 bg-neutral-800 rounded-5xl max-md:rounded-4xl text-neutral-200 cursor-pointer hover:text-neutral-200" @click="logout">
    <div class="p-2 max-md:py-3 max-md:px-3 flex items-center justify-center">
      <UIcon name="fci:logout" class="w-8 h-8 max-md:w-6 max-md:h-6" />
    </div>
  </UButton>
</template>
