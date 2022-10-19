import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const Userslist = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Userslist;
