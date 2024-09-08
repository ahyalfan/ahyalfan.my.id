<script setup>
import { useDrawerStore } from '@/stores/drawer';
const store = useDrawerStore();
const openDrawer = () => {
  store.openDrawer()
};
</script>
<template>
    <nav>
        <RouterLink to="/" @click="openDrawer()">Home</RouterLink>
        <RouterLink to="/about" @click="openDrawer()">About</RouterLink>
    </nav>
</template>