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
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    //   prevent default form behaviour
    console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangedHandler = (e) => {
    setEnteredUsername(e.target.value);
    console.log(e.target.value);
  };

  const ageChangedHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form action="" onSubmit={addUserHandler}>
        <label htmlFor="username">Enter your Name</label>
        <input
          value={enteredUsername}
          id="username"
          type="text"
          name=""
          onChange={usernameChangedHandler}
        />
        <label>Enter your age</label>
        <input type="number" onChange={ageChangedHandler} value={enteredAge} />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
