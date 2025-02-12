import { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PauseLogo from "../assets/PauseHero.png";
import LawLady from "../assets/Lawyer1.png";
import Bahasa from "../assets/BahasaCover.png";
import CanDrop from "../assets/candrop.png"
import Kongsberg from "../assets/Kongsberg.jpg"

import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
	useEffect(() => {
		AOS.init({ duration: 1200 });
	});

	return (

		<main>
		<title> Portfolio Page | Austin web designer specializing in Figma, Adobe XD, and custom coding. Crafting pixel-perfect, responsive websites.</title>
	  <meta
		  name="description"
		  content="Top-rated website design company in Austin. Serving small businesses with affordable and effective web solutions."
	  />
	  <meta
		  name="keywords"
		  content="Austin website design, Austin web design company, Austin website development, Austin web developer, Website design Austin TX, Web design services Austin, Website development Austin, Austin website design agency
	Small business website design Austin, Ecommerce website design Austin, WordPress website design Austin, Shopify website design Austin, Wix website design Austin, Custom website design Austin, WordPress developer Austin
	Shopify expert Austin, Wix designer Austin, Figma web design Austin, Adobe XD design Austin, Illustrator web design Austin
	Website wireframing Austin, Responsive web design Austin, Mobile-friendly, website design Austin, Website redesign Austin, Website maintenance Austin, SEO friendly website design Austin , Website accessibility Austin, Website designer near me Austin, Web design companies in Austin, Best, website designers Austin, Top web developers Austin, Austin web design services, North Austin website design, Ecommerce Shopify website design Austin, WordPress website development for small business Austin, Figma and Adobe XD website design Austin, Custom coded website design Austin TX"
	  /> 
		<div>
			<Nav />

			<section class="bg-[#E0DFDD] questrial-regular">
				<div
					class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-14 lg:py-12 bg-[#E0DFDD]"
					data-aos="fade-up"
				>
					<div class="flex flex-col items-center">
						<div class="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16 text-black">
							<h2 class="mb-4 mt-6 text-3xl font-extrabold md:text-5xl uppercase">
								Projects
							</h2>
							<div class="mx-auto mt-4 max-w-[528px]">
								<p class="">
									View my UX/UI Design and development
									projects
								</p>
							</div>
						</div>
						<div
							class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
							data-aos="fade-up"
						>
							<div>
								<a
									href="/Pause"
									class="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2"
								>
									<img
										alt=""
										src={PauseLogo}
										class="inline-block h-[300px] w-[400px] rounded-2xl object-cover"
									/>
									<div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
										<div class="mb-4 flex flex-col items-start gap-4">
											<p class="text-xl font-bold md:text-2xl text-black">
												Pause
											</p>
										</div>
									</div>
								</a>
							</div>

								
							<div>
								<a
									href="https://candropsproject1.web.app/" target="_blank"  rel="noreferrer"
									class="h-ax-w-full flex flex-col gap-4 rounded-md px-4 md:px-2"
								>
									<img
										alt=""
										src={CanDrop}
										class="inline-block h-[300px] w-[400px] rounded-2xl object-cover"
									/>
									<div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
										<div class="mb-4 flex flex-col items-start gap-4">
											<p class="text-xl font-bold md:text-2xl text-black">
											Blazing Energy (3D Frontend Project)
											</p>
										</div>
									</div>
								</a>
							</div>







							<div>
								<a
									href="/ShepherdLaw"
									class="h-ax-w-full flex flex-col gap-4 rounded-md px-4 md:px-2"
								>
									<img
										alt=""
										src={LawLady}
										class="inline-block h-[300px] w-[400px] rounded-2xl object-cover"
									/>
									<div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
										<div class="mb-4 flex flex-col items-start gap-4">
											<p class="text-xl font-bold md:text-2xl text-black">
												Shepherd Law
											</p>
										</div>
									</div>
								</a>
							</div>




							<div>
								<a
									href="/Bahasa"
									class="max-w-full flex flex-col gap-4 rounded-md px-4 md:px-2"
								>
									<img
										alt=""
										src={Bahasa}
										class="inline-block h-[300px] w-[400px] rounded-2xl object-cover"
									/>
									<div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
										<div class="mb-4 flex flex-col items-start gap-4">
											<p class="text-xl font-bold md:text-2xl text-black">
												Bahasa
											</p>
										</div>
									</div>
								</a>
							</div>


							<div>
								<a
									href="/Kongberg"
									class="max-w-full flex flex-col gap-4 rounded-md px-4 md:px-2"
								>
									<img
										alt=""
										src={Kongsberg}
										class="inline-block h-60 w-full rounded-2xl object-cover"
									/>
									<div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
										<div class="mb-4 flex flex-col items-start gap-4">
											<p class="text-xl font-bold md:text-2xl text-black">
												Kongsberg Digital
											</p>
										</div>
									</div>
								</a>
							</div> 
							{/*  */}
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
		</main>
	);
}

export default Portfolio;

// import Leaf from "../assets/LeafPhoto.jpg";
// import Cookbook from "../assets/CookbookCover.jpg";
// import Kongsberg from "../assets/Kongsberg.jpg";

{
	/* <div>
          <a href="/Cookbook" class="max-w-full flex flex-col gap-4 rounded-md px-4 md:px-2">
            <img alt="" src={Cookbook} class="inline-block h-60 w-full rounded-2xl object-cover" />
            <div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
              <div class="mb-4 flex flex-col items-start gap-4">
                <p class="text-xl font-bold md:text-2xl text-black">Cookbook</p>
              </div>

            </div>
          </a>
        </div> */
}

{
	// <div>
	// 							<a
	// 								href="/Kongberg"
	// 								class="max-w-full flex flex-col gap-4 rounded-md px-4 md:px-2"
	// 							>
	// 								<img
	// 									alt=""
	// 									src={Kongsberg}
	// 									class="inline-block h-60 w-full rounded-2xl object-cover"
	// 								/>
	// 								<div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
	// 									<div class="mb-4 flex flex-col items-start gap-4">
	// 										<p class="text-xl font-bold md:text-2xl text-black">
	// 											Kongsberg Digital
	// 										</p>
	// 									</div>
	// 								</div>
	// 							</a>
	// 						</div> 
}
