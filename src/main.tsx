import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:uno.css";
import "./globals.css";
import "@unocss/reset/tailwind-compat.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.querySelector("#root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
