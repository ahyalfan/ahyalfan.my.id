<script setup>
import ContentComponent from "@/components/home/ContentComponent.vue";
import TheWelcomeComponent from "@/components/home/TheWelcomeComponent.vue";
import MedsosComponent from "@/components/medsos/MedsosComponent.vue";
import { ref } from "vue";
</script>

<template>
  <main class="mt-12 flex flex-col">
    <div
      class="flex items-end justify-center w-screen h-96 bg-[url('@/assets/icon/IconBg1.svg')] bg-no-repeat bg-top"
    >
      <img src="@/assets/icon/human1.svg" class="" />
    </div>
    <div class="mx-6">
      <TheWelcomeComponent class="text-black dark:text-color-4" />
      <ContentComponent class="text-slate-600 dark:text-slate-400 mt-2" />
    </div>
    <div class="mx-6 my-3">
      <MedsosComponent />
    </div>
  </main>
</template>
