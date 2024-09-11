<script setup>
import { Sunny } from "@element-plus/icons-vue";
import { Moon } from "@element-plus/icons-vue";
import { usePreferredDark } from "@vueuse/core";
import { onMounted, ref, watch } from "vue";

const app = document.getElementById("app");
const darkMode = ref(usePreferredDark());
const toogle = ref(true);
const setDark = () => {
  toogle.value = !toogle.value;
  app.classList.toggle("dark");
  document.getElementById("testDarMode").classList.toggle("-translate-x-7");
};
watch(darkMode, () => {
  app.classList.toggle("dark");
});
</script>
<template>
  <div
    class="flex justify-between border border-slate-400 rounded-md p-2 bg-slate-200 dark:bg-color-1"
  >
    <h6 class="text-slate-600 font-semibold hover:shadow-md dark:text-slate-400">
      Dark Mode
    </h6>
    <button
      @click="setDark"
      class="p-0 w-[52px] size-6 rounded-full flex items-center justify-end bg-[#F2F2F2] dark:bg-[#2C2C2C] border-slate-500 border transition-all duration-300"
    >
      <div
        id="testDarMode"
        class="flex items-center h-full px-1 rounded- transition-all duration-300"
      >
        <el-icon v-show="!toogle" color="black"><Sunny /></el-icon>
        <el-icon v-show="toogle" color="white"><moon /></el-icon>
      </div>
    </button>
  </div>
</template>
<style scoped>
.-translate-x-7 {
  transform: translateX(-28px); /* Custom value for -translate-x-7 */
}
</style>
