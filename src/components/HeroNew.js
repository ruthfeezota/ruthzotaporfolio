import React from 'react'
import Typed from 'react-typed';

function HeroNew() {
  return (

<section>
	<div class="bg-black text-white py-20">
		<div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			<div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				<h1 class="text-3xl md:text-3xl p-2 text-red-300 tracking-loose">Hello, I'm Ruth</h1>
				<h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2 p-2">A <Typed
          className= 'md:text-5xl sm:text-4xl text-3xl md:pl-4 pl-2 text-red-300'
            strings={['UX/UI Developer', 'UX Designer', 'Product Marketer', 'Frontend Developer', 'Drupal Developer']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
				</h2>

				<p class="text-sm md:text-base text-gray-50 mb-4">I build accessible, inclusive products and digital experiences for the web.</p>
				<a href="/"
					class="bg-transparent hover:bg-red-300 text-red-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-red-300 hover:border-transparent">
					My Portfolio</a>
			</div>
			<div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div class="h-48 flex flex-wrap content-center">
					<div>
						<img alt="Portfolio" class="mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"/></div>
						<div>
							<img alt="Portfolio" class="inline-block mt-24 md:mt-0 p-8 md:p-0"  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"/></div>
							<div>
								<img alt="Portfolio" class="mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"/></div>
							</div>
						</div>
					</div>
				</div>
</section>
  )
}

export default HeroNew