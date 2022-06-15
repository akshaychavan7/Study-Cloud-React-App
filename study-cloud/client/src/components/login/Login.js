import "./Login.css";
import React, { useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useScript } from "../../hooks/useScript";
import jwt_deocde from "jwt-decode";
import config from "../../configurations/config";

const Login = () => {
  const googlebuttonref = useRef();
  const [user, setuser] = useState(false);
  const navigate = useNavigate();

  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
    console.log(payload);
    setuser(payload);
  };

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: config.google_signin3.client_id,
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      theme: "outline",
      size: "large",
    });
    // window.google.accounts.id.prompt(); // also display the One Tap dialog
  });

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://raw.githubusercontent.com/AkshayChavan7/Study-Cloud-React-App/master/study-cloud/client/src/assets/clouds.png" +
          ")",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: "1px solid #e9e9e9",
          width: "320px",
          margin: "auto",
          // display: "flex",
          height: "340px",
          background: "white",
          justifyContent: "center",
          // alignItems: "center",
          boxShadow: "rgb(99 99 99 / 20%) 0px 2px 8px 0px",
          borderRadius: "9px",
          // backgroundImage:
          //   "url(" +
          //   "https://raw.githubusercontent.com/AkshayChavan7/Study-Cloud-React-App/master/study-cloud/client/src/assets/yellow-logo.jpeg" +
          //   ")",
        }}
      >
        <img
          src={require("../../assets/logo1.png")}
          className="login-page-logo"
        />
        <div className="button-container-div">
          <div ref={googlebuttonref}></div>
          {user &&
            navigate("/Study-Cloud-React-App/ace", { state: { user: user } })}
        </div>
        <p className="copyright-text">©2022 Akshay Chavan</p>
      </div>
    </div>
  );
};

export default Login;
