import React, { useState, useEffect, useContext } from "react";
import { RenderGallery } from "./renderGallery";
import Image from "react-bootstrap/Image";
import { Context } from "../store/appContext";

export const PrivateGallery = () => {
	const { store, actions } = useContext(Context);

	return <>hola</>;
};
