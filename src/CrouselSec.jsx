import React from 'react'
import CrouselDiv from './components/CrouselDiv.jsx'

const CrouselSec = ({data}) => {
  return (
    <div className=' text-[#060237] pl-4 md:pl-0 flex flex-col gap-4 lg:gap-10 lg:justify-center lg:items-center mt-20'>

      <div className=' text-3xl/9 lg:text-5xl/14 lg:w-[60rem] font-bold '>
        {data.heading}
      </div>
      <div className='text-lg font-medium  lg:text-xl lg:font-medium lg:w-[70rem]'>
        {data.desc}
      </div>
      <CrouselDiv data={data} />
   </div>
  )
}

export default CrouselSec
