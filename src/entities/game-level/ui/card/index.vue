<script setup lang="ts">
import type { GameLevelCardEntryProps } from "./interfaces";
import { GameLevelCardStatesActive, GameLevelCardStatesAwaiting, GameLevelCardStatesDefault, GameLevelCardStatesError, GameLevelCardStatesFreeze, GameLevelCardStatesUnavailable } from "#components";
import { GameLevelCardStates } from "./enums";

/** Параметры */
const props = defineProps<GameLevelCardEntryProps>();

/** Получить состояние карточки */
const getCardState = computed(() => {
  switch (props.info.state) {
    case GameLevelCardStates.Error:
      return GameLevelCardStatesError;
    case GameLevelCardStates.Awaiting:
      return GameLevelCardStatesAwaiting;
    case GameLevelCardStates.Active:
      return GameLevelCardStatesActive;
    case GameLevelCardStates.Freeze:
      return GameLevelCardStatesFreeze;
    case GameLevelCardStates.Unavailable:
      return GameLevelCardStatesUnavailable;
    case GameLevelCardStates.Default:
      return GameLevelCardStatesDefault;
    default:
      return GameLevelCardStatesDefault;
  }
});
</script>

<template>
  <component :is="getCardState" :info="props.info" />
</template>
