import React from "react";
import ReactDOM from "react-dom/client";
import MainRoutes from "./Routes.tsx"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MainRoutes />
	</React.StrictMode>,
);
