<script setup>
import { usePortoStore } from "@/stores/portofolio";
import { computed, ref } from "vue";

const props = defineProps(["data"]);
const store = usePortoStore();
</script>
<template>
  <div id="nav" class="p-2 flex justify-around">
    <div
      v-for="menu in props.data"
      :key="menu.id"
      :class="{ 'text-color-3': menu.label == store.porto }"
      class="border-[1px] p-1 rounded-md border-slate-400 transition-all duration-200 hover:-rotate-12 hover:text-color-3 dark:border-color-2"
      @click="store.openPorto(menu.label)"
    >
      <i v-html="menu.icon"></i>
    </div>
  </div>
</template>

<style scoped></style>
