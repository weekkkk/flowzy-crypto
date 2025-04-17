<script setup lang="ts">
import type { LayoutHeaderWidgetEmits } from "./interfaces";
import { headerItems } from "./consts";

/** События */
const emit = defineEmits<LayoutHeaderWidgetEmits>();
const router = useRouter();

/** Пользователь авторизован */
const isAuthenticated = ref(true);
/** Состояние отображения шторки */
const visibleDrawer = ref(false);

/** Активный индекс вкладки */
const activeTabIndex = computed({
  get() {
    const currentPath = router.currentRoute.value.path;
    const index = headerItems.findIndex(item => item.to === currentPath);
    return index !== -1 ? String(index) : undefined;
  },
  set(payload: string | number) {
    const index = Number(payload);
    const selectedItem = headerItems[index];
    if (selectedItem?.to) {
      router.push(selectedItem.to);
      visibleDrawer.value = false;
    }
  },
});

/** Переход по пути */
function navigateToRoute(index: number | string) {
  const selectedItem = headerItems[+index];

  if (!selectedItem?.to)
    return;

  router.push(selectedItem.to);
  visibleDrawer.value = false;
}
/** Переключение отображения шторки */
function toggleDrawer() {
  visibleDrawer.value = !visibleDrawer.value;
  document.body.classList.toggle("overflow-hidden", visibleDrawer.value);
}
/** Скрытие шторки */
function onLogout() {
  visibleDrawer.value = false;
  emit("redirectToHome");
}
</script>

<template>
  <div class="flex items-center relative max-md:justify-between h-17.5">
    <nav class="flex md:h-17.5">
      <UButton variant="link" class="cursor-pointer p-0 mt-1.5" @click="emit('redirectToHome')">
        <UIcon name="fci:logo" class="text-2xl w-37.5 max-md:w-25 max-md:text-base z-50 text-neutral-200" />
      </UButton>
      <UTabs v-model="activeTabIndex" :items="headerItems" class="absolute top-0 left-112.5 max-md:hidden" @update:model-value="navigateToRoute" />
    </nav>
    <div class="flex gap-2.5 absolute right-0 max-md:hidden">
      <WalletInfoFeature v-if="isAuthenticated" :user-id="1" />
      <AuthLogoutFeature @logout="onLogout" />
    </div>
    <UButton class="md:hidden flex bg-neutral-800 p-2 rounded-3xl cursor-pointer z-50 hover:bg-neutral-800" color="neutral" @click="toggleDrawer">
      <UIcon v-show="visibleDrawer" name="fci:cross" class="w-6 h-6 text-neutral-200" />
      <UIcon v-show="!visibleDrawer" name="fci:menu" class="w-6 h-6 text-neutral-200" />
    </UButton>
    <Transition
      enter-active-class="transition-opacity duration-200 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="visibleDrawer" class="bg-neutral-900 fixed top-0 left-0 w-full h-screen z-40">
        <div class="flex flex-col justify-center items-center h-full">
          <UTabs v-model="activeTabIndex" class="mb-26" :items="headerItems" orientation="vertical" @update:model-value="navigateToRoute" />
          <div class="flex gap-4 absolute bottom-0 mb-25">
            <WalletInfoFeature v-if="isAuthenticated" :user-id="1" />
            <AuthLogoutFeature @logout="onLogout" />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
