import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import useAuth from '../../Hooks/useAuth';
import Skeleton from '../../Components/Skeleton/Skeleton';
import ServiceCard from '../../Components/Services/ServiceCard';
{useAuth}
const Services = () => {
    const {categories,services}=useAuth()
   
    return (
        <div>
         <Navbar/>
         <div className="container mx-auto p-2">
            <h1 className="text-3xl text-center font-bold my-5">Sheba.xyz Services</h1>
            {categories.length>0 && services.length>0?
            categories.map(category=>(
                <div key={category._id} className="my-10">
                    <div className="w-full">
                        <h2 className="text-xl font-bold m-5">{category.name}</h2>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {services.filter(service=>service.category===category.name).map(service=>(
                        <div className="">
                            <ServiceCard key={service._id} service={service}/>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>
            ))
            :
            <Skeleton/>
            }
         </div>
        </div>
    );
};

export default Services;