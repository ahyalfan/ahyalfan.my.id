<script setup>

const app = document.getElementById("app");
const setDark = () => {
  app.classList.toggle("dark")
};
</script>
<template>
  <div>
    <el-button @click="setDark">Default</el-button>
  </div>
</template>