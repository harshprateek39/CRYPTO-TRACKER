import React, { useState } from "react";
import Dropdown from "./Dropdown";
import data from './data.json'
import {easeInOut, motion} from 'framer-motion';
import { FaTelegramPlane } from "react-icons/fa";
const Nav = () => {
   
  const data1={
    "INR":{"INR":"DATA"}
  };
  const [mode ,setMode]=useState(false);
  return (
     
    <div className=" flex md:flex-row flex-col  md:justify-between items-center gap-4">

      <div className="  "><img className=" w-72" src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" />

     
      </div>
      <div className="   flex justify-between gap-3 items-center ">
      <Dropdown options={data1} />
    <Dropdown options={data} />
        <button className='  flex justify-center  py-1.5 items-center px-4   rounded-lg  font-bold dark:text-white dark:dark:bg-[#2e3241] '>
     BUY 
    </button>
     {/* 3rd part */}
      </div>
      <div className="  flex justify-between gap-2  items-center  ">
        <svg height="50" width="50" className=" rounded-full">
        <circle cx="25" cy="25" r="15" stroke="white" style={{strokeDasharray:"60px, 0px" ,strokeDashoffset:"20px"}} className="  bg-slate-500" fill="transparent"   stroke-width="3"  />
       </svg>
       
        <button className=" flex items-center bg-[#3dc6c1] font-semibold text-white  rounded-xl py-2 px-2 gap-2    "><FaTelegramPlane className=" text-xl" />Connect Telegram</button>
        <button onClick={()=>setMode(!mode)} className={mode?" flex w-16 rounded-full p-1  bg-[#2e3241]":" flex w-16 rounded-full p-1 justify-end transition-all duration-100   bg-[#2e3241]"}>
            <motion.div layout transition={{  type:"spring", duration:0.1,  stiffness: 300,
  damping: 30}} className=" rounded-full     h-7 w-7 bg-[#3dc6c1]"></motion.div>
        </button>
      </div>
    </div> 
  );
};

export default Nav;
