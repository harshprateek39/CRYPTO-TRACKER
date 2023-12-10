import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
const Dropdown = ({ options}) => {
    const [open, setOpen]=useState(false);
    const [value,setvalue]=useState(Object.entries(options)[0][0].toUpperCase().slice(0,3));
  return (
    <div className=' flex flex-col relative   '>
    <button onClick={()=>{setOpen(!open)}} className='  flex justify-center  items-center px-4 py-1.5 rounded-lg  font-bold dark:text-white dark:bg-[#2e3241] '>
    {value}
    <IoMdArrowDropdown />
    </button>
    {open&&<div className=' justify-start  absolute top-9 w-32 rounded font-semibold  left-0 right-0 bg-white/80  flex flex-col'> 
   { 
   Object.entries(options).map(([key,value]) =>{ 
    return (<button onClick={()=>{setvalue(key.length>3?key.toUpperCase().slice(0,key.length-3):key.toUpperCase()); setOpen(!open)}} className=' flex px-5 hover:bg-slate-200 rounded py-1.5 '>{key.length>3?key.toUpperCase().slice(0,key.length-3):key.toUpperCase()}</button>)
   })
   }
       
    </div>}</div>
  )
}

export default Dropdown