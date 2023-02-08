import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

const signUp = async (email, password, fullname) => {
  isPending.value = true;
  error.value = null;
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) throw new Error("could not create a new user");

    await res.user.updateProfile({ displayName: fullname });
    console.log(res);
    return res;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};

export const useSignUp = () => {
  return { error, isPending, signUp };
};
