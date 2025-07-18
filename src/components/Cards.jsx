import React from 'react'
import Button from "./Button"

const Cards = ({data}) => {
  return (
    <div className=' mt-20 flex flex-col gap-5 lg:gap-10 lg:items-center'>
      <div className=' pl-4 lg:pl-0 text-3xl lg:text-4xl/10 lg:w-[58%] lg:text-center font-bold text-[#060237]'>
        {data.heading}
      </div>
      {/* cards */}
      <div className=' flex flex-col lg:flex-row  justify-between items-center lg:justify-around  gap-5 lg:gap-20 w-full' >
        {
          data.cards.map((card)=>{
            return (
              <div key={card.id} className=' bg-cards-bgcolor ml-2 sm:p-2 md:p-0 w-[18rem] lg:w-1/2 flex flex-col gap-4  border rounded-2xl'>
                <div className='w-25 lg:w-50  pl-4 py-3 lg:py-5'>
                  <img src={card.cardImageLink[0].imageLink} alt="card.cardImageLink.id" />
                </div>
                <div className='text-2xl pl-4 lg:text-4xl text-[#060237] font-bold '>
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