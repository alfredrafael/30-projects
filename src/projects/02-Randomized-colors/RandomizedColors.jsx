import React from "react";
import Title from "../components/SomeTitle";

export default function RandomizedColors() {
  function handleClick(event) {
    console.log(event.target);
  }

  const handleSecondClick = (eventOrThingClicked) => {
    console.log("Second click", eventOrThingClicked.target);
    console.log(getRandomColor());
    let myProjectBody = document.querySelector("body");
    myProjectBody.style.background = getRandomColor();
    eventOrThingClicked.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let alphanumbericOptions = "0123456789ABCDEF";
    let toBeColor = "#";

    for (let i = 0; i < 6; i++) {
      toBeColor += alphanumbericOptions[Math.floor(Math.random() * 16)];
    }
    return toBeColor;
  }

  return (
    <div className="container m-auto text-center">
      <Title text={"Randomized Colors"} classes={"mb-4"} />
      <button
        className="btn btn-danger"
        onClick={(event) => handleClick(event)}
      >
        Click me
      </button>{" "}
      <button className="btn btn-success" onClick={handleSecondClick}>
        Click me
      </button>
      <button className="btn btn-primary">Click me</button>
      <button className="btn btn-warning">Click me</button>
    </div>
  );
}
