<script>
</script>

<template>
  <div class="w-full flex flex-col items-center mt-37.5 max-md:mt-8">
    <div class="w-full">
      <AuthStartWidget class="mb-37.5 max-md:mb-11.5" />
      <div class="flex justify-between items-end max-md:flex-col max-md:justify-center">
        <div>
          <DashboardPageInfo />
          <DashboardPageVideo class="mt-13.5" />
        </div>
        <div class="max-md:w-full">
          <StatGeneralWidget />
        </div>
      </div>
    </div>
    <StatRecentWidget class="mt-37.5" />
  </div>
</template>
