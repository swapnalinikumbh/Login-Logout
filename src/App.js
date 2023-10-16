import React from "react";
import Login from "./component/Login";
import "./App.css";
import Logout from "./component/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./featurs/userSlice";

const App = () => {
  const user = useSelector(selectUser);
  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default App;
