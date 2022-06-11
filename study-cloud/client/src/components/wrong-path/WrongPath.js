import "./WrongPath.css";

const WrongPath = () => {
  return (
    <div>
      <div className="wrongpath-message">
        Hey, this is not the page you were trying to open, right?
      </div>
      <span className="vertical-center">
        <img src={require("../../assets/robot.png")} className="robo-image" />
      </span>
    </div>
  );
};

export default WrongPath;
