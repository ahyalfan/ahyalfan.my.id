<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  data: Array,
  reverse: Boolean,
});

const sliders = ref(props.data);
const quantityStyle = ref(
  computed(() => ({
    "--quantity": sliders.value.length,
    // "--quantity": 5,
  }))
);
</script>
<template>
  <main class="m-auto w-screen px-6 lg:w-[1000px] lg:px-0">
    <div
      class="slider"
      :reverse="props.reverse"
      style="--width: 80px; --height: 50px"
      :style="quantityStyle"
    >
      <div class="list">
        <div
          v-for="slider in sliders"
          :key="slider.value"
          class="item"
          :style="slider.style"
        >
          <img :src="slider.icon" alt="" style="width: 50px; height: 50px" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.slider {
  width: 100%;
  height: var(--height);
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
}
.slider .list {
  display: flex;
  width: 100%;
  min-width: calc(var(--width) * var(--quantity));
  position: relative;
}
.slider .list .item {
  width: var(--width);
  height: var(--height);
  position: absolute;
  left: 100%;
  animation: autoRun 21s linear infinite;
  transition: filter 0.5s;
  animation-delay: calc((21s / var(--quantity)) * (var(--position) - 1) - 21s) !important;
}
.slider .list .item img {
  width: 100%;
}
@keyframes autoRun {
  from {
    left: 100%;
  }
  to {
    left: calc(var(--width) * -1);
  }
}
.slider:hover .item {
  animation-play-state: paused !important;
  filter: grayscale(1);
}
.slider .item:hover {
  filter: grayscale(0);
}
.slider[reverse="true"] .item {
  animation: reversePlay 21s linear infinite;
}
@keyframes reversePlay {
  from {
    left: calc(var(--width) * -1);
  }
  to {
    left: 100%;
  }
}
</style>
