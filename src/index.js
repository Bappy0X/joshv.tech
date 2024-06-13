import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import BusinessCard from "./BusinessCard"
import Portfolio from "./Portfolio";
import { Layout } from "./Layout";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout/>}>
				<Route index element={<BusinessCard/>}/>
				<Route path="/my-portfolio" element={<Portfolio/>}/>
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById("content")
);

// Force push