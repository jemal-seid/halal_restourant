import React from "react";
import "./Footer.css";
// import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";

const Footer = () => (
	<div className="app__footer section__padding">
		{/* <FooterOverlay />
		<Newsletter /> */}
		<div className="app__footer-links">
			<div className="app__footer-links_contact">
				<h1 className="app__footer-headtext">Contact Us</h1>
				<p className="p__opensans">Fake st, Fake state, 10019, USA</p>
				<p className="p__opensans">+1 234-567-8910</p>
				<p className="p__opensans">+1 112-131-4156</p>
			</div>
			<div className="app__footer-links_logo">
				<img src={images.logo} alt="footer-logo" />

				<div className="app__footer_links-icons">
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>
			<div className="app__footer-links_work">
				<h1 className="app__footer-headtext">Working Hours</h1>
				<p className="p__opensans">Monday-Friday:</p>
				<p className="p__opensans">8:00 am - 12:00 am</p>
				<p className="p__opensans">Saturday-Sunday</p>
				<p className="p__opensans">7:00 am - 11:00 pm</p>
			</div>
		</div>
		<div className="footer__copyright">
			<p className="p__opensans">2023 Halal. All Rights reserved.</p>
		</div>
	</div>
);

export default Footer;
