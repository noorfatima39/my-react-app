import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>

      <div className="main-layout">

        <Sidebar />

        <div className="content-area">

          <Navbar />

          <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/posts" element={<Posts />} />

            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/users" element={<Users />} />
            <Route  path="/users/:id" element={<UserDetails />} />
            <Route path="*" element={<NotFound />} />

          </Routes>

          <Footer />

        </div>

      </div>

    </BrowserRouter>
  );
}