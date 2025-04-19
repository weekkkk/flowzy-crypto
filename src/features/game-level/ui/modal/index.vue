<script setup lang="ts">
import type { GameLevelModalProps } from "./interfaces";

/** Параметры */
const props = defineProps<GameLevelModalProps>();

/** Состояние отображения модалки */
const isModalVisible = ref(false);

/** Получить информацию игрового уровня */
const { data, refresh } = useAsyncData(
  "game-level-info",
  () => GameLevelService.getInfo({ id: props.idCard }),
  { immediate: false },
);
/** Метод активирования игрового уровня */
const { refresh: refreshActivateGameLevel } = useAsyncData(
  "activate-game-level",
  () => GameLevelService.activateGameLevel({ id: props.idCard }),
  { immediate: false },
);
/** Активировать игровой уровень */
async function activateGameLevel() {
  await refreshActivateGameLevel();
  isModalVisible.value = false;
}

/** Отслуживание состояние модалки */
watch(() => isModalVisible.value, (newValue) => {
  if (newValue) {
    refresh();
  }
});

/** Закрытие модалки */
function closeModal() {
  isModalVisible.value = false;
}
</script>

<template>
  <UModal v-model:open="isModalVisible" :ui="{ header: 'border-none', footer: 'border-none' }" class="relative">
    <slot name="activate" />
    <template #header>
      <UButton :ui="{ base: 'p-2.5' }" class="cursor-pointer absolute -top-12.5 -right-11.5" @click="closeModal">
        <UIcon name="fci:cross" class="text-2xl p-3.5" />
      </UButton>
      <div class="flex justify-between w-full">
        <div class="text-4xl font-medium">
          Activate <br> Network Game
        </div>
        <div class="text-2xl font-medium mr-4.5 mt-0.5">
          Level {{ data?.level }}
        </div>
      </div>
    </template>
    <template #body>
      <div class="flex flex-col gap-3.75 text-2xl font-medium">
        <div class="flex justify-between">
          <div>
            Level award 74$
          </div>
          <div class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            {{ data?.levelAward }} SOL
          </div>
        </div>
        <div class="flex justify-between">
          <div>
            Direct partners 13%
          </div>
          <div class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            {{ data?.directPartnersReward }} SOL
          </div>
        </div>
        <div class="flex justify-between">
          <div>
            Line 2 partners 8
          </div>
          <div class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            {{ data?.line2PartnersReward }} SOL
          </div>
        </div>
        <div class="flex justify-between">
          <div>
            Line 3 partners 5
          </div>
          <div class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            {{ data?.line3PartnersReward }} SOL
          </div>
        </div>
        <div class="bg-neutral-400 h-0.25 opacity-15 mt-10.5" />
        <div class="flex justify-between mt-7.5">
          <div class="text-info-400">
            Activate amount
          </div>
          <div class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            {{ data?.activateAmount }} SOL
          </div>
        </div>
        <div class="bg-neutral-400 h-0.25 opacity-15 mt-8.25" />
        <div class="flex justify-between text-success-400">
          <div>Network verification (Smart chain)</div>
          <UIcon name="fci:check" class="w-6 h-6" />
        </div>
        <div class="flex justify-between text-success-400">
          <div>Balance check (At least 5.5 SOL)</div>
          <UIcon name="fci:check" class="w-6 h-6" />
        </div>
      </div>
    </template>
    <template #footer>
      <UButton class="flex justify-center py-5 text-2xl w-full cursor-pointer" @click="activateGameLevel">
        Activate
      </UButton>
    </template>
  </UModal>
</template>
