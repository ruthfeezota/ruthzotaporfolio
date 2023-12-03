import { useEffect } from 'react';
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import PauseLogo from '../assets/PauseHero.png'
import LawLady from '../assets/Lawyer1.png'
import Leaf from '../assets/LeafPhoto.jpg'
import Cookbook from '../assets/CookbookCover.jpg'
import Kongsberg from '../assets/Kongsberg.jpg'
import Bahasa from '../assets/BahasaCover.png'
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    AOS.init({duration:1200})
  })

  return (
    <div>

    <Nav/>

<section class="bg-gray-900">
  <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32 bg-gray-900" data-aos="fade-up">
    <div class="flex flex-col items-center">
      <div class="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
        <h2 class="mb-4 mt-6 text-3xl font-extrabold md:text-5xl text-white">Projects</h2>
        <div class="mx-auto mt-4 max-w-[528px]">
          <p class="text-gray-200">View my UX/UI Design and development projects</p>
        </div>
      </div>
      <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
        <div>
          <a href="/Pause" class="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2">
            <img alt="" src={PauseLogo} class="inline-block h-100 w-full rounded-2xl object-cover" />
            <div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
              <div class="mb-4 flex flex-col items-start gap-4">
                <p class="text-xl font-bold md:text-2xl text-white">Pause</p>
              </div>

            </div>
          </a>
        </div>
        <div>
          <a href="/ShepherdLaw" class="h-ax-w-full flex flex-col gap-4 rounded-md px-4 md:px-2">
            <img alt=""src={LawLady}  class="inline-block h-100 w-full rounded-2xl object-cover" />
            <div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
              <div class="mb-4 flex flex-col items-start gap-4">
                <p class="text-xl font-bold md:text-2xl text-white">Shepherd Law</p>
              </div>

            </div>
          </a>
        </div>

        <div>
          <a href="/Bahasa" class="max-w-full flex flex-col gap-4 rounded-md px-4 md:px-2">
            <img alt="" src={Bahasa} class="inline-block h-60 w-full rounded-2xl object-cover" />
            <div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
              <div class="mb-4 flex flex-col items-start gap-4">
                <p class="text-xl font-bold md:text-2xl text-white">Bahasa</p>
              </div>

            </div>
          </a>
        </div>

        <div>
          <a href="/Cookbook" class="max-w-full flex flex-col gap-4 rounded-md px-4 md:px-2">
            <img alt="" src={Cookbook} class="inline-block h-60 w-full rounded-2xl object-cover" />
            <div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
              <div class="mb-4 flex flex-col items-start gap-4">
                <p class="text-xl font-bold md:text-2xl text-white">Cookbook</p>
              </div>

            </div>
          </a>
        </div>


        <div>
          <a href="/Kongsberg" class="max-w-full flex flex-col gap-4 rounded-md px-4 md:px-2">
            <img alt="" src={Kongsberg} class="inline-block h-60 w-full rounded-2xl object-cover" />
            <div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
              <div class="mb-4 flex flex-col items-start gap-4">
                <p class="text-xl font-bold md:text-2xl text-white">Kongsberg Digital</p>
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