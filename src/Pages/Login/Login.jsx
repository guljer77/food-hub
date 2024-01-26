import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import { saveUserData } from "../../Hooks/saveUserHooks";

function Login() {
  const { loginUser, googleAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = data => {
    loginUser(data.email, data.password)
      .then((result) => {
        saveUserData(result?.user)
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error);
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
      <div className="bg-white w-[35%] h-auto mx-auto py-10 rounded">
        <h4 className="text-center text-[32px] font-bold text-secondary">
          Welcome Back
        </h4>
        <h6 className="text-center text-[16px] font-medium pb-5 text-secondary">
          Sign In To Continue
        </h6>
        <form onSubmit={handleSubmit(onSubmit)} className="px-10">
          <div className="pb-3">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 outline-0 border"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600 py-2">Email is Required</p>
            )}
          </div>
          <div className="pb-3">
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-full px-3 py-2 outline-0 border"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is Required</p>
            )}
            <h4 className="text-[18px] font-normal text-primary cursor-pointer py-2">
              Forgot Password ?
            </h4>
          </div>
          <div>
            <input
              type="submit"
              value="Login"
              className="w-full py-2 bg-primary text-white cursor-pointer"
            />
          </div>
          <div className="py-10 text-center">
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
            Dont’t Have An Aceount ?{" "}
            <Link to="/signUp" className="text-primary">
              Create Account
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default Login;
