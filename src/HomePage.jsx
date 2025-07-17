import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CrouselSec from './CrouselSec';
import Cards from './components/Cards';
import CaseStudies from './components/CaseStudies';
import LetsGet from './components/LetsGet';
import Footer from "./components/Footer";
import Slider from './components/Slider';

const HomePage = ({ data }) => {

  return (
    <div className='font-myfont  flex justify-center'>
    <div className='w-5/6'>
      <Navbar data={data.NavBar} />
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

export default HomePage
