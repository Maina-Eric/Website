import Link from 'next/link'
import React from 'react'
import Footer from '../footer/Footer'

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between gap-7 bg-[#FFFFFF] hover:bg-[#FFFFFF] shadow-md  w-72 h-screen">
        <div className="mt-3 ml-5 text-xl font-bold">
      SideBar
      </div>
      <div className="flex flex-col justify-center gap-11 ml-5 ">
        <div className=" w-36 rounded-full h-9 text-center hover:shadow-md">
            <Link href="/coresystems">Core Systems</Link>
        </div>
        <div className=" w-36 rounded-full h-9 text-center hover:shadow-md">
            <Link href="/payments">Payments</Link>
        </div>
        <div className=" w-36 rounded-full h-9 text-center hover:shadow-md">
            <Link href="/channels">Channels</Link>
        </div>
        
      </div>
      <div className="ml-5">
            <Footer/>
      </div>
    </div>
  )
}

export default Sidebar
