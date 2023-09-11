import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			{/**<div className="project">
				<Link to={link}>
					<div className="project-container">
						
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						
						
					</div>
					
					<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
					</div>
					
				</Link>
			</div> */}

<div className="project-container">
      <div className="project-title">{title}</div>
	  <br/>
      <div className="project-description">
	  {description}      </div>
      <div className="project-skills"> React, CSS, JavaScript</div>
      <div className="github-link">
        <a href={linkText} target="_blank" rel="noopener noreferrer">
		<FontAwesomeIcon icon={faLink} />
        </a>
      </div>
    </div>
		</React.Fragment>
	);
};

export default Project;
