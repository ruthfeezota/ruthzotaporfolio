import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Affinity from '../assets/Affinity.png'
import Evaluation from '../assets/Evaluation.png'
import Proto1 from '../assets/Prototype1.png'
import Proto2 from '../assets/Prototype2.png'
import Proto3 from '../assets/Prototype3.png'
import Proto4 from '../assets/Prototype4.png'
import UserTest from '../assets/UserTesting.png'
import Sketch from '../assets/Sketch2.jpg'
import PauseBanner from '../assets/PauseHero.png'
import PauseMini from '../assets/PauseMini.png'



function Pause() {
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
<div class="overflow-visible">
    <Nav/>
  <div class="">



<section class="block">
  <div class="bg-[#FBDDBF] text-gray-700">
    <div class="py-16 md:py-14 lg:py-12 px-5 md:px-10">
      <div class="max-w-[800px] mb-6 md:mb-10 lg:mb-12 mx-auto w-full max-w-7xl">
        <h1 class="font-bold text-6xl md:text-6xl">PAUSE</h1>
        <p className=' py-5 font-bold'>Symptom tracking application for women*</p>


      </div>

    </div>
  </div>
  <div class="">
    <div class="py-12 md:py-16 lg:py-20 px-5 md:px-10">
      <div class="relative grid w-full items-start justify-start max-[991px]:flex-col max-[991px]:flex grid-cols-[480px] lg:grid-cols-[0.5fr_0.75fr_480px] gap-4 mx-auto max-w-7xl">
        <a href="#" class="inline-block max-w-full text-black">
        <img src={PauseBanner} alt="Features Image" class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover" />
        </a>
        <div class="w-full max-w-xs max-[991px]:max-w-[560px]">
          <h3 class="font-bold text-2xl md:text-3xl">Main Idea</h3>
          <div class="mb-6 mt-6 w-16 [border-top:1px_solid_rgb(0,_0,_0)]">
          </div>
          <p class="text-[#636262] text-sm sm:text-lg">We aimed to develop a health management application that assists women in identifying whether they are experiencing perimenopause, long COVID, or both. ‘PAUSE’ aims to help women better understand their health, connect with others with shared experiences, and enable symptom tracking to provide physicians with accurate health data for diagnosis.
          </p>
          <p className='font-bold'>
          *The words “women” and “woman” throughout this page refer to individuals with a uterus and who may experience perimenopause
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
                <img src={PauseMini} alt="Features Image" class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover" />
              </div>
              <div class="max-[991px]:max-w-[720px]">
                <h2 class="mb-4 mt-6 pb-4 text-3xl font-extrabold md:text-5xl">THE BRIEF</h2>
                <div class="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
                  <p class="text-xl text-[#636262]">The aim of this activity is to design, prototype and test an application to support people managing long COVID , based on the analysis of user needs drawn from existing resources and theory. This brief was provided by the module leaders for the final coursework.</p>



                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


<section>

  <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">

    <div class="flex flex-col items-center">

      <div class="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
        <h2 class="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">
Research + Ideation</h2>
        <div class="mx-auto mt-4 max-w-[1500px]">
          <p class="text-[#636262]">The whole group of six did secondary research looking through papers on digital intervention and behaviour change theories as well as interviews and anecdotes from people who experienced long COVID. This is where we were finding a large group of women who had experienced long COVID, perimenopause, or both, and felt they were not supported nor provided with enough resources to understand what was going on in their body. Many women got misdiagnosed for one or the other, which exacerbated symptoms and often prolonged recovery. We felt that this issue was a gap in the existing pool of long COVID and COVID management applications. Thus, we decided to do a second round of secondary research but with a focus on this user group. We then collated our research into  major themes through an affinity diagram. We created an evaluation matrix of the various pain points and desired features that these women expressed. </p>
        </div>
      </div>

      <div class="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols- ">

        <div>
          <a href="" class="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2">
            <img alt="" src={Affinity} class="inline-block h-60 w-full rounded-2xl object-cover" />
            <div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
              <div class="mb-4 flex flex-col items-start gap-4">
                <p class="text-xl font-bold md:text-2xl">Affinity Diagram from Secondary Research</p>
              </div>

            </div>
          </a>
        </div>

        <div>
          <a href="" class="h-ax-w-full flex flex-col gap-4 rounded-md px-4 md:px-2">
            <img alt="" src= {Evaluation} class="inline-block h-60 w-full rounded-2xl object-cover" />
            <div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
              <div class="mb-4 flex flex-col items-start gap-4">
                <p class="text-xl font-bold md:text-2xl">Evaluation Matrix [Desirability x Feasibility]</p>
              </div>

            </div>
          </a>
        </div>

      </div>
    </div>
  </div>
</section>


    <section class="block">
  <div class="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
    <div class="mx-auto flex-col flex max-w-3xl items-center text-center mb-8 md:mb-12 lg:mb-16">
      <div class="text-center">
        <h2 class="font-bold text-3xl md:text-5xl">Smooth Process. Transformative Outcomes.</h2>
      </div>
    </div>
    <div class="relative flex-col flex items-center justify-center bg-contain bg-center bg-no-repeat pt-10 " styles="background-image: url('https://assets.website-files.com/6458c625291a94a195e6cf3a/648825fca218588cb636c341_Group%2048114.png');">
      <div class="relative flex w-full justify-around gap-4">
        <a class="relative flex-1 flex flex-col max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#FBDDBF] text-white p-6 text-left align-top max-[479px]:block rounded-md" href="#w-tabs-2-data-w-pane-0">
          <h5 class="text-xl font-bold">1. Map Out Your Customer's Journeys</h5>
          <div class="text-sm sm:text-sm">knowing how your customers interact with your website across various stages of the sales funnel is critical to creating better overall experiences that can increase engagement, brand loyalty and revenue. </div>
        </a>
        <a class="relative flex-col flex-1 flex max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#FBDDBF] text-white  p-6 text-left align-top max-[479px]:block rounded-md" tabindex="-1" href="#w-tabs-2-data-w-pane-1">
          <h5 class="text-xl font-bold">2. UX Very Accessible/UX Testing</h5>
          <div class="text-sm sm:text-sm">Optimize the site speed, add an attractive call to action, use white space, etc. Our ultimate goal is to retain customers on our site and for that, we need to make the whole process functional.</div>
        </a>
        <a class="relative flex-col flex-1 flex max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#FBDDBF] text-white p-6 text-left align-top max-[479px]:block rounded-md" tabindex="-1" href="#w-tabs-2-data-w-pane-2">
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
                <h3 class="mb-4 mt-6 text-2xl font-bold md:text-3xl">User Personas</h3>
                <div class="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
                  <p class="text-xl text-[#636262]">We came up with three women who had varying lifestyles and personalities, which shape the way in which they may use the application and what their primary goal for using it would be. For example, Abigail is very introverted and feels quite isolated. Her main driving factor for using PAUSE would be to connect with others and talk or read about the experiences of people going through a similar situation. Sasha, on the other hand, is an extremely busy career-driven woman who wants simple and understandable data visualization so she can bring it to her doctor for a better understanding of the changes in her body. Michel is very health anxious and wants to know every detail on what is going on in her body and what she can do to manage her symptoms. </p>

                </div>

              </div>
              <div class="">
                <img src="https://images.squarespace-cdn.com/content/v1/630cfe95d3f7360ad19bdd4f/a591d678-aae2-4622-919e-f077657d1a0c/Michel.png" alt="Features Image" class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover p-5" />

                <img src="https://images.squarespace-cdn.com/content/v1/630cfe95d3f7360ad19bdd4f/b1b8f634-6faf-45ed-b1d1-6d196d0c5fb9/Abigail+Chen.png" alt="Features Image" class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover p-5" />

                <img src="https://images.squarespace-cdn.com/content/v1/630cfe95d3f7360ad19bdd4f/0c1953d8-c7a1-4931-8e6c-e7a7503750ab/Sasha.png" alt="Features Image" class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover p-5" />
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
        <h1 class="font-bold mb-4 text-3xl md:text-6xl">Prototype</h1>

      </div>
    </div>
    <img src={Proto1} alt="" class="inline-block  w-full object-cover"/>
    <img src={Proto2} alt="" class="inline-block  w-full object-cover"/>
    <img src={Proto3} alt="" class="inline-block  w-full object-cover"/>
  </div>

</section>




    <section class="block bg-[#FBDDBF]">
      <div class="px-5 md:px-10">
        <div class="mx-auto w-full max-w-7xl">
          <div class="py-16 md:py-24 lg:py-32">
            <div class="mx-auto max-w-3xl text-center">
              <h2 class="mb-8 mt-6 pb-16 text-3xl font-extrabold md:mb-12 md:text-5xl lg:mb-4 text-gray-700">What Users Said About the Site</h2>
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
                  <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a27d_Group%2048096%402x.png" alt="Testimonial image" class="mr-4 inline-block h-16 w-16 max-w-full object-contain" />
                  <div class="flex flex-col items-start">
                    <h6 class="text-sm font-bold md:text-base">Laila Bahar</h6>
                    <p class="text-sm text-[#636262]">Designer</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>




    <div class="relative">
      <img src="" alt="" class="absolute inset-[0%] -z-[1] inline-block h-full w-full max-w-full object-cover" />
      <div class="px-5 md:px-10">
        <div class="mx-auto w-full max-w-7xl">
          <div class="py-16 md:py-24 lg:py-32">
            <div class="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
              <div class="max-[991px]:max-w-[720px]">
                <h2 class="mb-4 mt-6 pb-4 text-4xl font-bold text-black md:text-6xl">v.2 | Refine the Designs</h2>
                <div class="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
                <ul class="list-disc pl-10 mt-5 mb-6 max-w-[528px] md:mb-10 lg:mb-22  text-black ">
                  <p>We incorporated the feedback from the user testing and heuristic evaluation to create a more intuitive and seamless design. We made several main changes:</p>
                    <li>Making the text bigger</li>
                    <li>Reducing number of clicks required to log symptom and its intensity</li>

                </ul>
                </div>
              </div>
              <div class="">
                <img src={Proto4} alt="CTA Card Image" class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover" />
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
              <div class="max-[1500px]:max-w-[1000px]">
                <h2 class="mb-4 mt-6 pb-4 text-3xl font-extrabold md:text-5xl">User Testing</h2>

              </div>
              <div class="">
                <img src={UserTest} alt="" class="mx-auto inline-block h-full w-full  object-cover" />
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

export default Pause