import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { Context } from "../store/appContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const AudioCard = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Card>
				<Card.Header as="h5">{store.birdsRaw[0].en}</Card.Header>
				<Card.Body>
					<Card.Title>Subtitle about the bird</Card.Title>
					<Card.Text>Facts about the bird.</Card.Text>
					<ReactAudioPlayer src={store.birdSounds[0]} autoPlay controls />
					<Button variant="primary">Add to favorite</Button>
				</Card.Body>
			</Card>
		</div>
	);
};
