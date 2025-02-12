import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Affinity from "../assets/Affinity.png";
import Evaluation from "../assets/Evaluation.png";
import Proto1 from "../assets/Prototype1.png";
import Proto2 from "../assets/Prototype2.png";
import Proto3 from "../assets/Prototype3.png";
import Proto4 from "../assets/Prototype4.png";
import UserTest from "../assets/UserTesting.png";
import Sketch from "../assets/Sketch2.jpg";
import PauseBanner from "../assets/PauseHero.png";
import PauseMini from "../assets/PauseMini.png";

function Pause() {
	const stats = [
		{
			data: "2",
			title: "UX Designers",
		},
		{
			data: "3",
			title: "Web Developers",
		},
		{
			data: "100+",
			title: "User Testers",
		},
		{
			data: "2",
			title: "Research Studies Conducted",
		},
	];
	return (

		<main>
		<title> Pause Page | Austin web designer specializing in Figma, Adobe XD, and custom coding. Crafting pixel-perfect, responsive websites.</title>
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

		<div class="overflow-visible">
			<Nav />
			<div class="bg-[#E0DFDD] questrial-regular text-black">
				<section class="block ">
					<div class="bg-[#E0DFDD] questrial-regular text-black">
						<div class="py-16 md:py-14 lg:py-12 px-5 md:px-10">
							<div class="max-w-[800px] mb-6 md:mb-10 lg:mb-12 mx-auto w-full max-w-7xl">
								<h1 class="font-bold text-4xl uppercase md:text-6xl">
									Pause
								</h1>
								<p className=" py-5 font-bold">
									Symptom tracking application for women*
								</p>
							</div>
						</div>
					</div>
					<div class="bg-[#E0DFDD] questrial-regular">
						<div class="py-12 md:py-16 lg:py-10 px-5 md:px-10">
							<div class="relative grid w-full items-start justify-start max-[991px]:flex-col max-[991px]:flex grid-cols-[480px] lg:grid-cols-[0.5fr_0.75fr_480px] gap-4 mx-auto max-w-7xl">
								<a
									href="/"
									class="inline-block max-w-full text-black"
								>
									<img
										src={PauseBanner}
										alt="/"
										class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
									/>
								</a>
								<div class="w-full max-w-xs max-[991px]:max-w-[560px]">
									<h3 class="font-bold text-4xl uppercase md:text-3xl">
										Main Idea
									</h3>
									<div class="mb-6 mt-6 w-16 [border-top:1px_solid_rgb(0,_0,_0)]"></div>
									<p class="text-black text-sm sm:text-lg">
										We aimed to develop a health management
										application that assists women in
										identifying whether they are
										experiencing perimenopause, long COVID,
										or both. ‘PAUSE’ aims to help women
										better understand their health, connect
										with others with shared experiences, and
										enable symptom tracking to provide
										physicians with accurate health data for
										diagnosis.
									</p>
									<p className="font-bold text-black mt-4 text-[10px]">
										*The words “women” and “woman”
										throughout this page refer to
										individuals with a uterus and who may
										experience perimenopause
									</p>
								</div>
								<img
									src={Sketch}
									alt=""
									class="absolute right-0 bottom-0 inline-block object-cover max-[991px]:relative max-[991px]:mt-12 max-[991px]:max-w-[480px] h-auto lg:h-[480px] w-full lg:w-[480px]"
								/>
							</div>
						</div>
					</div>
				</section>
					<div class="px-5 md:px-10 bg-[#E0DFDD] questrial-regular">
						<div class="mx-auto w-full max-w-7xl">
							<div class="py-16 md:py-24 lg:py-32">
								<div class="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
									<div class="flex flex-col items-center justify-center rounded-xl bg-[#f7f6f2] p-6 max-[991px]:[grid-area:2/1/3/2]">
										<img
											src={PauseMini}
											alt="/"
											class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
										/>
									</div>
									<div class="max-[991px]:max-w-[720px]">
										<h2 class="mb-4 mt-6 pb-4 text-3xl font-bold text-5xl uppercase">
											THE BRIEF
										</h2>
										<div class="mb-6 max-w-[528px] md:mb-10 lg:mb-12">
											<p class="text-xl text-black">
												The aim of this activity is to
												design, prototype and test an
												application to support people
												managing long COVID , based on
												the analysis of user needs drawn
												from existing resources and
												theory.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				<section>
					<div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-14 lg:py-12">
						<div class="flex flex-col items-center">
							<div class="mb-8 text-center md:mb-12 lg:mb-16">
								<h2 class="mb-4 mt-6 font-bold text-4xl uppercase">
									Research + Ideation
								</h2>
								<div class="mx-auto mt-4">
									<p class="text-black text-[18px]">
										The group did secondary research looking
										through papers on digital intervention
										and behaviour change theories as well as
										interviews and anecdotes from people who
										experienced long COVID. This is where we
										were finding a large group of women who
										had experienced long COVID,
										perimenopause, or both, and felt they
										were not supported nor provided with
										enough resources to understand what was
										going on in their body. Many women got
										misdiagnosed for one or the other, which
										exacerbated symptoms and often prolonged
										recovery. We felt that this issue was a
										gap in the existing pool of long COVID
										and COVID management applications. Thus,
										we decided to do a second round of
										secondary research but with a focus on
										this user group. We then collated our
										research into major themes through an
										affinity diagram. We created an
										evaluation matrix of the various pain
										points and desired features that these
										women expressed.{" "}
									</p>
								</div>
							</div>

							<div class="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols- ">
								<div>
									<a
										href="/"
										class="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2"
									>
										<img
											alt=""
											src={Affinity}
											class="inline-block h-60 w-full rounded-2xl object-cover"
										/>
										<div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
											<div class="mb-4 flex flex-col items-start gap-4">
												<p class="text-xl font-bold md:text-2xl">
													Affinity Diagram from
													Secondary Research
												</p>
											</div>
										</div>
									</a>
								</div>

								<div>
									<a
										href="/"
										class="h-ax-w-full flex flex-col gap-4 rounded-md px-4 md:px-2"
									>
										<img
											alt=""
											src={Evaluation}
											class="inline-block h-60 w-full rounded-2xl object-cover"
										/>
										<div class="flex h-full w-full flex-col items-start justify-around px-0 py-4">
											<div class="mb-4 flex flex-col items-start gap-4">
												<p class="text-xl font-bold md:text-2xl">
													Evaluation Matrix
													[Desirability x Feasibility]
												</p>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="block">
					<div class="py-10 md:py-14 lg:py-12 mx-auto w-full max-w-7xl px-5 md:px-10">
						<div class="mx-auto flex-col flex max-w-3xl items-center text-center mb-4 md:mb-10 lg:mb-10">
							<div class="text-center">
								<h2 class="font-bold text-4xl uppercase">
									Dialogue Support & Social Support
								</h2>
							</div>
						</div>
						<div
							class="relative flex-col flex items-center justify-center bg-contain bg-center bg-no-repeat pt-10"
							styles="background-image: url('https://assets.website-files.com/6458c625291a94a195e6cf3a/648825fca218588cb636c341_Group%2048114.png');"
						>
							<div class="relative flex w-full justify-around gap-4 py-4">
								<a
									class="relative flex-1 flex flex-col max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#E4A4BD]  text-black p-6 text-left align-top max-[479px]:block rounded-md"
									href="#w-tabs-2-data-w-pane-0"
								>
									<h5 class="text-xl font-bold">
										1. Rewards
									</h5>
									<div class="text-sm sm:text-sm">
										{" "}
										Users can accumulate points and gain
										badges for logging their symptoms
										consistently, for completing courses and
										for engaging in community forums, and
										then use their points to grow their
										virtual garden{" "}
									</div>
								</a>
								<a
									class="relative flex-col flex-1 flex max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#E4A4BD]  text-black  p-6 text-left align-top max-[479px]:block rounded-md"
									tabindex="-1"
									href="#w-tabs-2-data-w-pane-1"
								>
									<h5 class="text-xl font-bold">
										2. Reminders
									</h5>
									<div class="text-sm sm:text-sm">
										Users receive scheduled notifications to
										ensure they log all their symptoms and
										menstrual cycle changes consistently
									</div>
								</a>
								<a
									class="relative flex-col flex-1 flex max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#E4A4BD]  text-black p-6 text-left align-top max-[479px]:block rounded-md"
									tabindex="-1"
									href="#w-tabs-2-data-w-pane-2"
								>
									<h5 class="text-xl font-bold">
										3. Suggestion & Liking{" "}
									</h5>
									<div class="text-sm sm:text-sm">
										The app provides suggestions for
										activities that could help alleviate
										symptoms. The application was designed
										to have an appealing and sleek colour
										scheme for women.
									</div>
								</a>
							</div>
							<div class="relative flex w-full justify-around gap-4">
								<a
									class="relative flex-1 flex flex-col max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#E4A4BD]  text-black p-6 text-left align-top max-[479px]:block rounded-md"
									href="#w-tabs-2-data-w-pane-0"
								>
									<h5 class="text-xl font-bold">
										4. Normative influence
									</h5>
									<div class="text-sm sm:text-sm">
										{" "}
										The app provides a platform for women
										experiencing similar health
										conditions/symptoms of PM and LC,
										creating a community for sharing advice
										and personal stories.{" "}
									</div>
								</a>
								<a
									class="relative flex-col flex-1 flex max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#E4A4BD]  text-black  p-6 text-left align-top max-[479px]:block rounded-md"
									tabindex="-1"
									href="#w-tabs-2-data-w-pane-1"
								>
									<h5 class="text-xl font-bold">
										5. Cooperation
									</h5>
									<div class="text-sm sm:text-sm">
										The ‘connect’ feature provides a hub for
										cooperation where women can post
										questions, blogs or stories about their
										health experiences and enter discussions
									</div>
								</a>
								<a
									class="relative flex-col flex-1 flex max-w-full items-start gap-2 border border-solid border-[#d9d9d9] bg-[#E4A4BD]  text-black p-6 text-left align-top max-[479px]:block rounded-md"
									tabindex="-1"
									href="#w-tabs-2-data-w-pane-2"
								>
									<h5 class="text-xl font-bold">
										6. Recognition{" "}
									</h5>
									<div class="text-sm sm:text-sm">
										Public recognition is implemented
										through the badge rewards system, where
										users can observe others’ levels of
										engagement
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>

				
					<div class="px-5 md:px-10 ">
							<div class="py-10 md:py-14 lg:py-12">
              <div class="flex flex-col items-center">
										<h3 class="mb-4 mt-6 font-bold text-4xl uppercase item-center">
											User Personas
										</h3>
										<div class="mb-6 max-w-[600] md:mb-10 lg:mb-12">
											<p class="text-[18px] text-black">
												We came up with three women who
												had varying lifestyles and
												personalities, which shape the
												way in which they may use the
												application and what their
												primary goal for using it would
												be.
												For example, Abigail is very
												introverted and feels quite
												isolated. Her main driving
												factor for using PAUSE would be
												to connect with others and talk
												or read about the experiences of
												people going through a similar
												situation. Sasha, on the
												other hand, is an extremely busy
												career-driven woman who wants
												simple and understandable data
												visualization so she can bring
												it to her doctor for a better
												understanding of the changes in
												her body.
												Michel is very health anxious
												and wants to know every detail
												on what is going on in her body
												and what she can do to manage
												her symptoms.{" "}
											</p>
										</div>
									</div>
									<div class="">
										<img
											src="https://images.squarespace-cdn.com/content/v1/630cfe95d3f7360ad19bdd4f/a591d678-aae2-4622-919e-f077657d1a0c/Michel.png"
											alt="/"
											class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover p-5"
										/>

										<img
											src="https://images.squarespace-cdn.com/content/v1/630cfe95d3f7360ad19bdd4f/b1b8f634-6faf-45ed-b1d1-6d196d0c5fb9/Abigail+Chen.png"
											alt="/"
											class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover p-5"
										/>

										<img
											src="https://images.squarespace-cdn.com/content/v1/630cfe95d3f7360ad19bdd4f/0c1953d8-c7a1-4931-8e6c-e7a7503750ab/Sasha.png"
											alt="/"
											class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover p-5"
										/>
									</div>
								</div>
							</div>
			

				<section class="block bg-white">
					<div class="py-16 md:py-24 lg:py-12 mx-auto w-full max-w-7xl px-5 md:px-10">
						<div class="mx-auto flex-col flex max-w-3xl items-center text-center mb-8 md:mb-12 lg:mb-16">
							<div class="text-center">
								<h1 class="font-bold mb-4 font-bold text-4xl uppercase">
									Prototype
								</h1>
							</div>
						</div>
						<img
							src={Proto1}
							alt=""
							class="inline-block  w-full object-cover"
						/>
						<img
							src={Proto2}
							alt=""
							class="inline-block  w-full object-cover"
						/>
						<img
							src={Proto3}
							alt=""
							class="inline-block  w-full object-cover"
						/>
					</div>
				</section>

				<section class="block bg-[#E0DFDD]">
					<div class="px-5 md:px-10">
						<div class="mx-auto w-full max-w-7xl">
							<div class="py-16 md:py-24 lg:py-32">
								<div class="mx-auto max-w-3xl text-center">
									<h2 class="mb-3 mt-6 pb-6 font-bold text-5xl uppercase md:text-3xl lg:mb-4 ">
										What Users Said About the Site
									</h2>
								</div>
								<section className="py-6">
									<div className="max-w-screen-xl mx-auto px-4 md:px-8">
										<ul className="flex flex-col items-center justify-center gap-x-12 gap-y-10 sm:flex-row sm:flex-wrap md:gap-x-24">
											{stats.map((item, idx) => (
												<li
													key={idx}
													className="text-center"
												>
													<h4 className="text-4xl text-gray-700 font-semibold">
														{item.data}
													</h4>
													<p className="mt-3 text-gray-600 font-medium">
														{item.title}
													</p>
												</li>
											))}
										</ul>
									</div>
								</section>
							</div>
						</div>
					</div>
				</section>
					<div class="px-5 md:px-10">
						<div class="mx-auto w-full max-w-7xl">
							<div class="py-10 md:py-14 lg:py-12">
								<div class="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
									<div class="max-[1500px]:max-w-[1000px]">
										<h2 class="mb-4 mt-6 pb-4 font-bold text-5xl uppercase">
											User Testing
										</h2>
									</div>
									<div class="">
										<img
											src={UserTest}
											alt=""
											class="mx-auto inline-block h-full w-full  object-cover"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

				<div class="relative">
					<img
						src=""
						alt=""
						class="absolute inset-[0%] -z-[1] inline-block h-full w-full max-w-full object-cover"
					/>
					<div class="px-5 md:px-10">
						<div class="mx-auto w-full max-w-7xl">
							<div class="py-16 md:py-24 lg:py-32">
								<div class="grid grid-cols-1 items-center gap-8 max-[991px]:justify-items-start sm:gap-20 lg:grid-cols-2">
									<div class="max-[991px]:max-w-[720px]">
										<h2 class="mb-4 mt-6 pb-4 font-bold text-5xl uppercase">
											v.2 | Refine the Designs
										</h2>
										<div class="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
											<ul class="list-disc pl-10 mt-5 mb-6 max-w-[528px] md:mb-10 lg:mb-22  text-black ">
												<p>
													We incorporated the feedback
													from the user testing and
													heuristic evaluation to
													create a more intuitive and
													seamless design. We made
													several main changes:
												</p>
                        <div className="ml-10 mt-4">
												<li>Making the text bigger</li>
												<li>
													Reducing number of clicks
													required to log symptom and
													its intensity
												</li>
                        </div>
											</ul>
										</div>
									</div>
									<div class="">
										<img
											src={Proto4}
											alt="CTA"
											class="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</div>
		</main>
	);
}

export default Pause;
