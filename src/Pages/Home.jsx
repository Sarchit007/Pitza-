import React from "react";
import Bannerimage from "../assets/PIZZA.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Bannerimage})` }}>
      <div className="headercont">
        <h1>Pitza</h1>
        <p>EAT GOOD</p>
        <Link to="/menu">
          <button>order now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
