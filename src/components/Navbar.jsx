import React from 'react'
import { useState } from 'react'
import Button from './Button.jsx'





const Navbar = ({ data,setOpen }) => {


    // console.log("data", data);
    return (
        <div className='relative top-0 bg-white flex items-center justify-around  lg:justify-center   w-full '>


            <div className=' h-auto py-2 px-3 lg:py-5 w-full  flex justify-between items-center  '>
                <div className='flex flex-col  justify-end px-auto  lg:hidden' onClick={()=> setOpen((prev)=>!prev)} >
                    <div className='top-line border-t-2 bg-primary-color w-5 mt-1'></div>
                    <div className='bottom-line border-t-2 bg-primary-color w-5 mt-1 '></div>
                    <div className='middle-line border-t-2 bg-primary-color w-5 mt-1'></div>
                </div>
                <div className='text-xl lg:text-4xl font-extrabold text-[#060237] bgd-500'>
                    <a href={data.navLogo.href}>{data.navLogo.label}</a>
                </div>
                <div className='hidden font-myfont  py-3 b-200 px-8 lg:flex items-center justify-around gap-14 border border-[#aaa6d7] rounded-full '>
                    {
                        data.navItem.map((item) => {
                            return (
                                <div key={item.id} className=' font-bold text-medium  text-[#060237]'>
                                    <a href={item.href}>{item.label}</a>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=' flex items-center '>
                    <div className='hidden lg:block'>
                        <Button data={data.navButton} />
                    </div>
                    <div className='  lg:hidden  w-9 opacity-85 invert '>
                        <img className='' src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6719f2416ce43feaf79bd302_Arrow%20Icon%20Container.png" alt="#" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar



