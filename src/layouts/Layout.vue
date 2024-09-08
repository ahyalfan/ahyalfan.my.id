<script setup>
import ContainerLayout from './sidebar/ContainerLayout.vue';
import { useDrawerStore } from '@/stores/drawer';
const store = useDrawerStore();
const openDrawer = () => {
  store.openDrawer()
};

</script>

<template>
    <header class="bg-slate-200 dark:bg-color-2">
      <el-button type="primary" style="margin-left: 16px" @click="openDrawer()">
        open
    </el-button>
      <ContainerLayout/>
    </header>
</template>