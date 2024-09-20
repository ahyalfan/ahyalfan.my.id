<script setup>
import { RouterLink, RouterView } from "vue-router";
import Layout from "./layouts/Layout.vue";
import { onMounted } from "vue";
import { usePreferredDark } from "@vueuse/core";

onMounted(() => {
  const isDark = usePreferredDark();
  if (isDark) {
    app.classList.toggle("dark");
  }
});
</script>

<template>
  <div class="bg-color-4 dark:bg-color-1 transition-colors min-h-screen flex">
    <Layout />

    <div class="xl:w-full xl:flex xl:justify-center">
      <RouterView class="xl:w-[1000px] 2xl:w-[1100px]" />
    </div>
  </div>
</template>

<style scoped></style>
