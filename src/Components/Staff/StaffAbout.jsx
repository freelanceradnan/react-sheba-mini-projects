import React from 'react';
import useAuth from '../../Hooks/useAuth';

const StaffAbout = () => {
    const {services,slots,staff}=useAuth()
    const staffCategories=staff?.services?.map(serviceName=>(services.find(service=>service.name===serviceName)||{}).category||"No category found")
    const uniqueCategories=[...new Set(staffCategories)]
    console.log(uniqueCategories)
    return (
        <div className="my-10 bg-[#f9f9f8]">
            <div className="container mx-auto p-2">
<div className="grid grid-cols-1 md:grid-cols-2">
    <div className="border rounded-md bg-white p-5 w-full md:w-11/12">
    <h2 className="font-bold text-xl">Policies</h2>
    <div className="ms-3 mt-5">
        <p className="mx-3 text-sm text-gray-500">Form</p>
    <p className="mx-3 mt-1 text-sm">{staff.location}</p>
    </div>
     <div className="ms-3 mt-5">
        <p className="mx-3 text-sm text-gray-500">Form</p>
    <p className="mx-3 mt-1 text-sm">{staff.rate}</p>
    </div>
   
    
    </div>
    
    
</div>
<div className='grid grid-cols-1 md:grid-cols-2'>
     <div className="border rounded-md bg-white p-5 w-full md:w-11/12">
    <h2 className="text-xl font-bold">Service Slots</h2>
    <div className="divide-y divide-slate-200 mt-5">
        {slots.length>0 && 
        slots.map((slot)=><div key={slot._id} className="grid grid-cols-2 items-center content-between">
    <div className="text-sm py-2 text-gray-500">{slot.label}</div>
    <div className="text-sm py-2 text-gray-500 text-end">{slot.start_time}{slot.end_time}</div>
        </div>)
    
        }
    </div>
    </div>

</div>
            </div>
            
        </div>
    );
};

export default StaffAbout;