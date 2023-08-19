import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";

const Loader = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
        <PuffLoader color="#36d7b7" />
    </div>
  )
}

export default Loader