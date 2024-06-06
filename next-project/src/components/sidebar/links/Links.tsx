import Link from 'next/link'
import React from 'react'

const Links = () => {
    
    const links = [
        {
            title: "Self Assesment Review",
            path: "/self",
        },{
            title: "Performance Appraisal Form",
            path: "/self/performanceappraisalform",
        },{
            title: "Appraisal Reports and Analytics",
            path: "/self/appraisalreports",
        },{
            title: "Weekly Wins",
            path: "/self/weeklywins",
        },{
            title: "My Profile",
            path: "/self/myprofile",
        }
    ]

  return (
    <div className="flex flex-col p-4 pl">
      {links.map((link => (
        <Link href={link.path} key={link.title} className='flex flex-col font-semibold'>{link.title}</Link>
      )))}
    </div>
  )
}

export default Links
