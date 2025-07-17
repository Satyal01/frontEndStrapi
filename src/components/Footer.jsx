import React from 'react'

const Footer = ({ data }) => {
    return (
        <div className='mt-20  '>
            <div className='text-[42px] text-center font-bold mb-20'>
                {data.FooterHeading}
            </div>
            <hr className='text-[#9289ec] ' />
            <div className='flex my-10  '>
                <div className=' w-3/5 flex flex-col gap-5 '>
                    <div className='text-4xl font-bold text-[#060237]'>{data.logoheading}</div>
                    <div className='text-lg font-medium text-[#666287]'>{data.footerLogoLinkDescription}</div>
                    <div className='flex gap-4'>
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
                <div className=' w-2/5 text-end '>
                        <div className='text-2xl font-bold mb-4'>
                            {data.footerProduct}
                        </div>
                        <div className='flex flex-col gap-2'>
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

