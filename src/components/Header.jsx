import React from "react";
import reactimg from "../assets/react-core-concepts.png";
import re2 from "../assets/re-2.png";
import re3 from "../assets/re-3.png";
import "./Header.css";

const randomImg = [reactimg, re2, re3];
function getRandomImg(im) {
  return Math.floor(Math.random() * (im + 1));
}

const randomDescription = ["Fundamental", "Crucial", "Core"];
function getRandomDescription(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  const rmImg = randomImg[getRandomImg(2)];
  const randomDesc = randomDescription[getRandomDescription(2)];
  return (
    <header>
      <img src={rmImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDesc} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
