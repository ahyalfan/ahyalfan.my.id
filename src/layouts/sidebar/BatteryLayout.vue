<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useBattery } from "@vueuse/core";
import { Lightning } from "@element-plus/icons-vue";

const { charging, chargingTime, dischargingTime, level } = useBattery();
const batteryLevel = ref(computed(() => Math.floor(level.value * 100)));
const color = ref("#f56c6c");

watch(batteryLevel, () => {
  if (batteryLevel.value >= 80) color.value = "#6f7ad3";
  else if (batteryLevel.value >= 60) color.value = "#1989fa";
  else if (batteryLevel.value >= 40) color.value = "#5cb87a";
  else if (batteryLevel.value >= 20) color.value = "#e6a23c";
  else color.value = "#f56c6c";
});
</script>

<template>
  <div class="flex items-center">
    <!-- Battery Container -->
    <div
      class="relative w-20 h-8 border-2 border-gray-400 rounded-md bg-slate-50 dark:bg-slate-200 flex items-center"
    >
      <!-- Battery Level -->
      <div
        class="absolute inset-0 bg-green-500 rounded-md"
        :style="{ width: batteryLevel + '%', background: color }"
      ></div>
      <!-- Battery Cap -->
      <div
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 w-4 h-6 rounded-sm"
      ></div>
    </div>
    <!-- Battery Level Text -->
    <span v-show="!charging" class="ml-2 text-slate-600 dark:text-slate-400"
      >{{ batteryLevel }}%</span
    >
    <!-- Charging Indicator -->
    <span
      v-show="charging"
      class="ml-2 text-slate-600 flex items-center gap-0.5 dark:text-slate-400"
      >{{ batteryLevel }}
      <el-icon><Lightning /></el-icon>
    </span>
  </div>
</template>

<style scoped></style>
