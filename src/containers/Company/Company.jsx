import React from "react";
import "./Company.css";

import { images } from "../../constants";
import { SubHeading } from "../../components";
const Company = () => (
	<div className="app__bg app__wrapper section__padding">
		<div className="app__wrapper_img app__wrapper_img-reverse">
			<img src={images.coffe} alt="coffe" />
		</div>
		<div className="app__wrapper_info">
			<SubHeading title="Company's word" />
			<h1 className="headtext__cormorant">What we believe in</h1>
			<div className="app__company-content">
				<div className="app__company-content_quote">
					<img src={images.quote} alt="quote" />
					<p className="p__opensans">
						O believers eat of the good things we have provided for you and give
						thanks to Allah.[QURAN.2:172]
					</p>
				</div>
				<p className="p__opensans" style={{ marginTop: "10px" }}>
					"And do not eat that upon which the name of Allah has not been
					mentioned, for indeed it is a grave disobedience. (Al-Anaam 6:121)”
				</p>
			</div>
		</div>
	</div>
);

export default Company;
