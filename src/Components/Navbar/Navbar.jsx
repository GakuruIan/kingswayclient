import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen,setOpen] = useState(false)
    const [istop,setIstop]=useState(false);
  
    window.addEventListener('scroll',(e)=>{
      if(window.scrollY  > 80){
        setIstop(true)
      }
      else{
        setIstop(false)
      }
    })
  return (
    <div className={`fixed w-full  bg-[#fff] z-40 ${istop ? 'drop-shadow-xl':''}`}>
       <div className="container mx-auto py-4 px-2 md:px-2  flex justify-between items-center">
        <Link to="/" className='text-xl hover:text-gray-400'>Kingsway Reality</Link>
            <div className='relative flex justify-end gap-2 '>
                <div className={`fixed z-40 top-0 bottom-0 h-screen w-full justify-center text-white items-center flex-col gap-9 bg-[#3F3733] md:bg-[#fff] transition duration-150 ease-in-out md:relative md:left-0 md:text-gray-800 flex md:flex-row md:gap-5 md:h-full ${ isOpen ? 'left-0' : 'left-[-100%]'}`}>
                    <Link to="/" className='hover:text-gray-400'>Home</Link>
                    <Link onClick={()=>setOpen(false)} to="/buy" className='hover:text-gray-400'>Buy</Link>
                    <Link onClick={()=>setOpen(false)} to="/sell" className='hover:text-gray-400'>Sell</Link>
                    <Link onClick={()=>setOpen(false)} to="/agents" className='hover:text-gray-400'>Agents</Link>
                    <Link onClick={()=>setOpen(false)} to="/listings" className='hover:text-gray-400'>Listings</Link>
                    <Link onClick={()=>setOpen(false)} to="/contact-us" className='hover:text-gray-400'>Contact us</Link>  
                    <span onClick={()=>setOpen(!isOpen)}  className='md:hidden absolute top-8 right-5 p-3 border rounded-full cursor-pointer'>
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                    <div className="md:hidden">
                        <button className="flex justify-center items-center gap-4 px-4 py-2 w-42 text-white text-base border bg-inherit">
                            Contact Us
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
                <span onClick={()=>setOpen(!isOpen)} className='cursor-pointer md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </span>
            </div>
       </div>
    </div>
  )
}

export default Navbar