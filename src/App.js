import React from "react";
import {
	FindUs,
	Footer,
	Gallery,
	Header,
	Intro,
	SpecialMenu,
	Company,
	Certificate,
} from "./containers";
import { NavBar } from "./components";
import "./App.css";

function App() {
	return (
		<div>
			<NavBar />
			<Header />
			<SpecialMenu />
			<Company />
			<Intro />
			<Certificate />
			<Gallery />
			<FindUs />
			<Footer />
		</div>
	);
}

export default App;
