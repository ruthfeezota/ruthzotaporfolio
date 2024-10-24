import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


function Stats() {
    useEffect(() => {
        AOS.init({duration:1200})
      })
    const stats = [
        {
            data: "200+",
            title: "Clients Helped"
        },
        {
            data: "4+",
            title: "Countries"
        },
        {
            data: "20+",
            title: "Different Industries"
        },
    ]

  return (
    <section className="py-28 bg-black">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8" data-aos="zoom-in-up">
                <div className="max-w-2xl mx-auto text-center">

                    <h3 className="text-[#E4A4BD] text-3xl font-extrabold syne sm:text-4xl">
                        My Freelance Network
                    </h3>
                    <p className="mt-3 text-gray-300 syne">
                        I've helped clients build user-friendly websites and applications in many different industries and countries.
                    </p>
                </div>
                <div className="mt-12" data-aos="zoom-in-up">
                    <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row syne">
                        {
                            stats.map((item, idx) => (


                                <li key={idx} className="w-full text-center bg-gray-800 px-12 py-4 rounded-l duration-150   active:bg-indigo-700 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                    <h4 className="text-4xl text-white font-semibold hover:text-[#E4A4BD]">{item.data}</h4>
                                    <p className="mt-3 text-gray-400 font-medium hover:text-white">{item.title}</p>
                                </li>




                            ))
                        }
                    </ul>

                </div>
            </div>

        </section>

  )
}

export default Stats