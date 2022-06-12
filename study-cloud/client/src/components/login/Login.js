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
    console.log("test->", window.google.accounts);
    // window.google.accounts.id.prompt(); // also display the One Tap dialog
  });

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
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
  );
};

export default Login;
