import React from 'react'
import image from '../../assets/image1.jpg'

const About = () => {
  return (
    <div className='bg-[#E0E0DB] relative px-2 md:px-6 pb-8 mb-5'>
        <div className="mt-4 py-4">
            <div className="my-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-0 px-2">
                    <h6 className="text-2xl md:text-5xl">DISCOVER OUR TOP-NOTCH PROGRAMS </h6>
                    <p className="text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ab ea vitae nulla deleniti reprehenderit.</p>
                </div>
            </div>
        </div>
        <div className="flex">
            <img src={image} alt="property" className='object-cover h-full md:h-[450px] w-full'/>
        </div>
    </div>
  )
}

export default About