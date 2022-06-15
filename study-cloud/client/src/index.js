import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home-page/Home";
import Login from "./components/login/Login";
import WrongPath from "./components/wrong-path/WrongPath";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Study-Cloud-React-App" element={<Home />} />
      <Route path="Study-Cloud-React-App/ace" element={<App />} />
      <Route path="Study-Cloud-React-App/login" element={<Login />} />
      <Route path="*" element={<WrongPath />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
