import { useQuery, useQueryClient } from "@tanstack/react-query";
import {getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export default function useFetchBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Filter Booking
  const filteredValue = searchParams.get("status");
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue };

  // Sort Booking
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");

  const sortBy = { field, direction };

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // using query data for all data
  const { isLoading, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ["bookings", filteredValue, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });


  //Pre fetch query data
  const pageCount = Math.ceil(page / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filteredValue, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filteredValue, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  return { isLoading, bookings, count};
}
