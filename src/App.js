import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import ResultPage from './pages/ResultPage';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import BrowsePage from './pages/BrowsePage';
import QuestionsPage from './pages/QuestionPage';
import ScrollToTop from './components/core/ScrollToTop';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route path="/about-us" component={AboutUsPage} />
						<Route path="/browse" component={BrowsePage} />
						<Route path="/question" component={QuestionsPage} />
						<Route path="/result" component={ResultPage} />

						{/* TODO: 404 not found */}
						<Route path="/" component={LandingPage} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default App;
