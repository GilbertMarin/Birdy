import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const AudioGallery = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getBirds();
	}, []);

	return (
		<div className="container">
			{!store.isPending ? (
				<div>
					<div>
						<h1>{store.birdsRaw[0].en}</h1>
					</div>
					<hr />
				</div>
			) : (
				<h2>Loading. . .</h2>
			)}
		</div>
	);
};
