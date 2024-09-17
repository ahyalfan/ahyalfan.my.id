import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const usePortoStore = defineStore('porto', () => {
  const porto = ref('all');
  const openPorto = (portoValue) => {
    porto.value = portoValue;
  };

  return { porto, openPorto };
});
