<script setup>
import { useDrawerStore } from "@/stores/drawer";
import Home from "../icon/menu/Home.vue";
import ArrowIcon from "../icon/ArrowIcon.vue";
import About from "../icon/menu/About.vue";
import Service from "../icon/menu/Service.vue";
import Portofolio from "../icon/menu/Portofolio.vue";
import GuestNote from "../icon/menu/GuestNote.vue";
import Contact from "../icon/menu/Contact.vue";
import { ref } from "vue";
const store = useDrawerStore();

const openDrawer = () => {
  store.openDrawer();
};
const routerClass = ref({
  "hover:text-color-3": true,
  group: true,
});
const arrowClass = ref({
  "transition-transform": true,
  "duration-300": true,
  "group-hover:translate-x-1": true,
  "group-hover:-translate-y-0.5": false,
  "group-hover:-rotate-6": false,
});

const routerComponents = ref([
  {
    id: 1,
    path: "/",
    component: "Home",
  },
  {
    id: 2,
    path: "/about",
    component: "About",
  },
  {
    id: 3,
    path: "/service",
    component: "Service",
  },
  {
    id: 4,
    path: "/portofolio",
    component: "Portofolio",
  },
  {
    id: 5,
    path: "/guest-note",
    component: "GuestNote",
  },
  {
    id: 6,
    path: "/contact",
    component: "Contact",
  },
]);
</script>
<template>
  <nav
    class="flex flex-col gap-6 bg-slate-200 text-slate-600 dark:bg-color-1 dark:text-slate-400"
  >
    <RouterLink
      v-for="router in routerComponents"
      :key="router.id"
      :to="router.path"
      @click="openDrawer()"
      class="flex justify-between items-center hover:text-color-3 group"
    >
      <div class="flex items-center">
        <!-- <Home class="size-6 mr-2 group-hover:-rotate-6" /> -->
        <About
          v-if="router.component == 'Home'"
          class="size-6 mr-2 group-hover:-rotate-6"
        />
        <Service
          v-else-if="router.component == 'About'"
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
  <!-- <nav
    class="flex flex-col gap-6 bg-slate-200 text-slate-600 dark:bg-color-1 dark:text-slate-400"
  >
    <RouterLink
      to="/"
      @click="openDrawer()"
      class="flex justify-between items-center hover:text-color-3 group"
    >
      <div class="flex items-center">
        <Home class="size-6 mr-2 group-hover:-rotate-6" />
        <p class="text-lg">Home</p>
      </div>
      <ArrowIcon
        class="size-6 mr-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </RouterLink>
    <RouterLink
      to="/about"
      @click="openDrawer()"
      class="flex justify-between items-center"
      :class="routerClass"
    >
      <div class="flex items-center">
        <About class="size-6 mr-2 group-hover:-rotate-6" />
        <p class="text-lg">About</p>
      </div>
      <ArrowIcon class="size-6 mr-4" :class="arrowClass" />
    </RouterLink>
    <RouterLink
      to="/portofolio"
      @click="openDrawer()"
      class="flex justify-between items-center"
      :class="routerClass"
    >
      <div class="flex items-center">
        <Service class="size-6 mr-2 group-hover:-rotate-6" />
        <p class="text-lg">Service</p>
      </div>
      <ArrowIcon class="size-6 mr-4" :class="arrowClass" />
    </RouterLink>
    <RouterLink
      to="/service"
      @click="openDrawer()"
      class="flex justify-between items-center"
      :class="routerClass"
    >
      <div class="flex items-center">
        <Portofolio class="size-6 mr-2 group-hover:-rotate-6" />
        <p class="text-lg">Portofolio</p>
      </div>
      <ArrowIcon class="size-6 mr-4" :class="arrowClass" />
    </RouterLink>
    <RouterLink
      to="/guest-note"
      @click="openDrawer()"
      class="flex justify-between items-center"
      :class="routerClass"
    >
      <div class="flex items-center">
        <GuestNote class="size-6 mr-2 group-hover:-rotate-6" />
        <p class="text-lg">Guest Room</p>
      </div>
      <ArrowIcon class="size-6 mr-4" :class="arrowClass" />
    </RouterLink>
    <RouterLink
      to="/contact"
      @click="openDrawer()"
      class="flex justify-between items-center"
      :class="routerClass"
    >
      <div class="flex items-center">
        <Contact class="size-6 mr-2 group-hover:-rotate-6" />
        <p class="text-lg">Conatct</p>
      </div>
      <ArrowIcon class="size-6 mr-4" :class="arrowClass" />
    </RouterLink>
  </nav> -->
</template>
