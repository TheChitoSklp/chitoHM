import logo from "./logo.svg";
import "./App.css";
import CounterWithUseState from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/useContext";
import Contact2 from "./pages/Contact2";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterWithUseState message="hola welcome props" name="chito" />
        <Router>
          <div>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/contact"}>useContext</Link>
              </li>
              <li>
                <Link to={"/contact2"}>useReduce</Link>
              </li>
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact2" element={<Contact2 />} />
            <Route path="/profile/:name" element={<Profile />} />
          </Routes>
        </Router>
      </header>

    </div>
  
  );
}

export default App;
