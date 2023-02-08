<template>
  <form @submit.prevent="onSubmit">
    <!-- start main form -->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-enter">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="
                    inline-block
                    px-1
                    text-dark
                    border border-dark
                    rounded
                    text-sm
                    font-bold
                  "
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  id="total"
                  class="text-4xl text-dark w-full outline-none mt-1"
                  type="text"
                  placeholder="0"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="
                  flex
                  items-center
                  flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  py-3
                "
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-400"
                ></span>
              </div>
              <div class="flex flex-1 border-b border-gray-100 pb-1">
                <input
                  id="category"
                  class="text-xl text-dark w-full outline-none"
                  type="text"
                  placeholder="select a Category"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="
                  flex
                  items-center
                  flex-none
                  w-10
                  text-right
                  leading-10
                  mr-4
                  py-3
                "
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-document text-2xl"></i
                ></span>
              </div>
              <div class="flex flex-1 border-b border-gray-100 pb-1">
                <input
                  id="note"
                  class="text-dark w-full outline-none"
                  type="text"
                  placeholder="note"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end">
                  <i class="t2ico t2ico-calendar text-2xl"></i
                ></span>
              </div>
              <div class="flex flex-1 py-2 border border-gray-200">
                <div class="text-dark w-full">{{ new Date() }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end">
                  <i class="t2ico t2ico-wallet text-2xl"></i
                ></span>
              </div>
              <div class="flex flex-1 py-2">
                <div class="text-dark w-full">My wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-8" v-if="!isDetail">
      <button
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
        @click="isDetail = true"
      >
        More Detail
      </button>
    </div>

    <template v-if="isDetail">
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div
                  class="
                    flex
                    items-center
                    flex-none
                    w-10
                    text-right
                    leading-10
                    mr-4
                    py-3
                  "
                >
                  <span class="flex-none w-10 mr-4">
                    <i class="t2ico t2ico-location text-2xl"></i
                  ></span>
                </div>
                <div class="flex flex-1 border-b border-gray-100 pb-1">
                  <input
                    id="location"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="location"
                    v-model="location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="widthPersion" class="flex items-center">
                <div
                  class="
                    flex
                    items-center
                    flex-none
                    w-10
                    text-right
                    leading-10
                    mr-4
                    py-3
                  "
                >
                  <span class="flex-none w-10 mr-4">
                    <i class="t2ico t2ico-users text-2xl"></i
                  ></span>
                </div>
                <div class="flex flex-1 border-b border-gray-100 pb-1">
                  <input
                    id="widthPersion"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="width Persion"
                    v-model="persion"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- upload -->
      <div class="row">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="file" class="flex items-center text-primary">
                <div
                  class="
                    flex
                    items-center
                    flex-none
                    w-10
                    text-right
                    leading-10
                    mr-4
                    py-3
                  "
                >
                  <span
                    class="flex flex-none w-10 mr-4 items-center justify-end"
                  >
                    <i class="t2ico t2ico-camera text-2xl text-primary"></i
                  ></span>
                </div>
                <div class="flex flex-1 py-2">
                  <div class="w-full">Upload Photos</div>
                  <input
                    type="file"
                    id="file"
                    class="w-0 h-0 overflow-hidden absolute"
                    @change="onChangeFile"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="text-danger">{{ errFile }}</div>
      </div>
    </template>
    <button class="bg-primary text-white">Testing Add Button</button>
  </form>
</template>
<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";
export default {
  setup() {
    const isDetail = ref(false);
    const { getUser } = useUser();
    const { addRecord } = useCollection("transaction");
    const { url, uploadFile } = useStorage("transaction");

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const file = ref(null);
    const errFile = ref(null);
    const location = ref("");
    const persion = ref("");

    const onChangeFile = (event) => {
      const selected = event.target.files[0];
      const TypeFile = ["image/png", "image/jpg"];
      if (selected && TypeFile.includes(selected.type)) {
        file.value = selected;
      } else {
        file.value = null;
        errFile.value = "please selected file png or jpg";
      }
    };

    const onSubmit = async () => {
      if (file.value) await uploadFile(file.value);
      console.log(file.value);
      const { user } = getUser();
      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        location: location.value,
        persion: persion.value,
        userId: user.value.uid,
        thumbnail: url.value,
      };
      await addRecord(transaction);
    };
    return {
      isDetail,
      total,
      category,
      note,
      time,
      location,
      persion,
      errFile,
      onChangeFile,
      onSubmit,
    };
  },
};
</script>