import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import {
	Alert,
	Container,
	Button,
	InputGroup,
	FormControl,
	Row,
	Form,
	FormGroup,
	Col,
	Carousel,
	Image,
	Navbar
} from "react-bootstrap";
import { Register } from "./register";
import "../../styles/login.scss";
import comment1 from "../../img/comment1.png";
import comment2 from "../../img/comment2.png";
import comment3 from "../../img/comment3.png";
import comment4 from "../../img/comment4.png";
import swal from "sweetalert";
import logo4 from "../../img/logo4.png";
import birdVector1 from "../../img/birdVector1.png";

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
	//<img src={logo4} className="logo d-inline-block align-top" />

	return (
		<>
			<section className="colored-section" id="title">
				<Container fluid className="container-fluid">
					<nav className="navbar navbar-expand-lg navbar-dark">
						<a href="/" className="navbar-brand">
							<img src={logo4} className="logo d-inline-block align-top" />
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon" />
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<a className="nav-link" href="#footer">
										Contact
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#testimonial">
										Testimonial
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#login">
										Login
									</a>
								</li>
							</ul>
						</div>
					</nav>

					<div className="row">
						<div className="col-lg-6">
							<h1 className="big-heading">Keep track the birds you ve seen!!</h1>
							<button type="button" className="btn btn-dark btn-lg download-button">
								<i className="fab fa-apple" /> Download
							</button>
							<button type="button" className="btn btn-outline-light btn-lg download-button">
								<i className="fab fa-google-play" /> Download
							</button>
						</div>
						<div className="col-lg-6">
							<Image className="title-image" src={birdVector1} />
						</div>
					</div>
				</Container>
			</section>

			<section id="testimonial">
				<Carousel>
					<Carousel.Item>
						<Image
							src={comment1}
							rounded
							//alt={key}
							className="d-block w-50"
							width="200px"
							height="400px"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<Image
							src={comment2}
							rounded
							//alt={key}
							className="d-block w-50"
							width="200px"
							height="400px"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<Image
							src={comment3}
							rounded
							//alt={key}
							className="d-block w-50"
							width="200px"
							height="400px"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<Image
							src={comment4}
							rounded
							//alt={key}
							className="d-block w-50"
							width="200px"
							height="400px"
						/>
					</Carousel.Item>
				</Carousel>
			</section>

			<section id="login">
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
			</section>
		</>
	);
};
