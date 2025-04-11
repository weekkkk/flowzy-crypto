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

/** Активный индекс вкладки */
const activeTabIndex = ref("0");
/** Пользователь авторизован */
const isAuthenticated = ref(true);
/** Состояние отображения шторки */
const visibleDrawer = ref(false);

/** Отображение иконок в зависимости от состояния шторки */
const iconShow = computed(() => visibleDrawer.value ? "fci:cross" : "fci:menu");

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

  visibleDrawer.value = false;
}
/** Переключение отображения шторки */
function toggleDrawer() {
  visibleDrawer.value = !visibleDrawer.value;
}
</script>

<template>
  <div class="flex items-center relative max-md:justify-between h-17.5">
    <div class="text-2xl max-md:text-base z-50">
      Flowzy Crypto
    </div>
    <UTabs v-model="activeTabIndex" :items="items" class="absolute left-112.5 max-md:hidden" @update:model-value="navigateToRoute" />
    <WalletInfoFeature v-if="isAuthenticated" class="absolute right-0 max-md:hidden" />
    <div class="md:hidden flex bg-neutral-800 p-2 rounded-3xl cursor-pointer z-50" @click="toggleDrawer">
      <UIcon :name="iconShow" class="w-6 h-6" />
    </div>
    <Transition
      enter-active-class="transition-opacity duration-200 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="visibleDrawer" class=" bg-neutral-900 fixed top-0 left-0 w-full h-screen z-40">
        <div class="flex flex-col justify-center items-center mt-57.25">
          <UTabs v-model="activeTabIndex" :items="items" orientation="vertical" @update:model-value="navigateToRoute" />
          <WalletInfoFeature v-if="isAuthenticated" class="mt-42" />
        </div>
      </div>
    </Transition>
  </div>
</template>
