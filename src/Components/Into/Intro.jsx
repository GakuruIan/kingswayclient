import React from 'react'

const Intro = ({image,text}) => {
  return (
    <div className="relative bg-cover h-[60vh] w-full bg-[#303030]">
        <img src={image} className='bg-center bg-no-repeat h-full w-full object-cover mix-blend-overlay'/>
        <div className="absolute  inset-y-1/2  w-full flex flex-col gap-6 justify-center items-center">
        <h1 className=" text-center text-4xl  md:text-7xl text-white  tracking-wider ">{text}</h1>
        
        </div>
        <span className="absolute bottom-[5%] left-[50%] animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
        </svg>
        </span>
  </div>
  )
}

export default Intro