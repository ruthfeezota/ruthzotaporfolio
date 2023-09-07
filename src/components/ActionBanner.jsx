import React from 'react'
import RuthPhoto from '../assets/RuthPhoto.jpg'

function ActionBanner() {
  return (
    <section className="py-14 bg-gray-900">
    <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
                <img src={RuthPhoto} className="md:max-w-md sm:rounded-lg" alt="" />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-3xl">
                <h3 className="text-white font-semibold">
                    About Me
                </h3>
                <p className="text-red-300 text-3xl font-semibold sm:text-4xl">
                    Clean Design and Professionalism
                </p>
                <p className="mt-3 text-gray-200">
                My name is Ruth Zota. A freelance UX/UI developer & UX Designer in Austin Texas -- with roots in digital marketing & SEO. I'm passionate about music, technology and basically everything that makes the internet tick.

                My freelance web development roots are in Wordpress & Shopify.  In 2016, I started at the University of Washington to broaden my knowledge of the Node.js ecosystem. Since then, I fell in love with & have been primarily using React & Redux in web applications. For static sites, I love using Angular for creating blazing fast, SEO-driven headless frontend user interfaces. I believe in clean design and my past work reflects that.
                </p>
                <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-red-300 hover:text-red-500 duration-150 font-medium">
                    Connect with me
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