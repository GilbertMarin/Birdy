import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { PropTypes } from "prop-types";
import "../../styles/audioCard.scss";

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
		<Card className="card p-2 m-4">
			<Card.Header className="cardHeader p-2">{name}</Card.Header>
			<Card.Body>
				<Card.Text>Country: {country}</Card.Text>
				<Card.Text>Location: {location}</Card.Text>
				<Card.Text>Time: {time}</Card.Text>
				<ReactAudioPlayer className="audio p-2" src={sound} controls />
				<Button className="buttonFav p-2 m-1" variant="primary">
					Add to favorite
				</Button>
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
