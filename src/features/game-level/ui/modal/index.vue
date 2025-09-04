<script setup lang="ts">
import type { GameLevelModalProps } from "./interfaces";

/** Параметры */
const props = defineProps<GameLevelModalProps>();

/** Состояние отображения модалки */
const isModalVisible = ref(false);

/** Получить информацию игрового уровня */
const { data, refresh } = useSolanaMethod({
  key: `game-level-info-${props.idLevel}`,
  f: data => GameLevelService.getOne(data, props.idLevel),
});

const {
  data: networkVerified,
  status: networkVerifiedStatus,
} = useSolanaMethod({
  key: `check-network`,
  f: GameLevelService.checkNetwork,
  watch: [() => props.idLevel, isModalVisible],
  immediate: isModalVisible.value,
});

const { balance, status: balancedStatus } = useWalletBalance();

const balanced = computed(() => !!(balance.value && data.value && balance.value >= data.value.activateAmount));

const { $solana: { program, anchor, wallet } } = useNuxtApp();

/** Активировать игровой уровень */
async function activateGameLevel() {
  if (!program.value || !anchor || !wallet.value)
    return;
  await GameLevelService.activate({
    anchor,
    program: program.value,
    wallet: wallet.value,
  }, props.idLevel);
  await refreshNuxtData("short-levels");
  await refreshNuxtData("balance");
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
  <UModal
    v-model:open="isModalVisible" title="Activate Network Game" description="Activate Network Game" :ui="{ header: 'border-none', footer: 'border-none', content: 'max-md:h-195 max-md:top-auto max-md:-translate-y-0 max-md:bottom-0' }"
  >
    <slot name="activate" />
    <template #header>
      <UButton :ui="{ base: 'p-2.5' }" class="max-md:hidden cursor-pointer md:absolute md:-top-12.5 md:-right-11.5" @click="closeModal">
        <UIcon name="fci:cross" class="w-6 h-6 p-3.5" />
      </UButton>
      <div class="flex flex-col w-full">
        <div class="flex justify-end mb-6.5 md:hidden ">
          <UButton class="bg-neutral-700 p-2 rounded-3xl cursor-pointer z-50" color="neutral" @click="closeModal">
            <UIcon name="fci:cross" class="w-6 h-6 text-neutral-200" />
          </UButton>
        </div>
        <div class="flex justify-between w-full">
          <div class="text-4xl font-medium max-md:text-xl">
            Activate <br> Network <span class="max-md:hidden">G</span><span class="md:hidden">g</span>ame
          </div>
          <div class="text-2xl font-medium md:mr-0.5 md:mt-1.5 max-md:text-base">
            Level {{ data?.level }}
          </div>
        </div>
      </div>
    </template>
    <template #body>
      <div class="flex flex-col gap-3.75 max-md:gap-0 text-2xl max-md:text-base font-medium mt-22.5 max-md:mt-12 mb-8">
        <div class="flex justify-between max-md:mb-4">
          <div>
            Level award 74$
          </div>
          <div class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            {{ data?.levelAward.toFixed(2) }} SOL
          </div>
        </div>
        <div class="flex justify-between max-md:mb-4">
          <div>
            Direct partners 13%
          </div>
          <div class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            {{ data?.directPartnersReward.toFixed(2) }} SOL
          </div>
        </div>
        <div class="flex justify-between max-md:mb-4">
          <div>
            Line 2 partners 8
          </div>
          <div class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            {{ data?.line2PartnersReward.toFixed(2) }} SOL
          </div>
        </div>
        <div class="flex justify-between mb-6.5 max-md:mb-7">
          <div>
            Line 3 partners 5
          </div>
          <div class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            {{ data?.line3PartnersReward.toFixed(2) }} SOL
          </div>
        </div>
        <div class="bg-neutral-400 opacity-20 h-0.25" />
        <div class="flex justify-between mt-4 mb-4 max-md:mt-6 max-md:mb-6">
          <div class="text-info-400">
            Activate amount
          </div>
          <div class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
            {{ data?.activateAmount.toFixed(2) }} SOL
          </div>
        </div>
        <div class="bg-neutral-400 opacity-20 h-0.25 mb-4" />
        <div
          class="flex justify-between items-center max-md:mb-1.75"
          :class="{
            'text-success-400': networkVerified,
            'text-error-500': networkVerifiedStatus === 'error',
            'text-gray-500 animate-pulse': networkVerifiedStatus === 'pending',
          }"
        >
          <div>Network verification (Smart chain)</div>
          <UIcon v-if="networkVerified" name="fci:check" class="w-6 h-6" />
          <UIcon v-else name="fci:cross" class="w-6 h-6" />
        </div>
        <div
          v-if="networkVerified && data"
          class="flex justify-between items-center"
          :class="{
            'text-success-400': balanced,
            'text-error-500': balancedStatus === 'error' || !balanced,
            'text-gray-500 animate-pulse': balancedStatus === 'pending',
          }"
        >
          <div>Balance check (At least {{ data.activateAmount }} SOL)</div>
          <UIcon v-if="balanced" name="fci:check" class="w-6 h-6" />
          <UIcon v-else name="fci:cross" class="w-6 h-6" />
        </div>
      </div>
    </template>
    <template #footer>
      <UButton
        :disabled="!(networkVerified && balanced)"
        :ui="{
          base: 'rounded-3xl max-md:rounded-5xl',
        }"
        class="flex justify-center max-md:mb-6.75 py-5 text-2xl max-md:text-base w-full cursor-pointer"
        @click="activateGameLevel"
      >
        Activate
      </UButton>
    </template>
  </UModal>
</template>
