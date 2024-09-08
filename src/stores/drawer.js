import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useDrawerStore = defineStore('theme', () => {
  const drawer = ref(false);
  const isOpen = computed(() => drawer.value === true);
  const openDrawer = () => {
    drawer.value = isOpen.value ? false : true;
  };

  return { drawer, isOpen, openDrawer };
});
