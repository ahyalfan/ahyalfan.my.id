<script setup>
const props = defineProps(["data"]);
</script>
<template>
  <div class="my-6 md:flex flex-wrap">
    <div
      v-for="data in props.data"
      :key="data.id"
      class="relative flex flex-col justify-center items-start rounded-2xl p-4 pt-6 md:w-64"
    >
      <i v-html="data.icon"></i>
      <h1 class="z-10 text-xl font-bold mt-1.5">{{ data.title }}</h1>
      <p class="text-start z-10 mt-1">
        {{ data.description }}
      </p>
      <img
        :src="data.background"
        alt=""
        class="absolute top-1 md:top-3 left-0 z-0 opacity-50 dark:opacity-20"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
