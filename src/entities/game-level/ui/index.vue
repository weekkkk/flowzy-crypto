<script setup lang="ts">
import type { GameLevelEntryProps } from "./interfaces";
import { GameLevelStatesActive, GameLevelStatesAwaiting, GameLevelStatesDefault, GameLevelStatesError, GameLevelStatesFreeze, GameLevelStatesUnavailable } from "#components";
import { GameLevelStates } from "./enums";

/** Параметры */
const props = defineProps<GameLevelEntryProps>();

/** Получить состояние карточки */
const getCardState = computed(() => {
  switch (props.info.state) {
    case GameLevelStates.Error:
      return GameLevelStatesError;
    case GameLevelStates.Awaiting:
      return GameLevelStatesAwaiting;
    case GameLevelStates.Active:
      return GameLevelStatesActive;
    case GameLevelStates.Freeze:
      return GameLevelStatesFreeze;
    case GameLevelStates.Unavailable:
      return GameLevelStatesUnavailable;
    default:
      return GameLevelStatesDefault;
  }
});
</script>

<template>
  <component :is="getCardState" :info="props.info" />
</template>
