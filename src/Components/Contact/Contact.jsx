import React from 'react'

const Contact = () => {
  return (
    <div className='my-8 px-6'>
       <h6 className="text-4xl text-center">Contact us</h6>
        <div className="flex items-center justify-center w-full">
            <form action="" method="post" className='w-[500px]'>

                <div className="mb-8 w-full">
                   <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900">Fullname</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </div>
                        <input type="text" id="email-address-icon" className=" bg-[#dddeed]  text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5" placeholder="John Doe"/>
                    </div>
                </div>
                <div className="mb-8 w-full">
                   <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                         </div>
                         <input type="text" id="email-address-icon" className=" bg-[#dddeed]  text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5 " placeholder="john@gmail.com"/>
                    </div>
                </div>
                <div className="mb-6 w-full">
                   <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                    <div className="relative">
                      <textarea className=" bg-[#dddeed]  text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-2 p-2.5 " placeholder='type your message here'  name="" id="" cols="30" rows="7"></textarea>
                    </div>  
                </div>

                <button className="text-xl text-center w-full gap-2 text-base hover:text-white px-4 py-2 border border-[#3F3733] hover:bg-[#3F3733] ">Submit</button>
            </form>
        </div>
    </div>

  )
}

export default Contact