<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form
        @submit.prevent="onSubmit"
        class="flex flex-col justify-start space-y-6"
      >
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email</span>
            <input
              v-model="email"
              id="email"
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
            sign In
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
            :to="{ name: 'register', params: {} }"
            class="text-primary font-bold"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignIn } from "@/composables/useSignIn.js";

export default {
  setup() {
    const { error, isPending, signIn } = useSignIn();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const onSubmit = async () => {
      // console.log({ email, password });
      await signIn(email.value, password.value);
      if (!error.value) router.push({ name: "profile", params: {} });
    };
    return { email, password, error, isPending, onSubmit };
  },
};
</script>
