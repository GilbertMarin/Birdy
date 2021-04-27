import React from "react";
import { PropTypes } from "prop-types";

// React-Bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const SocialCard = ({ name, country, location, time, description, author }) => {
	return (
		<Card>
			<Card.Header as="h5">{name}</Card.Header>
			<Card.Body>
				<Card.Text>Country: {country}</Card.Text>
				<Card.Text>Location: {location}</Card.Text>
				<Card.Text>Time: {time}</Card.Text>
				<Card.Text>Description: {description}</Card.Text>
				<Card.Text>Author: {author}</Card.Text>
				<Button variant="primary">Add to favorite</Button>
			</Card.Body>
		</Card>
	);
};

SocialCard.propTypes = {
	name: PropTypes.string,
	country: PropTypes.string,
	location: PropTypes.string,
	time: PropTypes.string,
	description: PropTypes.string,
	author: PropTypes.string
};
