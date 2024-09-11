<script setup>
import { ref } from "vue";
import ThemeToggleLayout from "./ThemeToggleLayout.vue";
import { useDrawerStore } from "@/stores/drawer";
import RouterLayout from "./RouterLayout.vue";
import CloseIcon from "../icon/CloseIcon.vue";
import LogoIcon from "../icon/LogoIcon.vue";
import BatteryLayout from "./BatteryLayout.vue";
const store = useDrawerStore();
</script>

<template>
  <!-- custom content drawer -->
  <el-drawer
    class="bg-slate-200 dark:bg-color-2"
    v-model="store.drawer"
    direction="ltr"
    title="I am the title"
    :with-header="false"
    size="250"
  >
    <div
      class="flex items-end mb-4 p-1 rounded-md py-2 pb-4 bg-slate-200 dark:bg-color-1"
    >
      <LogoIcon class="size-16" />
      <h4 class="ml-1 text-2xl tracking-wide font-mono font-semibold dark:text-color-4">
        hyalfan
      </h4>
    </div>

    <ThemeToggleLayout class="mb-8" />

    <RouterLayout class="border border-slate-400 rounded-md p-2 py-6" />

    <div
      class="my-4 text-color-1 bg-slate-200 p-2 py-2 rounded-md border border-slate-400 dark:bg-color-1 dark:text-white"
    >
      <BatteryLayout />
    </div>
  </el-drawer>
</template>

<style scoped></style>
