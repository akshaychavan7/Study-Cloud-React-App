import "./App.css";
import Main from "./components/Main";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="app-body">
      <Main loggedUserDetails={location?.state?.user} />
    </div>
  );
}

export default App;
