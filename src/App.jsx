import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReferPage from "./pages/ReferPage";
import "./App.css";
import Announcement from "./components/Announcement";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


const App = () => {
  return (
    <div className="App">
      <Announcement/>
      <Navbar />
      <Routes>
        <Route path="/refer" element={<ReferPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
