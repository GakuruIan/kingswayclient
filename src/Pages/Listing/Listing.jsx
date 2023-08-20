import React,{useState,useEffect} from 'react'
import BaseUrl from '../../Config/axiosConfig'
import {useParams} from 'react-router-dom'

import Intro from '../../Components/Into/Intro'

const Listing = () => {
   const id = useParams().id

   const [property,setProperty] = useState({})
   const [Image,setImage] = useState("")
   
   useEffect(()=>{
     async function FetchData(){
      await BaseUrl.get(`/property/${id}`)
      .then((response)=>{
         if(response.status === 200){
            setProperty(response.data)
            setImage(property.photos[0].url)
            console.log(response.data)
         }
      })
      .catch((err)=>{
         console.log(err)
      })
     }

     FetchData()
   },[])

  return (
   <>
    <div>
      {
         property ? ( <div>
         
         {
           property.photos && property.photos.length > 0 ? (
               <div>
                  <Intro image={property.photos[0]?.url} text={property.name} />
               </div> ) 
              : 
               (
               <></>
               )
          }
               <div className="mt-4 px-2 md:px-6">
                  <div className="flex justify-between items-center my-5">
                        <div className="">
                           <h6 className="text-4xl">Images</h6>
                           <div className="h-1 w-1/2 bg-[#3F3733]"></div>
                        </div>
                  </div>
               
               {/* property images */}
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 py-3">
                   {
                     property.photos?.map((photo)=>{
                        return <div className="">
                        <img src={photo.url} alt="" srcset="" className='h-full w-full object-cover'/>
                     </div>
                     })
                   }
                 </div>
      
                 <div className="mb-4 py-2 md:py-4">
                  <div className="flex items-center gap-2 items-center my-5">
                        <div className="">
                            <h6 className="text-4xl">Features</h6>
                            <div className="h-1 w-1/2 bg-[#3F3733]"></div>
                        </div>
                  </div>
      
                     <div className="flex items-center gap-2 mb-2">
                        <h6 className="text-base text-gray-700">Price:</h6>
                        <h6 className="text-base text-gray-700">{property.price}</h6>
                     </div>
      
                     <div className="flex items-center gap-2 mb-2">
                        <h6 className="text-base text-gray-700">Location:</h6>
                        <h6 className="text-base text-gray-700">{property.location}</h6>
                     </div>
                     <div className="flex items-center gap-2 mb-2">
                        <h6 className="text-base text-gray-700">Property type:</h6>
                        <h6 className="text-base text-gray-700">{property.type}</h6>
                     </div>
                 </div>
                     </div>
            </div> 
            )
            :
            <></>
      }
     
    </div>
    </>
  )
}

export default Listing