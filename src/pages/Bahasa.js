import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LongList from '../assets/Bahasa.png'

function Bahasa() {
  return (
        <section>
        <main>
              <title> Bahasa Page | Austin web designer specializing in Figma, Adobe XD, and custom coding. Crafting pixel-perfect, responsive websites.</title>
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

            <Nav/>
            <div className="max-w-screen-1xl mx-auto px-4 py-8 gap-12 md:px-8 bg-[#E0DFDD] questrial-regular">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold mx-auto md:text-4xl uppercase">
                    Bahasa - Realtime Translation Website
                    </h1>

                    <p className="max-w-2xl mx-auto">
                    I created a website version of the Bahasa - Realtime Translation App with the goal of increasing its awareness among a broader audience. The website version improves cross-platform compatibility. Users can access the app's services from desktop computers, laptops, tablets, and smartphones, ensuring convenience and flexibility in their choice of device.
                    </p>

                </div>
                <div className="mt-10 p-14 bg-[#E4A4BD]">
                    <img src={LongList} className="w-full shadow-lg border" alt="" />
                </div>
            </div>
            <Footer/>
            </main>
        </section>

  )
}

export default Bahasa