import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = INFO.main.logo
		;

	return (
		<React.Fragment>
			<div className="nameLogo">
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
			</div>
		</React.Fragment>
	);
};

export default Logo;
