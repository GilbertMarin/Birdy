import React from "react";
import { PropTypes } from "prop-types";

// React-Bootstrap
import Card from "react-bootstrap/Card";

export const CaptureCard = ({ name, country, location, time, description, author }) => {
	return (
		<Card>
			<Card.Header as="h5">{name}</Card.Header>
			<Card.Body>
				<Card.Text>Country: {country}</Card.Text>
				<Card.Text>Location: {location}</Card.Text>
				<Card.Text>Time: {time}</Card.Text>
				<Card.Text>Description: {description}</Card.Text>
				<Card.Text>Author: {author}</Card.Text>
			</Card.Body>
		</Card>
	);
};

CaptureCard.propTypes = {
	name: PropTypes.string,
	country: PropTypes.string,
	location: PropTypes.string,
	time: PropTypes.string,
	description: PropTypes.string,
	author: PropTypes.string
};
