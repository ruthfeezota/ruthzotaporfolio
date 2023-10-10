import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LongList from '../assets/homepage 2.webp'

function Brillianetor() {
  return (
        <section>
            <Nav/>
            <div className="max-w-screen-1xl mx-auto px-4 py-8 gap-12 text-white md:px-8 bg-gray-900">
                <div className="space-y-5 max-w-4xl mx-auto text-center ">
                    <h1 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                    Brillianetor
                    </h1>

                    <p className="max-w-2xl mx-auto">
                    Brillianetor is a start-up that develops a unique patented Social Artificial Intelligence (social AI) technology platform which provides machines, bots, and robots the human like ability to be aware of and collaborate with each other and humans. Thus, enabling organizations to deploy machines, bots, and robots with never-before-seen capabilities
                    <br/>
                    <br/>

The project
 
Brillianetor had been well-funded before and is now going on a second funding round and needed to communicate their message better in order to be clear about their product in front of the potential investors. A lot of startups are developing different kinds of Ai but only Brillianetor creates this kind of social Ai technology, so it was important to emphasize their unique niche. My goal was to design a clear website that conveys their original product's idea at best. 
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

export default Brillianetor