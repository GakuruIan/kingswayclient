import React from 'react'
import Notfound from '../../assets/page-not-found.svg'

const NotFound = () => {
  return (
    <div className='h-screen w-full flex items-center flex-col gap-4 justify-center'>
        <img src={Notfound} className="h-96 w-full object-fit"/>
        <h1 className="text-3xl md:text-3xl text-center">Page not Found</h1>
        <button className="px-4 py-2 text-base w-44 border border-[#3F3733] hover:bg-[#3F3733] hover:text-white">Home</button>
    </div>
  )
}

export default NotFound