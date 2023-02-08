import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

const signIn = async (email, password) => {
  error.value = null;
  isPending.value = true;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    return res;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};
export const useSignIn = () => {
  return { error, isPending, signIn };
};
