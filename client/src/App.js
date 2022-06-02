/*project imports*/
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import QuestionDetail from "./components/QuestionDetail/QuestionDetail";
import UserProfile from "./components/UserProfile/UserProfile";
import Router from "./routes/routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
