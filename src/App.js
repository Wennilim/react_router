import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contactus' element={<ContactUs />} ></Route>
        <Route path='/signup' element={<SignUp />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
