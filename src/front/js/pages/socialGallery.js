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

export const SocialGallery = () => {
	const { store, actions } = useContext(Context);
	const [search, setSearch] = useState("");

	useEffect(() => {
		actions.getPublicCaptures();
	}, []);

	// Add a condition: if (store.birdPublicCaptures.length == 0) return "There is nothing to share for the moment (or a GIF)"
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
								{store.birdPublicCaptures
									.filter(bird => {
										if (search == "") {
											return bird;
										} else if (bird.en.toLowerCase().includes(search.toLowerCase())) {
											return bird;
										}
									})
									.map((bird, index) => (
										<Col xs={12} md={6} lg={4} key={index}>
											<SocialCard
												name={bird.en}
												country={bird.cnt}
												location={bird.loc}
												time={bird.time}
												description={bird.rmk}
												author={bird.author}
											/>
										</Col>
									))}
							</Row>
						</Container>
					</div>
				) : (
					<div>
						<Image
							className="w-25 mt-5"
							src="https://media.giphy.com/media/3o7aCWH0iwyew3cLwQ/giphy.gif"
							roundedCircle
						/>
					</div>
				)}
			</div>
		</>
	);
};
