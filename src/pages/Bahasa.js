import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LongList from '../assets/Bahasa.png'

function Bahasa() {
  return (
        <section>
            <Nav/>
            <div className="max-w-screen-1xl mx-auto px-4 py-8 gap-12 md:px-8 bg-[#E0DFDD] questrial-regular">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold mx-auto md:text-4xl uppercase">
                    Bahasa - Realtime Translation Website
                    </h1>

                    <p className="max-w-2xl mx-auto">
                    I created a website version of the Bahasa - Realtime Translation App with the goal of increasing its awareness among a broader audience. The website version improves cross-platform compatibility. Users can access the app's services from desktop computers, laptops, tablets, and smartphones, ensuring convenience and flexibility in their choice of device.
                    </p>

                </div>
                <div className="mt-10 p-14 bg-[#E4A4BD]">
                    <img src={LongList} className="w-full shadow-lg border" alt="" />
                </div>
            </div>
            <Footer/>
        </section>

  )
}

export default Bahasa