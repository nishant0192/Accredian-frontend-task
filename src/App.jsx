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


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" exact component={HomePage} /> */}
        {/* <Route path="/courses" component={CoursesPage} /> */}
        <Route path="/refer" element={<ReferPage />} />
        {/* <Route path="/rewards" component={RewardsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/try-for-free" component={TryForFreePage} /> */}
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
