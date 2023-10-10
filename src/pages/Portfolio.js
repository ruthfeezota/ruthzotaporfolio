import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import PauseLogo from '../assets/PauseHero.png'
import LawLady from '../assets/Lawyer1.png'
import Leaf from '../assets/LeafPhoto.jpg'

function Portfolio() {

  return (
    <div>

    <Nav/>

<section>
  <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    <div class="flex flex-col items-center">
      <div class="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
        <h2 class="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">Projects</h2>
        <div class="mx-auto mt-4 max-w-[528px]">
          <p class="text-[#636262]">View my UX/UI Design and development projects</p>
        </div>
      </div>
      <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href="/Pause" class="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2">
            <img alt="" src={PauseLogo} class="inline-block h-100 w-full rounded-2xl object-cover" />
            <div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
              <div class="mb-4 flex flex-col items-start gap-4">
                <p class="text-xl font-bold md:text-2xl">Pause</p>
              </div>

            </div>
          </a>
        </div>
        <div>
          <a href="/ShepherdLaw" class="h-ax-w-full flex flex-col gap-4 rounded-md px-4 md:px-2">
            <img alt=""src={LawLady}  class="inline-block h-100 w-full rounded-2xl object-cover" />
            <div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
              <div class="mb-4 flex flex-col items-start gap-4">
                <p class="text-xl font-bold md:text-2xl">Shepherd Law</p>
              </div>

            </div>
          </a>
        </div>
        <div>
          <a href="/" class="hmax-w-full flex flex-col gap-4 rounded-md px-4 md:px-2">
            <img alt="" src={Leaf} class="inline-block h-60 w-full rounded-2xl object-cover" />
            <div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
              <div class="mb-4 flex flex-col items-start gap-4">
                <p class="text-xl font-bold md:text-2xl">Leaf Digital Fintech - Coming Soon</p>
              </div>

            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    <Footer/>

    </div>
  )
}

export default Portfolio