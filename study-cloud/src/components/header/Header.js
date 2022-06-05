import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <img
        src={require("../../assets/cloud_icon.png")}
        alt="cloud icon"
        className="cloud-icon"
      />
      <span className="header-title-text">Study Cloud</span>
    </div>
  );
};

export default Header;
