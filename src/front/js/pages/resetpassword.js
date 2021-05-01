import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

export const ResePassword = () => {
	let { token } = useParams();

	useEffect(() => {
		fetch(`https://3001-chocolate-dragon-nkqcy9r2.ws-us04.gitpod.io/confirm_email/${token}`)
			.then(resp => {
				return resp.json();
			})
			.then(resp => {
				console.log(resp);
			});
	}, []);
	return <h1>Hola</h1>;
};
