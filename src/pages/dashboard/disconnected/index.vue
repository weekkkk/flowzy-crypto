<script>
</script>

<template>
  <div class="w-full flex flex-col items-center mt-37.5">
    <div class="w-full">
      <AuthStartWidget class="mb-37.5" />
      <div class="flex justify-between items-end">
        <div>
          <DashboardPageInfo />
          <DashboardPageVideo class="mt-13.5" />
        </div>
        <div>
          <StatGeneralWidget />
        </div>
      </div>
    </div>
    <StatRecentWidget class="mt-37.5" />
  </div>
</template>
