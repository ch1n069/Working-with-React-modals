import React from "react";
import classes from "./Card.module.css";

// imports happen above

const Card = (props) => {
  const className = `${classes.card}` + props.className;

  //   /funtions are declared above
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
