import React from 'react'
import Button from './Button.jsx'


const Navbar = ({data}) => {
    // console.log("data", data);
  return (
    <div className='flex justify-center  w-full '>
        <div className=' h-26 w-full   flex justify-between items-center  '>
            <div className='text-4xl font-extrabold text-[#060237]'>
                <a href={data.navLogo.href}>{data.navLogo.label}</a>
            </div>
            <div className='h-14  px-8 flex items-center justify-around gap-14 border border-[#aaa6d7] rounded-full '>
                {
                    data.navItem.map((item)=>{
                        return (
                            <div key={item.id} className=' font-bold text-medium  text-[#060237]'>
                                <a href={item.href}>{item.label}</a>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <Button data={data.navButton} />
            </div>
        </div>

    </div>
  )
}

export default Navbar



