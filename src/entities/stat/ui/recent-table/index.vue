<script lang="ts" setup>
import type { StatRecentTableProps } from "./interfaces";
import dayjs from "./utils";

withDefaults(defineProps<StatRecentTableProps>(), {
  records: () => [],
});

function getPassedTime(date: number) {
  return dayjs(date).fromNow();
}
</script>

<template>
  <ul v-for="(item, index) in records" :key="item?.id" class="flex flex-col">
    <li class="flex justify-between items-center text-2xl font-medium">
      <div class="flex items-center gap-x-5 max-md:gap-x-4">
        <div class="bg-neutral-700 py-1.25 px-5 rounded-5xl max-md:px-4 max-md:py-1.5 max-md:flex max-md:items-center">
          <span class="text-secondary-200 max-md:text-base">ID {{ item.id }}</span>
        </div>
        <span class="max-md:text-base">Level award</span>
        <span class="text-info-400 max-md:text-base">+{{ item.profit }} SOL</span>
      </div>
      <div class="text-2xl max-md:hidden">
        <span class="text-neutral-400 opacity-60">{{ getPassedTime(item.date) }}</span>
      </div>
    </li>
    <USeparator v-if="index !== records.length - 1" color="crayola" class="opacity-18 mt-7 mb-6.25 max-md:mt-4 max-md:mb-4" />
  </ul>
</template>
