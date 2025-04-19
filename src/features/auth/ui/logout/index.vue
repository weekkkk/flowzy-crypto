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
  <UButton variant="link" class="bg-neutral-800 p-5 max-md:p-3 h-max rounded-5xl max-md:rounded-4xl text-neutral-200 cursor-pointer hover:text-neutral-200" @click="logout">
    <UIcon name="fci:logout" class="w-8 h-8 max-md:w-6 max-md:h-6" />
  </UButton>
</template>
