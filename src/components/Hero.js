import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import RuthFace from "../assets/Ruth'sFace.png";

function Hero() {
	return (
		<section className="bg-[#E0DFDD] py-14 questrial-regular pl-10">
			<div className="container mx-auto px-4">
				<h1 className="uppercase font-extrabold leading-[100px] sm:text-[180px] text-[75px] sm:leading-[180px]">
					Creative <br />
					Developer
				</h1>
				<div class="md:mb-10 lg:mb-0 py-6">
					<img
						img
						src={RuthFace}
						class="w-96 shadow-lg grayscale "
						alt="React developer Austin TX"
					/>
				</div>

				<div className="container mx-auto px-4">
					<section className="py-8">
						<div className="container mx-auto px-4">
							<div className="grid grid-cols-3 gap-8">
								<a
									href="#Tech"
									className="flex items-center justify-center"
								>
									<FontAwesomeIcon
										icon={faArrowDown}
										className="text-[80px] text-black sm:mr-96 mr-40 sm:text-[190px]"
									/>
								</a>

								<div className=" uppercase sm:py-24 leading-[20px] sm:text-[20px] text-[18px] sm:leading-[25px]">
									I Support Businesses <br /> and Agencies with{" "}
									<br /> Creative Development and UX Designs
								</div>
								<div className="font-bold leading-[50px] sm:text-[180px] text-[55px] sm:leading-[180px]">
									Ruth <br /> Zota
								</div>
							</div>
						</div>
						<div className="hidden">
							ux developer Austin TX, Austin TX app
							developer, freelance UI/UX designer Austin TX, 3D
							modeler Austin TX, VR developer Austin TX,
							full-stack developer Austin TX, React developer
							Austin TX, Angular developer Austin TX, Vue.js
							developer Austin TX, Figma UI/UX designer Austin TX,
							Blender 3D modeler Austin TX, Unity VR developer
							Austin TX, Unreal Engine VR developer Austin TX,
							JavaScript developer Austin TX, HTML5 CSS3 developer
							Austin TX, Bootstrap Tailwind CSS developer Austin
							TX, Git GitHub developer Austin TX, app development
							services Austin TX, UI/UX design services Austin TX,
							3D modeling services Austin TX, VR development
							services Austin TX, web development services Austin
							TX, freelance developer Austin TX, app developer for
							startups Austin TX, UI/UX designer for small
							businesses Austin TX, VR developer for tech
							companies Austin TX, web developer for nonprofits
							Austin TX,
						</div>
					</section>
				</div>
			</div>
		</section>
	);
}

export default Hero;

// import { useState, useEffect } from "react";
// import Logo from '../assets/Logo.png'
// import Typed from 'react-typed';
// import { db } from "../firebase";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Hero() {
//     useEffect(() => {
//         AOS.init({duration:1200})
//       })

//     const [state, setState] = useState(false);
//     const [email, setEmail] = useState("");

//     const handleSubmit = (e) => {
//       e.preventDefault();

//       db.collection('email')
//       .add({
//         email: email,
//       })

//       .then(() => {
//         alert('Email has be submitted 👍')
//       })
//       .catch((error) => {
//         alert(error.message);
//       });

//       setEmail("");
//     };

//    const navigation = [

//     { title: "Home", path: "/" },
//     { title: "Portfolio", path: "/Portfolio" },
//     { title: "About", path: "/About" },
//     { title: "Figma", path: "/figma" },
//      { title: "Services", path: "#services" },

// ]

// useEffect(() => {
//     document.onclick = (e) => {
//         const target = e.target;
//         if (!target.closest(".menu-btn")) setState(false);
//     };
// }, [])

// const Brand = () => (
//     <div className="flex items-center justify-between py-5 md:block" data-aos="fade-up">
//         <a href="/">
//                         <img
//                             src={Logo}
//                             width={160}
//                             height={70}
//                             alt="Ruth logo"
//                         />
//                     </a>
//         <div className="md:hidden" data-aos="fade-up">
//             <button className="menu-btn text-white hover:text-gray-300"
//                 onClick={() => setState(!state)}
//             >
//                 {
//                     state ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//                         </svg>
//                     ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                         </svg>
//                     )
//                 }
//             </button>
//         </div>
//     </div>
// )

//   return (
//     <div  className="bg-black text-white h-full relative overflow-hidden bg-cover bg-no-repeat text-center" id='Hero' data-aos="fade-up">
//         {/* bg-[url('https://i.ibb.co/jHRFj45/pexels-photo-3560136.jpg')] */}

//             <header>
//                 <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
//                     <Brand />
//                 </div>
//                 <nav className={`pb-5 md:text-sm ${state ? "absolute z-20 top-0 inset-x-0 bg-black rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
//                     <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
//                         <Brand />
//                         <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
//                             <ul className="flex-1 justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 syne">
//                                 {
//                                     navigation.map((item, idx) => {
//                                         return (
//                                             <li key={idx} className="text-white inline-block px-6 py-2 [border-bottom:1px_solid_rgba(0,_0,_0,_0)] hover:text-white  font-extraboldhover:[border-bottom:1px_solid_rgb(228,164,202)]">
//                                                 <a href={item.path} className="block">
//                                                     {item.title}
//                                                 </a>
//                                             </li>
//                                         )
//                                     })
//                                 }
//                                 <li>
//                                     <a href="/Contact" className="flex items-center justify-center gap-x-1 py-2 px-4 text- font-extrabold bg-[#E4A4BD] text-black  hover:bg-white duration-150 rounded-full md:inline-flex  active:bg-indigo-700 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
//                                         Start a Project
//                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
//                                             <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
//                                         </svg>
//                                     </a>
//                                 </li>

//                             </ul>

//                         </div>
//                     </div>
//                 </nav>
//             </header>

//             <section className="relative">

//                 <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
//                     <div className="space-y-5 max-w-4xl mx-auto text-center">
//                     {/* <div class="relative w-24 h-24 space-y-5 max-w-4xl mx-auto text-center">

//                     <img class="rounded-full border border-black shadow-sm" src={ProfilePhoto}
//                         alt="Ruth Zota Image" />
//     </div> */}

//                         <h2 className="text-4xl text-white font-extrabold syne mx-auto md:text-5xl pt-4">
//                             Ruth Zota
//                         </h2>

//                         <div className='flex justify-center items-center'>
//           <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>

//           </p>
//           <Typed
//           className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#E4A4BD] font-extrabold syne'
//             strings={['UX/UI Developer', 'UX Designer', 'Web Designer', ]}
//             typeSpeed={120}
//             backSpeed={140}
//             loop
//           />
//         </div>

//                         <p className="max-w-2xl mx-auto text-white syne">
//                         Experienced UX/UI Developer and Designer adept at modernizing legacy applications.
//                         </p>

//                         <form
//                              onSubmit={handleSubmit}
//                             className="justify-center items-center gap-x-3 sm:flex">
//                             <input
//                                 type="email" value={email} onChange={(e) => setEmail(e.target.value)}
//                                 placeholder="your@email.com"
//                                 className="w-full px-3 py-2.5 text-white bg-black border-2 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
//                             />
//                             <button type="submit" className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-black font-extrabold syne bg-[#E4A4BD] hover:bg-white active:bg-white duration-150 rounded-lg outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">
//                                 Connect
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
//                                     <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
//                                 </svg>
//                             </button>

//                         </form>
//                         <div className="flex justify-center items-center gap-x-4 text-[#E4A4BD] text-sm mr-2">
//                             <div className="flex">
//                                 <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
//                                 <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
//                                 <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
//                                 <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
//                                 <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
//                             </div>
//                             <p><span className="text-gray-100 mr-1 syne">5.0</span> by over 200 freelance clients</p>

//                         </div>

//                     </div>

//                 </div>

//             </section>
//             {/* <div className='absolute inset-0 blur-[118px] max-w-lg h-[600px] mx- sm:max-w-1xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div> */}

//         </div>
//   )
// }

// export default Hero
