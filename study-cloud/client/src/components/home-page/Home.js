import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/Study-Cloud-React-App/login", { state: {} });
  }, []);

  return (
    <div>
      <p>Welcome to Study Cloud!</p>
      <p>Redirecting to login page.</p>
    </div>
  );
};

export default Home;
