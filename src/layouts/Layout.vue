<script setup>
import { onMounted, ref, watch } from "vue";
import MenuIcon from "./icon/MenuIcon.vue";
import ContainerLayout from "./sidebar/ContainerLayout.vue";
import { useDrawerStore } from "@/stores/drawer";
import { useElementHover } from "@vueuse/core";
import Bars3Icon from "./icon/Bars3Icon.vue";

const store = useDrawerStore();
const open = ref(false);

const elementHover = ref();
const hover = useElementHover(elementHover);

const openDrawer = () => {
  store.openDrawer();
};
</script>

<template>
  <header class="m-5 z-50 fixed">
    <button
      @click="openDrawer()"
      ref="elementHover"
      class="px-3 py-1 bg-slate-300 rounded-md dark:bg-color-2"
    >
      <MenuIcon
        v-show="!hover"
        class="size-6 text-color-2 dark:text-slate-200 transition-transform duration-300"
      />
      <Bars3Icon
        v-show="hover"
        class="size-6 text-color-2 dark:text-slate-200 transition-transform duration-300"
      />
    </button>
    <ContainerLayout />
  </header>
</template>
