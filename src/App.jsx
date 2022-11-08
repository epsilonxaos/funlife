import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/Home';

function App() {
	return (
		<Router>
			<Header />

			<main>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</main>

			<Footer />
		</Router>
	)
}

export default App
