import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { NavbarBirdy } from "../component/navbar";
import logoPrincipal from "../../img/logoPrincipal.png";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<NavbarBirdy />
			<div className="header">
				<div className="container pt-5">
					<section className="row">
						<div className="col-sm hero-text d-none d-lg-block">
							<h1>Messy Bookmark Bar?</h1>
							<h2 className="mt-5 yellow-star">
								Keep Acces To Your Online Courses Organized And Updated{" "}
								<strong>
									<em>In One Place</em>
								</strong>
							</h2>
						</div>
						<div className="col-sm">
							<img className="logo" src={logoPrincipal} />
						</div>
					</section>
				</div>
			</div>
		</>
	);
};
