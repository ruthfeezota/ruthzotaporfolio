// import React from 'react'
// import Hero from '../components/Hero';
// import Brands from '../components/Brands';
// import Stats from '../components/Stats';
// import TestimonialNewFront from '../components/TestimonialNewFront';
// import ActionBanner from '../components/ActionBanner';
// import Projects from '../components/Projects';
// import Services from '../components/Services';
// import Testimonial from '../components/Testimonial';
// import Footer from '../components/Footer';
// import NewContact from '../components/NewContact';
// import Calendly from '../components/Calendly';
// import ContactPage from './ContactPage';
// import Contact from '../components/Contact';
// import Nav from '../components/Nav';
// import TopBanner from '../components/TopBanner';
// import Navbar from '../components/Navbar';


// function Home() {
//   return (
//     <div className='overscroll-none bg-[#E0DFDD]'>
//         <title> Home Page | Austin website design & development services. Specializing in WordPress, Shopify, Wix, and custom coding. Get a free quote today!</title>
//             <meta
//                 name="description"
//                 content="Austin web designer specializing in Figma, Adobe XD, and custom coding. Crafting pixel-perfect, responsive websites."
//             />
//             <meta
//                 name="keywords"
//                 content="Austin website design, Austin web design company, Austin website development, Austin web developer, Website design Austin TX, Web design services Austin, Website development Austin, Austin website design agency
// Small business website design Austin, Ecommerce website design Austin, WordPress website design Austin, Shopify website design Austin, Wix website design Austin, Custom website design Austin, WordPress developer Austin
// Shopify expert Austin, Wix designer Austin, Figma web design Austin, Adobe XD design Austin, Illustrator web design Austin
// Website wireframing Austin, Responsive web design Austin, Mobile-friendly, website design Austin, Website redesign Austin, Website maintenance Austin, SEO friendly website design Austin , Website accessibility Austin, Website designer near me Austin, Web design companies in Austin, Best, website designers Austin, Top web developers Austin, Austin web design services, North Austin website design, Ecommerce Shopify website design Austin, WordPress website development for small business Austin, Figma and Adobe XD website design Austin, Custom coded website design Austin TX"
//             />
 
//        <TopBanner/>
//         <Nav/>
//         <Hero/>
//         <Brands/>
//         <ActionBanner/>
//         <TestimonialNewFront/>
//         <Stats/>
//         <Projects/>
//         <Services/>
//         <NewContact/>
//         <Testimonial/>
//          <TopBanner/>
//         <Footer/>
//     </div>

//   )
// }

// export default Home



import React, { useEffect, useState  } from "react";
import RuthPhoto from "../assets/RuthPhoto.jpg";
import RuthFace from "../assets/Ruth'sFace.png";
import WoaomLogo from "../assets/WoaomLogo.png";
import LilyLocksLogo from "../assets/LilyLocksLogo.png";
import RuthBuildsBrandsLogo from "../assets/RuthBuildsBrandsLogo.png";

const pink = "#E4A4BD";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title =
      "Ruth Zota | E-commerce Entrepreneur & Brand Builder";
  }, []);

  const ventures = [
    {
      number: "01",
      label: "PARENT COMPANY",
      title: "Woaom LLC",
      description:
        "A product-driven company focused on developing, manufacturing, and growing consumer brands.",
      status: "OPERATING",
      href: "https://woaom.com"
    },
    {
      number: "02",
      label: "FLAGSHIP BRAND",
      title: "LilyLocks",
      description:
        "A hair accessories and beauty brand serving cheerleaders, teams, and beauty customers.",
      status: "ESTABLISHED BRAND",
      href: "https://lilylocks.com"
    },
    {
      number: "03",
      label: "NEXT VENTURE",
      title: "September 2027",
      description:
        "One new consumer brand selected through product research, testing, and market validation.",
      status: "IN DEVELOPMENT",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#E0DFDD] text-black">
      <title>Ruth Zota | E-commerce Entrepreneur &amp; Brand Builder</title>

<meta
  name="description"
  content="Ruth Zota is an e-commerce entrepreneur and founder of Woaom LLC, the company behind LilyLocks. Follow her journey building and testing consumer brands through RuthBuildsBrands."
/>

      {/* TOP ANNOUNCEMENT BAR */}
      <div
        className="px-4 py-3 text-center text-xs leading-relaxed sm:text-sm font-bold"
        style={{ backgroundColor: pink }}
      >
  
        Building brands, testing ideas, and creating what’s next.
      </div>

      {/* NAVIGATION */}
<header className="relative z-50 px-5 md:px-10">
  <nav className="mx-auto flex max-w-screen-xl items-center justify-between gap-4 py-6">
    {/* LOGO */}
    <a
      href="#home"
      onClick={() => setMenuOpen(false)}
      className="shrink-0 text-lg font-bold tracking-tight sm:text-xl"
    >
      RUTH ZOTA.
    </a>

    {/* DESKTOP NAVIGATION */}
    <div className="hidden items-center gap-8 text-sm md:flex">
      <a href="#ventures" className="transition-opacity hover:opacity-50">
        Ventures
      </a>
      <a href="#experiments" className="transition-opacity hover:opacity-50">
        Experiments
      </a>
      <a href="#about" className="transition-opacity hover:opacity-50">
        About
      </a>
      <a href="#method" className="transition-opacity hover:opacity-50">
        The Method
      </a>
      <a href="#contact" className="transition-opacity hover:opacity-50">
        Contact
      </a>
    </div>

    {/* MOBILE HAMBURGER BUTTON */}
    <button
      type="button"
      className="flex h-11 w-11 items-center justify-center md:hidden"
      onClick={() => setMenuOpen((open) => !open)}
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={menuOpen}
      aria-controls="mobile-navigation"
    >
      {menuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      )}
    </button>
  </nav>

  {/* MOBILE DROPDOWN MENU */}
  {menuOpen && (
    <div
      id="mobile-navigation"
      className="absolute left-0 right-0 top-full border-t border-black/10 bg-[#E0DFDD] px-5 pb-6 pt-3 shadow-lg md:hidden"
    >
      <div className="mx-auto flex max-w-screen-xl flex-col">
        {[
          ["Ventures", "#ventures"],
          ["Experiments", "#experiments"],
          ["About", "#about"],
          ["The Method", "#method"],
          ["Contact", "#contact"],
        ].map(([label, href], index) => (
          <a
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="border-b border-black/10 py-4 text-base transition-colors hover:pl-2 hover:text-[#B75D83]"
          >
            <span className="mr-3 text-sm text-[#B75D83]">
              0{index + 1}
            </span>
            {label}
          </a>
        ))}
      </div>
    </div>
  )}
</header>





{/* HERO */}
<section
  id="home"
  className="px-5 pb-20 pt-10 md:px-10 md:pb-24 md:pt-14"
>
  <div className="mx-auto max-w-screen-xl">
    <p className="mb-8 text-xs uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.25em]">
      Entrepreneur · Founder · Brand Builder
    </p>

    {/* THREE EQUAL COLUMNS */}
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-8 lg:gap-12">

      {/* COLUMN 1: HEADLINE */}
      <div className="min-w-0">
        <h1 className="text-[17vw] font-medium uppercase leading-[0.85] tracking-[-0.075em] sm:text-7xl md:text-6xl lg:text-8xl xl:text-[100px]">
          I BUILD
          <br /> BRANDS THAT SCALE<span style={{ color: pink }}>.</span>
        </h1>
      </div>

      {/* COLUMN 2: IMAGE */}
      <div className="min-w-0">
        <img
          src={RuthFace}
          alt="Ruth Zota"
          className="aspect-[4/5] w-full object-cover object-center grayscale shadow-md"
        />
      </div>

      {/* COLUMN 3: INTRODUCTION */}
      <div className="flex min-w-0 flex-col justify-center">
        <h2 className="text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-5xl lg:text-7xl">
          Ruth
          <br />
          Zota<span style={{ color: pink }}>.</span>
        </h2>

        <p className="mt-4 text-xs uppercase tracking-[0.12em] sm:text-sm">
          Dallas, Texas
        </p>

        <p className="mt-6 max-w-sm text-base leading-7 lg:text-2xl lg:leading-8">
          I build consumer brands, test product opportunities,
          and turn promising ideas into real businesses.
          Founder of Woaom LLC and the creator behind
          RuthBuildsBrands.
        </p>

        <div className="mt-6 flex flex-col items-start gap-4">
          <a
            href="#ventures"
            className="border-b border-black pb-2 text-sm uppercase transition-opacity hover:opacity-50"
          >
            Explore my ventures ↓
          </a>
        </div>
      </div>

    </div>
  </div>
</section>


  
{/* BUSINESS ECOSYSTEM */}
<section className="px-5 py-12 md:px-10 md:py-16">
  <div className="mx-auto max-w-screen-xl">
    <h2 className="text-center text-lg font-medium uppercase sm:text-xl">
      My Business Ecosystem
    </h2>

    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-x-16">

      {/* WOAOM LLC LOGO */}
      <a
        href="https://woaom.com"
        aria-label="Woaom LLC"
        className="flex h-20 w-36 items-center justify-center sm:h-24 sm:w-44"
      >
        <img
          src={WoaomLogo}
          alt="Woaom LLC"
          className="max-h-full max-w-full object-contain"
        />
      </a>

      {/* LILYLOCKS LOGO */}
      <a
        href="https://lilylocks.com"
        aria-label="LilyLocks"
        className="flex h-20 w-36 items-center justify-center sm:h-24 sm:w-44"
      >
        <img
          src={LilyLocksLogo}
          alt="LilyLocks"
          className="max-h-full max-w-full object-contain"
        />
      </a>




      {/* RUTHBUILDSBRANDS LOGO */}
      <a
        href="https://www.instagram.com/ruthbuildsbrands/"
        target="_blank"
        rel="noreferrer"
        aria-label="RuthBuildsBrands"
        className="flex h-20 w-36 items-center justify-center sm:h-24 sm:w-44"
      >
        <img
          src={RuthBuildsBrandsLogo}
          alt="RuthBuildsBrands"
          className="max-h-full max-w-full object-contain"
        />
      </a>

      {/* UPCOMING BRAND LAUNCH */}
      <div
        className="flex min-h-16 items-center justify-center border px-5 py-4 text-center text-sm uppercase tracking-wide sm:text-base"
        style={{ borderColor: pink }}
      >
        Next Launch · 2027
      </div>

    </div>
  </div>
</section>


      {/* ABOUT / FOUNDER INTRO */}
      <section
        id="about"
        className="px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto grid max-w-screen-xl items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <img
              src={RuthPhoto}
              alt="Ruth Zota, founder and entrepreneur"
              className="aspect-[4/3] w-full object-cover grayscale"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.25em]">
              A Little About Me
            </p>

            <h2 className="mt-4 text-4xl font-medium uppercase leading-tight tracking-tight sm:text-5xl">
              Business meets
              <br />
              creativity.
            </h2>

            
<p className="mt-5 text-base leading-7 sm:text-lg sm:leading-8">
  I'm Ruth Zota, a U.S. Army veteran, MBA candidate, and
  e-commerce entrepreneur with a background in UX engineering
  and digital product development. I combine technical
  expertise, customer experience, and hands-on product
  development to build and grow consumer brands.
</p>

<p className="mt-4 text-base leading-7 sm:text-lg sm:leading-8">
  Through Woaom LLC, LilyLocks, and RuthBuildsBrands,
  I'm building a portfolio of businesses designed for
  long-term growth.
</p>


            <a
              href="#experiments"
              className="mt-6 inline-block border-b border-black pb-2 text-sm uppercase sm:text-base"
            >
              Discover what I'm building →
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED VENTURE LAB */}
      <section
        id="experiments"
        className="px-5 py-16 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-screen-xl">
          <p className="mb-8 text-center text-lg uppercase sm:text-xl">
            The Next Big Thing
          </p>

          <div className="grid items-center md:grid-cols-5">
            <div className="relative z-10 bg-black px-6 py-10 text-white sm:px-8 md:col-span-3 md:px-10 md:py-12">
              <p
                className="text-xs uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.25em]"
                style={{ color: pink }}
              >
                RuthBuildsBrands
              </p>

              <h2 className="mt-5 text-4xl font-medium uppercase leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
                What if you
                <br />
                tested it first?
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                What if you could test a business before going all in?
                I document my process of researching product
                opportunities, testing consumer brands, evaluating
                demand, and deciding which ideas deserve to become
                real businesses.
              </p>

              <p
                className="mt-6 text-xs uppercase leading-6 tracking-wider sm:text-sm sm:tracking-widest"
                style={{ color: pink }}
              >
                Research → Test → Validate → Launch
              </p>

              <a
                href="https://www.youtube.com/channel/UCO-bsYGHLZbT1yl1QeHfJJA"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-block border-b pb-2 text-sm uppercase sm:text-base"
                style={{ borderColor: pink }}
              >
                Follow the experiments ↗
              </a>
            </div>

            <div className="relative -mt-2 flex min-h-[280px] flex-col justify-between bg-[#D3B9C1] p-6 sm:p-8 md:col-span-2 md:-ml-5 md:mt-12 md:min-h-[340px] md:p-10">
              <p className="text-xs uppercase leading-6 tracking-[0.15em] sm:text-sm sm:tracking-[0.2em]">
                Currently in development
              </p>

              <div>
                <p className="text-base uppercase sm:text-lg">
                  The next venture
                </p>

                <h3 className="mt-3 text-4xl font-medium leading-none tracking-tight sm:text-5xl md:text-6xl">
                  September
                  <br />
                  2027
                </h3>

                <p className="mt-5 max-w-xs text-base leading-7 sm:text-lg sm:leading-8">
                  One new consumer brand. Selected through
                  research, testing, and market validation.
                </p>
              </div>

              <p className="text-xs uppercase tracking-widest sm:text-sm">
                More to come.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* THE METHOD */}
      <section
        id="method"
        className="px-5 py-16 md:px-10 md:py-20"
      >
        <div className="mx-auto max-w-screen-xl">
          <p className="text-center text-xs uppercase tracking-[0.2em] sm:text-sm">
            How I Build
          </p>

          <h2 className="mt-4 text-center text-4xl font-medium uppercase tracking-tight sm:text-5xl md:text-6xl">
            The Method<span style={{ color: pink }}>.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-center text-base leading-7 sm:text-lg sm:leading-8">
            I believe in testing ideas, learning from customers,
            and investing in products with real potential.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Research",
                description:
                  "Identify product opportunities and understand the market before investing.",
              },
              {
                number: "02",
                title: "Test",
                description:
                  "Bring ideas to market on a small scale and see how customers respond.",
              },
              {
                number: "03",
                title: "Validate",
                description:
                  "Use real customer feedback and sales data to evaluate demand.",
              },
              {
                number: "04",
                title: "Scale",
                description:
                  "Invest in the products and brands that demonstrate real potential.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="flex min-h-[220px] flex-col border p-5 transition-colors duration-300 hover:bg-[#D9D5D2] sm:min-h-[250px] sm:p-6"
                style={{ borderColor: pink }}
              >
                <span className="text-3xl font-medium sm:text-4xl">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-medium uppercase tracking-wide sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-base leading-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

{/* VENTURE PORTFOLIO */}
<section
  id="ventures"
  className="px-5 py-16 md:px-10 md:py-20"
>
  <div className="mx-auto max-w-screen-xl">
    <h2 className="text-center text-3xl font-medium uppercase sm:text-4xl">
      The Portfolio
    </h2>

    <p className="mt-4 text-center text-base leading-7 sm:text-lg">
      The companies and brands I'm building.
    </p>

    <div className="mt-10 grid items-stretch gap-4 md:grid-cols-3">
      {ventures.map((venture, index) => (
        <a
          key={venture.number}
          href={venture.href}
          className="group block h-full"
          aria-label={`Explore ${venture.label}`}
        >
          <article
            className={`relative flex h-full min-h-[380px] flex-col justify-between p-6 transition-colors duration-300 group-hover:bg-[#D4D0CE] sm:min-h-[420px] sm:p-8 ${
              index === 1
                ? "bg-[#D4D0CE]"
                : index === 2
                ? "bg-[#E9D4DC]"
                : "bg-[#D9D8D6]"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-xs uppercase tracking-wider sm:text-sm">
                {venture.label}
              </span>

              <span className="text-sm">
                {venture.number}
              </span>
            </div>

            <div className="my-8">
              <p className="text-sm uppercase tracking-wider sm:text-base">
                {index === 0
                  ? "The company"
                  : index === 1
                  ? "The flagship"
                  : "Coming soon"}
              </p>

              {index === 0 ? (
                <img
                  src={WoaomLogo}
                  alt="Woaom LLC"
                  className="mt-4 h-auto max-h-16 max-w-full object-contain object-left"
                />
              ) : index === 1 ? (
                <img
                  src={LilyLocksLogo}
                  alt="LilyLocks"
                  className="mt-4 h-auto max-h-20 max-w-full object-contain object-left"
                />
              ) : (
                <h3 className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  The Next
                  <br />
                  Brand.
                </h3>
              )}

              <p className="mt-5 text-base leading-7 sm:text-lg sm:leading-8">
                {venture.description}
              </p>
            </div>

            <div
              className="mt-auto border-t pt-4 text-xs uppercase tracking-wider sm:text-sm"
              style={{ borderColor: pink }}
            >
              {venture.status}
            </div>
          </article>
        </a>
      ))}
    </div>
  </div>
</section>



    


      {/* CONTACT */}
      <section
        id="contact"
        className="px-5 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid items-end gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.25em]">
                Let's Connect
              </p>

              <h2 className="mt-5 text-5xl font-medium uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
                Let's Build
                <br />
                Something<span style={{ color: pink }}>.</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 sm:text-lg sm:leading-8">
                Interested in brand partnerships, product development,
                or connecting with a fellow entrepreneur? I'd love
                to hear from you.
              </p>
            </div>

            <div className="md:justify-self-end">
              <a
                href="https://www.linkedin.com/in/ruthzota/"
                className="inline-flex items-center gap-3 border px-6 py-4 text-sm uppercase transition-colors hover:bg-black hover:text-white sm:text-base"
                style={{ borderColor: pink }}
              >
                Get in Touch <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER ANNOUNCEMENT */}
      <div
        className="px-4 py-3 text-center text-xs leading-relaxed sm:text-sm font-bold"
        style={{ backgroundColor: pink }}
      >
        Building brands, testing ideas, and creating what’s next.
      </div>

    

{/* FOOTER */}
<footer className="px-5 py-8 md:px-10">
  <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-5 md:flex-row">
    <p className="text-sm font-medium">
      RUTH ZOTA.
    </p>

    <p className="text-center text-sm uppercase tracking-wider">
      E-commerce Entrepreneur &amp; Brand Builder
    </p>

    <div className="flex items-center gap-5">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/ruthbuildsbrands/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram - RuthBuildsBrands"
        title="Instagram"
        className="transition-opacity hover:opacity-60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
        </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/channel/UCO-bsYGHLZbT1yl1QeHfJJA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube - RuthBuildsBrands"
        title="YouTube"
        className="transition-opacity hover:opacity-60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2.5" y="5" width="19" height="14" rx="4" />
          <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
        </svg>
      </a>

      {/* Pinterest */}
      <a
        href="https://www.pinterest.com/ruthbuildsbrands/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pinterest - RuthBuildsBrands"
        title="Pinterest"
        className="transition-opacity hover:opacity-60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2a10 10 0 0 0-3.64 19.31c-.02-.78 0-1.72.19-2.57l1.31-5.55s-.33-.66-.33-1.63c0-1.53.89-2.67 2-2.67.94 0 1.4.7 1.4 1.55 0 .95-.6 2.38-.91 3.7-.26 1.11.55 2.02 1.64 2.02 1.97 0 3.3-2.53 3.3-5.53 0-2.28-1.54-3.99-4.34-3.99-3.16 0-5.13 2.36-5.13 4.99 0 .91.27 1.55.69 2.04.19.23.22.32.15.58l-.22.89c-.07.29-.29.39-.54.28-1.5-.61-2.2-2.25-2.2-4.09 0-3.04 2.56-6.68 7.65-6.68 4.08 0 6.77 2.95 6.77 6.11 0 4.18-2.32 7.31-5.73 7.31-1.15 0-2.23-.62-2.6-1.32l-.75 2.99c-.23.87-.68 1.74-1.09 2.42A10 10 0 1 0 12 2z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ruthzota/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn - Ruth Zota"
        title="LinkedIn"
        className="transition-opacity hover:opacity-60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 10v7" />
          <path d="M8 7v.01" />
          <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
          <path d="M12 10v7" />
        </svg>
      </a>
    </div>
  </div>

  <div className="mx-auto mt-5 flex max-w-screen-xl justify-center md:justify-end">
    <a
      href="https://www.youtube.com/channel/UCO-bsYGHLZbT1yl1QeHfJJA"
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs uppercase tracking-wider transition-opacity hover:opacity-60"
    >
      RuthBuildsBrands ↗
    </a>
  </div>
</footer>


    </main>
  );
}

export default Home;
