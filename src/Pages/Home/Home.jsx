import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import useAuth from '../../Hooks/useAuth';


function Home() {
    const {user}=useAuth()
    console.log(user)
    return (
        <div>
            <Navbar/>
            {user.gmail?`welcome ${user.name}`:<><h2>Homepage</h2></>}
        </div>
    );
}

export default Home;