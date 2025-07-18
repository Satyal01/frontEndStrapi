import React from 'react';

const Svg = () => {
  return <>
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="460" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="white"></circle>
      <mask id="mask0_302_17084" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
        <rect x="12" y="12" width="36" height="36" fill="#FFFF61"></rect>
      </mask>
      <g mask="url(#mask0_302_17084)">
        <path d="M18.2942 29.6442L17.25 28.6L27.0904 18.75H18.1442V17.25H29.6442V28.75H28.1442V19.8038L18.2942 29.6442Z" fill="#060237"></path>
      </g>
    </svg>

  </>
}




const Button = ({ data }) => {
  return (
    <div className={`${data.isPrimary ? 'text-white bg-[#060237]' : 'text-[#060237] bg-white'}  w-auto lg:flex items-center  h-12 lg:h-14  pl-4 py-1 font-medium border border-primary-color  rounded-full`}>
      <a href={data.href} className='bg-red- flex h-10  items-center justify-between  px-2 gap-5'>
        <div>
          <p>{data.label}</p>
        </div>
        { data.isPrimary &&
          <div >
          <div className='lg:hidden  w-10  opacity-85 invert '>
            <img className='' src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6719f2416ce43feaf79bd302_Arrow%20Icon%20Container.png" alt="#" />
          </div>
          <div className='hidden lg:block'>
            <Svg />
          </div>
        </div>
        }
      </a>
    </div>
  )
}

export default Button


