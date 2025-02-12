import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LadyLaw from '../assets/LadyLaw.jpeg'
import LadyLaw1 from '../assets/LawLady1.png'
import LadyLaw2 from '../assets/LawLady2.png'
import LadyLaw3 from '../assets/LawLady3.png'
import Sketch from '../assets/Site-sketch.png'
import Code from '../assets/CodeShot.png'

function Leaf() {
    const stats = [
        {
            data: "35K",
            title: "Customers"
        },
        {
            data: "10K+",
            title: "Downloads"
        },
        {
            data: "40+",
            title: "Countries"
        },
        {
            data: "30M+",
            title: "Total revenue"
        },
    ]
  return (

    <main>
    <title> Leaf Page | Austin web designer specializing in Figma, Adobe XD, and custom coding. Crafting pixel-perfect, responsive websites.</title>
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


<div class="overflow-visible">
    <Nav/>
  <div class="">



<section class="block">
  <div class="bg-[#2C3084] text-white">
    <div class="py-16 md:py-24 lg:py-32 px-5 md:px-10">
      <div class="max-w-[800px] mb-6 md:mb-10 lg:mb-12 mx-auto w-full max-w-7xl">
        <h1 class="font-bold text-4xl md:text-6xl">The Shepherd Law Group</h1>
        <p className='text-center py-5'>Custom Coded Law Group Interactive Website (HTML/CSS/JavaScript)</p>


      </div>

    </div>
  </div>
  <div class="">
    <div class="py-12 md:py-16 lg:py-20 px-5 md:px-10">
      <div class="relative grid w-full items-start justify-start max-[991px]:flex-col max-[991px]:flex grid-cols-[480px] lg:grid-cols-[0.5fr_0.75fr_480px] gap-4 mx-auto max-w-7xl">
        <a href="#" class="inline-block max-w-full text-black">
        <img src={LadyLaw} alt="Features Image" class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover" />
        </a>
        <div class="w-full max-w-xs max-[991px]:max-w-[560px]">
          <h3 class="font-bold text-2xl md:text-3xl">Where I started</h3>
          <div class="mb-6 mt-6 w-16 [border-top:1px_solid_rgb(0,_0,_0)]">
          </div>
          <p class="text-[#636262] text-sm sm:text-lg">This project commenced when Shepherd Law Group reached out to me to create a bespoke website. Following a two-hour design consultation, we collaboratively established the site's overarching design, aesthetics, and code.

</p>
        </div>
        <img src={Sketch}alt="" class="absolute right-0 bottom-0 inline-block object-cover max-[991px]:relative max-[991px]:mt-12 max-[991px]:max-w-[480px] h-auto lg:h-[480px] w-full lg:w-[480px]"/>
      </div>
    </div>
  </div>
</section>



    <div class="">
      <div class="px-5 md:px-10">
        <div class="mx-auto w-full max-w-7xl">
          <div class="py-16 md:py-24 lg:py-32">
            <div class="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
              <div class="flex flex-col items-center justify-center rounded-xl bg-[#f7f6f2] p-6 max-[991px]:[grid-area:2/1/3/2]">
                <img src={LadyLaw1} alt="Features Image" class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover" />
              </div>
              <div class="max-[991px]:max-w-[720px]">
                <h2 class="mb-4 mt-6 pb-4 text-3xl font-extrabold md:text-5xl">Homepage</h2>
                <div class="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
                  <p class="text-xl text-[#636262]">The client was undergoing a rebranding effort and sought a website that would convey a sense of trust and confidence to their customers, characterized by a clean and concise design.</p>
                  <ul class="list-disc pl-10 mt-5 mb-6 max-w-[528px] md:mb-10 lg:mb-22  text-[#636262] ">
                    <li>Include a one-sentence tagline - Start the page with a tagline that summarizes the site.</li>
                    <li>Homepage offers users clear starting points for the main 1–4 tasks to undertake when visiting site.</li>
                    <li>Meaningful graphics - Used images that are powerful communicators </li>
                </ul>


                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <section class="block">
  <div class="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
    <div class="mx-auto flex-col flex max-w-3xl items-center text-center mb-8 md:mb-12 lg:mb-16">
      <div class="text-center">
        <h2 class="font-bold text-3xl md:text-5xl">Smooth Process. Transformative Outcomes.</h2>
      </div>
    </div>
    <div class="relative flex-col flex items-center justify-center bg-contain bg-center bg-no-repeat pt-10 " styles="background-image: url('https://assets.website-files.com/6458c625291a94a195e6cf3a/648825fca218588cb636c341_Group%2048114.png');">
      <div class="relative flex w-full justify-around gap-4">
        <a class="relative flex-1 flex flex-col max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#2C3084] text-white p-6 text-left align-top max-[479px]:block rounded-md" href="#w-tabs-2-data-w-pane-0">
          <h5 class="text-xl font-bold">1. Map Out Your Customer's Journeys</h5>
          <div class="text-sm sm:text-sm">knowing how your customers interact with your website across various stages of the sales funnel is critical to creating better overall experiences that can increase engagement, brand loyalty and revenue. </div>
        </a>
        <a class="relative flex-col flex-1 flex max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#2C3084] text-white  p-6 text-left align-top max-[479px]:block rounded-md" tabindex="-1" href="#w-tabs-2-data-w-pane-1">
          <h5 class="text-xl font-bold">2. UX Very Accessible/UX Testing</h5>
          <div class="text-sm sm:text-sm">Optimize the site speed, add an attractive call to action, use white space, etc. Our ultimate goal is to retain customers on our site and for that, we need to make the whole process functional.</div>
        </a>
        <a class="relative flex-col flex-1 flex max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#2C3084] text-white p-6 text-left align-top max-[479px]:block rounded-md" tabindex="-1" href="#w-tabs-2-data-w-pane-2">
          <h5 class="text-xl font-bold">3. Minimize The Number Of Clicks</h5>
          <div class="text-sm sm:text-sm">Count the number of clicks it takes the user to get things done on your website and minimize it. Check your website on many devices—including PCs, phones, tablets and all types of browsers and operating systems. Ask your family (including your spouse, children, parents, etc.) to use your site and give you direct feedback.</div>
        </a>
      </div>
      <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <ul className="flex flex-col items-center justify-center gap-x-12 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
                    {
                        stats.map((item, idx) => (
                            <li key={idx} className="text-center">
                                <h4 className="text-4xl text-gray-800 font-semibold">{item.data}</h4>
                                <p className="mt-3 text-gray-600 font-medium">{item.title}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    </div>
  </div>
</section>
    <div class="bg-[#f7f6f2]">
      <div class="px-5 md:px-10">
        <div class="mx-auto w-full max-w-7xl">
          <div class="py-16 md:py-24 lg:py-32">
            <div class="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
              <div class="max-[991px]:max-w-[720px]">
                <h3 class="mb-4 mt-6 text-2xl font-bold md:text-3xl">About Us Page</h3>
                <div class="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
                  <p class="text-xl text-[#636262]">This client wanted to display their core value of 'trust</p>
                  <ul class="list-disc pl-10 mt-5 mb-6 max-w-[528px] md:mb-10 lg:mb-22  text-[#636262] ">
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                </ul>
                </div>

              </div>
              <div class="">
                <img src={LadyLaw2} alt="Features Image" class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="block bg-[#2C3084]">
      <div class="px-5 md:px-10">
        <div class="mx-auto w-full max-w-7xl">
          <div class="py-16 md:py-24 lg:py-32">
            <div class="mx-auto max-w-3xl text-center">
              <h2 class="mb-8 mt-6 pb-16 text-3xl font-extrabold md:mb-12 md:text-5xl lg:mb-4 text-white">What Users Said About the Site</h2>
            </div>
            <div class="mb-5 grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:mb-6 md:grid-cols-3 md:gap-4 lg:mb-8 lg:gap-6">
              <div class="grid grid-cols-1 gap-6 rounded-2xl border border-[#cdcdcd] bg-white px-6 pb-6 pt-10 max-[767px]:p-8">
                <div class="text-[#636262]">I've been using this payment system for a few months now and I have to say it's been great. The interface is simple and easy to navigate, and transactions are fast and secure. I feel confident using this system to handle all of my financial transactions.</div>
                <div class="mt-8 w-full border-[0.5px] border-solid border-[#eceae2]"></div>
                <div class="flex flex-row items-start">
                  <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a281_Ellipse%2010%402x-1.png" alt="Testimonial image" class="mr-4 inline-block h-16 w-16 max-w-full object-contain" />
                  <div class="flex flex-col items-start">
                    <h6 class="text-sm font-bold md:text-base">Laila Bahar</h6>
                    <p class="text-sm text-[#636262]">Designer</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-6 rounded-2xl border border-[#cdcdcd] bg-white px-6 pb-6 pt-10 max-[767px]:p-8">
                <div class="text-[#636262]">I've been using this payment system for a few months now and I have to say it's been great. The interface is simple and easy to navigate, and transactions are fast and secure. I feel confident using this system to handle all of my financial transactions.</div>
                <div class="mt-8 w-full border-[0.5px] border-solid border-[#eceae2]"></div>
                <div class="flex flex-row items-start">
                  <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a27f_Ellipse%2010%402x.png" alt="Testimonial image" class="mr-4 inline-block h-16 w-16 max-w-full object-contain" />
                  <div class="flex flex-col items-start">
                    <h6 class="text-sm font-bold md:text-base">Laila Bahar</h6>
                    <p class="text-sm text-[#636262]">Designer</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 gap-6 rounded-2xl border border-[#cdcdcd] bg-white px-6 pb-6 pt-10 max-[767px]:p-8">
                <div class="text-[#636262]">I've been using this payment system for a few months now and I have to say it's been great. The interface is simple and easy to navigate, and transactions are fast and secure. I feel confident using this system to handle all of my financial transactions.</div>
                <div class="mt-8 w-full border-[0.5px] border-solid border-[#eceae2]"></div>
                <div class="flex flex-row items-start">
                  <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a27d_Group%2048096%402x.png" alt="Testimonial image" class="mr-4 inline-block h-16 w-16 max-w-full object-contain" />
                  <div class="flex flex-col items-start">
                    <h6 class="text-sm font-bold md:text-base">Laila Bahar</h6>
                    <p class="text-sm text-[#636262]">Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <a href="#" class="mx-auto font-bold text-white">Check all reviews</a>
            </div>
          </div>
        </div>
      </div>
    </section>




    <div class="relative">
      <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg" alt="" class="absolute inset-[0%] -z-[1] inline-block h-full w-full max-w-full object-cover" />
      <div class="px-5 md:px-10">
        <div class="mx-auto w-full max-w-7xl">
          <div class="py-16 md:py-24 lg:py-32">
            <div class="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
              <div class="max-[991px]:max-w-[720px]">
                <h2 class="mb-4 mt-6 pb-4 text-4xl font-bold text-white md:text-6xl">Never miss any payment</h2>
                <div class="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                <ul class="list-disc pl-10 mt-5 mb-6 max-w-[528px] md:mb-10 lg:mb-22  text-white ">
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                </ul>
                </div>
              </div>
              <div class="">
                <img src={LadyLaw3} alt="CTA Card Image" class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="px-5 md:px-10">
        <div class="mx-auto w-full max-w-7xl">
          <div class="py-16 md:py-24 lg:py-32">
            <div class="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
              <div class="max-[991px]:max-w-[720px]">
                <h2 class="mb-4 mt-6 pb-4 text-3xl font-extrabold md:text-5xl">HTML, CSS, <span class="bg-contain bg-[50%_100%] bg-no-repeat" styles="background-image: url('https://assets.website-files.com/646f65e37fe0275cfb808405/6475d891098dee07b3371c01_634378b098f0f6cc605dc2bb_Vector%204.svg');">JavaScript</span>  &amp; PostgreSQL database</h2>
                <div class="mb-6 max-w-[480px] md:mb-10 lg:mb-6">
                  <p class="text-[#636262]">I created the first wireframes using Figma and coded it using HTML/CSS/JavaScript connected with PostgreSQL database. At the top of the header has all the client's contact information. It's compact and includes a call to action.</p>
                </div>

              </div>
              <div class="">
                <img src={Code} alt="" class="mx-auto inline-block h-full w-full max-w-[640px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <Footer/>
  </div>
</div>
</main>
  )
}

export default Leaf