import React, { useState } from "react";
import Container from "../../Components/Container";
import { useCartData } from "../../Hooks/useCart";
import { FaRegWindowClose } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

function Cart() {
  const [cart, refetch] = useCartData();
  const [axiosSecure] = useAxiosSecure();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  const deleteItem = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`http://localhost:5000/userFoods/${id}`)
          .then(data => {
            refetch();
            if (data.data.deletedCount > 0) {
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="lg:py-20 py-10">
      <Container>
        <div className="pb-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-[17px] font-medium text-secondary">Sl</th>
                  <th className="text-[17px] font-medium text-secondary">
                    Image
                  </th>
                  <th className="text-[17px] font-medium text-secondary">
                    Details
                  </th>
                  <th className="text-[17px] font-medium text-secondary">
                    Price
                  </th>
                  <th className="text-[17px] font-medium text-secondary">
                    Quantity
                  </th>
                  <th className="text-[17px] font-medium text-secondary">
                    Total
                  </th>
                  <th className="text-[17px] font-medium text-secondary">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{item?.name}</td>
                    <td>${item?.offerPrice}</td>
                    <td className="flex items-center space-x-3">
                      <button className="px-3 py-[6px] bg-primary text-white rounded text-[22px]">
                        -
                      </button>
                      <span className="px-5 py-[6px] border rounded-full block">
                        {item?.quantity}
                      </span>
                      <button className="px-3 py-[6px] bg-primary text-white rounded text-[22px]">
                        +
                      </button>
                    </td>
                    <td>$ {item?.price}</td>
                    <td
                      onClick={() => deleteItem(item?._id)}
                      className="cursor-pointer text-black text-[28px]"
                    >
                      <FaRegWindowClose />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <form action="">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            <div className="col-span-2 p-5 bg-bg-primary rounded">
              <h4 className="text-[22px] font-semibold text-secondary pb-2 border-b border-gray-200">
                Billing Information
              </h4>
              <div className="lg:flex items-center justify-between gap-5 pt-5 lg:pb-3 pb-0">
                <div className="lg:pb-0 pb-3 lg:w-[50%] w-full">
                  <label className="block pb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full py-[6px] outline-0 border px-3 rounded-md"
                  />
                </div>
                <div className="lg:pb-0 pb-3 lg:w-[50%] w-full">
                  <label className="block pb-1">Town / City</label>
                  <input
                    type="text"
                    placeholder="Enter Your City Name"
                    className="w-full py-[6px] outline-0 border px-3 rounded-md"
                  />
                </div>
              </div>
              <div className="lg:flex items-center justify-between gap-5 lg:pb-3 pb-0">
                <div className="lg:pb-0 pb-3 lg:w-[50%] w-full">
                  <label className="block pb-1">Phone</label>
                  <input
                    type="text"
                    placeholder="Ex: 01777777777"
                    className="w-full py-[6px] outline-0 border px-3 rounded-md"
                  />
                </div>
                <div className="lg:pb-0 pb-3 lg:w-[50%] w-full">
                  <label className="block pb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full py-[6px] outline-0 border px-3 rounded-md"
                  />
                </div>
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="p-2 rounded-md w-full outline-0 resize-none"
                  placeholder="Ex: street address"
                ></textarea>
              </div>
            </div>
            <div className="p-10 rounded-md bg-bg-primary">
              <h4 className="text-[20px] font-semibold text-secondary pb-1">
                Total Cart ({cart.length})
              </h4>
              <hr className="border border-gray-200" />
              <div className="flex items-center justify-between pt-5 pb-3">
                <h4 className="text-[18px] font-medium text-secondary">
                  SubTotal:
                </h4>
                <h4 className="text-[18px] font-medium text-secondary">
                  $ {totalPrice}
                </h4>
              </div>
              <div className="flex items-center justify-between pb-3">
                <h4 className="text-[18px] font-medium text-secondary">
                  Delivery:
                </h4>
                <h4 className="text-[18px] font-medium text-secondary">
                  $ 5.00
                </h4>
              </div>
              <hr className="border border-gray-200" />
              <div className="flex items-center justify-between pt-5">
                <h4 className="text-[18px] font-medium text-secondary">
                  Total:
                </h4>
                <h4 className="text-[18px] font-medium text-secondary">
                  $ {totalPrice + 5}
                </h4>
              </div>
              <Link className="my-5 block text-center w-full bg-primary text-white py-3 rounded-full">
                CheckOut
              </Link>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Cart;
