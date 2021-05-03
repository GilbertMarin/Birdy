import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import { Context } from "../store/appContext";
import { AudioCard } from "../component/audioCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { NavbarBirdy } from "../component/navbar";
import Card from "react-bootstrap/Card";

export const FavoritesGallery = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");
	const history = useHistory();
	let favoritesBirds = null;

	const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

	return (
		<>
			<div className="container">
				{activeUser ? (
					<div>
						<Container>
							<Row>
								{store.favorites.map((bird, index) => (
									<Card className="card p-2 m-4" key={index}>
										<Card.Header className="d-flex justify-content-between">
											<Card.Title>{bird.id}</Card.Title>
										</Card.Header>
										<Card.Body>
											<ReactAudioPlayer className="audio p-2" src={bird.url_sound} controls />
										</Card.Body>
									</Card>
								))}
							</Row>
						</Container>
					</div>
				) : (
					<Image
						className="w-25 mt-5"
						src="https://media.giphy.com/media/3o7aCWH0iwyew3cLwQ/giphy.gif"
						roundedCircle
					/>
				)}
			</div>
		</>
	);
};
