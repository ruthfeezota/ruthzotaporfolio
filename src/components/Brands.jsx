import React from 'react';
import RectLogo from '../assets/React-icon.png'
import JavaScriptLogo from '../assets/JavaScript-Logo.svg'
import TypeScriptLogo from '../assets/TypescriptLogo.png'
import VueLogo from '../assets/VueLogo.png'
import FigmaLogo from '../assets/Figmalogo.png'


function Brands() {
  return (
    <div className="py-14 bg-white ">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-md text-gray-600 text-center">
            Tech Stack 5+ Years of Experience
        </h3>
        <div className="mt-6">
            <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                {/* LOGO 1 */}
              <li className="w-16">
              <img src={RectLogo}/>
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
              <li className="w-10">
              <img src={FigmaLogo}/>
              </li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Brands