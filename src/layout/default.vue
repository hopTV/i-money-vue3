<template>
  <NavigationHeader />
  <slot />
  <NavigationBottom v-if="meta.isFooter" />
</template>
<script>
import NavigationBottom from "@/components/NavigationBottom";
import NavigationHeader from "@/components/NavigationHeader.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  components: { NavigationBottom, NavigationHeader },
  setup() {
    const route = useRoute();
    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
