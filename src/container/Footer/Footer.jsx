import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};

		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		});
	};

	return (
		<>
			<h2 className="head-text-footer" style={{ marginTop: 20 }}>
				Send me a message!
			</h2>

			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img src={images.email} alt="email" />
					<a
						href="mailto:mlwarren@knox.edu"
						className="p-text-footer"
					>
						mlwarren@knox.edu
					</a>
				</div>
				<div className="app__footer-card">
					<img src={images.mobile} alt="mobile" />
					<a href="tel: +1 (847) 340-0399" className="p-text-footer">
						+1 (847) 340-0399
					</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							className="p-text-footer"
							type="text"
							placeholder="Enter your name"
							name="name"
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							className="p-text-footer"
							type="email"
							placeholder="Enter your email"
							name="email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className="p-text-footer"
							placeholder="Hi, I think you'd be a good fit for our company. When would you be available to chat?"
							value={message}
							name="message"
							onChange={handleChangeInput}
						/>
					</div>
					<button
						type="button"
						className="p-text"
						style={{ marginBottom: 10 }}
						onClick={handleSubmit}
					>
						{loading ? "Sending" : "Send Message!"}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text-footer" style={{ marginTop: 20 }}>
						Thank you for getting in touch:)
					</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__whitebg"
);
