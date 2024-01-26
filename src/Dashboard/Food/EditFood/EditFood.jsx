import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

function EditFood() {
  const navigate = useNavigate();
  const { id } = useParams();
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
  const filterData = foods.find(item => item?._id === id);
  const { name, category, regularPrice, offerPrice, description, image, _id } =
    filterData;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = data => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_Imgbb_Secret
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(dataImg => {
        if (dataImg.success) {
          let imgUrl = null;
          if (dataImg.success) {
            imgUrl = dataImg.data.display_url;
          } else {
            imgUrl = data.image;
          }
          const { name, category, regularPrice, offerPrice, description } =
            data;
          const newItem = {
            name,
            category,
            regularPrice,
            offerPrice,
            description,
            image: imgUrl,
          };
          fetch(`http://localhost:5000/foods/admin/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newItem),
          })
            .then(res => res.json())
            .then(data => {
              if (data.modifiedCount) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Food Update Success",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
              navigate('/dashboard/manage')
            });
        }
      });
  };
  return (
    <div className="p-10 bg-gray-100 rounded-md">
      <div className="pb-5 flex items-center justify-between">
        <h4 className="text-[20px] font-semibold text-secondary">
          Edit A Food
        </h4>
        <Link
          to="/dashboard/manage"
          className="px-5 py-2 rounded-md bg-primary text-white"
        >
          Manage Food
        </Link>
      </div>
      <hr className="border border-primary" />
      <div className="pt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:flex items-center justify-between gap-5 lg:pb-3 pb-0">
            <div className="lg:w-1/2 w-full">
              <label className="block pb-1">Food Name</label>
              <input
                type="text"
                defaultValue={name}
                {...register("name", { required: true })}
                className="px-3 py-2 rounded-md outline-0 border w-full"
              />
              {errors.name?.types === "required" && <h6>Please Write Name</h6>}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block pb-1">Food Category</label>
              <input
                type="text"
                defaultValue={category}
                {...register("category", { required: true })}
                className="px-3 py-2 rounded-md outline-0 border w-full"
              />
              {errors.category?.types === "required" && (
                <h6>Category Name Is Required</h6>
              )}
            </div>
          </div>
          <div className="lg:flex items-center justify-between gap-5 lg:pb-3 pb-0">
            <div className="lg:w-1/2 w-full">
              <label className="block pb-1">Food Regular Price</label>
              <input
                type="text"
                defaultValue={regularPrice}
                {...register("regularPrice", { required: true })}
                className="px-3 py-2 rounded-md outline-0 border w-full"
              />
              {errors.regularPrice?.types === "required" && (
                <h6>Price Is Required</h6>
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block pb-1">Food Offer Price</label>
              <input
                type="text"
                defaultValue={offerPrice}
                {...register("offerPrice", { required: true })}
                className="px-3 py-2 rounded-md outline-0 border w-full"
              />
              {errors.offerPrice?.types === "required" && (
                <h6>Offer Price Is Required</h6>
              )}
            </div>
          </div>
          <div className="pb-3">
            <label className="block pb-1">Description</label>
            <textarea
              id=""
              cols="30"
              rows="5"
              defaultValue={description}
              {...register("description", { required: true })}
              placeholder="Ex: Your Product Description"
              className="p-3 rounded-md w-full outline-0 resize-none border"
            ></textarea>
            {errors.description?.types === "required" && (
              <h6>Description Is Required</h6>
            )}
          </div>
          <div className="">
            <label className="block pb-1">Food Image</label>
            <input
              type="file"
              multiple
              {...register("image")}
              className="px-3 py-2 rounded-md outline-0 border w-full"
            />
            <img src={image} alt="" className="w-[120px] h-[120px] mt-5" />
          </div>
          <div className="pt-5">
            <input
              type="submit"
              value="Add Food"
              className="px-5 py-2 rounded-md text-white bg-primary cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditFood;
