import { useEffect } from "react";
import RuthPhoto from "../assets/RuthPhoto.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function ActionBanner() {
	useEffect(() => {
		AOS.init({ duration: 1200 });
	});

	return (
		<section className="py-36 bg-[#E0DFDD] questrial-regular" id="About">
			<div
				className="max-w-screen-xl mx-auto md:px-8"
				data-aos="zoom-in-down"
			>
				<div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
					<div className="flex-1 sm:hidden lg:block">
						<img
							src={RuthPhoto}
							className="md:max-w-md grayscale"
							alt="Digital Product Design Austin"
						/>
					</div>
					<div
						className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-3xl"
						data-aos="zoom-in-down"
					>
						<p className="text-black text-3xl font-bold sm:text-4xl uppercase">
							Austin-Based 3D Designer & Creative Developer
						</p>
						<p className="mt-3 text-black">
							Hello, I am Ruth Zota, a passionate creative developer
							with a keen eye for ux design and a knack for programming
							intuitive user interfaces. With a strong background
							in user experience design and frontend programming,
							I specializes in bringing digital visions to life
							using React, Angular, and Vue.js. Whether you need a
							stunning website, a complex web application, or a
							captivating user interface, My expertise in Figma, Adobe Creative Suite and Blender ensures that your project
							will be both visually appealing and functionally
							superior.
							<span className="font-medium uppercase">
								{" "}
								Let's build something amazing together!
							</span>
						</p>
						<a
							href="https://cal.com/ruthzota/15min"
							className="inline-flex gap-x-1 items-center text-black hover:text-red-400 font-medium duration-150 active:bg-[#E0DFDD] outline-none shadow-md focus:shadow-none sm:mt-0 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-2 border-red-200 p-2"
						>
							Book 15min Intro Call
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5"
							>
								<path
									fillRule="evenodd"
									d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
						{/* <a
							href="https://cal.com/ruthzota/30min"
							className="inline-flex gap-x-1 items-center text-black hover:text-red-400 font-medium duration-150 active:bg-[#E0DFDD] outline-none shadow-md focus:shadow-none sm:mt-0 sm:ml-3 sm:w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-2 border-red-200 p-2"
						>
							Book 30min Call
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5"
							>
								<path
									fillRule="evenodd"
									d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
									clipRule="evenodd"
								/>
							</svg>
						</a> */}
					</div>
				</div>
			</div>
			<div
				className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
				style={{
					background:
						"linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
				}}
			></div>
		</section>
	);
}

export default ActionBanner;
