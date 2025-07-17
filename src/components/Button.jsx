import React from 'react';


const Button = ({data, width}) => {
  return (
    <div className={`${data.isPrimary ? 'text-white bg-[#060237]' : 'text-[#060237] bg-white' } ${width ? `w-${width}`: "w-fit"}  w-fit flex items-center  gap-2 h-15 text-060237white p-5 font-medium border border-[#]  rounded-full`}>
        <a href={data.href} className=''>{data.label}</a>
        {data.isPrimary && <img className='w-12 ml-3' src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6719f2416ce43feaf79bd302_Arrow%20Icon%20Container.png" alt="#" />}
    </div>
  )
}

export default Button


