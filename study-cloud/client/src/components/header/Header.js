import "./Header.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Header = (props) => {
  return (
    <div className="header">
      <img
        src={require("../../assets/cloud_icon.png")}
        alt="cloud icon"
        className="cloud-icon"
      />
      <span className="header-title-text">Study Cloud</span>
      {/* <span className="logged-user-name">Akshay Chavan</span> */}
      <div className="logged-user-name">{props.loggedUserDetails.name}</div>
    </div>
  );
};

export default Header;
