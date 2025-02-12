import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Figma() {
	return (

		<main>
    <title> Figma Page | Austin web designer specializing in Figma, Adobe XD, and custom coding. Crafting pixel-perfect, responsive websites.</title>
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



		<div className="bg-gray-900">
			<Nav />
			<div className="space-y-5 max-w-4xl mx-auto text-center">
				<h2 className="text-4xl text-red-300 font-bold mx-auto md:text-4xl pt-2">
					Figma Samples
				</h2>
			</div>

			<div className="flex items-center justify-center mt-6">
				<iframe
					styles="border: 1px solid rgba(0, 0, 0, 0.1);"
					width="1400"
					height="780"
					src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fm6ThRycL5xKMSQVjenSrQ3%2FRuthZota.com-Sample-Work%3Ftype%3Ddesign%26node-id%3D8-2%26t%3DjtjW61rUWSl1UY8a-1%26scaling%3Dcontain%26page-id%3D1%253A19390%26starting-point-node-id%3D8%253A2%26show-proto-sidebar%3D1%26mode%3Ddesign"
					allowfullscreen
				></iframe>
			</div>
			<Footer />
		</div>
		</main>
	);
}

export default Figma;
