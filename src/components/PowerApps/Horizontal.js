import React from 'react'
import First1 from '../../assets/SampleApp.png'
import First3 from '../../assets/SampleApp2.png'
import First4 from '../../assets/SampleApp5.png'
import First2 from '../../assets/SampleApp6.png'
import Profile7 from '../../assets/SampleApp7.jpeg'
import ProfileVideo from '../../assets/SampleVideo8.mp4'
import ProfileVideo2 from '../../assets/SampleAppVideo.mp4'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Horizontal.css'


function Horizontal() {
    useEffect(() => {
        AOS.init({duration:1200})
      })
  return (
    <div class="relative bg-gray-900" id="shortportifio">
<ul class="container-snap py-20 pb-8 px-[1vw] w-full flex gap-8 snap-x overflow-x-auto no-scrollbar self-center bg-transparent" data-aos="fade-up">
    <li class="snap-center">
        <div class="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
            <img src={First2} alt="" class="absolute inset-0 object-cover object-bottom w-full h-full " />

            <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-black/75"></div>

            <div class=" relative h-96 w-[500px] p-12 flex flex-col justify-between items-start">
                <div>
                    <h2 class=" mt-3 text-3xl font-semibold tracking-tight text-white">HR Onboarding App</h2>
                </div>

            </div>
        </div>
    </li>

    <li class="snap-center">
        <div class="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
            <img src={First4} alt="" class="absolute inset-0 object-cover object-bottom w-full h-full " />

            <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-black/75"></div>

            <div class=" relative h-96 w-[500px] p-12 flex flex-col justify-between items-start">
                <div>
                    <h2 class=" mt-3 text-3xl font-semibold tracking-tight text-white">Musical Showcase</h2>
                </div>

            </div>
        </div>
    </li>


    <li class="snap-center">
        <div class="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
            <img src={First3} alt="" class="absolute inset-0 object-cover object-bottom w-full h-full " />

            <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-black/75"></div>

            <div class=" relative h-96 w-[500px] p-12 flex flex-col justify-between items-start">
                <div>

                    <h2 class=" mt-3 text-3xl font-semibold tracking-tight text-white">Reservation App</h2>
                </div>

            </div>
        </div>
    </li>

    <li class="snap-center">
        <div class="relative flex-shrink-0 max-w-[95vw] overflow-hidden rounded-3xl">
            <img src={Profile7} alt="" class="absolute inset-0 object-cover object-bottom w-full h-full " />

            <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-black/75"></div>

            <div class=" relative h-96 w-[500px] p-12 flex flex-col justify-between items-start">
                <div>

                    <h2 class=" mt-3 text-3xl font-semibold tracking-tight text-white">Walk Through App</h2>
                </div>
            </div>
        </div>
    </li>


</ul>
</div>
  )
}

export default Horizontal
