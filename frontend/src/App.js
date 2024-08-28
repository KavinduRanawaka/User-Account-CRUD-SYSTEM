import React from "react";
import Home from "./Components/Home/Home";
import './App.css';
import { Route,Routes } from "react-router-dom";
import AddUser from "./Components/Add User/AddUser";
import Users from "./Components/UserDetails/Users";

function App() {
  return (
    <div>
     <Home/>
     <React.Fragment>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mainhome" element={<Home />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/userdetails" element={<Users />} />
      </Routes>
     </React.Fragment>
    </div>
  );
}

export default App;