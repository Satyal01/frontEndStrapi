import React from 'react'
import Button from './Button'

const CaseStudies = ({data}) => {
  return (
    <div className='mt-20 lg:mt-40 flex  flex-col items-center gap-5 lg:gap-18'>
      <div className='text-3xl ml-5 lg:ml-5 lg:text-4xl text-[#060237] font-bold'>
        {data.heading}
      </div>
      <div className='flex flex-col lg:flex-row gap-10 pl-10 lg:pl-20  '>
        {
            data.caseImageLink.map((img,i)=>{
                return (
                    <div key={img.id} className=''>
                        <a href="#">
                        <img className='w-4/5' src={img.imageLink} alt={img.id} />
                        </a>
                    </div>
                )
            })
        }
      </div>
      <div className='w-xs hidden lg:block border text-center rounded-full pt-1 font-semibold h-11 text-xl border-[#a29bf2]'>
        <a href={data.caseButton.href}>{data.caseButton.label}</a>
      </div>
    </div>
  )
}

export default CaseStudies;
