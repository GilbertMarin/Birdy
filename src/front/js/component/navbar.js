import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import birdy from "../../img/birdy.png";

import home from "../../styles/home.scss";

export const NavbarBirdy = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar bg="light" expand="lg" className="navbar mb-4">
			<Navbar.Brand>
				<a href="/home" className="navbar-brand">
					<img src={birdy} className="logoHome d-inline-block align-top" />
				</a>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Link to="/audioGallery" className="textNavbar pt-2 pr-3 text-decoration-none">
						Audio Gallery
					</Link>

					<Link to="/socialGallery" className="textNavbar pt-2 pr-3 text-decoration-none">
						Social Gallery
					</Link>

					<Link to="/profile" className="textNavbar pt-2 pr-3 text-decoration-none">
						Profile
					</Link>

					<Link to="/">
						<Button className="textNavbar" variant="primary" onClick={() => actions.logout()}>
							Log out
						</Button>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
