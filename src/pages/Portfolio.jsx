import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ProjectImage from '../components/ProjectImage'
import ProjectsHero from '../components/ProjectsHero'
import ProjectsSample from '../components/ProjectsSample'

function Portfolio() {
  const stats = [
    {
        data: "500",
        title: "Interviews"
    },
    {
        data: "150",
        title: "Usability Tests"
    },
    {
        data: "6",
        title: "Iterations"
    },
    {
        data: "50K",
        title: "Downloads"
    },
]

  return (
    <div>

    <Nav/>
    <ProjectsHero/>

    <section className="py-14 bg-gray-900">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <ul className="flex flex-col items-center justify-center gap-x-12 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
                    {
                        stats.map((item, idx) => (
                            <li key={idx} className="text-center text-1xl">
                                <h4 className="text-4xl text-white font-semibold">{item.data}</h4>
                                <p className="mt-3 text-red-300 font-medium">{item.title}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>

    <ProjectsSample/>
    <ProjectImage/>
    <Footer/>

    </div>
  )
}

export default Portfolio