import React from 'react';

const StaffCard = ({staff}) => {
    return (
        <div className="bg-gray-50 border hover:border-sky-800 rounded shadow-md p-5">
        <div className="">
            <div className="">
                <img src={staff.image} className="w-24 mx-auto rounded-full" alt={staff.name} />
            </div>
            <div className="md:pl-5 md:m-0 mt-5">
                <h2 className="text-xl font-bold">{staff.name}</h2>
                <h3 className="text-sm font-bold">{staff.bio}</h3>
                <h4 className="text-xs text-gray-600">{staff.location}</h4>
                <h3 className="text-sm text-gray-600">{Number(staff.rate).toLocaleString()}</h3>
            </div>
        </div>
        <p className="text-justify mt-5 text-sm text-gray-400 line-clamp-2">{staff.details}</p>
        <div className="text-xl my-2 text-gray-600 flex start gap-1 flex-wrap items-center h-32 lg:h-10">
            {staff.services.length>3?
        <>
        {staff.services.slice(0,3).map(service=><p key={service} className='rounded-full mr-2 p-2 border border-gray-700'>{service}</p>)}
        <p>and {staff.services.length-3}More...</p>
        </>
        :<> {staff.services.map(service=><p key={service} className='rounded-full mr-2 p-2 border border-gray-700'>{service}</p>)}</>    
        }
        </div>
        <button className="bg-sky-800 hover:bg-sky-900 text-white py-2 p-5 mt-2 rounded-full text-sm flex">See Profile</button>
        </div>
    );
};

export default StaffCard;