<script setup lang="ts">
import type { LayoutHeaderWidgetEmits } from "./interfaces";
import { headerItems } from "./consts";

/** События */
const emit = defineEmits<LayoutHeaderWidgetEmits>();

const route = useRoute();

/** Пользователь авторизован */
const isAuthenticated = ref(true);
/** Состояние отображения шторки */
const visibleDrawer = ref(false);

/** Активный индекс вкладки */
const activeTabIndex = computed({
  get() {
    const currentPath = route.path;
    const index = headerItems.findIndex(item => item.to === currentPath);
    return index !== -1 ? String(index) : undefined;
  },
  async set(payload: string | number) {
    const index = Number(payload);
    const selectedItem = headerItems[index];
    if (selectedItem?.to) {
      await navigateTo(selectedItem.to);
      close();
    }
  },
});
function close() {
  visibleDrawer.value = false;
}
/** Переключение отображения шторки */
function toggleDrawer() {
  visibleDrawer.value = !visibleDrawer.value;
}
watch(visibleDrawer, () => {
  document.body.classList.toggle("overflow-hidden", visibleDrawer.value);
});
/** Скрытие шторки */
function onLogout() {
  visibleDrawer.value = false;
  emit("redirectToHome");
}
</script>

<template>
  <header>
    <div class="flex items-center relative max-md:justify-between max-md:mt-3.5">
      <div class="flex items-center w-full">
        <div class="w-full md:mt-3.5">
          <UButton variant="link" class="cursor-pointer p-0 " @click="emit('redirectToHome')">
            <UIcon name="fci:logo" class="text-2xl max-md:text-base z-50 text-neutral-200" />
          </UButton>
        </div>
        <nav>
          <UTabs v-model="activeTabIndex" :items="headerItems" class="max-md:hidden" />
        </nav>
        <div class="flex gap-2.5 w-full justify-end ml-14.5 max-md:hidden">
          <WalletInfoFeature v-if="isAuthenticated" :user-id="1" />
          <AuthLogoutFeature @logout="onLogout" />
        </div>
      </div>
      <UButton class="md:hidden flex bg-neutral-800 p-2 rounded-3xl cursor-pointer z-50" color="neutral" @click="toggleDrawer">
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
          <div class="flex flex-col justify-center items-center mt-57.25">
            <UTabs v-model="activeTabIndex" :items="headerItems" orientation="vertical" />
            <div class="flex gap-4 mt-42">
              <WalletInfoFeature v-if="isAuthenticated" :user-id="1" />
              <AuthLogoutFeature @logout="onLogout" />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>
