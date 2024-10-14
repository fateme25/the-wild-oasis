import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      toast.success(`booking #${data.id} successfully checked in`);
      //it invalidates those queries those are active and doesn't need to remember query key
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: (err) => toast.error("There was an error while check in "),
  });

  return { checkin, isCheckingIn };
}
