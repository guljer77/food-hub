import React from "react";
import { useBookings } from "../../../Hooks/useBookings";

function Bookings() {
  const [bookings] = useBookings();
  return (
    <div>
      <div className="text-[26px] font-semibold text-secondary pb-3">
        My Bookings
      </div>
      <div className="p-5 bg-white rounded-md">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Bookings Date</th>
                <th>Bookings Time</th>
                <th>Person</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.date}</td>
                  <td>{item?.time_select}</td>
                  <td>{item?.person}</td>
                  <td>{item?.status === "Confirm"? <p className="text-blue-600">Confirm</p>:<p className="text-red-600">Pending</p>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
