import React from 'react'
import Links from './links/Links'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="flex flex-col w-auto">
      <Link href="/" className="text-lg font-bold ">FinPerformance</Link>
      <Links/>
    </div>
  )
}

export default Sidebar
