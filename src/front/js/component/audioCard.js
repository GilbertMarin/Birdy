import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const AudioCard = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{!store.isPending ? (
				<div>
					<div>
                        AudioCard
					</div>
					<hr />
				</div>
			) : (
				<h2>Loading. . .</h2>
			)}
		</div>
	);
};
