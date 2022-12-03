import React, { useState } from "react";
import "./Forms.css";
import Video from "./Video";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
//
import ToastConponent from "./ToastConponent";
//importing router
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

export default function Forms() {
  //
  const [registeredUsers, setRegisteredUsers] = useState(null);
  let getRegisteredUsers = (data) => {
    setRegisteredUsers(data);
  };
  //
  const [toastmsg, setToastmsg] = useState("");
  const [toast, setToast] = useState(false);

  let toaster = (msg) => {
    setToastmsg({
      msg: msg
    });
      setToast(true);
  }
  return (
    <Router>
      <div id="mainContainer">
      <Video />
      <div className="overlaidContent">
        <Topbar />
        <Navbar registeredUsers={registeredUsers} />

        
        <Routes>
        <Route exact path="/" element={<LoginForm registeredUsers={registeredUsers} />} />
        <Route exact path="/signup" element={<SignUpForm toaster={toaster} getRegisteredUsers={getRegisteredUsers} />} />
        {/* <Route exact path="/" element={<SignUpForm toaster={toaster} getRegisteredUsers={getRegisteredUsers} />} /> */}

        <Route path="*" element={<NoPage />} />
        </Routes>
        {/* <ToastConponent toast={toast} setToast={setToast} toastmsg={toastmsg} /> */}
        {/* <button onClick={() => toaster("just checking it")}>toaster</button> */}
      </div>
    </div>
    </Router>
  );
}

function NoPage(){
  return <h2 style={{color:'white',textAlign:'center'}} className='mt-5'>404 ,Not found</h2>
}