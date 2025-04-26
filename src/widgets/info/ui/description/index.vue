<template>
  <div class="grid grid-cols-2 gap-6.25">
    <div class="flex items-center gap-3.75">
      <UBadge class="w-17.5 h-17.5" />
      <div class="text-2xl">
        New player position
      </div>
    </div>
    <div class="flex items-center gap-3.75">
      <UBadge color="secondary" class="w-17.5 h-17.5" />
      <div class="text-2xl">
        The place where the player<br>moves to after recycling
      </div>
    </div>
    <div class="flex items-center gap-3.75">
      <UBadge color="neutral" class="w-17.5 h-17.5" />
      <div class="text-2xl">
        The place where the player<br>was before the recycle
      </div>
    </div>
    <div class="flex items-center gap-3.75">
      <div class="bg-linear-270 from-(--ui-primary) to-(--ui-secondary) p-0.5 rounded-2xl">
        <UBadge color="neutral" class="w-17.5 h-17.5" />
      </div>
      <div class="text-2xl">
        Available space
      </div>
    </div>
  </div>
</template>
