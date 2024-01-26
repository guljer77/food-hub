import React, { useState } from "react";
import { useQuery } from "react-query";
import { useAuth } from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

function ManageFood() {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: foods = [], refetch } = useQuery({
    queryKey: ["foods"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/foods/admin`);
      return res.data;
    },
  });
  //delete
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
              refetch();
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
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 7;
  //calculate page
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    let endIndex = startIndex + itemPerPage;
    endIndex = Math.min(endIndex, foods.length);
    return { startIndex, endIndex };
  };
  //next page
  const nextPage = () => {
    if (currentPage < Math.ceil(foods.length / itemPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  //previousPage
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  //search-function
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);
  const searchDataInput = event => {
    const filterData = event.target.value;
    setSearchInput(filterData);
    const mainData = foods.filter(item =>
      item?.name.toLowerCase().includes(filterData.toLowerCase())
    );
    setSearchData(mainData);
  };
  //main-function
  const mainFunction = (foods, searchInput) => {
    let foodData = foods;
    if (searchInput) {
      foodData = searchData;
    }
    // Calculate page range by invoking the function
    const { startIndex, endIndex } = calculatePageRange();

    // Get the subset of data based on the page range
    const currentItems = foodData?.slice(startIndex, endIndex);
    return currentItems.map((item, index) => (
      <tr key={index}>
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
            <Link
              to={`/dashboard/manage/${item?._id}`}
              className="w-[40px] h-[40px] bg-primary text-white flex items-center justify-center rounded text-[26px] cursor-pointer"
            >
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
    ));
  };
  const result = mainFunction(foods, searchInput);

  return (
    <div>
      <div className="pb-10">
        <form action="">
          <div>
            <input
              type="text"
              onChange={searchDataInput}
              value={searchInput}
              placeholder="Search Here...."
              className="py-2 px-3 lg:w-[85%] w-[70%] outline-0 border rounded-s-full"
            />
            <input
              type="submit"
              value="Search"
              className="bg-primary py-[9px] px-5 text-white rounded-e-full"
            />
          </div>
        </form>
      </div>
      <div className="p-5 rounded-md bg-gray-100">
        <div className="pb-5 flex items-center justify-between">
          <h4 className="text-[20px] font-semibold text-secondary">
            Manage Food
          </h4>
          <Link
            to="/dashboard/add-item"
            className="px-5 py-2 rounded-md bg-primary text-white"
          >
            Add Food
          </Link>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-[16px]">Sl</th>
                  <th className="text-[16px]">Name</th>
                  <th className="text-[16px]">Category</th>
                  <th className="text-[16px]">Image</th>
                  <th className="text-[16px]">Action</th>
                </tr>
              </thead>
              <tbody>{result}</tbody>
            </table>
          </div>
          <div>
            {result.length > 0 ? (
              <>
                <div>
                  <button onClick={previousPage} className="text-[16px] font-medium text-secondary">Previous</button>
                  <span className="px-3">
                    Page {currentPage}
                  </span>
                  <button onClick={nextPage} className="text-[16px] font-medium text-secondary">Next</button>
                </div>
              </>
            ) : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageFood;
