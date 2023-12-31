import React from "react";
import "./NewsLetter.css";
import SubHeading from "../Subheading/SubHeading";

const Newsletter = () => (
	<div className="app__newsletter">
		<div className="app__newsletter-heading">
			<SubHeading title="News Letter" />
			<h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
			<p className="p__opensans">And never miss latest Updates!</p>
		</div>
		<div className="app__newsletter-input flex__center">
			<input type="email" placeholder="Enter your email address" />
			<button type="button" className="custom__button">
				Subscribe
			</button>
		</div>
	</div>
);

export default Newsletter;
