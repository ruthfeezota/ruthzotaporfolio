import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LongList from '../assets/Cookbook.jpg'

function Cookbook() {
  return (
        <section>
            <Nav/>
            <div className="max-w-screen-1xl mx-auto px-4 py-8 gap-12 text-white md:px-8 bg-gray-900">
                <div className="space-y-5 max-w-4xl mx-auto text-center ">
                    <h1 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                    Cookbook
                    </h1>

                    <p className="max-w-2xl mx-auto">
                    Are you a carnivore at heart? Does the sight of sizzling steaks, succulent ribs, and perfectly grilled burgers set your taste buds tingling? If you're passionate about all things meat, you've just stumbled upon your culinary haven – Cookbook, the ultimate blog website that caters exclusively to your carnivorous cravings!
                    <br/>
                    <br/>

🍔 Feast Your Eyes on Meaty Masterpieces 🥩
<br/>

At Cookbook, we understand that meat lovers are a special breed, and we're here to celebrate your love for meat in all its glorious forms. Our virtual meat haven is a visual feast for your eyes, where every click is a journey into the world of carnivorous delight. Our collection of mouthwatering meat photos will have you drooling in no time!

                    </p>

                </div>
                <div className="mt-14 p-24">
                    <img src={LongList} className="w-full shadow-lg rounded-lg border" alt="" />
                </div>
            </div>
            <Footer/>
        </section>

  )
}

export default Cookbook