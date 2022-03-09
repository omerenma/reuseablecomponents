import logo from "./logo.svg";
import "./App.css";
import {Buttons, TextField} from '../src/components/index'

function App() {
	return (
		<div className="App">
			<header className="App-header">
        <Buttons cancel>Delete</Buttons>
        <TextField />
      </header>
		</div>
	);
}

export default App;
