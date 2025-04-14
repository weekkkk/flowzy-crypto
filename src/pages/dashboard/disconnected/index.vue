<script>
</script>

<template>
  <div class="w-full flex flex-col items-center mt-37.5 max-md:mt-8">
    <div class="w-full">
      <AuthStartWidget class="mb-37.5 max-md:mb-11.5" />
      <div class="grid grid-cols-[2fr_1fr] grid-rows-2 max-md:grid-cols-none max-md:grid-rows-[auto_auto_auto]">
        <DashboardPageInfo class="col-span-1 max-md:row-start-1" />
        <DashboardPageVideo class="mt-13.5 col-start-1 max-md:row-start-3 max-md:mt-12" />
        <StatGeneralWidget class="col-start-2 row-end-1 row-span-2 max-md:row-start-2 max-md:row-span-1 max-md:col-start-1 max-md:mt-7.5 self-end justify-self-end max-md:self-auto max-md:justify-self-auto" />
      </div>
    </div>
    <StatRecentWidget class="mt-37.5 max-md:mt-12" />
  </div>
</template>
