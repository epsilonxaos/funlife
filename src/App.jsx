import {
	Switch,
	Route,
	useLocation,
	BrowserRouter as Router,
} from 'react-router-dom';

import { LocomotiveScrollProvider, ScrollInstance } from "react-locomotive-scroll";
import { useRef } from "react";
// import 'locomotive-scroll/dist/locomotive-scroll.css'

import Header from './components/header';
import Footer from './components/footer';
import ScrollHandler from './components/scrollHandler';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';


import './components/i18n';

import { useData } from './components/useData';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loading from './pages/Loading';


function App() {	
	const {pathname} = useLocation();
	const { data } = useData('/api/website');
	const containerRef = useRef(null);
	
	if (!data) return <AnimatePresence mode="wait"><Loading /></AnimatePresence> ;

	const dataHeader = {sociales: {'instagram': data.url_instagram, 'titleShow': true}};
	const dataFooter = {sociales: {'instagram': data.url_instagram}, correo: data.email, telefonos: {usa: data.telefono_usa, mx: data.telefono_mx}}
	const dataHome = {videos: {desk: data.video, movil: data.video_movil}}
	
	return (
		<AnimatePresence mode="wait">
			<LocomotiveScrollProvider
				options={{ smooth: true }}
				containerRef={containerRef}
				watch={ [pathname] }
				location={pathname}
				onLocationChange={scroll => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
				onUpdate={(init) => {
					if(window.innerWidth < 768) init.destroy();
				}}
				
			>
				
				<Header {...dataHeader} />

				<main data-scroll-container ref={containerRef}>
					<Switch>
						<Route exact path="/">
							<Home {...dataHome} />
						</Route>
						<Route path="/gallery">
							<Gallery />
						</Route>
						<Route path="/services">
							<Services />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
					</Switch>
				<Footer {...dataFooter} />
				</main>

			</LocomotiveScrollProvider>
		</AnimatePresence>
	)
}

export default App;

