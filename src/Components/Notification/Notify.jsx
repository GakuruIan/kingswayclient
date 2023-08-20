import React from 'react'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Notify = () => {
  return (
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    theme="colored"
    />
  )
}

export default Notify