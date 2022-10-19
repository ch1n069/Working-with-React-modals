import React from "react";
import Card from "../UI/Card";

const Userslist = (props) => {
  return (
    <Card>
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
