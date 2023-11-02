import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
	console.log(import.meta.env.VITE_PATHNAME);
	return (
		<>
			<p>This is a test for nested routes</p>
			<Link to={"/path1"}>Path1</Link>
			<br />
			<Link to={`/child/${crypto.randomUUID()}`}>Child with useParams</Link>
			<Outlet />
		</>
	);
}

export default App;
