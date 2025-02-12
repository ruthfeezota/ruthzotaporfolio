import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LongList from '../assets/Cookbook.jpg'

function Cookbook() {
  return (
        <section>

<main>
    <title> Cookbook Page | Austin web designer specializing in Figma, Adobe XD, and custom coding. Crafting pixel-perfect, responsive websites.</title>
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
            <div className="max-w-screen-1xl mx-auto px-4 py-8 gap-12 text-white md:px-8 bg-gray-900">
                <div className="space-y-5 max-w-4xl mx-auto text-center ">
                    <h1 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                    Cookbook
                    </h1>

                    <p className="max-w-2xl mx-auto">
                    Are you a carnivore at heart? Does the sight of sizzling steaks, succulent ribs, and perfectly grilled burgers set your taste buds tingling? If you're passionate about all things meat, you've just stumbled upon your culinary haven – Cookbook, the ultimate blog website that caters exclusively to your carnivorous cravings!
                    <br/>
                    <br/>

🍔 Feast Your Eyes on Meaty Masterpieces 🥩
<br/>

At Cookbook, we understand that meat lovers are a special breed, and we're here to celebrate your love for meat in all its glorious forms. Our virtual meat haven is a visual feast for your eyes, where every click is a journey into the world of carnivorous delight. Our collection of mouthwatering meat photos will have you drooling in no time!

                    </p>

                </div>
                <div className="mt-14 p-24">
                    <img src={LongList} className="w-full shadow-lg rounded-lg border" alt="" />
                </div>
            </div>
            <Footer/>
            </main>
        </section>

  )
}

export default Cookbook