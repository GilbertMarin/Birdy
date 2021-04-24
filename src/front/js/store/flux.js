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
			url: "https://www.xeno-canto.org/api/2/recordings?query=cnt%3A%22Costa%20Rica%22",
			heroku: "https://mighty-plateau-65231.herokuapp.com/"
		},
		actions: {
			// Use getActions() to call a function within a fuction

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
			}
		}
	};
};

export default getState;
