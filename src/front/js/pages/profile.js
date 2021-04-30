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

	console.log("esta pendiente ", store.isPending);

	return (
		<>
			<NavbarBirdy />
			<div className="fondo">
				<div className="container bootstrap snippets bootdey">
					{store.activeUser ? (
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
											<p>{store.activeUser.first_name}</p>
											<p>{store.activeUser.email}</p>
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
										<p>First Name: {store.activeUser.first_name}</p>
										<p>Last Name: {store.activeUser.last_name}</p>
										<p>Email: {store.activeUser.email}</p>
										<Form>
											<Form.Group controlId="exampleForm.ControlTextarea1">
												<Form.Label>Bio</Form.Label>
												<Form.Control as="textarea" rows={3} />
											</Form.Group>
										</Form>
									</Tab>
									<Tab eventKey="Favorites" title="Favorites" />
									<Tab eventKey="Bitácora" title="Bitácora">
										<Logdetails />
									</Tab>
								</Tabs>
							</div>
						</div>
					) : (
						<div>
							<Image src="https://media.giphy.com/media/xTcnSMB8VXjTox23zW/giphy.gif" roundedCircle />
						</div>
					)}
				</div>
			</div>
		</>
	);
};
