import { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import AOS from "aos";
import "aos/dist/aos.css";
import GreenDot from '../assets/GreenDot1.gif'
import GreenDot2 from '../assets/GreenDot2.gif'

function Calendly() {
    useEffect(() => {
        AOS.init({duration:1200})
      })
  return (
<div data-aos="fade-up">
<div class="text-center">
          <h2 class="mb-5 text-3xl font-bold sm:text-4xl text-center text-red-300">Book a Consultation Call</h2>

  <div className="flex items-center justify-center mb-2 md:mb-0">
  <img src={GreenDot2} className="w-4"/>
    <p className="text-white ml-1">Available now</p>
</div>

          <div class="mx-auto w-full max-w-lg" >
          </div>
        </div>
      <InlineWidget url="https://calendly.com/ruthzota/initialmeeting" />
    </div>
  )
}

<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

export default Calendly
