import { useState } from 'react'
import { useEffect } from 'react';
import Logo from '../assets/Logo.png'
import AOS from "aos";
import "aos/dist/aos.css";



function Navbar() {
    useEffect(() => {
        AOS.init({duration:1200})
      })

    const [state, setState] = useState(false)
    const navigation = [

        { title: "About", path: "/About" },
        { title: "Portfolio", path: "/Portfolio" },
        { title: "Contact", path: "/Contact" },
    ]

  return (
    <nav className="bg-gray-900 w-full border-b md:border-0 md:static">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8" data-aos="fade-up">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                        <img
                            src={Logo}
                            width={120}
                            height={50}
                            alt="Ruth logo"
                        />
                    </a>
                  <div className="md:hidden">
                  <button className="menu-btn text-white hover:text-gray-300"
                onClick={() => setState(!state)}
            >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`} data-aos="fade-up">
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="text-white hover:text-red-300">
                                    <a href={item.path}>
                                        { item.title }
                                    </a>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
              <div className="hidden md:inline-block" data-aos="fade-up">
              <a href="#contact" className="flex items-center justify-center gap-x-1 py-2 px-4 text- font-medium bg-red-300 text-black  hover:bg-sky-400  duration-150 rounded-full md:inline-flex  active:bg-indigo-700 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                        Contact Me
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                        </svg>
                                    </a>



              </div>
          </div>
      </nav>
  )
}

export default Navbar