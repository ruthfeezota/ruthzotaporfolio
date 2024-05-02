import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


function Checklist() {
	useEffect(() => {
		AOS.init({duration:1200})
	  })
  return (
    <section className="py-14 bg-gray-900">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8" >
                <div className="sm:hidden lg:block lg:max-w-xl" data-aos="fade-up">
                    <img src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="rounded-lg" alt="" />
                </div>
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">


                    <div class="mx-auto  lg:mx-0" data-aos="fade-up">
					<p class="text-3xl text-gray-200 font-semibold md:text-4xl mb-6 mt-2">
						My expertise can help you
					</p>

					<ul class="space-y-4 text-left text-white dark:text-gray-200">
						<li class="flex items-center space-x-4 rtl:space-x-reverse">
							<svg
								class="flex-shrink-0 w-3.5 h-3.5 mb-6 text-red-300 dark:text-green-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 16 12"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 5.917 5.724 10.5 15 1.5"
								/>
							</svg>
							<span>
								Increase efficiency:{" "}
								<span class="font-semibold text-gray-300 dark:text-white">
									Automate manual tasks, eliminate data silos,
									and optimize processes.
								</span>
							</span>
						</li>
						<li class="flex items-center space-x-4 rtl:space-x-reverse">
							<svg
								class="flex-shrink-0 w-3.5 h-3.5  text-red-300 dark:text-green-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 16 12"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 5.917 5.724 10.5 15 1.5"
								/>
							</svg>
							<span>
								Improve data visibility:{" "}
								<span class="font-semibold text-gray-300 dark:text-white">
									Gain real-time insights and make data-driven
									decisions.
								</span>
							</span>
						</li>
						<li class="flex items-center space-x-4 rtl:space-x-reverse">
							<svg
								class="flex-shrink-0 w-3.5 h-3.5 mb-6 text-red-300 dark:text-green-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 16 12"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 5.917 5.724 10.5 15 1.5"
								/>
							</svg>
							<span>
								Boost user adoption:{" "}
								<span class="font-semibold text-gray-300 dark:text-white">
									Design user-friendly interfaces that drive
									engagement and user satisfaction.
								</span>
							</span>
						</li>
						<li class="flex items-center space-x-4 rtl:space-x-reverse">
							<svg
								class="flex-shrink-0 w-3.5 h-3.5 mb-6 text-red-300 dark:text-green-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 16 12"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 5.917 5.724 10.5 15 1.5"
								/>
							</svg>
							<span>
								Reduce development costs:{" "}
								<span class="font-semibold text-gray-300 dark:text-white">
									Leverage the Power Platform's
									low-code/no-code capabilities for faster and
									more cost-effective solutions.
								</span>
							</span>
						</li>
					</ul>
				</div>
                </div>
            </div>
        </section>
  )
}

export default Checklist
