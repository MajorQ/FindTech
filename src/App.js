import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import './App.css';
import AboutUs from './pages/AboutUs';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route path="/about-us" component={AboutUs} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
