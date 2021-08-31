import React from "react";
// import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

// PAGES
import { Contact } from "./pages/Contact";


function _App() {

	return (
		<div>
			<div className="outter-container">
				<div className="inner-container">
					<Contact />
				</div>
			</div>
		</div>
	);
}

export const App = withRouter(_App);