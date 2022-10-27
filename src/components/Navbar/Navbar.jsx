import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

// import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="primary-navigation app__navbar">
			<div className="app__navbar-logo">
				{/* <img src={images.logo} alt="logo" /> */}
				{/* <span className="logo-text">Max Warren</span> */}
				<h1 className="app__navbar-logo-text">
					<span className="app__navbar-logo-text-first">Max</span>
					<span className="app__navbar-logo-text-second">Warren</span>
				</h1>
			</div>
			<ul className="app__navbar-links">
				{["home", "about", "work", "skills", "contact"].map((item) => (
					<li className="app__flex nav-text" key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>

			<div className="app__navbar-button">
				<a
					href="WarrenMax_Resume.pdf"
					target="_blank"
					className="app__navbar-resume"
				>
					Resume
				</a>
			</div>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: "easeOut" }}
					>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{["home", "about", "work", "skills", "contact"].map(
								(item) => (
									<li key={item}>
										<a
											href={`#${item}`}
											onClick={() => setToggle(false)}
										>
											{item}
										</a>
									</li>
								)
							)}
						</ul>
					</motion.div>
				)}
			</div>

			{/* <img className="app__navbar-oval" src={images.oval} alt="Shape" /> */}
		</nav>
	);
};
export default Navbar;
