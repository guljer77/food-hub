import React from "react";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { saveUserData } from "../../Hooks/saveUserHooks";

function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { userRegister, updateUser, googleAuth } = useAuth();

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
      .then(imageData => {
        if (imageData.success) {
          const imgUrl = imageData.data.display_url;
          userRegister(data.email, data.password)
            .then((result) => {
              updateUser(data.name, imgUrl)
                .then(() => {
                  saveUserData(result?.user)
                  navigate(from, { replace: true });
                })
                .catch(error => {
                  console.log(error);
                });
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
  };

  const googleHandle = () => {
    googleAuth()
      .then((result) => {
        saveUserData(result?.user)
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-bg-primary">
      <div className="bg-white w-[35%] h-auto mx-auto py-5 rounded">
        <h4 className="text-center text-[32px] font-bold text-secondary">
          Welcome Food Hub
        </h4>
        <h6 className="text-center text-[16px] font-medium pb-3 text-secondary">
          Sign Up To Continue
        </h6>
        <form onSubmit={handleSubmit(onSubmit)} className="px-10">
          <div className="pb-2">
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 outline-0 border"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-600 py-2">Name is Required</p>
            )}
          </div>
          <div className="pb-2">
            <input
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 outline-0 border"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600 py-2">Email is Required</p>
            )}
          </div>
          <div className="pb-2">
            <input
              type="file"
              {...register("image", { required: true })}
              className="w-full px-3 py-2 outline-0 border"
            />
            {errors.image?.type === "required" && (
              <p className="text-red-600 py-2">Image is Required</p>
            )}
          </div>
          <div className="pb-2">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              className="w-full px-3 py-2 outline-0 border"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is Required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password Must be 8 Characters</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Must be a UpperCase and lowercase and number and Special
                Characters
              </p>
            )}
          </div>
          <div>
            <input
              type="submit"
              value="Login"
              className="w-full py-2 bg-primary text-white cursor-pointer"
            />
          </div>
          <div className="py-7 text-center">
            <hr className="border-b border-primary" />
            <span className="relative bottom-[21px] w-[40px] flex items-center justify-center h-[40px] bg-white mx-auto rounded-full border border-primary">
              OR
            </span>
          </div>
          <div className="flex items-center relative bottom-8 justify-center space-x-3">
            <span onClick={googleHandle} className="w-[35px] h-[35px] cursor-pointer transition-all duration-300 hover:bg-primary bg-secondary text-white rounded-full flex items-center justify-center">
              <FaGoogle />
            </span>
            <span className="w-[35px] h-[35px] cursor-pointer transition-all duration-300 hover:bg-primary bg-secondary text-white rounded-full flex items-center justify-center">
              <FaFacebookF />
            </span>
            <span className="w-[35px] h-[35px] cursor-pointer transition-all duration-300 hover:bg-primary bg-secondary text-white rounded-full flex items-center justify-center">
              <FaTwitter />
            </span>
          </div>
          <h4 className="text-center">
            You Have Already An Aceount ?{" "}
            <Link to="/login" className="text-primary">
              Please Sign In
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
