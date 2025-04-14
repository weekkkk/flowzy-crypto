<script setup lang="ts">
import type { AuthLogoutFeatureEmits } from "./interfaces";

/** События */
const emit = defineEmits<AuthLogoutFeatureEmits>();;
/** Выйти из учетки */
async function logout() {
  await AuthService.logout();
  emit("logout");
}
</script>

<template>
  <div class="bg-neutral-800 rounded-5xl max-md:rounded-4xl cursor-pointer" @click="logout">
    <div class="p-4.75 max-md:py-3 max-md:px-3 flex items-center justify-center">
      <UIcon name="fci:logout" class="w-8 h-8 max-md:w-6 max-md:h-6" />
    </div>
  </div>
</template>
