<script setup>
import CommingSoonComponent from "@/components/common/CommingSoonComponent.vue";
import TitleComponent from "@/components/common/TitleComponent.vue";
import NoodleIcon from "@/components/icon/NoodleIcon.vue";
import { onMounted, ref, Transition } from "vue";
const isVisible = ref(false);
onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <Transition>
    <main v-if="isVisible" class="mt-16 mx-6 text-black dark:text-color-4">
      <TitleComponent t1="Guest" t2="Room">
        <NoodleIcon class="size-14" />
      </TitleComponent>

      <CommingSoonComponent />
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
