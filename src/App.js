import logo from "./logo.svg";
import "./App.css";
import {Buttons} from '../src/components/index'

function App() {
	return (
		<div className="App">
			<header className="App-header">
        <Buttons cancel>Delete</Buttons>
      </header>
		</div>
	);
}

export default App;
