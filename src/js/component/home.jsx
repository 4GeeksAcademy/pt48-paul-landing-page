import React, { useState } from "react";
import '../../styles/home.css'

const Home = () => {
    const [car, setCar] = useState({
        backgroundImage: "",
        model: "BMW",
        mph: "1.9s",
        speed: "200 mph",
        range: "396 mi"
    });

    const cars = {
        BMW1: {
            backgroundImage: "url(https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            model: "BMW Coupe",
            mph: "1.5s",
            speed: "300 mph",
            range: "400 mi"
        },
        BMW2: {
            backgroundImage: "url(https://images.unsplash.com/photo-1530538604540-de0436821dc9?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            model: "BMW BRRR",
            mph: "1.7s",
            speed: "350 mph",
            range: "500 mi"
        },
		BMW3: {
			backgroundImage: "url(https://images.unsplash.com/photo-1631222775174-38e7bc8ff7c9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            model: "BMW I8",
            mph: "3.7s",
            speed: "250 mph",
            range: "700 mi"
        }
    };

    const handleClick = (carName) => {
        setCar(cars[carName]);
    };

    return (
        <div className="header" id="header" style={{backgroundImage: car.backgroundImage}}>
            <nav>
                <div className="logo">
                    <h1>{car.model}</h1>
                </div>
                <ul>
                    <li><a href="#" onClick={() => handleClick("BMW1")}>BMW Coupe</a></li>
                    <li><a href="#" onClick={() => handleClick("BMW2")}>BMW BRRR</a></li>
					<li><a href="#" onClick={() => handleClick("BMW3")}>BMW I8</a></li>
                </ul>
                <a href="#" className="btn">Reserve Now</a>
            </nav>
            <div className="info">
                <div>
                    <h2>{car.mph}</h2>
                    <p>60 mph</p>
                </div>
                <div>
                    <h2>{car.speed}</h2>
                    <p>Top Speed</p>
                </div>
                <div>
                    <h2>{car.range}</h2>
                    <p>Max Range</p>
                </div>
                <div className="line">
                </div>
                <div>
                    <h2>{car.model}</h2>
                </div>
            </div>
        </div>
    )
}
export default Home;