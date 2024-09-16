<script setup>
import { skillData, skillData2 } from "./skillData";
import Slider from "./Slider.vue";
</script>
<template>
  <div>
    <h1 class="text-2xl flex justify-center items-center gap-2 mt-4">
      <span class="text-color-3 font-bold">Skills</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    </h1>
    <Slider class="my-6" :data="skillData" :reverse="true" />
    <Slider :data="skillData2" :reverse="false" />
    <div class="flex justify-center items-center gap-4 mt-8"></div>
  </div>
</template>

<style scoped></style>
