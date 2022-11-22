/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";


function ACard(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} alt="description of image"></img>
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">Viewdsfsd Recipe</button>
    </div>
    
  );
}

export default ACard;
