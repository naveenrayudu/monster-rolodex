import React from "react";
import "./card-list.style.css";
import CardItem from "../card-item/card-item.component";

const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <CardItem key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
