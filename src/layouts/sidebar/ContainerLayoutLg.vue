<script setup>
import ThemeToggleLayout from "./ThemeToggleLayout.vue";
import { useDrawerStore } from "@/stores/drawer";
import RouterLayout from "./RouterLayout.vue";
import LogoIcon from "../icon/LogoIcon.vue";
import BatteryLayout from "./BatteryLayout.vue";
import { onMounted } from "vue";
const store = useDrawerStore();
</script>

<template>
  <!-- custom content drawer -->
  <div class="bg-slate-200 dark:bg-color-2">
    <div class="flex flex-col justify-between h-full">
      <main>
        <div class="flex items-end mb-4 p-1 rounded-md py-4 pb-6">
          <LogoIcon class="size-16" />
          <h4
            class="ml-1 text-3xl tracking-wide font-mono font-semibold dark:text-color-4"
          >
            hyalfan
          </h4>
        </div>

        <ThemeToggleLayout class="mb-10" />

        <div
          class="items-end border border-slate-400 mb-4 p-2 rounded-md pb-6 bg-slate-200 dark:bg-color-1"
        >
          <h4 class="my-2 text-xl font-medium text-center tracking-wide text-color-3">
            Welcome to My Profile! 🚀
          </h4>
          <p class="text-center px-2.5 text-slate-600 dark:text-slate-400">
            Update on: 10 Sept 2024
          </p>
        </div>

        <RouterLayout class="border border-slate-400 rounded-md p-2 py-6" />
      </main>
      <footer
        class="my-4 flex gap-1.5 items-center text-color-1 bg-slate-200 p-2 py-2 rounded-md border border-slate-400 dark:bg-color-1 dark:text-white"
      >
        <!-- <FooterLayout /> -->
        <footer class="m-0 p-0">
          <p>&copy; 2024 Ahyalfan</p>
        </footer>
        <BatteryLayout />
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
