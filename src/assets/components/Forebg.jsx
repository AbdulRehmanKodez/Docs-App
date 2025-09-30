import React, { useRef } from 'react'
import Card from '../nnn/Card'   // ek level bahar jao -> assets -> phir nnn me jao

const Forebg = () => {
  const ref = useRef(null)
  const data = [
    {head:"kaam",
      disc:"nhi karon ga aj kyun k mera dil nhi kar raha",
      size:"0.6"
    },
    {head:"meow",
      disc:"nhi karon ga aj kyun k mera dil nhi kar raha",
      size:"0.6"
    },{head:"kaam",
      disc:"nhi karon ga aj kyun k mera dil nhi kar raha",
      size:"0.6"
    }
  ]
  return (
    <div ref={ref} className='h-screen w-full absolute font-[meow] z-[3] p-3 flex flex-wrap overflow-hidden'>
      {data.map((items,index)=>{
        return <Card data ={items} referance={ref}/>
      })}
    </div>
  )
}

export default Forebg
