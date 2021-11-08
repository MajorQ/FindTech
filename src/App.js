import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import './App.css';
import AboutUs from './pages/AboutUs';
import BrowsePage from './pages/BrowsePage';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/about-us" component={AboutUs} />
					<Route path="/browse" component={BrowsePage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
