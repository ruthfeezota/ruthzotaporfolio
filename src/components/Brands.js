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
    <div className="py-14 bg-gray-900" id='Tech'>
    <div className="max-w-screen-xl mx-auto px-4 md:px-8" data-aos="fade-up">
        <h3 className="font-bold text-md text-gray-200 text-center">
            Tech Stacks
        </h3>
        <div className="mt-6" data-aos="fade-up">
            <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                {/* LOGO 1 */}
              <li className="w-16">
            
              </li>

                {/* LOGO 2 */}
                <li className="w-14">
                <img src={JavaScriptLogo}/>
              </li>

                {/* LOGO 3 */}
                <li className="w-14">
              <img src={TypeScriptLogo}/>
              </li>

                {/* LOGO 4 */}
                <li className="w-14">
              <img src={VueLogo}/>
              </li>



              {/* LOGO 4 */}
              <li className="w-16">
              <img src={AngularLogo}/>
              </li>

              {/* LOGO 4 */}
              <li className="w-14">
              <img src={HTMLLogo}/>
              </li>

              {/* LOGO 4 */}
              <li className="w-14">
              <img src={CSSLogo}/>
              </li>


              {/* LOGO 4 */}
               <li className="w-10">
              <img src={FigmaLogo}/>
              </li>

              {/* LOGO 4 */}
              <li className="w-14">
              <img src={WordPressLogo}/>
              </li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Brands