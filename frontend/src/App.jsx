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
import ApplicationSubmitted from "./pages/ApplicationSubmitted";
import UserDashboard from "./pages/UserDashboard";
import Content from "./layouts/content";
import AllApplications from "./pages/AllApplications";
import UserDetail from "./pages/UserDetail";

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
        <Route path="/confirm" element={<ApplicationSubmitted />} />
        <Route path="/" element={<Content />}>
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/applications" element={<AllApplications />} />
          <Route path="/users" element={<UserDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
