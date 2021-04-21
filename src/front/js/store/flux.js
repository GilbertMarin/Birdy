const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			isPending: true,
			error: null,
			birdsRaw: [],
			birdSounds: [],
			url: "https://www.xeno-canto.org/api/2/recordings?query=cnt%3A%22Costa%20Rica%22",
			heroku: "https://protected-lake-68106.herokuapp.com/"
		},
		actions: {
			// Use getActions to call a function within a fuction

			getBirds: () => {
				const store = getStore();
				// const opts = {
				// 	method: "GET",
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 		Accept: "application/json",
				// 		"Access-Control-Allow-Origin": "https://3000-rose-crawdad-cy57d9h8.ws-us03.gitpod.io",
				// 		"Access-Control-Allow-Credentials": "true"
				// 	}
				// };
				fetch(store.heroku + store.url)
					.then(res => {
						if (!res.ok) {
							// the "the throw Error will send the erro to the "catch"
							throw Error("Could not fetch the data for that resource");
						}
						return res.json();
					})
					.then(data => {
						// Restore the state for the error once the data is fetched.
						// Once you receive the data change the state of isPending and the message vanish
						// specify on data.recordings for the array
						//console.log("This came from API XENO-CANTO: ", data.recordings);
						setStore({ birdsRaw: data.recordings, isPending: false, error: null });
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
				//console.log("Sounds on mp3: ", soundsArray);
				// LINE 60 IS GIVING ERROR
				//Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
				//setStore({ birdSounds: soundsArray });
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
