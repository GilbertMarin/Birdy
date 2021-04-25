import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rodolfo!</h1>
			<h1>Hello Rigo!</h1>
			<h1>Lilliana Castro</h1>
			<h1>Hello Shmaiter!</h1>
		</div>
	);
};
