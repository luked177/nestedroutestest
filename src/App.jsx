import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<p>This is app is deployed to two separate instances using pipelines and env variables.</p>
			<p>This versions pathname is {import.meta.env.VITE_PATHNAME}</p>
			<p>This is set through an env variable in the pipeline to deploy!</p>
			<Link to={"/path1"}>Path1</Link>
			<br />
			<Link to={`/child/${crypto.randomUUID()}`}>Child with useParams</Link>
			<Outlet />
		</>
	);
}

export default App;
