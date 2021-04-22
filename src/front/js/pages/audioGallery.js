import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import { Context } from "../store/appContext";
import { AudioCard } from "../component/audioCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const AudioGallery = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getBirds();
	}, []);

	return (
		<div className="container">
			{!store.isPending ? (
				<div>
					<Container>
						<Row>
							{store.birdsRaw.length == 0 ? (
								<div>Loading...</div>
							) : (
								store.birdsRaw.map((bird, index) => (
									<Col xs={12} md={6} lg={4} key={index}>
										<AudioCard
											name={bird.en}
											country={bird.cnt}
											location={bird.loc}
											time={bird.time}
											sound={store.birdSounds[index]}
										/>
									</Col>
								))
							)}
						</Row>
					</Container>
				</div>
			) : (
				<h2>Loading. . .</h2>
			)}
		</div>
	);
};
