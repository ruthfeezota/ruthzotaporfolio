import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LadyLaw from '../assets/LadyLaw.jpeg'
import LadyLaw1 from '../assets/LawLady1.png'
import LadyLaw2 from '../assets/LawLady2.png'
import LadyLaw3 from '../assets/LawLady3.png'
import Sketch from '../assets/Site-sketch.png'
import Code from '../assets/CodeShot.png'

function Kongsberg() {
    const stats = [
        {
            data: "5K",
            title: "Customers Users on Site"
        },
        {
            data: "80+",
            title: "Developer Hours"
        },
        {
            data: "30%",
            title: "SEO Traffic Increase"
        },
        {
            data: "40%",
            title: "Increase in Weekly Calls"
        },
    ]
  return (
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
                    <li>Included a one-sentence tagline - Start the page with a tagline that summarizes the site.</li>
                    <li>Homepage provide users a clear starting points for the main 1–4 tasks to undertake when visiting site.</li>
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
  <div class="py-6 md:py-14 lg:py-12 mx-auto w-full max-w-7xl px-5 md:px-10">
    <div class="mx-auto flex-col flex max-w-3xl items-center text-center mb-8 md:mb-12 lg:mb-16">
      <div class="text-center">
        <h2 class="font-bold text-3xl md:text-5xl">Smooth Process. Transformative Outcomes.</h2>
      </div>
    </div>
    <div class="relative flex-col flex items-center justify-center bg-contain bg-center bg-no-repeat pt-10 " styles="background-image: url('https://assets.website-files.com/6458c625291a94a195e6cf3a/648825fca218588cb636c341_Group%2048114.png');">
      <div class="relative flex w-full justify-around gap-4">
        <a class="relative flex-1 flex flex-col max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#2C3084] text-white p-6 text-left align-top max-[479px]:block rounded-md" href="#w-tabs-2-data-w-pane-0">
          <h5 class="text-xl font-bold">1. Map Out Our Customer's Journeys</h5>
          <div class="text-sm sm:text-sm">I mapped out how customers interact with the business's website across various stages of the sales funnel. It was critical to creating better overall experiences that can increase engagement, brand loyalty and revenue. </div>
        </a>
        <a class="relative flex-col flex-1 flex max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#2C3084] text-white  p-6 text-left align-top max-[479px]:block rounded-md" tabindex="-1" href="#w-tabs-2-data-w-pane-1">
          <h5 class="text-xl font-bold">2. UX Very Accessible/UX Testing</h5>
          <div class="text-sm sm:text-sm">Optimize the site speed, add an attractive call to action, use white space, etc. Our ultimate goal is to retain customers on our site and for that, we need to make the whole process functional.</div>
        </a>
        <a class="relative flex-col flex-1 flex max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#2C3084] text-white p-6 text-left align-top max-[479px]:block rounded-md" tabindex="-1" href="#w-tabs-2-data-w-pane-2">
          <h5 class="text-xl font-bold">3. Minimize The Number Of Clicks</h5>
          <div class="text-sm sm:text-sm">Counted the number of clicks it takes the user to get things done on out website and minimize it. Checked the website on many devices—including PCs, phones, tablets and all types of browsers and operating systems. </div>
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
                <h3 class="mb-4 mt-6 text-2xl font-bold md:text-3xl">Our Mission Page</h3>
                <div class="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
                  <p class="text-xl text-[#636262]">This client wanted to display their core value of 'trust</p>
                  <ul class="list-disc pl-10 mt-5 mb-6 max-w-[528px] md:mb-10 lg:mb-22  text-[#636262] ">
                    <li>Organizational goals shift: Reflect new objectives to keep design efforts focused. </li>
                    <li>Industry trends change: Adapt to emerging technologies and user expectations. </li>
                    <li>Team dynamics evolve: Accommodate new members or leadership changes. </li>
                    <li>User needs expand: Stay responsive to shifting user preferences and requirements. </li>

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




    <div class="relative">
      <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg" alt="" class="absolute inset-[0%] -z-[1] inline-block h-full w-full max-w-full object-cover" />
      <div class="px-5 md:px-10">
        <div class="mx-auto w-full max-w-7xl">
          <div class="py-16 md:py-24 lg:py-32">
            <div class="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
              <div class="max-[991px]:max-w-[720px]">
                <h2 class="mb-4 mt-6 pb-4 text-4xl font-bold text-white md:text-6xl">"About Us" Page</h2>
                <div class="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                <ul class="list-disc pl-10 mt-5 mb-6 max-w-[528px] md:mb-10 lg:mb-22  text-white ">
                    <li>I followed the Halo Effect in my design of the "About Us Page" and made it look as professional as the others pages. If users have a good first impression, the positive feelings permeate to other parts of the site.</li>

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
  )
}

export default Kongsberg