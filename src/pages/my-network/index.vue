<template>
  <div class="mt-37.5 max-md:mt-8">
    <UserInfoWidget class="mb-14.25 max-md:mb-6" />
    <ClientOnly>
      <template #fallback>
        <div class="flex justify-center items-center md:bg-neutral-800 rounded-5xl md:py-12.5 md:px-12">
          <UProgress class="w-1/2" size="2xl" color="primary" />
        </div>
      </template>
      <GameLevelListWidget />
    </ClientOnly>
  </div>
</template>
