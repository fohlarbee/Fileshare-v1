'use client'
import React, {useState} from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'
// import Uplaod from './(routes)/upload/page';
import Upload from './(routes)/upload/page'

function Layout({children}) {
  const [isVisible, setIsVisible]  = useState(false);


  function displaySideNav(){
      setIsVisible(!isVisible)
  }
  return (
    <div >
        <div className={`h-full md:w-64 flex-col fixed inset-y-0 z-50  md:flex ${isVisible ? null : 'hidden' }`}>
          <SideNav displaySideNav={displaySideNav}/>
        </div>
        <div className='md:ml-64'> 
          <TopHeader displaySideNav={displaySideNav} isVisible={isVisible}/>
          {children}
        </div> 
    </div>
  )
}

export default Layout
