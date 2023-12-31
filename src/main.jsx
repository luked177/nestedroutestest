import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Path1 from "./Path1.jsx";
import GuidChild from "./GuidChild.jsx";
import NestedInChild from "./NestedInChild.jsx";

const router = createBrowserRouter(
	[
		{
			path: "*",
			element: <Navigate to={"/"} replace />,
		},
		{
			path: "/",
			element: <App />,
			children: [
				{
					path: "/path1",
					element: <Path1 />,
				},
				{
					path: "/child/:guid",
					element: <GuidChild />,
					children: [
						{
							path: ":value",
							element: <NestedInChild />,
						},
					],
				},
			],
		},
	],
	{ basename: import.meta.env.VITE_PATHNAME }
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
