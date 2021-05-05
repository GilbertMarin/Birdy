import React, { useState, useEffect, useContext } from "react";
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

export const AudioCard = ({ id, name, country, location, time, sound }) => {
	const { store, actions } = useContext(Context);
	//const [favorite, setFavorite] = useState(false);

	let favoriteNameArray = store.favorites.map(item => item["bird_id"]);
	let isFavorite = favoriteNameArray.includes(id);
	//setFavorite(isFavorite);

	//let favoriteFlag = true;
	const handleClickFavorite = () => {
		if (isFavorite) {
			// let favoriteIds = store.favorites.filter(item => {
			// 	if (item["url_sound"] === sound) return item["id"];
			// });

			// passed an id and not a sound.
			actions.deleteFavorite(id);
			console.log("Called deleteFavorite on ID: ", id);
			isFavorite = false;
			console.log("favoriteIcon is: ", isFavorite);
		} else {
			actions.addFavorite(sound, id);
			isFavorite = true;
			console.log("favoriteIcon is: ", isFavorite);
		}
	};

	return (
		<Card className="card p-2 mb-2">
			<Card.Header className="d-flex justify-content-between">
				<Card.Title>{name}</Card.Title>
				<span>
					<p className="text-muted">#{id}</p>
				</span>
				<Button variant="outline-primary" onClick={() => handleClickFavorite()}>
					<i className={isFavorite ? "fas fa-heart" : "far fa-heart"} />
				</Button>
			</Card.Header>
			<Card.Body>
				<Card.Text>Country: {country}</Card.Text>
				<Card.Text>Location: {location}</Card.Text>
				<Card.Text>Time: {time} </Card.Text>
				<ReactAudioPlayer className="audio p-2" src={sound} controls />
			</Card.Body>
		</Card>
	);
};

AudioCard.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	country: PropTypes.string,
	location: PropTypes.string,
	time: PropTypes.string,
	sound: PropTypes.string
};
