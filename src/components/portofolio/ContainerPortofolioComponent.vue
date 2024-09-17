<script setup>
import MenuComponent from "./MenuComponent.vue";
import { menuData } from "./menuData";
import { portofolioData } from "./portofolioData";
import ProjectComponent from "./ProjectComponent.vue";
</script>
<template>
  <section class="mt-8 border-t border-slate-400 pt-4" aria-label="portofolio-item">
    <MenuComponent :data="menuData" />
    <ProjectComponent :data="portofolioData" />
  </section>
</template>

<style scoped></style>
