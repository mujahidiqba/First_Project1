import React from 'react'
import mobile41 from './img/Rectangle (33).svg'
import mobile42 from './img/Rectangle (34).svg'
import { CgMenuLeftAlt } from "react-icons/cg";
import 'flowbite';
import { useState } from "react";
// import { ErrorBoundary } from "react-error-boundary";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className='container-fluid'>
        <div className="container">
          <div className="col-12">



            <nav className=" border-gray-200 dark:bg-gray-900 mt-5">
              <div className="flex flex-wrap items-center justify-between mx-auto  py-3">

                {/* Logo */}
                <a href="#" className="flex items-center space-x-3">
                  <img src={mobile42} className="h-8 lg:h-20 md:h-16" alt="Logo" />
                </a>

                {/* Toggle Button (Mobile) */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex rounded-5 items-center p-2 w-10 h-10 justify-center text-sm text-white bg-[rgba(254,95,0,1)] rounded-lg md:hidden hover:bg-[#ff7a33] focus:outline-none focus:ring-2 focus:ring-[#FE5F00]"
                >
                  <span className="sr-only">Open main menu</span>
                  <CgMenuLeftAlt size={20} color="white" />
                </button>

                {/* Full Menu */}
                <div
                  className={`${isOpen ? "flex" : "hidden"
                    } flex-col w-full md:flex md:flex-row md:items-end md:justify-end md:w-auto transition-all duration-300`}
                  id="navbar-default"
                >
                  <ul className="font-medium flex flex-col md:flex-row md:space-x-8 items-center text-center md:text-left">

                    <li>
                      <span className="block py-2 md:py-0 hover:text-[#FE5F00] text-black cursor-pointer">
                        Destinations
                      </span>
                    </li>
                    <li>
                      <span className="block py-2 md:py-0 hover:text-[#FE5F00] text-black cursor-pointer">
                        How it works
                      </span>
                    </li>
                    <li>
                      <span className="block py-2 md:py-0 hover:text-[#FE5F00] text-black cursor-pointer">
                        Compatible devices
                      </span>
                    </li>

                    {/* Language Selector */}
                   <li className='flex gap-2'>
                      <div className="flex items-center border rounded-5 p-1 h-[40px] col-7 justify-center">
                        <img src={mobile41} alt="flag" className="w-6 h-6 mr-1" />
                        <select
                          id="country-selector"
                          className="bg-transparent text-gray-700 focus:outline-none"
                        >
                          <option value="a">EN</option>
                          <option value="b">PA</option>
                          <option value="c">AU</option>
                        </select>
                      </div>
                    

                   
                      <button className="bg-[#FE5F00]  text-white  flex items-center col-7 justify-center  rounded-5 font-semibold rounded-md hover:bg-[#ff7a33] transition">
                        Sign in
                      </button>
                    </li> 
                    


                    

                  </ul>
                 
                </div>
                
              </div>
            </nav>

          </div>
        </div>




      </section>

    </>
  )
}
