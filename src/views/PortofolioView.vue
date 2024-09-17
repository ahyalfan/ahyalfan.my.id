<script setup>
import TitleComponent from "@/components/common/TitleComponent.vue";
import CodeIcon from "@/components/icon/CodeIcon.vue";
import ContainerPortofolioComponent from "@/components/portofolio/ContainerPortofolioComponent.vue";
</script>

<template>
  <main class="mt-16 mx-6 text-black dark:text-color-4">
    <TitleComponent t1="My" t2="Work">
      <CodeIcon class="size-14" />
    </TitleComponent>
    <p class="text-slate-600 dark:text-slate-400">
      Rapid growth in digital technology is changing my development world with these
      creative crafts.
    </p>
    <ContainerPortofolioComponent />
  </main>
</template>
