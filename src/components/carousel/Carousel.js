import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
return (
	<div className="row">
	<div id="carousel-container">
		<div className="carousel-inner">
		<div style={{height:'500px'}}>
			
	<Carousel>
		
		<Carousel.Item interval={3000}>
		<img
			className="d-block w-100"
src="https://images-na.ssl-images-amazon.com/images/I/B1mLh5jQ2AS._SL1500_.jpg"
			alt="Alamo"
		/>
		<Carousel.Caption>
			<h3>The Alamo</h3>
			<p>The battle ground of Texas and the most historic site in the city.</p>
		</Carousel.Caption>
		</Carousel.Item>
		
		<Carousel.Item interval={3000}>
		<img
			className="d-block w-100"
src="https://upload.travelawaits.com/ta/uploads/2021/04/the-san-antonio-river-walk-inb5a0a4.jpg"
			alt="River Walk"
		/>
		<Carousel.Caption>
			<h3>River Walk San Antonio</h3>
			<p>Our biggest tourist attraction</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
		<img
			className="d-block w-100"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfh_uB-UjsorXy2yQj5-u5sX7HvorcoMOzA&usqp=CAU"
			alt="Spurs"
		/>
		<Carousel.Caption>
			<h3>San Antonio Spurs</h3>
			<p>Our Championship NBA team.</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
	</div>
	</div>
	</div>
);
}
