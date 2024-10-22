import { useEffect } from 'react';
import RuthPhoto from '../assets/RuthPhoto.jpg'
import AOS from "aos";
import "aos/dist/aos.css";


function ActionBanner() {
    useEffect(() => {
        AOS.init({duration:1200})
      })

  return (
    <section className="py-14 bg-black syne" id='About'>
    <div className="max-w-screen-xl mx-auto md:px-8"  data-aos="zoom-in-down">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
                <img src={RuthPhoto} className="md:max-w-md sm:rounded-lg" alt="" />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-3xl"  data-aos="zoom-in-down">
                {/* <h3 className="text-white font-semibold">
                    About Me
                </h3> */}
                <p className="text-[#E4A4BD] text-3xl font-extrabold sm:text-4xl ">
                    Army Veteran and Clean Aesthetic
                </p>
                <p className="mt-3 text-gray-200">
                My name is Ruth Zota. A freelance UX/UI developer located in Austin Texas -- with roots in digital & product marketing. I spent 6 years in the US Army and loved every minute of it!

                My freelance web development roots are in custom website/application development and CMS development (Drupal, Wordpress & Shopify).  In 2016, I started at the University of Idaho to broaden my knowledge of the Node.js ecosystem. Since then, I fell in love with & have been primarily using React & Redux in web applications. I believe in clean design and my past work reflects that.
                </p>
                <a href="https://cal.com/ruthzota/15min" className="inline-flex gap-x-1 items-center text-[#E4A4BD] hover:text-cyan-400 font-medium duration-150   active:bg-indigo-700 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                Book 15min Intro Call
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                </a>
                <a href="https://cal.com/ruthzota/30min" className="inline-flex gap-x-1 items-center text-[#E4A4BD] hover:text-cyan-400 font-medium duration-150   active:bg-indigo-700 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                    Book 30min Call
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
    {/* <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div> */}
</section>
  )
}

export default ActionBanner