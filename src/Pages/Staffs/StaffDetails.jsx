import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import StaffAbout from '../../Components/Staff/StaffAbout';
import StaffReview from '../../Components/Staff/StaffReview';

const StaffDetails = () => {
    const {id}=useParams()
    const {staff,setStaff}=useAuth()
  
    useEffect(()=>{
    if(staff){
        // console.log('fired')
    const fetchData=async()=>{
    try{
    const response=await fetch(`https://sheba-xyz-backend.onrender.com/staff/${id}`)
    const result=await response.json()
    // console.log(result)
    if(result.status){
        setStaff(result.staff)
    }
    else{
        console.log(result)
    }
 }
    catch(error){
    console.log(error)
    }
    }
     fetchData()
    }

   
    },[id,setStaff,staff.name])
   const [toggle,setToggle]=useState(false)
   const [tab,setTab]=useState('About')
   const handleTabChange=(tabName)=>{
    if(tab!==tabName){
    setToggle((curr)=>!curr)
    setTab(tabName)
    }
   }

    return (
        <div>
        <Navbar/>
        <div className="mx-auto p-2">
        <div className="md:flex items-center mt-5 h-44">
            <div className="">
                <img src={staff.image} alt={staff.name} className='w-24 mx-auto rounded-full shadow'/>
            </div>
            <div className="md:pl-5 md:m-0 mt-10">
                <h2 className="text-xl font-bold">{staff.name}</h2>
                <h3 className='text-sm text-gray-600'>{staff.bio}</h3>
                <h4 className="text-sm text-gray-800">{Number(staff.rate).toLocaleString()}</h4>
            </div>
           
        </div>
         <div className="mt-5 pt-5 md:pt-0">
            <button 
            onClick={()=>handleTabChange('About')}
            className={`text-lg font-bold tracking-wide ${toggle?`text-sky-900`:`text-sky-500`}`}>About</button>
            <button 
            onClick={()=>handleTabChange('Review')}
            className={`text-lg font-bold tracking-wide ${toggle?`text-sky-500`:`text-sky-900`} pl-2`} >Review</button>
            </div>
   
        </div>
        {staff.name && tab===`About` &&<StaffAbout/>}
        {staff.name && tab===`Review` &&<StaffReview/>}
        </div>
    );
};

export default StaffDetails;