import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import Userslist from "./components/Users/Userslist";
import { useState } from "react-intl";
const users = [];
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge }];
    });
  };

  // functions go above
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <Userslist users={usersList} />
    </div>
  );
}

export default App;
