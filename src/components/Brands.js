import { useEffect } from 'react';

import JavaScriptLogo from '../assets/JavaScript-Logo.svg'
import TypeScriptLogo from '../assets/TypescriptLogo.png'
import VueLogo from '../assets/VueLogo.png'
import FigmaLogo from '../assets/Figmalogo.png'
import AngularLogo from '../assets/Angular_logo.png'
import HTMLLogo from '../assets/HTML.png'
import CSSLogo from '../assets/CSS3_logo.png'
import WordPressLogo from '../assets/WordPress_Logo.png'
import AOS from "aos";
import "aos/dist/aos.css";


function Brands() {

  useEffect(() => {
    AOS.init({duration:1200})
  })

  return (
    <div className="py-14 bg-[#CBC7C1]" id='Tech'>
    <div className="max-w-screen-xl mx-auto px-4 md:px-8" data-aos="fade-up">
        <h3 className="questrial-regular text-5xl text-black text-center uppercase">
            Tech Stacks
        </h3>
        <div className="mt-6" data-aos="fade-up">
            <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                {/* LOGO 1 */}
              <li className="w-16">
            
              </li>

                {/* LOGO 2 */}
                <li className="w-14">
                <img src={JavaScriptLogo} alt='logo'/>
              </li>

                {/* LOGO 3 */}
                <li className="w-14">
              <img src={TypeScriptLogo} alt='logo'/>
              </li>

                {/* LOGO 4 */}
                <li className="w-14">
              <img src={VueLogo} alt='logo'/>
              </li>



              {/* LOGO 4 */}
              <li className="w-16">
              <img src={AngularLogo} alt='logo'/>
              </li>

              {/* LOGO 4 */}
              <li className="w-14">
              <img src={HTMLLogo} alt='logo'/>
              </li>

              {/* LOGO 4 */}
              <li className="w-14">
              <img src={CSSLogo} alt='logo'/>
              </li>


              {/* LOGO 4 */}
               <li className="w-10">
              <img src={FigmaLogo} alt='logo'/>
              </li>

              {/* LOGO 4 */}
              <li className="w-14">
              <img src={WordPressLogo} alt='logo'/>
              </li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Brands