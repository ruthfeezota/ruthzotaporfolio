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
import Calendly from '../components/Calendly';
import ContactPage from './ContactPage';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import TopBanner from '../components/TopBanner';
import Navbar from '../components/Navbar';


function Home() {
  return (
    <div className='overscroll-none bg-[#E0DFDD]'>
        <title> Home Page | Austin website design & development services. Specializing in WordPress, Shopify, Wix, and custom coding. Get a free quote today!</title>
            <meta
                name="description"
                content="Austin web designer specializing in Figma, Adobe XD, and custom coding. Crafting pixel-perfect, responsive websites."
            />
            <meta
                name="keywords"
                content="Austin website design, Austin web design company, Austin website development, Austin web developer, Website design Austin TX, Web design services Austin, Website development Austin, Austin website design agency
Small business website design Austin, Ecommerce website design Austin, WordPress website design Austin, Shopify website design Austin, Wix website design Austin, Custom website design Austin, WordPress developer Austin
Shopify expert Austin, Wix designer Austin, Figma web design Austin, Adobe XD design Austin, Illustrator web design Austin
Website wireframing Austin, Responsive web design Austin, Mobile-friendly, website design Austin, Website redesign Austin, Website maintenance Austin, SEO friendly website design Austin , Website accessibility Austin, Website designer near me Austin, Web design companies in Austin, Best, website designers Austin, Top web developers Austin, Austin web design services, North Austin website design, Ecommerce Shopify website design Austin, WordPress website development for small business Austin, Figma and Adobe XD website design Austin, Custom coded website design Austin TX"
            />
 
       <TopBanner/>
        <Nav/>
        <Hero/>
        <Brands/>
        <ActionBanner/>
        <TestimonialNewFront/>
        <Stats/>
        <Projects/>
        <Services/>
        <NewContact/>
        <Testimonial/>
         <TopBanner/>
        <Footer/>
    </div>

  )
}

export default Home