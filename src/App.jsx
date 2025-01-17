// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import useTelegramUser from "./useTelegramUser";
import Landing from "./components/Landing.jsx";
useTelegramUser;
import "./App.css";
import Country from "./components/Country.jsx";
import { useEffect, useState } from "react";
function App() {
  const user = useTelegramUser();

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (user?.id % 2 !== 0) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [user]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing dark={isDark} />} />
        <Route path="/country/:id" element={<Country dark={isDark} />} />
      </Routes>
    </div>
  );
}

export default App;
