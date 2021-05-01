import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import { CountrySelectBirdy } from "./countrySelect";
import { Form, Button, FormGroup, FormControl, ControlLabe, Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

export const Logdetails = () => {
	const { store, actions } = useContext(Context);
	const [value, setValue] = React.useState(null);

	const [country, setCountry] = useState("");
	const [birdName, setBirdName] = useState("");
	const [localization, setLocalization] = useState("");
	const [description, setDescription] = useState("");
	const [time, setTime] = useState("");
	const [privacy, setPrivacy] = useState(false);

	const handleClick = () => {
		if (country == "" || birdName == "" || localization == "" || description == "" || time == "")
			alert("Necesita completar todo los campos");
		else {
			actions.addBirdCapture(country, birdName, localization, description, time, privacy);
			console.log(country, birdName, localization, description, time, privacy);
			inputReset();
		}

		// Pass login parameters to make a fetch to the back end.
	};

	const inputReset = () => {
		setCountry("");
		setBirdName("");
		setLocalization("");
		setDescription("");
		setTime("");
		setPrivacy(false);
	};

	return (
		<div className="text-center mt-5">
			<Container>
				<div>
					<div className="text-center mt-5" />
					<Form.Control
						plaintext
						readOnly
						defaultValue="List of common and scientific names
                         of bird species but for the purposes of
                         this list species are grouped into families, and
                          families are ordered following the more traditional taxonomy."
					/>
				</div>
				<Form>
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Control
							className="sm-4 mb-3"
							as="textarea"
							rows={1}
							type="text"
							placeholder="Country"
							required
							value={country}
							onChange={e => setCountry(e.target.value)}
						/>
						<Form.Control
							className="sm-4 mb-3"
							as="textarea"
							rows={1}
							type="text"
							placeholder="Bird Name"
							required
							value={birdName}
							onChange={e => setBirdName(e.target.value)}
						/>
						<Form.Control
							className="sm-4 mb-3"
							as="textarea"
							rows={1}
							type="text"
							placeholder="Localization"
							required
							value={localization}
							onChange={e => setLocalization(e.target.value)}
						/>
						<Form.Control
							className="sm-4 mb-3"
							as="textarea"
							rows={1}
							type="text"
							placeholder="Description"
							required
							value={description}
							onChange={e => setDescription(e.target.value)}
						/>
						<Form.Control
							className="sm-4 mb-3"
							as="textarea"
							rows={1}
							type="text"
							placeholder="Time"
							required
							value={time}
							onChange={e => setTime(e.target.value)}
						/>
					</Form.Group>

					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Checkbox
								aria-label="Checkbox for following text input"
								onClick={e => (e.target.value === "on" ? setPrivacy(true) : setPrivacy(false))}
							/>
						</InputGroup.Prepend>
						<Form.Label>Make Public</Form.Label>
					</InputGroup>

					<Button
						variant="primary"
						type="submit"
						className="btn btn-block signin"
						onClick={() => handleClick()}>
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	);
};

//	<CountrySelectBirdy value={value} onChange={setValue} />
