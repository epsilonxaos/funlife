import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import ScrollHandler from './components/scrollHandler';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	return (
		<Router>
			<ScrollHandler />
			<Header />

			<main>
				<Switch>
					<Route exact path="/">
						<Home />
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
			</main>

			<Footer />
		</Router>
	)
}

export default App
