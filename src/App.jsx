import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import HomePage from './pages/HomePage';
// import CoursesPage from './pages/CoursesPage';
import ReferPage from "./pages/ReferPage";
// import RewardsPage from './pages/RewardsPage';
// import AboutPage from './pages/AboutPage';
// import LoginPage from './pages/LoginPage';
// import TryForFreePage from './pages/TryForFreePage';
import "./App.css";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";
import Signup from "./pages/Signup";


const App = () => {
  return (
    <div className="App">
      <Announcement/>
      <Navbar />
      <Routes>
        {/* <Route path="/" exact component={HomePage} /> */}
        {/* <Route path="/courses" component={CoursesPage} /> */}
        <Route path="/refer" element={<ReferPage />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/rewards" component={RewardsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/try-for-free" component={TryForFreePage} /> */}
      </Routes>
    </div>
  );
};

export default App;
