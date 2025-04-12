<script lang="ts" setup>
import type { RecentStatCardProps } from "./interfaces";

const props = defineProps<RecentStatCardProps>();

// const now = Date.now();

const { data } = props;

// const timeDifference = computed(() => data?.data?.date)
</script>

<template>
  <div class="w-full bg-neutral-800 rounded-5xl px-12.5 pt-12.5 pb-13.25">
    <div class="mb-12.5">
      <h3 class="text-4xl">
        Recent activity
      </h3>
    </div>
    <div v-for="(item, index) in data?.data" :key="item.id" class="flex flex-col">
      <div class="flex justify-between items-center text-2xl font-medium">
        <div class="flex items-center gap-x-5">
          <div class="bg-neutral-700 py-1.25 px-5 rounded-5xl ">
            <span class="text-secondary-200 ">ID {{ item.id }}</span>
          </div>
          <span>Level award</span>
          <span class="text-info-400">+{{ item.profit }} SOL</span>
        </div>
        <div class="text-2xl">
          <span class="text-neutral-400 opacity-60">{{ item.date }}</span>
        </div>
      </div>
      <USeparator v-if="index !== 4" color="crayola" class="opacity-18 mt-7 mb-6.25" />
    </div>
  </div>
</template>
