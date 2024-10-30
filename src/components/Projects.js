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








// function Logo({ backgroundText, background, hoverBackground,}) {
//   const Logo = styled.div`
//     background: ${props => `url(${props.background}) no-repeat top center`};
//     height: 500px;
//     width: 500px;
//     background-size: cover;
//     &:hover {
//       background: ${props =>
//         `url(${props.hoverBackground}) no-repeat top center`};
//       background-size: contain;
//     }

//     &::before { 
//       content: "${props => props.backgroundText}";
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       display: absolute; /* Center text vertically and horizontally */
//       justify-content: center;
//       align-items: center;
//       color: white; /* Text color */
//       font-size: 2rem; /* Adjust font size as needed */
//     }
//   `



//   return (
//     <Logo
//     backgroundtext={backgroundText}
//       background={background}
//       hoverBackground={hoverBackground}
//       className="logoContent"
//     />
//   );
// }

// function Projects() {
//   const logos = [
//     {
//       text: "Pineapple", 
//       url: "",
//       hoverUrl: "https://www.drjohnlapuma.com/wp-content/uploads/2019/03/Mar19_Image_Food-1.jpg"
//     },
//     {
//       text: "Apple",
//       url: "",
//       hoverUrl: "https://hips.hearstapps.com/hmg-prod/images/red-apple-royalty-free-image-1659453740.jpg"
//     }
//   ];

//   return (
//     <div className="max-w-screen-xl mx-auto px-4  md:px-8">
//         {logos.map((item, index) => (
//           <Logo
//             key={index}
//             background={item.url}
//             hoverBackground={item.hoverUrl}
//             backgroundText={item.text}
//           />
//         ))}
        
//         </div>
  
//   );
// }








// function Projects() {


//   return (
//     <section className="py-14 bg-black syne" id='services'>
//     <div className="max-w-screen-xl mx-auto px-4  md:px-8" data-aos="zoom-in-down">
//         <div className="relative max-w-2xl mx-auto sm:text-center">
//         <div className="relative z-10">
//         <div className="text-[#E4A4BD] text-3xl font-extrabold sm:text-4xl mb-12">Projects</div>
//         <div className="text-white text-3xl font-extrabold sm:text-4xl" >
//         <div className=''> <span className=" hover:underline">Take Spruce,</span> <span className=" hover:underline">Freck Beauty,</span> <span className=" hover:underline">Coffee Opia,</span> <span className=" hover:underline">Coffee Opia, </span> <span className=" hover:underline">Trilogene Seeds, </span> <span className=" hover:underline">Mionails</span>  
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </section>
   
//   )
// }

// export default Projects




 function Projects() {
   useEffect(() => {
     AOS.init({duration:1200})
   })
       return (
        <section className='py-4 text-white bg-black syne' id='Project'>
         <div className="max-w-screen-xl mx-auto px-4 md:px-8" data-aos="fade-up">
             <div className='relative max-w-xl mx-auto sm:text-center'>
                 <h3 className='text-3xl font-extrabold sm:text-4xl text-[#E4A4BD] mt-10'>
                     Portfolio
                 </h3>
                 <p className="mt-3 text-white">
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
           class="block h-full w-full rounded-lg object-cover object-center"
           src={CBDoil} />
     </a>
       </div>

       <div class="w-1/2 p-1 md:p-2 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
       <a href="https://freckbeauty.com/" target="_blank" rel="noreferrer">
         <img
           alt="gallery"
           class="block h-full w-full rounded-lg object-cover object-center"
           src={Roseoil} />
           </a>
       </div>
       <div class="w-full p-1 md:p-2 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
       <a href="https://coffeeopia.com/" target="_blank" rel="noreferrer">
         <img
           alt="gallery"
           class="block h-full w-full rounded-lg object-cover object-center"
           src={CoffeePhoto}  />
           </a>
       </div>
     </div>
     <div class="flex w-1/2 flex-wrap ">
       <div class="w-full p-1 md:p-2 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
       <a href="https://trilogeneseeds.com/" target="_blank" rel="noreferrer">
         <img
           alt="gallery"
           class="block h-full w-full rounded-lg object-cover object-center"
           src={Hempoil} />
           </a>
       </div>
       <div class="w-1/2 p-1 md:p-2 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
       <a href="https://mionails.ru/" target="_blank" rel="noreferrer">
         <img
           alt="gallery"
           class="block h-full w-full rounded-lg object-cover object-center"           src={NailPhoto}  />
           </a>
       </div>


       <div class="w-1/2 p-1 md:p-2 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
       <a href="https://www.leafglobalfintech.com" target="_blank" rel="noreferrer">
         <img
           alt="gallery"
           class="block h-full w-full rounded-lg object-cover object-center"
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
