import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function CalltoAction() {
    useEffect(() => {
        AOS.init({duration:1200})
      })
  return (
<section className="relative overflow-hidden py-20 px-4 bg-gray-900 md:px-8">
            <div className="w-full h-full rounded-full  absolute -top-12 -right-14 blur-2xl opacity-10"></div>
            <div className="max-w-2xl mx-auto text-center relative"  data-aos="fade-up">
                <div className="py-4">
                    <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
                        Let's Build Something Great Together!
                    </h3>

                </div>
                <div className="mt-5 items-center justify-center gap-3 sm:flex">
                    <a
                        href="/Contact"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
                    >
                        Start a Project
                    </a>
                    <a
                        href="#shortportifio"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
                    >
                        View Portfolio
                    </a>
                </div>
            </div>
        </section>
  )
}

export default CalltoAction
