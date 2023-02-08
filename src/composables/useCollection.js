import { ref } from "vue";
import { projectFileStore } from "@/configs/firebase";

const useCollection = (name) => {
  const error = ref(null);

  const addRecord = async (record) => {
    error.value = null;
    try {
      const res = await projectFileStore.collection(name).add(record);
      return res;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  };
  return { addRecord };
};

export default useCollection;
