import React from "react";
import { useQuery } from "react-query";
import { useAuth } from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

function AdminBookings() {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: adminBookings = [], refetch } = useQuery({
    queryKey: ["adminBookings"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/bookings`);
      return res.data;
    },
  });
  const bookingsConfirm = id => {
    axiosSecure.patch(`/admin/bookings/${id}`).then(data => {
      if (data.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Bookings Confirm Now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <h4 className="text-[26px] font-semibold text-secondary pb-3">
        Bookings
      </h4>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>Sl</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {adminBookings.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.status === "Confirm" ? <p className="text-blue-600">confirm</p> : <p className="text-red-600">Pending</p>}</td>
                  <td className="">
                    <button
                      onClick={() => bookingsConfirm(item?._id)}
                      className="py-[6px] rounded bg-primary text-white px-3"
                    >
                      Confirm
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminBookings;
