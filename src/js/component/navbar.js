import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="container navbar navbar-light bg-light mb-3 py-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contact List</span>
			</Link>
			{/* <div className="ml-auto">
				<Link to="/add-contact-easy">
					<button className="btn btn-primary">Add new Contact easy</button>
				</Link>
			</div> */}
			<div className="ms-auto">
				<Link to="/add-contact">
					<button className="btn btn-primary">Add new Contact</button>
				</Link>
			</div>	
		</nav>
	);
};
