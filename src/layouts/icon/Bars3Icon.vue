<script setup>
import { ref, watchEffect } from "vue";
const svgD = ref("M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12");
const svgDFull = ref("M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5");
</script>
<template>
  <i>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      :class="$attrs.class"
    >
      <path stroke-linecap="round" stroke-linejoin="round" :d="svgDFull" />
    </svg>
  </i>
</template>
