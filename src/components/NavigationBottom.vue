<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white py-4 p-b-safe-4"
  >
    <div class="container mx-auto px-4 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="(item, i) in navItems" :key="i">
          <router-link :to="{ name: item.name, params: {} }">
            <i class="t2ico text-xl" :class="item.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div
      data-btn
      class="absolute top-0 left-1/2 transform -translate-x-1/2"
    ></div>
    <div
      class="
        absolute
        flex
        items-center
        justify-center
        bg-primary
        text-white
        w-12
        h-12
        rounded-full
        cursor-pointer
        -top-6
        left-1/2
        transform
        -translate-x-1/2
      "
      @click="goToRoute"
    >
      <i class="t2ico t2ico-plus"></i>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { NAV_BOTTOM_ITEMS } from "@/constants";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const navItems = reactive(NAV_BOTTOM_ITEMS);
    const goToRoute = () => {
      router.push({ name: "NewTransaction", params: {} });
    };
    return { navItems, goToRoute };
  },
};
</script>
<style scoped>
footer#footer > div[data-btn] {
  @apply w-[60px] h-[30px];
  @apply bg-dark-light;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>