import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding.jsx";
import Login from "./pages/login.jsx";
import Home from "./pages/Home.jsx";
import Placeholder from "./pages/Placeholder.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Onboarding />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/categories" element={<Placeholder title="Categories" />} />
          <Route path="/cart" element={<Placeholder title="Cart" />} />
          <Route path="/profile" element={<Placeholder title="Profile" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;