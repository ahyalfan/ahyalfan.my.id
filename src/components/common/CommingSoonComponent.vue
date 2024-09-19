<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold">Coming Soon...!</h1>
    <div class="mt-6 md:mt-2 flex justify-center gap-12 flex-col md:flex-row">
      <p class="md:mt-6 text-lg">
        We're working hard to bring you this feature. Stay tuned for updates and exciting
        new content!
      </p>

      <!-- SVG Ikon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        class="p-0 m-0 w-32 h-32 mx-auto animate-bounce"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="32" cy="32" r="30" />
        <line x1="32" y1="12" x2="32" y2="32" />
        <line x1="32" y1="32" x2="52" y2="32" />
        <path d="M12,32c0,11,9,20,20,20s20-9,20-20" />
      </svg>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Gaya responsif tambahan */
@media (max-width: 640px) {
  h1 {
    font-size: 2.5rem; /* Ukuran font lebih kecil pada layar kecil */
  }

  p {
    font-size: 1rem; /* Ukuran font deskripsi lebih kecil */
  }

  .bg-white {
    padding: 2rem; /* Padding lebih kecil untuk tampilan kecil */
  }
}
</style>
