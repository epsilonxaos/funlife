import {
	Switch,
	Route,
	useLocation,
	useHistory
} from 'react-router-dom';
import { useState, useEffect, useRef } from "react";

import { AnimatePresence } from 'framer-motion';

import Header from './components/header';
import Footer from './components/footer';
import ScrollHandler from './components/scrollHandler';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import Loading from './pages/Loading';

import { useData } from './components/useData';


function App() {
	const location = useLocation();
	const { data } = useData('/api/website');
	const [test, setTest] = useState(false);

	// return <Loading />
	// setTimeout(() => {
	// 	setTest(true)
	// }, 2000);
	// if (!test) return <Loading />;

	// return 'hola'

	if (!data) return 'Loading';


	const dataHeader = {sociales: {'instagram': data.url_instagram}};
	const dataFooter = {sociales: {'instagram': data.url_instagram}, correo: data.email, telefonos: {usa: data.telefono_usa, mx: data.telefono_mx}}
	const dataHome = {videos: {desk: data.video, movil: data.video_movil}}

	const containerRef = useRef(null)

	return (
		<AnimatePresence exitBeforeEnter>
			<ScrollHandler key={'scrolls'} />
			<Header key={'header'} {...dataHeader} />

			<main>
				<Switch location={location} key={location.pathname}>
					<Route exact path="/" key={'home'}>
						<Home {...dataHome} />
					</Route>
					<Route path="/gallery" key={'galeria'}>
						<Gallery />
					</Route>
					<Route path="/services" key={'servicios'}>
						<Services />
					</Route>
					<Route path="/about" key={'nosotros'}>
						<About />
					</Route>
					<Route path="/contact" key={'contacto'}>
						<Contact />
					</Route>
				</Switch>
			</main>

			<Footer key={'fooetr'} {...dataFooter} />
		</AnimatePresence>

