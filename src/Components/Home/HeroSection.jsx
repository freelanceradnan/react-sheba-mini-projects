import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex content-normal item-center hero-bg -bg-no-repeat bg-center bg-cover h-[450px] w-full">
            <div class="w-full flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-white text-center text-6xl font-bold">Your Personal Assistent</h1>
                    <h2 className="text-white text-center text-2xl font-bold">One Stop Solution for all of your Sevices</h2>
                </div>
                <div className="my-2 mx-auto px-2 md:w-2/3 lg:w-1/2 xl:w-1/3 w-full">
                    <input type="search" placeholder='Search Now...' className='p-3 rounded w-full focus:outline-none border-sky-600 border hover:bg-sky-800'/>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;