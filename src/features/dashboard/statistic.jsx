import {
  HiOutlineBackspace,
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Statistic({ bookings, confirmedStays, cabinCount, numDays }) {
  //1- get the number of Bookings
  const numBookings = bookings.length;

  //2- compute price of all bookings
  const sales = confirmedStays.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //3- compute length of bookings that are checked in or checked out
  const checkins = confirmedStays.length;

  //- چندشب /این 6 اتاق * 30 روز گذشته پر بوده است؟

  const checkinNights =
    (confirmedStays.reduce((acc, cur) => acc + cur.numNights,0)) / (cabinCount * numDays);


  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Sales"
        color="green"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Check Ins"
        color="indigo"
        value={checkins}
        icon={<HiOutlineCalendarDays />}
      />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        value={Math.round(checkinNights * 100) + "%"}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
}

export default Statistic;
