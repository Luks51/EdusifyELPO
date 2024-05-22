import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect } from "react";

import AuthContextProvider from "./pages/contexts/AuthContext";

import ProtectedRoutes from "./pages/ProtectedRoutes";
import ProtectedRoutesAfter from "./pages/ProtectedRoutesAfter";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Learn from "./pages/Learn";
import Profile from "./pages/Profile";
import ProfilePublic from "./pages/ProfilePublic";
import NewProject from "./pages/NewProject";
import Project from "./pages/Project";
import SearchPage from "./pages/SearchPage";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    window.__be = window.__be || {};
    window.__be.id = "664cf27c77ef7800078f04c1";

    script.src = "https://cdn.chatbot.com/widget/plugin.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route element={<AboutUs />} exact path="/about" />
            <Route element={<Learn />} exact path="/learn" />
            <Route element={<SearchPage />} exact path="/search/:query" />
            <Route element={<PrivacyPolicy />} exact path="/privacy-policy" />
            <Route element={<FAQ />} exact path="/faq" />
            <Route element={<Features />} exact path="/features" />
            <Route element={<Contact />} exact path="/contact" />
            <Route element={<ProtectedRoutesAfter />}>
              <Route path="/login" exact element={<Login />} />
              <Route path="/signup" exact element={<Registration />} />
              <Route
                path="/forgot-password"
                exact
                element={<ForgotPassword />}
              />
              <Route
                path="/reset-password/:id/:accessToken"
                exact
                element={<ResetPassword />}
              />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route element={<Profile />} path="/profile" />
              <Route element={<ProfilePublic />} path="/profile/:username" />
              <Route element={<NewProject />} path="/newproject" />
              <Route element={<Project />} path="/project/:id" />
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
