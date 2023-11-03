import React from "react";
import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

const SpecialMenu = () => (
	<div className="app__specialmenu flex__center section__padding" id="menu">
		<div className="app__specialmenu-title">
			<SubHeading title="Menu that fits your desire" />
			<h1 className="headtext__cormorant">Today's special</h1>
		</div>
		<div className="app__specialmenu-menu">
			<div className="app__specialmenu-menu_wine flex__center">
				<p className="app__specialmenu-menu_heading">Ramadan Special</p>
				<div className="app__specialmenu_menu_items">
					{data.ramadanDeserts.map((ramadanDesert, index) => (
						<MenuItem
							key={ramadanDesert.title + index}
							title={ramadanDesert.title}
							price={ramadanDesert.price}
							tags={ramadanDesert.tags}
						/>
					))}
				</div>
			</div>

			<div className="app__specialmenu-menu_img">
				<img src={images.ramadan} alt="menu-img" />
			</div>
			<div className="app__specialmenu-menu_cocktail flex-center">
				<p className="app__specialmenu-menu_heading">Traditional Dish</p>
				<div className="app__specialmenu_menu_items">
					{data.EthiopianFoods.map((EthiopianFood, index) => (
						<MenuItem
							key={EthiopianFood.title + index}
							title={EthiopianFood.title}
							price={EthiopianFood.price}
							tags={EthiopianFood.tags}
						/>
					))}
				</div>
			</div>
		</div>
		<div style={{ marginTop: 15 }}>
			<button type="button" className="custom__button">
				See More
			</button>
		</div>
	</div>
);
export default SpecialMenu;
