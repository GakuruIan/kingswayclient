import React,{useRef} from 'react'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import interior2 from '../../assets/interior2.jpg'
import spacious from '../../assets/spacious.jpg'
import amenities from '../../assets/amenities.jpg'
import compound from '../../assets/compound.jpg'

const Featured = () => {

    const slider = useRef(null)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <div className='bg-[#E0E0DB] pb-6 px-1 md:px-6'>
        <div className="flex pt-4 items-center justify-between">
            <span onClick={()=> slider.current.slickPrev()} className="flex justify-center items-center h-10 w-10 border border-[#3F3733] rounded-full group hover:bg-[#3F3733] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:text-[#fff]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </span>

            <h1 className="text-2xl md:text-4xl mb-4 font-bold">Property Features</h1>

            <span onClick={()=> slider.current.slickNext()} className="flex justify-center items-center h-10 w-10 border border-[#3F3733] rounded-full group hover:bg-[#3F3733] cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 group-hover:text-[#fff]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </span>
        </div>
       <div className="">
        
        <Slider ref={slider} {...settings} className="mb-8 pb-6 px-0 ">
             {/* Slide */}
          <div className="w-full">
                <div className="grid grid-cols-3 md:grid-cols-5 place-items-center gap-4 py-2">
                    <h6 className="text-9xl md:text-[10rem] text-[#393330] col-span-1 md:col-span-1">01</h6>
                    <h6 className="text-4xl  md:text-7xl mb-6 col-span-2 md:col-span-4">Stunning <span className='bg-[#393330] text-white px-0  md:px-2 md:py-1'>Interior Design</span></h6>
                </div>
                <div className="flex">
                    <img src={interior2} alt="interior design" className='h-full md:h-[350px] w-full object-cover'/>
                </div>
            </div>

             {/* Slide */}
            <div className="">
                <div className="grid grid-cols-3 md:grid-cols-5 place-items-center gap-4 py-2">
                    <h6 className="text-9xl md:text-[10rem] text-[#393330] col-span-1 md:col-span-1">02</h6>
                    <h6 className="text-4xl  md:text-7xl mb-6 col-span-2 md:col-span-4"> <span className='bg-[#393330] text-white px-0  md:px-2 md:py-1'>Spacious</span> rooms</h6>
                </div>
                <div className="flex">
                    <img src={spacious} alt="interior design" className='h-full md:h-[350px] w-full object-cover'/>
                </div>
            </div>

             {/* Slide */}
            <div className="">
                <div className="grid grid-cols-3 md:grid-cols-5 place-items-center gap-4 py-2">
                    <h6 className="text-9xl md:text-[10rem] text-[#393330] col-span-1 md:col-span-1">03</h6>
                    <h6 className="text-4xl  md:text-7xl mb-6 col-span-2 md:col-span-4">Available <span className='bg-[#393330] text-white px-0  md:px-2 md:py-1'>Amenities</span></h6>
                </div>
                <div className="flex">
                    <img src={amenities} alt="interior design" className='h-full md:h-[350px] w-full object-cover'/>
                </div>
            </div>

                {/* Slide */}
            <div className="">
                <div className="grid grid-cols-3 md:grid-cols-5 place-items-center gap-4 py-2">
                    <h6 className="text-9xl md:text-[10rem] text-[#393330] col-span-1 md:col-span-1">04</h6>
                    <h6 className="text-4xl  md:text-7xl mb-6 col-span-2 md:col-span-4">Amazing  <span className='bg-[#393330] text-white px-0  md:px-2 md:py-1'>Neighborhood</span></h6>
                </div>
                <div className="flex">
                    <img src={compound} alt="interior design" className='h-full md:h-[350px] w-full object-cover'/>
                </div>
            </div>
        </Slider>


            
            
           
            
       </div>
    </div>
  )
}


export default Featured


