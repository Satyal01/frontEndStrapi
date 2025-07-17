import React from 'react'

const Cards = ({data}) => {
  return (
    <div className=' mt-20 flex flex-col gap-10 items-center'>
      <div className='text-4xl/10 w-[58%] text-center font-bold text-[#060237]'>
        {data.heading}
      </div>
      {/* cards */}
      <div className=' flex justify-around gap-20 w-full' >
        {
          data.cards.map((card, index)=>{
            return (
              <div key={index} className=' bg-[#f6f3ff] p-2 w-1/2 flex flex-col gap-4  border rounded-2xl'>
                <div className='w-50 pl-4 py-5'>
                  <img src={card.cardImageLink[0].imageLink} alt="card.cardImageLink.id" />
                </div>
                <div className='pl-4 text-4xl text-[#060237] font-bold '>
                  {card.cardHeading}
                </div>
                <div className='pl-4'>
                  {
                    card.cardPoints.map((point,index)=>{
                      return (
                        <div key={index} className='flex gap-8 items-center font-thin text-base'>
                          <div>{point.ismarked ? <img src='https://cdn.prod.website-files.com/653b9d5d88756f8574352cb0/6707981d6373cf86d09d4db5_Vector.svg' alt="$"/> : null}</div>
                          <div> {point.content} </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards;


// data.cards[0].cards