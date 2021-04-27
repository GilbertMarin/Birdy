import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 ">
			<Image
				src="https://birdy7.webnode.cr/_files/200000004-ea18dea190/450/ScreenHunter_175%20Apr.%2019%2012.16.jpg"
				// width="60"
				height="60"
				alt="Birdy"
				style={{ display: "block", margin: "auto" }}
			/>
		</nav>
	);
};
