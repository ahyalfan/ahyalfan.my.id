<script setup>
import { formSchema } from "@/util/validate";
import { ElNotification } from "element-plus";
import { reactive, ref, watch } from "vue";
import PlaneIcon from "../icon/PlaneIcon.vue";

// do not use same name with ref
const form = reactive({
  name: "",
  email: "",
  desc: "",
});
const formValid = reactive({
  err: false,
  message: "",
});
const plane = ref(null);
const buttonSend = ref(false);

const handleValidate = async () => {
  try {
    await formSchema.validateAsync(form, { abortEarly: false });
    formValid.err = false;
    buttonSend.value = true;
  } catch (error) {
    if (error.isJoi) {
      //   console.log(error.details[0].message);
      formValid.err = true;
      formValid.message = error.details[0].message;
    }
  }
};

watch(form, () => {
  handleValidate();
});
const chatN = (name, email, des) => {
  plane.value.style.transition = "all 200ms ease";
  plane.value.style.transform = "translateX(10px)";

  try {
    const url = import.meta.env.VITE_TELEGRAM_BOT_URL
    const request = new Request(
      `${url}&text=nama %20 : %20 ${name} %0A email %20:%20 ${email} %0A pesan %20: %20 ${des}`,
      {
        method: "GET",
      }
    );
    const response = fetch(request);
    ElNotification({
      title: "Success",
      message: "Success message",
      type: "success",
    });
  } catch (e) {
    ElNotification({
      title: "Warning",
      message: e.message,
      type: "warning",
    });
  }

  setTimeout(() => {
    form.name = "";
    form.email = "";
    form.desc = "";
    plane.value.style.transform = "";
    formValid.err = false;
    buttonSend.value = true;
  }, 1000);
};
</script>
<template>
  <div class="mt-6">
    <h6 class="text-base font-bold mt-1.5 text-center">Send me a message</h6>
    <p v-if="formValid.err" class="text-red-500">error : {{ formValid.message }}</p>
    <form class="flex-col flex gap-2 md:grid md:grid-cols-8 md:gap-x-4" @submit.prevent>
      <label for="nama" class="relative pt-3 md:col-start-1 col-span-4">
        <p class="absolute top-0 left-2 z-10 bg-color-4 dark:bg-color-1 px-1">Name :</p>
        <input
          type="text"
          v-model="form.name"
          placeholder="Your Name"
          class="bg-color-4 dark:bg-color-1 p-2 rounded-lg w-full border-slate-500 border h-12 sm:h-16 md:h-12 lg:h-16"
        />
      </label>
      <label for="email" class="relative pt-3 md:col-span-4">
        <p class="absolute top-0 left-2 z-10 bg-color-4 dark:bg-color-1 px-1">Email :</p>
        <input
          type="email"
          v-model="form.email"
          placeholder="Your Email"
          class="bg-color-4 dark:bg-color-1 p-2 rounded-lg w-full border-slate-500 border h-12 sm:h-16 md:h-12 lg:h-16"
        />
      </label>
      <label for="pesan" class="relative pt-3 md:col-span-8">
        <p class="absolute top-0 left-2 z-10 bg-color-4 dark:bg-color-1 px-1">
          Project Description :
        </p>
        <textarea
          class="w-full p-2 pt-4 pl-4 rounded-lg bg-color-4 dark:bg-color-1 border-slate-500 border"
          placeholder="Write me your project description ...."
          v-model="form.desc"
          cols="30"
          rows="10"
        >
pesan</textarea
        >
      </label>
      <button
        v-if="buttonSend"
        id="submit"
        class="rounded-lg bg-color-3 py-2 text-white flex justify-center items-center md:col-span-2"
        type="submit"
        @click="chatN(form.name, form.email, form.desc)"
      >
        Send Me
        <span ref="plane"><PlaneIcon /></span>
      </button>
      <button
        v-else
        class="rounded-lg bg-color-3 py-2 text-white flex justify-center items-center md:col-span-2"
      >
        Send Me
        <PlaneIcon />
      </button>
    </form>
  </div>
</template>

<style scoped></style>
