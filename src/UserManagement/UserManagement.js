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
  console.log('data from welcome => ',props.logindata);
  return (
    <>
    <h2>{props.logindata==null?'nothing':props.logindata.uemail}</h2>
    <h2>{props.logindata==null?'nothing':props.logindata.upass}</h2>
      <div className="container">
        <TopBar mode={mode} changeMode={changeMode} />
      </div>
    </>
  );
}

export default UserManagement;
