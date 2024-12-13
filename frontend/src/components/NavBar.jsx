import React from 'react';
import BVRITimg from '../../assets/bvritlogo.png';

function NavBar() {
    return (
        <nav 
            id="navbar" 
            className="font-nunito border-b max-w-full w-full mx-auto px-2 flex flex-wrap basis-full items-center justify-between sticky top-0 z-10 bg-white"
        >
            {/* Logo */}
            <img 
                src={BVRITimg} 
                className='w-[200px] sm:order-1 flex-none text-2xl ml-6 font-semibold focus:outline-none focus:opacity-80' 
                alt="BVRIT Logo" 
            />

            {/* Mobile menu button */}
            <div className="sm:order-3 flex items-center gap-x-2">
                <button 
                    type="button" 
                    className="sm:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" 
                    id="hs-navbar-alignment-collapse" 
                    aria-expanded="false" 
                    aria-controls="hs-navbar-alignment" 
                    aria-label="Toggle navigation" 
                    data-hs-collapse="#hs-navbar-alignment"
                >
                    <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" x2="21" y1="6" y2="6"/>
                        <line x1="3" x2="21" y1="12" y2="12"/>
                        <line x1="3" x2="21" y1="18" y2="18"/>
                    </svg>
                    <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18"/>
                        <path d="m6 6 12 12"/>
                    </svg>
                    <span className="sr-only">Toggle</span>
                </button>
                <button 
                    type="button" 
                    className="py-2 px-3 mr-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                    Button
                </button>
            </div>

            {/* Navigation menu */}
            <div id="hs-navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2 mr-[450px]">
                <div className="flex flex-col gap-4 mt-5 md:flex-row sm:items-center sm:mt-0 text-md sm:ps-5">
                    {/* Navigation buttons */}
                    <button className="py-2 rounded-lg px-5 text-[rgb(75,75,75)] hover:bg-[rgba(245,245,245,0.6)] hover:text-[#000000] transition duration-300 ease-in-out">
                        <a className="font-medium focus:outline-none" href="#" aria-current="page">Alumini Connect</a>
                    </button>
                    <button className="py-2 rounded-lg px-5 text-[rgb(75,75,75)] hover:bg-[rgba(245,245,245,0.6)] hover:text-[#000000] transition duration-300 ease-in-out">
                        <a className="font-medium focus:outline-none focus:text-gray-600" href="#">Events</a>
                    </button>
                    <button className="py-2 rounded-lg px-5 text-[rgb(75,75,75)] hover:bg-[rgba(245,245,245,0.6)] hover:text-[#000000] transition duration-300 ease-in-out">
                        <a className="font-medium focus:outline-none focus:text-gray-400" href="#">Posts</a>
                    </button>
                    <button className="py-2 rounded-lg px-5 text-[rgb(75,75,75)] hover:bg-[rgba(245,245,245,0.6)] hover:text-[#000000] transition duration-300 ease-in-out">
                        <a className="font-medium focus:outline-none focus:text-gray-400" href="#">Blog</a>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
