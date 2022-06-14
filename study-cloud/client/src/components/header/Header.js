import "./Header.css";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Popover,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useState } from "react";
import { useNavigate } from "react-router";
const Header = (props) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleUserNameClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function logoutHandler() {
    navigate("/login", {});
  }

  return (
    <div className="header">
      <img
        src={require("../../assets/cloud_icon.png")}
        alt="cloud icon"
        className="cloud-icon"
      />
      <span className="header-title-text">Study Cloud</span>
      {/* <span className="logged-user-name">Akshay Chavan</span> */}
      <div className="logged-user-name" onClick={handleUserNameClick}>
        {props.loggedUserDetails.name}
        <ArrowDropDownIcon sx={{ verticalAlign: "middle" }} />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 1.5 }} onClick={logoutHandler}>
          Logout
        </Typography>
      </Popover>
    </div>
  );
};

export default Header;
