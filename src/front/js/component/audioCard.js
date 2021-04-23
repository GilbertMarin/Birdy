import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { PropTypes } from "prop-types";

// React-Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const AudioCard = ({ name, country, location, time, sound }) => {
	// const { store, actions } = useContext(Context);
	// <AudioCard key={index} name={bird.en} country={bird.cnt} location={bird.loc} time={bird.time} sound={store.birdSound[index]}/>;

	return (
		<Card>
			<Card.Header as="h5">{name}</Card.Header>
			<Card.Body>
				<Card.Title>Subtitle about the bird</Card.Title>
				<Card.Text>Country: {country}</Card.Text>
				<Card.Text>Location: {location}</Card.Text>
				<Card.Text>Time: {time}</Card.Text>
				<ReactAudioPlayer src={sound} controls />
				<Button variant="primary">Add to favorite</Button>
			</Card.Body>
		</Card>
	);
};

AudioCard.propTypes = {
	name: PropTypes.string,
	country: PropTypes.string,
	location: PropTypes.string,
	time: PropTypes.string,
	sound: PropTypes.string
};
