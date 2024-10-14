import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,

    onSuccess: ({ user }) => {
      toast.success("User successfully edited");

      queryClient.setQueryData(["user"], user);
      // queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
