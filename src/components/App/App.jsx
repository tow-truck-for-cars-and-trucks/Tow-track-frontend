import logo from '../../assets/logo.svg';
import './App.scss';

console.log(123);

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<img src={logo} className="app-logo" alt="logo"></img>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="app-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
