<script setup lang="ts">
import type { GameLevelCardEntryProps } from "./interfaces";
import {
  GameLevelCardStatesActive,
  GameLevelCardStatesAwaiting,
  GameLevelCardStatesDefault,
  GameLevelCardStatesError,
  GameLevelCardStatesFreeze,
  GameLevelCardStatesUnavailable,
} from "#components";

/** Параметры */
const props = defineProps<GameLevelCardEntryProps>();

/** Получить состояние карточки */
const getCardState = computed(() => {
  switch (props.info.status) {
    case GameLevelStatusEnum.Error:
      return GameLevelCardStatesError;
    case GameLevelStatusEnum.Awaiting:
      return GameLevelCardStatesAwaiting;
    case GameLevelStatusEnum.Active:
      return GameLevelCardStatesActive;
    case GameLevelStatusEnum.Freeze:
      return GameLevelCardStatesFreeze;
    case GameLevelStatusEnum.Unavailable:
      return GameLevelCardStatesUnavailable;
    case GameLevelStatusEnum.Default:
      return GameLevelCardStatesDefault;
    default:
      return GameLevelCardStatesDefault;
  }
});
</script>

<template>
  <component :is="getCardState" :info="props.info" />
</template>
