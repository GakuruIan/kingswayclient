import React from 'react'

import { Link } from 'react-router-dom'

//icons
import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png'
import WhatsApp from '../../assets/whatsapp2.png'
import Phone from '../../assets/phone.png'

const Footer = () => {

  return (
    <div className='bg-[#E0E0DB] h-full px-2 md:px-4 py-4'>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-3">

          <div className="">
             <h6 className="text-base md:text-xl mb-2">About</h6>
             <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dicta officiis ab cumque ipsam vel sequi iure quod fugit esse, illo recusandae saepe quia obcaecati?</p>
          </div>

          <div className="">
             <h6 className="text-base md:text-xl mb-2">Contacts</h6>
              <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-2">
                      <div className="flex gap-2 items-center">
                        <img src={Instagram} className='h-5 w-5 object-fit'/>
                        <h6 className="text-sm md:text-base">Kingsway</h6>
                      </div>

                      <div className="flex gap-2 items-center">
                        <img src={Facebook} className='h-5 w-5 object-fit'/>
                        <h6 className="text-sm md:text-base">Kingsway</h6>
                      </div>
                     
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="flex gap-2 items-center">
                        <img src={WhatsApp} className='h-5 w-5 object-fit'/>
                        <h6 className="text-sm md:text-base">Kingsway</h6>
                      </div>

                      <div className="flex gap-2 items-center">
                        <img src={Phone} className='h-5 w-5 object-fit'/>
                        <h6 className="text-sm md:text-base">Kingsway</h6>
                      </div>
                     
                  </div>

              </div> 
          </div>

          <div className="">
             <h6 className="text-base md:text-xl mb-2">Links</h6>
              <div className="flex flex-col gap-2">

                     <div className="grid grid-cols-2 gap-2">
                         <Link to="/" className='hover:text-gray-400'>Home</Link>
                         <Link to="/buy" className='hover:text-gray-400'>Buy</Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                         <Link to="/sell" className='hover:text-gray-400'>Sell</Link>
                         <Link to="/agents" className='hover:text-gray-400'>Agents</Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                         <Link to="/listings" className='hover:text-gray-400'>Listings</Link>
                         <Link to="/contact-us" className='hover:text-gray-400'>Contact us</Link>   
                      </div>

              </div> 
          </div>


        </div>

        <div className="h-full w-full flex items-center justify-center gap-2 py-4">
            <h6 className="text-center text-base">Build and maintained by Gakuru Codes</h6>
        </div>
    </div>
  )
}

export default Footer