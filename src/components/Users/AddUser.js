import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
// import classes "./AddUser.module.css"

// all imports happen above

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  // custom functions
  const addUserHandler = (e) => {
    e.preventDefault();
    //   prevent default form behaviour
  };

  const usernameChangedHandler = (e) => {
    setEnteredUsername(e.target.value);
    console.log(e.target.value);
  };

  const ageChangedHandler = (e) => {};

  return (
    <Card className={classes.input}>
      <form action="" onSubmit={addUserHandler}>
        <label htmlFor="username">Enter your Name</label>
        <input
          id="username"
          type="text"
          name=""
          onChange={usernameChangedHandler}
        />
        <label htmlFor="age">Enter your age</label>
        <input id="age" type="number" />
        <Button>Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
