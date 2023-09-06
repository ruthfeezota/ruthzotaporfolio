import { useState } from "react"

function Testimonial() {
    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin Breken",
            title: "Founder - JOSYS ",
            quote: "I had the privilege of working with Ruth on our business website, and I am absolutely thrilled with the results. Ruth demonstrated an impressive blend of creativity and technical expertise, bringing our vision to life in ways we couldn't have imagined. "
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Elizabeth Soto",
            title: "Business Owner - Bettersheabutter.com",
            quote: "Our website is PERFECT! Every element of the website was thoughtfully crafted, from the elegant color scheme to the user-friendly navigation. It's clear that Ms. Ruth prioritizes both aesthetics and user experience."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Karim Smith",
            title: "Senior UI engineer - TechCrunch",
            quote: "Ruth worked with our team as a UX designer. She was responsive, receptive to feedback, and proactive in solving any challenges that arose during the development process. Her professionalism and commitment."
        },
    ]
  return (
    <section className="py-14 bg-gray-900">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
            <h3 className="text-red-300 text-3xl font-semibold sm:text-4xl">
                See what my clients are saying
            </h3>
            <p className="mt-3 text-gray-200">
                Past clients provides feedback from their experience with my professionalism and quality of my work.
            </p>
        </div>
        <div className="mt-12">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    testimonials.map((item, idx) => (
                        <li key={idx} className="bg-gray-50 p-4 rounded-xl">
                            <figure>
                                <div className="flex items-center gap-x-4">
                                    <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                    <div>
                                        <span className="block text-gray-800 font-semibold">{item.name}</span>
                                        <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="mt-6 text-gray-700">
                                        {item.quote}
                                    </p>
                                </blockquote>
                            </figure>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
</section>
    )
}

export default Testimonial