import React from "react";
import PowerAppsAbout from "../../assets/PowerAppsAbout.jpg";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Horizontal.css'

function AboutUsPower() {
	useEffect(() => {
        AOS.init({duration:1200})
      })
	const features = [
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
					/>
				</svg>
			),
			title: "Power Apps",
			desc: "Building custom canvas and model-driven apps for efficient data management and automation.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
					/>
				</svg>
			),

			title: "Power Automate",
			desc: "Automating repetitive tasks and workflows for increased efficiency.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
					/>
				</svg>
			),
			title: "Power BI",
			desc: "Delivering insightful data visualizations and reports for informed decision-making",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
					/>
				</svg>
			),
			title: "Power Pages",
			desc: "Creating dynamic and engaging portals for internal and external collaboration.",
		},
	];

	return (
		<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
			{/* <img
				src={PowerAppsAbout}
				alt=""
				class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
			/> */}
			{/* <div
				class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
				aria-hidden="true"
			>
				<div
					class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					styles="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
			<div
				class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
				aria-hidden="true"
			>
				<div
					class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					styles="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div> */}
			<div class="mx-auto max-w-7xl px-6 lg:px-8" data-aos="fade-up">
				<div class="mx-auto max-w-2xl lg:mx-0">
					<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Are you ready to streamline your business processes and
						boost productivity?
					</h2>
					<p class="mt-6 text-lg leading-8 text-gray-300">
						I'm Ruth Zota, a certified Power Apps developer with 4
						years of experience as a Power Platform consultant. I
						specialize in creating custom solutions that leverage
						the full potential of the Power Platform, including:
					</p>
				</div>
				<div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none" data-aos="fade-up">
					<div className="relative mt-12">
						<ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
							{features.map((item, idx) => (
								<li
									key={idx}
									className="backdrop-blur-sm bg-black/30 space-y-3 p-4 rounded-lg border-0"
								>
									<div className="text-red-300 pb-3">
										{item.icon}
									</div>
									<h4 className="text-lg text-white font-semibold">
										{item.title}
									</h4>
									<p className="text-white">{item.desc}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				</div>
		</div>
	);
}

export default AboutUsPower;
