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
      }}
    >
      <div
        style={{
          border: "1px solid #e9e9e9",
          width: "384px",
          margin: "auto",
          display: "flex",
          height: "500px",
          background: "white",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "rgb(99 99 99 / 20%) 0px 2px 8px 0px",
          borderRadius: "9px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div ref={googlebuttonref}></div>
          {user && navigate("/ace", { state: { user: user } })}
        </div>
      </div>
    </div>
  );
};

export default Login;
