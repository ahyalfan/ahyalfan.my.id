<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Layout from './layouts/Layout.vue'

</script>

<template>
  <div class="dark:bg-color-1 transition-colors min-h-screen flex">
    <Layout />

    <RouterView />
  </div>
</template>

<style scoped>

</style>
