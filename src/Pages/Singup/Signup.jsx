import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import userData from "../../Data/userData.json";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
     let navigate = useNavigate();
  let location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  const { user, setUser } = useAuth();
  useEffect(() => {
    user.email && navigate(from, { replace: true });
  }, [from, navigate, user.gmail]);
  const [loginError, setLoginError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => signupLogin(data);

  const signupLogin = (formData) => {
    const userData={
        name:formData.name,
        role:"user",
        email:formData.email,
        password:formData.password
    }
    setLoginError("");
    let signup_btn = document.getElementById("signup-btn");
    signup_btn.disabled = true;
    signup_btn.innerHTML = "Processing Signup...";
    // btn.style.backgroundColor="gray"

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheba-xyz-backend.onrender.com/user`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          },
        );

        const result = await response.json();
        
        if (result.status) {
          setUser(result.user)
          setLoginError("");
          localStorage.setItem("uId", result.user._id);
          result.user.role === "user" && navigate("/");
          result.user.role === "admin" && navigate("/admin");
        } else {
          setLoginError(result.message);
          reset();
          signup_btn.disabled = false;
          signup_btn.innerHTML = "Sign Up";
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  };
    return (
          <div>
      <Navbar />

      <form
        id="signup_form"
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/3 lg:w-1/3 flex flex-col mx-auto mt-10 p-8 gap-4 border border-black rounded-2xl"
      >
        <input
         type="text" autoComplete={`name`}
          {...register("name", { required: true })}
          placeholder="Enter Your Name ...."
          className="border border-emerald-600 focus:border-emerald-800 h-8"
        />
        {errors.name && (
          <span className="font-bold text-red-600">
            Name field is required
          </span>
        )}
        <input
         type="text" autoComplete={`email`}
          {...register("email", { required: true })}
          placeholder="Enter Gmail ...."
          className="border border-emerald-600 focus:border-emerald-800 h-8"
        />
        {errors.email && (
          <span className="font-bold text-red-600">
            Email field is required
          </span>
        )}

        <input
          {...register("password", { required: true })}
          placeholder="Enter your Create Password"
          className="border border-emerald-600 focus:border-emerald-800 h-8"
        />
        {errors.password && (
          <span className="font-bold text-red-600">
            Password field is required
          </span>
        )}

        <button
          type="submit"
          className="rounded-sm w-full bg-emerald-600 py-2 text-white"
          id="signup-btn"
        >
          Sign Up
        </button>
        <p className="text-red-400">{loginError}</p>
        <p className="text-sky-950 my-2">Have an Account? <Link to="/login" className="underline">Login Here</Link></p>
      </form>
    </div>
  );

};

export default Signup;