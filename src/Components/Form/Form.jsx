import React,{useState} from 'react'

import {  useFormik } from 'formik'
import {BookSchema} from '../../Utils/Yup'
import  BaseUrl from '../../Config/axiosConfig'

import Notify from '../Notification/Notify'
import {toast} from 'react-toastify'

import Loader from '../../Components/Loader/Loader'


const Form = ({type}) => { 

const [loading,setLoading] = useState(false)

const onSubmit = async(values,action)=>{
   setLoading(true)
  if(type === 'buyers'){
    await BaseUrl.post('/book',values)
     .then((response)=>{
       if(response.status === 200){
          setLoading(false)
          toast.success("Your Booking has being recieved")
       }
     })
     .catch((err)=>{
        setLoading(false)
        toast.error("An error occurred. Try Again")
     })
  }
  else
  {
     await BaseUrl.post('/seller/book',values)
     .then((response)=>{
          if(response.status === 200){
            setLoading(false)
            toast.success("Your Request has being recieved")
          }
     })
     .catch((err)=>{
         setLoading(false)
         toast.error("An error occurred. Try Again")
     })
  }
  action.resetForm()
}

const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{
        fullname:'',
        email:"",
        phone:''
    },
    validationSchema:BookSchema,
    onSubmit
})

  return (
    <div className='my-8 px-6'>

      {/* notification */}
      <Notify/>

      <h6 className="text-4xl text-center">Book with us</h6>
      {/* loading */}

      {
        loading ? <Loader/> : 
         
         (
          <div className="flex items-center justify-center w-full">
            <form onSubmit={handleSubmit} className='w-[500px]'>
  
                <div className="mb-8 w-full">
                  <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900">Fullname</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                        </div>
                        <input type="text" name='fullname' onChange={handleChange} onBlur={handleBlur} value={values.fullname} id="fullname" className=" bg-[#dddeed]  text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5" placeholder="John Doe"/>
                    </div>
                        <span className={`mt-1 text-sm text-red-600 ${errors.fullname && touched.fullname ? 'block':'hidden'}`}>{errors.fullname}</span> 
                </div>
  
                <div className="mb-8 w-full">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </div>
                        <input type="email" name='email' onChange={handleChange} onBlur={handleBlur} value={values.email} id="email" className=" bg-[#dddeed]  text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5 " placeholder="E.g john@gmail.com"/>
                    </div>
                        <span className={`mt-1 text-sm text-red-600 ${errors.email && touched.email ? 'block':'hidden'}`}>{errors.email}</span> 
                </div>
  
                <div className="mb-6 w-full">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Your Phone</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                        </div>
                        <input type="text" name='phone' onChange={handleChange} onBlur={handleBlur} value={values.phone} id="phonenumber" className=" bg-[#dddeed]  text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5 " placeholder="E.g 254 780 548 978"/>
                    </div>
                        <span className={`mt-1 text-sm text-red-600 ${errors.phone && touched.phone ? 'block':'hidden'}`}>{errors.phone}</span> 
                </div>
  
                <button type='submit' className="text-xl text-center w-full gap-2 text-base hover:text-white px-4 py-2 border border-[#3F3733] hover:bg-[#3F3733] ">Book</button>
                
            </form>
          </div>
         )
      }

 </div>

  )
}

export default Form