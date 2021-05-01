import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import {
	Container,
	Button,
	InputGroup,
	FormControl,
	Row,
	Form,
	FormGroup,
	Col,
	Carousel,
	Image
} from "react-bootstrap";
import { Register } from "./register";
import "../../styles/login.scss";
import first from "../../img/primer.jpg";
import second from "../../img/Segundo.jpg";
import third from "../../img/tercero.jpg";
import fourth from "../../img/cuarto.jpg";
import swal from "sweetalert";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");
	const history = useHistory();

	const ForgotPassord = () => {
		swal("We going to help you with your password restore", {
			content: {
				element: "input",
				attributes: {
					placeholder: "Type your Email",
					type: "text"
				}
			}
		}).then(value => {
			if (value.includes("@") && value.includes(".")) {
				swal("Nice!", "Please check your email inbox!", "success");
			} else {
				swal("oopps!!", "Wrong Email, please verify!", "error");
			}
		});
	};

	const handleClick = () => {
		if (user == "" || pass == "" || user == undefined || pass == undefined) {
			alert("Bad email or password");
		} else {
			actions.loginValidation(user, pass);
		}

		// Pass login parameters to make a fetch to the back end.
	};

	// Every time it finds a token into the storage it will redirect to /home page
	if (store.activeUser && store.activeUser != "" && store.activeUser !== undefined && store.activeUser !== null)
		history.push("/audioGallery");

	return (
		<>
			<Carousel>
				<Carousel.Item>
					<Image
						src="https://birdy7.webnode.cr/_files/200000000-a77eba77ee/700/primer.jpg"
						rounded
						//alt={key}
						className="d-block w-50"
						width="200px"
						height="400px"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Image
						src="https://birdy7.webnode.cr/_files/200000001-3029d3029f/700/Segundo.jpg"
						rounded
						//alt={key}
						className="d-block w-50"
						width="200px"
						height="400px"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Image
						src="https://birdy7.webnode.cr/_files/200000002-dc777dc779/700/tercero.jpg"
						rounded
						//alt={key}
						className="d-block w-50"
						width="200px"
						height="400px"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Image
						src="https://birdy7.webnode.cr/_files/200000003-2a5e62a5e9/700/cuarto.jpg"
						rounded
						//alt={key}
						className="d-block w-50"
						width="200px"
						height="400px"
					/>
				</Carousel.Item>
			</Carousel>
			<Container>
				<Row className="justify-content-center pt-5 mt-5 mr-1">
					<Col className="col-md-4 formulary">
						<Form action="">
							<FormGroup className="text-center pb-3">
								<h1 className="text-light">Login</h1>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Email"
									onChange={e => setUser(e.target.value)}
								/>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									onChange={e => setPass(e.target.value)}
								/>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3">
								<Button className="btn btn-block signin" onClick={() => handleClick()}>
									Login
								</Button>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3 text-center">
								<Link to="/register">
									<input type="submit" className="btn btn-block register" value="Register" />
								</Link>
							</FormGroup>
							<FormGroup className="mx-sm-4 pb-3 text-center">
								<Link to="">
									<input
										type="submit"
										className="btn btn-block forgot"
										value="Forgot your Password"
										onClick={() => ForgotPassord()}
									/>
								</Link>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	);
};
