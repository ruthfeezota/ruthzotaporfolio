import React from 'react'

function Stats() {
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
    <section className="py-28 bg-gray-900">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-red-300 text-3xl font-semibold sm:text-4xl">
                        My Freelance Network Explands
                    </h3>
                    <p className="mt-3 text-gray-300">
                        I've helped clients build user-friendly websites and applications in many different industry and countries.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="w-full text-center bg-gray-800 px-12 py-4 rounded-lg sm:w-auto">
                                    <h4 className="text-4xl text-white font-semibold">{item.data}</h4>
                                    <p className="mt-3 text-gray-400 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>

        </section>

  )
}

export default Stats