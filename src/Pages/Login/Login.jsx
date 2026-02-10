import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import userData from '../../Data/userData.json'

import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';




function Login() {
    let navigate=useNavigate()
    let location=useLocation()
    let from=location?.state?.from?.pathname||"/"
    const {user,setUser}=useAuth()
    useEffect(()=>{
   user.gmail && navigate(from,{replace:true})
    },[from,navigate,user.gmail])
    const [loginError,setLoginError]=useState("")
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => processLogin(data)
  

const processLogin = (formData) => {
   
    const tempUser = userData.find(u => u.gmail === formData.gmail && u.password === formData.password)
   
    if (tempUser) {
        setUser(tempUser);
        localStorage.setItem('uId', tempUser.id);
        setLoginError("");
        alert('form submitted')
        reset()
    } else {
        setLoginError("User Email or Password not Match");
    }
    
};
    return (
        <div>
            <Navbar/>
            
    <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 lg:w-1/3 flex flex-col mx-auto mt-10 p-8 gap-4 border border-black rounded-2xl">
     
      <input {...register("gmail",{ required: true })} placeholder="Enter Login Gmail ...." className="border border-emerald-600 focus:border-emerald-800 h-8"/>
            {errors.gmail && <span className="font-bold text-red-600">Email field is required</span>}
      
      <input {...register("password", { required: true })} placeholder='Enter your Password' className="border border-emerald-600 focus:border-emerald-800 h-8"/>
            {errors.password && <span className="font-bold text-red-600">Password field is required</span>}
    


      <input type="submit" value={"Login"} className="rounded-sm w-full bg-emerald-600 py-2 text-white"/>
    </form>
    <p className='text-red-400'>{loginError}</p>
        </div>
    );
}

export default Login;