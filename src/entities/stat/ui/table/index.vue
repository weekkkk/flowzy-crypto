<script lang="ts" setup>
import type { RecentStatCardProps } from "./interfaces";
import { useMediaQuery } from "@vueuse/core";
import dayjs from "./utils";

withDefaults(defineProps<RecentStatCardProps>(), {
  items: () => {
    return [] as RecentStatRecDto[];
  },
});

const isMobile = useMediaQuery("(max-width: 768px)");

function getPassedTime(date: number) {
  return dayjs(date).fromNow();
}
</script>

<template>
  <div class="w-full bg-neutral-800 rounded-5xl px-12.5 pt-12.5 pb-13.25 max-md:bg-transparent max-md:px-0 max-md:pt-0">
    <div class="mb-12.5 max-md:mb-4">
      <h3 class="text-4xl max-md:text-xl max-md:leading-6">
        Recent activity
      </h3>
    </div>
    <div v-for="(item, index) in items" :key="item?.id" class="flex flex-col">
      <div class="flex justify-between items-center text-2xl font-medium">
        <div class="flex items-center gap-x-5 max-md:gap-x-4">
          <div class="bg-neutral-700 py-1.25 px-5 rounded-5xl max-md:px-4 max-md:py-1.5 max-md:flex max-md:items-center">
            <span class="text-secondary-200 max-md:text-base">ID {{ item.id }}</span>
          </div>
          <span class="max-md:text-base">Level award</span>
          <span class="text-info-400 max-md:text-base">+{{ item.profit }} SOL</span>
        </div>
        <div v-show="!isMobile" class="text-2xl">
          <span class="text-neutral-400 opacity-60">{{ getPassedTime(item.date) }}</span>
        </div>
      </div>
      <USeparator v-if="index !== items.length - 1" color="crayola" class="opacity-18 mt-7 mb-6.25 max-md:mt-4 max-md:mb-4" />
    </div>
  </div>
</template>
