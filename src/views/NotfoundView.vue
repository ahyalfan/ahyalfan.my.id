<script setup></script>
<template>
  <div class="w-full flex justify-center">
    <div class="flex flex-col items-center justify-center h-screen text-center">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-500">
        404
      </h1>
      <p
        class="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300"
      >
        Page Not Found
      </p>
      <router-link
        to="/"
        class="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-cyan-500 hover:underline"
      >
        Go to Home
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: all 700ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>