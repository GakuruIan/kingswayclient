import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

import BaseUrl from '../../Config/axiosConfig'


const Row = () => {
 
    const [Properties,setProperties] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
       async function FetchData(){
        setLoading(true)
         await BaseUrl.get('/lastest')
         .then(response=>{
            if(response.status === 200){
                setLoading(false)
                setProperties(response.data)
            }
         })
         .catch(err=>{
            setLoading(false)
            console.log(err)
         })
       }
       FetchData()
    },[])

  return (
   <>
    <div className="px-2 md:px-6 min-h-[55vh]">
           <div className="flex justify-between items-center my-5">
                <div className="">
                    <h6 className="text-4xl">Latest</h6>
                    <div className="h-1 w-1/2 bg-[#3F3733]"></div>
                </div>
                <Link to='/listings' className="flex items-center gap-2 text-base hover:text-white px-4 py-2 border border-[#3F3733] hover:bg-[#3F3733] ">
                    View more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {
                Properties.map((property)=>{
                    return  <div key={property._id} className="bg-white">

                    <img className="object-cover  h-44 w-full" src={property.photos[0]?.url} alt="" />

                    <div className="border px-1 pt-2 pb-4">
                        <div className="flex justify-between">
                            <Link to={`/dashboard/update/${property._id}`} className="mb-1 text-base tracking-tight text-gray-900 hover:underline">{property.name}</Link>
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
    </div>
   </>
  )
}

export default Row