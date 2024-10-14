import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateBooking } from "../../services/apiBookings";

export function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
        isPaid: true,
      }),

    onSuccess: (data) => {
      toast.success(`booking #${data.id} successfully checked out`);
      //it invalidates those queries those are active and doesn't need to remember query key
      queryClient.invalidateQueries({ active: true });
    },

    onError: (err) => toast.error("There was an error while check out "),
  });

  return { checkout, isCheckingOut };
}
