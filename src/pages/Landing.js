import React from "react";
import "./Landing.css";
import facebookLogo from "../img/facebook-logo.png";
import linkedInLogo from "../img/linkedin.png";
import githubLogo from "../img/github (1).png";

const Landing = () => {
	return (
		<section id="landing">
			<div className="landing">
				<div className="container-greeting">
					<div className="greeting">
						<h2>Hey, I'm Abbi.</h2>
					</div>
					<h1>
						I'm a full-stack
						<br />
						web developer.
					</h1>
					<div className="about-button">
						<button>
							<a href="#about">Learn more about me.</a>
						</button>
					</div>
					{/* buttons for social media links */}
					<div className="socials">
						<div className="facebook">
							<a href="https://www.facebook.com/isabellouiseph/" target="_blank">
								<img src={facebookLogo} alt="Facebook" />
							</a>
						</div>
						<div className="linkedin">
							<a href="https://www.linkedin.com/in/isabel-louise-vicente-5318a523a" target="_blank">
								<img src={linkedInLogo} alt="LinkedIn" />
							</a>
						</div>
						<div className="gitlab">
							<a href="https://github.com/abbi-vicente" target="_blank">
								<img src={githubLogo} alt="Github" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
