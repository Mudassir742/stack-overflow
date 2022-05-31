import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*project imports*/
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import QuestionDetail from "./components/QuestionDetail/QuestionDetail";
import UserProfile from "./components/UserProfile/UserProfile";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/signup"
            element={<Signup profile={false} title="Sign-Up" />}
          />
          <Route
            path="/profile"
            element={<Signup profile={true} title="Edit Profile" />}
          />
          <Route path="/question" element={<QuestionDetail />} />
          <Route path="/account" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
