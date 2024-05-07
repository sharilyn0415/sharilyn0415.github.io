import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/components/nav.jsx";
import Home from "./pages/home.jsx";
import Progress from "./pages/progress.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
