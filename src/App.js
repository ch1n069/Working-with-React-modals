import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import Userslist from "./components/Users/Userslist";

function App() {
  return (
    <div>
      <AddUser />
      <Userslist />
    </div>
  );
}

export default App;
