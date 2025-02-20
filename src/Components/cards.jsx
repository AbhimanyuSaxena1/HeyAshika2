import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
function cards() {
  const [val , setVal] = useState(false)
  return (
    <div className='p-4 w-full relative h-screen bg-zinc-200 flex justify-center items-center'>
      <img src={img1} className='blur-md absolute h-full w-full object-cover' alt="" />
      <h1 className={`${val == false ? "text-[#f991cc]" : "text-[#ffdafc]"}  z-20 text-7xl   stroke-black font-["Salita"] absolute top-[13%] lg:top-[20%] lg:text-8xl lg:left-[10%]`}>Hey</h1>
      <h1 className={`${val == false ? "text-[#ffdafc]" : "text-[#f991cc]"} z-20 text-8xl  rounded-full  font-["Salita"]  absolute top-[20%] lg:top-[30%] lg:text-9xl lg:left-[10%]`}>Ashika</h1>
      <div className={`rounded-xl w-100 h-100  ${val == false ? "border-[#f991cc]": "border-[#ffdafc] "} border-6 border-dashed  relative overflow-hidden flex `}>
        <img src={img1} className={`  object-cover transition-transform duation-1000  ${val == false?"-translate-x[0%]" : "-translate-x-[100%]" } `}  alt="" />
        <img src={img2} className={`  object-cover transition-transform duation-1000  ${val == false?"-translate-x[0%]" : "-translate-x-[100%]" }`} alt="" />
        <span onClick={()=>setVal(()=>!val)} className={`${val == false ? "scale-100": " scale-150"} w-10 h-10 rounded-full -translate-x-[50%] flex items-center justify-center text-xl absolute bottom-10 left-50 bg-[#f991cc] ${val == false ? "text-[#ffdafc]" : "text-[#f991cc]"} ${val == true ? "bg-[#ffdafc]" : "bg-[#f991cc]"}`}>
        <FaHeart/>
        </span>
      </div>
    </div>
  )
}

export default cards