<script lang="ts" setup>
const user = useState<AuthUserDto | undefined>();
onMounted(() => {
  setTimeout(() => {
    const authorized = useCookie("authorized");
    authorized.value = JSON.stringify(true);
    user.value = { id: 32553, wallet: {
      address: "0xA7f82EDe67F07dC63Aa2921E8B582C14A0D47e7B",
      balance: 2.5,
    } };
    navigateTo("/registration/done");
  }, 10000);
});
</script>

<template>
  <div class="py-42 px-12.5 bg-neutral-800 rounded-3xl max-md:bg-transparent max-md:px-0 max-md:py-0">
    <div class="flex flex-col justify-center items-center">
      <div class="flex items-center justify-center gap-x-3.75 mb-3.75">
        <h1 class="text-4xl max-md:text-xl">
          Activating
        </h1>
        <UIcon name="fci:circle" class="h-8 w-8" />
      </div>
      <p class="text-2xl text-neutral-400/60 mb-7.5 max-md:text-base">
        Your transactions in progress.
      </p>
    </div>
    <UButton
      label="Transaction in blockchain"
      class="w-142.5 max-md:w-83.75 max-md:h-15 max-md:rounded-5xl h-16.25 text-xl max-md:text-base flex justify-center rounded-3xl max-md:mt-61.75 max-md:mb-6.75"
    />
  </div>
</template>
