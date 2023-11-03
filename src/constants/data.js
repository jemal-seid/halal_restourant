import images from "./images";

const ramadanDeserts = [
	{
		title: "Baklava",
		price: "$20",
		tags: "layers of sugary cinnamon|spiced nut mixture|topes syrup flavour",
	},
	{
		title: "Sanbusa",
		price: "$5",
		tags: "triangle-shaped dough|lentil filling or meat|deep fried",
	},
	{
		title: "Shorba/special soup",
		price: "$10",
		tags: "wheat or barley|lamb bones",
	},
	{
		title: "Mandi",
		price: "$15",
		tags: " Fried rice| meat (lamb, camel, goat or chicken)|Spices",
	},
];

const EthiopianFoods = [
	{
		title: "Tibs",
		price: "$25",
		tags: "small cubes of beef|simmered with onion,garlic,chilies,rosemary|served with Injera",
	},
	{
		title: "Doro Wet",
		price: "$50",
		tags: "crimson-colored stew of chicken|spicy mixture of berbere|Hard-boiled eggs|served with Injera",
	},
	{
		tite: "Chechebsa",
		price: "$20",
		tags: "shredded and lightly fried injera or bread|sauce redolent of berbere|served for breakfast",
	},
	{
		title: "Kitfo",
		price: "$50",
		tags: "Bold flavor and luxurious texture|minced raw lean beef|Spices",
	},
];

const certificates = [
	{
		imgUrl: images.award01,
		title: " Halal Research Council",
		subtitle: "Certificate for Slaughtering process for Halal food",
	},
	{
		imgUrl: images.award02,
		title: "FDA Food Registration",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
	{
		imgUrl: images.award03,
		title: "Hospitality",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
	{
		imgUrl: images.award02,
		title: "Outstanding Serve",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
];

export default { ramadanDeserts, EthiopianFoods, certificates };
