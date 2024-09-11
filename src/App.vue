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
  <div class="dark:bg-color-1 transition-colors min-h-screen flex">
    <Layout />

    <RouterView />
  </div>
</template>

<style scoped></style>
