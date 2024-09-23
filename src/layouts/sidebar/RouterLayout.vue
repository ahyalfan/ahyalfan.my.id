<script setup>
import { useDrawerStore } from "@/stores/drawer";
import Home from "../icon/menu/Home.vue";
import ArrowIcon from "../icon/ArrowIcon.vue";
import About from "../icon/menu/About.vue";
import Service from "../icon/menu/Service.vue";
import Portofolio from "../icon/menu/Portofolio.vue";
import GuestNote from "../icon/menu/GuestNote.vue";
import Contact from "../icon/menu/Contact.vue";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useWindowSize } from "@vueuse/core";
const store = useDrawerStore();

const { width, height } = useWindowSize();

const openDrawer = () => {
  if (width.value > 1031) {
    return;
  }

  store.openDrawer();
};

const routerApp = useRoute();

const routerComponents = ref([
  {
    id: 1,
    path: "/",
    component: "Home",
    style: {
      "text-color-3": false,
    },
  },
  {
    id: 2,
    path: "/about",
    component: "About",
    style: {
      "text-color-3": false,
    },
  },
  {
    id: 3,
    path: "/service",
    component: "Service",
    style: {
      "text-color-3": false,
    },
  },
  {
    id: 4,
    path: "/portofolio",
    component: "Portofolio",
    style: {
      "text-color-3": false,
    },
  },
  {
    id: 5,
    path: "/contact",
    component: "Contact",
    style: {
      "text-color-3": false,
    },
  },
  {
    id: 6,
    path: "/guest-note",
    component: "GuestNote",
    style: {
      "text-color-3": false,
    },
  },
]);
watch(
  () => routerApp.path,
  (newPath, oldPath) => {
    routerComponents.value.forEach((element) => {
      if (element.path == newPath) {
        element.style["text-color-3"] = true;
      }
      if (element.path == oldPath) {
        element.style["text-color-3"] = false;
      }
    });
  }
);
onMounted(() => {
  routerComponents.value.forEach((element) => {
    if (element.path == routerApp.path) {
      element.style["text-color-3"] = true;
    }
  });
});
</script>
<template>
  <nav
    class="flex flex-col gap-5 bg-slate-200 text-slate-600 dark:bg-color-1 dark:text-slate-400"
  >
    <RouterLink
      v-for="router in routerComponents"
      :key="router.id"
      :to="router.path"
      @click="openDrawer()"
      class="flex justify-between items-center hover:text-color-3 group"
      :class="router.style"
    >
      <div class="flex items-center">
        <Home
          v-if="router.component == 'Home'"
          class="size-6 mr-2 group-hover:-rotate-6"
        />
        <About
          v-else-if="router.component == 'About'"
          class="size-6 mr-2 group-hover:-rotate-6"
        />
        <Service
          v-else-if="router.component == 'Service'"
          class="size-6 mr-2 group-hover:-rotate-6"
        />
        <Portofolio
          v-else-if="router.component == 'Portofolio'"
          class="size-6 mr-2 group-hover:-rotate-6"
        />
        <GuestNote
          v-else-if="router.component == 'GuestNote'"
          class="size-6 mr-2 group-hover:-rotate-6"
        />
        <Contact v-else class="size-6 mr-2 group-hover:-rotate-6" />
        <p class="text-lg">{{ router.component }}</p>
      </div>
      <ArrowIcon
        class="size-6 mr-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </RouterLink>
  </nav>
</template>
