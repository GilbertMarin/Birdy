import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { SocialCard } from "../component/socialCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { NavbarBirdy } from "../component/navbar";
import { useHistory } from "react-router-dom";
import { RenderGallery } from "../component/renderGallery";

export const SocialGallery = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");
	const history = useHistory();

	useEffect(() => {
		actions.getPublicBirdCaptures();
	}, []);

	// Add a condition: if (store.birdPublicCaptures.length == 0) return "There is nothing to share for the moment (or a GIF)"
	return (
		<>
			<NavbarBirdy />
			{!store.isPending ? (
				<RenderGallery birds={store.publicBirdCaptures} />
			) : (
				<Image
					className="w-25 mt-5"
					src="https://media.giphy.com/media/3o7aCWH0iwyew3cLwQ/giphy.gif"
					roundedCircle
				/>
			)}
		</>
	);
};
