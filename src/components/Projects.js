import { useEffect, useState } from 'react';
import LawyerPhoto from '../assets/Lawyersite.png'
import LashesPhoto from '../assets/LashesPhoto.jpeg'
import LeafPhoto from '../assets/LeafPhoto.jpg'
import CBDoil from '../assets/CBDphoto.jpg'
import Roseoil from '../assets/RoseOil.jpg'
import NailPhoto from '../assets/NailPhoto.jpg'
import Hempoil from '../assets/HempOil.jpg'
import CoffeePhoto from '../assets/CoffeePhoto.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react'
import styled from 'styled-components';



 function Projects() {
   useEffect(() => {
     AOS.init({duration:1200})
   })
       return (
        <section className='py-4 text-white bg-[#CBC7C1] questrial-regular' id='Project'>
         <div className="max-w-screen-xl mx-auto px-4 md:px-8" data-aos="fade-up">
             <div className='relative max-w-xl mx-auto sm:text-center uppercase'>
                 <h3 className='text-5xl text-black mt-10'>
                     Portfolio
                 </h3>
                 <p className="mt-3 text-black">
                     Click each to view the websites of past happy clients!
                </p>

             </div>

         </div>

         <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24" data-aos="fade-up">
   <div class="-m-1 flex flex-wrap md:-m-2" data-aos="fade-up">
     <div class="flex w-1/2 flex-wrap">

       <div class="w-1/2 p-1 md:p-2 group-hover:opacity-50 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
       <a href="https://takespruce.com/" target="_blank" rel="noreferrer">
         <img
           alt="gallery"
           class="block h-full w-full object-cover object-center"
           src={CBDoil} />
     </a>
       </div>

       <div class="w-1/2 p-1 md:p-2 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
       <a href="https://freckbeauty.com/" target="_blank" rel="noreferrer">
         <img
           alt="gallery"
           class="block h-full w-full object-cover object-center"
           src={Roseoil} />
           </a>
       </div>
       <div class="w-full p-1 md:p-2 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
       <a href="https://coffeeopia.com/" target="_blank" rel="noreferrer">
         <img
           alt="gallery"
           class="block h-full w-full object-cover object-center"
           src={CoffeePhoto}  />
           </a>
       </div>
     </div>
     <div class="flex w-1/2 flex-wrap ">
       <div class="w-full p-1 md:p-2 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
       <a href="https://trilogeneseeds.com/" target="_blank" rel="noreferrer">
         <img
           alt="gallery"
           class="block h-full w-full object-cover object-center"
           src={Hempoil} />
           </a>
       </div>
       <div class="w-1/2 p-1 md:p-2 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
       <a href="https://mionails.ru/" target="_blank" rel="noreferrer">
         <img
           alt="gallery"
           class="block h-full w-full object-cover object-center"           src={NailPhoto}  />
           </a>
       </div>


       <div class="w-1/2 p-1 md:p-2 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
       <a href="https://www.leafglobalfintech.com" target="_blank" rel="noreferrer">
         <img
           alt="gallery"
           class="block h-full w-full object-cover object-center"
           src={LeafPhoto}  />
          </a>
       </div>
     </div>
   </div>
 </div>
 </section>
       );
 }

 export default Projects
