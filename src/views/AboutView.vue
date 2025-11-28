<script setup>
import SkillsComponent from "@/components/about/SkillsComponent.vue";
import TitleComponent from "@/components/common/TitleComponent.vue";
import Human2Icon from "@/components/icon/human2Icon.vue";
import LampuIcon from "@/components/icon/LampuIcon.vue";
import ResumeIcon from "@/components/icon/resume/ResumeIcon.vue";
import sendMessage from "@/util/telegram";
import { onMounted, ref, Transition } from "vue";
const isVisible = ref(false);
onMounted(() => {
  isVisible.value = true;
});
const sendTele = async () => {
  await sendMessage();
};
</script>

<template>
  <Transition>
    <main v-if="isVisible" class="mt-16 text-black dark:text-color-4">
      <TitleComponent class="mx-6" t1="About" t2="Me">
        <LampuIcon class="size-14" />
      </TitleComponent>
      <div class="mx-6">
        <div
          class="flex items-end justify-center bg-[url('@/assets/icon/IconBg2.svg')] bg-no-repeat bg-cover bg-top"
        >
          <Human2Icon class="size-80 mt-2" />
        </div>
        <div class="mt-2 flex flex-col">
          <p class="text-justify text-slate-600 dark:text-slate-400">
            Hi, I'm Ahmad Yogi Al Fandi, a passionate Backend Developer. I specialize in
            building and managing efficient backend systems for modern web applications. I
            thrive in collaborative environments, excel at problem-solving, and stay
            current with industry trends to continuously enhance my skills.
          </p>
          <div class="flex justify-center mt-4">
            <a
              @click="sendTele"
              href="https://drive.google.com/file/d/1LVUWgP2MSN8tJomTyfhayq5Rdy0Vn239/view?usp=sharing"
              class="flex items-center text-color-3 py-1.5 px-3 rounded-xl bg-color-buat-3 border-color-3 border-2"
            >
              <ResumeIcon class="h-6 w-6" />
              Get Resume
            </a>
          </div>
        </div>
      </div>
      <SkillsComponent />
    </main>
  </Transition>
</template>

<style scoped>
.bg-color-buat-3 {
  background-color: rgba(154, 239, 243, 0.85);
  font-weight: 630;
}
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
