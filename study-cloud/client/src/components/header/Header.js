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
      <div>
        <FormControl
          variant="standard"
          className="logged-user-name"
          sx={{ border: "none" }}
        >
          <Select
            className="select-class"
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            sx={{ color: "white", border: "none" }}
            defaultValue={props.loggedUserDetails.name}
            onChange={() => {
              console.log("changed");
            }}
          >
            <MenuItem
              value={props.loggedUserDetails.name}
              sx={{ border: "none" }}
            >
              {props.loggedUserDetails.name}
            </MenuItem>
            <MenuItem value={"Logout"}>Logout</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Header;
