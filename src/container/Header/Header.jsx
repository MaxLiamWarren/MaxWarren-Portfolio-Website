import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const Header = () => {
	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<div>
							<h1>Beautifully crafted digital experiences.</h1>
							<p className="p-text">
								As a software engineer I specialize in building,
								and designing, exceptional digital experiences.
								My primary focus is to create products that
								leverage best-practice technologies to deliver a
								top user experience.
							</p>
						</div>
					</div>

					<div className="tag-cmp app__flex">
						<p className="p-text">
							Highly skilled at progressive enhancement, design
							systems & UI Engineering.
						</p>
						<p className="p-text">
							I'm equipped with just the right tools, and can
							absolutely function independently of them to deliver
							fast, resilient solutions optimized for scale.
						</p>
					</div>
				</div>
			</motion.div>

			<div className="app__header-flex">
				<motion.div
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.5, delayChildren: 0.5 }}
					className="app__header-img"
				>
					<img src={images.profile} alt="profile_bg" />
					<motion.img
						whileInView={{ scale: [0, 1] }}
						transition={{ duration: 1, ease: "easeInOut" }}
						src={images.circle}
						alt="profile_circle"
						className="overlay_circle"
					/>
				</motion.div>
				<motion.div
					variants={scaleVariants}
					whileInView={scaleVariants.whileInView}
					className="app__header-circles"
				>
					{[images.react, images.sass, images.javascript].map(
						(circle, index) => (
							<div
								className="circle-cmp app__flex"
								key={`circle-${index}`}
							>
								<img src={circle} alt="profile_bg" />
							</div>
						)
					)}
				</motion.div>
			</div>
		</div>
	);
};

export default AppWrap(Header, "home");
