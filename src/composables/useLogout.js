import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);

const logout = async () => {
  error.value = null;
  try {
    const res = await projectAuth.signOut();
    return res;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
};
export const useLogout = () => {
  return { error, logout };
};
