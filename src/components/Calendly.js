import { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import AOS from "aos";
import "aos/dist/aos.css";

function Calendly() {
    useEffect(() => {
        AOS.init({duration:1200})
      })
  return (
<div data-aos="fade-up">
<div class="">
          <h2 class="mb-5 text-3xl font-bold md:text-5xl text-center text-white">Book a Consultation Call</h2>
          <div class="mx-auto w-full max-w-lg" >
          </div>
        </div>
      <InlineWidget url="https://calendly.com/ruthzota/initialmeeting" />
    </div>
  )
}

<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

export default Calendly
