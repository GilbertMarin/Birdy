import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Sonnet } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getUser();
	}, []);
	return (
		<div className="container bootstrap snippets bootdey">
			{!store.isPending ? (
				<div className="row">
					<div className="profile-nav col-md-3">
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
								<h1>{store.activeUser.first_name}</h1>
								<p>carla.c@gmail.com</p>
							</div>

							<ul className="nav nav-pills nav-stacked">
								<li>
									<a href="#">
										{" "}
										<i className="fa fa-edit" /> Edit profile
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="profile-info col-md-9">
						<Tabs defaultActiveKey="Personal Information" id="uncontrolled-tab-example">
							<Tab eventKey="Personal Information" title="Personal Information" />

							<Tab eventKey="Favorites" title="Favorites" />
							<h2 />
							<Tab eventKey="Bitácora" title="Bitácora" />
						</Tabs>
					</div>
				</div>
			) : (
				<div>
					<Image src="https://media.giphy.com/media/xTcnSMB8VXjTox23zW/giphy.gif" roundedCircle />
				</div>
			)}
		</div>
	);
};
