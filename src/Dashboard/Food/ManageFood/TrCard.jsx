import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function TrCard({ index, item }) {
  const deleteData = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete This Food Item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/foods/admin/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Food Item Has Deleted Successfully",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item?.name}</td>
      <td>{item?.category}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={item?.image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <Link className="w-[40px] h-[40px] bg-primary text-white flex items-center justify-center rounded text-[26px] cursor-pointer">
            <CiEdit />
          </Link>
          <span
            onClick={() => deleteData(item?._id)}
            className="w-[40px] h-[40px] bg-primary text-white flex items-center justify-center rounded text-[20px] cursor-pointer"
          >
            <FaRegTrashCan />
          </span>
        </div>
      </td>
    </tr>
  );
}

export default TrCard;
