<script setup>
import { usePortoStore } from "@/stores/portofolio";
import { useElementHover } from "@vueuse/core";
import { computed, ref, watch } from "vue";

const store = usePortoStore();
const props = defineProps(["data"]);
const count = ref(
  computed(() => {
    return props.data.filter((arr) => arr.category == store.porto);
  })
);
</script>
<template>
  <div
    class="text-justify text-slate-400 mt-4"
    v-show="count < 1 && store.porto != 'all'"
  >
    ~ Mohon Maaf portofolio tidak ada untuk category {{ store.porto }}.
  </div>
  <div v-for="project in props.data" :key="project.id">
    <a
      v-if="project.category == store.porto || store.porto == 'all'"
      class="group border border-slate-400 rounded-xl pt-3 flex flex-col justify-start items-center my-4 gap-2 bg-slate-200 dark:bg-color-2 relative"
    >
      <img :src="project.img" alt="project.h1" class="px-4 h-40 bg-center" />
      <div class="flex-col flex justify-center rounded-b-xl p-2 px-4">
        <h1 class="text-2xl font-medium">{{ project.h1 }}</h1>
        <p class="text-slate-400 line-clamp-2">{{ project.p }}</p>
      </div>
      <span class="absolute hidden group-hover:relative group-hover:bg-black">
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
    </a>
  </div>
  <div class="h-2"></div>
</template>

<style scoped></style>
