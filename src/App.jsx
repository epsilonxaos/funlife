import {
	Switch,
	Route,
	useLocation,
	useHistory
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Header from './components/header';
import Footer from './components/footer';
import ScrollHandler from './components/scrollHandler';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	const location = useLocation();

	return (
		<AnimatePresence>
			<ScrollHandler />
			<Header />

			<main>
				<Switch location={location} key={location.pathname}>
					<Route exact path="/" key={'home'}>
						<Home />
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

			<Footer />
		</AnimatePresence>
	)
}

export default App
