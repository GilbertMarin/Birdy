import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import { CountrySelectBirdy } from "./countrySelect";
import { Form, Button, FormGroup, FormControl, ControlLabe, Container } from "react-bootstrap";

export const Logdetails = () => {
	const { store, actions } = useContext(Context);
	const [value, setValue] = React.useState(null);
	const [pais, setPais] = useState("");
	const [nombreave, setNombreave] = useState("");
	const [localizacion, setLocalizacion] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [tiempo, setTiempo] = useState("");
	//const [public, setPublic] = useState(True);

	const handleClick = () => {
		if (pais == "" || nombreave == "" || localizacion == "" || descripcion == "" || tiempo == "")
			alert("Necesita completar todo los campos");
		else actions.addBirdCapture(pais, nombreave, localizacion, descripcion, tiempo, true);
		console.log(pais, nombreave, localizacion, descripcion, tiempo);

		// Pass login parameters to make a fetch to the back end.
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
						<Form.Label>pais</Form.Label>
						<Form.Control
							as="textarea"
							rows={1}
							type="text"
							placeholder="pais"
							required
							onChange={e => setPais(e.target.value)}
						/>
						<Form.Label> Nombre del Ave</Form.Label>
						<Form.Control
							as="textarea"
							rows={1}
							type="text"
							placeholder="Nombre del Ave"
							required
							onChange={e => setNombreave(e.target.value)}
						/>
						<Form.Label>Localizacion</Form.Label>
						<Form.Control
							as="textarea"
							rows={1}
							type="text"
							placeholder="Localizacion"
							required
							onChange={e => setLocalizacion(e.target.value)}
						/>
						<Form.Label>Descripcion</Form.Label>
						<Form.Control
							as="textarea"
							rows={1}
							type="text"
							placeholder="Descripcion"
							required
							onChange={e => setDescripcion(e.target.value)}
						/>
						<Form.Label>Tiempo</Form.Label>
						<Form.Control
							as="textarea"
							rows={1}
							type="text"
							placeholder="Tiempo"
							required
							onChange={e => setTiempo(e.target.value)}
						/>
					</Form.Group>
				</Form>
				<FormGroup className="mx-sm-4 pb-3">
					<Button className="btn btn-block signin" onClick={() => handleClick()}>
						Submit
					</Button>
				</FormGroup>
			</Container>
		</div>
	);
};

//	<CountrySelectBirdy value={value} onChange={setValue} />
