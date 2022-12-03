// import "./App.css";
import './UserManagement.css';
//
import { useState } from "react";
import TopBar from "./Components/TopBar";
//

function UserManagement() {
  const [mode, setMode] = useState("dark");
  let changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="container">
        <TopBar mode={mode} changeMode={changeMode} />
      </div>
    </>
  );
}

export default UserManagement;
