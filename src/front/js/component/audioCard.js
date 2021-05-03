import React, { useContext } from "react";
import ReactAudioPlayer from "react-audio-player";
import { PropTypes } from "prop-types";
import "../../styles/audioCard.scss";
import { Context } from "../store/appContext";

// React-Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const AudioCard = ({ name, country, location, time, sound }) => {
	const { store, actions } = useContext(Context);
	let favoriteFlag = store.favorites.find(item => item == sound);
	//let favoriteFlag = true;

	return (
		<Card className="card p-2 m-4">
			<Card.Header className="d-flex justify-content-between">
				<Card.Title>{name}</Card.Title>
				<Button variant="outline-primary" onClick={() => actions.addFavorite(sound)}>
					<i className={favoriteFlag ? "fas fa-heart" : "far fa-heart"} />
				</Button>
			</Card.Header>
			<Card.Body>
				<Card.Text>Country: {country}</Card.Text>
				<Card.Text>Location: {location}</Card.Text>
				<Card.Text>Time: {time}</Card.Text>
				<ReactAudioPlayer className="audio p-2" src={sound} controls />
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
