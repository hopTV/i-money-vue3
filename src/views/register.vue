<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form
        @submit.prevent="onSubmit"
        class="flex flex-col justify-start space-y-6"
      >
        <div class="row">
          <label for="fullname" class="flex flex-col">
            <span class="font-semibold">Full Name</span>
            <input
              id="fullname"
              v-model="fullname"
              type="text"
              class="px-4 py-2 rounded-lg border border-gray-200 mt-1"
              placeholder="Enter Name"
            />
          </label>
        </div>
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email</span>
            <input
              id="email"
              v-model="email"
              type="text"
              class="px-4 py-2 rounded-lg border border-gray-200 mt-1"
              placeholder="Enter Email"
              autocomplete="username"
            />
          </label>
        </div>
        <div class="row">
          <label for="password" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              v-model="password"
              type="password"
              class="px-4 py-2 rounded-lg border border-gray-200 mt-1"
              placeholder="Enter Password"
              autocomplete="current-password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            class="py-3 text-center w-full bg-primary rounded text-white"
            type="submit"
          >
            sign Up
          </button>
          <button
            v-else
            class="py-3 text-center w-full bg-gray-600 rounded text-white"
            type="button"
            disabled
          >
            loading...
          </button>
        </div>
      </form>
      <div v-if="error" class="text-left mt-4 text-red">
        <span>{{ error }}</span>
      </div>
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1"
          ><router-link
            :to="{ name: 'login', params: {} }"
            class="text-primary font-bold"
            >Sign In</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignUp } from "@/composables/useSignUp.js";
export default {
  setup() {
    const { error, isPending, signUp } = useSignUp();
    const router = useRouter();

    const fullname = ref("");
    const email = ref("");
    const password = ref("");

    const onSubmit = async () => {
      await signUp(email.value, password.value, fullname.value);
      if (!error.value) router.push({ name: "profile", params: {} });
    };
    return { fullname, email, password, error, isPending, onSubmit };
  },
};
</script>
