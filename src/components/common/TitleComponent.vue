<script setup>
const props = defineProps({
  t1: String,
  t2: String,
});
</script>

<template>
  <div class="flex justify-start items-center gap-2">
    <h1 class="text-4xl font-medium">
      {{ props.t1 }} <span class="font-medium text-color-3">{{ props.t2 }}</span>
    </h1>
    <slot></slot>
  </div>
</template>
<style scoped></style>
