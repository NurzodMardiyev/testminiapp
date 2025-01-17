// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import useTelegramUser from "./useTelegramUser";
import Landing from "./components/Landing.jsx";
useTelegramUser;
import "./App.css";
import Country from "./components/Country.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/country/:id" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
