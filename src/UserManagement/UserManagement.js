// import "./App.css";
import './UserManagement.css';
//
import { useState } from "react";
import TopBar from "./Components/TopBar";
//

function UserManagement(props) {
  const [mode, setMode] = useState("dark");
  let changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <>
    <h2>{props.logindata==null?'no login data':props.logindata}</h2>
      <div className="container">
        <TopBar mode={mode} changeMode={changeMode} />
      </div>
    </>
  );
}

export default UserManagement;
