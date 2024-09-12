<script setup>
import { ref } from "vue";
import GithubIcon from "../icon/medsos/GithubIcon.vue";
import InsagramIcon from "../icon/medsos/InsagramIcon.vue";
import LinkedIcon from "../icon/medsos/LinkedIcon.vue";
import FacebookIcon from "../icon/medsos/FacebookIcon.vue";
const classIcon = {
  "group-hover:-rotate-12": true,
  "transition-all": true,
  "duration-300": true,
  "dark:text-color-4": true,
  "group-hover:text-color-3": true,
};
const medsoss = ref([
  {
    id: 1,
    icon: "github",
    link: "https://github.com/ahyalfan",
    class: classIcon,
  },
  {
    id: 2,
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ahmad-yogi-al-fandi",
    class: classIcon,
  },
  {
    id: 3,
    icon: "instagram",
    link: "https://www.instagram.com/ahyalfan/",
    class: classIcon,
  },
  {
    id: 4,
    icon: "facebook",
    link: "https://www.instagram.com/ahyalfan/",
    class: classIcon,
  },
]);
</script>
<template>
  <div class="flex justify-start gap-6">
    <a
      v-for="medsos in medsoss"
      :key="medsos.id"
      :href="medsos.link"
      :aria-label="medsos.icon"
      class="w-12 h-12 flex items-center justify-center rounded-lg bg-color-4 border border-color-3 dark:bg-color-2 shadow-md shadow-color-2 dark:shadow-color-4 group"
    >
      <GithubIcon v-if="medsos.icon == 'github'" :class="medsos.class" />
      <LinkedIcon v-else-if="medsos.icon == 'linkedin'" :class="medsos.class" />
      <InsagramIcon v-else-if="medsos.icon == 'instagram'" :class="medsos.class" />
      <FacebookIcon v-else-if="medsos.icon == 'facebook'" :class="medsos.class" />
    </a>
  </div>
</template>

<style scoped></style>
