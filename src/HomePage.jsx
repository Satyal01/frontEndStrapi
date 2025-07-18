import React from 'react'
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CrouselSec from './CrouselSec';
import Cards from './components/Cards';
import CaseStudies from './components/CaseStudies';
import LetsGet from './components/LetsGet';
import Footer from "./components/Footer";
import Slider from './components/Slider';





const HomePage = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' font-myfont  flex justify-center'>
      <div className='w-full  lg:w-7/8 relative'>
        <OpstionList isOpen={isOpen} data={data.NavBar} />
        <Navbar data={data.NavBar} setOpen={setIsOpen} />
        <Hero data={data.HeroSection} />
        <div className='flex items-center gap-4'>
          <hr className="flex-[1] border-t border-[#f6f3ff]" />
          <span className="text-sm font-medium text-gray-800 whitespace-nowrap">⭐⭐⭐⭐⭐ 90+ Brands & Counting</span>
          <hr className="flex-[5] border-t border-[#f6f3ff]" />
        </div>
        <Slider data={data} />
        <hr className='text-[#f6f3ff] border' />
        <CrouselSec data={data.crousel} />
        <Cards data={data.cards[0]} />
        <CaseStudies data={data.cases} />
        <LetsGet data={data.startedSection} />
        <Footer data={data.Footer[0]} />
      </div>
    </div>
  )
}


function OpstionList({isOpen, data}) {
  return (
    <div className={`absolute ${isOpen ? "translate-y-14" : "-top-28"} trnasition-all ease-out duration-400  w-full  z-0 bg-white`}>
      
      {
        data.navItem.map((item)=>{
          return (
            <div key={item.id} className="  py-3 pl-5 text-lg border-b-1 text-primary-color font-myfont border-second-color">
              <a href={item.href}>{item.label}</a>
            </div>
          )
        })
      }
    </div>
  )
}

export default HomePage