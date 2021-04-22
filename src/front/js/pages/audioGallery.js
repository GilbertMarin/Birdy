import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import { Context } from "../store/appContext";
import { AudioCard } from "../component/audioCard";

export const AudioGallery = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getBirds();
	}, []);

	return (
		<div className="container">
			{!store.isPending ? (
				<div>
					{/* {store.people.map((character, index) => {
						return <CharacterCard key={index} character={character} id={index} />;
					})} */}
					<AudioCard />
				</div>
			) : (
				<h2>Loading. . .</h2>
			)}
		</div>
	);
};
