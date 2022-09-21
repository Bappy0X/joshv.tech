import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import BusinessCard from "./BusinessCard"
import Portfolio from "./Portfolio";
import { Layout } from "./Layout";
import Services from "./Services";
import Contact from "./Contact";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route index element={<BusinessCard/>}/>
				<Route path="/my-portfolio" element={<Portfolio/>}/>
				<Route path="/my-services" element={<Services/>}/>
				<Route path="/contact-me" element={<Contact/>}/>
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById("content")
);