import React from "react";
// import classes "./AddUser.module.css"

// all imports happen above

const addUserHandler = (e) => {
  e.preventDefault();
};
const AddUser = () => {
  return (
    <form action="" onSubmit="addUserHandler">
      <label htmlFor="username">Enter your Name</label>
      <input id="username" type="text" name="" />
      <label htmlFor="age">Enter your age</label>
      <input id="age" type="number" />
      <button type="submit">Add user</button>
    </form>
  );
};

export default AddUser;
