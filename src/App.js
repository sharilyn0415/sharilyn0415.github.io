import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./pages/components/nav.jsx";
import Home from "./pages/home.jsx";
import Progress from "./pages/demo.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
