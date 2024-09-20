<script setup>
import { usePortoStore } from "@/stores/portofolio";
import { useElementHover } from "@vueuse/core";
import { computed, ref, watch } from "vue";

const store = usePortoStore();
const props = defineProps(["data"]);
const count = computed(() => {
  return props.data.filter((arr) => arr.category == store.porto);
});
</script>
<template>
  <section class="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-6">
    <Transition :duration="300" name="fade">
      <div
        class="text-justify text-slate-400 mt-4"
        v-show="count < 1 && store.porto != 'all'"
      >
        ~ Mohon Maaf portofolio tidak ada untuk category {{ store.porto }}.
      </div>
    </Transition>
    <div v-for="project in props.data" :key="project.id">
      <Transition :duration="300" name="nested">
        <a
          :href="project.link"
          v-if="project.category == store.porto || store.porto == 'all'"
          class="group border border-slate-400 rounded-xl flex flex-col justify-start items-center my-4 bg-slate-200 dark:bg-color-2 relative md:my-0"
        >
          <div class="relative w-full pt-3 flex justify-center">
            <span
              class="last bg-white rounded-t-xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center gap-2"
              style="display: none"
            >
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
            <img :src="project.img" alt="project.h1" class="px-4 h-40 bg-center" />
          </div>
          <div
            class="flex-col w-full flex justify-center rounded-b-xl p-2 px-4 dark:bg-slate-600 bg-color-4"
          >
            <h1 class="text-2xl font-medium">{{ project.h1 }}</h1>
            <p class="text-slate-400 line-clamp-2">{{ project.p }}</p>
          </div>
        </a>
      </Transition>
    </div>
    <div class="h-2"></div>
  </section>
</template>

<style scoped>
div > a:hover > div > .last {
  display: flex !important;
  color: #00adb5;
  font-weight: 600;
  background-color: rgba(36, 36, 36, 0.6);
}
div > a:active > div > .last {
  display: flex !important;
  color: #00adb5;
  font-weight: 600;
  background-color: rgba(36, 36, 36, 0.8);
}
div > a > {
  transition: all 1000ms ease;
}

div > a > .last {
  transition: all 1000ms ease;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
.nested-enter-active {
  transition-delay: 0.5s;
}

.nested-enter-from {
  transform: translateY(30px);
  opacity: 0;
}
.nested-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.fade-enter-active {
  transition-delay: 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
