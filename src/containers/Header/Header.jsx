import React from "react";
import "./Header.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
function Header() {
	return (
		<div className="app__header app__wrapper section__padding" id="home">
			<div className="app__wrapper_info">
				<SubHeading title="Certified Halal Foods" />
				<h1 className="app__header-h1">Halal Ethiopian Traditional Foods </h1>
				<p className="p__opensans" style={{ margin: "2rem 0" }}>
					We offer you various Ethiopian tastes of food according to the
					provisions of Sharia. In addition, we have prepared packages with
					great discounts for Ramadan, so take advantage of the opportunity.
				</p>
				<button type="button" className="custom__button">
					See More
				</button>
			</div>
			<div className="app__wrapper_img">
				<img src={images.kitfo} alt="welcome" />
				<img src={images.main} alt="main" />
			</div>
		</div>
	);
}

export default Header;
