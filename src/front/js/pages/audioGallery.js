import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import { Context } from "../store/appContext";
import { AudioCard } from "../component/audioCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

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
								<div>Nothing here...</div>
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
				<div>
					<Image src="https://media.giphy.com/media/xTcnSMB8VXjTox23zW/giphy.gif" roundedCircle />
				</div>
			)}
		</div>
	);
};
