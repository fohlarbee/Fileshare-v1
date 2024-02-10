'use client'
import { File, Shield, Upload } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function SideNav({displaySideNav}) {
    // let menuList: object;
    const [activeIndex, setActiveIndex] = useState(0)
    const menuList = [
        {
            id:1,
            name:'Upload',
            icon:Upload,
            path:'/upload'
        },
        {
            id:2,
            name:'File',
            icon: File,
            path:'/files'
        },
        {
            id:3,
            name:'Upgrade',
            icon:Shield,
            path:'/upgrade'
        },
        
    ]

  return (
    <div className='border-r shadow-sm h-full bg-red-100'>
        <div className='p-5 border-b'>
            <Image src='/logo.svg' width={50} alt='logo' height={50} onClick={() => displaySideNav()} />
        </div>
        <div className='flex flex-col float-left w-full'>
            {menuList.map((item, index) => (
                <button className={`flex gap-2 p-4 px-6  hover:${activeIndex != index ?'bg-red-100 text-gray-500' : null }
                ${activeIndex === index ? 'bg-main' : null}`}
                    onClick={() => setActiveIndex(index)}
                > 
                    < item.icon className={`${activeIndex === index ? 'text-white' : null}`}/>
                    <h2 className={`${activeIndex === index ? 'text-white text-lg' : null}`}>{item.name}</h2>
                </button>
            ))}
        </div>
      
    </div>
  )
}

export default SideNav
