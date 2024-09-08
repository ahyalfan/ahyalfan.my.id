<script setup>
import { ref } from 'vue'
import ThemeToggleLayout from './ThemeToggleLayout.vue';
import { useDrawerStore } from '@/stores/drawer';
import RouterLayout from './RouterLayout.vue';
const store = useDrawerStore();
</script>

<template>
    <el-drawer class="bg-slate-200 dark:bg-color-2" v-model="store.drawer" :show-close="false" direction="ltr" size="">

    <template #header="{ close, titleId, titleClass }">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button>
    </template>
    
    <ThemeToggleLayout />
    <RouterLayout />

  </el-drawer>
</template>