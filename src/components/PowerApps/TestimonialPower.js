import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import StackUp from '../../assets/StackUp.jpeg'


function TestimonialPower() {
  useEffect(() => {
    AOS.init({duration:1200})
  })
  return (
    <section class="py-4 bg-gray-900">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 relative sm:text-center my-6"  data-aos="fade-up">
      <div class="container mx-auto xl:px-32">
        <div class="grid items-center lg:grid-cols-2">
          <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
            <div
              class="relative z-[1] block rounded-lg  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.4)] dark:shadow-black/20 md:px-12 lg:-mr-14"  data-aos="fade-up-left">
              <h2 class="mb-2 text-3xl font-bold text-primary dark:text-primary-400 text-white">
              Boomtown Coffee
              </h2>
              <p class="mb-4 font-semibold text-red-300">StackUp!</p>
              <p class="mb-6 text-neutral-100 dark:text-neutral-300">
              Our startup wanted to implement PowerApps in our employee tech ecosystem. We got connected with Ruth!
              </p>
              <p class="mb-6 text-neutral-100 dark:text-neutral-300">
              We Highly recommend! Ruth has contributed so much; and we have enjoyed working with her! she is flexible, adaptable and keen to detail. She truly works hard and is dedicated.


              </p>
              <p className='text-red-300'>~Kayse Johnson (COO)</p>
              <ul class="flex justify-center lg:justify-start text-yellow-300">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960"
                    class="w-5 text-primary dark:text-primary-400">
                    <path fill="currentColor"
                      d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                  </svg>
                </li>
              </ul>

            </div>
          </div>
          <div class="md:mb-12 lg:mb-0"  data-aos="zoom-in-down">

            <img src={StackUp}
              class="lg:rotate-[6deg] w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
          </div>
        </div>

      </div>
    </div>
  </section>


  )
}

export default TestimonialPower