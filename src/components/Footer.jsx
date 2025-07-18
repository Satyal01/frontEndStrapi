import React from 'react'

const Footer = ({ data }) => {
    return (
        <div className='mt-20 ml-4 lg:ml-4 overflow-hidden  '>
            <div className='relative'></div>
            <div className='flex text-[42px] animate-slideLooplg  whitespace-nowrap  h-20 w-[50rem] text-center font-bold mb-20'>
                {data.FooterHeading}
            </div>
            <hr className='text-[#9289ec] ' />
            <div className='flex my-10  flex-col lg:flex-row'>
                <div className=' lg:w-3/5 flex flex-col gap-5  w-full  '>
                    <div className='text-4xl font-bold text-[#060237]'>{data.logoheading}</div>
                    <div className='text-lg font-medium text-[#666287]'>{data.footerLogoLinkDescription}</div>
                    <div className='flex gap-4 mb-4'>
                        {
                            data.footerSocialMediaLinks.map((lnk) => {
                                return (
                                    <div key={lnk.id}>
                                        <img className='w-6' src={lnk.href} alt={lnk.label} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='lg:w-2/5 lg:text-end  mt-3 '>
                        <div className='text-2xl font-bold mb-1 lg:mb-4'>
                            {data.footerProduct}
                        </div>
                        <div className='flex flex-col gap-1 lg:gap-2'>
                            {
                                data.footerLinks.map((lnk) => {
                                    return (
                                        <div key={lnk.id} className='  text-xl  text-[#060237]'>
                                            <a href={lnk.href}>{lnk.label}</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                
            </div>
            
            <hr className='text-[#9289ec] border border-dotted'   />
            <div className='my-10 w-full text-[#666287]'>
                @Copyright, {data.CopyWrite}
            </div>
        </div>
    )
}

export default Footer

