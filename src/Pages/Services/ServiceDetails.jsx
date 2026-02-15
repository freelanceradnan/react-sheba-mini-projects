import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navbar from '../../Components/Navbar/Navbar';
import StaffminiCart from '../../Components/Staff/StaffminiCart';

const ServiceDetails = () => {
    const {id}=useParams()
    
    
    const {service,setService,staffs,user}=useAuth()
    useEffect(()=>{
    if(!service.name){
        const fetchData=async()=>{
            try{
        const response=await fetch(`https://sheba-xyz-backend.onrender.com/service/${id}`)
       
        const result=await response.json()
        console.log(result)
       
        if(result.status){
            setService(result.service)
        }
        else{
            // console.log(result)
        }
            }
            catch(error){
                console.log(error)
            }
        }
        fetchData()
    }
    
    },[id,service.name,setService])
    return (
        <div>
            <Navbar/>
            <div className="contianer mx-auto p-2">
                <h1 className="text-xl lg:text-3xl my-5 lg:my-10 font-bold">{service.name}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-full">
    <img src={service.image} alt={service.name} />
    <h2 className='font-bold text-xl mt-10 py-2'>Service Overview</h2>
    <h2 className="text-justify">{service.description}</h2>
                    </div>
{user.role!=='admin' && user.role!=='stuff' &&
<div>
    <h2 className="font-bold">Service Providers</h2>
    {
        staffs.length>0 ?
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
{staffs.filter(staff=>staff.services.includes(service.name)).map(staff=><StaffminiCart staff={staff} key={staff._id}/>)
        }
         </div>
        :
        <p className="text-center mt-5">No Staff Available!</p>
    
    }
</div>
}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;