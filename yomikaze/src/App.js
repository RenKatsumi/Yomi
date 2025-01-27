// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Profiles from "./pages/Profiles";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:uid" element={<Profile />} /> 
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
   
  );
}

export default App;
