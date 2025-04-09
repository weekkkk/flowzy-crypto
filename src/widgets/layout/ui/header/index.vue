<script setup lang="ts">
const router = useRouter();
/** Пункты шапки */
const items = ref([
  {
    label: "Dashboard",
    to: "/dashboard",
  },
  {
    label: "My network",
    to: "/my-network",
  },
  {
    label: "Partners",
    to: "/partners",
  },
  {
    label: "Information",
    to: "/information",
  },
  {
    label: "Notifications",
    to: "/notifications",
  },
]);

// Активный индекс вкладки
const activeTabIndex = ref("0");

/** После рендера компонента */
onMounted(() => {
  const currentPath = router.currentRoute.value.path;
  const index = items.value.findIndex(item => item.to === currentPath);
  if (index !== -1) {
    activeTabIndex.value = String(index);
  }
});

/** Переход по пути */
function navigateToRoute(index: string | number) {
  const selectedItem = items.value[+index];

  if (selectedItem?.to)
    router.push(selectedItem.to);
}
</script>

<template>
  <div class="flex items-center relative">
    <div class="text-2xl">
      Flowzy Crypto
    </div>
    <UTabs v-model="activeTabIndex" :items="items" class="absolute left-112.5" @update:model-value="navigateToRoute" />
  </div>
</template>
