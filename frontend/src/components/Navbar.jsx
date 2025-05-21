import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import "flowbite-react"
import { MdAddCircleOutline } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import ThemeToggle from './ThemeToggler';
function Navbar() {

  const [Isopen,setIsOpen] = useState(true)

  

  return (
    <div className=''>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 right-0 left-0 z-30">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
            <FaCartPlus className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PRODUCT STORE</span>
          </NavLink>  
          <button onClick={()=>setIsOpen(!Isopen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className={`${Isopen ? 'hidden':'block'} transition-all duration-500 ease-in-out overflow-hidden w-full md:block md:w-auto`}>
              <ul className='flex gap-5'>
                <NavLink to={"/createpage"}   className={({ isActive }) => isActive ? "text-yellow-300" : "text-white "}>
                  <div className='bg-gray-800 p-1 rounded-xl hover:bg-gray-700 '>
                    <MdAddCircleOutline  className='text-4xl'/>
                  </div>
                </NavLink>
              <ThemeToggle />
              </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
