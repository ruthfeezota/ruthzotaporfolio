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
    <section className="py-28 bg-[#E0DFDD]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8" data-aos="zoom-in-up">
                <div className="max-w-2xl mx-auto text-center questrial-regular">

                    <h3 className="text-black text-5xl uppercase font-extrabold">
                        My Freelance Network
                    </h3>
                    <p className="mt-3 text-black questrial-regular uppercase">
                        I've helped clients build user-friendly websites and applications in many different industries and countries.
                    </p>
                </div>
                <div className="mt-12" data-aos="zoom-in-up">
                    <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row questrial-regular">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="w-full text-center border-[1px] border-[#E4A4BD] bg-[#E0DFDD] px-12 py-4 rounded-l duration-150 outline-none shadow-sm focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                                    <h4 className="text-4xl text-black  font-semibold">{item.data}</h4>
                                    <p className="mt-3 text-black uppercase">{item.title}</p>
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