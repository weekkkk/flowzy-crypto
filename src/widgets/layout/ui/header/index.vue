<script setup lang="ts">
import type { LayoutHeaderWidgetEmits } from "./interfaces";
import Tabs from "./Tabs.vue";

/** События */
const emit = defineEmits<LayoutHeaderWidgetEmits>();

const { connected } = useExtendedWallet();

/** Состояние отображения шторки */
const visibleDrawer = ref(false);

/** Переключение отображения шторки */
function toggleDrawer() {
  visibleDrawer.value = !visibleDrawer.value;
}
watch(visibleDrawer, () => {
  document.body.classList.toggle("overflow-hidden", visibleDrawer.value);
});
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
          <Tabs class="max-md:hidden" />
        </nav>
        <div class="flex gap-2.5 w-full justify-end max-md:hidden ml-14.5">
          <ClientOnly>
            <template v-if="connected">
              <UiLibSolanaWalletBalance />
              <UiLibSolanaWallet />
              <UiLibSolanaDisconnectWallet />
            </template>
          </ClientOnly>
        </div>
      </div>
      <WalletInfoFeature short :user-id="1" class="mr-2 md:hidden" />
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
            <Tabs orientation="vertical" />
            <ClientOnly>
              <div v-if="connected" class="sticky bottom-0 flex gap-4 mt-42">
                <UiLibSolanaWalletBalance />
                <UiLibSolanaWallet />
                <UiLibSolanaDisconnectWallet />
              <!-- <WalletInfoFeature :user-id="1" /> -->
              <!-- <AuthLogoutFeature @logout="onLogout" /> -->
              </div>
            </ClientOnly>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>
