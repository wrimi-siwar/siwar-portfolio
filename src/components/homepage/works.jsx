import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./qramer.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Qramer </div>
							<div className="work-subtitle">
							MERN Stack Developer</div>
							<div className="work-duration">June - August 2023</div>
						</div>

						<div className="work">
							<img
								src="./digicross.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">DIGICROSS </div>
							<div className="work-subtitle">
							MERN Stack Developer
														</div>
							<div className="work-duration">June - August 2022</div>
						</div>
						<div className="work">
							<img
								src="./belmwassel.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Belmwassel  </div>
							<div className="work-subtitle">
						Full Stack Developer
																					</div>
							<div className="work-duration">March - June 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
