import React from 'react';
import ActionBanner from './components/ActionBanner';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';




function App() {
	return (
	  <div>

		<Hero/>
		<Brands/>
		<Stats/>
		<ActionBanner/>
		<Services/>
		<Projects/>
		<Contact/>
		<Testimonial/>
		<Footer/>

	  </div>
	);
  }

  export default App;

