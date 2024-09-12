<script setup></script>
<template>
  <div class="w-full">
    <div class="flex flex-col items-center justify-center h-screen text-center">
      <h1
        class="-translate-x-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-500"
      >
        404
      </h1>
      <p
        class="mt-4 -translate-x-5 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300"
      >
        Page Not Found
      </p>
      <router-link
        to="/"
        class="mt-6 -translate-x-5 text-sm sm:text-base md:text-lg lg:text-xl text-cyan-500 hover:underline"
      >
        Go to Home
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
