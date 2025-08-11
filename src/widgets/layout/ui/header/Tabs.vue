<script setup lang="ts">
import { headerItems, headerNoAuthorizedItems } from "./consts";

defineProps<{
  orientation?: "vertical";
}>();

const route = useRoute();

const { connecting, connected } = useExtendedWallet();

const items = computed(() => connected.value ? headerItems : headerNoAuthorizedItems);

const activeTabIndex = computed({
  get() {
    const currentPath = route.path;
    const index = items.value.findIndex(item => item.to === currentPath);
    return index !== -1 ? String(index) : undefined;
  },
  async set(payload: string | number) {
    const index = Number(payload);
    const selectedItem = items.value[index];
    if (selectedItem?.to) {
      await navigateTo(selectedItem.to);
      close();
    }
  },
});
</script>

<template>
  <div>
    <ClientOnly>
      <template #fallback>
        <div class="relative">
          <UTabs
            class="opacity-0"
            :items="headerNoAuthorizedItems"
            :orientation="orientation"
          />
          <div class="flex justify-center items-center absolute inset-0">
            <UProgress size="2xl" color="primary" />
          </div>
        </div>
      </template>
      <div class="relative">
        <UTabs
          v-model="activeTabIndex"
          :class="{ 'opacity-0': connecting }"
          default-value="0"
          :items="items"
          :orientation="orientation"
        />
        <div v-if="connecting" class="flex justify-center items-center absolute inset-0">
          <UProgress size="2xl" color="primary" />
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
