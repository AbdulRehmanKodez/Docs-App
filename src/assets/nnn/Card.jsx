import React from 'react'
import { FaRegFile } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion"

const Card = ({data, referance}) => {
  return (
    <>
         <motion.div drag dragConstraints={referance} className= 'relative card h-[220px] w-[180px] bg-zinc-700 rounded-4xl text-white overflow-hidden ml-3'>
                <FaRegFile className='pt-4 pl-3 text-3xl' />
                <p className='disc p-3.5 leading-3.5 tracking-tight'>
                   {data.disc}
                </p>
                <div className='absolute bottom-10  h-[40px] flex items-center justify-between px-3 w-full'> 
                    <h3 className='filesize'>{data.size}mb</h3>
                     <FaArrowDown />

                     </div>
               <div className='absolute bottom-0 h-[40px] bg-amber-400 w-full flex justify-center items-center'>
                   <h3 className='head'>{data.head}</h3>
               </div>
         </motion.div>
    </>
  )
}

export default Card