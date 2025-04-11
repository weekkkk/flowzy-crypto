<script setup lang="ts">
/** Роутер */
const router = useRouter();
/** Выйти из учетки */
async function logout() {
  await AuthService.logout();
  router.push({ path: "/" });
}
</script>

<template>
  <Auth @click="logout" />
</template>
