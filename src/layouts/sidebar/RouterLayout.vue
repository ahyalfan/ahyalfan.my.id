<script setup>
import { useDrawerStore } from "@/stores/drawer";
const store = useDrawerStore();
const openDrawer = () => {
  store.openDrawer();
};
</script>
<template>
  <nav
    class="flex flex-col bg-slate-200 text-slate-600 dark:bg-color-1 dark:text-slate-400"
  >
    <RouterLink to="/" @click="openDrawer()">Home</RouterLink>
    <RouterLink to="/about" @click="openDrawer()">About</RouterLink>
  </nav>
</template>
