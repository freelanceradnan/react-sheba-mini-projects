import React from 'react';
import useAuth from './../../Hooks/useAuth';
import Navbar from '../../Components/Navbar/Navbar';
import StaffCard from '../../Components/Staff/StaffCard';

const Staffs = () => {
    const {staffs}=useAuth()
    return (
        <div>
         <Navbar/>
         <div className="container mx-auto p-2">
            <div className="grid grid-cols-2 gap-10">
            {
                staffs.length>0?
                staffs.map(staff=><StaffCard key={staff._id} staff={staff}/>)
                :
                <p>No staff available</p>
            }  
            </div>
         </div>
        </div>
    );
};

export default Staffs;