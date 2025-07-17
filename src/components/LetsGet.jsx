import React from 'react'

import Button from './Button'


const LetsGet = ({data}) => {
  return (
    <div className='mt-30 flex flex-col items-center gap-10 justify-center h-62 bg-[#f6f3ff]'>
      <div className='text-4xl text-[#060237] font-bold'>
        {data.heading}
      </div>
      <div className='flex gap-20 '>
        {data.getStartedButton.map((btn)=>{
            return (
                <Button key={btn.id} width="12" data={btn} />
            )
        })}
      </div>
    </div>
  )
}

export default LetsGet
