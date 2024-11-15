import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import Routes from "./Routes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { queryClient } from "./lib/fetch";

import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

export default function App() {
	return (
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<Header />
				<Routes />
				<Footer />
			</QueryClientProvider>
		</StrictMode>
	);
}
