import React from "react";
import Multipizza from "../assets/multiplePizzas.jpeg";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Multipizza})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          optio qui veritatis quam iste vel sed, laudantium at, quisquam
          molestias praesentium nisi adipisci, rem voluptate nam. Nesciunt a
          natus asperiores quaerat modi minima dolor autem, assumenda fugiat
          consequatur est! Unde dignissimos adipisci omnis cupiditate aspernatur
          voluptatibus optio, quis reiciendis culpa.
        </p>
      </div>
    </div>
  );
}

export default About;
