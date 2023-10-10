import { useEffect } from 'react';
import LeafIphone from '../assets/LeafIphone.png'
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectsSample() {
    useEffect(() => {
        AOS.init({duration:1200})
      })
  return (
    <section className="py-14 bg-gray-900">
    <div className="max-w-screen-xl mx-auto md:px-8" data-aos="fade-up">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
                <img src={LeafIphone} className="md:max-w-lg sm:rounded-lg" alt="" />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl" data-aos="fade-up">

                <p className="text-white text-3xl font-semibold sm:text-4xl">
                Interviews
                </p>
                <p className="mt-3 text-gray-200">
                At the discovery phase of this project, our on the ground product manager conducted user interviews in order to get a better understanding of what virtual bank mobile app users wanted in a banking app. Here are questions I tasked her to ask.
                </p>
                <p className="mt-3 text-gray-200">User expectations and impressions questions:</p>

                <ul className="mt-3 ml-8 text-gray-200">
                    <li>What is your first impression of this app?</li>
                    <li>What do you think this app does or will do?</li>
                    <li>Where do you start?</li>
                    <li>What would keep you from using this app?</li>
                    <li>Do you feel this product is similar to another one?</li>
                    <li>Do you trust this product?</li>
                </ul>
                <p className="mt-3 text-gray-200">We also asked task driven questions.</p>


            </div>
        </div>
    </div>
</section>
  )
            }

export default ProjectsSample