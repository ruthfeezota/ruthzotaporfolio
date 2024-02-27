import React from 'react'
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Stats from '../components/Stats';
import TestimonialNewFront from '../components/TestimonialNewFront';
import ActionBanner from '../components/ActionBanner';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import NewContact from '../components/NewContact';






function Home() {
  return (
    <div className='overscroll-none bg-gray-900'>

        <Hero/>
        <Brands/>
        <Stats/>
        <TestimonialNewFront/>
        <ActionBanner/>
        <Projects/>
        <Services/>
        <NewContact/>
        <Testimonial/>

        <Footer/>
    </div>

  )
}

export default Home