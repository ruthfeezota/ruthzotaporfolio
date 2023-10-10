import { useState } from "react";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const tabsData = [
    {
      label: "Ux Developer",
      content:
        "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
    },
    {
      label: "That Text",
      content:
        "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
    },
  ];


function WorkHistory() {
  useEffect(() => {
    AOS.init({duration:1200})
  })
    const [activeTabIndex, setActiveTabIndex] = useState(0);


  return (

    <div className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8" data-aos="fade-up">

    <div className="flex space-x-3 border-b text-center" data-aos="fade-up">
      {/* Loop through tab data and render button for each. */}
      {tabsData.map((tab, idx) => {
        return (
          <button
            key={idx}
            className={`py-2 border-b-4 transition-colors duration-300 ${
              idx === activeTabIndex
                ? "border-teal-500"
                : "border-transparent hover:border-gray-200"
            }`}
            // Change the active tab on click.
            onClick={() => setActiveTabIndex(idx)}>
            {tab.label}
          </button>
        );
      })}
    </div>
    {/* Show active tab content. */}
    <div className="py-4" data-aos="fade-up">
      <p>{tabsData[activeTabIndex].content}</p>
    </div>
  </div>
  )
}

export default WorkHistory