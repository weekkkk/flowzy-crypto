<script setup lang="ts">
import type { AuthLogoutEmit } from "./interfaces";

/** События */
const emit = defineEmits<AuthLogoutEmit>();
/** Роутер */
const router = useRouter();
/** Выйти из учетки */
async function logout() {
  await AuthService.logout();
  router.push({ path: "/" });
  emit("logout");
}
</script>

<template>
  <Auth @click="logout" />
</template>
