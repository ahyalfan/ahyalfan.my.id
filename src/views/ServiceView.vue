<script setup>
import TitleComponent from "@/components/common/TitleComponent.vue";
import Macbook from "@/components/icon/Macbook.vue";
import ContainerServiceCompoenent from "@/components/service/ContainerServiceCompoenent.vue";
import { serviceData } from "@/components/service/serviceData";
</script>

<template>
  <main class="mt-16 mx-6 text-black dark:text-color-4">
    <TitleComponent t1="Services">
      <Macbook class="size-14" />
    </TitleComponent>
    <ContainerServiceCompoenent :data="serviceData" />
  </main>
</template>
