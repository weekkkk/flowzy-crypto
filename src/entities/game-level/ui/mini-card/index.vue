<script setup lang="ts">
import type { GameLevelCardEntryProps } from "./interfaces";
import { GameLevelMiniCardStatesActive, GameLevelMiniCardStatesDefault, GameLevelMiniCardStatesUnavailable } from "#components";
import { GameLevelMiniCardStates } from "./enums";

/** Параметры */
const props = defineProps<GameLevelCardEntryProps>();

/** Получить состояние карточки */
const getCardState = computed(() => {
  switch (props.info.state) {
    case GameLevelMiniCardStates.Active:
      return GameLevelMiniCardStatesActive;
    case GameLevelMiniCardStates.Unavailable:
      return GameLevelMiniCardStatesUnavailable;
    case GameLevelMiniCardStates.Default:
      return GameLevelMiniCardStatesDefault;
    default:
      return GameLevelMiniCardStatesDefault;
  }
});
</script>

<template>
  <component :is="getCardState" :info="props.info" />
</template>
