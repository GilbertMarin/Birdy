import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { FormGroup, Form, FormLabel, FormControl } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import fondo from "../../img/fondo.png";
import "../../styles/profile.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Logdetails } from "../component/logDetails";
import { NavbarBirdy } from "../component/navbar";

library.add(fab, faCheckSquare, faCoffee);

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));
	console.log("Active user on sessionStorage from profile: ", activeUser);

	// useEffect(() => {
	// 	actions.getPrivateCaptures();
	// }, []);

	return (
		<>
			<NavbarBirdy />
			<div className="fondo">
				<div className="container bootstrap snippets bootdey">
					{store.activeUser &&
					store.activeUser != "" &&
					store.activeUser !== undefined &&
					store.activeUser !== null ? (
						<div className="row">
							<div className="profile-nav col-md-3 mt-5">
								<div className="panel">
									<div className="user-heading round">
										<a href="#">
											<img
												src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg"
												alt=""
												width="200px"
												height="150px"
											/>
										</a>
										<div className="texto1 mt-5">
											<p>{activeUser.first_name}</p>
											<p>{activeUser.email}</p>
											<div className="social">
												<a className="fab fa-facebook fa-2x" href="http://www.facebook.com/" />
												<a
													className="fab fa-instagram fa-2x"
													href="http://www.instagram.com/"
												/>
												<a className="fab fa-twitter fa-2x" href="http://www.twitter.com/" />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="profile-info col-md-9 mt-5">
								<Tabs defaultActiveKey="Personal Information" id="uncontrolled-tab-example">
									<Tab
										eventKey="Personal Information"
										title="Personal Information"
										className="texto2 mt-5">
										<p>First Name: {activeUser.first_name}</p>
										<p>Last Name: {activeUser.last_name}</p>
										<p>Email: {activeUser.email}</p>
										<p>Bio: {activeUser.bio}</p>
									</Tab>
									<Tab eventKey="Favorites" title="Favorites" />
									<Tab eventKey="Repository" title="Repository">
										List of captures
									</Tab>
									<Tab eventKey="Capture" title="Capture">
										<Logdetails />
									</Tab>
								</Tabs>
							</div>
						</div>
					) : (
						<Image
							className="w-25 mt-5"
							src="https://media.giphy.com/media/3o7aCWH0iwyew3cLwQ/giphy.gif"
							roundedCircle
						/>
					)}
				</div>
			</div>
		</>
	);
};
