import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

import { IoMenu, IoSearchOutline } from 'react-icons/io5';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {

  // bg-red-600 flex flex-row justify-between h-12 pr-3 pl-3 text-center shadow-lg
  return (
    <div className="navbar bg-base-100 flex flex-row justify-between h-12  text-center shadow-lg">
      <div className="drawer w-9">
        <input id="my-drawer" type="checkbox" className="drawer-toggle"/> 
        <div className="drawer-content w-7 h-8">
          
          <label htmlFor="my-drawer" className="btn bg-[#FFFFFF] hover:bg-[#FFFFFF] text-2xl border-none shadow-none drawer-button h-2">
             <svg className="h-7 w-5"><IoMenu /></svg>
          </label>
        </div>
        <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className=" w-72">
          <Sidebar/>
        </div>

      </div>
      </div>
      
      <div className="mt-3 text-xl font-bold">
      <Link href="/">Fintech</Link>
      </div>
      <div className="flex flex-row justify-between gap-10">
        <Link href="/">HomePage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <div className="h-5 w-5">
        <IoSearchOutline />
        </div>
        <input type="text" placeholder="Search" className="input input-bordered h-8"/>
      </div>
      
    </div>
  )
}

export default Navbar
