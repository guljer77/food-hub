import React from "react";
import { useQuery } from "react-query";
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useAuth } from "../../Hooks/useAuth";

function User() {
  const {loading} = useAuth();
  //fetch-api
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin`);
      return res.data;
    },
  });
  //make an admin
  const makeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user?._id}`, {
      method: "PATCH",
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user?.name} Is Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  //delete-user-fun
  const deleteOne = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete this User",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/admin/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "User has been Delete.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="bg-gray-100 p-10 rounded-md">
      <div>
        <h4 className="text-[20px] font-semibold text-secondary pb-5">
          Now Available In {users?.length} User
        </h4>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Gmail</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th className="text-[16px]">{index + 1}</th>
                <td className="text-[16px]">{user?.name}</td>
                <td className="text-[16px]">{user?.email}</td>
                <td
                  onClick={() => makeAdmin(user)}
                  className="text-[16px] cursor-pointer"
                >
                  {user?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <FaUsers className="text-[22px]" />
                  )}
                </td>
                <td
                  onClick={() => deleteOne(user?._id)}
                  className="text-[16px] w-[40px] h-[40px] flex items-center justify-center text-white bg-primary rounded-md cursor-pointer"
                >
                  <FaRegTrashAlt />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
