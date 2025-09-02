<script setup lang="ts">
import type { GameLevelMiniCardProps } from "./interfaces";
import { GameLevelMiniCardStatesActive, GameLevelMiniCardStatesDefault, GameLevelMiniCardStatesUnavailable } from "#components";

/** Параметры */
const props = defineProps<GameLevelMiniCardProps>();

/** Получить состояние карточки */
const getCardState = computed(() => {
  switch (props.info.status) {
    case GameLevelStatusEnum.Active:
      return GameLevelMiniCardStatesActive;
    case GameLevelStatusEnum.Unavailable:
      return GameLevelMiniCardStatesUnavailable;
    case GameLevelStatusEnum.Default:
      return GameLevelMiniCardStatesDefault;
    default:
      return GameLevelMiniCardStatesDefault;
  }
});
</script>

<template>
  <component :is="getCardState" :info="props.info" />
</template>
