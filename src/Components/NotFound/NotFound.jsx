import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="flex justify-center items-center text-red-500 text-5xl">404 Error</h1>
            <Link to="/"><input type="submit" value={"Reback Homepage"} className="rounded-sm w-50 bg-emerald-600 py-2 text-whit mt-4 text-white"/></Link>
        </div>
    );
};

export default Errorpage;