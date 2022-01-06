import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Profile from "./pages/profile/Profile";


function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
  );
}

export default App;
