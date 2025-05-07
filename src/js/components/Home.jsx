import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";
import Jumbotron from "./Jumbotron"
import Navbar from "./Navbar"
import Footer from "./Footer"

//create your first component
let cardProps = [{

	title: "Clases de HTML",
	urlImages: "https://picsum.photos/500/300?random=1",
	text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, similique.",
}, {
	title: "Clases de CSS",
	urlImages: "https://picsum.photos/500/300?random=2",
	text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nulla neque.",
}, {
	title: "Clases de Bootstrap",
	urlImages: "https://picsum.photos/500/300?random=8",
	text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus.",
}, {
	title: "Clases de React",
	urlImages: "https://picsum.photos/500/330?random=11",
	text: "Lorem, hola holi ipsum dolor sit amet consectetur adipisicing elit. Minus.",
}]


const Home = () => {
	return (
		<div >
			<Navbar />
			<Jumbotron />
			
			{/*<Card title="Clases de HTML" urlImages="https://picsum.photos/420/300?random=1" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, similique." />
			<Card title="Clases de CSS" urlImages="https://picsum.photos/420/300?random=2" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nulla neque." />
			<Card title="Clases de Bootstrap" urlImages="https://picsum.photos/420/300?random=8" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis recusandae officiis quia culpa architecto!" />
			<Card title="Clases de React" urlImages="https://picsum.photos/420/300?random=4" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel?" />
			<Card title="Clases de JS" urlImages="https://picsum.photos/420/300?random=5" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel?" /> */}

			<div className="row d-flex justify-content-center">

				{

					cardProps.map((cardInfo, index) => {
						return <Card title={cardInfo.title} urlImages={cardInfo.urlImages} text={cardInfo.text} key={index} />
					})
				}
			</div>

			<Footer />
		</div>

	);
};

export default Home;






