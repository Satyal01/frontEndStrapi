import React from 'react'
import Button from './Button'

const Hero = ({ data }) => {
    return (
        <div className='flex flex-col lg:flex-row'>
            {/* left container */}
            <div className='  lg:w-3/5 flex justify-center  items-center lg:px-6'>
                <div className='lg:hidden   flex justify-end'>
                    <img className='' src={data.imgUrl} alt="#" />
                </div>
                <div className='hidden lg:flex flex-col gap-5'>
                    <div className='text-3xl/10 lg:text-5xl/14 font-bold '>
                        {data.HeroHeading}
                    </div>
                    <div className='text-xl font-medium'>
                        {data.Herodescription}

                    </div>
                    <div className='pl-1  mb-10'  >
                        {
                            data.points.map((item, i) => {
                                return (
                                    <div key={i} className='flex gap-4 items-center text-xl font-bold font-[#060237]'>
                                        <div className='mr-4 mb-2'>
                                            <img src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg" alt="#" />
                                        </div>
                                        <div>
                                            {item.content}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex gap-5'>
                        {
                            data.heroSecButtons.map((btn, i) => {
                                return (<Button key={i} data={btn} />)
                            })
                        }
                    </div>
                </div>
            </div>
            {/* right container  */}
            <div className=' lg:w-2/5  flex justify-end'>
                <img className='hidden lg:block' src={data.imgUrl} alt="#" />
                <div className='pl-3 lg:hidden   lg:w-3/5 '>
                    <div className='flex flex-col   gap-5'>
                        <div className='text-3xl/8 font-bold '>
                            {data.HeroHeading}
                        </div>
                        <div className='text-lg/6  font-normal'>
                            {data.Herodescription}

                        </div>
                        <div className='pl-4'  >
                            {
                                data.points.map((item, i) => {
                                    return (
                                        <div key={i} className='flex mb-2 gap-4 items-center   font-nomal font-myfont'>
                                            <div className='w-4 mb-2  mt-2'>
                                                <img src="https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg" alt="#" />
                                            </div>
                                            <div className=' '>
                                                {item.content}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='flex  flex-col gap-2 mb-10'>
                            {
                                data.heroSecButtons.map((btn, i) => {
                                    return (<Button key={i} data={btn} />)
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero;




