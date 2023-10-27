import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<p>This is a test for nested routes</p>
			<Outlet />
		</>
	);
}

export default App;
