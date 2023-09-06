import React from 'react';
import ActionBanner from './components/ActionBanner';
import Brands from './components/Brands';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';




function App() {
	return (
	  <div>

		<Hero/>
		<Brands/>
		<Stats/>
		<Services/>
		<Contact/>
		<ActionBanner/>
		<Testimonial/>
		<Footer/>

	  </div>
	);
  }

  export default App;

