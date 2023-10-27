import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Path1 from "./Path1.jsx";
import GuidChild from "./GuidChild.jsx";

const router = createBrowserRouter([
	{
		path: "*",
		element: <Navigate to={"/nested"} replace />,
	},
	{
		path: "/nested",
		element: <App />,
		children: [
			{
				path: "/nested/path1",
				element: <Path1 />,
			},
			{
				path: "/nested/child/:guid",
				element: <GuidChild />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
