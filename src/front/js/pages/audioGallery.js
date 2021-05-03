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

export const AudioGallery = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");
	const history = useHistory();

	const activeUser = JSON.parse(sessionStorage.getItem("activeUser"));

	useEffect(() => {
		actions.getBirds();
		actions.getFavorites();
	}, []);

	return (
		<>
			<NavbarBirdy />
			<div className="container">
				{!store.isPending ? (
					<div>
						<InputGroup className="pb-4">
							<FormControl
								placeholder="Search..."
								value={search}
								onChange={e => {
									setSearch(e.target.value);
								}}
							/>
						</InputGroup>
						<Container>
							<Row>
								{store.birdsRaw
									.filter(bird => {
										if (search == "") {
											return bird;
										} else if (bird.en.toLowerCase().includes(search.toLowerCase())) {
											return bird;
										}
									})
									.map((bird, index) => (
										<Col xs={12} md={6} lg={4} key={index}>
											<AudioCard
												name={bird.en}
												country={bird.cnt}
												location={bird.loc}
												time={bird.time}
												sound={store.birdSounds[index]}
											/>
										</Col>
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
