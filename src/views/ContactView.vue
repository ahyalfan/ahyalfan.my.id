<script setup>
import TitleComponent from "@/components/common/TitleComponent.vue";
import SendMessageComponent from "@/components/contact/SendMessageComponent.vue";
import MailIcon from "@/components/icon/MailIcon.vue";
import MedsosComponent from "@/components/medsos/MedsosComponent.vue";
</script>

<template>
  <main class="mt-16 mx-6 text-black dark:text-color-4">
    <TitleComponent t1="Hire" t2="Me">
      <MailIcon class="size-14" />
    </TitleComponent>
    <div class="mt-2">
      <p class="text-base tracking-wider leading-relaxed text-slate-400">
        Let's collaborate to create perfect and most user-friendly digital products. Just
        leave a message to get in touch.
      </p>
      <SendMessageComponent />
      <MedsosComponent class="mt-6 justify-center" />
    </div>
  </main>
</template>
