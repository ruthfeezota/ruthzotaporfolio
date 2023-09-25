import React from 'react'
import PhoteImage from '../assets/LeafPhoto.jpg'
import LeafPhoto from '../assets/LeafPhoto.jpg'


function ProjectsHero() {
  return (
    <section className='bg-gray-900'>
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">

                    <h2 className="text-4xl text-gray-200 font-extrabold mx-auto md:text-5xl">
                    Virtual banking  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E57373]">beyond borders.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-200">
                    The better way to help you store, protect, and transport your money — no matter where you go 🌍.
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <a href="javascript:void(0)" className="block py-2 px-4 text-white font-medium bg-red-300 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Browse Live Project
                        </a>
                        <a href="javascript:void(0)" className="block py-2 px-4 text-gray-200 hover:text-gray-400 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                            Figma Design
                        </a>
                    </div>
                </div>
                <div className="mt-14">
                    <img src={PhoteImage} className="w-full shadow-lg rounded-lg border h-200" alt="" />
                </div>
            </div>
        </section>
  )
}

export default ProjectsHero