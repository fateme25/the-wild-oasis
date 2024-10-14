import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export default function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),

    onSuccess: (user) => {
      toast.success(
        "Account successfully created ! Please verify the new account from user's email address"
      );
    },

    onError: (err) => {
      console.log("Error", err.message);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { signup, isLoading };
}
