import React from "react";

import "./card-item.style.css";

const CardItem = props => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=240x240`}
        alt="Monster"
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default CardItem;
