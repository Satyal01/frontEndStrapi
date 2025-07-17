import React from 'react'
import CrouselDiv from './components/crouselDiv'

const CrouselSec = ({data}) => {
  return (
    <div className='flex flex-col gap-10 justify-center items-center mt-20'>

      <div className='text-5xl/14 w-[60rem]  text-center font-bold text-[#060237]'>
        {data.heading}
      </div>
      <div className='text-xl text-center font-medium w-[70rem]'>
        {data.desc}
      </div>
      <CrouselDiv data={data} />
   </div>
  )
}

export default CrouselSec
