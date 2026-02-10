import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import useAuth from '../../Hooks/useAuth';


function Dashboard() {
    const {user,logout}=useAuth()
    return (
        <div>
            <Navbar/>
            <h2 className="py-4">
                {user?.name?
                    <h2>Welcome {user.name}</h2>:<h2>Noob user</h2>
                }
            </h2>
           
            <div className="mb-6">
                    {user?.image ? (
                        <img 
                            src={user.image} 
                            alt={user.name} 
                            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-emerald-500"
                        />
                    ) : (
                        <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center">
                            No Image
                        </div>
                    )}
                </div>
            <button className="rounded-sm w-50 bg-emerald-600 py-2 text-white" onClick={()=>logout()}>Logout</button>
        </div>
    );
}

export default Dashboard;