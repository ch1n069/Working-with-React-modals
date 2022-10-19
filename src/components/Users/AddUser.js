import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
// import classes "./AddUser.module.css"

// all imports happen above

const addUserHandler = (e) => {
  e.preventDefault();
  //   prevent default form behaviour
};
const AddUser = () => {
  return (
    <Card className={classes.input}>
      <form action="" onSubmit={addUserHandler}>
        <label htmlFor="username">Enter your Name</label>
        <input id="username" type="text" name="" />
        <label htmlFor="age">Enter your age</label>
        <input id="age" type="number" />
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};

export default AddUser;
