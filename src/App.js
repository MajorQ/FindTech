import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import './App.css';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" component={LandingPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
