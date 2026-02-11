import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import useAuth from '../../Hooks/useAuth';
import HeroSection from '../../Components/Home/HeroSection';


function Home() {
    const {user}=useAuth()
    console.log(user)
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            
        </div>
    );
}

export default Home;