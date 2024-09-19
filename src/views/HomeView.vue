<script setup>
import ContentComponent from "@/components/home/ContentComponent.vue";
import TheWelcomeComponent from "@/components/home/TheWelcomeComponent.vue";
import MedsosComponent from "@/components/medsos/MedsosComponent.vue";
import { onMounted, ref } from "vue";
const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
  console.log(isVisible.value);
});
</script>

<template>
  <Transition>
    <main v-if="isVisible" class="mt-12 flex flex-col">
      <div
        class="flex items-end justify-center w-screen h-96 bg-[url('@/assets/icon/IconBg1.svg')] bg-no-repeat bg-top"
      >
        <img src="@/assets/icon/human1.svg" class="size-10/12" />
      </div>
      <div class="mx-6">
        <TheWelcomeComponent class="text-black dark:text-color-4" />
        <ContentComponent class="text-slate-600 dark:text-slate-400 mt-2" />
      </div>
      <div class="mx-6 my-3">
        <MedsosComponent />
      </div>
    </main>
  </Transition>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 700ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
