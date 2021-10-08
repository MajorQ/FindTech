import logo from './logo.svg';
import './App.css';

const App = () => {
	return (
		<div className="App font-body">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div className="text-blue-600">
					Almost before we knew it, we had left the ground.
				</div>
			</header>
		</div>
	);
};

export default App;
