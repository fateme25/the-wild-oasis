import styled from "styled-components";
import Statistic from "./statistic";
import Spinner from "../../ui/Spinner";
import useFetchCabins from "../cabins/useFetchCabins";
import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const {isLoading: isLoadingStays, confirmedStay } = useRecentStays();

  const { isLoading: isLoadingCabins, cabins } = useFetchCabins();
  const { numDays } = useRecentStays();

  if (isLoadingBookings || isLoadingStays || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Statistic
        bookings={bookings}
        confirmedStays={confirmedStay}
        cabinCount={cabins.length}
        numDays={numDays}
      />
      <TodayActivity/>
      <DurationChart confirmedStay={confirmedStay} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
