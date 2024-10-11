import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Aside from "./components/Aside";
import Search from "./pages/Search";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Post from "./components/Post";
import OnePost from "./pages/OnePost";

function App() {
  const location = useLocation(); // Get current route

  // Define routes where the sidebar should be hidden
  const hideSidebarRoutes = ["/login", "/signup"];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {!hideSidebarRoutes.includes(location.pathname) && <Aside />}

      <div className="flex-1 bg-myblack pt-1">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/activity" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/post" element={<OnePost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
