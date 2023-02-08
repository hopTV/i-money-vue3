<template>
  <h1>logout Page</h1>
</template>

<script>
import { useRouter } from "vue-router";
import { useLogout } from "@/composables/useLogout";
export default {
  setup() {
    const router = useRouter();
    const { error, logout } = useLogout();

    const onLogout = async () => {
      await logout();
      if (!error.value) router.push({ name: "login", params: {} });
    };
    onLogout();
    return {};
  },
};
</script>