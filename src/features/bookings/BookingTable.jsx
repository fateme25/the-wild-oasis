import BookingRow from "./BookingRow";
import useFetchBookings from "./useFetchBookings";

import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { bookings, isLoading ,count} = useFetchBookings();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resourceName="Booking" />;

  return (
    <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <Table.Header>
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={bookings}
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      />

      <Table.Footer>
        <Pagination count={count}/>
      </Table.Footer>
    </Table>
  );
}

export default BookingTable;
