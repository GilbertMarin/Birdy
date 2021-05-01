import jwt_decode from "jwt-decode";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		// -- INSTRUCTIONS FOR FETCHING FROM XENO-CANTO API --
		// Heroku app running needed for Authorization Control protocols with the external API
		// Create a heroku app, log in an run the app, next append it to the beginning of the URL
		// If herokuApp already created, then run it from console or
		// go the Heroku Web > into your account > Dashboard > click on the app > an then press on the button that says OPEN
		store: {
			message: null,
			isPending: true,
			error: null,
			birdsRaw: [],
			birdSounds: [],
			birdPublicCaptures: [],
			url: "https://www.xeno-canto.org/api/2/recordings?query=cnt%3A%22Costa%20Rica%22",
			heroku: "https://mighty-plateau-65231.herokuapp.com/",
			newURL: process.env.BACKEND_URL,
			login: false,
			email: "",
			register: false,
			token: null,
			activeUser: {}
		},
		actions: {
			syncTokenFromSessionStore: () => {
				const store = getStore();
				const token = sessionStorage.getItem("token");
				console.log("Application jus loaded, synching the session storage token");
				if (token && token != "" && token != undefined) setStore({ token: token });
				console.log("current token on SYNC: ", store.token);
			},

			getBirds: () => {
				const store = getStore();
				fetch(store.heroku + store.url)
					.then(res => {
						if (!res.ok) {
							// the "the throw Error will send the error to the "catch"
							throw Error("Could not fetch the data for that resource");
						}
						return res.json();
					})
					.then(data => {
						// Restore the state for the error once the data is fetched.
						// Once you receive the data change the state of isPending and the message vanish
						// specify on data.recordings for the array
						//console.log("This came from API XENO-CANTO: ", data.recordings);
						console.log(data.recordings);
						setStore({ birdsRaw: data.recordings, isPending: false, error: null });
						getActions().getSounds();
					})
					.catch(err => {
						console.error(err.message);
						setStore({ birdsRaw: [], isPending: true, error: true });
					});
			},

			getSounds: () => {
				const store = getStore();
				let arrayDeCadenas, uri, encodeFileName, mp3;
				let soundsArray = store.birdsRaw.map(bird => {
					arrayDeCadenas = bird.sono["small"].split("ffts");
					uri = bird["file-name"];
					encodeFileName = encodeURI(uri);
					mp3 = arrayDeCadenas[0] + encodeFileName;
					return mp3;
				});

				setStore({ birdSounds: soundsArray });
			},
			loginValidation: (user, password) => {
				const store = getStore();

				fetch(`${store.newURL}/login`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: user,
						password: password
					})
				})
					.then(resp => {
						if (!resp.ok) return false;
						return resp.json();
					})
					.then(data => {
						setStore({ activeUser: data });
						console.log("ActiveUser from flux", store.activeUser);
						setStore({ token: data.access_token });
						sessionStorage.setItem("token", data.access_token);
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			logout: () => {
				sessionStorage.removeItem("token");
				console.log("Loging out");
				setStore({ token: null });
			},

			registerValidation: (firstname, lastname, email, password) => {
				const store = getStore();

				fetch(`${store.newURL}/register`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						first_name: firstname,
						last_name: lastname,
						email: email,
						password: password,
						is_active: false
					})
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ register: true });
					})

					.catch(err => {
						console.log("error", err);
					});
			},
			resetPassword: () => {
				fetch(`${store.newURL}/`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						first_name: firstname,
						last_name: lastname,
						email: email,
						password: password,
						is_active: false
					})
				})
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ register: true });
					})

					.catch(err => {
						console.log("error", err);
					});
			},

			getPublicCaptures: () => {
				const store = getStore();
				const token = sessionStorage.getItem("token");
				console.log("Token inside publicCaptures", token);

				const opts = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + token
					}
				};

				fetch(`${store.newURL}/bird_captures/public`, opts)
					.then(res => {
						if (!res.ok) {
							// the "the throw Error will send the error to the "catch"
							throw Error("Could not fetch the data for that resource");
						}
						return res.json();
					})
					.then(data => {
						// Restore the state for the error once the data is fetched.
						// Once you receive the data change the state of isPending and the message vanish
						// specify on data
						console.log("This came from /bird_captures/public: ", data);
						setStore({ birdPublicCaptures: data, isPending: false, error: null });
						// getActions().getSounds();
					})
					.catch(err => {
						console.error(err.message);
						setStore({ birdPublicCaptures: [], isPending: true, error: true });
					});
			}
		}
	};
};

export default getState;
