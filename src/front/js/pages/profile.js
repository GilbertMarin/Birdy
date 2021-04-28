import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Sonnet } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { NavbarBirdy } from "../component/navbar";

import "../../styles/gif.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getUser();
	}, []);
	return (
		<>
			<NavbarBirdy />
			<div className="container bootstrap snippets bootdey">
				{!store.isPending ? (
					<div className="row">
						<div className="profile-nav col-md-3">
							<div className="panel">
								<div className="user-heading round">
									<h1>{store.activeUser.first_name}</h1>
									<h1>{store.activeUser.email}</h1>
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
						<Image
							className="w-25"
							src="https://media.giphy.com/media/3o7aCWH0iwyew3cLwQ/giphy.gif"
							roundedCircle
						/>
					</div>
				)}
			</div>
		</>
	);
};
