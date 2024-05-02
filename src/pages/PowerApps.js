import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HeroPower from '../components/PowerApps/HeroPower'
import AboutUsPower from '../components/PowerApps/AboutUsPower'
import ContactPower from '../components/PowerApps/ContactPower'
import TestimonialNewFront from '../components/TestimonialNewFront'
import TestimonialPower from '../components/PowerApps/TestimonialPower'
import CalltoAction from '../components/PowerApps/CalltoAction'
import Horizontal from '../components/PowerApps/Horizontal'
import Checklist from '../components/PowerApps/Checklist'
import Resume from '../components/PowerApps/Resume'

function PowerApps() {
  return (
    <div>
    <Nav/>
    <HeroPower/>
    <Horizontal/>
    <TestimonialPower/>
    <AboutUsPower/>
    <Checklist/>
    <CalltoAction/>
    <Footer/>


    </div>
  )
}

export default PowerApps
