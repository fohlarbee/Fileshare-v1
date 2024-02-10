import React from 'react'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function TopHeader({displaySideNav, isVisible}) {
  
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end '>
      <AlignJustify className={`md:hidden ${isVisible ? 'hidden' : null}`} onClick={() =>displaySideNav() }/>  
      <Image src='/logo.svg' width={50} height={50} alt='logo' className='md:hidden'/>
      <UserButton/>
        
      
    </div>
  )
}

export default TopHeader
