<script setup>
import TitleComponent from "@/components/common/TitleComponent.vue";
import CodeIcon from "@/components/icon/CodeIcon.vue";
import ContainerPortofolioComponent from "@/components/portofolio/ContainerPortofolioComponent.vue";
import { onMounted, ref } from "vue";
const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <Transition>
    <main v-if="isVisible" class="mt-16 mx-6 text-black dark:text-color-4">
      <TitleComponent t1="My" t2="Work">
        <CodeIcon class="size-14" />
      </TitleComponent>
      <p class="text-slate-600 dark:text-slate-400">
        Rapid growth in digital technology is changing my development world with these
        creative crafts.
      </p>
      <ContainerPortofolioComponent />
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
