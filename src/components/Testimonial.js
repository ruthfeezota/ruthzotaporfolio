import { useState } from "react"
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonial() {
    useEffect(() => {
        AOS.init({duration:1200})
      })
    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin Breken",
            title: "Founder - JOSYS ",
            quote: "I had the privilege of working with Ruth on our business website, and I am absolutely thrilled with the results. Ruth demonstrated an impressive blend of creativity and technical expertise, bringing our vision to life in ways we couldn't have imagined. "
        },
        {
            avatar: "https://www.littlesphotography.com/wp-content/uploads/2019/02/Seasy-2117-819x1024.jpg",
            name: "Elizabeth Soto",
            title: "Business Owner - Bettersheabutter.com",
            quote: "Our website is PERFECT! Every element of the website was thoughtfully crafted, from the elegant color scheme to the user-friendly navigation. It's clear that Ms. Ruth prioritizes both aesthetics and user experience."
        },
        {
            avatar: "https://images.squarespace-cdn.com/content/v1/5cfb0f8783523500013c5639/1684363549672-2HO6BQNQJF9V65TJNGDC/Professional-headshots-vancouver--2.jpg",
            name: "Karim Smith",
            title: "Senior UI engineer - TechCrunch",
            quote: "Ruth worked with our team as a UX designer. She was responsive, receptive to feedback, and proactive in solving any challenges that arose during the development process. Her professionalism and commitment."
        },
    ]
  return (
    <section className="py-14 bg-gray-900" id='Testimonials'>
    <div className="max-w-screen-xl mx-auto px-4 md:px-8" data-aos="fade-up">
        <div className="max-w-xl sm:text-center md:mx-auto">
            <h3 className="text-red-300 text-3xl font-semibold sm:text-4xl">
                See what my clients are saying
            </h3>
            <p className="mt-3 text-gray-200">
                Past clients provides feedback from their experience with my professionalism and quality of my work.
            </p>
        </div>
        <div className="mt-12" data-aos="fade-up">
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