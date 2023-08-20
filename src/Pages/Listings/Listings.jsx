import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import BaseUrl from '../../Config/axiosConfig'

import pic from '../../assets/image1.jpg'
import Loader from '../../Components/Loader/Loader'
import Notify from '../../Components/Notification/Notify'
import {toast} from 'react-toastify'

const Listings = () => {

  const [Properties,setProperties] = useState([])
  const [loading,setLoading] = useState(false)
  const [search,setSearch] = useState({property:'',location:''})

  async function FetchData(){
    setLoading(true)
    await BaseUrl.get('/properties')
    .then((response)=>{
        if(response.status === 200){
            setLoading(false)
            setProperties(response.data)
        }
    })
    .catch(err=>{
        setLoading(false)
    })
 }

  useEffect(()=>{
     FetchData()
  },[])

  const handleChange=(e)=>{
      setSearch({
        ...search,
        [e.currentTarget.name]:e.target.value
      })
  }

  const handleFilter = ()=>{
    let filteredListings =[]
     if(search.location !== '' || search.property !== ""){
      filteredListings = Properties.filter((property) => {
        const nameMatch = property.name.toLowerCase().includes(search.property.toLowerCase());
        const locationMatch = property.location.toLowerCase().includes(search.location.toLowerCase());
      
        // Filter based on provided parameters or no parameters
        if (search.property && search.location) {
          return nameMatch && locationMatch;
        } else if (search.property) {
          return nameMatch;
        } else if (search.location) {
          return locationMatch;
        } else {
          return true; // No filters, return all properties
        }
      });
     }

      if(filteredListings.length === 0){
          toast.error("No Property Match found")
          FetchData()
      }
      else{
        setProperties(filteredListings)
      }

  }

  return (
    <div className='relative'>
      <Notify/>
       <div className="relative bg-cover h-[55vh] w-full bg-[#303030]">
          <img src={pic} className='bg-center bg-no-repeat h-full w-full object-cover mix-blend-overlay'/>
          <div className="absolute  inset-y-1/2  w-full flex flex-col gap-6 justify-center items-center">
            <h1 className=" text-center text-4xl  md:text-7xl text-white  tracking-wider ">Our Properties</h1>
          
          </div>
          <span className="absolute bottom-[5%] left-[50%] animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>

          <div className="absolute bottom-[-40px] left-0 right-0 md:right-[30%] md:left-[30%]">
            <div className="px-4 py-2 md:rounded-md shadow-lg bg-[#fff] w-full">
              <h6 className="text-base mb-2">Find Property</h6>
              <div className="flex gap-2 md:gap-4 py-2">

                <div className="">
                   <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-500 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                          </svg>
                        </div>
                        <input onChange={handleChange} name="property" type="text" id="email-address-icon" className=" bg-[#dddeed]  text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5" placeholder="Property"/>
                    </div>
                </div>

                <div className="">
                   <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-500 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                        </div>
                        <input onChange={handleChange} name="location" type="text" id="email-address-icon" className=" bg-[#dddeed]  text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5" placeholder="Location"/>
                    </div>
                </div>

                 <button onClick={handleFilter} className="px-2 py-2 flex rounded justify-center items-center bg-indigo-600 hover:bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                 </button>
              </div>
            </div>
          </div>
       </div> 

      <div className="mt-14 py-8 px-2 md:px-6">
        {
            loading ? <Loader/> :
             
            (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">


        {
                Properties.map((property)=>{
                    return  <div key={property._id} className="bg-white">

                    <img className="object-cover  h-44 w-full" src={property.photos[0]?.url} alt="" />

                    <div className="border px-1 pt-2 pb-4">
                        <div className="flex justify-between">
                            <Link to={`/listing/${property._id}`} className="mb-1 text-base tracking-tight text-gray-900 hover:underline">{property.name}</Link>
                        </div>
                        <div className="flex justify-between mb-2">
                            <h6 className="text-sm text-gray-700">Price:</h6>
                            <h6 className="text-sm text-gray-700">{property.price}</h6>
                        </div>

                        <div className="flex justify-between mb-2">
                            <h6 className="text-sm text-gray-700">Location:</h6>
                            <h6 className="text-sm text-gray-700">{property.location}</h6>
                        </div>
                        <div className="flex justify-between mb-2">
                            <h6 className="text-sm text-gray-700">Property type:</h6>
                            <h6 className="text-sm text-gray-700">{property.type}</h6>
                        </div>
                     </div>
                    
                </div>
                })
            }

        </div>
            )
        }
        
      </div>
    </div>
  )
}

export default Listings