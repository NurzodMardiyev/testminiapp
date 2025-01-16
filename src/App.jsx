import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [userId, setUserId] = useState(null);
  const [environment, setEnvironment] = useState("");

  useEffect(() => {
    // Telegram SDK orqali user ID-ni olish
    const initData = window.Telegram.WebApp.initDataUnsafe; // Telegram SDK
    console.log(initData);
    const id = initData?.user?.id;

    if (id) {
      setUserId(id);

      // Toq/juft tekshirish
      if (id % 2 === 0) {
        setEnvironment("Juft muhit");
      } else {
        setEnvironment("Toq muhit");
      }
    }
  }, []);

  if (!userId) {
    return <div>Loading...</div>; // User ma'lumotlari yuklanayotganida ko'rsatiladi
  }

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: environment === "Juft muhit" ? "#ADD8E6" : "#FFCCCB", // Ranglar
      }}
    >
      <h1>Salom, {environment}!</h1>
      <p>
        Sizning Telegram ID: <strong>{userId}</strong>
      </p>
      <p>
        Siz uchun <strong>{environment}</strong> tayyorlandi.
      </p>
    </div>
  );
}

export default App;
