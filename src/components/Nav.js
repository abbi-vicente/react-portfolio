import React from "react";
import "./Nav.css";

const Nav = () => {
	return (
		<div className="header">
			<h3>
				<a href="#landing">Abbi Vicente</a>
			</h3>
			<div className="nav">
				<label for="toggle">&#9776</label>
				<input type="checkbox" id="toggle" />
				<div className="menu">
					<a href="#about">About</a>
					<a href="#skills">Skills</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
				</div>
			</div>
		</div>
	);
};

export default Nav;
