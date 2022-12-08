import React from "react";
import "./All.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="changeable">
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
