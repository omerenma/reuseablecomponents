import logo from "./logo.svg";
import "./App.css";
import {
	Buttons,
	TextFields,
	TextFieldWithIcon,
} from "../src/components/index";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Buttons cancel>Delete</Buttons>
				<TextFields />
				<TextFieldWithIcon type="name" />
			</header>
		</div>
	);
}

export default App;
