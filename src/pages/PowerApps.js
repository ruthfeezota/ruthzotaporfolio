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

    <main>
    <title> PowerApps Page | Austin web designer specializing in Figma, Adobe XD, and custom coding. Crafting pixel-perfect, responsive websites.</title>
  <meta
      name="description"
      content="Top-rated website design company in Austin. Serving small businesses with affordable and effective web solutions."
  />
  <meta
      name="keywords"
      content="Austin website design, Austin web design company, Austin website development, Austin web developer, Website design Austin TX, Web design services Austin, Website development Austin, Austin website design agency
Small business website design Austin, Ecommerce website design Austin, WordPress website design Austin, Shopify website design Austin, Wix website design Austin, Custom website design Austin, WordPress developer Austin
Shopify expert Austin, Wix designer Austin, Figma web design Austin, Adobe XD design Austin, Illustrator web design Austin
Website wireframing Austin, Responsive web design Austin, Mobile-friendly, website design Austin, Website redesign Austin, Website maintenance Austin, SEO friendly website design Austin , Website accessibility Austin, Website designer near me Austin, Web design companies in Austin, Best, website designers Austin, Top web developers Austin, Austin web design services, North Austin website design, Ecommerce Shopify website design Austin, WordPress website development for small business Austin, Figma and Adobe XD website design Austin, Custom coded website design Austin TX"
  /> 

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
    </main>
  )
}

export default PowerApps
