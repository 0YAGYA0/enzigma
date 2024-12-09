import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Temp from "./pages/Temp";
import ApplicationCard from "./components/ApplicationCard";
import TokenGenerator from "./components/TokenGenerator";
import TokenLogin from "./components/TokenLogin";
import OnboardingCard from "./components/OnboardingCard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/apply" element={<ApplicationCard />} />
        <Route path="/token" element={<TokenLogin />} />
        <Route path="/hr" element={<TokenGenerator />} />
        <Route path="/onb" element={<OnboardingCard />} />
      </Routes>
    </div>
  );
}

export default App;
