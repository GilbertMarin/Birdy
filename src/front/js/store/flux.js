const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			isPending: true,
			error: null,
			birdsRaw: [],
			url: "https://www.xeno-canto.org/api/2/recordings?query=cnt%3A%22Costa%20Rica%22",
			heroku: "https://protected-lake-68106.herokuapp.com/"
		},
		actions: {
			// Use getActions to call a function within a fuction

			getBirds: () => {
				const store = getStore();
				const opts = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
						"Access-Control-Allow-Origin": "https://3000-rose-crawdad-cy57d9h8.ws-us03.gitpod.io",
						"Access-Control-Allow-Credentials": "true"
					}
				};
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
						console.log("This came from API XENO-CANTO: ", data.recordings);
						setStore({ birdsRaw: data.recordings, isPending: false, error: null });
					})
					.catch(err => {
						console.error(err.message);
						setStore({ birdsRaw: [], isPending: true, error: true });
						getActions().getFeatures();
					});
			},

			getFeatures: () => {},

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
