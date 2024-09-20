<script setup>
import TitleComponent from "@/components/common/TitleComponent.vue";
import SendMessageComponent from "@/components/contact/SendMessageComponent.vue";
import MailIcon from "@/components/icon/MailIcon.vue";
import MedsosComponent from "@/components/medsos/MedsosComponent.vue";
import { onMounted, ref, Transition } from "vue";
const isVisible = ref(false);
onMounted(() => {
  isVisible.value = true;
});
</script>

<template>
  <Transition>
    <main v-if="isVisible" class="mt-16 mx-6 text-black dark:text-color-4">
      <TitleComponent t1="Hire" t2="Me">
        <MailIcon class="size-14" />
      </TitleComponent>
      <div class="mt-2">
        <p class="text-base tracking-wider leading-relaxed text-slate-400">
          Let's collaborate to create perfect and most user-friendly digital products.
          Just leave a message to get in touch.
        </p>
        <SendMessageComponent />
        <MedsosComponent class="mt-6 justify-center" />
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
