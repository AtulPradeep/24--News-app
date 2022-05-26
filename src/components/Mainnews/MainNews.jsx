import React from "react";
import "./Mainnews.css";

function MainNews({ title, image, description, url }) {
  //Displaying the main news card
  return (
    <div className="w">
      <h1>{title}</h1>
      <img src={image} alt="Image  Loding..."></img>
      <br></br>
      <p>{description}</p>
      <a href={url}> Read more </a>
    </div>
  );
}

export default MainNews;
