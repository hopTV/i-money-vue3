<template>
  <div class="row" v-if="user">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet-700x695.jpg"
            class="w-full h-auto object-cover"
            size="xs"
            alt="avatar"
          />
        </div>
        <div class="text-bold text-2xl text-primary mt-3">
          {{ user.displayName }}
        </div>
        <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="container mx-auto px-8 py-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-xl text-primary mb-2">Generel</h3>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <ul>
            <li v-for="(item, i) in profileOptions" :key="item.name">
              <router-link
                :to="item.route.name"
                class="flex justify-between items-center py-3"
              >
                <div
                  class="flex items-center text-left"
                  :class="{ 'text-red': i === profileOptions.length - 1 }"
                >
                  <i class="t2ico text-xl" :class="item.icon"></i>
                  <h5 class="font-semibold ml-3">{{ item.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { PROFILE_OPTIONS } from "@/constants";

import { useUser } from "@/composables/useUser";
export default {
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);

    const { getUser } = useUser();

    const { user } = getUser();
    return { profileOptions, user };
  },
};
</script>