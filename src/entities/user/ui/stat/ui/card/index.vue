<script lang="ts" setup>
import type { UserStatCardProps } from "./interfaces";

const props = withDefaults(defineProps<UserStatCardProps>(), {
  records: () => ({
    income: 0,
    partnershipIncome: 0,
    partners: 0,
  }),
});

const { income, partnershipIncome, partners } = props.records;

const incomeStr = computed(() => {
  return formatUserStatRecord(income);
});

const partnershipIncomeStr = computed(() => {
  return formatUserStatRecord(partnershipIncome);
});

const partnersStr = computed(() => {
  return formatUserStatRecord(partners);
});
</script>

<template>
  <ul class="pb-5 max-md:pb-0">
    <UserStatCardItem :value="incomeStr" :sol="true">
      Income
    </UserStatCardItem>
    <USeparator color="crayola" class="opacity-18 py-5 max-md:py-3" />
    <UserStatCardItem :value="partnershipIncomeStr" :sol="true">
      Partnership income
    </UserStatCardItem>
    <USeparator color="crayola" class="opacity-18 py-5 max-md:pt-3.5 max-md:pb-3" />
    <UserStatCardItem :value="partnersStr" :sol="false">
      Partners
    </UserStatCardItem>
  </ul>
</template>
