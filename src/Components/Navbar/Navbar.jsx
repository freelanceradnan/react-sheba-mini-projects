import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/sheba-logo.png'
import Dashboard from './../../Pages/Dashboard/Dashboard';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const {user,setUser}=useAuth()
    
    return (
        <div className="bg-white h-20 md:h-16 sticky top-0 shadow-md z-10">
        <div className="container mx-auto flex items-center content-between">
            {/* navbar-logo */}
       <div>
         <Link to="/"><img src={logo} alt="" className="w-40 h-auto"/></Link>
       </div>
       {/* navbar-links */}
        <div className="ml-auto flex align-center">
             <div className="ml-auto">
            <NavLink to="/services" className={({isActive})=>isActive?'px-3 py-1 mx-2 text-white border-sky-800 bg-sky-800 rounded-md':'px-3 py-1 mx-2 text-black border hover:bg-sky-800 hover:text-white rounded-md'}>Services</NavLink>
        </div>
         <div className="ml-auto">
            <NavLink to="/services" className={({isActive})=>isActive?'px-3 py-1 mx-2 text-white border-sky-800 bg-sky-800 rounded-md':'px-3 py-1 mx-2 text-black border hover:bg-sky-800 hover:text-white rounded-md'}>Stuff</NavLink>
        
        </div>
        {user.email?
        <>
        {user.role==='staff' && <div className="ml-auto">
            <NavLink to="/staff-dashboard" className={({isActive})=>isActive?'px-3 py-1 mx-2 text-white border-sky-800 bg-sky-800 rounded-md':'px-3 py-1 mx-2 text-black border hover:bg-sky-800 hover:text-white rounded-md'}>Dashboard</NavLink>
        
        </div>}
        {user.role==='admin' && <div className="ml-auto">
            <NavLink to="/admin" className={({isActive})=>isActive?'px-3 py-1 mx-2 text-white border-sky-800 bg-sky-800 rounded-md':'px-3 py-1 mx-2 text-black border hover:bg-sky-800 hover:text-white rounded-md'}>Dashboard</NavLink>
        
        </div>}
        {user.role==='user' && <div className="ml-auto">
            <NavLink to="/services" className={({isActive})=>isActive?'px-3 py-1 mx-2 text-white border-sky-800 bg-sky-800 rounded-md':'px-3 py-1 mx-2 text-black border hover:bg-sky-800 hover:text-white rounded-md'}>Dashboard</NavLink>
        
        </div>}
        </>:
        
        <>
         <div className="ml-auto">
            <NavLink to="/login" className={({isActive})=>isActive?'px-3 py-1 mx-2 text-white border-sky-800 bg-sky-800 rounded-md':'px-3 py-1 mx-2 text-black border hover:bg-sky-800 hover:text-white rounded-md'}>Login</NavLink>
        
        </div>
        </>}
        </div>
        </div>
       
        </div>
    );
};

export default Navbar;