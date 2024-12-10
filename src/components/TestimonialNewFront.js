import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TestimonialNewFront() {
	useEffect(() => {
		AOS.init({ duration: 1200 });
	});
	return (
		<section class="py-4 bg-[#E0DFDD]">
			<div
				className="max-w-screen-xl mx-auto px-4 md:px-8 relative sm:text-center my-6"
				data-aos="fade-up-right"
			>
				<div class="container mx-auto xl:px-32">
					<div class="grid items-center lg:grid-cols-2">
						<div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
							<div
								class="relative z-[1] block   px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.01
								),0_10px_20px_-2px_rgba(0,0,0,0.01)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.4)] dark:shadow-black/20 md:px-12 lg:-mr-14 questrial-regular"
								data-aos="fade-up-left"
							>
								<h2 class="mb-2 text-3xl text-primary dark:text-primary-400 text-white font-extrabold uppercase">
									Boomtown Coffee
								</h2>
								<p class="mb-4 text-[#E4A4BD]">
									Coffee Shop Houston
								</p>
								<p class="mb-6 text-neutral-100 dark:text-neutral-300">
									Our coffee shop's website got a fantastic
									makeover, thanks to Ruth and her design and
									development skills!
								</p>
								<p class="mb-6 text-neutral-100 dark:text-neutral-300">
									The site now perfectly captures the cozy
									ambiance of our shop and is a breeze to
									navigate. The designer's attention to detail
									and aesthetics has made our online presence
									truly inviting. We couldn't be happier with
									the results. Thanks for a job well done!
								</p>
								<p className="text-[#E4A4BD]">
									~Maria Koya (Business Manager)
								</p>
								<ul class="flex lg:justify-center text-yellow-300">
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 96 960 960"
											class="w-5 text-primary dark:text-primary-400"
										>
											<path
												fill="currentColor"
												d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
											/>
										</svg>
									</li>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 96 960 960"
											class="w-5 text-primary dark:text-primary-400"
										>
											<path
												fill="currentColor"
												d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
											/>
										</svg>
									</li>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 96 960 960"
											class="w-5 text-primary dark:text-primary-400"
										>
											<path
												fill="currentColor"
												d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
											/>
										</svg>
									</li>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 96 960 960"
											class="w-5 text-primary dark:text-primary-400"
										>
											<path
												fill="currentColor"
												d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
											/>
										</svg>
									</li>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 96 960 960"
											class="w-5 text-primary dark:text-primary-400"
										>
											<path
												fill="currentColor"
												d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
											/>
										</svg>
									</li>
								</ul>
							</div>
						</div>
						<div class="md:mb-12 lg:mb-0" data-aos="zoom-in-down">
							<img
								src="https://images.squarespace-cdn.com/content/v1/5b994c0e9f877027273bc99b/1553463512051-8Q4EFMGU0DL77WGSH0QS/Web-0434-2+-+Copy+-+Copy.jpg?format=2500w"
								class="lg:rotate-[6deg] w-full shadow-lg dark:shadow-black/20 grayscale"
								alt="coffee"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TestimonialNewFront;
